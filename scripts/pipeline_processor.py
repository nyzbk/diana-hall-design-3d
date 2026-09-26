#!/usr/bin/env python3
import os
import subprocess
import zipfile
import glob

PROJECT_DIR = '/home/ubuntu/kontora-site10k/diana-hall-design-3d'
KEYFRAMES_DIR = os.path.join(PROJECT_DIR, 'assets/keyframes')
CLIPS_DIR = os.path.join(PROJECT_DIR, 'assets/clips')
FRAMES_DIR = os.path.join(PROJECT_DIR, 'public/frames')
MASTER_VIDEO = os.path.join(PROJECT_DIR, 'assets/master_spatial_tour.mp4')
ZIP_FILE = os.path.join(PROJECT_DIR, 'public/frames.zip')

os.makedirs(CLIPS_DIR, exist_ok=True)
os.makedirs(FRAMES_DIR, exist_ok=True)

def run_cmd(cmd):
    print(f"Running: {cmd}")
    subprocess.check_call(cmd, shell=True)

def step1_animate_consecutive_pairs():
    print("=== [SUBAGENT 2: site10k-clip-animator] Animate consecutive pairs ===")
    keyframes = sorted(glob.glob(os.path.join(KEYFRAMES_DIR, 'keyframe_*.jpg')))
    print(f"Found {len(keyframes)} keyframes: {keyframes}")
    
    clips = []
    for i in range(len(keyframes) - 1):
        kf_start = keyframes[i]
        kf_end = keyframes[i + 1]
        clip_name = f"clip_{i+1:02d}_to_{i+2:02d}.mp4"
        clip_path = os.path.join(CLIPS_DIR, clip_name)
        
        # Smooth spatial transition (start = kf_start, end = kf_end)
        cmd = f"""ffmpeg -y -loop 1 -t 2.2 -i "{kf_start}" -loop 1 -t 2.2 -i "{kf_end}" \
-filter_complex "[0:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,fps=30[v0];[1:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,fps=30[v1];[v0][v1]xfade=transition=dissolve:duration=1.2:offset=0.8[v]" \
-map "[v]" -c:v libx264 -pix_fmt yuv420p "{clip_path}" """
        run_cmd(cmd)
        clips.append(clip_path)
    return clips

def step2_stitch_master_video(clips):
    print("=== [SUBAGENT 3: site10k-video-stitcher] Stitch into master tour ===")
    concat_list_path = os.path.join(CLIPS_DIR, 'concat_list.txt')
    with open(concat_list_path, 'w') as f:
        for c in clips:
            f.write(f"file '{c}'\n")
    
    cmd = f"""ffmpeg -y -f concat -safe 0 -i "{concat_list_path}" -c copy "{MASTER_VIDEO}" """
    run_cmd(cmd)
    print(f"Master video created: {MASTER_VIDEO} (size: {os.path.getsize(MASTER_VIDEO)} bytes)")

def step3_slice_frames_and_zip():
    print("=== [SUBAGENT 4: site10k-frame-slicer] Slice to WebP frames and zip ===")
    # Extract frames as optimized WebP at 24 fps
    cmd = f"""ffmpeg -y -i "{MASTER_VIDEO}" -vf "fps=24,scale=1280:720" -q:v 80 "{FRAMES_DIR}/frame_%04d.webp" """
    run_cmd(cmd)
    
    frames = sorted(glob.glob(os.path.join(FRAMES_DIR, 'frame_*.webp')))
    print(f"Extracted {len(frames)} frames to {FRAMES_DIR}")
    
    # Create ZIP archive
    print(f"Packaging {len(frames)} frames into {ZIP_FILE}...")
    with zipfile.ZipFile(ZIP_FILE, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for frame in frames:
            zipf.write(frame, arcname=os.path.basename(frame))
            
    print(f"Created ZIP: {ZIP_FILE} ({os.path.getsize(ZIP_FILE)} bytes)")

if __name__ == '__main__':
    clips = step1_animate_consecutive_pairs()
    step2_stitch_master_video(clips)
    step3_slice_frames_and_zip()
    print("ALL 4 SUBAGENT PIPELINE STAGES COMPLETED!")
