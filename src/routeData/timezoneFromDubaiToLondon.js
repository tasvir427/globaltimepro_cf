import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import { GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { TbBuildingCastle } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Dubai',
    description:
      'Select Dubai as your origin. It maintains consistent Gulf Standard Time (GST, UTC+4) throughout the year with no seasonal changes.',
  },
  {
    icon: (
      <TbBuildingCastle
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Target London',
    description:
      'Add London as your destination. It alternates between Greenwich Mean Time and British Summer Time based on the season.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Choose Your Time View',
    description:
      'Watch real-time clocks or enter a specific moment to see the corresponding time in both financial hubs.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Apply Your Conversion',
    description:
      'Copy results for scheduling or use the info button to understand seasonal time changes between these cities.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Seasonal Changes"
      />
    ),
    title: "Handles London's Seasonal Time Shifts",
    description:
      'Automatically adjusts for British Summer Time, ensuring accurate scheduling year-round without manual calculations.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Business Focus" />
    ),
    title: 'Optimized for Financial Sector Timing',
    description:
      "Perfect for coordinating between Dubai's financial free zones and London's Square Mile, accounting for trading hours overlap.",
  },
];

const tips = [
  {
    title: 'Financial Market Overlap',
    description:
      'Dubai financial hours (8 AM-3 PM GST) overlap with London morning (5-10 AM BST), creating a 3-hour window for international trading.',
  },
  {
    title: 'Historical Time Alignment',
    description:
      'Interestingly, before 1971, Dubai used to align its time with nearby emirates. The UAE standardized on GST in 1991 for economic consistency.',
  },
  {
    title: 'Business Meeting Sweet Spot',
    description:
      'Schedule calls at 11 AM Dubai time (7 AM BST) when both cities are fully operational. Avoid Friday mornings in Dubai (weekend).',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Dubai and London?',
    answer:
      'Dubai is 4 hours ahead of London during GMT (winter) and 3 hours ahead during BST (summer). The difference changes seasonally.',
  },
  {
    question: 'Why does the time difference change between these cities?',
    answer:
      'London observes Daylight Saving Time (switching to BST) while Dubai maintains consistent GST year-round, causing the seasonal variation.',
  },
  {
    question: 'What are the best days for Dubai-London business calls?',
    answer:
      'Monday-Thursday work best. Remember Dubai has a Friday-Saturday weekend, while London is Saturday-Sunday.',
  },
];

const links = [
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (Asia/Dubai, Europe/London) with historical DST data accuracy',
  "Automatically adjusts for London's seasonal time changes while maintaining Dubai's consistent offset",
  'Calculates the 3-4 hour difference based on actual date and DST status',
  'Provides clear visual indicators for time-of-day context in both locations',
];

const ssData = {
  text: 'Convert Dubai time to London time! Handles 3-4 hour difference and seasonal changes automatically. Essential for business.',
  hashtags: 'Dubai,London,TimeZone,Business',
  title: 'Dubai to London Time Converter - GST to GMT/BST',
};

const title = 'Dubai to London Time Converter - GST to GMT/BST';
const description =
  'Convert Dubai time to London time. Handles 3–4 hour difference with automatic DST adjustment. Perfect for business scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate GST to GMT/BST conversion',
      'Live and custom time modes',
      'Automatic DST adjustment',
      'One-click copy for scheduling',
    ],
    steps: [
      {
        name: 'Set Dubai as Origin',
        description:
          'Select Dubai as your starting point. It uses Gulf Standard Time (GST, UTC+4) consistently year-round.',
      },
      {
        name: 'Add London as Destination',
        description:
          'Add London as your target. It switches between GMT (UTC+0) and BST (UTC+1) for Daylight Saving.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Toggle between Live clocks or enter a custom time to see the conversion instantly.',
      },
      {
        name: 'Apply Conversion Results',
        description:
          'Copy results or use them directly for meetings, calls, or travel scheduling.',
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
  head: 'Dubai to London Time Converter',
  subHead:
    'Connect two global financial hubs with precise time conversions. Perfect for business scheduling between these economic centers.',
  featuresHead: 'Why This Conversion Matters',
  tipsHead: 'Strategic Scheduling Insights',
  faqsHead: 'Common Questions Answered',
  linksHead: 'Other Dubai and London Timezone Conversions',
  howItWorksHead: 'Precision Time Conversion',
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
    originTimeZone: 'Dubai@@Asia/Dubai',
    destinationTimeZone: 'London@@Europe/London',
  },
});
