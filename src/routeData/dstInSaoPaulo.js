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
    title: 'Select São Paulo',
    description:
      'Search for “São Paulo” to view its fixed Brasília Time (UTC−03:00).',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Confirm No DST" />
    ),
    title: 'Confirm No DST Observance',
    description:
      'See that clocks no longer shift—Brazil discontinued DST after 2018.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Review Historical DST" />
    ),
    title: 'Review Historical DST',
    description:
      'Explore previous DST periods (2008–2018) and their exact change dates.',
  },
  {
    icon: (
      <FaShareSquare
        className={styles.stepIcon}
        aria-label="Learn Time Zones"
      />
    ),
    title: 'Learn Brazil’s Time Zones',
    description:
      'Understand all four national time zones to plan meetings and travel.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.stepIcon} aria-label="Follow Tips" />
    ),
    title: 'Follow Coordination Tips',
    description:
      'Get best practices for scheduling across regions without worrying about DST.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Fixed Offset" />
    ),
    title: 'Fixed UTC−03:00 Offset',
    description:
      'Clocks remain on Brasília Time all year—no forward/back shifts.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Historical Reference"
      />
    ),
    title: 'Historical DST Reference',
    description:
      'Access detailed DST change dates from 2008–2018 for archival accuracy.',
  },
];

const tips = [
  {
    title: 'Schedule International Calls Safely',
    description:
      'Since São Paulo doesn’t change, coordinate using UTC−03:00 and double-check counterparts’ DST rules.',
  },
  {
    title: 'Use World-Clock Widgets',
    description:
      'Display Brazil’s four time zones side-by-side to avoid confusion when planning events.',
  },
  {
    title: 'Archive Past DST Data',
    description:
      'Keep a record of 2008–2018 change dates if you work with historical datasets or legal timestamps.',
  },
  {
    title: 'Set Analog Clocks Once',
    description:
      'Manually set all non-smart clocks to UTC−03:00 and forget DST adjustments forever.',
  },
];

const faqs = [
  {
    question: 'When did Brazil stop using DST?',
    answer:
      'Brazil abolished DST in April 2019; since then, clocks stay on Brasília Time (UTC−03:00) year-round.',
  },
  {
    question: 'Why was DST discontinued?',
    answer:
      'Declining energy savings and public health concerns led to its permanent suspension in 2019.',
  },
  {
    question: 'How many time zones does Brazil have?',
    answer:
      'Brazil spans four zones: UTC−02:00, UTC−03:00 (São Paulo), UTC−04:00, and UTC−05:00 in the west.',
  },
];

const links = [
  { name: 'Rio de Janeiro', path: `/${PATHS.dstInRioDeJaneiro}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Lagos', path: `/${PATHS.dstInLagos}` },
];

const howItWorks = [
  'Loads São Paulo’s fixed UTC−03:00 offset with no DST changes.',
  'Provides historical DST data from 2008–2018 for reference.',
  'Outlines Brazil’s four time zones for cross-region planning.',
  'Delivers tips for consistent scheduling without clock shifts.',
];

const ssData = {
  text: 'São Paulo no longer observes DST—clocks stay on UTC−03:00 year-round. Learn about past DST and Brazil’s four time zones! 🇧🇷⏰',
  hashtags: 'BrazilTime,DST',
  title: 'Daylight Saving in São Paulo',
};

const title = 'Daylight Saving in São Paulo – Not Observed';
const description =
  'São Paulo no longer observes DST. See its year-round offset (UTC-03:00), past DST history, and tips for managing time consistency across Brazil’s four time zones.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Year-round UTC−03:00 offset (no DST)',
      'Confirmation that BRST is discontinued',
      'Historical DST periods (2008–2018) overview',
      'Overview of Brazil’s 4 time zones',
      'Practical tips for time coordination',
    ],
    steps: [
      {
        name: 'Step 1: Select São Paulo',
        description:
          'Choose “São Paulo” to load its current year-round time data (UTC-03:00).',
      },
      {
        name: 'Step 2: Confirm No DST Observance',
        description:
          'See that Brasília Summer Time (BRST) is no longer used—clocks stay on BRT all year.',
      },
      {
        name: 'Step 3: Review Historical DST',
        description:
          'Explore past DST periods (e.g. 2008–2018) and their start/end dates for context.',
      },
      {
        name: 'Step 4: Understand Brazil’s Time Zones',
        description:
          'Learn about Brazil’s four time zones so you can coordinate across regions smoothly.',
      },
      {
        name: 'Step 5: Follow Best-Practice Tips',
        description:
          'Get advice on scheduling calls and events consistently, regardless of DST changes elsewhere.',
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
  head: 'Daylight Saving in São Paulo',
  subHead:
    'São Paulo no longer observes DST—clocks stay on UTC−03:00. Explore past DST history and learn to schedule across Brazil’s four time zones.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Scheduling Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Major Latin American Cities',
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
    originTimeZone: 'Sao Paulo@@America/Sao_Paulo',
  },
});
