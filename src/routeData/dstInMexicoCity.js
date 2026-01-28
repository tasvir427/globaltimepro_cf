import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMousePointer,
  FaShareSquare,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Select Location"
      />
    ),
    title: 'Search “Mexico City”',
    description:
      'Load Mexico City’s current clock (Central Standard Time, UTC−6) and local timestamp.',
  },
  {
    icon: <FaCalendarAlt className={styles.stepIcon} aria-label="DST Status" />,
    title: 'See DST Status (None)',
    description:
      'This page confirms Mexico City does not switch clocks seasonally—useful for long-term scheduling.',
  },
  {
    icon: (
      <FaClock
        className={styles.stepIcon}
        aria-label="Check Border Exceptions"
      />
    ),
    title: 'Check Border Exceptions',
    description:
      'If you travel north, review nearby municipalities (Baja California and several border towns) that still align with U.S. DST.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Use Local Tips" />
    ),
    title: 'Plan with Local Context',
    description:
      'Get cross-border and local tips that prevent meeting and travel surprises when others move their clocks.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Live Time" />
    ),
    title: 'Live Mexico City Clock',
    description:
      'Always-accurate local time (CST, UTC−6) pulled from tzdb so you can schedule reliably.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Border Sync" />
    ),
    title: 'Border Sync Checker',
    description:
      'Quickly compare Mexico City time vs U.S. cities (e.g., San Diego/Tijuana) during U.S. DST so you know when offsets change.',
  },
];

const tips = [
  {
    title: 'Schedule Meetings in Local Time',
    description:
      'Use Mexico City (CST) timestamps in invites—add a short note if participants are in U.S. DST zones to avoid confusion.',
  },
  {
    title: 'Double-check Border Crossings',
    description:
      'If you’re driving to Baja California or other border towns, confirm local clock rules before booking ferries, buses, or flights.',
  },
  {
    title: 'Confirm Vendor & Event Times',
    description:
      'Markets, restaurants, and venues usually keep habitual hours, but event start times can differ—verify with organizers near switch windows.',
  },
  {
    title: 'Trust Networked Devices',
    description:
      'Phones and major apps use tzdb and will show the correct local time; manually set analog clocks if needed.',
  },
];

const faqs = [
  {
    question: 'Does Mexico City observe DST?',
    answer:
      'No. Mexico City remains on Central Standard Time year-round (UTC−6). Only certain northern border municipalities and Baja California still observe DST to match U.S. schedules.',
  },
  {
    question: 'Which Mexican areas still use DST?',
    answer:
      'Baja California and some municipalities along the U.S. border observe U.S. DST. Always check the destination municipality’s policy before travel.',
  },
  {
    question: 'How does this affect business with U.S. partners?',
    answer:
      'During U.S. DST the offset between Mexico City and U.S. DST zones changes by one hour—use a live comparison or add both local times in meeting invites.',
  },
];

const links = [
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Sao Paulo', path: `/${PATHS.dstInSaoPaulo}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Toronto', path: `/${PATHS.dstInToronto}` },
];

const howItWorks = [
  'Detects Mexico City’s current time from tzdb and reports that no DST is applied locally.',
  'Flags municipalities that still follow U.S. DST rules (useful for border travel).',
  'Shows precise UTC offset (CST, UTC−6) and compares it to other cities with or without DST.',
  'Provides practical cross-border scheduling tips to avoid missed meetings and misbooked travel.',
];

const ssData = {
  text: 'Mexico City stays on Central Standard Time year-round (UTC−6). Some border towns and Baja California still follow U.S. DST—check before you travel.',
  hashtags: 'TimeZones,MexicoCity,TravelTips',
  title: 'Mexico City — No Daylight Saving',
};

const title = 'Mexico City: No DST — Time & Cross-Border Tips';
const description =
  'Mexico City stays on Central Standard Time year-round (UTC−6). Some border areas and Baja California follow U.S. DST—confirm local time before crossing.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Mexico City clock (CST, UTC−6)',
      'Clear “No DST” status for Mexico City',
      'Border municipality DST exceptions highlighted',
      'Cross-border scheduling tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Mexico City”',
        description:
          'Load current Mexico City time (CST, UTC−6) and confirm no DST is applied locally.',
      },
      {
        name: 'Step 2: Check DST Status (Not Observed)',
        description:
          'The page confirms that Mexico City maintains CST year-round—useful for long-term planning and scheduling.',
      },
      {
        name: 'Step 3: Check Border Exceptions',
        description:
          'Identify nearby municipalities that still observe U.S. DST and adjust travel or meeting times accordingly.',
      },
      {
        name: 'Step 4: Apply Cross-Border Tips',
        description:
          'Use practical advice for coordinating meetings, transport, and events when interacting with DST-observing regions.',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.dst.json',
  });
};

export const getData = (page) => ({
  head: 'Mexico City — No Daylight Saving',
  subHead:
    'Mexico City remains on Central Standard Time (UTC−6) year-round. Some northern border municipalities and Baja California still observe U.S. DST—check local rules before crossing the border.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Major Cities in the Americas',
  howItWorksHead: 'How It Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Mexico City@@America/Mexico_City',
  },
});
