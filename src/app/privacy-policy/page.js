import { memo } from 'react';
import { SITE_URL } from '@/utils';
import styles from '../static-page.module.css';

const contactEmail =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || 'globaltimeprocom@gmail.com';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Global Time Pro Privacy Policy, including cookie and advertising disclosures.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <article className={styles.page}>
      <h1>Privacy Policy</h1>
      <p className={styles.meta}>Last updated: April 9, 2026</p>

      <p>
        This policy explains how Global Time Pro handles information when you
        use this website.
      </p>

      <h2>Information We Process</h2>
      <ul>
        <li>
          Inputs you provide in tools (such as selected cities or timezones)
          are processed to generate results.
        </li>
        <li>
          Basic technical data may be collected through analytics or security
          services to operate and protect the site.
        </li>
      </ul>

      <h2>Advertising and Cookies</h2>
      <ul>
        <li>
          Third-party vendors, including Google, may use cookies to serve ads
          based on prior visits to this or other websites.
        </li>
        <li>
          Google may use advertising cookies to serve personalized ads where
          permitted by law.
        </li>
        <li>
          Users can manage ad personalization in Google Ads Settings:{' '}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://adssettings.google.com/
          </a>
        </li>
      </ul>

      <h2>Third-Party Links</h2>
      <p>
        This site may include links to external websites. We are not
        responsible for the privacy practices of those websites.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions can be sent to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </article>
  );
};

export default memo(PrivacyPolicyPage);
