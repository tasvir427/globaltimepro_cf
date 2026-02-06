// service-worker.js
'use strict';

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js',
);

if (!self.workbox) {
  console.warn('Workbox failed to load.');
}

// Import our deployment-specific configuration
try {
  importScripts('/sw-config.js');
} catch (err) {
  console.warn('Could not import sw-config.js', err);
}

// Set defaults for development
self.__DEPLOYMENT_ID__ = self.__DEPLOYMENT_ID__ || `dev-${Date.now()}`;
self.__PATHS__ = self.__PATHS__ || {};

const { clientsClaim } = workbox.core;
const { precacheAndRoute, cleanupOutdatedCaches } = workbox.precaching;
const { registerRoute, NavigationRoute } = workbox.routing;
const { NetworkFirst, CacheFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

// Generate cache names with deployment ID for versioning
const generateCacheName = (path) => `${self.__DEPLOYMENT_ID__}${path}-cache`;
const navigationsCacheName = `${self.__DEPLOYMENT_ID__}/navigations-cache`;

console.log(
  'Service Worker loaded with deployment ID:',
  self.__DEPLOYMENT_ID__,
);

// 1. INSTALL: Force activation when new service worker is available
self.addEventListener('install', (event) => {
  console.log(
    'Installing Service Worker with deployment:',
    self.__DEPLOYMENT_ID__,
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// 2. ACTIVATE: Clean up old caches when new service worker activates
self.addEventListener('activate', (event) => {
  console.log(
    'Activating Service Worker with deployment:',
    self.__DEPLOYMENT_ID__,
  );

  // Claim control of all clients immediately
  event.waitUntil(self.clients.claim());

  // Clean up old caches that don't match our current deployment ID
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete any cache that:
          // 1. Ends with -cache (our cache naming pattern)
          // 2. Doesn't start with our current deployment ID
          if (
            cacheName.endsWith('-cache') &&
            !cacheName.startsWith(self.__DEPLOYMENT_ID__)
          ) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        }),
      );
    }),
  );
});

// Initialize workbox
clientsClaim();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST || []);

// Register routes for your static paths
const STATIC_PATHS = Object.values(self.__PATHS__ || {}).map((p) =>
  p.startsWith('/') ? p : `/${p}`,
);

STATIC_PATHS.forEach((path) => {
  registerRoute(
    ({ url }) => url.pathname.startsWith(path),
    new NetworkFirst({
      cacheName: generateCacheName(path),
      matchOptions: { ignoreSearch: true },
    }),
  );
});

// Navigation route for SPA
registerRoute(
  new NavigationRoute(
    new NetworkFirst({
      cacheName: navigationsCacheName,
    }),
  ),
);

// Cache static assets
registerRoute(
  ({ request, url }) =>
    request.destination === 'style' ||
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

// Cache fonts
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
