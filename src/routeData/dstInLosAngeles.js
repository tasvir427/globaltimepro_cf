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
    title: 'Select Los Angeles',
    description:
      'Search for “Los Angeles” to load PST/PDT Daylight Saving details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'Instantly see if PDT is active and what the local time is right now.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Exact Start & End',
    description:
      'Review spring-forward on the second Sunday in March and fall-back on the first Sunday in November, with times at 2 AM local.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Follow Tips" />
    ),
    title: 'Follow LA-Tuned Tips',
    description:
      'Shift your early beach surf and evening studio hours to match the new daylight schedule.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Precise Offsets"
      />
    ),
    title: 'Detailed Offset Comparison',
    description:
      'Compare PST (UTC−8) vs PDT (UTC−7) with minute-level accuracy.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Local Tips" />
    ),
    title: 'LA-Tuned Adjustment Tips',
    description:
      'From sunrise surf to Hollywood sunset walks, tailor your day around the shift.',
  },
];

const tips = [
  {
    title: 'Delay Your Morning Surf',
    description:
      'Push back your Venice Beach surf session by 20 minutes on the first PDT day to match the sunrise.',
  },
  {
    title: 'Adjust Studio Visits',
    description:
      'Plan gallery or studio tours in downtown LA 30 minutes later than usual after spring-forward.',
  },
  {
    title: 'Dinner at Sunset Boulevard',
    description:
      'Move your dinner reservation to Sunset Boulevard 15 minutes later to enjoy daylight longer.',
  },
  {
    title: 'Sync Home Clocks at 2 AM',
    description:
      'Manually reset analog and wall clocks at 2 AM to avoid any device mismatches.',
  },
];

const faqs = [
  {
    question: 'Why does LA change DST in March/November?',
    answer:
      'U.S. DST rules set changes on the second Sunday in March and first Sunday in November to maximize evening daylight.',
  },
  {
    question: 'Do smartphones update automatically?',
    answer:
      'Yes—most devices adjust time on their own; only manual clocks need resetting at 2 AM.',
  },
  {
    question: 'How to plan early flights?',
    answer:
      'For red-eye or dawn flights, check local sunrise times and adjust your departure accordingly.',
  },
];

const links = [
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
];

const howItWorks = [
  'Detects LA’s current time and whether PDT is active.',
  'Fetches precise DST transition dates from tzdb.',
  'Displays PST vs PDT offsets with local timestamps.',
  'Offers LA-tuned tips for surf sessions, studio tours, and evening strolls.',
];

const ssData = {
  text: 'Is DST active in Los Angeles? Check PST/PDT offsets, change dates, and get beach & Hollywood–tuned adjustment tips! 🌴🌅⏰',
  hashtags: 'DST,LAWeather',
  title: 'Daylight Saving in Los Angeles',
};

const title = 'Daylight Saving in Los Angeles – Status & Dates';
const description =
  'Is DST active in Los Angeles? See PST⇄PDT offsets, exact transition times, and practical tips for beach mornings and evening outings.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live LA time & PDT on/off status',
      'PST vs PDT offset breakdown',
      'Exact DST start & end dates (local times)',
      'Los Angeles–tuned adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Los Angeles”',
        description:
          'Choose “Los Angeles” to load its DST data (Pacific Standard vs Pacific Daylight Time).',
      },
      {
        name: 'Step 2: Check Current DST Mode',
        description:
          'See if Pacific Daylight Time (PDT) is active and what the local clock reads right now.',
      },
      {
        name: 'Step 3: Review Exact Transition Dates',
        description:
          'Note when clocks spring forward (second Sunday in March) and fall back (first Sunday in November) with local timestamps.',
      },
      {
        name: 'Step 4: Apply LA-Tuned Tips',
        description:
          'Use advice like pushing back sunrise surf sessions and evening studio visits to match the daylight shift.',
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
  head: 'Daylight Saving in Los Angeles',
  subHead:
    'Is PDT active? See PST vs PDT offsets, exact change dates, and get Pacific Coast–tuned beach and Hollywood tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Pacific Rim Cities',
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
    originTimeZone: 'Los Angeles@@America/Los_Angeles',
  },
});
