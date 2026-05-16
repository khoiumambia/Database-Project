const CACHE_NAME = 'we-are-muslim-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/shop.html',
  '/products.html',
  '/dashboard.html',
  '/loyalty.html',
  '/affiliate.html',
  '/compare.html',
  '/wishlist.html',
  '/order-tracking.html',
  '/about.html',
  '/contact.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: 'https://via.placeholder.com/192x192?text=WAM',
    badge: 'https://via.placeholder.com/72x72?text=WAM',
    vibrate: [200, 100, 200],
    actions: [
      { action: 'shop', title: 'Shop Now' },
      { action: 'close', title: 'Close' }
    ]
  };
  event.waitUntil(
    self.registration.showNotification('WE ARE MUSLIM', options)
  );
});