const CACHE_NAME = 'bsg-player-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Permet de garder le SW éveillé pendant la récupération des flux audio
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
