self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

// Cette partie permet de garder le script "vivant" pendant les requêtes API
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request).catch(err => {
        return new Response(JSON.stringify({error: "Offline"}), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
