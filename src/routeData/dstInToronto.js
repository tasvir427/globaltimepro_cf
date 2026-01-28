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
        aria-label="Search Location"
      />
    ),
    title: 'Search “Toronto”',
    description:
      'Load Toronto’s standard vs daylight-saving clocks (EST vs EDT).',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View Status" />
    ),
    title: 'Check Current Mode',
    description:
      'Instantly see whether EDT is in effect and what the clock reads downtown.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Review Dates" />,
    title: 'Review Annual Switch',
    description:
      'Note spring-forward on the second Sunday in March at 2 AM and fall-back on the first Sunday in November at 2 AM.',
  },
  {
    icon: <FaShareSquare className={styles.stepIcon} aria-label="Use Tips" />,
    title: 'Plan with Local Flair',
    description:
      'Leverage our insider tips to time CN Tower light shows, lakefront walks, and patio brunches perfectly.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Offset Detail"
      />
    ),
    title: 'Live Offset Comparison',
    description:
      'See EST (UTC–5) vs EDT (UTC–4) side by side with minute precision.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Insider Tips" />
    ),
    title: 'City-Smart Recommendations',
    description:
      'Custom advice for watching the skyline, catching Harbourfront sunsets, and dining al fresco.',
  },
];

const tips = [
  {
    title: 'Time Your CN Tower Visit',
    description:
      'On spring-forward, book sunset tickets 20 minutes later to catch the panoramic glow under EDT.',
  },
  {
    title: 'Harbourfront Golden Hour',
    description:
      'After fall-back, start your lakeside stroll 15 minutes earlier to catch the last rays on the water.',
  },
  {
    title: 'Patio Brunch Sync',
    description:
      'Shift your summer brunch on King West patios by 30 minutes to match the brighter mornings.',
  },
  {
    title: 'Reset Manual Clocks',
    description:
      'Adjust any analog clocks at the precise switch hour so your devices and décor stay in sync.',
  },
];

const faqs = [
  {
    question: 'Will the TTC run on time during DST changes?',
    answer:
      'Schedules adjust automatically—trains and buses skip or repeat that hour, so check the TTC app for live updates.',
  },
  {
    question: 'Do Blue Jays game times shift with DST?',
    answer:
      'Game start times stay fixed, but extra daylight under EDT means more sun-lit innings early in the season.',
  },
  {
    question: 'How do festival schedules adapt?',
    answer:
      'Events like Nuit Blanche use EDT’s extended evenings—always confirm timing with the official site.',
  },
];

const links = [
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
  { name: 'Chicago', path: `/${PATHS.dstInChicago}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
];

const howItWorks = [
  'Retrieves Toronto’s current clock mode (EST or EDT) via the tz database.',
  'Highlights the annual spring-forward and fall-back moments at exact local times.',
  'Displays a detailed EST⇄EDT offset chart with live timestamps.',
  'Provides insider scheduling tips for the CN Tower, waterfront, and patio scene.',
];

const ssData = {
  text: 'Clocks move on the second Sun in Mar & first Sun in Nov. See EST⇄EDT switch times and insider tips for CN Tower sundowns, Harbourfront walks & patio brunches.',
  hashtags: 'DST,Toronto,CityTips',
  title: 'Daylight Saving in Toronto',
};

const title = 'Toronto Daylight Saving: Times & Skyline Tips';
const description =
  'Clocks move on the second Sun in Mar & first Sun in Nov. See EST⇄EDT switch times and insider advice for CN Tower sundowns, Harbourfront strolls & patio brunches.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time EST⇄EDT status',
      'Minute-precise offset comparison',
      'Annual switch times at exact local hours',
      'Toronto skyline & patio insider tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Toronto”',
        description: 'Load EST vs EDT data, including annual switch times.',
      },
      {
        name: 'Step 2: Check Current DST Mode',
        description:
          'See if Eastern Daylight Time is active now and view local time.',
      },
      {
        name: 'Step 3: Review Annual Switch',
        description:
          'Note spring-forward on the second Sunday in March and fall-back on the first Sunday in November at 2 AM.',
      },
      {
        name: 'Step 4: Plan with Local Flair',
        description:
          'Use our insider tips for CN Tower, waterfront, and patio experiences.',
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
  head: 'Daylight Saving in Toronto',
  subHead:
    'Clocks move on the second Sunday in March and the first Sunday in November. See EST⇄EDT switch times and insider tips for CN Tower sundowns, Harbourfront walks, and patio brunches.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Major North American Hubs',
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
    originTimeZone: 'Toronto@@America/Toronto',
  },
});
