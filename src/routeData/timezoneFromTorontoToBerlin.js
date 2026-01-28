import {
  FaBuilding,
  FaCheckCircle,
  FaCity,
  FaClock,
  FaGlobe,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Toronto',
    description:
      'Select Toronto as your origin. It uses Eastern Time (ET) which switches between EST (UTC-5) and EDT (UTC-4) for Daylight Saving.',
  },
  {
    icon: (
      <FaBuilding className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target Berlin',
    description:
      'Add Berlin as your destination. It uses Central European Time (CET, UTC+1) or Central European Summer Time (CEST, UTC+2) for DST.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Toronto to find the corresponding time in Berlin.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Plan',
    description:
      'Use the Copy button for invites. The time difference requires careful scheduling for optimal collaboration.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for Both Cities',
    description:
      'Both Toronto and Berlin observe DST, but on slightly different schedules. Our tool automatically tracks these changes.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Business Focus"
      />
    ),
    title: 'Optimized for Business Scheduling',
    description:
      'The 6-7 hour difference allows for overlapping business hours. Our tool helps find the best times for meetings.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The ideal overlap is Toronto morning (9-11 AM EDT) which is Berlin afternoon (3-5 PM CEST). This works well for both sides.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Both Canada and Germany were early adopters of standard time zones in the late 19th century to support rail transportation.',
  },
  {
    title: 'DST Transition Awareness',
    description:
      'North America and Europe switch DST on different dates. Be aware of the 2-3 week period when the time difference is 6 instead of 7 hours.',
  },
  {
    title: 'Travel Planning',
    description:
      'Flights from Toronto to Berlin take about 7-8 hours. Use our Jet Lag Planner to adjust your sleep schedule for the time change.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Toronto and Berlin?',
    answer:
      'Berlin is 6 hours ahead of Toronto when both are on daylight time (EDT to CEST). When both are on standard time (EST to CET), Berlin is 7 hours ahead.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'Yes, both observe DST but on slightly different schedules. Toronto switches in March and November, while Berlin switches in March and October.',
  },
  {
    question: 'When is the time difference 6 hours vs 7 hours?',
    answer:
      "The time difference is 6 hours when both cities are on daylight time (approximately March-October). It's 7 hours during the short periods when one city has switched but the other hasn't.",
  },
  {
    question:
      'What is the best time for a video call between Toronto and Berlin?',
    answer:
      'The best window is Toronto morning (9-11 AM EDT) which is Berlin afternoon (3-5 PM CEST). This allows both parties to be during work hours.',
  },
];

const links = [
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (America/Toronto for Toronto, Europe/Berlin for Berlin) for precise conversions.',
  'Automatically adjusts for DST changes in both cities, handling the slightly different North American and European schedules.',
  'Calculates the 6-7 hour time difference accurately based on the date and DST status.',
  'Formats the output according to your preference for easy sharing across time zones.',
];

const ssData = {
  text: 'Convert Toronto time to Berlin time! Handles 6-7 hour difference and DST automatically. Perfect for Canada-Germany collaboration.',
  hashtags: 'Toronto,Berlin,TimeZone',
  title: 'Toronto to Berlin Time Converter - EST/EDT to CET/CEST',
};

const title = 'Toronto to Berlin Time Converter - EST/EDT to CET/CEST';
const description =
  'Convert Toronto time to Berlin time. Handles 6–7 hour difference with automatic DST adjustment. Perfect for Canada-Germany collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate EST/EDT to CET/CEST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for both cities',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Toronto as Origin',
        description:
          'Select Toronto using city, IANA (America/Toronto), or abbreviation (EST/EDT). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Berlin as Destination',
        description:
          'Berlin uses Central European Time (CET/CEST) with seasonal Daylight Saving adjustments. Add it as your target city.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Toronto to Berlin.',
      },
      {
        name: 'Copy and Use Results',
        description:
          'Copy the converted time for invites, or use additional options like Swap or Info for more details.',
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
  head: 'Toronto to Berlin Time Converter',
  subHead:
    'Connect Canada with Germany. Convert Toronto time to Berlin time with automatic DST adjustment and business scheduling insights.',
  featuresHead: 'Key Features for Toronto-Berlin Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Toronto and Berlin Timezone Conversions',
  howItWorksHead: 'How We Convert Time Accurately',
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
    destinationTimeZone: 'Berlin@@Europe/Berlin',
  },
});
