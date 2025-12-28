self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Permet au navigateur de savoir que l'app peut fonctionner hors-ligne/arrière-plan
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
