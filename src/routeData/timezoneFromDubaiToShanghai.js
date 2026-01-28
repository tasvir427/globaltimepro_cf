import { FaClock, FaGlobeAsia, FaExchangeAlt, FaCopy } from 'react-icons/fa';
import { MdSchedule, MdNightlight } from 'react-icons/md';
import { WiTime3 } from 'react-icons/wi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAsia className={styles.stepIcon} aria-label="Set Dubai time" />
    ),
    title: 'Set Dubai Time Base',
    description:
      'Enter "Dubai" or select Asia/Dubai IANA timezone. Dubai maintains Gulf Standard Time (GST) year-round at UTC+4 with no DST changes.',
  },
  {
    icon: <WiTime3 className={styles.stepIcon} aria-label="Add Shanghai" />,
    title: 'Add Shanghai Destination',
    description:
      'Type "Shanghai" for Asia/Shanghai timezone. China uses a single timezone nationwide (China Standard Time) at UTC+8 consistently.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Time Mode',
    description:
      'Use Live mode for real-time tracking of the consistent 4-hour difference, or Custom mode to plan future meetings and calls.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and optimize"
      />
    ),
    title: 'Convert and Schedule',
    description:
      'View Shanghai time in multiple formats. Use time segment labels to identify optimal business hours between these trading hubs.',
  },
];

const features = [
  {
    icon: (
      <FaClock
        className={styles.featureIcon}
        aria-label="Real-time conversion"
      />
    ),
    title: 'Consistent Time Difference',
    description:
      'Dubai to Shanghai maintains a reliable 4-hour time difference year-round, as neither location observes daylight saving time.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Multiple formats"
      />
    ),
    title: 'Flexible Time Formats',
    description:
      'Output in 13+ formats including 24-hour (common in both regions) and 12-hour with AM/PM for international teams.',
  },
  {
    icon: (
      <MdNightlight className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Business Hour Optimization',
    description:
      'Color-coded segments show when Dubai work hours overlap with Shanghai business operations for optimal scheduling.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Sharing tools" />,
    title: 'Collaboration Features',
    description:
      'Copy times, generate shareable links, and use action buttons to coordinate between Middle Eastern and Asian teams.',
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'Dubai morning (9-11 AM GST) aligns with Shanghai afternoon (1-3 PM CST), creating ideal real-time collaboration windows.',
  },
  {
    title: 'Business Culture Considerations',
    description:
      'Account for Friday-Saturday weekend in Dubai vs Saturday-Sunday weekend in China when scheduling cross-border meetings.',
  },
  {
    title: 'Time Consistency Advantage',
    description:
      'Unlike many international routes, Dubai-Shanghai maintains the same 4-hour difference year-round, simplifying long-term scheduling.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Dubai and Shanghai?',
    answer:
      'Shanghai is always 4 hours ahead of Dubai. Dubai is UTC+4 (GST) and Shanghai is UTC+8 (CST) year-round with no daylight saving adjustments.',
  },
  {
    question: 'Do Dubai and Shanghai observe daylight saving time?',
    answer:
      'No, neither Dubai nor Shanghai observes daylight saving time. The 4-hour time difference remains constant throughout the year.',
  },
  {
    question:
      'When is the best time for business calls between Dubai and Shanghai?',
    answer:
      'Late morning in Dubai (9-11 AM) corresponds to early afternoon in Shanghai (1-3 PM), working well for both business cultures.',
  },
  {
    question: 'How do I handle the weekend difference?',
    answer:
      'Dubai weekend is Friday-Saturday, while Shanghai weekend is Saturday-Sunday. Schedule important meetings Sunday-Thursday for full participation.',
  },
];

const links = [
  { name: 'Seoul → Sydney', path: `/${PATHS.timezoneFromSeoulToSydney}` },
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Accepts input using city names ("Dubai"), timezone abbreviations ("GST"), or IANA codes ("Asia/Dubai")',
  'Converts time using precise IANA timezone data: Asia/Dubai (UTC+4) to Asia/Shanghai (UTC+8)',
  'Maintains consistent 4-hour difference calculation with no seasonal adjustments',
  'Applies time segment labeling based on typical business patterns in both regions',
  'Provides multiple output formats including ISO, custom, and regional preferences',
];

const ssData = {
  text: 'Convert time between Dubai and Shanghai with consistent 4-hour difference. Perfect for Middle East-Asia business coordination and travel planning.',
  hashtags: 'Dubai,Shanghai,TimeZone,GST,CST,Business',
  title: 'Dubai to Shanghai Time Converter',
};

const title = 'Dubai to Shanghai Time | GST to CST Converter';
const description =
  'Convert Dubai to Shanghai time with consistent 4-hour difference. Live clocks, business scheduling, and reliable time coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Dubai to Shanghai conversion',
      'Consistent 4-hour time difference',
      'Multiple destination support',
      'Business scheduling optimization',
      'No DST complications',
    ],
    steps: [
      {
        name: 'Set Dubai origin time',
        description:
          'Enter Dubai time using city name, GST abbreviation, or Asia/Dubai IANA identifier',
      },
      {
        name: 'Add Shanghai destination',
        description:
          'Select Shanghai with automatic Asia/Shanghai timezone detection',
      },
      {
        name: 'Choose conversion mode',
        description:
          'Select between live real-time tracking or custom time planning mode',
      },
      {
        name: 'View and schedule',
        description:
          'See converted time with business labels and scheduling recommendations',
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
  head: 'Dubai to Shanghai Time Conversion',
  subHead:
    'Coordinate between Middle Eastern and Asian business hubs with a consistent 4-hour time difference and reliable scheduling tools.',
  featuresHead: 'Features for UAE-China Coordination',
  tipsHead: 'Scheduling Tips for Dubai-Shanghai Collaboration',
  faqsHead: 'Dubai and Shanghai Time Conversion FAQs',
  linksHead: 'Asian Hubs to Global Destinations',
  howItWorksHead: 'Technical Process for Time Conversion',
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
    destinationTimeZone: 'Shanghai@@Asia/Shanghai',
  },
});
