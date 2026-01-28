import { memo } from 'react';
import Link from 'next/link';
import styles from '../../styles.module.css';

const Routes = ({ head, list }) => {
  return (
    <section className={styles.popularRoutes}>
      <h2>{head}</h2>
      <ul className={styles.routeGrid}>
        {list.map((route, index) => (
          <li key={index}>
            <Link href={route.path} target="_blank">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Routes);
