'use client';

import { memo, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { ConditionalGA4, ScrollToTop } from '@/Components';
import { RecaptchaProvider } from '@/Contexts';
import 'react-toastify/dist/ReactToastify.css';

const ClientProviders = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register(
            '/service-worker.js',
            {
              scope: '/',
              updateViaCache: 'none', // Important: Always check for updates
            },
          );

          console.log(
            'Service Worker registered with scope:',
            registration.scope,
          );

          // Check for updates immediately and periodically
          registration.update();

          // Set up update checking every hour
          setInterval(
            () => {
              registration.update();
            },
            60 * 60 * 1000,
          );

          // Listen for new service worker
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('New service worker found:', newWorker?.state);

            newWorker?.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New service worker is installed and waiting
                console.log('New content is available!');

                // Optional: Show a "Update available" notification to user
                if (
                  window.confirm('New version available! Reload to update?')
                ) {
                  window.location.reload();
                }
              }
            });
          });
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Also listen for controller change (when new SW takes control)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed - reloading page');
        window.location.reload();
      });

      registerServiceWorker();
    }
  }, []);

  return (
    <>
      <div id="client-providers">
        <RecaptchaProvider>
          <ConditionalGA4 />
          <ScrollToTop />
        </RecaptchaProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          progressClassName="toastify_progress"
        />
      </div>
    </>
  );
};

export default memo(ClientProviders);
