'use client';

import { memo, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { ConditionalGA4, ScrollToTop } from '@/Components';
import { TurnstileProvider } from '@/Contexts';
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
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      registerServiceWorker();
    }
  }, []);

  return (
    <>
      <div id="client-providers">
        <TurnstileProvider>
          <ConditionalGA4 />
        </TurnstileProvider>
        <ScrollToTop />
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
