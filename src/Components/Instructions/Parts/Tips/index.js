import { memo } from 'react';
import styles from '../../styles.module.css';

const Tips = ({ head, list }) => {
  return (
    <section className={styles.tipsSection}>
      <h2>{head}</h2>
      <ul className={styles.tipsList}>
        {list.map((tip, index) => (
          <li key={index} className={styles.tipItem}>
            <h3 className={styles.tipTitle}>{tip.title}</h3>
            <p className={styles.tipDescription}>{tip.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Tips);
