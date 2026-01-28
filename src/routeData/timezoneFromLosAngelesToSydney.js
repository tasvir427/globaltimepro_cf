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
    title: 'Start with Los Angeles',
    description:
      'Select Los Angeles as your origin. It uses Pacific Time (PT) which switches between PST (UTC-8) and PDT (UTC-7) for Daylight Saving.',
  },
  {
    icon: (
      <FaBuilding className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target Sydney',
    description:
      'Add Sydney as your destination. It uses Australian Eastern Time which switches between AEST (UTC+10) and AEDT (UTC+11) for DST.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Los Angeles to find the corresponding time in Sydney.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Plan',
    description:
      'Use the Copy button for invites. The large time difference means dates often change - our tool clearly indicates this to avoid confusion.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Opposite DST" />
    ),
    title: 'Automatic Opposite Hemisphere DST Adjustment',
    description:
      'Los Angeles and Sydney have opposite DST schedules. Our tool automatically syncs these changes, ensuring accuracy even during transition periods.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Date Change" />
    ),
    title: 'Clear Date Change Indicators',
    description:
      'The 16-19 hour difference means dates frequently change. Our tool clearly flags when the converted time falls on a different calendar day.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The small overlap occurs in late afternoon LA time and morning Sydney time. LA 3-5 PM PDT converts to Sydney 8-10 AM AEST the next day during winter months.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Los Angeles adopted standard time in 1883 with the US railroad system. Sydney standardized in 1895. Both cities have changed DST rules multiple times throughout history.',
  },
  {
    title: 'Entertainment Industry Coordination',
    description:
      'For film and TV collaborations, the time difference allows for a "follow-the-sun" workflow where work continues almost 24 hours between the two entertainment hubs.',
  },
  {
    title: 'Travel Planning Considerations',
    description:
      'Flights from LA to Sydney typically cross the International Date Line, arriving 2 days later. Use our Jet Lag Planner to prepare for this significant time change.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Los Angeles and Sydney?',
    answer:
      'The time difference varies from 16 to 19 hours. When both cities are on standard time, Sydney is 18 hours ahead. During DST transitions, it can range from 16 to 19 hours ahead.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'Yes, but on opposite schedules. Los Angeles observes DST from March to November, while Sydney observes it from October to April. This creates complex offset changes throughout the year.',
  },
  {
    question: 'Why is the time difference so complex between these cities?',
    answer:
      'The complexity comes from three factors: the large geographical distance, opposite hemisphere DST schedules, and the International Date Line crossing. Our tool handles all these complexities automatically.',
  },
  {
    question: 'What is the best time for a video call between LA and Sydney?',
    answer:
      'The most practical window is late afternoon in LA (4-5 PM PDT) which is morning in Sydney (9-10 AM AEST) the next day. This works well for both business hours.',
  },
];

const links = [
  { name: 'London → Sydney', path: `/${PATHS.timezoneFromLondonToSydney}` },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
];

const howItWorks = [
  'Uses IANA time zones (America/Los_Angeles for LA, Australia/Sydney for Sydney) for precise conversions.',
  'Automatically adjusts for DST changes in both cities, handling the opposite hemisphere schedules.',
  'Calculates the large time difference accurately, including date changes due to the International Date Line.',
  'Formats the output according to your preference for easy sharing across the Pacific.',
];

const ssData = {
  text: 'Convert LA time to Sydney time! Handles 16-19 hour difference and DST automatically. Essential for Pacific collaboration.',
  hashtags: 'LosAngeles,Sydney,TimeZone',
  title: 'LA to Sydney Time Converter - PST/PDT to AEST/AEDT',
};

const title = 'LA to Sydney Time Converter - PST/PDT to AEST/AEDT';
const description =
  'Convert LA time to Sydney time. Handles 16-19 hour difference with automatic DST adjustment. Perfect for Pacific collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate PST/PDT to AEST/AEDT conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for both hemispheres',
      'Large time difference with date change awareness',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Los Angeles as origin',
        description:
          'Select Los Angeles using city, IANA (America/Los_Angeles), or abbreviation (PST/PDT). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Sydney as destination',
        description:
          'Sydney uses Australian Eastern Time (AEST/AEDT) which switches between UTC+10 and UTC+11 for DST. Add it as your target.',
      },
      {
        name: 'Choose time mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Los Angeles to Sydney.',
      },
      {
        name: 'Copy and use results',
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
  head: 'Los Angeles to Sydney Time Converter',
  subHead:
    'Bridge the Pacific with precise time conversions. Convert LA time to Sydney time with automatic DST adjustment for both hemispheres.',
  featuresHead: 'Key Features for LA-Sydney Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Sydney Timezone Conversions',
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
    originTimeZone: 'Los Angeles@@America/Los_Angeles',
    destinationTimeZone: 'Sydney@@Australia/Sydney',
  },
});
