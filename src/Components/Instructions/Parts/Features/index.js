import { memo } from 'react';
import styles from '../../styles.module.css';

const Features = ({ head, list }) => {
  return (
    <>
      <h2 className={styles.featuresTitle}>{head}</h2>
      <ul className={styles.featuresList}>
        {list.map((feature, index) => (
          <li key={index}>
            {feature.icon}
            <div>
              <strong>{feature.title}</strong> {feature.description}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Features);
