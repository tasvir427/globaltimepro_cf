import {
  FaGlobeAmericas,
  FaExchangeAlt,
  FaShareAlt,
  FaHistory,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { TbWorld, TbBuildingMosque } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbBuildingMosque
        className={styles.stepIcon}
        aria-label="Select origin"
      />
    ),
    title: 'Begin in Cairo Time',
    description:
      'Enter "Cairo" or Africa/Cairo as your starting point. The tool auto-configures for Eastern European Time (EET).',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Add destinations"
      />
    ),
    title: 'Connect to Istanbul',
    description:
      'Add "Istanbul" or Europe/Istanbul to see the single-hour time difference that bridges two continents.',
  },
  {
    icon: <FaHistory className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Time Perspective',
    description:
      'Choose Live mode for current coordination or Custom mode to plan future events across cultural and business calendars.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share results" />,
    title: 'Bridge Cultural Timing',
    description:
      'Share converted times accounting for different weekend patterns (Friday-Saturday in Cairo vs full weekend in Istanbul).',
  },
];

const features = [
  {
    icon: (
      <TbWorld className={styles.featureIcon} aria-label="Continental bridge" />
    ),
    title: 'Continental Coordination',
    description:
      'Seamlessly convert between Africa/Cairo and Europe/Istanbul time zones, bridging African and European business hours.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Swap function"
      />
    ),
    title: 'Bidirectional Cultural Insight',
    description:
      'Instantly swap to see Istanbul to Cairo timing, understanding both perspectives for mutual scheduling respect.',
  },
  {
    icon: <FaMoon className={styles.featureIcon} aria-label="Prayer times" />,
    title: 'Cultural Rhythm Awareness',
    description:
      'Plan around prayer times and cultural patterns that affect business hours in both Muslim-majority cities.',
  },
  {
    icon: (
      <FaSun className={styles.featureIcon} aria-label="Seasonal changes" />
    ),
    title: 'Seasonal Alignment Tracking',
    description:
      'Monitor when both cities shift to daylight saving time, maintaining the consistent 1-hour difference year-round.',
  },
];

const tips = [
  {
    title: 'Historical Time Synchronization',
    description:
      'Both cities used local solar time for centuries before adopting time zones. Cairo standardized to Eastern European Time in the late 19th century, while Istanbul transitioned through various systems before settling on its current time zone.',
  },
  {
    title: 'Business Hour Harmony',
    description:
      'Leverage the nearly identical business hours (9 AM-5 PM in both cities) for real-time collaboration between these economic capitals.',
  },
  {
    title: 'Cultural Event Planning',
    description:
      'Coordinate Ramadan schedules and holiday events considering the slight seasonal time variations and different cultural observances.',
  },
  {
    title: 'Academic Collaboration Window',
    description:
      'Use the tool to find optimal times for joint research between Cairo and Istanbul universities, accounting for different academic calendars.',
  },
];

const faqs = [
  {
    question: 'Why is there only 1 hour difference between Cairo and Istanbul?',
    answer:
      'Despite being in different continents, both cities observe similar time zones - Cairo uses EET (UTC+2) and Istanbul uses TRT (UTC+3), creating a consistent 1-hour difference.',
  },
  {
    question: 'How do different weekend patterns affect scheduling?',
    answer:
      'Cairo typically observes Friday-Saturday weekend while Istanbul has full Saturday-Sunday weekend. Our tool helps identify optimal weekdays for meetings.',
  },
  {
    question:
      "What's the best time for trade discussions between these cities?",
    answer:
      'Mid-morning in Istanbul (10:00-11:00) corresponds to early morning in Cairo (09:00-10:00), ideal for starting fresh on joint initiatives.',
  },
  {
    question: 'Do both cities observe daylight saving time changes?',
    answer:
      'Both have historically observed DST, but policies have changed over time. Our tool automatically updates with current regulations.',
  },
];

const links = [
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  {
    name: 'Nairobi → Amsterdam',
    path: `/${PATHS.timezoneFromNairobiToAmsterdam}`,
  },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
  { name: 'Lagos → New York', path: `/${PATHS.timezoneFromLagosToNewYork}` },
];

const howItWorks = [
  'Converts between Africa/Cairo (EET - UTC+2) and Europe/Istanbul (TRT - UTC+3) IANA time zones',
  'Maintains the consistent 1-hour time difference (Istanbul ahead) throughout the year',
  'Accounts for historical time zone policy changes in both Egypt and Turkey',
  'Processes calculations using precise UTC offsets with automatic DST adjustment when applicable',
];

const ssData = {
  text: 'Bridge continents with Cairo to Istanbul time conversion! Perfect for Middle East-Mediterranean business and cultural coordination. 🕐🇪🇬➡️🇹🇷',
  hashtags: 'CairoIstanbul,TimeZone,CrossContinental,MiddleEastBusiness',
  title: 'Cairo to Istanbul Time Converter',
};

const title = 'Cairo to Istanbul Time Converter (EET to TRT)';
const description =
  'Convert Cairo to Istanbul time with 1-hour difference. Essential for Middle East business, cultural coordination, and cross-continental planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Cairo to Istanbul time conversion',
      'Cross-continental business hour coordination',
      'Cultural pattern awareness features',
      'Automatic DST adjustment handling',
    ],
    steps: [
      {
        name: 'Set Cairo as origin time zone',
        description:
          'Select Africa/Cairo or type city name to establish EET base time',
      },
      {
        name: 'Add Istanbul as destination',
        description:
          'Enter Europe/Istanbul to see converted time with 1-hour difference',
      },
      {
        name: 'Choose Live or Custom time mode',
        description:
          'View current times or plan future events across cultural calendars',
      },
      {
        name: 'Share timing across cultures',
        description:
          'Generate links or copy results for seamless cross-continental coordination',
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
  head: 'Cairo to Istanbul Time Conversion',
  subHead:
    'Bridge the continental divide between Africa and Europe with culturally-aware time coordination between these historic capitals',
  featuresHead: 'Cross-Continental Coordination Features',
  tipsHead: 'Cultural and Historical Timing Insights',
  faqsHead: 'Cairo-Istanbul Time Coordination Questions',
  linksHead: 'Africa & Middle East Connections',
  howItWorksHead: 'Technical Time Zone Processing',
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
    originTimeZone: 'Cairo@@Africa/Cairo',
    destinationTimeZone: 'Istanbul@@Europe/Istanbul',
  },
});
