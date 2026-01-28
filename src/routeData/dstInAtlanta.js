import { FaInfoCircle, FaCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import { GiSundial, GiAlarmClock } from 'react-icons/gi';
import { TbClockCheck } from 'react-icons/tb';
import { MdOutlineTravelExplore } from 'react-icons/md';
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
    title: 'Enter "Atlanta"',
    description:
      "Type the name of Georgia's capital to get precise live time in Eastern Time (ET).",
  },
  {
    icon: <TbClockCheck className={styles.stepIcon} aria-label="DST Status" />,
    title: 'Check DST Status',
    description:
      'See whether Atlanta is currently observing Eastern Standard Time (EST) or Eastern Daylight Time (EDT).',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="Upcoming Changes"
      />
    ),
    title: 'View Transition Dates',
    description:
      'Get exact dates for the spring forward (second Sunday in March) and fall back (first Sunday in November) transitions.',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Time Zone Context"
      />
    ),
    title: 'Understand Regional Impact',
    description:
      'Learn how Atlanta time fits within the Eastern Time Zone, which spans from Maine to Florida.',
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
    title: 'Authoritative Time Data',
    description:
      'Pulls directly from the IANA time zone database (America/New_York) for accurate, up-to-date information.',
  },
  {
    icon: (
      <GiAlarmClock className={styles.featureIcon} aria-label="Change Alerts" />
    ),
    title: 'Upcoming Change Alerts',
    description:
      'Shows precise countdowns to the next DST transition, helping you prepare for clock changes in advance.',
  },
  {
    icon: (
      <GiSundial
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Context',
    description:
      "Provides background on Atlanta's timekeeping history within the broader framework of U.S. time policies.",
  },
];

const tips = [
  {
    title: 'Business Scheduling Across Regions',
    description:
      'When scheduling meetings with partners in Arizona (no DST) or internationally, always confirm time zones using this tool.',
  },
  {
    title: 'Travel Preparation',
    description:
      'If visiting Atlanta during March or November, pack prepared for potential schedule adjustments around DST transition weekends.',
  },
  {
    title: 'Technology Auto-Adjustments',
    description:
      'Most devices automatically adjust for DST, but verify critical appointments around transition dates.',
  },
  {
    title: 'Historical Awareness',
    description:
      'Remember that DST dates changed in 2007 - previous years followed different schedules (April to October).',
  },
];

const faqs = [
  {
    question: 'Does Atlanta observe Daylight Saving Time?',
    answer:
      'Yes, Atlanta follows the national DST schedule, switching between Eastern Standard Time (UTC-5) and Eastern Daylight Time (UTC-4).',
  },
  {
    question: 'When do clock changes happen in Atlanta?',
    answer:
      'Clocks spring forward on the second Sunday in March and fall back on the first Sunday in November, with changes occurring at 2:00 AM local time.',
  },
  {
    question: "What is Atlanta's time zone called?",
    answer:
      'Atlanta is in the Eastern Time Zone (ET), which observes Eastern Standard Time (EST) in winter and Eastern Daylight Time (EDT) in summer.',
  },
  {
    question: 'Has Atlanta always followed these DST rules?',
    answer:
      'No. Before the Uniform Time Act of 1966, DST practices varied. The current schedule has been in place since the Energy Policy Act of 2005 extended DST duration.',
  },
];

const links = [
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Chicago', path: `/${PATHS.dstInChicago}` },
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
];

const howItWorks = [
  'Sources data from the IANA time zone database (America/New_York zone)',
  'Calculates DST transitions based on current U.S. federal laws',
  'Displays both current status and upcoming change dates',
  'Provides contextual information about timekeeping in the Southeast region',
];

const ssData = {
  text: "Check Atlanta's DST status and transition dates. Atlanta observes Eastern Time with Daylight Saving Time changes in spring and fall.",
  hashtags: 'AtlantaTime, DaylightSavingTime, EasternTimeZone, TimeCheck',
  title: 'DST in Atlanta - Daylight Saving Time Checker',
};

const title = 'DST in Atlanta - Daylight Saving Time Checker';
const description =
  'Atlanta observes DST, switching between EST (UTC-5) and EDT (UTC-4). Check current status, upcoming transition dates, and historical time zone information.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Atlanta clock (ET/EDT/EST)',
      'Current DST status visualization',
      'Upcoming change date countdown',
      'Precise IANA time zone data (America/New_York)',
    ],
    steps: [
      {
        name: 'Step 1: Search "Atlanta"',
        description:
          'Instantly load the current local time in Atlanta, showing whether Eastern Standard Time or Eastern Daylight Time is active.',
      },
      {
        name: 'Step 2: Check DST Status',
        description:
          'See a clear visual indication of whether Daylight Saving Time is currently active in Atlanta.',
      },
      {
        name: 'Step 3: Review Transition Dates',
        description:
          'Get exact dates and times for the next DST transition, helping you prepare for clock changes.',
      },
      {
        name: 'Step 4: Understand Regional Context',
        description:
          'Learn how Atlanta time relates to other cities in the Eastern Time Zone and beyond.',
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
  head: 'Atlanta — Eastern Time Zone DST Information',
  subHead:
    'Atlanta observes Daylight Saving Time, switching between Eastern Standard Time (UTC-5) and Eastern Daylight Time (UTC-4) based on federal scheduling.',
  featuresHead: 'Accurate Atlanta Time Tracking',
  tipsHead: 'Making the Most of DST Information',
  faqsHead: 'Atlanta Daylight Saving Time FAQs',
  linksHead: 'Major Southern US Cities',
  howItWorksHead: 'How Our DST Checker Works for Atlanta',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Atlanta@@America/New_York',
  },
});
