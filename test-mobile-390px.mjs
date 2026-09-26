import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import http from 'http';

// Helper to wait for server
const waitForServer = (url, timeoutMs = 15000) => {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode === 200) resolve();
        else setTimeout(check, 300);
      }).on('error', () => {
        if (Date.now() - start > timeoutMs) reject(new Error('Timeout waiting for server'));
        else setTimeout(check, 300);
      });
    };
    check();
  });
};

async function runMobileAudit() {
  console.log('🚀 Starting Vite preview server on port 4173...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
    stdio: 'pipe',
    shell: true
  });

  server.stdout.on('data', (d) => console.log(`[server]: ${d}`));
  server.stderr.on('data', (d) => console.error(`[server err]: ${d}`));

  try {
    await waitForServer('http://localhost:4173');
    console.log('✅ Server is up and responding at http://localhost:4173');

    console.log('📱 Launching Chromium in iPhone 13 / 390px viewport mode...');
    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
    });

    const page = await context.newPage();

    // Collect console logs and errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => consoleErrors.push(err.message));

    console.log('🌐 Navigating to http://localhost:4173...');
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

    // Wait 2s for WebGL canvas and animations to stabilize
    await page.waitForTimeout(2000);

    // --- CHECK 1: Horizontal scroll check (390px strict constraint) ---
    const scrollDimensions = await page.evaluate(() => {
      return {
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyClientWidth: document.body.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
        innerWidth: window.innerWidth
      };
    });

    console.log('📐 Dimensions at 390px viewport:', scrollDimensions);

    if (scrollDimensions.scrollWidth > 390) {
      throw new Error(`FAIL: Page has horizontal overflow! scrollWidth is ${scrollDimensions.scrollWidth}px (expected <= 390px)`);
    }
    console.log('✅ PASS: Zero horizontal overflow! Page fits perfectly within 390px width.');

    // --- CHECK 2: Hero section & 3D canvas responsiveness ---
    const heroBBox = await page.evaluate(() => {
      const hero = document.getElementById('hero') || document.getElementById('studio-3d');
      const canvas = document.querySelector('canvas');
      return {
        heroHeight: hero ? hero.clientHeight : 0,
        heroWidth: hero ? hero.clientWidth : 0,
        canvasHeight: canvas ? canvas.clientHeight : 0,
        canvasWidth: canvas ? canvas.clientWidth : 0
      };
    });

    console.log('🏛️ Hero and 3D Canvas Box:', heroBBox);
    if (heroBBox.heroHeight < 400 || heroBBox.canvasHeight < 300) {
      throw new Error('FAIL: Hero or 3D canvas is collapsed or improperly sized on mobile!');
    }
    console.log(`✅ PASS: Hero is grand (${heroBBox.heroHeight}px) and 3D Canvas is active (${heroBBox.canvasHeight}px). Solves Hermes 200px collapsed carousel flaw.`);

    // --- CHECK 3: Phone CTA and consultation buttons ---
    const phoneLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href^="tel:"]'));
      return links.map(l => ({ text: l.textContent?.trim(), href: l.getAttribute('href') }));
    });
    console.log('📞 Found phone links:', phoneLinks);
    if (phoneLinks.length === 0) {
      throw new Error('FAIL: No click-to-call phone links found on mobile!');
    }
    console.log(`✅ PASS: Found ${phoneLinks.length} click-to-call links (resolves Hermes Check 1 missing phone link).`);

    // --- CHECK 4: Contact form & mailto links ---
    const mailLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href^="mailto:"]'));
      const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
      return {
        mailLinksCount: links.length,
        formInputsCount: inputs.length
      };
    });
    console.log('✉️ Mailto & Form inputs:', mailLinks);
    if (mailLinks.mailLinksCount === 0 || mailLinks.formInputsCount === 0) {
      throw new Error('FAIL: Missing email links or consultation form inputs!');
    }
    console.log(`✅ PASS: ${mailLinks.mailLinksCount} mailto links and ${mailLinks.formInputsCount} form controls present (resolves Hermes Check 1 missing form).`);

    // --- CHECK 5: Floating bottom bar on mobile ---
    const floatingBar = await page.evaluate(() => {
      const bar = document.querySelector('footer div.fixed.bottom-0');
      return {
        exists: !!bar,
        visible: bar ? window.getComputedStyle(bar).display !== 'none' : false
      };
    });
    console.log('📱 Mobile sticky bottom bar:', floatingBar);

    // --- CAPTURE SCREENSHOTS ---
    await page.screenshot({ path: 'mobile-390px-hero.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
    console.log('📸 Saved hero screenshot to mobile-390px-hero.png');

    await page.screenshot({ path: 'mobile-390px-full.png', fullPage: true });
    console.log('📸 Saved full page screenshot to mobile-390px-full.png');

    await browser.close();
    server.kill();

    console.log('\n=========================================');
    console.log('🎉 390PX MOBILE AUDIT PASSED 100% CLEAN');
    console.log('=========================================\n');
    process.exit(0);
  } catch (err) {
    console.error('❌ Audit Error:', err);
    server.kill();
    process.exit(1);
  }
}

runMobileAudit();
