const CACHE_NAME = "temperature-converter-v1";

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      console.log("hello ako to si service worker");
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll([
        "/converter.js",
        "/converter.css",
        "/manifest.json",
        "/temperature.png",
        // Add other initial resources to cache here
      ]);
    })()
  );
});

// Intercept fetch requests and serve from cache if available, otherwise fetch from network and cache the response.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const fetchResponse = await fetch(event.request);
        // Save the fetched response to cache
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        // The network request failed, handle this case accordingly
        console.error("Fetch request failed:", e);
        throw e;
      }
    })()
  );
});
