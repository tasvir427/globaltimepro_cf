import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMousePointer,
  FaShareSquare,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Choose Location"
      />
    ),
    title: 'Select Your Location or Timezone:',
    description:
      'Start by entering a city name, abbreviations, or the official IANA timezone (like America/New_York). Our smart suggestions help you quickly pinpoint your exact region.',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="View DST Details"
      />
    ),
    title: 'Get Exact DST Start and End Dates:',
    description:
      'Instantly see if Daylight Saving Time is in effect for your chosen area. The tool displays the precise dates and times when DST begins and ends, along with the corresponding time changes.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Analyze Time Offsets" />
    ),
    title: 'Examine Current vs. DST Adjusted Offsets:',
    description:
      'Compare the standard UTC offset with the one adjusted for DST. This information is vital for scheduling international meetings or coordinating travel plans.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Plan and Share" />
    ),
    title: 'Plan Ahead and Share Your Findings:',
    description:
      'Use our DST Checker to stay ahead of time changes. You can easily share or bookmark your results to plan future events with confidence.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Accurate Data"
      />
    ),
    title: 'Accurate DST Insights:',
    description:
      'Get reliable data on DST transitions and UTC offsets for locations worldwide.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="User-Friendly Design"
      />
    ),
    title: 'Effortless Navigation:',
    description:
      'Our simple design ensures that you find the DST information you need in just a few clicks.',
  },
];

const tips = [
  {
    title: 'The "Ramadan Exception" for DST',
    description:
      'Morocco pauses DST during Ramadan to align fasting hours with daylight, reverting to UTC+0 temporarily. This creates a unique 3-month window where clocks shift twice—once for DST and again for Ramadan—a critical detail for event planners or travelers.',
  },
  {
    title: 'Double DST: When Clocks Shift 2 Hours',
    description:
      'During WWII, the UK used "Double Summer Time" (UTC+2) to save energy. While rare today, historical records or legacy systems might reference this—a headache for historians or archivists reconciling timelines.',
  },
  {
    title: 'Cross-Border DST Chaos',
    description:
      'Cities like Nogales (Arizona/Mexico) straddle borders with conflicting DST rules. Arizona ignores DST, while neighboring Mexican Sonora observes it—a trap for scheduling cross-border meetings or logistics.',
  },
  {
    title: 'The 20-Minute DST Experiment',
    description:
      'In 1940, New Zealand’s Chatham Islands tested a 20-minute DST shift (UTC+12:45 → +13:05). While short-lived, such experiments remind users to verify *historical* DST rules for accuracy in research or legal disputes.',
  },
];

const faqs = [
  {
    question: 'Why do some regions skip DST in certain years?',
    answer:
      'Political shifts or crises can override DST. Turkey abolished DST permanently in 2018 mid-year, while Egypt skipped it in 2023 due to energy shortages. Always check for abrupt policy changes in the last 12 months.',
  },
  {
    question: 'How does DST affect equatorial countries?',
    answer:
      'Most equatorial nations (e.g., Singapore, Kenya) ignore DST because daylight hours vary minimally. Exceptions like Ecuador’s 1992-1993 experiment failed due to public confusion—useful for travelers assuming uniform global rules.',
  },
  {
    question: 'Can DST dates overlap inconsistently?',
    answer:
      'Yes! In March 2024, the U.S. shifts to DST on the 10th, while Europe waits until the 31st. For 3 weeks, Paris (UTC+1) is 5 hours ahead of NYC (UTC-4), not the usual 6. Critical for global teams tracking deadlines.',
  },
  {
    question: 'What if a region abolishes DST mid-year?',
    answer:
      'Clocks either stay on "summer time" permanently (e.g., Russia in 2011) or revert to standard time. For example, Iran reverted mid-2022, causing confusion in international contracts with time-specific clauses.',
  },
];

const links = [
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
  { name: 'Sao Paulo', path: `/${PATHS.dstInSaoPaulo}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'Chicago', path: `/${PATHS.dstInChicago}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'Paris', path: `/${PATHS.dstInParis}` },
  { name: 'Toronto', path: `/${PATHS.dstInToronto}` },
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
  { name: 'Cairo', path: `/${PATHS.dstInCairo}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
  { name: 'Atlanta', path: `/${PATHS.dstInAtlanta}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Johannesburg', path: `/${PATHS.dstInJohannesburg}` },
  { name: 'Bangkok', path: `/${PATHS.dstInBangkok}` },
  { name: 'Delhi', path: `/${PATHS.dstInDelhi}` },
  { name: 'Seoul', path: `/${PATHS.dstInSeoul}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Madrid', path: `/${PATHS.dstInMadrid}` },
  { name: 'Lagos', path: `/${PATHS.dstInLagos}` },
  { name: 'Rio de Janeiro', path: `/${PATHS.dstInRioDeJaneiro}` },
  { name: 'Cape Town', path: `/${PATHS.dstInCapeTown}` },
];

const howItWorks = [
  <>
    {' '}
    <strong>
      <a
        href="https://github.com/vvo/tzdb"
        target="_blank"
        rel="noopener noreferrer"
      >
        @vvo/tzdb
      </a>
    </strong>{' '}
    and{' '}
    <strong>
      <a
        href="https://www.npmjs.com/package/city-timezones"
        target="_blank"
        rel="noopener noreferrer"
      >
        city-timezones
      </a>
    </strong>
    : Offer comprehensive mappings between cities, countries, and their
    respective timezones.
  </>,
  <>
    {' '}
    <strong>
      <a
        href="https://momentjs.com/timezone/"
        target="_blank"
        rel="noopener noreferrer"
      >
        moment-timezone
      </a>
    </strong>{' '}
    and{' '}
    <strong>
      <a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">
        moment
      </a>
    </strong>
    : Handle precise time calculations and determine DST transitions accurately.
  </>,
];

const ssData = {
  text: 'Never get caught by daylight saving time changes again! This DST checker helps you stay on track with global time shifts. ⏰🌐',
  hashtags: 'DaylightSaving,TimeManagement',
  title: 'DST Checker',
};

const title = 'Easy DST Checker – By City, Abbrev & IANA';
const description =
  'Check if any city, abbreviation or IANA time zone observes Daylight Saving Time, with exact start and end dates. Developer friendly.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'City, abbreviation & IANA timezone support',
      'Exact DST start & end dates with time changes',
      'Standard vs. DST UTC offset comparison',
      'Bookmarkable & shareable DST results',
      'Global region coverage',
      'Open-source Moment.js & tzdb stack',
    ],
    steps: [
      {
        name: 'Select Your Location or Timezone',
        description:
          'Enter a city name, common abbreviation (e.g. EST), or official IANA timezone (like America/New_York), using smart suggestions to pinpoint your region.',
      },
      {
        name: 'Get Exact DST Start and End Dates',
        description:
          'Instantly see if Daylight Saving Time is in effect for your chosen area, with precise start/end timestamps and the corresponding clock shifts.',
      },
      {
        name: 'Examine Current vs. DST Adjusted Offsets',
        description:
          'Compare the standard UTC offset against the DST-adjusted offset to plan meetings and travel across time changes.',
      },
      {
        name: 'Plan Ahead and Share Your Findings',
        description:
          'Bookmark or generate shareable links of your DST results to coordinate with teams and prepare for upcoming time changes.',
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
  head: 'Accurate Daylight Saving Time Checker for Global Regions',
  subHead:
    'Quickly verify if a location observes Daylight Saving Time and see exactly when the changes occur. This tool is perfect for travelers, remote teams, and anyone managing time across different regions.',
  featuresHead: 'Why Choose Our DST Checker?',
  tipsHead: 'Daylight Saving Time Tips & Advanced Insights',
  faqsHead: 'Daylight Saving Time FAQs: Exceptions & Solutions',
  linksHead: 'Frequently Checked DST Cities',
  howItWorksHead: 'How Our DST Checker Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {},
});
