import { FaCheckCircle, FaCity, FaClock, FaGlobeAsia } from 'react-icons/fa';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Set Origin"
      />
    ),
    title: 'Start with Dubai',
    description:
      'Select Dubai as your origin. It uses Gulf Standard Time (GST, UTC+4) consistently throughout the year, with no DST observance.',
  },
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Add Destination" />,
    title: 'Target Singapore',
    description:
      'Add Singapore as your destination. It uses Singapore Standard Time (SGT, UTC+8) consistently with no DST changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Dubai to find the corresponding time in Singapore.',
  },
  {
    icon: <FaGlobeAsia className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Schedule',
    description:
      'Use the Copy button for invites. Both cities maintain consistent time zones, making scheduling predictable year-round.',
  },
];

const features = [
  {
    icon: <FaCheckCircle className={styles.featureIcon} aria-label="No DST" />,
    title: 'Consistent Time Zones Year-Round',
    description:
      'Both Dubai and Singapore maintain fixed time offsets (UTC+4 and UTC+8 respectively) with no Daylight Saving Time changes, making conversions predictable.',
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
      'The consistent 4-hour time difference makes it easy to find overlapping business hours between these major commercial hubs.',
  },
];

const tips = [
  {
    title: 'Business Hours Alignment',
    description:
      'Dubai morning (9-11 AM GST) corresponds to Singapore afternoon (1-3 PM SGT), creating a solid window for meetings and collaboration.',
  },
  {
    title: 'Historical Time Consistency',
    description:
      'Singapore has maintained UTC+8 since 1982, while Dubai has used UTC+4 since 1991. Both cities abandoned DST to simplify business operations.',
  },
  {
    title: 'Weekend Awareness',
    description:
      'Remember that the UAE weekend is Friday-Saturday, while Singapore follows a Saturday-Sunday weekend. Schedule meetings accordingly.',
  },
  {
    title: 'Financial Market Overlap',
    description:
      'The Dubai Financial Market (10 AM-2 PM GST) overlaps with Singapore Exchange afternoon session (2-5 PM SGT), creating a 2-hour trading window.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Dubai and Singapore?',
    answer:
      'Singapore is 4 hours ahead of Dubai. When it is 12:00 PM in Dubai (GST, UTC+4), it is 4:00 PM in Singapore (SGT, UTC+8).',
  },
  {
    question: 'Do either city observe Daylight Saving Time?',
    answer:
      'No. Both Dubai and Singapore do not observe Daylight Saving Time. Dubai uses Gulf Standard Time (GST, UTC+4) and Singapore uses Singapore Standard Time (SGT, UTC+8) year-round.',
  },
  {
    question: "Why don't these cities observe DST?",
    answer:
      'Both cities are located near the equator with consistent daylight hours throughout the year. Eliminating DST simplifies business operations and avoids confusion in these major commercial hubs.',
  },
  {
    question: 'Has Singapore always used UTC+8?',
    answer:
      'No. Singapore changed its time zone several times in the 20th century. It was UTC+7:20 until 1933, then UTC+7:30 until 1941, and finally adopted UTC+8 in 1982 to align with trading partners.',
  },
];

const links = [
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (Asia/Dubai for Dubai, Asia/Singapore for Singapore) for precise conversions.',
  'Maintains the consistent 4-hour time difference (UTC+4 to UTC+8) with no seasonal adjustments.',
  'Calculates the time difference accurately and displays it with clear labels for time of day.',
  'Formats the output according to your preference for easy sharing across business contexts.',
];

const ssData = {
  text: 'Convert Dubai time to Singapore time instantly! Both maintain consistent time zones year-round. Perfect for business between these hubs. 🌆🏙️',
  hashtags: 'Dubai,Singapore,TimeZone,Business',
  title: 'Dubai to Singapore Time Converter — GST to SGT',
};

const title = 'Dubai to Singapore Time Converter — GST to SGT';
const description =
  'Convert Dubai time (GST) to Singapore time (SGT). Both cities use fixed zones year-round. Live clocks, instant conversion, and business scheduling tips.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate GST to SGT conversion',
      'Real-time and custom time modes',
      'Consistent time zones (no DST changes)',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Dubai as Origin',
        description:
          'Select Dubai using city, IANA (Asia/Dubai), or abbreviation (GST). It maintains a consistent UTC+4 offset year-round.',
      },
      {
        name: 'Add Singapore as Destination',
        description:
          'Singapore uses Singapore Standard Time (SGT, UTC+8) consistently throughout the year with no DST changes.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Dubai to Singapore.',
      },
      {
        name: 'Copy and Use Results',
        description:
          'Copy the converted time for invites, or use additional actions like Swap or Info for more details.',
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
  head: 'Dubai to Singapore Time Converter',
  subHead:
    "Connect two of Asia's major business hubs with precise time conversions. Convert Dubai time (GST) to Singapore time (SGT) with live clocks and consistent scheduling.",
  featuresHead: 'Key Features for Dubai-Singapore Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions & Time History',
  linksHead: 'Other Dubai and Singapore Timezone Conversions',
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
    originTimeZone: 'Dubai@@Asia/Dubai',
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
