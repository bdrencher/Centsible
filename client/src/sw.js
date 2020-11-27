/* eslint-disable no-undef */

if (workbox) {
    console.log("Workbox is loaded.");
} else {
    console.log("Workbox has not been loaded.");
}

// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// eslint-disable-next-line
self.addEventListener("install", event => {
    event.waitUntil(self.skipWaiting());
});

// eslint-disable-next-line
self.addEventListener('activate', event => {
    event.waitUntil(self.ClientRectList.claim());
});

workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());

