import { memo } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const CustomBtn = ({ children, className, ...rest }) => {
  return (
    <button className={classNames(styles.custom_btn, className)} {...rest}>
      {children}
    </button>
  );
};

export default memo(CustomBtn);
