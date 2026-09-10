/**
 * F.R.E. CONTRACTOR — CROSS-PLATFORM PWA INSTALL ENGINE
 * Detects Windows, Mac, iOS (iPhone/iPad), and Android.
 * Manages beforeinstallprompt & provides tabbed multi-device installation instructions.
 */

(function () {
  let deferredPrompt = null;

  // Detect Client Operating System & Device
  function getClientPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
    const platform = navigator.platform || '';

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'ios';
    }
    if (/android/i.test(userAgent)) {
      return 'android';
    }
    if (/Mac|MacIntel|MacPPC|Mac68K/.test(platform) || /Macintosh/.test(userAgent)) {
      return 'mac';
    }
    if (/Win32|Win64|Windows|WinCE/.test(platform) || /Windows/.test(userAgent)) {
      return 'windows';
    }
    return 'windows';
  }

  const currentPlatform = getClientPlatform();

  // Listen for browser native install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Highlight top-banner install button if present
    const topBtn = document.getElementById('btn-open-install-modal');
    if (topBtn) {
      topBtn.classList.add('prompt-ready');
    }

    const modalInstallBtn = document.getElementById('btn-native-install-trigger');
    if (modalInstallBtn) {
      modalInstallBtn.style.display = 'inline-flex';
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] F.R.E. Contractor app installed successfully.');
    deferredPrompt = null;
    const modal = document.getElementById('fre-install-modal');
    if (modal) modal.style.display = 'none';
  });

  // Modal HTML Template
  const INSTALL_MODAL_HTML = `
  <div id="fre-install-modal" style="display:none;" role="dialog" aria-modal="true" aria-labelledby="install-modal-title">
    <div class="install-modal-container">
      <button class="install-modal-close" id="btn-close-install-modal" aria-label="Close modal">✕</button>
      
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
        <img src="assets/logo.png" alt="F.R.E. Logo" style="width:52px;height:52px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.5);">
        <div>
          <span class="badge" style="background:rgba(245,130,32,0.15);border-color:rgba(245,130,32,0.35);color:var(--amber);font-size:0.72rem;padding:2px 8px;border-radius:9999px;">Cross-Platform App</span>
          <h2 id="install-modal-title" style="font-size:1.45rem;font-weight:900;color:#fff;margin-top:2px;">Install F.R.E. Contractor App</h2>
        </div>
      </div>

      <p style="color:var(--text-muted);font-size:0.86rem;line-height:1.5;margin-bottom:20px;">
        Install on your computer or mobile device for instant access to instant calculators, wholesale materials ordering, project tracking, and offline operation with zero app store downloads.
      </p>

      <!-- Native 1-Click Install Button & Windows Launcher -->
      <div id="btn-native-install-wrapper" style="text-align:center;margin-bottom:20px;display:flex;flex-direction:column;align-items:center;gap:10px;">
        <button id="btn-native-install-trigger" class="btn" style="background:linear-gradient(135deg, #F58220 0%, #fbbf24 100%);color:#040d1a;font-weight:900;padding:12px 28px;border-radius:12px;border:none;font-size:1rem;box-shadow:0 6px 24px rgba(245,130,32,0.45);cursor:pointer;display:inline-flex;align-items:center;gap:10px;">
          ⚡ Install App Instantly (PWA / Desktop)
        </button>
        <span id="install-feedback-msg" style="font-size:0.78rem;color:#34d399;font-weight:700;display:none;"></span>
      </div>

      <!-- Platform Selection Tabs -->
      <div class="install-tabs">
        <button class="install-tab-btn" data-target="tab-windows">🖥️ Windows (PC)</button>
        <button class="install-tab-btn" data-target="tab-mac">🍎 Mac (macOS)</button>
        <button class="install-tab-btn" data-target="tab-ios">📱 iPhone &amp; iPad</button>
        <button class="install-tab-btn" data-target="tab-android">🤖 Android</button>
      </div>

      <!-- Tab 1: Windows (PC) -->
      <div class="install-tab-content" id="tab-windows">
        <div style="background:rgba(245,130,32,0.1);border:1px solid rgba(245,130,32,0.3);border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <strong style="color:#ffffff;font-size:0.88rem;display:block;">Direct Windows Desktop Launcher:</strong>
            <span style="color:#cbd5e1;font-size:0.78rem;">Download 1-click standalone desktop launcher (no browser bar, native speed).</span>
          </div>
          <div style="display:flex;gap:8px;">
            <button type="button" id="btn-dl-win-bat" class="btn btn-primary" style="font-size:0.78rem;padding:7px 12px;border-radius:8px;">
              💾 Download .bat App
            </button>
            <button type="button" id="btn-dl-win-url" class="btn btn-outline" style="font-size:0.78rem;padding:7px 12px;border-radius:8px;">
              📥 Desktop Shortcut
            </button>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>In Google Chrome or Microsoft Edge:</strong>
            <span>Look at the top address bar on the right side.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>Click the Install Icon:</strong>
            <span>Click the <strong>Install icon (⊕ or computer icon)</strong> in the address bar.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>Click "Install":</strong>
            <span>F.R.E. Contractor will open in its own standalone desktop window and create an icon on your Desktop &amp; Start Menu.</span>
          </div>
        </div>
      </div>

      <!-- Tab 2: Mac (macOS) -->
      <div class="install-tab-content" id="tab-mac">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>In Apple Safari (macOS Sonoma or newer):</strong>
            <span>Click <strong>File</strong> in the top menu bar ➔ select <strong>"Add to Dock..."</strong></span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>In Google Chrome for Mac:</strong>
            <span>Click the <strong>Install icon (⊕)</strong> in the URL bar, or click Chrome menu (⋮) ➔ <em>"Save and Share"</em> ➔ <em>"Install F.R.E. Contractor..."</em></span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>Instant Dock Launch:</strong>
            <span>Launch anytime from your Mac Dock like a native application with dedicated notifications and full offline caching.</span>
          </div>
        </div>
      </div>

      <!-- Tab 3: iPhone & iPad (iOS) -->
      <div class="install-tab-content" id="tab-ios">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>Open in Safari:</strong>
            <span>Ensure you are viewing this website in Apple Safari on your iPhone or iPad.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>Tap the Share Button:</strong>
            <span>Tap the <strong>Share icon (square with arrow pointing up <span style="font-size:1.1rem;">⎋</span>)</strong> at the bottom of the screen.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>Select "Add to Home Screen":</strong>
            <span>Scroll down in the share menu and tap <strong>"Add to Home Screen" <span style="font-size:1.1rem;">⊞</span></strong>, then tap <strong>Add</strong> in the top right.</span>
          </div>
        </div>
      </div>

      <!-- Tab 4: Android -->
      <div class="install-tab-content" id="tab-android">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text">
            <strong>Tap "Install App Instantly" above:</strong>
            <span>Chrome for Android will prompt you to confirm adding F.R.E. Contractor to your app drawer.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text">
            <strong>Or via Browser Menu:</strong>
            <span>Tap the 3 dots (⋮) in the top right corner ➔ select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</span>
          </div>
        </div>
        <div class="install-step-card">
          <div class="step-num">3</div>
          <div class="step-text">
            <strong>Fullscreen App Experience:</strong>
            <span>Opens with zero browser URL bar, custom splash screen, and offline local cache.</span>
          </div>
        </div>
      </div>

      <div style="text-align:center;margin-top:22px;border-top:1px solid rgba(255,255,255,0.08);padding-top:14px;">
        <span style="font-size:0.76rem;color:var(--text-muted);">
          Zero App Store fees · Instant updates · Works offline · Powered by Titan PWA Engine
        </span>
      </div>

    </div>
  </div>
  `;

  function initPWA() {
    // Inject modal into DOM if not present
    if (!document.getElementById('fre-install-modal')) {
      document.body.insertAdjacentHTML('beforeend', INSTALL_MODAL_HTML);
    }

    const modal = document.getElementById('fre-install-modal');
    const openBtns = document.querySelectorAll('#btn-open-install-modal, .btn-trigger-install');
    const closeBtn = document.getElementById('btn-close-install-modal');
    const nativeBtn = document.getElementById('btn-native-install-trigger');

    function openModal() {
      if (!modal) return;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Activate tab based on client platform
      const targetTabId = 'tab-' + currentPlatform;
      activateTab(targetTabId);
    }

    function closeModal() {
      if (!modal) return;
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    function activateTab(tabId) {
      document.querySelectorAll('.install-tab-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.target === tabId);
      });
      document.querySelectorAll('.install-tab-content').forEach((content) => {
        content.style.display = content.id === tabId ? 'block' : 'none';
      });
    }

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    // Tab button handlers
    document.querySelectorAll('.install-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        activateTab(btn.dataset.target);
      });
    });

    function downloadFile(filename, content, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 300);
    }

    function triggerWindowsBatDownload() {
      const batContent = `@echo off\r\ntitle F.R.E. Contractor LLC Desktop App\r\necho Launching F.R.E. Contractor Platform...\r\nwhere msedge >nul 2>&1\r\nif %errorlevel%==0 (\r\n    start msedge --app=https://fre-contractor-platform.vercel.app --window-size=1280,850\r\n    exit\r\n)\r\nwhere chrome >nul 2>&1\r\nif %errorlevel%==0 (\r\n    start chrome --app=https://fre-contractor-platform.vercel.app --window-size=1280,850\r\n    exit\r\n)\r\nstart https://fre-contractor-platform.vercel.app\r\n`;
      downloadFile('Launch-FRE-Contractor.bat', batContent, 'application/x-bat');
    }

    function triggerWindowsUrlDownload() {
      const urlContent = `[InternetShortcut]\r\nURL=https://fre-contractor-platform.vercel.app/\r\nIconIndex=0\r\nIconFile=https://fre-contractor-platform.vercel.app/assets/logo.png\r\n`;
      downloadFile('FRE-Contractor.url', urlContent, 'application/octet-stream');
    }

    const dlBatBtn = document.getElementById('btn-dl-win-bat');
    const dlUrlBtn = document.getElementById('btn-dl-win-url');
    const feedbackMsg = document.getElementById('install-feedback-msg');

    if (dlBatBtn) {
      dlBatBtn.addEventListener('click', () => {
        triggerWindowsBatDownload();
        if (feedbackMsg) {
          feedbackMsg.textContent = '✅ Launch-FRE-Contractor.bat downloaded!';
          feedbackMsg.style.display = 'block';
        }
      });
    }

    if (dlUrlBtn) {
      dlUrlBtn.addEventListener('click', () => {
        triggerWindowsUrlDownload();
        if (feedbackMsg) {
          feedbackMsg.textContent = '✅ FRE-Contractor.url shortcut downloaded!';
          feedbackMsg.style.display = 'block';
        }
      });
    }

    // Native install trigger handler
    if (nativeBtn) {
      nativeBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log('[PWA] User response to install prompt:', outcome);
          deferredPrompt = null;
          closeModal();
        } else if (currentPlatform === 'windows') {
          triggerWindowsBatDownload();
          if (feedbackMsg) {
            feedbackMsg.textContent = '✅ Launch-FRE-Contractor.bat downloaded! Click to open as desktop app.';
            feedbackMsg.style.display = 'block';
          }
          activateTab('tab-windows');
        } else {
          // If native prompt not directly supported (e.g. iOS or already installed)
          activateTab('tab-' + currentPlatform);
        }
      });
    }

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered with scope:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPWA);
  } else {
    initPWA();
  }
})();
