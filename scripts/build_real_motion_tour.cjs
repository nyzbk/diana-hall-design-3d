#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = '/home/ubuntu/kontora-site10k/diana-hall-design-3d';
const KEYFRAMES_DIR = path.join(PROJECT_DIR, 'assets/keyframes');
const CLIPS_DIR = path.join(PROJECT_DIR, 'assets/clips');
const FRAMES_DIR = path.join(PROJECT_DIR, 'public/frames');
const SEG1_DIR = path.join(PROJECT_DIR, 'assets/temp_seg1');
const SEG2_DIR = path.join(PROJECT_DIR, 'assets/temp_seg2');
const SEG3_DIR = path.join(PROJECT_DIR, 'assets/temp_seg3');
const MASTER_VIDEO = path.join(PROJECT_DIR, 'assets/master_spatial_tour.mp4');
const ZIP_FILE = path.join(PROJECT_DIR, 'public/frames.zip');

[CLIPS_DIR, FRAMES_DIR, SEG1_DIR, SEG2_DIR, SEG3_DIR].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const TARGET_W = 1920;
const TARGET_H = 1080;

function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

async function renderCameraFrame(kfPath, zoom, centerX, centerY) {
  const meta = await sharp(kfPath).metadata();
  const extractW = Math.max(100, Math.min(meta.width, Math.round(meta.width / zoom)));
  const extractH = Math.max(100, Math.min(meta.height, Math.round(meta.height / zoom)));
  
  const idealLeft = Math.round(centerX * meta.width - extractW / 2);
  const idealTop = Math.round(centerY * meta.height - extractH / 2);
  
  const left = Math.max(0, Math.min(meta.width - extractW, idealLeft));
  const top = Math.max(0, Math.min(meta.height - extractH, idealTop));

  return sharp(kfPath)
    .extract({ left, top, width: extractW, height: extractH })
    .resize(TARGET_W, TARGET_H, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.8, m2: 2.0 });
}

async function renderPairMotionClip(segDir, kfA, kfB, segName) {
  console.log(`\n=== Generating Pair Motion Video: ${segName} (60 frames) ===`);
  const framesCount = 60;
  
  for (let i = 0; i < framesCount; i++) {
    const t = i / (framesCount - 1); // 0.0 (Frame 1) to 1.0 (Frame 60)
    
    // Zoom curve:
    // Frame 1 (t=0): zoomA = 1.000, unscaled initial master image
    // Mid (t=0.55): zoomA = 1.500 (smooth forward push)
    // Frame 60 (t=1.0): zoomB = 1.000, unscaled final master image
    let zoomA = t <= 0.55 ? 1.00 + 0.50 * smoothstep(0.0, 0.55, t) : 1.50 + 0.30 * smoothstep(0.55, 0.75, t);
    let zoomB = t <= 0.55 ? 1.60 - 0.30 * smoothstep(0.35, 0.55, t) : 1.30 - 0.30 * smoothstep(0.55, 1.00, t);
    
    // Smooth transition window between t=0.38 and t=0.68
    let alpha = smoothstep(0.38, 0.68, t);
    
    const frameOutPath = path.join(segDir, `frame_${String(i + 1).padStart(4, '0')}.jpg`);
    
    if (alpha <= 0.0001) {
      // 100% Start Image (At i=0, this is 100% pure kfA at zoom 1.000)
      const frameA = await renderCameraFrame(kfA, zoomA, 0.50, 0.52);
      await frameA.jpeg({ quality: 95 }).toFile(frameOutPath);
    } else if (alpha >= 0.9999) {
      // 100% End Image (At i=59, this is 100% pure kfB at zoom 1.000)
      const frameB = await renderCameraFrame(kfB, zoomB, 0.50, 0.52);
      await frameB.jpeg({ quality: 95 }).toFile(frameOutPath);
    } else {
      // Motion-matched portal blend
      const frameA = await renderCameraFrame(kfA, zoomA, 0.50, 0.52);
      const frameB = await renderCameraFrame(kfB, zoomB, 0.50, 0.52);
      
      const rawB = await frameB.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      const dataB = rawB.data;
      const alphaVal = Math.round(alpha * 255);
      
      for (let p = 3; p < dataB.length; p += 4) {
        dataB[p] = Math.round((dataB[p] * alphaVal) / 255);
      }
      
      const overlayB = await sharp(dataB, {
        raw: { width: TARGET_W, height: TARGET_H, channels: 4 }
      }).png().toBuffer();
      
      await frameA
        .composite([{ input: overlayB, blend: 'over' }])
        .jpeg({ quality: 95 })
        .toFile(frameOutPath);
    }
  }
  console.log(`  ✓ Rendered 60 frames in ${segDir}`);
}

async function main() {
  console.log('===============================================================');
  console.log('🎬 BUILDING PAIR-BASED MOTION VIDEOS & MASTER TOUR');
  console.log('===============================================================');
  
  const kf1 = path.join(KEYFRAMES_DIR, 'keyframe_01_4k.jpg');
  const kf2 = path.join(KEYFRAMES_DIR, 'keyframe_02_4k.jpg');
  const kf3 = path.join(KEYFRAMES_DIR, 'keyframe_03_4k.jpg');
  const kf4 = path.join(KEYFRAMES_DIR, 'keyframe_04_4k.jpg');

  // STEP 1: Video 1 from Pair (Keyframe 1 -> Keyframe 2)
  await renderPairMotionClip(SEG1_DIR, kf1, kf2, 'Clip 1: Arrival to Grand Foyer');
  const clip1 = path.join(CLIPS_DIR, 'clip_01_to_02.mp4');
  execSync(`ffmpeg -y -framerate 20 -i "${SEG1_DIR}/frame_%04d.jpg" -c:v libx264 -crf 14 -preset slow -pix_fmt yuv420p "${clip1}"`, { stdio: 'inherit' });
  console.log('  🎥 Video 1 created:', clip1);

  // STEP 2: Video 2 from Pair (Keyframe 2 -> Keyframe 3)
  await renderPairMotionClip(SEG2_DIR, kf2, kf3, 'Clip 2: Grand Foyer to Living Salon');
  const clip2 = path.join(CLIPS_DIR, 'clip_02_to_03.mp4');
  execSync(`ffmpeg -y -framerate 20 -i "${SEG2_DIR}/frame_%04d.jpg" -c:v libx264 -crf 14 -preset slow -pix_fmt yuv420p "${clip2}"`, { stdio: 'inherit' });
  console.log('  🎥 Video 2 created:', clip2);

  // STEP 3: Video 3 from Pair (Keyframe 3 -> Keyframe 4)
  await renderPairMotionClip(SEG3_DIR, kf3, kf4, 'Clip 3: Living Salon to Sunset Terrace');
  const clip3 = path.join(CLIPS_DIR, 'clip_03_to_04.mp4');
  execSync(`ffmpeg -y -framerate 20 -i "${SEG3_DIR}/frame_%04d.jpg" -c:v libx264 -crf 14 -preset slow -pix_fmt yuv420p "${clip3}"`, { stdio: 'inherit' });
  console.log('  🎥 Video 3 created:', clip3);

  // STEP 4: Concatenate videos into ONE Master Spatial Tour Video
  console.log('\n=== STEP 4: Combining Videos into Master Tour Video ===');
  const concatFile = path.join(CLIPS_DIR, 'concat.txt');
  fs.writeFileSync(concatFile, `file '${clip1}'\nfile '${clip2}'\nfile '${clip3}'\n`);
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatFile}" -c copy "${MASTER_VIDEO}"`, { stdio: 'inherit' });
  console.log(`  🎬 Master Tour Video Created: ${MASTER_VIDEO} (${(fs.statSync(MASTER_VIDEO).size / 1024 / 1024).toFixed(2)} MB)`);

  // STEP 5: Slice Master Video into 180 sequential frames
  console.log('\n=== STEP 5: Slicing Master Video into 180 Frames ===');
  execSync(`ffmpeg -y -i "${MASTER_VIDEO}" -vf "fps=20,scale=1920:1080:flags=lanczos" -q:v 2 "${FRAMES_DIR}/frame_%04d.jpg"`, { stdio: 'inherit' });
  
  const frames = fs.readdirSync(FRAMES_DIR).filter(f => f.startsWith('frame_') && f.endsWith('.jpg'));
  console.log(`  ✓ Successfully verified ${frames.length} frames in ${FRAMES_DIR}`);

  // STEP 6: Package frames into ZIP archive using Python
  console.log('\n=== STEP 6: Packaging Frames into ZIP Archive ===');
  execSync(`python3 -c "
import zipfile, os, glob
frames = sorted(glob.glob('${FRAMES_DIR}/frame_*.jpg'))
with zipfile.ZipFile('${ZIP_FILE}', 'w', zipfile.ZIP_DEFLATED) as z:
    for f in frames:
        z.write(f, arcname=os.path.basename(f))
print('ZIP created:', '${ZIP_FILE}', f'{os.path.getsize(\"${ZIP_FILE}\") / 1024 / 1024:.2f} MB')
"`, { stdio: 'inherit' });

  console.log('\n🎉 ALL VIDEO-TO-FRAME PIPELINE STAGES COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Pipeline error:', err);
  process.exit(1);
});
