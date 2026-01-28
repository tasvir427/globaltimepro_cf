import { memo } from 'react';
import styles from './styles.module.css';

const CustomInput = (props) => {
  return <input type="text" className={styles.custom_input} {...props} />;
};

export default memo(CustomInput);
