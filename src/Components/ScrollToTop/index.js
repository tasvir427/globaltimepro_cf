'use client';

import { memo, useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  if (!isVisible) return null;

  return (
    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
      <span aria-hidden>↑</span>
      <span className={styles.srOnly}>Back to top</span>
    </button>
  );
};

export default memo(ScrollToTop);
