import { memo } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const InputLabel = ({ children, className, ...rest }) => {
  return (
    <div className={classNames(styles.input_label, className)} {...rest}>
      {children}
    </div>
  );
};

export default memo(InputLabel);
