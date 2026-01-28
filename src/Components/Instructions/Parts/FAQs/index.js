import { memo } from 'react';
import styles from '../../styles.module.css';

const FAQs = ({ head, list }) => {
  return (
    <section className={styles.qaSection}>
      <h2>{head}</h2>
      <div className={styles.qaList}>
        {list.map((qa, index) => (
          <div key={index} className={styles.qaItem}>
            <h3 className={styles.qaQuestion}>{qa.question}</h3>
            <p className={styles.qaAnswer}>{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FAQs);
