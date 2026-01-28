import {
  FaBusinessTime,
  FaCheckCircle,
  FaCity,
  FaClock,
  FaMonument,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with New York',
    description:
      'Select New York as your origin. It uses Eastern Time (ET) which switches between EST (UTC-5) and EDT (UTC-4) for Daylight Saving.',
  },
  {
    icon: (
      <FaMonument className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target Mumbai',
    description:
      'Add Mumbai as your destination. It uses India Standard Time (IST, UTC+5:30) consistently with no DST changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in New York to find the corresponding time in Mumbai.',
  },
  {
    icon: (
      <FaBusinessTime className={styles.stepIcon} aria-label="Use Actions" />
    ),
    title: 'Apply and Collaborate',
    description:
      'Use the Copy button for invites. The half-hour offset requires special attention in scheduling between these business hubs.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for New York',
    description:
      'New York observes DST while Mumbai does not. Our tool automatically tracks these seasonal time changes, ensuring accuracy year-round.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Half-hour Precision"
      />
    ),
    title: 'Half-hour Time Zone Accuracy',
    description:
      'Mumbai uses a UTC+5:30 offset, which can be confusing for manual calculations. Our converter handles this precisely, avoiding scheduling errors.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The ideal overlap is New York morning (9-11 AM EDT) which is Mumbai evening (6:30-8:30 PM IST). This provides a practical window for collaboration.',
  },
  {
    title: 'Historical Time Context',
    description:
      'India adopted IST (UTC+5:30) in 1906, choosing a half-hour offset to balance sunrise times across its vast territory. New York standardized time in 1883 with the railroad industry.',
  },
  {
    title: 'Weekend Awareness',
    description:
      'Both cities follow Saturday-Sunday weekends, simplifying scheduling compared to some other international pairs.',
  },
  {
    title: 'Cultural Timing Considerations',
    description:
      'Business hours in Mumbai typically start later than in New York (around 10 AM IST). Consider this when scheduling early morning New York calls.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between New York and Mumbai?',
    answer:
      'Mumbai is 9.5 hours ahead of New York when New York is on Eastern Daylight Time (EDT, UTC-4). During Eastern Standard Time (EST, UTC-5), Mumbai is 10.5 hours ahead.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'No. New York observes DST, switching between EST and EDT. Mumbai does not observe DST and remains on India Standard Time (IST, UTC+5:30) throughout the year.',
  },
  {
    question: 'Why does India use a half-hour time zone?',
    answer:
      'India spans a large geographical area. The UTC+5:30 offset was chosen to provide a reasonable balance of sunrise and sunset times across the country, avoiding extreme early sunrises or late sunsets in eastern or western regions.',
  },
  {
    question: 'What are the best days for meetings between these cities?',
    answer:
      'Tuesday through Thursday typically work best, as Monday may have catch-up from the weekend and Friday may have people leaving early. Remember the time difference means the meeting will occur on the same calendar day in both locations only if scheduled in the very early morning New York time.',
  },
];

const links = [
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
];

const howItWorks = [
  'Uses IANA time zones (America/New_York for New York, Asia/Kolkata for Mumbai) for precise conversions.',
  "Automatically adjusts for New York's DST changes while maintaining Mumbai's consistent UTC+5:30 offset.",
  'Calculates the 9.5-10.5 hour time difference accurately, including the half-hour component.',
  'Formats the output according to your preference for easy sharing across cultures.',
];

const ssData = {
  text: 'Convert New York time to Mumbai time instantly! Handles the 9.5-10.5 hour difference and DST automatically. Essential for US-India business. 🇺🇸🇮🇳',
  hashtags: 'NewYork,Mumbai,TimeZone,Business',
  title: 'New York to Mumbai Time Converter — EST/EDT to IST',
};

const title = 'New York to Mumbai Time Converter — EST/EDT to IST';
const description =
  'Convert New York time (EST/EDT) to Mumbai time (IST). Adjust for 9.5–10.5 hour difference with DST. Essential for US-India business and collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate EST/EDT to IST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for New York',
      'Half-hour time zone precision',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set New York as Origin',
        description:
          'Select New York using city, IANA (America/New_York), or abbreviation (EST/EDT). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Mumbai as Destination',
        description:
          'Mumbai uses India Standard Time (IST, UTC+5:30) consistently throughout the year with no DST changes.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from New York to Mumbai.',
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
  head: 'New York to Mumbai Time Converter',
  subHead:
    'Bridge the US and India with precise time conversions. Convert New York time (EST/EDT) to Mumbai time (IST) with live clocks, automatic DST adjustment, and business scheduling insights.',
  featuresHead: 'Key Features for New York-Mumbai Conversions',
  tipsHead: 'Scheduling and Cultural Context',
  faqsHead: 'Frequently Asked Questions & Time History',
  linksHead: 'Other New York and Mumbai Timezone Conversions',
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
    originTimeZone: 'New York@@America/New_York',
    destinationTimeZone: 'Mumbai@@Asia/Kolkata',
  },
});
