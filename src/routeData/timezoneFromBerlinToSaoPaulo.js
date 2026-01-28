import {
  FaGlobeEurope,
  FaCity,
  FaClock,
  FaSyncAlt,
  FaShareAlt,
  FaBed,
} from 'react-icons/fa';
import { TbClock24, TbPlaneTilt } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeEurope className={styles.stepIcon} aria-label="Select origin" />
    ),
    title: 'Set Your Berlin Time',
    description:
      'Our tool automatically pre-fills Berlin time (CET/CEST). You can adjust to any specific time or use live current time.',
  },
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Add destinations" />,
    title: 'Add Sao Paulo Destination',
    description:
      'Sao Paulo is already selected. You can add multiple Brazilian cities or global destinations to compare time differences simultaneously.',
  },
  {
    icon: <TbClock24 className={styles.stepIcon} aria-label="Choose format" />,
    title: 'Choose Your Time Format',
    description:
      'Select from 13+ output formats including 24-hour (common in both cities), 12-hour, ISO, or create custom time displays.',
  },
  {
    icon: <FaSyncAlt className={styles.stepIcon} aria-label="Live mode" />,
    title: 'Toggle Live or Custom Mode',
    description:
      'Use Live Mode for real-time tracking or Custom Mode to plan future meetings across the Berlin-Sao Paulo time gap.',
  },
];

const features = [
  {
    icon: (
      <TbPlaneTilt className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Smart Time Segments',
    description:
      'Instantly see when Berlin work hours overlap with Sao Paulo business days, accounting for their 4-5 hour difference.',
  },
  {
    icon: (
      <FaShareAlt className={styles.featureIcon} aria-label="Share results" />
    ),
    title: 'Share Meeting Times',
    description:
      'Generate permanent links to share optimal meeting windows between European and Brazilian colleagues.',
  },
  {
    icon: <FaBed className={styles.featureIcon} aria-label="Jet lag planner" />,
    title: 'Jet Lag Planning',
    description:
      'Use the integrated jet lag planner to prepare for travel between these major business hubs.',
  },
  {
    icon: <FaClock className={styles.featureIcon} aria-label="DST handling" />,
    title: 'Automatic DST Handling',
    description:
      'Our tool automatically adjusts for daylight saving time changes in both Germany and Brazil.',
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'The sweet spot for Berlin-Sao Paulo calls is typically 2-4 PM Berlin time (9-11 AM Sao Paulo), before Sao Paulo lunch and after Berlin morning meetings.',
  },
  {
    title: 'Historical Time Fact',
    description:
      'Brazil standardized its time zones in 1914, while Germany was one of the first countries to adopt DST during WWI. Sao Paulo has never observed DST, creating a dynamic time difference.',
  },
  {
    title: 'Weekend Planning',
    description:
      'Remember that Sunday mornings in Berlin are very early Saturday nights in Sao Paulo - plan social calls accordingly to respect evening routines.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Berlin and Sao Paulo?',
    answer:
      "Sao Paulo is typically 4 hours behind Berlin (5 hours during European summer time). When it's 3 PM in Berlin, it's 10 AM in Sao Paulo during standard periods.",
  },
  {
    question: 'Do both cities observe daylight saving time?',
    answer:
      'Berlin observes DST (CET to CEST), while Sao Paulo does not. This means the time difference changes from 4 to 5 hours during European summer months.',
  },
  {
    question: 'What are the best business hours for Berlin to Sao Paulo calls?',
    answer:
      'Early afternoon in Berlin (1-4 PM CET) corresponds to morning business hours in Sao Paulo (8-11 AM BRT), making this the most productive window for collaboration.',
  },
  {
    question: 'How does the tool handle multiple Brazilian cities?',
    answer:
      'You can add other Brazilian destinations like Rio de Janeiro or Brasilia - all follow the same BRT time zone as Sao Paulo for accurate multi-city planning.',
  },
];

const links = [
  { name: 'London → Delhi', path: `/${PATHS.timezoneFromLondonToDelhi}` },
  {
    name: 'Frankfurt → Singapore',
    path: `/${PATHS.timezoneFromFrankfurtToSingapore}`,
  },
  {
    name: 'Zurich → Hong Kong',
    path: `/${PATHS.timezoneFromZurichToHongKong}`,
  },
  {
    name: 'Stockholm → Bengaluru',
    path: `/${PATHS.timezoneFromStockholmToBengaluru}`,
  },
  {
    name: 'Istanbul → Bangkok',
    path: `/${PATHS.timezoneFromIstanbulToBangkok}`,
  },
];

const howItWorks = [
  'Converts time between Berlin (Europe/Berlin IANA zone) and Sao Paulo (America/Sao_Paulo IANA zone)',
  'Automatically adjusts for CET/CEST and BRT time zone rules',
  'Calculates the 4-5 hour difference based on current DST periods',
  'Uses reliable time zone databases for accurate historical and future conversions',
  'Supports both live updating and static time calculations for planning',
];

const ssData = {
  text: 'Easily convert time between Berlin and Sao Paulo with smart scheduling features. Perfect for business and travel planning!',
  hashtags: 'TimeZone,Berlin,SaoPaulo,BusinessHours,Productivity',
  title: 'Berlin to Sao Paulo Time Converter',
};

const title = 'Berlin to Sao Paulo Time (CET to BRT)';
const description =
  'Convert Berlin to Sao Paulo time with 4-5 hour difference. Perfect for EU-Brazil business calls and travel planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live time conversion between Berlin and Sao Paulo',
      'Smart scheduling for business hours overlap',
      'Multiple time format outputs',
      'Jet lag and DST planning tools',
    ],
    steps: [
      {
        name: 'Set Berlin time',
        description:
          'Input current Berlin time or use live clock for real-time conversion',
      },
      {
        name: 'Add Sao Paulo destination',
        description: 'Select Sao Paulo as your target time zone for conversion',
      },
      {
        name: 'Choose output format',
        description:
          'Select from 13+ time display formats including 24h and custom options',
      },
      {
        name: 'Analyze results',
        description:
          'View time difference, optimal meeting windows, and scheduling recommendations',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.tz.json',
  });
};

export const getData = (page) => ({
  head: 'Berlin to Sao Paulo Time Converter',
  subHead:
    'Bridge the 4-5 hour gap between European and Brazilian business hubs with precision scheduling and smart time management',
  featuresHead: 'Features Perfect for Berlin-Sao Paulo Coordination',
  tipsHead: 'Scheduling Insights for EU-Brazil Connections',
  faqsHead: 'Berlin to Sao Paulo Time Questions',
  linksHead: 'European Cities to Asian Metropolises',
  howItWorksHead: 'Technical Conversion Process',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  showLegend: true,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Berlin@@Europe/Berlin',
    destinationTimeZone: 'Sao Paulo@@America/Sao_Paulo',
  },
});
