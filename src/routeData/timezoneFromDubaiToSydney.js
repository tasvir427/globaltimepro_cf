import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import {
  GiAirplaneDeparture,
  GiSandsOfTime,
  GiSydneyOperaHouse,
  GiWorld,
} from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Dubai',
    description:
      'Select Dubai as your origin city. It uses Gulf Standard Time (GST, UTC+4) consistently throughout the year with no daylight saving changes.',
  },
  {
    icon: (
      <GiSydneyOperaHouse
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Target Sydney',
    description:
      'Add Sydney as your destination. It observes Australian Eastern Time, switching between AEST (UTC+10) and AEDT (UTC+11) for daylight saving.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Choose Time Display Mode',
    description:
      'Toggle between live clocks for real-time comparison or enter specific times for future event planning between these global cities.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Apply Practical Insights',
    description:
      'Use the conversion results to schedule meetings during overlapping business hours or plan travel considering the significant time difference.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Time difference management"
      />
    ),
    title: 'Advanced Time Difference Management',
    description:
      "Handles the 6-8 hour gap between cities, accounting for Sydney's daylight saving changes while maintaining Dubai's consistent timekeeping.",
  },
  {
    icon: (
      <GiAirplaneDeparture
        className={styles.featureIcon}
        aria-label="Travel optimization"
      />
    ),
    title: 'Travel and Business Optimization',
    description:
      'Specifically designed for Dubai-Sydney coordination, considering flight durations (13-15 hours) and optimal business meeting windows.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Intelligent Time Segment Indicators',
    description:
      'Color-coded time segments help identify suitable hours for meetings, family calls, or rest periods across both locations.',
  },
];

const tips = [
  {
    title: 'Business Meeting Windows',
    description:
      'Best overlap: Dubai morning (9-11 AM GST) equals Sydney afternoon (3-5 PM AEST). During DST, this becomes Dubai 9-11 AM to Sydney 4-6 PM AEDT.',
  },
  {
    title: 'Flight Planning Considerations',
    description:
      'Direct flights from Dubai to Sydney take approximately 13-14 hours, often arriving the next day. Use our Jet Lag Planner to adjust your sleep schedule.',
  },
  {
    title: 'Cultural and Weekend Awareness',
    description:
      'Remember that UAE weekend is Friday-Saturday, while Australia is Saturday-Sunday. Schedule international meetings accordingly for best attendance.',
  },
  {
    title: 'Seasonal Time Variations',
    description:
      "The time difference varies from 6 to 8 hours due to Sydney's DST (October-April). Our tool automatically adjusts for these seasonal changes.",
  },
];

const faqs = [
  {
    question: 'What is the time difference between Dubai and Sydney?',
    answer:
      'Sydney is 6 hours ahead of Dubai during Australian Eastern Standard Time (AEST) and 7 hours ahead during Australian Eastern Daylight Time (AEDT).',
  },
  {
    question: 'Do both cities observe daylight saving time?',
    answer:
      'No. Dubai maintains consistent GST (UTC+4) year-round, while Sydney observes DST from October to April, switching between AEST and AEDT.',
  },
  {
    question: 'What are the best times for family video calls?',
    answer:
      'Optimal windows: Dubai evening (7-9 PM GST) equals Sydney early morning (1-3 AM AEST), or Dubai morning (7-9 AM GST) equals Sydney afternoon (1-3 PM AEST).',
  },
  {
    question: 'How does this affect business collaboration?',
    answer:
      'The time difference allows for limited same-day collaboration but enables follow-the-sun workflows for continuous business operations.',
  },
];

const links = [
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'London → Sydney', path: `/${PATHS.timezoneFromLondonToSydney}` },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.timezoneFromLosAngelesToSydney}`,
  },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
];

const howItWorks = [
  'Uses IANA time zones (Asia/Dubai for Dubai, Australia/Sydney for Sydney) with accurate historical DST data',
  "Automatically adjusts for Sydney's seasonal time changes while maintaining Dubai's consistent UTC+4 offset",
  'Calculates the 6-8 hour difference precisely, accounting for date changes across the time zones',
  'Provides visual indicators for optimal communication windows based on time segments and business hours',
  'Supports multiple output formats for easy sharing across cultures and business contexts',
];

const ssData = {
  text: 'Convert Dubai time to Sydney time! Handles 6-8 hour difference and DST automatically. Perfect for business and travel planning.',
  hashtags: 'Dubai,Sydney,TimeZone,Travel',
  title: 'Dubai to Sydney Time Converter - GST to AEST/AEDT',
};

const title = 'Dubai to Sydney Time Converter - GST to AEST/AEDT';
const description =
  'Convert Dubai time to Sydney time. Handles 6-8 hour difference with automatic DST adjustment. Essential for business, travel, and family coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate GST to AEST/AEDT conversion',
      'Live and custom time modes',
      'Automatic DST adjustment for Sydney',
      'Time segment indicators for optimal scheduling',
      'Multi-destination support',
      'One-click copy functionality',
      'Integration with travel planning tools',
    ],
    steps: [
      {
        name: 'Set Dubai as Origin Point',
        description:
          'Select Dubai using city, IANA (Asia/Dubai), or abbreviation (GST). It maintains consistent time year-round.',
      },
      {
        name: 'Add Sydney as Destination',
        description:
          'Include Sydney as your target. It observes seasonal Daylight Saving Time changes (AEST/AEDT).',
      },
      {
        name: 'Choose Time Viewing Mode',
        description:
          'Select between real-time clocks or custom time input for precise scheduling across time zones.',
      },
      {
        name: 'Apply Conversion Results',
        description:
          'Utilize outputs for business meetings, travel planning, or personal coordination between these global hubs.',
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
  head: 'Dubai to Sydney Time Converter',
  subHead:
    'Connect two global hubs with precise time conversions. Essential for business coordination, travel planning, and maintaining personal connections across time zones.',
  featuresHead: 'Key Advantages for Dubai-Sydney Coordination',
  tipsHead: 'Practical Scheduling Insights',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Dubai and Sydney Timezone Conversions',
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
    originTimeZone: 'Dubai@@Asia/Dubai',
    destinationTimeZone: 'Sydney@@Australia/Sydney',
  },
});
