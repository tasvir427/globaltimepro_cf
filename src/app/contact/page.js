import { memo } from 'react';
import { SITE_URL } from '@/utils';
import styles from '../static-page.module.css';

const contactEmail =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || 'globaltimeprocom@gmail.com';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Global Time Pro for support, bug reports, or general feedback.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

const ContactPage = () => {
  return (
    <article className={styles.page}>
      <h1>Contact</h1>
      <p className={styles.meta}>Last updated: April 9, 2026</p>

      <p>
        For support, bug reports, or partnership inquiries, email us at{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>What to Include</h2>
      <ul>
        <li>The page URL where you saw the issue.</li>
        <li>Your timezone or city inputs.</li>
        <li>A short description of what you expected and what happened.</li>
      </ul>
    </article>
  );
};

export default memo(ContactPage);
