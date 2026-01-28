import { FaGlobeAmericas, FaExchangeAlt, FaUserCheck } from 'react-icons/fa';
import { TbClock, TbWorld, TbCalendarTime } from 'react-icons/tb';
import { WiTime3 } from 'react-icons/wi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Set origin" />
    ),
    title: 'Set Your Chicago Reference Time',
    description:
      'Enter "Chicago" or select America/Chicago IANA timezone. The tool auto-detects Central Time (CST/CDT) and its Daylight Saving Time changes.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add destination" />,
    title: 'Add Lisbon as Your Target',
    description:
      'Type "Lisbon" for Europe/Lisbon timezone. Portugal uses Western European Time (WET/WEST) and observes Daylight Saving Time.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Choose Live or Custom Mode',
    description:
      'Use Live mode for real-time tracking of the 5-6 hour time difference, or Custom mode to plan future meetings and calls.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and analyze"
      />
    ),
    title: 'Convert and Coordinate',
    description:
      'View Lisbon time in 13+ formats. Use time segment labels to identify optimal business hours between these continental hubs.',
  },
];

const features = [
  {
    icon: (
      <WiTime3
        className={styles.featureIcon}
        aria-label="Variable time difference"
      />
    ),
    title: 'Transatlantic Time Bridge',
    description:
      'Manage the 5-6 hour difference, which fluctuates due to non-synchronized Daylight Saving Time transitions in the US and EU.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Scheduling" />
    ),
    title: 'Smart Scheduling Labels',
    description:
      'Color-coded segments instantly show when Chicago work hours overlap with the Lisbon business day, accounting for the time gap and DST changes.',
  },
  {
    icon: (
      <FaUserCheck className={styles.featureIcon} aria-label="User control" />
    ),
    title: 'Flexible Input & Output',
    description:
      'Accept input via city names, timezone abbreviations, or IANA codes. Output in 13+ formats suitable for professional communication.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Multiple formats"
      />
    ),
    title: 'Precise DST Handling',
    description:
      'Automatically accounts for DST transitions in Chicago (Mar-Nov) and Lisbon (Mar-Oct), ensuring accuracy year-round.',
  },
];

const tips = [
  {
    title: 'Optimal Collaboration Window',
    description:
      'Chicago morning (8-10 AM CDT) aligns with Lisbon afternoon (2-4 PM WEST), creating a generous window for real-time meetings and calls.',
  },
  {
    title: 'Daylight Saving Time Coordination',
    description:
      'The time difference is 5 hours for about two weeks in March and again in October/November. For the rest of the year, the difference is 6 hours.',
  },
  {
    title: 'Weekday Alignment',
    description:
      'Both the US and Portugal typically observe Saturday-Sunday weekends, simplifying the planning of cross-border collaborative projects.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Chicago and Lisbon?',
    answer:
      "Lisbon is 5 or 6 hours ahead of Chicago. The difference is 5 hours when both cities are simultaneously on Daylight Saving Time or Standard Time. It's 6 hours when one city is on DST and the other is not.",
  },
  {
    question:
      'Do Chicago and Lisbon observe daylight saving time on the same schedule?',
    answer:
      'No. Chicago observes DST from the second Sunday in March to the first Sunday in November. Lisbon observes it from the last Sunday in March to the last Sunday in October. This creates periods of 5 and 6-hour differences.',
  },
  {
    question: 'When is the best time for a conference call?',
    answer:
      'Late morning in Chicago (8-10 AM CDT) corresponds to early afternoon in Lisbon (2-4 PM WEST). This window works within standard business hours for both cities.',
  },
  {
    question: 'How does the tool ensure time conversion accuracy?',
    answer:
      'The tool uses the IANA Time Zone Database (America/Chicago, Europe/Lisbon), which is the global standard for accurate timezone information and is regularly updated to reflect political changes.',
  },
];

const links = [
  {
    name: 'New York → Shanghai',
    path: `/${PATHS.timezoneFromNewYorkToShanghai}`,
  },
  { name: 'New York → Tokyo', path: `/${PATHS.timezoneFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tel Aviv',
    path: `/${PATHS.timezoneFromSanFranciscoToTelAvivYafo}`,
  },
  {
    name: 'Mexico City → Tokyo',
    path: `/${PATHS.timezoneFromMexicoCityToTokyo}`,
  },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.timezoneFromMexicoCityToSeoul}`,
  },
  {
    name: 'Toronto → Melbourne',
    path: `/${PATHS.timezoneFromTorontoToMelbourne}`,
  },
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
];

const howItWorks = [
  'Processes user input using city names, timezone abbreviations, or canonical IANA Time Zone Database identifiers (America/Chicago, Europe/Lisbon).',
  'Converts time by calculating the precise offset from UTC for each location, leveraging the comprehensive IANA database rules.',
  'Manages the variable 5-6 hour difference by automatically detecting and applying Daylight Saving Time rules for both locations.',
  'Applies context-aware time segment labels based on typical business patterns in American and Portuguese contexts.',
  'Outputs converted times in multiple formats, including ISO 8601 for technical use and regional preferences for clear communication.',
];

const ssData = {
  text: 'Effortlessly convert time between Chicago and Lisbon with a variable 5-6 hour difference. Perfect for US-Portugal business and travel planning!',
  hashtags: 'Chicago,Lisbon,TimeZone,CT,WET,GlobalBusiness',
  title: 'Chicago to Lisbon Time Converter',
};

const title = 'Chicago to Lisbon Time | CT to WET Converter';
const description =
  'Convert Chicago to Lisbon time across a 5-6 hour difference. Live clocks, DST handling, and reliable scheduling for US-Portugal coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Chicago to Lisbon conversion',
      '5-6 hour time difference management',
      'Daylight Saving Time handling',
      'Business scheduling optimization',
    ],
    steps: [
      {
        name: 'Set Chicago origin timezone',
        description:
          'Enter Chicago time using city name, CT abbreviation, or America/Chicago IANA identifier',
      },
      {
        name: 'Add Lisbon destination',
        description:
          'Select Lisbon with automatic Europe/Lisbon timezone detection',
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
  head: 'Chicago to Lisbon Time Conversion',
  subHead:
    'Bridge North America and Europe with reliable time coordination between the US and Portugal. The variable 5-6 hour difference is precisely managed for business, travel, and communication.',
  featuresHead: 'Features for US-Portugal Coordination',
  tipsHead: 'Effective Scheduling for Chicago-Lisbon Collaboration',
  faqsHead: 'Chicago and Lisbon Time Conversion FAQs',
  linksHead: 'North American Cross-Continental',
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
    originTimeZone: 'Chicago@@America/Chicago',
    destinationTimeZone: 'Lisbon@@Europe/Lisbon',
  },
});
