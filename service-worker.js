/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { PATHS } from '@/paramsData';

self.addEventListener('install', () => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

clientsClaim();
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST || []);

const STATIC_PATHS = Object.values(PATHS).map((path) => `/${path}`);

const generateCacheName = (path) => `${__DEPLOYMENT_ID__}${path}-cache`;
const navigationsCacheName = `${__DEPLOYMENT_ID__}/navigations-cache`;

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
