import { memo } from 'react';
import { iconFaChevronDown } from '@/utils';
import styles from '../../styles.module.css';

const Steps = ({ head, subHead, list }) => {
  return (
    <>
      <h1>{head}</h1>
      <p className={styles.subHead}>{subHead}</p>
      <ol className={styles.stepsList}>
        {list.map((step, index) => (
          <li className={styles.stepItem} key={index}>
            <details className={styles.stepDetails}>
              <summary className={styles.stepHeader}>
                <span className={styles.icon}>{step.icon}</span>
                <strong className={styles.stepTitle}>{step.title}</strong>
                <span className={styles.collapseIcon}>{iconFaChevronDown}</span>
              </summary>
              <p className={styles.stepDescription}>{step.description}</p>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
};

export default memo(Steps);
