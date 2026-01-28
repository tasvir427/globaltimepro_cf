import { FaClock, FaGlobeAsia, FaExchangeAlt, FaCopy } from 'react-icons/fa';
import { MdSchedule, MdAvTimer } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAsia className={styles.stepIcon} aria-label="Set Delhi time" />
    ),
    title: 'Set Your Delhi Reference Time',
    description:
      'Enter "Delhi" or select Asia/Kolkata IANA timezone. India uses India Standard Time (IST) consistently at UTC+5:30 year-round with no daylight saving changes.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Add Beijing" />,
    title: 'Add Beijing as Your Destination',
    description:
      'Type "Beijing" for Asia/Shanghai timezone. China uses a single time zone nationwide (China Standard Time) at UTC+8 consistently.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Your Operating Mode',
    description:
      'Choose Live mode for real-time tracking or Custom mode to plan future meetings. The 2.5-hour difference remains constant throughout the year.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and analyze"
      />
    ),
    title: 'Convert and Schedule Effectively',
    description:
      'View Beijing time in over 13 formats. Use time segment labels to identify optimal overlapping business hours.',
  },
];

const features = [
  {
    icon: (
      <MdAvTimer
        className={styles.featureIcon}
        aria-label="Consistent difference"
      />
    ),
    title: 'Consistent Time Difference',
    description:
      'Beijing is always 2.5 hours ahead of Delhi. Neither India nor China observes daylight saving time, making scheduling predictable.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Multiple formats"
      />
    ),
    title: 'Flexible Output Formats',
    description:
      'Get results in 12-hour, 24-hour, ISO, and custom formats suitable for international communication between these business hubs.',
  },
  {
    icon: <FaClock className={styles.featureIcon} aria-label="Time segments" />,
    title: 'Smart Scheduling Labels',
    description:
      'Color-coded time segments instantly show when business hours in Delhi overlap with the workday in Beijing for optimal meeting planning.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Sharing tools" />,
    title: 'Seamless Collaboration',
    description:
      'Copy converted times instantly, generate shareable links, and use action buttons to coordinate across teams and time zones.',
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'Delhi afternoon (2:30 PM - 4:30 PM IST) perfectly overlaps with Beijing late afternoon (5:00 PM - 7:00 PM CST), creating ideal collaboration windows.',
  },
  {
    title: 'Lunch Break Consideration',
    description:
      'Account for typical lunch breaks (1-2 PM in Delhi, 12-1 PM in Beijing) when scheduling cross-border calls to ensure full participation.',
  },
  {
    title: 'Business Calendar Alignment',
    description:
      'Both nations celebrate different public holidays. Use the Custom time mode to verify important dates around national holidays in both countries.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Delhi and Beijing?',
    answer:
      'Beijing is always 2 hours and 30 minutes ahead of Delhi. India is on IST (UTC+5:30) and China is on CST (UTC+8) year-round with no daylight saving adjustments.',
  },
  {
    question: 'Do Delhi and Beijing observe daylight saving time?',
    answer:
      'No. India has never observed DST, and China abolished it in 1992. The 2.5-hour time difference remains constant every day of the year.',
  },
  {
    question:
      'When is the best time for conference calls between Delhi and Beijing?',
    answer:
      'Late afternoon in Delhi (2:30 PM - 4:30 PM IST) corresponds to late afternoon/early evening in Beijing (5:00 PM - 7:00 PM CST), working well for both sides.',
  },
  {
    question: 'Why does China use a single time zone?',
    answer:
      'China officially uses Beijing Time (UTC+8) nationwide for administrative unity, despite its vast geographical width that would naturally span multiple time zones.',
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
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Processes input using city names, timezone abbreviations, or IANA identifiers (Asia/Kolkata, Asia/Shanghai)',
  'Converts time using precise IANA timezone database rules accounting for historical and political timekeeping decisions',
  'Maintains consistent 2.5-hour difference calculation with no seasonal adjustments required',
  'Applies time segment labeling based on typical business culture patterns in both Indian and Chinese contexts',
  'Outputs multiple time formats including technical specifications and user-friendly displays',
];

const ssData = {
  text: 'Effortlessly convert time between Delhi and Beijing with a consistent 2.5-hour difference. Perfect for India-China business coordination!',
  hashtags: 'Delhi,Beijing,TimeZone,IST,CST,Business',
  title: 'Delhi to Beijing Time Converter',
};

const title = 'Delhi to Beijing Time | IST to CST Converter';
const description =
  'Convert Delhi to Beijing time with consistent 2.5-hour difference. Live clocks, business scheduling, and reliable coordination for India-China collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Delhi to Beijing conversion',
      'Consistent 2.5-hour time difference',
      'Multiple destination support',
      'Business scheduling optimization',
      'No daylight saving complications',
    ],
    steps: [
      {
        name: 'Set Delhi origin timezone',
        description:
          'Enter Delhi time using city name, IST abbreviation, or Asia/Kolkata IANA identifier',
      },
      {
        name: 'Add Beijing destination',
        description:
          'Select Beijing with automatic Asia/Shanghai timezone detection',
      },
      {
        name: 'Choose conversion mode',
        description:
          'Select between live real-time tracking or custom time planning mode',
      },
      {
        name: 'View and analyze results',
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
  head: 'Delhi to Beijing Time Conversion',
  subHead:
    'Coordinate seamlessly between Indian and Chinese business hubs with a consistent 2.5-hour time difference and reliable scheduling tools.',
  featuresHead: 'Essential Features for India-China Coordination',
  tipsHead: 'Smart Scheduling for Delhi-Beijing Collaboration',
  faqsHead: 'Delhi and Beijing Time Conversion FAQs',
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
    originTimeZone: 'Delhi@@Asia/Kolkata',
    destinationTimeZone: 'Beijing@@Asia/Shanghai',
  },
});
