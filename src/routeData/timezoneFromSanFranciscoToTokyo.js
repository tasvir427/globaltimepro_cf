import {
  FaCheckCircle,
  FaClock,
  FaFlag,
  FaLocationArrow,
  FaShareAlt,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaLocationArrow className={styles.stepIcon} aria-label="Set Origin" />
    ),
    title: 'Start with San Francisco',
    description:
      'Select San Francisco as your origin. It uses Pacific Time (PT) which switches between PST (UTC-8) and PDT (UTC-7) for Daylight Saving.',
  },
  {
    icon: <FaFlag className={styles.stepIcon} aria-label="Add Destination" />,
    title: 'Target Tokyo',
    description:
      'Add Tokyo as your destination. Tokyo is on Japan Standard Time (JST, UTC+9) consistently, with no DST changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in San Francisco to find the corresponding time in Tokyo.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply the Conversion',
    description:
      'Use the Copy button to grab the formatted time for emails or calendars. The Swap button quickly reverses the conversion direction.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for SF',
    description:
      'San Francisco’s time changes twice a year. Our tool automatically accounts for these shifts, ensuring your conversions are always correct regardless of the season.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Large Offset" />
    ),
    title: 'Handles Large Time Difference',
    description:
      'The 16-17 hour difference between SF and Tokyo means dates often change. Our tool clearly indicates the date in both locations to avoid confusion.',
  },
];

const tips = [
  {
    title: 'Best Time for Conference Calls',
    description:
      'The ideal overlap for a live call is late afternoon in SF and morning in Tokyo. For example, 4:00 PM PDT in SF is 8:00 AM JST the next day in Tokyo.',
  },
  {
    title: 'Working Hours Alignment',
    description:
      'When it’s 9:00 AM in SF (PDT), it’s 1:00 AM the next day in Tokyo. This means SF morning meetings are too late for Tokyo colleagues. Schedule SF meetings early for Tokyo afternoon participation.',
  },
  {
    title: 'Travel Planning',
    description:
      'Flying from SF to Tokyo? You’ll likely arrive the next day. Use the Jet Lag Planner via the button to prepare your sleep schedule.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between San Francisco and Tokyo?',
    answer:
      'Tokyo is 16 hours ahead of San Francisco when SF is on Pacific Standard Time (PST, UTC-8). During Pacific Daylight Time (PDT, UTC-7), the difference is 17 hours.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'San Francisco observes DST, switching between PST and PDT. Tokyo does not observe DST and stays on JST (UTC+9) all year.',
  },
  {
    question: "If it's 3 PM in San Francisco, what time is it in Tokyo?",
    answer:
      'If it’s 3:00 PM in SF during PDT, it is 8:00 AM the next day in Tokyo. During PST, it would be 7:00 AM the next day. Our converter gives you the exact time based on the date.',
  },
];

const links = [
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
  { name: 'London → Tokyo', path: `/${PATHS.timezoneFromLondonToTokyo}` },
  { name: 'Chicago → Tokyo', path: `/${PATHS.timezoneFromChicagoToTokyo}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
];

const howItWorks = [
  'Uses IANA time zones (America/Los_Angeles for SF, Asia/Tokyo for Tokyo) for precise conversions.',
  'Automatically adjusts for San Francisco’s DST changes, so you don’t have to remember when they occur.',
  'Calculates the large time difference accurately, including date changes, and displays them clearly.',
  'Formats the output according to your preference for easy sharing and scheduling.',
];

const ssData = {
  text: 'Convert San Francisco time to Tokyo time instantly! Handles the 16-17 hour difference and DST automatically. Essential for tech and business. 🌉🗼',
  hashtags: 'SanFrancisco,Tokyo,TimeZone,Tech',
  title: 'San Francisco to Tokyo Time Converter — PST/PDT to JST',
};

const title = 'San Francisco to Tokyo Time Converter — PST/PDT to JST';
const description =
  'Convert San Francisco time (PST/PDT) to Tokyo time (JST). Live clocks, DST auto-adjustment, and one-click copy for scheduling across the Pacific.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate PST/PDT to JST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for San Francisco',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set San Francisco as Origin',
        description:
          'Select San Francisco using city, IANA (America/Los_Angeles), or abbreviation (PST/PDT). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Tokyo as Destination',
        description:
          'Tokyo uses Japan Standard Time (JST, UTC+9) consistently year-round with no DST changes. Add it as your target.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from San Francisco to Tokyo.',
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
  head: 'San Francisco to Tokyo Time Converter',
  subHead:
    'Navigate the 16-hour time difference between SF (PST/PDT) and Tokyo (JST). Live conversions, automatic DST handling, and tools for seamless scheduling across the Pacific.',
  featuresHead: 'Why This Converter is Key for SF-Tokyo',
  tipsHead: 'Scheduling Across the Pacific',
  faqsHead: 'Common Questions about SF and Tokyo Time',
  linksHead: 'Other San Francisco and Tokyo Timezone Conversions',
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
    originTimeZone: 'San Francisco@@America/Los_Angeles',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
