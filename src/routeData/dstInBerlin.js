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
    title: 'Select Berlin',
    description:
      'Search for “Berlin” to load CET/CEST Daylight Saving details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'Instantly see if CEST is active and what the local clock time is.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Exact Start & End',
    description:
      'Review the last-Sunday-March spring-forward and last-Sunday-October fall-back dates with times.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Follow Tips" />
    ),
    title: 'Follow Berlin-Tuned Tips',
    description:
      'Adjust morning Tiergarten jogs and Brandenburg Gate tours to match the daylight shift.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Accurate Offsets"
      />
    ),
    title: 'Accurate Offset Breakdown',
    description:
      'Compare CET (UTC+1) vs CEST (UTC+2) with minute-level precision.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Local Tips" />
    ),
    title: 'Berlin-Tuned Adjustment Tips',
    description:
      'Optimize your park runs and sightseeing schedule around the new daylight hours.',
  },
];

const tips = [
  {
    title: 'Shift Your Tiergarten Run',
    description:
      'Move your morning jog in the Tiergarten 15 minutes later to sync with the sun’s rise.',
  },
  {
    title: 'Adjust Brandenburg Gate Visits',
    description:
      'Plan your morning visits to the Brandenburg Gate 30 minutes later for optimal daylight.',
  },
  {
    title: 'Delay Your Breakfast',
    description:
      'Push your café breakfast at Prenzlauer Berg to 9 AM local time after spring-forward.',
  },
  {
    title: 'Sync Wall Clocks at 2 AM',
    description:
      'Manually adjust analog clocks at 2 AM change times to avoid device mismatches.',
  },
];

const faqs = [
  {
    question: 'Why does Berlin change DST on Sundays?',
    answer:
      'EU DST rules mandate changes on the last Sunday of March/October to minimize business impact.',
  },
  {
    question: 'Will my phone update automatically?',
    answer:
      'Yes—most smartphones adjust automatically; only analog clocks require manual resetting at 2 AM.',
  },
  {
    question: 'How to plan early-morning tours?',
    answer:
      'If touring at dawn, check the local sunrise time in our tool and adjust your start time accordingly.',
  },
];

const links = [
  { name: 'Paris', path: `/${PATHS.dstInParis}` },
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'Madrid', path: `/${PATHS.dstInMadrid}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
];

const howItWorks = [
  'Detects Berlin’s current time and CEST status.',
  'Retrieves precise DST transition dates from tzdb.',
  'Displays CET vs CEST offsets and local-time stamps.',
  'Offers Berlin-specific tips for parks, landmarks, and routines.',
];

const ssData = {
  text: 'Is DST active in Berlin? Check CET vs CEST offsets, change dates, and get Berlin-tuned adjustment tips! 🇩🇪⏰',
  hashtags: 'DST,BerlinTime',
  title: 'Daylight Saving in Berlin',
};

const title = 'Daylight Saving in Berlin – Status & Dates';
const description =
  'Is DST active in Berlin? View current CET/CEST offsets, exact start & end dates, and get Tiergarten-and-Brandenburg-Gate tips for shifting your routines.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Berlin time & CEST on/off status',
      'CET vs CEST offset breakdown',
      'Exact DST start & end dates (local times)',
      'Berlin-specific adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Berlin”',
        description:
          'Choose “Berlin” to load its DST data (CET vs CEST) anchored to Central European Time.',
      },
      {
        name: 'Step 2: Check Current DST Mode',
        description:
          'See whether Central European Summer Time (CEST) is active and view the local time.',
      },
      {
        name: 'Step 3: Review Exact Transition Dates',
        description:
          'Note the spring-forward on the last Sunday in March and fall-back on the last Sunday in October with local timestamps.',
      },
      {
        name: 'Step 4: Apply Berlin-Tuned Tips',
        description:
          'Adjust your Tiergarten jogs and Brandenburg Gate sightseeing times to match the daylight schedule.',
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
  head: 'Daylight Saving in Berlin',
  subHead:
    'Is CEST active? See CET vs CEST offsets, exact change dates, and get Tiergarten-and-Brandenburg-Gate tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other European Capitals',
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
    originTimeZone: 'Berlin@@Europe/Berlin',
  },
});
