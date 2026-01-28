import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import { GiMoneyStack, GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { MdLocationCity } from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Begin with Beijing',
    description:
      'Choose Beijing as your origin city. It maintains China Standard Time (CST, UTC+8) without seasonal adjustments throughout the year.',
  },
  {
    icon: (
      <MdLocationCity
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Destination: New York',
    description:
      'Select New York as your target location. It observes seasonal changes between Eastern Standard Time and Eastern Daylight Time.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Configure Time Display',
    description:
      'Switch between live synchronization or input a specific datetime to see corresponding times across these financial capitals.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Implement Conversion Insights',
    description:
      'Apply the time conversion for business meetings, consider time segment colors for optimal scheduling, or coordinate international projects.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Time difference"
      />
    ),
    title: 'Large Time Difference Management',
    description:
      'Handles the 12-13 hour gap effectively, clearly indicating date changes and optimal windows for US-China business relations.',
  },
  {
    icon: (
      <GiMoneyStack
        className={styles.featureIcon}
        aria-label="Business optimization"
      />
    ),
    title: 'Business Collaboration Optimization',
    description:
      'Tailored for finance, trade, and corporate sectors where Beijing-New York coordination is crucial and time-sensitive.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'Automatic Seasonal Adjustment',
    description:
      "Seamlessly manages New York's seasonal time changes while maintaining Beijing's consistent timekeeping throughout the year.",
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The limited overlap occurs in Beijing evening (7-9 PM CST) which is New York morning (7-9 AM EDT), ideal for brief daily check-ins.',
  },
  {
    title: 'Financial Market Coordination',
    description:
      'When Beijing markets close at 3 PM CST, New York markets are just opening at 3 AM EDT, allowing for overnight trading analysis.',
  },
  {
    title: 'Historical Time Context',
    description:
      'China adopted a single time zone (CST) in 1949 for national unity, while New York has observed DST since 1918. This difference affects modern business.',
  },
  {
    title: 'Travel Planning Considerations',
    description:
      'Flights from Beijing to New York take about 13-14 hours. Use our Jet Lag Planner to prepare for the significant time change and date line crossing.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Beijing and New York?',
    answer:
      'Beijing is 12 hours ahead of New York during Eastern Daylight Time (EDT) and 13 hours ahead during Eastern Standard Time (EST). New York observes seasonal changes while Beijing remains consistent.',
  },
  {
    question: 'How does this affect business between China and the US?',
    answer:
      'The time difference requires careful planning for real-time collaboration, but enables follow-the-sun workflows for continuous business operations.',
  },
  {
    question: 'Are there any good times for video conferences?',
    answer:
      'Beijing evening (7-9 PM CST) corresponds to New York morning (7-9 AM EDT), providing a small window for meetings during business hours in both cities.',
  },
  {
    question: 'Why does China use a single time zone?',
    answer:
      'China uses CST nationwide for administrative simplicity and national unity, despite its wide geographical span, which affects time coordination with other countries.',
  },
];

const links = [
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
];

const howItWorks = [
  'Utilizes IANA time zones (Asia/Shanghai for Beijing, America/New_York for New York) with accurate historical timekeeping data',
  "Automatically accommodates New York's seasonal time variations while maintaining Beijing's consistent UTC+8 offset",
  'Calculates the 12-13 hour differential precisely, accounting for date changes due to the International Date Line',
  'Provides business context indicators relevant to finance, trade, and corporate sectors between these cities',
  'Supports various output formats tailored to international meeting planning and cross-Pacific collaboration needs',
];

const ssData = {
  text: 'Convert Beijing time to New York time! Handles 12-13 hour difference and DST automatically. Essential for US-China business.',
  hashtags: 'Beijing,NewYork,TimeZone,Business',
  title: 'Beijing to New York Time Converter - CST to EST/EDT',
};

const title = 'Beijing to New York Time Converter - CST to EST/EDT';
const description =
  'Convert Beijing time to New York time. Handles 12-13 hour difference with automatic DST adjustment. Essential for business and travel planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise CST to EST/EDT conversion',
      'Dual time viewing modes',
      'Seasonal DST automation',
      'Business timing indicators',
      'Multi-location comparison',
      'Instant result sharing',
      'Cross-continent scheduling',
    ],
    steps: [
      {
        name: 'Set Beijing as Origin Point',
        description:
          'Select Beijing as your starting location. It uses China Standard Time (CST, UTC+8) consistently throughout the year.',
      },
      {
        name: 'Add New York as Destination',
        description:
          'Include New York as your target city. It switches between Eastern Standard Time and Eastern Daylight Time seasonally.',
      },
      {
        name: 'Select Time Viewing Mode',
        description:
          'Choose between real-time clock display or enter a specific moment for precise conversion between these economic hubs.',
      },
      {
        name: 'Apply Conversion Insights',
        description:
          'Utilize the results for meeting coordination, check optimal windows, or plan cross-Pacific initiatives.',
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
  head: 'Beijing to New York Time Converter',
  subHead:
    'Connect two global economic hubs with precise time conversions. Essential for business, finance, and trade coordination across the Pacific.',
  featuresHead: 'Business Collaboration Advantages',
  tipsHead: 'Economic Coordination Insights',
  faqsHead: 'Business Partnership Questions',
  linksHead: 'Other Beijing and New York Timezone Conversions',
  howItWorksHead: 'Precision Time Conversion System',
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
    originTimeZone: 'Beijing@@Asia/Shanghai',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
