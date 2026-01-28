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
    title: 'Select Sydney as Your Location',
    description:
      'Search and choose “Sydney” to load its AEST/AEDT Daylight Saving details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'Instantly see if AEDT is active and what the local time is right now.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Precise Start & End',
    description:
      'Review when clocks move forward/back in Sydney, with exact 2 AM local timestamps.',
  },
  {
    icon: <FaShareSquare className={styles.stepIcon} aria-label="Tips" />,
    title: 'Follow Sydney-Tuned Tips',
    description:
      'Prepare with surf-time shifts at Bondi and afternoon barbies delayed by 15 minutes.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Detailed Offsets"
      />
    ),
    title: 'Detailed Offset Breakdown',
    description:
      'See AEST (UTC+10) vs AEDT (UTC+11) with minute-level precision.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Local Tips" />
    ),
    title: 'Bondi-Tuned Tips',
    description:
      'Surf early or BBQ late—align your activities with the changing daylight patterns.',
  },
];

const tips = [
  {
    title: 'Delay Your Surf Run',
    description:
      'Push back your Bondi sunrise surf by 15 minutes to match the new daylight schedule.',
  },
  {
    title: 'Barbie Hour Shift',
    description:
      'Delay your afternoon barbecue by 30 minutes on the day after the change.',
  },
  {
    title: 'Adjust Your Coffee Break',
    description:
      'Move your mid-morning flat white from 10 AM to 11 AM AEDT for smoother adaptation.',
  },
  {
    title: 'Sync Wall Clocks at 2 AM',
    description:
      'Manually adjust analog clocks at 2 AM local time to avoid digital device glitches.',
  },
];

const faqs = [
  {
    question: 'Why does Sydney change at 2 AM?',
    answer:
      'Australia shifts at 2 AM to minimize disruption—most venues are closed and fewer people are awake.',
  },
  {
    question: 'Will my phone update automatically?',
    answer:
      'Most smartphones adjust on their own; wall clocks and appliances need manual resetting at 2 AM.',
  },
  {
    question: 'How to handle early morning flights?',
    answer:
      'If flying at the switch time, set your watch to AEDT upon departure and follow our surf-tuned tips.',
  },
];

const links = [
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Bangkok', path: `/${PATHS.dstInBangkok}` },
  { name: 'Seoul', path: `/${PATHS.dstInSeoul}` },
];

const howItWorks = [
  'Detects Sydney’s current time and AEDT status.',
  'Fetches exact DST transitions from tzdb with local-time precision.',
  'Displays AEST vs AEDT offsets and start/end details.',
  'Provides Sydney-tuned activity tips for smooth adjustment.',
];

const ssData = {
  text: 'Is DST active in Sydney? Check AEST vs AEDT offsets, change dates, and get Bondi Beach–tuned adjustment tips! 🇦🇺⏰',
  hashtags: 'DST,SydneyTime',
  title: 'Daylight Saving in Sydney',
};

const title = 'Daylight Saving in Sydney – Status & Dates';
const description =
  'Is DST active in Sydney? View current AEST/AEDT offsets, exact start & end dates, and get Bondi Beach–tuned tips for adjusting your routines around the clock change.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Sydney time & AEDT on/off status',
      'AEST vs AEDT offset breakdown',
      'Exact DST start & end dates (local times)',
      'Bondi Beach–tuned adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Select Sydney as Your Location',
        description:
          'Begin by choosing “Sydney” to load its current DST data (AEST vs AEDT).',
      },
      {
        name: 'Step 2: View Current DST Status',
        description:
          'See instantly whether Australian Eastern Daylight Time (AEDT) is active and the local clock reading.',
      },
      {
        name: 'Step 3: Check Precise Start & End',
        description:
          'Review exact spring-forward and autumn-back dates and times, with local timestamps at 2 AM.',
      },
      {
        name: 'Step 4: Follow Sydney-Tuned Tips',
        description:
          'Get practical advice—like adjusting surf times at Bondi or delaying your barbie hour—to prep your routine.',
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
  head: 'Daylight Saving in Sydney',
  subHead:
    'Is AEDT active? See AEST vs AEDT offsets, exact change dates, and get Bondi Beach–tuned adjustment tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Major Asia-Pacific Cities',
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
    originTimeZone: 'Sydney@@Australia/Sydney',
  },
});
