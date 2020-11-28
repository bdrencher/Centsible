const CACHE_NAME = "offline";
const urlsToCache = [
    '/',
    '/dashboard',
    '/createAccount',
    '/myFinances',
    '/financeEstimator',
    '/accountSettings'
];

// install worker
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Cache opened");
            return cache.addAll(urlsToCache);
        })
    );
});

// chache and return requests
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if(response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// update worker
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', (event) => {
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});