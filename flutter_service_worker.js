'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "5500f4f927c95c9fb93886886af4fd8c",
"assets/AssetManifest.smcbin": "de86c37e156bc70babf9571d3c908a44",
"assets/assets/data/evolution_data.csv": "b52bd0b15b03a3cfd791ba6221f56b54",
"assets/assets/data/evolution_data_v1.csv": "c7490f0374d9bcf9875afe662ff85d28",
"assets/assets/data/params.json": "728988d798519eba579df24b5cef146d",
"assets/assets/images/10a.png": "5d1c7033c315ac1e445099d7376c94e7",
"assets/assets/images/10b.png": "054c2ba6f681eea862cc24b2c4c1eab1",
"assets/assets/images/10c.png": "7cb79766ef10812c3ec037857612eefc",
"assets/assets/images/10d.png": "ab200b70f3a1c5a7b85b464798f0b8f3",
"assets/assets/images/10e.png": "57f3f588fbe74cab79cd2a8df00ba0cb",
"assets/assets/images/12a.png": "3efd0ad619ad7b77e615dbb504e626eb",
"assets/assets/images/12b.png": "3909b53661067131118cd06eafe7da13",
"assets/assets/images/12c.png": "987a41a2fb2228ffc709893f15f3fd64",
"assets/assets/images/12d.png": "fc57c92d1d4ad833683fc1136b92b029",
"assets/assets/images/12e.png": "1f5160b9121fa29b6cc8d8682740e122",
"assets/assets/images/1a.png": "e46050d0d2c9d0beab7e7422c41eb8bb",
"assets/assets/images/1b.png": "1e59300714230793f10928921b65792a",
"assets/assets/images/1c.png": "8e0913dc5efcde229b8f23b01e4fa5a7",
"assets/assets/images/2a.png": "a5a89943a3a16593194f3926a4f4ada5",
"assets/assets/images/2b.png": "4163753708a3b86462841a4587e7855b",
"assets/assets/images/2c.png": "f48924a0a30573abc2ff2a5380cb6f5e",
"assets/assets/images/2d.png": "a4a126ea7662c1d0acd277a801ef4d65",
"assets/assets/images/3a.png": "108af0a8267e4dc822c857c616c802a6",
"assets/assets/images/3b.png": "bad6dd2a0631436b9d150931c514940f",
"assets/assets/images/3c.png": "cb2eeaa6b85e42724d6cfece50428651",
"assets/assets/images/4a.png": "7d279d2f156dd370339fa897db3929c7",
"assets/assets/images/4b.png": "f40c42b44d1e9f2e278c040198859a00",
"assets/assets/images/4c.png": "e411bd28ec814575722191f312e21f7d",
"assets/assets/images/4d.png": "c49f39d1b49b0f6f6ae3abe5e9b3ee49",
"assets/assets/images/4e.png": "dc70e40ae81df20dfce88d185bae36ec",
"assets/assets/images/5a.png": "3293a909c3d892535b055f0e37ef3a0a",
"assets/assets/images/5b.png": "8e46a0ac949e6f8b099840dfdb5d471f",
"assets/assets/images/5c.png": "546268dd3a37638a80c33ce4e53f7c3c",
"assets/assets/images/6a.png": "69bfede916334e79e5ab7bcd6b143d48",
"assets/assets/images/6b.png": "8f9a51139e11c93c57b14ca417046c6a",
"assets/assets/images/6c.png": "abefc77e39a572245f3924db6cc01c1d",
"assets/assets/images/6d.png": "b9242f4da180158262e41b75f41a5c40",
"assets/assets/images/6e.png": "017d5af28819166b33e1ef406d1fa31d",
"assets/assets/images/7a.png": "ec3ee3b48ef80d311ee7db10719a4b92",
"assets/assets/images/7b.png": "75f0ffdb6451e74a3d192314ed43e3d7",
"assets/assets/images/7c.png": "00b8999ceb65139fc60cdb8cb11f3914",
"assets/assets/images/8a.png": "11e80cd84ab4108b9f63d54d6998276d",
"assets/assets/images/8b.png": "d9099fcaaf4997bf7037579f77bf4c92",
"assets/assets/images/8c.png": "d06a395066afc7b9dc47a8e72c52519a",
"assets/assets/images/8d.png": "a7bfadfcaba4fd2871617f6480623c2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "14c0a1f1c6054aea458f25a0d8b2b046",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "9670606808f725b2da9ac1dee45bdefb",
"icons/android-chrome-512x512.png": "86b1386c26c6f28844a500dd1c5d199e",
"icons/apple-touch-icon.png": "41b1d6b1fab43bb9ea4a98f789caaa0b",
"index.html": "aed9c71500f7148cb723da97dd6b5eb3",
"/": "aed9c71500f7148cb723da97dd6b5eb3",
"logo.png": "b6e7bfa799653d39d66484398fb2e6e2",
"main.dart.js": "ea3a810df47fb36390a61718827387c7",
"manifest.json": "f6b2ceaad7e44edd5e0a0027870ff11f",
"version.json": "669229fbd408eebd057b1d082b889d95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
