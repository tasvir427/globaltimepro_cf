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
    title: 'Start with Chicago',
    description:
      'Select Chicago as your origin. It uses Central Time (CT) which switches between CST (UTC-6) and CDT (UTC-5) for Daylight Saving.',
  },
  {
    icon: (
      <FaBuilding className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target Tokyo',
    description:
      'Add Tokyo as your destination. It uses Japan Standard Time (JST, UTC+9) consistently with no DST changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Chicago to find the corresponding time in Tokyo.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Plan',
    description:
      'Use the Copy button for invites. The significant time difference means careful scheduling is essential for collaboration.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for Chicago',
    description:
      'Chicago observes DST while Tokyo does not. Our tool automatically tracks these seasonal time changes, ensuring accuracy year-round.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Date Change" />
    ),
    title: 'Clear Date Change Indicators',
    description:
      'The 14-15 hour difference often means date changes. Our tool clearly flags when the converted time falls on a different calendar day.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The small overlap occurs in late afternoon Chicago time and morning Tokyo time. Chicago 3-4 PM CDT converts to Tokyo 5-6 AM JST the next day.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Chicago played a key role in establishing US time zones in 1883. Tokyo adopted standard time in 1888, aligning with the Meiji modernization era.',
  },
  {
    title: 'Manufacturing Collaboration',
    description:
      'For automotive and manufacturing industries, the time difference allows for a "follow-the-sun" workflow between these industrial hubs.',
  },
  {
    title: 'Travel Planning Considerations',
    description:
      'Flights from Chicago to Tokyo typically take 13-14 hours. Use our Jet Lag Planner to prepare for this significant time change and date line crossing.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Chicago and Tokyo?',
    answer:
      'Tokyo is 15 hours ahead of Chicago when Chicago is on Central Standard Time (CST, UTC-6). During Central Daylight Time (CDT, UTC-5), Tokyo is 14 hours ahead.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'No. Chicago observes DST, switching between CST and CDT. Tokyo does not observe DST and remains on Japan Standard Time (JST, UTC+9) throughout the year.',
  },
  {
    question: "Why doesn't Japan observe Daylight Saving Time?",
    answer:
      'Japan abolished DST after World War II due to energy concerns and public opposition. The consistent time schedule simplifies business operations nationwide.',
  },
  {
    question:
      'What is the best time for a video call between Chicago and Tokyo?',
    answer:
      'The most practical window is late afternoon in Chicago (3-4 PM CDT) which is early morning in Tokyo (5-6 AM JST) the next day. This allows Chicago to finish their day while Tokyo is starting theirs.',
  },
];

const links = [
  { name: 'London → Tokyo', path: `/${PATHS.timezoneFromLondonToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (America/Chicago for Chicago, Asia/Tokyo for Tokyo) for precise conversions.',
  "Automatically adjusts for Chicago's DST changes while maintaining Tokyo's consistent UTC+9 offset.",
  'Calculates the 14-15 hour time difference accurately, including date changes.',
  'Formats the output according to your preference for easy sharing across cultures.',
];

const ssData = {
  text: 'Convert Chicago time to Tokyo time! Handles 14-15 hour difference and DST automatically. Essential for US-Japan collaboration.',
  hashtags: 'Chicago,Tokyo,TimeZone',
  title: 'Chicago to Tokyo Time Converter - CST/CDT to JST',
};

const title = 'Chicago to Tokyo Time Converter - CST/CDT to JST';
const description =
  'Convert Chicago time to Tokyo time. Handles 14–15 hour difference with automatic DST adjustment. Ideal for business and travel planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate CST/CDT to JST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for Chicago',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Chicago as Origin',
        description:
          'Select Chicago using city, IANA (America/Chicago), or abbreviation (CST/CDT). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Tokyo as Destination',
        description:
          'Tokyo uses Japan Standard Time (JST, UTC+9) consistently throughout the year with no DST changes.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Chicago to Tokyo.',
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
  head: 'Chicago to Tokyo Time Converter',
  subHead:
    'Connect the Midwest US with Japan. Convert Chicago time to Tokyo time with automatic DST adjustment and business scheduling insights.',
  featuresHead: 'Key Features for Chicago-Tokyo Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Tokyo Timezone Conversions',
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
    originTimeZone: 'Chicago@@America/Chicago',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
