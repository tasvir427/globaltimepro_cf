import { memo } from 'react';
import Link from 'next/link';
import { PATHS } from '@/paramsData';
import { SITE_URL } from '@/utils';
import styles from './page.module.css';

const toolCards = [
  {
    title: 'Time Zone Converter',
    description:
      'Convert time between cities and IANA zones with DST-aware output and shareable links.',
    href: `/${PATHS.timezoneConverter}`,
  },
  {
    title: 'DST Checker',
    description:
      'Check whether daylight saving time is active and when the next transition happens.',
    href: `/${PATHS.dstChecker}`,
  },
  {
    title: 'Jet Lag Planner',
    description:
      'Build adjustment schedules for long-haul travel using departure and arrival timelines.',
    href: `/${PATHS.jetLagPlanner}`,
  },
  {
    title: 'Download Timezone List',
    description:
      'Export timezone datasets in JSON, CSV, or Excel with customizable fields.',
    href: `/${PATHS.downloadTimezoneList}`,
  },
];

const trustLinks = [
  { label: 'About', href: `/${PATHS.about}` },
  { label: 'Contact', href: `/${PATHS.contact}` },
  { label: 'Privacy Policy', href: `/${PATHS.privacyPolicy}` },
  { label: 'Terms', href: `/${PATHS.terms}` },
];

export const metadata = {
  title: 'Global Time Pro',
  description:
    'Use Global Time Pro to convert time zones, check DST, plan jet lag, and download timezone data.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>Global Time Pro</h1>
        <p>
          Practical tools for global scheduling, daylight-saving checks, and
          travel planning.
        </p>
      </section>

      <section aria-label="Tools" className={styles.section}>
        <h2>Explore Tools</h2>
        <div className={styles.cardGrid}>
          {toolCards.map((card) => (
            <article key={card.href} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.href}>Open Tool</Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Site information" className={styles.section}>
        <h2>Site Information</h2>
        <p>
          We keep this site focused on utility-first, original tools with clear
          navigation and transparent policies.
        </p>
        <div className={styles.inlineLinks}>
          {trustLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
