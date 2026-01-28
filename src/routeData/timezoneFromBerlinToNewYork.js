import {
  FaCheckCircle,
  FaCity,
  FaClipboard,
  FaClock,
  FaPlane,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Berlin',
    description:
      'Select Berlin as your origin. It uses Central European Time (CET/CEST) which switches between UTC+1 and UTC+2 for Daylight Saving.',
  },
  {
    icon: <FaPlane className={styles.stepIcon} aria-label="Add Destination" />,
    title: 'Target New York',
    description:
      'Add New York as your destination. It uses Eastern Time (ET) which switches between EST (UTC-5) and EDT (UTC-4) for DST.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Berlin to find the corresponding time in New York.',
  },
  {
    icon: <FaClipboard className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply the Conversion',
    description:
      'Use the Copy button to grab the formatted time for emails or calendars. The Info button confirms DST status for both cities.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for Both Cities',
    description:
      'Both Berlin and New York observe DST, but on slightly different schedules. Our tool automatically syncs these changes, ensuring accuracy year-round.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Business Overlap"
      />
    ),
    title: 'Optimized for Business Hours Overlap',
    description:
      'The 6-hour difference means there’s a solid window for collaboration. Our tool helps you find the best times for meetings across time zones.',
  },
];

const tips = [
  {
    title: 'Ideal Meeting Times',
    description:
      'For a meeting during business hours in both cities, aim for Berlin afternoon (2-4 PM CEST) which is New York morning (8-10 AM EDT). This ensures productivity for both sides.',
  },
  {
    title: 'Watch for DST Transition Weeks',
    description:
      'The US and EU switch DST on different dates. In March, New York springs forward before Berlin, temporarily reducing the gap to 5 hours. Our tool tracks this automatically.',
  },
  {
    title: 'Travel Planning',
    description:
      'Flying from Berlin to New York? You’ll lose 6 hours, so plan accordingly. Use the Jet Lag Planner via the button to adjust your sleep schedule before and after.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Berlin and New York?',
    answer:
      'Berlin is usually 6 hours ahead of New York. However, during the short periods when DST transitions are out of sync, the difference can be 5 or 6 hours. Our converter always shows the current offset.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'Yes, both Berlin and New York observe DST. Berlin switches between CET (UTC+1) and CEST (UTC+2), and New York switches between EST (UTC-5) and EDT (UTC-4).',
  },
  {
    question: "If it's 12 PM in Berlin, what time is it in New York?",
    answer:
      'If it’s 12:00 PM (noon) in Berlin during CEST, it is 6:00 AM in New York during EDT. During standard time, it would be 6:00 AM EST. Our converter gives you the exact time based on the date.',
  },
];

const links = [
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  { name: 'Toronto → Berlin', path: `/${PATHS.timezoneFromTorontoToBerlin}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  {
    name: 'Beijing → New York',
    path: `/${PATHS.timezoneFromBeijingToNewYork}`,
  },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
];

const howItWorks = [
  'Uses IANA time zones (Europe/Berlin for Berlin, America/New_York for New York) for precise conversions.',
  'Automatically adjusts for DST changes in both cities, handling the slight schedule differences between the US and EU.',
  'Calculates the time difference accurately and displays it with clear labels for time of day.',
  'Formats the output according to your preference for easy sharing and scheduling.',
];

const ssData = {
  text: 'Convert Berlin time to New York time instantly! Handles the 6-hour difference and DST automatically. Perfect for business and travel. 🗽🇩🇪',
  hashtags: 'Berlin,NewYork,TimeZone,Business',
  title: 'Berlin to New York Time Converter — CET/CEST to EST/EDT',
};

const title = 'Berlin to New York Time Converter — CET/CEST to EST/EDT';
const description =
  'Convert Berlin time (CET/CEST) to New York time (EST/EDT). Live clocks, automatic DST adjustment, and one-click copy for seamless transatlantic scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate CET/CEST to EST/EDT conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for both cities',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Berlin as Origin',
        description:
          'Select Berlin using city, IANA (Europe/Berlin), or abbreviation (CET/CEST). It observes Daylight Saving Time.',
      },
      {
        name: 'Add New York as Destination',
        description:
          'New York uses Eastern Time (ET), switching between EST (UTC-5) and EDT (UTC-4) for DST. Add it as your target.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Berlin to New York.',
      },
      {
        name: 'Copy and Use Results',
        description:
          'Copy the converted time for invites, or use other actions like Swap or Info for more details.',
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
  head: 'Berlin to New York Time Converter',
  subHead:
    'Bridge the 6-hour gap between Europe and the US. Convert Berlin time (CET/CEST) to New York time (EST/EDT) with live clocks, automatic DST adjustment, and practical scheduling tools.',
  featuresHead: 'Key Features for Berlin-New York Conversions',
  tipsHead: 'Scheduling Across the Atlantic',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Berlin and New York Timezone Conversions',
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
    originTimeZone: 'Berlin@@Europe/Berlin',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
