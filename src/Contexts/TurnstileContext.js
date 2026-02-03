'use client';

import {
  createContext,
  memo,
  use,
  useEffect,
  useState,
  useCallback,
} from 'react';
import Script from 'next/script';

const RecaptchaContext = createContext();
export const useRecaptcha = () => use(RecaptchaContext);

const RecaptchaProvider = ({ children }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const previouslyVerified = sessionStorage.getItem('recaptcha_verified');
    if (previouslyVerified === 'true') {
      setIsHuman(true);
    }
  }, []);

  useEffect(() => {
    if (!isHuman && recaptchaLoaded && window.grecaptcha) {
      initializeRecaptcha();
    }
  }, [isHuman, recaptchaLoaded]);

  const initializeRecaptcha = useCallback(() => {
    try {
      window.grecaptcha.ready(() => {
        executeRecaptcha();
      });
    } catch (error) {
      console.error('reCAPTCHA initialization error:', error);
    }
  }, []);

  const executeRecaptcha = useCallback(async () => {
    try {
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA not loaded');
      }

      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'homepage' },
      );

      await verifyToken(token);
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsHuman(true);
        sessionStorage.setItem('recaptcha_verified', 'true');
      } else {
        console.error('reCAPTCHA verification failed. Score:', data.score);
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
    }
  };

  return (
    <RecaptchaContext value={{ isHuman }}>
      {children}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={() => setRecaptchaLoaded(true)}
        onError={() => {
          console.error('Failed to load reCAPTCHA');
        }}
      />
    </RecaptchaContext>
  );
};

export default memo(RecaptchaProvider);
