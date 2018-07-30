const CACHE_NAME  = "brc-pwa";
const CACHE_FILES = [
    '/',
    '/disc/css/mobile.css',
    '/disc/logo/ico.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(CACHE_FILES);
        })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
            return response;
            }
            return fetch(event.request);
        }
        )
    );
});