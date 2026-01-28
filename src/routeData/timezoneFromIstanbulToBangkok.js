import { FaGlobe, FaExchangeAlt, FaUserCheck } from 'react-icons/fa';
import { TbClock, TbWorld, TbCalendarTime } from 'react-icons/tb';
import { WiTime3 } from 'react-icons/wi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Set origin" />,
    title: 'Set Your Istanbul Reference Time',
    description:
      'Enter "Istanbul" or select Europe/Istanbul IANA timezone. Turkey uses Turkey Time (TRT) consistently at UTC+3 year-round with no daylight saving changes.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add destination" />,
    title: 'Add Bangkok as Your Destination',
    description:
      'Type "Bangkok" for Asia/Bangkok timezone. Thailand uses Indochina Time (ICT) consistently at UTC+7 year-round with no daylight saving adjustments.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Your Viewing Mode',
    description:
      'Choose Live mode for real-time tracking or Custom mode to plan future events. The consistent 4-hour difference simplifies long-term scheduling.',
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
      'View Bangkok time in over 13 formats. Use time segment labels to identify optimal business hours between these cross-continental hubs.',
  },
];

const features = [
  {
    icon: (
      <WiTime3
        className={styles.featureIcon}
        aria-label="Consistent difference"
      />
    ),
    title: 'Consistent Time Difference',
    description:
      'Bangkok is always 4 hours ahead of Istanbul. Neither Turkey nor Thailand observes daylight saving time, making scheduling predictable and reliable.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Scheduling" />
    ),
    title: 'Cross-Continental Scheduling',
    description:
      'Smart time segment labels help identify when Istanbul morning hours overlap with Bangkok afternoon, creating ideal collaboration windows.',
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
    title: 'No DST Complications',
    description:
      'Eliminate scheduling errors caused by daylight saving time transitions. The 4-hour difference remains constant throughout the year.',
  },
];

const tips = [
  {
    title: 'Optimal Business Hours',
    description:
      'Istanbul morning (9-11 AM TRT) aligns with Bangkok early afternoon (1-3 PM ICT), creating a generous window for real-time meetings and calls.',
  },
  {
    title: 'Cultural & Religious Considerations',
    description:
      'When scheduling, be mindful of different national holidays and religious observances, such as Ramadan in Turkey and Songkran in Thailand.',
  },
  {
    title: 'Weekend Alignment',
    description:
      'Both Turkey and Thailand typically observe Saturday-Sunday weekends, simplifying the planning of cross-border collaborative projects.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Istanbul and Bangkok?',
    answer:
      'Bangkok is consistently 4 hours ahead of Istanbul. Istanbul is on TRT (UTC+3) and Bangkok is on ICT (UTC+7) year-round, with no seasonal changes.',
  },
  {
    question:
      'Do the clocks change for Daylight Saving Time in either location?',
    answer:
      'No. Turkey permanently abandoned DST in 2016, and Thailand does not observe it. The 4-hour time difference remains constant every day of the year.',
  },
  {
    question: 'When is the best time to schedule a conference call?',
    answer:
      'Late morning in Istanbul (9-11 AM TRT) corresponds to early afternoon in Bangkok (1-3 PM ICT). This window works within standard business hours for both cities.',
  },
  {
    question: 'How does the tool ensure time conversion accuracy?',
    answer:
      'The tool uses the IANA Time Zone Database (Europe/Istanbul, Asia/Bangkok), which is the global standard for accurate timezone information and is regularly updated.',
  },
];

const links = [
  {
    name: 'Berlin → São Paulo',
    path: `/${PATHS.timezoneFromBerlinToSaoPaulo}`,
  },
  { name: 'London → Delhi', path: `/${PATHS.timezoneFromLondonToDelhi}` },
  {
    name: 'Frankfurt → Singapore',
    path: `/${PATHS.timezoneFromFrankfurtToSingapore}`,
  },
  {
    name: 'Zurich → Hong Kong',
    path: `/${PATHS.timezoneFromZurichToHongKong}`,
  },
  {
    name: 'Stockholm → Bengaluru',
    path: `/${PATHS.timezoneFromStockholmToBengaluru}`,
  },
];

const howItWorks = [
  'Processes user input using city names, timezone abbreviations, or canonical IANA Time Zone Database identifiers (Europe/Istanbul, Asia/Bangkok).',
  'Converts time by calculating the precise offset from UTC for each location, leveraging the comprehensive IANA database rules.',
  'Maintains a consistent 4-hour difference calculation with no seasonal adjustments required for DST.',
  'Applies context-aware time segment labels based on typical business and cultural patterns in Turkish and Thai contexts.',
  'Outputs converted times in multiple formats, including ISO 8601 for technical use and regional preferences for clear communication.',
];

const ssData = {
  text: 'Effortlessly convert time between Istanbul and Bangkok with a consistent 4-hour difference. Perfect for Turkey-Thailand business and travel planning!',
  hashtags: 'Istanbul,Bangkok,TimeZone,TRT,ICT,GlobalBusiness',
  title: 'Istanbul to Bangkok Time Converter',
};

const title = 'Istanbul to Bangkok Time | TRT to ICT Converter';
const description =
  'Convert Istanbul to Bangkok time with a consistent 4-hour difference. Live clocks, reliable scheduling, and no DST complications for Turkey-Thailand coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Istanbul to Bangkok conversion',
      'Consistent 4-hour time difference',
      'Multiple destination support',
      'Business scheduling optimization',
      'No daylight saving complications',
    ],
    steps: [
      {
        name: 'Set Istanbul origin timezone',
        description:
          'Enter Istanbul time using city name, TRT abbreviation, or Europe/Istanbul IANA identifier',
      },
      {
        name: 'Add Bangkok destination',
        description:
          'Select Bangkok with automatic Asia/Bangkok timezone detection',
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
  head: 'Istanbul to Bangkok Time Conversion',
  subHead:
    'Bridge Europe and Asia with reliable time coordination between Turkey and Thailand. The consistent 4-hour difference simplifies scheduling for business, travel, and communication.',
  featuresHead: 'Features for Turkey-Thailand Coordination',
  tipsHead: 'Effective Scheduling for Istanbul-Bangkok Collaboration',
  faqsHead: 'Istanbul and Bangkok Time Conversion FAQs',
  linksHead: 'European Cities to Asian Metropolises',
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
    originTimeZone: 'Istanbul@@Europe/Istanbul',
    destinationTimeZone: 'Bangkok@@Asia/Bangkok',
  },
});
