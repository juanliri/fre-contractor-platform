/**
 * F.R.E. CONTRACTOR — SERVICE WORKER (v1.0.0)
 * Provides offline shell caching, instant page loads, and native PWA installation support.
 */

const CACHE_NAME = 'fre-contractor-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/booking.html',
  '/store.html',
  '/estimate.html',
  '/portal.html',
  '/bid-portal.html',
  '/about.html',
  '/portfolio.html',
  '/reviews.html',
  '/contact.html',
  '/government-verification.html',
  '/service-interior-painting.html',
  '/service-cabinet-refinishing.html',
  '/service-popcorn-ceiling.html',
  '/service-exterior-painting.html',
  '/service-commercial-retail.html',
  '/service-nycha-housing.html',
  '/css/style.css',
  '/css/animations.css',
  '/js/shared.js',
  '/js/pwa-install.js',
  '/manifest.json',
  '/assets/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[Service Worker] Cache addAll warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-First with Cache Fallback for dynamic navigation, Cache-First for static assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle GET requests within our scope
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // Static Assets (Images, Fonts, CSS, JS) -> Cache First
  if (
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.css')
  ) {
    event.respondWith(
      caches.match(req).then((cached) => {
        return (
          cached ||
          fetch(req).then((response) => {
            if (response.status === 200) {
              const resClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
            }
            return response;
          })
        );
      })
    );
    return;
  }

  // HTML / Pages -> Network First, Fallback to Cache
  event.respondWith(
    fetch(req)
      .then((response) => {
        if (response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(req).then((cached) => {
          return cached || caches.match('/index.html');
        });
      })
  );
});
