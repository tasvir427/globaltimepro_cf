import { FaGlobeAmericas, FaExchangeAlt, FaUserFriends } from 'react-icons/fa';
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
    title: 'Set Your Seattle Base Time',
    description:
      'Enter "Seattle" or select America/Los_Angeles IANA timezone. The tool auto-detects Pacific Time (PST/PDT) and its Daylight Saving Time changes.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add destination" />,
    title: 'Add Taipei as Your Target',
    description:
      'Type "Taipei" for Asia/Taipei timezone. Taiwan uses China Standard Time (CST) consistently at UTC+8 year-round with no daylight saving adjustments.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Choose Live or Custom Mode',
    description:
      'Use Live mode for real-time tracking of the 15-16 hour time difference, or Custom mode to schedule future meetings and calls.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and analyze"
      />
    ),
    title: 'Convert and Plan Strategically',
    description:
      'View Taipei time in 13+ formats. Use time segment labels to identify the narrow but valuable overlapping work windows.',
  },
];

const features = [
  {
    icon: (
      <WiTime3
        className={styles.featureIcon}
        aria-label="Complex time difference"
      />
    ),
    title: 'Transpacific Time Bridge',
    description:
      "Manage the complex 15-16 hour difference, which fluctuates due to Seattle's Daylight Saving Time (Mar-Nov) while Taipei remains constant.",
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Scheduling" />
    ),
    title: 'Smart Scheduling Labels',
    description:
      'Color-coded segments instantly reveal the short window where the end of the Seattle workday overlaps with the beginning of the next day in Taipei.',
  },
  {
    icon: (
      <FaUserFriends
        className={styles.featureIcon}
        aria-label="Collaboration"
      />
    ),
    title: 'Optimized for Tech Collaboration',
    description:
      'Features tailored for software teams and project management across this specific corridor, helping coordinate sprints and stand-ups.',
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
      'Output in 13+ formats including 24-hour (common in Taipei) and 12-hour with AM/PM (common in Seattle) for clear communication.',
  },
];

const tips = [
  {
    title: 'Optimal Collaboration Window',
    description:
      'Seattle late afternoon (4:00 PM - 5:00 PM PDT) aligns with Taipei morning (7:00 AM - 8:00 AM CST) the next day. This is the prime window for real-time meetings.',
  },
  {
    title: 'Asynchronous Work Strategy',
    description:
      'Due to the 15-hour difference, embrace asynchronous communication. Use the tool to set clear deadlines, understanding that "EOD" for Seattle is the start of the next workday in Taipei.',
  },
  {
    title: 'Daylight Saving Time Impact',
    description:
      'The time difference is 15 hours during the US DST period (March-November) and 16 hours when Seattle is on Standard Time (November-March). Our tool automatically handles this shift.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Seattle and Taipei?',
    answer:
      'Taipei is 15 or 16 hours ahead of Seattle. The difference is 15 hours when Seattle is on Pacific Daylight Time (PDT, UTC-7) and 16 hours when on Pacific Standard Time (PST, UTC-8). Taipei is always UTC+8.',
  },
  {
    question: 'Do Seattle and Taipei observe daylight saving time?',
    answer:
      'Seattle observes Daylight Saving Time (March to November). Taipei and the rest of Taiwan do not observe DST, maintaining China Standard Time (UTC+8) year-round.',
  },
  {
    question: 'When is the best time for a conference call?',
    answer:
      'The most practical window is late afternoon in Seattle (4-5 PM PDT), which is early morning in Taipei (7-8 AM CST). This requires the Taipei team to take an early meeting, but it is within standard working hours for both sides.',
  },
  {
    question: 'How does the tool ensure accuracy with time zone rules?',
    answer:
      'The tool uses the IANA Time Zone Database (America/Los_Angeles, Asia/Taipei), which is the global standard and is updated periodically to reflect political changes to time zone boundaries and rules.',
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
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Uses canonical IANA Time Zone Database identifiers (America/Los_Angeles for Seattle, Asia/Taipei for Taipei) for precision.',
  'Converts time by calculating the precise offset from UTC for each location, leveraging the comprehensive IANA database rules.',
  "Automatically accounts for Seattle's Daylight Saving Time transitions (Mar-Nov) and Taipei's consistent UTC+8 offset.",
  'Time segment labels are applied based on typical business patterns in Pacific Northwest and Taiwanese business contexts.',
];

const ssData = {
  text: 'Master the 15-16 hour time difference between Seattle and Taipei! Essential for tech collaboration and business between the Pacific Northwest and Taiwan.',
  hashtags: 'Seattle,Taipei,TimeZone,PST,CST,GlobalTech',
  title: 'Seattle to Taipei Time Converter',
};

const title = 'Seattle to Taipei Time | PST to CST Converter';
const description =
  'Convert Seattle to Taipei time across a 15-16 hour difference. Live clocks, DST handling, and smart scheduling for US-Taiwan coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Seattle to Taipei conversion',
      '15-16 hour time difference management',
      'Daylight Saving Time handling',
      'Business scheduling optimization',
    ],
    steps: [
      {
        name: 'Set Seattle origin timezone',
        description:
          'Enter Seattle time using city name or America/Los_Angeles IANA code',
      },
      {
        name: 'Add Taipei destination',
        description:
          'Select Taipei with automatic Asia/Taipei timezone detection',
      },
      {
        name: 'Choose live or custom mode',
        description:
          'Select between real-time tracking or future time planning',
      },
      {
        name: 'Analyze scheduling options',
        description:
          'View converted time with business labels and scheduling recommendations',
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
  head: 'Seattle to Taipei Time Conversion',
  subHead:
    'Bridge the 15-16 hour gap between the Pacific Northwest and Taiwan with precise scheduling tools designed for tech collaboration and international trade.',
  featuresHead: 'Features for US-Taiwan Coordination',
  tipsHead: 'Strategies for Transpacific Collaboration',
  faqsHead: 'Seattle and Taipei Time Conversion FAQs',
  linksHead: 'North American Cross-Continental',
  howItWorksHead: 'Precision Time Conversion Process',
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
    originTimeZone: 'Seattle@@America/Los_Angeles',
    destinationTimeZone: 'Taipei@@Asia/Taipei',
  },
});
