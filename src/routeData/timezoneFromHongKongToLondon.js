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
    title: 'Start with Hong Kong',
    description:
      'Select Hong Kong as your origin. It uses Hong Kong Time (HKT, UTC+8) consistently throughout the year with no DST changes.',
  },
  {
    icon: (
      <FaBuilding className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target London',
    description:
      'Add London as your destination. It uses Greenwich Mean Time (GMT, UTC+0) or British Summer Time (BST, UTC+1) for DST.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Hong Kong to find the corresponding time in London.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Plan',
    description:
      'Use the Copy button for invites. The time difference requires careful scheduling for optimal collaboration.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for London',
    description:
      'London observes DST while Hong Kong does not. Our tool automatically tracks these seasonal time changes, ensuring accuracy year-round.',
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
      'The 7-8 hour difference allows for overlapping business hours. Our tool helps find the best times for meetings.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The ideal overlap is Hong Kong afternoon (3-5 PM HKT) which is London morning (7-9 AM GMT) or (8-10 AM BST). This works well for both sides.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Hong Kong adopted UTC+8 in 1904, while London has been the home of Greenwich Mean Time since 1884. Both have rich timekeeping histories.',
  },
  {
    title: 'Financial Market Coordination',
    description:
      'For finance professionals, the time difference allows Hong Kong markets to close as London markets open, facilitating global trading.',
  },
  {
    title: 'Travel Planning',
    description:
      'Flights from Hong Kong to London take about 12-13 hours. Use our Jet Lag Planner to adjust your sleep schedule for the time change.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Hong Kong and London?',
    answer:
      'Hong Kong is 8 hours ahead of London when London is on Greenwich Mean Time (GMT, UTC+0). During British Summer Time (BST, UTC+1), Hong Kong is 7 hours ahead.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'No. Hong Kong does not observe DST and stays on HKT (UTC+8) year-round. London observes DST, switching between GMT and BST.',
  },
  {
    question: "Why doesn't Hong Kong observe Daylight Saving Time?",
    answer:
      'Hong Kong abolished DST in 1979 due to minimal energy savings and public preference for consistent timekeeping. The tropical latitude makes DST unnecessary.',
  },
  {
    question:
      'What is the best time for a video call between Hong Kong and London?',
    answer:
      'The best window is Hong Kong afternoon (3-4 PM HKT) which is London morning (7-8 AM GMT) or (8-9 AM BST). This allows both parties to be during work hours.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
];

const howItWorks = [
  'Uses IANA time zones (Asia/Hong_Kong for Hong Kong, Europe/London for London) for precise conversions.',
  "Automatically adjusts for London's DST changes while maintaining Hong Kong's consistent UTC+8 offset.",
  'Calculates the 7-8 hour time difference accurately based on the date and DST status.',
  'Formats the output according to your preference for easy sharing across time zones.',
];

const ssData = {
  text: 'Convert Hong Kong time to London time! Handles 7-8 hour difference and DST automatically. Perfect for business and travel.',
  hashtags: 'HongKong,London,TimeZone',
  title: 'Hong Kong to London Time Converter - HKT to GMT/BST',
};

const title = 'Hong Kong to London Time Converter - HKT to GMT/BST';
const description =
  'Convert Hong Kong time to London time. Handles 7–8 hour difference with automatic DST adjustment. Ideal for business and travel.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate HKT to GMT/BST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for London',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Hong Kong as Origin',
        description:
          'Select Hong Kong using city, IANA (Asia/Hong_Kong), or abbreviation (HKT). It does not observe Daylight Saving Time.',
      },
      {
        name: 'Add London as Destination',
        description:
          'London uses Greenwich Mean Time (GMT) or British Summer Time (BST) with seasonal Daylight Saving adjustments.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Hong Kong to London.',
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
  head: 'Hong Kong to London Time Converter',
  subHead:
    'Connect Asia with Europe. Convert Hong Kong time to London time with automatic DST adjustment and business scheduling insights.',
  featuresHead: 'Key Features for Hong Kong-London Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other London Timezone Conversions',
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
    originTimeZone: 'Hong Kong@@Asia/Hong_Kong',
    destinationTimeZone: 'London@@Europe/London',
  },
});
