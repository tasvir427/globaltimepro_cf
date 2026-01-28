import {
  FaClock,
  FaGlobeAmericas,
  FaExchangeAlt,
  FaShareAlt,
  FaSyncAlt,
  FaFighterJet,
} from 'react-icons/fa';
import { TbCalendarTime, TbWorld } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Select origin" />,
    title: 'Start in Seoul Time',
    description:
      'Enter "Seoul" or Asia/Seoul as your origin. The tool pre-fills with Korea Standard Time (KST) for immediate use.',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Add destinations"
      />
    ),
    title: 'Add San Francisco',
    description:
      'Type "San Francisco" or America/Los_Angeles to see the dramatic 16-hour time difference and plan across the date line.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Time Perspective',
    description:
      'Use Live mode for real-time tracking or Custom mode to schedule meetings across the "yesterday-today" time gap.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share results" />,
    title: 'Coordinate Your Team',
    description:
      'Generate shareable links for global teams or copy specific times for calendar invites across this challenging time zone pair.',
  },
];

const features = [
  {
    icon: (
      <TbCalendarTime
        className={styles.featureIcon}
        aria-label="Time segments"
      />
    ),
    title: 'Date Line Intelligence',
    description:
      'Automatically handles the unique situation where Seoul is already in tomorrow while San Francisco remains in today.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Swap function"
      />
    ),
    title: 'Bidirectional Planning',
    description:
      'Quickly swap to see San Francisco to Seoul timing for callback scheduling and reverse-perspective planning.',
  },
  {
    icon: (
      <FaFighterJet
        className={styles.featureIcon}
        aria-label="Jet lag planner"
      />
    ),
    title: 'Transpacific Flight Recovery',
    description:
      'Plan sleep schedules for the long-haul flight between Incheon and SFO, minimizing 16-hour time zone jet lag.',
  },
  {
    icon: (
      <FaSyncAlt className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'Seasonal Adjustment Tracking',
    description:
      'Monitor when the time difference shifts between 16-17 hours due to different DST observance schedules.',
  },
];

const tips = [
  {
    title: 'Tech Industry Overlap Strategy',
    description:
      'Maximize the brief 2-hour window (Seoul 09:00-11:00 = San Francisco 16:00-18:00 previous day) for real-time collaboration between tech teams.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Korea standardized to GMT+9 in 1912 during Japanese occupation, creating this consistent time relationship with Pacific Time that has endured for over a century.',
  },
  {
    title: 'Asynchronous Work Advantage',
    description:
      "Use Seoul's workday to prepare deliverables that San Francisco team can review and continue working on the same calendar day.",
  },
];

const faqs = [
  {
    question: 'Why does Seoul feel like "tomorrow" compared to San Francisco?',
    answer:
      "Seoul is 16-17 hours ahead, meaning when it's morning in Seoul, it's still afternoon/evening of the previous day in San Francisco.",
  },
  {
    question: "What's the best day for weekly team syncs between these cities?",
    answer:
      'Friday mornings in Seoul (connecting with Thursday afternoon in SF) allow both teams to wrap up the week and plan for Monday.',
  },
  {
    question: 'How do I schedule urgent issues across this time gap?',
    answer:
      'Use the tool to find when Seoul evening (18:00-21:00) overlaps with San Francisco early morning (02:00-05:00) for emergency contacts.',
  },
];

const links = [
  { name: 'Seoul → Sydney', path: `/${PATHS.timezoneFromSeoulToSydney}` },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Converts between Asia/Seoul (KST - GMT+9) and America/Los_Angeles (PST/PDT - GMT-8/GMT-7) IANA time zones',
  'Handles the 16-hour standard difference and 17-hour difference during US daylight saving time',
  'Manages date line crossing automatically, showing correct day relationships',
  'Processes time calculations using precise UTC offsets accounting for seasonal changes',
];

const ssData = {
  text: 'Navigate the 16-hour time gap between Seoul and San Francisco! Essential for tech teams and transpacific coordination. 🕐🇰🇷➡️🇺🇸',
  hashtags: 'SeoulSanFrancisco,TimeZone,TechCollaboration,Transpacific',
  title: 'Seoul to San Francisco Time Converter',
};

const title = 'Seoul to San Francisco Time Converter (KST to PST)';
const description =
  'Convert Seoul to San Francisco time with 16-hour difference. Perfect for tech collaboration, gaming industry, and planning across the date line.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Seoul to San Francisco time conversion',
      'Date line crossing handling',
      'Multiple destination support for branch offices',
      'Seasonal time difference adjustments',
    ],
    steps: [
      {
        name: 'Set Seoul as origin time zone',
        description:
          'Select Asia/Seoul or type city name to establish KST base time',
      },
      {
        name: 'Add San Francisco as destination',
        description:
          'Enter America/Los_Angeles to see converted time with 16-hour difference',
      },
      {
        name: 'Choose Live or Custom time mode',
        description:
          'View current times or plan future schedules across the date line',
      },
      {
        name: 'Share timing with colleagues',
        description:
          'Generate links or copy results for team coordination across oceans',
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
  head: 'Seoul to San Francisco Time Conversion',
  subHead:
    "Master the 16-hour transpacific leap between Asia's tech capital and Silicon Valley with intelligent time coordination",
  featuresHead: 'Essential Features for Seoul-SF Planning',
  tipsHead: 'Smart Coordination Strategies',
  faqsHead: 'Seoul-San Francisco Time Questions',
  linksHead: 'Asian Hubs to Global Destinations',
  howItWorksHead: 'Precision Time Calculation',
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
    originTimeZone: 'Seoul@@Asia/Seoul',
    destinationTimeZone: 'San Francisco@@America/Los_Angeles',
  },
});
