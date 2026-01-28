import { FaCity, FaClock, FaLaptopCode, FaRegClock } from 'react-icons/fa';
import { GiModernCity, GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with San Francisco',
    description:
      'Select San Francisco as your origin. It uses Pacific Time which switches between PST (UTC-8) and PDT (UTC-7) for Daylight Saving.',
  },
  {
    icon: (
      <GiModernCity className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target Singapore',
    description:
      'Add Singapore as your destination. It maintains consistent Singapore Standard Time (SGT, UTC+8) throughout the year.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Choose Your Time View',
    description:
      'Use Live mode for real-time comparison or enter a specific time to see how tech business hours align between these innovation hubs.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Apply Your Conversion',
    description:
      'Leverage time segment colors to identify optimal meeting times, copy results for scheduling, or explore additional planning tools.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Large time difference"
      />
    ),
    title: 'Handles Significant Time Difference',
    description:
      'Manages the 15-16 hour gap effectively, clearly indicating date changes and optimal collaboration windows for tech teams.',
  },
  {
    icon: (
      <FaLaptopCode
        className={styles.featureIcon}
        aria-label="Tech optimization"
      />
    ),
    title: 'Optimized for Tech Industry Collaboration',
    description:
      'Specifically designed for Silicon Valley-Singapore tech partnerships, with insights on follow-the-sun development workflows.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Visual Time Segment Indicators',
    description:
      'Color-coded time segments help quickly identify whether converted times fall within work hours, evenings, or overnight periods.',
  },
];

const tips = [
  {
    title: 'Follow-the-Sun Development',
    description:
      "The time difference enables continuous productivity: SF teams can hand off work to Singapore teams at day's end, creating a 24-hour development cycle.",
  },
  {
    title: 'Optimal Meeting Windows',
    description:
      'The small overlap occurs in late afternoon SF time (4-5 PM PDT) which is morning in Singapore (7-8 AM SGT). Perfect for daily standups.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Singapore adopted UTC+8 in 1982 to align with trading partners, while SF has observed DST since 1918. This historical difference affects modern business.',
  },
  {
    title: 'Tech Event Planning',
    description:
      'When planning virtual events between these tech hubs, consider that SF morning events (9 AM PDT) occur at midnight Singapore time—adjust accordingly.',
  },
];

const faqs = [
  {
    question:
      'What is the time difference between San Francisco and Singapore?',
    answer:
      'Singapore is 15 hours ahead of San Francisco during Pacific Daylight Time (PDT) and 16 hours ahead during Pacific Standard Time (PST).',
  },
  {
    question: 'How does the time difference affect tech collaboration?',
    answer:
      'The 15-16 hour difference actually enables "follow-the-sun" development where work can continue nearly 24 hours between the two tech hubs.',
  },
  {
    question: 'Are there any good overlapping business hours?',
    answer:
      'A small 1-2 hour window exists: SF late afternoon (4-5 PM) corresponds to Singapore morning (7-8 AM), suitable for daily syncs.',
  },
  {
    question: 'How do I schedule meetings that work for both time zones?',
    answer:
      'Use our tool to find optimal times, and consider rotating meeting times to share the burden of off-hours attendance between teams.',
  },
];

const links = [
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (America/Los_Angeles for SF, Asia/Singapore for Singapore) with precise DST data',
  "Automatically adjusts for SF's seasonal time changes while maintaining Singapore's consistent UTC+8 offset",
  'Calculates the 15-16 hour difference accurately, clearly indicating when dates change between locations',
  'Provides visual time segment indicators to quickly assess whether converted times are work-appropriate',
  'Supports multiple output formats and one-click copying for easy scheduling across global teams',
];

const ssData = {
  text: 'Convert SF time to Singapore time! Handles 15-16 hour difference and DST automatically. Perfect for tech collaboration.',
  hashtags: 'SanFrancisco,Singapore,TimeZone,Tech',
  title: 'San Francisco to Singapore Time Converter - PST/PDT to SGT',
};

const title = 'San Francisco to Singapore Time Converter - PST/PDT to SGT';
const description =
  'Convert San Francisco time to Singapore time. Handles 15-16 hour difference with automatic DST adjustment. Perfect for tech collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate PST/PDT to SGT conversion',
      'Live and custom time modes',
      'Automatic DST adjustment',
      'Time segment indicators',
      'Multi-destination support',
      'One-click copy functionality',
      'Shareable results',
    ],
    steps: [
      {
        name: 'Set San Francisco as Origin',
        description:
          'Select San Francisco as your starting point. It uses Pacific Time (PST/PDT) with seasonal DST changes.',
      },
      {
        name: 'Add Singapore as Destination',
        description:
          'Add Singapore as your target. It uses Singapore Standard Time (SGT, UTC+8) consistently year-round.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Toggle between Live clocks or enter a custom time to see the conversion instantly.',
      },
      {
        name: 'Utilize Conversion Results',
        description:
          'Copy results for scheduling, check time segments, or use additional tools for comprehensive planning.',
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
  head: 'San Francisco to Singapore Time Converter',
  subHead:
    'Connect two major tech innovation hubs with precise time conversions. Essential for global tech collaboration and follow-the-sun development workflows.',
  featuresHead: 'Key Advantages for Tech Collaboration',
  tipsHead: 'Strategic Tech Scheduling Insights',
  faqsHead: 'Tech Collaboration Questions Answered',
  linksHead: 'Other San Francisco and Singapore Timezone Conversions',
  howItWorksHead: 'Precision Time Conversion Technology',
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
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
