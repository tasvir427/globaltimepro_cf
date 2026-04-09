import { memo } from 'react';
import { SITE_URL } from '@/utils';
import styles from '../static-page.module.css';

const contactEmail =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || 'globaltimeprocom@gmail.com';

export const metadata = {
  title: 'Terms',
  description: 'Read the terms of use for Global Time Pro.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

const TermsPage = () => {
  return (
    <article className={styles.page}>
      <h1>Terms of Use</h1>
      <p className={styles.meta}>Last updated: April 9, 2026</p>

      <p>
        By using Global Time Pro, you agree to these terms. If you do not agree
        with these terms, please do not use this website.
      </p>

      <h2>Service Scope</h2>
      <ul>
        <li>
          The site provides informational time-related utilities and travel
          planning aids.
        </li>
        <li>
          Results are provided on an as-is basis and should be verified for
          critical operational use.
        </li>
      </ul>

      <h2>Acceptable Use</h2>
      <ul>
        <li>Do not attempt to abuse, disrupt, or reverse engineer the site.</li>
        <li>Do not use automated abuse tools against any endpoint.</li>
      </ul>

      <h2>Liability</h2>
      <p>
        To the maximum extent permitted by law, Global Time Pro is not liable
        for losses arising from use of this website or reliance on generated
        output.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </article>
  );
};

export default memo(TermsPage);
