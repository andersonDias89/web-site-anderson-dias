const CACHE_PREFIX = "anderson-dias-static";
let CACHE_NAME = `${CACHE_PREFIX}-v1`;

const STATIC_DESTINATIONS = new Set(["script", "style", "image", "font", "worker", "manifest"]);
const STATIC_PATH_MARKERS = ["/_next/static/", "/images/", "/icon.svg", "/manifest.webmanifest"];

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith(`${CACHE_PREFIX}-`) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  const data = event.data;

  if (!data || data.type !== "SW_VERSION" || typeof data.version !== "string") {
    return;
  }

  CACHE_NAME = `${CACHE_PREFIX}-${data.version}`;
});

function shouldCache(request) {
  if (request.method !== "GET") return false;
  if (!STATIC_DESTINATIONS.has(request.destination)) return false;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;

  return STATIC_PATH_MARKERS.some((marker) => url.pathname.includes(marker));
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (!shouldCache(request)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      const networkResponse = await fetch(request);

      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone()).catch(() => {
          // Ignore cache write failures.
        });
      }

      return networkResponse;
    })()
  );
});
