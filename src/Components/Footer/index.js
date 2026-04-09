import { memo } from 'react';
import Link from 'next/link';
import { PATHS } from '@/paramsData';
import styles from './styles.module.css';

const productLinks = [
  { href: `/${PATHS.timezoneConverter}`, label: 'Timezone Converter' },
  { href: `/${PATHS.dstChecker}`, label: 'DST Checker' },
  { href: `/${PATHS.jetLagPlanner}`, label: 'Jet Lag Planner' },
  { href: `/${PATHS.downloadTimezoneList}`, label: 'Timezone Download' },
];

const companyLinks = [
  { href: `/${PATHS.about}`, label: 'About' },
  { href: `/${PATHS.contact}`, label: 'Contact' },
  { href: `/${PATHS.privacyPolicy}`, label: 'Privacy Policy' },
  { href: `/${PATHS.terms}`, label: 'Terms' },
];

const contactEmail =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || 'globaltimeprocom@gmail.com';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.linkRow} aria-label="Tool links">
        {productLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <nav className={styles.linkRow} aria-label="Company links">
        {companyLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className={styles.contact}>
        Support: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Global Time Pro. All rights reserved.
      </p>
    </footer>
  );
};

export default memo(Footer);
