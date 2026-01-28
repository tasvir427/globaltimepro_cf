import { memo } from 'react';
import styles from '../../styles.module.css';

const HowItWorks = ({ head, list }) => {
  return (
    <section className={styles.howItWorks}>
      <h2>{head}</h2>
      <ul>
        {list.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    </section>
  );
};

export default memo(HowItWorks);
