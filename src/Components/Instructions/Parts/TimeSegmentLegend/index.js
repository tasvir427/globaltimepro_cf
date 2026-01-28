import { memo } from 'react';
import classNames from 'classnames';
import { timeSegments } from '@/utils';
import styles from '../../styles.module.css';

const pad = (h) => String(h).padStart(2, '0');

const TimeSegmentLegend = () => {
  return (
    <div className={styles.legendContainer}>
      {timeSegments.map(({ name, className, start, end }) => (
        <div key={className} className={styles.legendItem}>
          <span
            className={classNames(styles.tz_indicator, styles[className])}
            title={name}
          >
            <span />
          </span>
          <span className={styles.legendLabel}>
            {name} ( {pad(start)}:00 – {pad(end)}:00 )
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(TimeSegmentLegend);
