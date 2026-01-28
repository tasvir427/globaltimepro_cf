import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import {
  GiCuckooClock,
  GiFamilyHouse,
  GiHeartPlus,
  GiSandsOfTime,
} from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Toronto',
    description:
      'Choose Toronto as your origin city. It uses Eastern Time which switches between EST (UTC-5) and EDT (UTC-4) seasonally.',
  },
  {
    icon: (
      <GiCuckooClock className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target London',
    description:
      'Select London as your destination. It alternates between Greenwich Mean Time (GMT) and British Summer Time (BST) with seasonal changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Select Time View',
    description:
      'Choose between live clocks for current time or enter specific times for planning calls with family and friends.',
  },
  {
    icon: (
      <GiFamilyHouse className={styles.stepIcon} aria-label="Use Results" />
    ),
    title: 'Apply for Connection',
    description:
      'Use the conversion to find optimal times for family video calls, business meetings, or coordinating with friends across time zones.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Family timing"
      />
    ),
    title: 'Family Connection Optimization',
    description:
      'Specifically designed for Canadian-British families to find perfect times for video calls across the 4-5 hour time difference.',
  },
  {
    icon: (
      <GiHeartPlus className={styles.featureIcon} aria-label="Personal use" />
    ),
    title: 'Personal Relationship Management',
    description:
      'Helps maintain connections between Toronto and London for families, friends, and long-distance relationships.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Business use" />
    ),
    title: 'Business Meeting Coordination',
    description:
      'Ideal for professionals working between Canadian and UK offices, with optimal meeting time suggestions.',
  },
];

const tips = [
  {
    title: 'Family Call Timing',
    description:
      'Best for family calls: Toronto evening (7-9 PM EDT) equals London midnight (12-2 AM BST), while Toronto morning (7-9 AM EDT) equals London midday (12-2 PM BST).',
  },
  {
    title: 'Business Hours Overlap',
    description:
      'Significant overlap exists: Toronto morning (8-11 AM EDT) corresponds to London afternoon (1-4 PM BST), ideal for collaborative work.',
  },
  {
    title: 'Weekend Planning',
    description:
      'Weekends offer more flexibility. Saturday morning in Toronto (9-11 AM) equals London afternoon (2-4 PM), perfect for longer catch-ups.',
  },
  {
    title: 'Holiday Considerations',
    description:
      'Remember major holidays may not align (Canadian Thanksgiving vs UK holidays). Our tool helps navigate these special occasions.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Toronto and London?',
    answer:
      'London is 5 hours ahead of Toronto during Eastern Standard Time (EST) and 4 hours ahead during Eastern Daylight Time (EDT).',
  },
  {
    question: 'When is the best time for family video calls?',
    answer:
      "Early Toronto evening (6-7 PM EDT) works well as it's late evening (10-11 PM BST) in London, or Toronto morning (7-8 AM EDT) equals London midday (12-1 PM BST).",
  },
  {
    question: 'How does daylight saving affect the time difference?',
    answer:
      'Both cities observe DST but on slightly different schedules, causing the time difference to change between 4 and 5 hours throughout the year.',
  },
  {
    question: 'What if I need to coordinate with both Toronto and London?',
    answer:
      'Use our multi-timezone feature to add both cities and see all times simultaneously for perfect coordination.',
  },
];

const links = [
  { name: 'Toronto → Berlin', path: `/${PATHS.timezoneFromTorontoToBerlin}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
];

const howItWorks = [
  'Uses IANA time zones (America/Toronto for Toronto, Europe/London for London) with accurate DST data',
  'Automatically adjusts for seasonal time variations in both countries',
  'Calculates the 4-5 hour difference precisely for personal and professional coordination',
  'Provides time segment indicators to identify family-friendly calling hours',
  'Supports multiple output formats for easy sharing with family and colleagues',
];

const ssData = {
  text: 'Convert Toronto time to London time! Handles 4-5 hour difference and DST automatically. Perfect for staying connected with loved ones.',
  hashtags: 'Toronto,London,TimeZone,Family',
  title: 'Toronto to London Time Converter - EST/EDT to GMT/BST',
};

const title = 'Toronto to London Time Converter - EST/EDT to GMT/BST';
const description =
  'Convert Toronto time to London time. Handles 4-5 hour difference with automatic DST adjustment. Perfect for business, family, and travel planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate EST/EDT to GMT/BST conversion',
      'Real-time and custom time modes',
      'Automatic DST adjustment',
      'Family connection optimization',
      'Business hours alignment',
      'One-click result sharing',
      'Travel planning integration',
    ],
    steps: [
      {
        name: 'Set Toronto as Origin',
        description:
          'Select Toronto as your starting point. It uses Eastern Time (EST/EDT) with seasonal DST changes.',
      },
      {
        name: 'Add London as Destination',
        description:
          'Include London as your target city. It switches between Greenwich Mean Time and British Summer Time.',
      },
      {
        name: 'Choose Time Viewing Mode',
        description:
          'Select between real-time display or specific time input for precise coordination.',
      },
      {
        name: 'Apply Conversion Results',
        description:
          'Utilize the conversion for family calls, business meetings, or travel planning between these connected cities.',
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
  head: 'Toronto to London Time Converter',
  subHead:
    'Stay connected across the Atlantic with precise time conversions. Perfect for families, friends, and professionals maintaining relationships between these vibrant cities.',
  featuresHead: 'Connection Advantages',
  tipsHead: 'Staying Connected Insights',
  faqsHead: 'Relationship Coordination Questions',
  linksHead: 'Other Toronto and London Timezone Conversions',
  howItWorksHead: 'Precision Connection Timing',
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
    originTimeZone: 'Toronto@@America/Toronto',
    destinationTimeZone: 'London@@Europe/London',
  },
});
