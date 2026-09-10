/**
 * F.R.E. CONTRACTOR — CROSS-PLATFORM PWA INSTALL ENGINE v2.0
 * MOBILE-FIRST: Auto-fires native install prompt on Android.
 * iOS: Simple bottom sheet. Desktop: Full tabbed modal.
 */

(function () {
  let deferredPrompt = null;
  let autoPromptFired = false;

  function getClientPlatform() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
    if (/android/i.test(ua)) return 'android';
    if (/Mac|MacIntel/.test(navigator.platform || '') || /Macintosh/.test(ua)) return 'mac';
    return 'windows';
  }

  const currentPlatform = getClientPlatform();
  const isMobile = currentPlatform === 'android' || currentPlatform === 'ios';

  // ── Listen for native browser install prompt ──
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Mark top banner button as ready
    const topBtn = document.getElementById('btn-open-install-modal');
    if (topBtn) topBtn.classList.add('prompt-ready');

    // ✅ MOBILE AUTO-FIRE: On Android, trigger immediately without any modal
    if (currentPlatform === 'android' && !autoPromptFired) {
      autoPromptFired = true;
      // Small delay so page renders first
      setTimeout(() => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(({ outcome }) => {
            console.log('[PWA] Auto-prompt outcome:', outcome);
            deferredPrompt = null;
          });
        }
      }, 1800);
      return; // Don't show modal at all on Android
    }

    // Desktop: show the install button inside the modal
    const modalInstallBtn = document.getElementById('btn-native-install-trigger');
    if (modalInstallBtn) modalInstallBtn.style.display = 'inline-flex';
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] F.R.E. Contractor installed.');
    deferredPrompt = null;
    hideAllInstallUI();
  });

  function hideAllInstallUI() {
    const modal = document.getElementById('fre-install-modal');
    const iosSheet = document.getElementById('fre-ios-install-sheet');
    if (modal) modal.style.display = 'none';
    if (iosSheet) iosSheet.remove();
  }

  // ── iOS Bottom Sheet (simple, clean — NO walls of text) ──
  const IOS_SHEET_HTML = `
  <div id="fre-ios-install-sheet" role="dialog" aria-label="Install App" style="
    position:fixed;bottom:0;left:0;right:0;z-index:20000;
    background:linear-gradient(175deg,rgba(8,22,44,0.99),rgba(3,12,24,0.99));
    border-top:1px solid rgba(245,130,32,0.4);
    border-radius:20px 20px 0 0;
    padding:20px 20px 32px;
    box-shadow:0 -20px 60px rgba(0,0,0,0.8);
    animation:slideUpSheet 0.35s cubic-bezier(0.16,1,0.3,1) both;
  ">
    <style>@keyframes slideUpSheet{from{transform:translateY(100%)}to{transform:translateY(0)}}</style>
    <div style="width:36px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;margin:0 auto 18px;"></div>
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
      <img src="assets/logo.png" style="width:52px;height:52px;border-radius:14px;box-shadow:0 4px 14px rgba(0,0,0,0.5);" alt="FRE">
      <div>
        <div style="font-size:0.72rem;font-weight:800;color:var(--amber,#F58220);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Free App · No App Store</div>
        <div style="font-size:1.15rem;font-weight:900;color:#fff;line-height:1.15;">Install F.R.E. Contractor</div>
      </div>
    </div>
    <p style="font-size:0.86rem;color:#94a3b8;line-height:1.5;margin-bottom:18px;">
      Tap <strong style="color:#fff;">Share</strong> <span style="font-size:1.1em;">⎋</span> then <strong style="color:#fff;">"Add to Home Screen"</strong> to install as a full app — no downloads needed.
    </p>
    <div style="display:flex;gap:10px;">
      <button id="fre-ios-got-it" style="flex:1;background:linear-gradient(135deg,#F58220,#ea580c);color:#fff;border:none;border-radius:12px;padding:14px;font-size:0.96rem;font-weight:900;cursor:pointer;box-shadow:0 6px 20px rgba(245,130,32,0.4);">
        Got It ✓
      </button>
      <button id="fre-ios-dismiss" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);color:#94a3b8;border-radius:12px;padding:14px 18px;font-size:0.9rem;cursor:pointer;">
        Later
      </button>
    </div>
  </div>`;

  // ── Full Desktop Install Modal HTML ──
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
        Instant access to calculators, wholesale materials ordering, project tracking, and offline operation — no App Store required.
      </p>

      <!-- Native 1-Click Install Button -->
      <div id="btn-native-install-wrapper" style="text-align:center;margin-bottom:20px;display:flex;flex-direction:column;align-items:center;gap:10px;">
        <button id="btn-native-install-trigger" class="btn" style="background:linear-gradient(135deg, #F58220 0%, #fbbf24 100%);color:#040d1a;font-weight:900;padding:14px 32px;border-radius:12px;border:none;font-size:1.05rem;box-shadow:0 6px 24px rgba(245,130,32,0.45);cursor:pointer;display:inline-flex;align-items:center;gap:10px;display:none;">
          ⚡ Install App Instantly
        </button>
        <span id="install-feedback-msg" style="font-size:0.78rem;color:#34d399;font-weight:700;display:none;"></span>
      </div>

      <!-- Platform Selection Tabs -->
      <div class="install-tabs">
        <button class="install-tab-btn" data-target="tab-windows">🖥️ Windows (PC)</button>
        <button class="install-tab-btn" data-target="tab-mac">🍎 Mac</button>
        <button class="install-tab-btn" data-target="tab-ios">📱 iPhone</button>
        <button class="install-tab-btn" data-target="tab-android">🤖 Android</button>
      </div>

      <!-- Tab 1: Windows (PC) -->
      <div class="install-tab-content" id="tab-windows">
        <div style="background:rgba(245,130,32,0.1);border:1px solid rgba(245,130,32,0.3);border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <strong style="color:#ffffff;font-size:0.88rem;display:block;">Direct Windows Desktop Launcher:</strong>
            <span style="color:#cbd5e1;font-size:0.78rem;">1-click standalone desktop app — no browser bar, full native speed.</span>
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
          <div class="step-text"><strong>Open Chrome or Edge</strong><span>Visit this site in Google Chrome or Microsoft Edge on your PC.</span></div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Click Install Icon (⊕) in Address Bar</strong><span>Look for the install icon in the top-right of the address bar.</span></div>
        </div>
        <div class="install-step-card">
          <div class="step-num">3</div>
          <div class="step-text"><strong>Click "Install"</strong><span>App opens in its own window with a Desktop &amp; Start Menu shortcut.</span></div>
        </div>
      </div>

      <!-- Tab 2: Mac -->
      <div class="install-tab-content" id="tab-mac">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Safari (macOS Sonoma+)</strong><span>Click <strong>File</strong> ➔ <strong>"Add to Dock..."</strong></span></div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Chrome for Mac</strong><span>Click the ⊕ install icon in the URL bar, or Chrome Menu ➔ "Save and Share" ➔ "Install F.R.E. Contractor"</span></div>
        </div>
      </div>

      <!-- Tab 3: iPhone & iPad (iOS) -->
      <div class="install-tab-content" id="tab-ios">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Open in Safari on iPhone/iPad</strong><span>This site must be open in Apple Safari (not Chrome) for iOS installation.</span></div>
        </div>
        <div class="install-step-card">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Tap Share ⎋ → "Add to Home Screen"</strong><span>Tap the Share icon at the bottom, scroll down, and tap "Add to Home Screen".</span></div>
        </div>
      </div>

      <!-- Tab 4: Android -->
      <div class="install-tab-content" id="tab-android">
        <div class="install-step-card">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Chrome auto-prompted you</strong><span>If you dismissed it, tap the 3-dot menu (⋮) ➔ "Install app" or "Add to Home screen".</span></div>
        </div>
      </div>

      <div style="text-align:center;margin-top:22px;border-top:1px solid rgba(255,255,255,0.08);padding-top:14px;">
        <span style="font-size:0.76rem;color:var(--text-muted);">Zero App Store fees · Instant updates · Works offline · Powered by Titan PWA Engine</span>
      </div>

    </div>
  </div>
  `;

  function initPWA() {
    // Inject full modal for desktop
    if (!document.getElementById('fre-install-modal')) {
      document.body.insertAdjacentHTML('beforeend', INSTALL_MODAL_HTML);
    }

    const modal = document.getElementById('fre-install-modal');
    const openBtns = document.querySelectorAll('#btn-open-install-modal, .btn-trigger-install');
    const closeBtn = document.getElementById('btn-close-install-modal');
    const nativeBtn = document.getElementById('btn-native-install-trigger');

    function openModal() {
      if (!modal) return;
      // iOS: show simple bottom sheet instead of full modal
      if (currentPlatform === 'ios') {
        showIOSSheet();
        return;
      }
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      activateTab('tab-' + currentPlatform);
    }

    function closeModal() {
      if (!modal) return;
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    function showIOSSheet() {
      if (document.getElementById('fre-ios-install-sheet')) return;
      document.body.insertAdjacentHTML('beforeend', IOS_SHEET_HTML);
      document.getElementById('fre-ios-got-it')?.addEventListener('click', () => {
        document.getElementById('fre-ios-install-sheet')?.remove();
      });
      document.getElementById('fre-ios-dismiss')?.addEventListener('click', () => {
        document.getElementById('fre-ios-install-sheet')?.remove();
      });
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
        // On Android, if prompt is still available, fire it directly
        if (currentPlatform === 'android' && deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
          return;
        }
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // Tab button handlers
    document.querySelectorAll('.install-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => activateTab(btn.dataset.target));
    });

    function downloadFile(filename, content, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 300);
    }

    function triggerWindowsBatDownload() {
      // BAT launches site as standalone app (no browser bar) — no "how to" text
      const batContent = `@echo off\r\ntitle F.R.E. Contractor LLC\r\nset URL=https://fre-contractor-platform.vercel.app\r\nwhere msedge >nul 2>&1\r\nif %errorlevel%==0 (\r\n    start "" msedge --app=%URL% --window-size=1280,850\r\n    exit\r\n)\r\nwhere chrome >nul 2>&1\r\nif %errorlevel%==0 (\r\n    start "" chrome --app=%URL% --window-size=1280,850\r\n    exit\r\n)\r\nstart %URL%\r\n`;
      downloadFile('Launch-FRE-Contractor.bat', batContent, 'application/x-bat');
    }

    function triggerWindowsUrlDownload() {
      const urlContent = `[InternetShortcut]\r\nURL=https://fre-contractor-platform.vercel.app/\r\nIconIndex=0\r\n`;
      downloadFile('FRE-Contractor.url', urlContent, 'application/octet-stream');
    }

    const dlBatBtn = document.getElementById('btn-dl-win-bat');
    const dlUrlBtn = document.getElementById('btn-dl-win-url');
    const feedbackMsg = document.getElementById('install-feedback-msg');

    if (dlBatBtn) {
      dlBatBtn.addEventListener('click', () => {
        triggerWindowsBatDownload();
        if (feedbackMsg) { feedbackMsg.textContent = '✅ Launcher downloaded! Double-click to open as desktop app.'; feedbackMsg.style.display = 'block'; }
      });
    }
    if (dlUrlBtn) {
      dlUrlBtn.addEventListener('click', () => {
        triggerWindowsUrlDownload();
        if (feedbackMsg) { feedbackMsg.textContent = '✅ FRE-Contractor.url shortcut downloaded!'; feedbackMsg.style.display = 'block'; }
      });
    }

    // Native install trigger handler
    if (nativeBtn) {
      nativeBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log('[PWA] Install outcome:', outcome);
          deferredPrompt = null;
          closeModal();
        } else if (currentPlatform === 'windows') {
          triggerWindowsBatDownload();
          activateTab('tab-windows');
        } else {
          activateTab('tab-' + currentPlatform);
        }
      });
    }

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('[PWA] SW registered:', reg.scope))
        .catch((err) => console.warn('[PWA] SW registration failed:', err));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPWA);
  } else {
    initPWA();
  }
})();
