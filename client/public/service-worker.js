// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  self.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    self.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    self.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

self.addEventListener("install", (event) => {
  event.waitUntil(preLoad());
});

var preLoad = () => {
  console.log("Installing the web application");
  return caches.open("offline").then((cache) => {
    console.log("caching index and important routes");
    return cache.addAll(["/", "/createAccount", "/dashboard", "/financeEstimator", "/myFinances", "accountSettings", "/offline.html"]);
  });
};

self.addEventListener("fetch", (event) => {
  event.respondWith(checkResponse(event.request).catch(() => {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = (request) => {
  return new Promise((fulfill, reject) => {
    fetch(request).then((response) => {
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = (request) => {
  return caches.open("offline").then((cache) => {
    return fetch(request).then((response) => {
      console.log(response.url + " was cached");
      return cache.put(request, response);
    });
  });
};

var returnFromCache = (request) => {
  return caches.open("offline").then((cache) => {
    return cache.match(request).then((matching) => {
      if(!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};