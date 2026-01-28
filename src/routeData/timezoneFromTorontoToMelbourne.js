import { FaGlobeAmericas, FaExchangeAlt, FaHistory } from 'react-icons/fa';
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
    title: 'Set Your Toronto Start Time',
    description:
      'Enter "Toronto" or select America/Toronto IANA timezone. The tool auto-detects Eastern Time (EST/EDT) and its Daylight Saving Time changes.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add destinations" />,
    title: 'Add Melbourne and Other Cities',
    description:
      'Type "Melbourne" for Australia/Melbourne timezone. You can add multiple Australian or Asian destinations for simultaneous conversion.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Live or Custom Time Mode',
    description:
      'Use Live mode to track the 15-16 hour time difference in real-time, or Custom mode to schedule future meetings and calls.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and analyze"
      />
    ),
    title: 'Convert and Interpret Results',
    description:
      'View Melbourne time in 13+ formats. Use time segment labels to identify optimal scheduling windows between these global hubs.',
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
      'Manage the complex 15-16 hour difference, which fluctuates due to opposite-season Daylight Saving Time transitions in the Northern and Southern Hemispheres.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Scheduling" />
    ),
    title: 'Smart Scheduling Labels',
    description:
      'Color-coded segments instantly show when Toronto business hours overlap with productive times in Melbourne, accounting for the date line change.',
  },
  {
    icon: (
      <FaHistory className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'Precise DST Handling',
    description:
      'Accurately accounts for DST in Toronto (Mar-Nov) and Melbourne (Oct-Apr), which occur in opposite hemispheres and create a variable time difference.',
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
      'Output in 13+ formats including 24-hour (common in Melbourne) and 12-hour with AM/PM (common in Toronto) for clear communication.',
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'A narrow but effective window exists: Toronto late afternoon (4-5 PM EDT) aligns with Melbourne morning (7-8 AM AEST). This requires preparation from the Melbourne side but works for real-time collaboration.',
  },
  {
    title: 'Understanding the "Opposite Day" Effect',
    description:
      'Due to the International Date Line, when it is morning in Toronto, it is already the next day in Melbourne. Our tool clearly displays this date change to prevent confusion.',
  },
  {
    title: 'Daylight Saving Time Coordination',
    description:
      'The time difference is smallest (15 hours) for a few weeks in October-November and March-April. It is largest (16 hours) during the Northern Hemisphere summer (May-August).',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Toronto and Melbourne?',
    answer:
      'Melbourne is 15 to 16 hours ahead of Toronto. The exact difference depends on the time of year due to Daylight Saving Time (DST) changes in both countries, which do not perfectly align.',
  },
  {
    question: 'Do the dates change between Toronto and Melbourne?',
    answer:
      'Yes, this is a key feature of this route. Melbourne is so far ahead that when it is, for example, 10 AM on Tuesday in Toronto, it is already early Wednesday morning in Melbourne. Our tool automatically handles this date-line crossing.',
  },
  {
    question: 'When is the best time for business calls between these cities?',
    answer:
      'The most practical window is late afternoon in Toronto (4-5 PM EDT), which is early morning in Melbourne (7-8 AM AEST). Asynchronous communication is often highly effective for this route.',
  },
  {
    question: 'How does your tool handle different Daylight Saving Time rules?',
    answer:
      'Our tool uses the IANA Time Zone Database (America/Toronto, Australia/Melbourne) which is the global standard and includes all historical and future DST rules. The DST Checker info button provides details on upcoming transitions.',
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
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Uses canonical IANA Timezone Database identifiers (America/Toronto, Australia/Melbourne) for precise historical and future time rule calculation.',
  'Converts time by calculating the offset from UTC for each location, accounting for their specific Daylight Saving Time rules.',
  'Handles the international date line implication, correctly displaying the day and date for both locations.',
  'Time segment labels (Work, Sleep, etc.) are applied based on typical business and activity patterns in North American and Australian contexts.',
];

const ssData = {
  text: 'Master the 15-16 hour time difference between Toronto and Melbourne! Perfect for Canada-Australia business, family connections, and travel planning.',
  hashtags: 'TimeZone,Toronto,Melbourne,EST,AEST,GlobalTeam',
  title: 'Toronto to Melbourne Time Converter',
};

const title = 'Toronto to Melbourne Time | EST to AEST Converter';
const description =
  'Convert Toronto to Melbourne time across a 15-16 hour difference. Live clocks, date-change handling, and DST management for Canada-Australia coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Toronto to Melbourne conversion',
      '15-16 hour time difference management',
      'International date line handling',
      'Opposite-hemisphere DST tracking',
    ],
    steps: [
      {
        name: 'Set Toronto origin timezone',
        description:
          'Enter Toronto time using city name or America/Toronto IANA code',
      },
      {
        name: 'Add Melbourne destination',
        description:
          'Select Melbourne with automatic Australia/Melbourne timezone detection',
      },
      {
        name: 'Choose live or custom mode',
        description:
          'Select between real-time tracking or future time planning',
      },
      {
        name: 'Analyze scheduling options',
        description:
          'View converted time with date awareness and scheduling labels',
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
  head: 'Toronto to Melbourne Time Conversion',
  subHead:
    'Navigate the 15-16 hour gap and international date line between North America and Australia with intelligent scheduling tools and precise timezone handling.',
  featuresHead: 'Features for Canada-Australia Coordination',
  tipsHead: 'Scheduling Across Hemispheres and the Date Line',
  faqsHead: 'Toronto and Melbourne Time Conversion FAQs',
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
    originTimeZone: 'Toronto@@America/Toronto',
    destinationTimeZone: 'Melbourne@@Australia/Melbourne',
  },
});
