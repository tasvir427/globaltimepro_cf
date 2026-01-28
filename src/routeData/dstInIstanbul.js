import { FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiCompass, GiRialtoBridge } from 'react-icons/gi';
import { TbClock } from 'react-icons/tb';
import { MdSchedule, MdOutlineTravelExplore } from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdOutlineTravelExplore
        className={styles.stepIcon}
        aria-label="Search City"
      />
    ),
    title: 'Enter "Istanbul"',
    description:
      "Type the name of Turkey's cultural capital to get precise live time in Turkey Time (TRT).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm Permanent Time Zone',
    description:
      'See that Istanbul maintains Turkey Time (UTC+3) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+3 Offset',
    description:
      'View the stable time offset that has been in place since 2016, providing scheduling certainty.',
  },
  {
    icon: (
      <GiRialtoBridge
        className={styles.stepIcon}
        aria-label="Bridge Between Continents"
      />
    ),
    title: 'Understand Cross-Continental Context',
    description:
      'Learn how Istanbul time connects European and Asian business hours as the bridge between continents.',
  },
];

const features = [
  {
    icon: (
      <FaInfoCircle
        className={styles.featureIcon}
        aria-label="Authoritative Data"
      />
    ),
    title: 'Definitive Time Clarification',
    description:
      "Provides clear confirmation of Turkey's permanent UTC+3 policy, cutting through confusion from past frequent changes.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Policy Timeline',
    description:
      "Explains Turkey's time zone evolution from frequent DST changes to the current stable system implemented in 2016.",
  },
  {
    icon: (
      <GiCompass
        className={styles.featureIcon}
        aria-label="Geographical Context"
      />
    ),
    title: 'Geographical Time Context',
    description:
      'Shows how Istanbul time relates to both European and Asian time zones for international coordination.',
  },
];

const tips = [
  {
    title: 'Business Scheduling with Europe',
    description:
      'Istanbul (UTC+3) is 1 hour ahead of Central European Time (CET) and 2 hours ahead of Western European Time (WET) during winter months.',
  },
  {
    title: 'Meeting Planning with Asia',
    description:
      'Coordinate with Asian partners knowing Istanbul is 5 hours behind Singapore and 6 hours behind Tokyo during standard time.',
  },
  {
    title: 'Travel Planning Certainty',
    description:
      'No need to worry about seasonal clock changes when visiting Istanbul—the time remains consistent throughout the year.',
  },
  {
    title: 'Historical Awareness',
    description:
      'Be aware that some older references may show different times—Turkey used DST frequently before 2016.',
  },
];

const faqs = [
  {
    question: 'Does Istanbul observe Daylight Saving Time?',
    answer:
      'No. Turkey abolished Daylight Saving Time in 2016 and now maintains Turkey Time (UTC+3) permanently throughout the year.',
  },
  {
    question: 'Why did Turkey stop using DST?',
    answer:
      'The government made the change to provide stability for business and energy planning, eliminating the twice-yearly disruptions.',
  },
  {
    question: "What is Istanbul's current time zone?",
    answer:
      'Istanbul uses Turkey Time (TRT), which is UTC+3 year-round. This has been consistent since September 2016.',
  },
  {
    question: 'How does Istanbul time compare to neighboring countries?',
    answer:
      'Istanbul is in the same time zone as Moscow and most of the Middle East, but differs from European countries that still observe DST.',
  },
];

const links = [
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'Cairo', path: `/${PATHS.dstInCairo}` },
  { name: 'London', path: `/${PATHS.dstInLondon}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Europe/Istanbul)',
  "Confirms Turkey's permanent UTC+3 offset established in 2016",
  'Provides historical context about past DST practices in Turkey',
  'Offers comparison data with neighboring European and Asian time zones',
];

const ssData = {
  text: 'Istanbul maintains Turkey Time (UTC+3) year-round with no DST. Get clear information about time in this transcontinental city.',
  hashtags: 'IstanbulTime, TurkeyTime, NoDST, TimeZone',
  title: 'DST in Istanbul - Turkey Time Zone Checker',
};

const title = 'DST in Istanbul - Turkey Time Zone Checker';
const description =
  "Istanbul uses Turkey Time (UTC+3) permanently without DST. Check current time and understand Turkey's stable time zone policy since 2016.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Istanbul clock (TRT, UTC+3)',
      'Definitive "No DST" status for Turkey',
      'Precise IANA time zone data (Europe/Istanbul)',
      "Historical context on Turkey's time policy changes",
    ],
    steps: [
      {
        name: 'Step 1: Search "Istanbul"',
        description:
          'Instantly load the current local time in Istanbul, showing Turkey Time (UTC+3).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that Turkey abolished Daylight Saving Time in 2016.',
      },
      {
        name: 'Step 3: Review Stable UTC+3 Offset',
        description:
          'See the consistent time offset that provides scheduling certainty for business and travel.',
      },
      {
        name: 'Step 4: Understand Regional Context',
        description:
          'Learn how Istanbul time connects European and Asian business hours as a bridge between continents.',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.dst.json',
  });
};

export const getData = (page) => ({
  head: 'Istanbul — Stable Time in Turkey',
  subHead:
    'Istanbul maintains Turkey Time (UTC+3) year-round without Daylight Saving Time. Turkey abolished DST in 2016, providing consistent timekeeping for this transcontinental city.',
  featuresHead: 'Clarity on Turkey Time Policy',
  tipsHead: 'Using Istanbul Time Effectively',
  faqsHead: 'Istanbul Time & DST FAQs',
  linksHead: 'Cities Bridging Continents',
  howItWorksHead: 'How We Provide Accurate Istanbul Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Istanbul@@Europe/Istanbul',
  },
});
