import { memo } from 'react';
import { SITE_URL } from '@/utils';
import styles from '../static-page.module.css';

export const metadata = {
  title: 'About',
  description:
    'Learn about Global Time Pro and how our timezone and travel-planning tools are maintained.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const AboutPage = () => {
  return (
    <article className={styles.page}>
      <h1>About Global Time Pro</h1>
      <p className={styles.meta}>Last updated: April 9, 2026</p>

      <p>
        Global Time Pro is a utility-focused web app built to solve common
        cross-timezone tasks: converting times, checking daylight saving status,
        planning jet lag adjustments, and exporting timezone datasets.
      </p>
      <p>
        We prioritize practical output, clear explanations, and routes that are
        easy to share for teams that coordinate work across regions.
      </p>

      <h2>What We Maintain</h2>
      <ul>
        <li>Timezone conversion with DST-aware calculations.</li>
        <li>DST checker pages for major cities.</li>
        <li>Jet lag planning workflows for long-haul travel.</li>
        <li>Downloadable timezone list exports in multiple formats.</li>
      </ul>
    </article>
  );
};

export default memo(AboutPage);
