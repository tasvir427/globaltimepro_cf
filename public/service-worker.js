'use strict';

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js',
);

if (!self.workbox) {
  console.warn('Workbox failed to load.');
}

try {
  importScripts('/sw-config.js');
} catch (err) {
  console.warn('Could not import sw-config.js', err);
}

self.__PATHS__ = self.__PATHS__ || {};
self.__DEPLOYMENT_ID__ =
  typeof self.__DEPLOYMENT_ID__ !== 'undefined'
    ? self.__DEPLOYMENT_ID__
    : 'dev';

const { clientsClaim } = workbox.core;
const { precacheAndRoute, cleanupOutdatedCaches } = workbox.precaching;
const { registerRoute, NavigationRoute } = workbox.routing;
const { NetworkFirst, CacheFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

clientsClaim();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST || []);

const STATIC_PATHS = Object.values(self.__PATHS__ || {}).map((p) =>
  p.startsWith('/') ? p : `/${p}`,
);

const generateCacheName = (path) => `${self.__DEPLOYMENT_ID__}${path}-cache`;
const navigationsCacheName = `${self.__DEPLOYMENT_ID__}/navigations-cache`;

STATIC_PATHS.forEach((path) => {
  registerRoute(
    ({ url }) => url.pathname.startsWith(path),
    new NetworkFirst({
      cacheName: generateCacheName(path),
      matchOptions: { ignoreSearch: true },
    }),
  );
});

registerRoute(
  new NavigationRoute(
    new NetworkFirst({
      cacheName: navigationsCacheName,
    }),
  ),
);

// Cache CSS (and any _next static files like JS/CSS) with a CacheFirst strategy
registerRoute(
  ({ request, url }) =>
    request.destination === 'style' ||
    // cover next/static hashed css/js paths and typical css location
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.endsWith('.css'),
  new CacheFirst({
    cacheName: `${self.__DEPLOYMENT_ID__}/static-assets-cache`,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
);

// Cache fonts too (optional)
registerRoute(
  ({ request }) =>
    request.destination === 'font' || /\/fonts\//.test(request.url),
  new CacheFirst({
    cacheName: `${self.__DEPLOYMENT_ID__}/fonts-cache`,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 24 * 60 * 60,
      }),
    ],
  }),
);

self.addEventListener('activate', (event) => {
  const allowedCaches = new Set([
    ...STATIC_PATHS.map(generateCacheName),
    navigationsCacheName,
  ]);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!allowedCaches.has(cacheName) && cacheName.endsWith('-cache')) {
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        }),
      ),
    ),
  );
});
