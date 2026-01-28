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
    title: 'Select New York as Your Location',
    description:
      'Use our search to pick “New York” and load its EST/EDT DST details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'See right away if Eastern Daylight Time is active and what local clock time it is.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Exact Start & End',
    description:
      'Review when clocks spring forward or fall back in New York, with exact local timestamps.',
  },
  {
    icon: (
      <FaShareSquare
        className={styles.stepIcon}
        aria-label="Countdown & Tips"
      />
    ),
    title: 'Countdown to Next Change & Tips',
    description:
      'Track the time until the next shift and get tips for Wall Street hours and Broadway routines.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Precise Timing"
      />
    ),
    title: 'Minute-Precise Transitions',
    description:
      'Experience second-level accuracy on DST start/end times in New York.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="NYC-Tuned Tips"
      />
    ),
    title: 'NYC-Tuned Adjustment Tips',
    description:
      'From morning latte delays to rescheduled Broadway shows, adapt to DST like a local.',
  },
];

const tips = [
  {
    title: 'Delay Your Morning Latte',
    description:
      'Push back your first coffee to 9 AM EDT to help shift your internal clock forward.',
  },
  {
    title: 'Walk the Brooklyn Bridge',
    description:
      'Take a sunrise stroll on the Brooklyn Bridge to anchor your wake-time to the morning light.',
  },
  {
    title: 'Reschedule Showtime',
    description:
      'Plan Broadway or concert tickets 30 minutes later on change day to avoid timing confusion.',
  },
  {
    title: 'Sync Wall Street Clock',
    description:
      'Adjust your trading-day schedule by 15 minutes each day leading up to change.',
  },
];

const faqs = [
  {
    question: 'Why does DST start at 2 AM?',
    answer:
      'U.S. DST shifts occur at 2 AM local time to minimize disruption—most people are asleep and financial markets are closed.',
  },
  {
    question: 'Will my smartphone update automatically?',
    answer:
      'Most devices adjust automatically; analog clocks and watches must be reset manually at 2 AM.',
  },
  {
    question: 'What if I’m flying overnight?',
    answer:
      'If you’re in the air during the switch, set your watch to EDT/GMT on arrival and follow our tips.',
  },
];

const links = [
  { name: 'Chicago', path: `/${PATHS.dstInChicago}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Toronto', path: `/${PATHS.dstInToronto}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Atlanta', path: `/${PATHS.dstInAtlanta}` },
];

const howItWorks = [
  'Detects New York’s current time and whether EDT is active.',
  'Retrieves minute-precise DST transitions from tzdb.',
  'Calculates live countdown to the next spring/fall shift.',
  'Delivers New York–tuned tips for coffee, walks, shows, and finance.',
];

const ssData = {
  text: 'Is DST active in New York? Check EST/EDT offsets, change dates, countdown, and get NYC-tuned adjustment tips! 🇺🇸⏰',
  hashtags: 'DST,NYCTime',
  title: 'Daylight Saving in New York',
};

const title = 'Daylight Saving in New York – Status & Dates';
const description =
  'Is DST active in New York? See EST⇄EDT offsets, transition dates, countdown to next change, and tips for Wall Street schedules and Broadway shows.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live New York time & EDT on/off status',
      'EST vs EDT offset breakdown',
      'Exact DST start & end dates (local times)',
      'Countdown timer to next change',
      'New York–specific adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Select New York as Your Location',
        description:
          'Begin by choosing “New York” so all DST data reflects Eastern Time (EST/EDT).',
      },
      {
        name: 'Step 2: View Current DST Status',
        description:
          'Instantly see if Eastern Daylight Time (EDT) is active and what local time it is now.',
      },
      {
        name: 'Step 3: Check Exact Start & End',
        description:
          'Review precise “clocks forward” and “clocks back” dates and times for New York with minute-level stamps.',
      },
      {
        name: 'Step 4: Countdown to Next Change',
        description:
          'Track days, hours, and minutes remaining until the next DST transition in NYC.',
      },
      {
        name: 'Step 5: Follow NYC-Tuned Tips',
        description:
          'Get tailored advice—from shifting your morning coffee to adjusting Broadway showtimes—for a smooth transition.',
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
  head: 'Daylight Saving in New York',
  subHead:
    'Is EDT active? See EST vs EDT offsets, exact change dates, live countdown, and NYC-tuned adjustment tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Major North American Cities',
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
    originTimeZone: 'New York@@America/New_York',
  },
});
