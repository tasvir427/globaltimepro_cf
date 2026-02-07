'use client';

import {
  createContext,
  memo,
  use,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import Script from 'next/script';

const TurnstileContext = createContext();
export const useTurnstile = () => use(TurnstileContext);

const TurnstileProvider = ({ children }) => {
  const [isHuman, setIsHuman] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const previouslyVerified = sessionStorage.getItem('turnstile_verified');
    if (previouslyVerified === 'true') {
      setIsHuman(true);
    }
  }, []);

  const verifyToken = useCallback(async (token) => {
    try {
      const response = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsHuman(true);
        sessionStorage.setItem('turnstile_verified', 'true');
      } else {
        console.error('Turnstile verification failed:', data);
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
      }
    } catch (error) {
      console.error('Turnstile verification error:', error);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (!window.turnstile) {
      throw new Error('Turnstile not loaded');
    }

    if (widgetIdRef.current !== null) {
      return;
    }

    if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      throw new Error('Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY');
    }

    const container = document.getElementById('turnstile-container');
    if (!container) {
      throw new Error('Turnstile container not found');
    }

    widgetIdRef.current = window.turnstile.render(container, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      size: 'invisible',
      action: 'homepage',
      callback: (token) => {
        verifyToken(token);
      },
      'error-callback': () => {
        console.error('Turnstile widget error');
      },
      'expired-callback': () => {
        if (window.turnstile && widgetIdRef.current !== null && !isHuman) {
          window.turnstile.execute(widgetIdRef.current);
        }
      },
    });

    window.turnstile.execute(widgetIdRef.current);
  }, [isHuman, verifyToken]);

  useEffect(() => {
    if (!isHuman && turnstileLoaded && window.turnstile) {
      try {
        renderTurnstile();
      } catch (error) {
        console.error('Turnstile initialization error:', error);
      }
    }
  }, [isHuman, renderTurnstile, turnstileLoaded]);

  return (
    <TurnstileContext value={{ isHuman }}>
      {children}
      {!isHuman && (
        <>
          <div id="turnstile-container" />
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onLoad={() => setTurnstileLoaded(true)}
            onError={() => {
              console.error('Failed to load Turnstile');
            }}
          />
        </>
      )}
    </TurnstileContext>
  );
};

export default memo(TurnstileProvider);
