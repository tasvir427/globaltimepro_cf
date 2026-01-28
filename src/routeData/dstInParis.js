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
    title: 'Search “Paris”',
    description:
      'Load Paris’s Central European Time (CET) vs Central European Summer Time (CEST) details.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'Check Live Status',
    description:
      'Instantly see whether CEST is active and what the local clock reads.',
  },
  {
    icon: (
      <FaClock
        className={styles.stepIcon}
        aria-label="Review Transition Dates"
      />
    ),
    title: 'Review Transition Dates',
    description:
      'Note clocks spring forward on the last Sunday in March at 2 AM and fall back on the last Sunday in October at 3 AM (local times).',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Follow Tips" />
    ),
    title: 'Apply Paris-Tuned Tips',
    description:
      'Adjust your museum visits, river cruises, and café reservations around the time shift.',
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
    title: 'Exact Offset Breakdown',
    description:
      'Compare CET (UTC+1) vs CEST (UTC+2) with minute-level precision.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Local Tips" />
    ),
    title: 'Paris-Specific Advice',
    description:
      'Guidance for Louvre opening hours, Seine cruises, and outdoor cafés.',
  },
];

const tips = [
  {
    title: 'Shift Louvre Visits',
    description:
      'On spring-forward, arrive 30 minutes later to match the museum’s adjusted opening time.',
  },
  {
    title: 'Reschedule Seine Cruises',
    description:
      'Book afternoon boat tours 20 minutes earlier after fall-back to catch golden-hour light.',
  },
  {
    title: 'Adjust Café Reservations',
    description:
      'Move your terrace seating 15 minutes later on spring-forward for brighter mornings.',
  },
  {
    title: 'Reset Analog Clocks',
    description:
      'Manually adjust any non-digital timepieces at the exact transition hour.',
  },
];

const faqs = [
  {
    question: 'Do metro and train schedules shift on DST days?',
    answer:
      'RATP and SNCF adjust timetables by the hour; check official apps for real-time updates.',
  },
  {
    question: 'Will Eiffel Tower hours change?',
    answer:
      'Operating hours stay the same, but sunset visits benefit from extended daylight under CEST.',
  },
  {
    question: 'How does DST affect local business hours?',
    answer:
      'Many shops extend evening hours during CEST—ideal for late-night shopping on the Champs-Élysées.',
  },
];

const links = [
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'Madrid', path: `/${PATHS.dstInMadrid}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
];

const howItWorks = [
  'Detects Paris’s current time and DST status via tzdb.',
  'Highlights annual spring-forward and fall-back moments at their exact local times.',
  'Displays CET vs CEST offsets with precise timestamps.',
  'Delivers tailored tips for museums, cruises, and cafés around the shift.',
];

const ssData = {
  text: 'Clocks spring forward on the last Sunday in March and fall back on the last Sunday in October. Get CET⇄CEST offsets, switch times, and tips for Louvre visits, Seine cruises, and cafés.',
  hashtags: 'DST,Paris,TravelTips',
  title: 'Daylight Saving in Paris',
};

const title = 'Daylight Saving in Paris: Dates & Local Tips';
const description =
  'Clocks change on the last Sunday in March and October. Get CET⇄CEST offsets, switch times, and tips for Louvre visits, Seine cruises, and cafés.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Paris clock & DST status',
      'Exact CET vs CEST offset breakdown',
      'Annual transition times at local timestamps',
      'Paris museum, cruise, and café tips',
    ],
    steps: [
      {
        name: 'Step 1: Search “Paris”',
        description:
          'Load CET vs CEST details for Paris, including switch times at 2 AM and 3 AM.',
      },
      {
        name: 'Step 2: Check Current DST Mode',
        description:
          'See whether CEST is active and view the current local time.',
      },
      {
        name: 'Step 3: Review Transition Dates',
        description:
          'Note spring-forward on the last Sunday in March at 2 AM and fall-back on the last Sunday in October at 3 AM.',
      },
      {
        name: 'Step 4: Apply Paris-Tuned Tips',
        description:
          'Adjust your museum, cruise, and café plans to fit the shifted daylight hours.',
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
  head: 'Daylight Saving in Paris',
  subHead:
    'Clocks spring forward on the last Sunday in March and fall back on the last Sunday in October. See CET⇄CEST offsets, switch times, and local tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'European Cultural Capitals',
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
    originTimeZone: 'Paris@@Europe/Paris',
  },
});
