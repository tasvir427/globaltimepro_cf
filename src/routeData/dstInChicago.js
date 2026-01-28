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
    title: 'Select Chicago',
    description:
      'Search for “Chicago” to load CST/CDT Daylight Saving details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'Instantly see if CDT is active and what the local clock time is.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Exact Start & End',
    description:
      'Review spring-forward on the second Sunday in March and fall-back on the first Sunday in November, with local-time stamps.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Follow Tips" />
    ),
    title: 'Follow Chicago-Tuned Tips',
    description:
      'Shift your Lake Michigan sunrise runs and deep-dish pizza dinner schedules for seamless adjustment.',
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
      'Compare Central Standard Time (UTC−6) vs Central Daylight Time (UTC−5) with minute precision.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Local Lifestyle Tips"
      />
    ),
    title: 'Chicago Lifestyle Tips',
    description:
      'From waterfront jogs to deep-dish dinners, get city-specific strategies for DST days.',
  },
];

const tips = [
  {
    title: 'Lakefront Sunrise Stroll',
    description:
      'Move your sunrise jog along Lake Michigan 15 minutes later on DST start day to match morning light.',
  },
  {
    title: 'Deep-Dish Dinner Delay',
    description:
      'Push back your classic pizza dinner at Giordano’s by 30 minutes the night after the change.',
  },
  {
    title: 'Adjust Your Cubs Game Time',
    description:
      'If attending Wrigley Field, aim for gates opening 20 minutes later to avoid daylight confusion.',
  },
  {
    title: 'Sync Office Clocks at 2 AM',
    description:
      'Manually reset analog clocks at 2 AM local time to avoid any digital-analog mismatches.',
  },
];

const faqs = [
  {
    question: 'Why does Chicago change DST in March/November?',
    answer:
      'U.S. law sets DST from the second Sunday in March to the first Sunday in November to maximize summer evening light.',
  },
  {
    question: 'Will my phone update automatically?',
    answer:
      'Yes—most smartphones update themselves; analog clocks require manual adjustment at 2 AM.',
  },
  {
    question: 'How to plan early morning commutes?',
    answer:
      'Check local sunrise times in our tool and adjust your morning CTA schedule accordingly.',
  },
];

const links = [
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Atlanta', path: `/${PATHS.dstInAtlanta}` },
  { name: 'Toronto', path: `/${PATHS.dstInToronto}` },
];

const howItWorks = [
  'Detects Chicago’s current time and whether CDT is active.',
  'Retrieves precise DST transition dates from tzdb.',
  'Displays CST vs CDT offsets with local-time stamps.',
  'Offers Chicago-tuned tips for lakeside runs, pizza nights, and ballgames.',
];

const ssData = {
  text: 'Is DST active in Chicago? Check CST vs CDT offsets, change dates, and get Lake Michigan–tuned adjustment tips! 🇺🇸⏰',
  hashtags: 'DST,ChicagoTime',
  title: 'Daylight Saving in Chicago',
};

const title = 'Daylight Saving in Chicago – Status & Dates';
const description =
  'Is DST active in Chicago? See current CST/CDT offsets, precise start & end dates, and get Lake Michigan sunrise and deep-dish pizza–tuned tips to shift your day.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Chicago time & CDT on/off status',
      'CST vs CDT offset breakdown',
      'Exact DST start & end dates (local times)',
      'Chicago-tuned adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Chicago”',
        description:
          'Choose “Chicago” to load its DST data (Central Standard vs Central Daylight Time).',
      },
      {
        name: 'Step 2: Check Current DST Mode',
        description:
          'See if Central Daylight Time (CDT) is active and what the clock reads right now.',
      },
      {
        name: 'Step 3: Review Exact Transition Dates',
        description:
          'Note the spring-forward on the second Sunday in March and fall-back on the first Sunday in November with local timestamps.',
      },
      {
        name: 'Step 4: Apply Chicago-Tuned Tips',
        description:
          'Adjust your Lake Michigan sunrise jogs and deep-dish pizza dinner times to fit the daylight schedule.',
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
  head: 'Daylight Saving in Chicago',
  subHead:
    'Is CDT active? See CST vs CDT offsets, exact change dates, and get Lake Michigan–tuned tips for seamless adjustment.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Major US Cities',
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
    originTimeZone: 'Chicago@@America/Chicago',
  },
});
