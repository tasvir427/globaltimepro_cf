'use client';

import { memo, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { ConditionalGA4, ScrollToTop } from '@/Components';
import { RecaptchaProvider } from '@/Contexts';
import 'react-toastify/dist/ReactToastify.css';

const ClientProviders = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => {
          console.log('SW registered', reg);
        })
        .catch((err) => {
          console.warn('SW registration failed', err);
        });
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
