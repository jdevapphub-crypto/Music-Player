const CACHE_NAME = "music-player-v1";
const urlsToCache = [
  "/Music-Player/",
  "/Music-Player/index.html",
  "/Music-Player/icon.png",
  "/Music-Player/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
