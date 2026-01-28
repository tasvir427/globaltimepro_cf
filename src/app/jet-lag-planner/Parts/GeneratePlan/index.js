'use client';

import { memo } from 'react';
import { useJL } from '@/Contexts';
import styles from '../../styles.module.css';

const GeneratePlan = () => {
  const { generatePlan } = useJL();

  return (
    <div className={styles.home_section_container}>
      <button
        className={styles.generate_plan_btn}
        onClick={generatePlan}
      >
        Generate
      </button>
    </div>
  );
};

export default memo(GeneratePlan);
