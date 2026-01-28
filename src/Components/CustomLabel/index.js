import { memo } from 'react';
import styles from './styles.module.css';

const CustomLabel = ({ children, ...rest }) => {
  return (
    <div className={styles.label_chip} {...rest}>
      {children}
    </div>
  );
};

export default memo(CustomLabel);
