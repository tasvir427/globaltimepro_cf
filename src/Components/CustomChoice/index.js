import { memo } from 'react';
import classNames from 'classnames';
import { CustomBtn } from '../index';
import styles from './styles.module.css';

const CustomChoice = ({ opts, value, onChange }) => {
  return (
    <div className={styles.choice_container}>
      {opts?.map((opt) => (
        <CustomBtn
          key={opt}
          className={classNames(styles.choice_it, {
            [styles.choice_it_selected]: opt === value,
          })}
          onClick={() => onChange(opt)}
        >
          {opt}
        </CustomBtn>
      ))}
    </div>
  );
};

export default memo(CustomChoice);
