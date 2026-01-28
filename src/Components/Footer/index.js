import { memo } from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Global Time Pro. All rights reserved.
      </p>
    </footer>
  );
};

export default memo(Footer);
