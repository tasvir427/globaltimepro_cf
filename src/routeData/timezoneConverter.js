import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaGlobeAmericas,
  FaMousePointer,
  FaPalette,
  FaShareSquare,
  FaSyncAlt,
  FaUndo,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Select Timezone"
      />
    ),
    title: 'Select Your Origin Timezone:',
    description:
      'Manually choose your starting timezone using official IANA names (e.g., America/New_York), common abbreviations (EST, PST), or by entering a city name. This ensures your conversion begins with the correct local time.',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="Enter Date and Time"
      />
    ),
    title: 'Enter Date and Time (12-Hour/24-Hour Options):',
    description:
      'Set the moment you wish to convert using our intuitive date-time picker. It supports both 12-hour and 24-hour formats and adapts smoothly when real-time mode is active.',
  },
  {
    icon: (
      <FaPalette className={styles.stepIcon} aria-label="Customize Format" />
    ),
    title: 'Customize Your Output Time Format:',
    description:
      'Choose from thirteen predefined datetime formats—including ISO 8601 and US short date—or create your own custom format with Moment.js tokens to ensure your output meets your specific needs.',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Select Destination Timezones"
      />
    ),
    title: 'Select Destination Timezone(s):',
    description:
      'Select one or more destination timezones for conversion. Use quick-add and clear-all options to manage your selections with ease—ideal for keeping track of schedules in different regions.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="View Converted Time" />
    ),
    title: 'View Instantly Updated Converted Time:',
    description:
      'Watch your conversion results update in real-time with accurate clock displays. This feature is perfect for live event tracking and global scheduling.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Share Results" />
    ),
    title: 'Share Your Conversion Results:',
    description:
      'Easily generate shareable links to quickly communicate your conversion results with colleagues.',
  },
  {
    icon: (
      <FaUndo className={styles.stepIcon} aria-label="Undo or Redo Actions" />
    ),
    title: 'Utilize Undo/Redo & Version Control:',
    description:
      'With a detailed 30-step action history, you can effortlessly undo or redo changes, ensuring you never lose progress during complex conversions.',
  },
  {
    icon: (
      <FaSyncAlt
        className={styles.stepIcon}
        aria-label="Toggle Real-Time Mode"
      />
    ),
    title: 'Toggle Real-Time Mode for Live Clock Synchronization:',
    description:
      'Activate real-time mode to continuously update clocks across your selected timezones, ensuring you always have the most current time information at your fingertips.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="DST Adjustments"
      />
    ),
    title: 'Automatic Daylight Saving Time Adjustments:',
    description:
      'Precisely handles DST transitions for over 500 timezones with historical data dating back to 1970.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Military Time Converter"
      />
    ),
    title: 'Military Time Converter with NATO Phonetics:',
    description:
      'Provides optional 24-hour displays with phonetic alphabet cues for enhanced timing accuracy.',
  },
];

const tips = [
  {
    title: 'Watch for "Hidden" Date Changes',
    description:
      'When converting times across the International Date Line (e.g., Fiji to Hawaii), a 2-hour flight can land 22 hours "earlier". Always verify the *date* in both zones—especially for deadlines or travel plans.',
  },
  {
    title: 'Cities with the Same Clock, Different Sun',
    description:
      'Madrid (UTC+1) and Lagos (UTC+1) share a time zone but have wildly different sunrise/sunset times. Use solar calculators for events tied to daylight (e.g., outdoor streaming) to avoid mismatched expectations.',
  },
  {
    title: 'The 45-Minute Island Exception',
    description:
      'The Chatham Islands (New Zealand) use UTC+12:45—a rare offset. While unusual, your converter handles such offsets automatically. This highlights why manual time math can be risky—automated tools like this one ensure accuracy.',
  },
  {
    title: 'Time Zones Can Change Overnight',
    description:
      'Countries occasionally shift time zones for political reasons (e.g., Samoa skipped a day in 2011). For critical conversions, check if a region’s time zone has changed in the last 5 years.',
  },
];

const faqs = [
  {
    question: 'Why does my converted time show the wrong *date*?',
    answer:
      'This happens when converting between zones with a 12+ hour difference. Example: 8:00 PM in Tokyo (UTC+9) is 5:00 AM *the same day* in New York (UTC-4), but 8:00 PM in Auckland (UTC+12) is 4:00 AM *the next day* in New York.',
  },
  {
    question: 'Do all countries switch to DST on the same date?',
    answer:
      'No! The EU shifts on March 31/Oct 27, the U.S. on March 10/Nov 3, and Australia on April 7/Oct 6. Misaligned DST dates can create temporary 1-3 hour differences between regions that usually align.',
  },
  {
    question: 'How do I handle time zones for a country with multiple offsets?',
    answer:
      'Russia spans 11 zones, but cities like Moscow (UTC+3) and Vladivostok (UTC+10) are often confused. Always specify the *exact city or region*, not just the country, for conversions.',
  },
  {
    question: 'Why do some small islands have unique offsets?',
    answer:
      'Islands like Newfoundland (UTC-3:30) or the Cocos Islands (UTC+6:30) align offsets with trading partners or historical ties. Always verify offsets for islands—they’re often exceptions.',
  },
];

const links = [
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
  {
    name: 'London → Tokyo',
    path: `/${PATHS.timezoneFromLondonToTokyo}`,
  },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.timezoneFromLosAngelesToSydney}`,
  },
  {
    name: 'Paris → New York',
    path: `/${PATHS.timezoneFromParisToNewYork}`,
  },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  {
    name: 'Johannesburg → Dubai',
    path: `/${PATHS.timezoneFromJohannesburgToDubai}`,
  },
  {
    name: 'Sao Paulo → London',
    path: `/${PATHS.timezoneFromSaoPauloToLondon}`,
  },
  {
    name: 'New York → London',
    path: `/${PATHS.timezoneFromNewYorkToLondon}`,
  },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  {
    name: 'Berlin → New York',
    path: `/${PATHS.timezoneFromBerlinToNewYork}`,
  },
  { name: 'Paris → Dubai', path: `/${PATHS.timezoneFromParisToDubai}` },
  { name: 'London → Sydney', path: `/${PATHS.timezoneFromLondonToSydney}` },
  {
    name: 'Dubai → Singapore',
    path: `/${PATHS.timezoneFromDubaiToSingapore}`,
  },
  {
    name: 'New York → Mumbai',
    path: `/${PATHS.timezoneFromNewYorkToMumbai}`,
  },
  { name: 'Chicago → Tokyo', path: `/${PATHS.timezoneFromChicagoToTokyo}` },
  {
    name: 'Hong Kong → London',
    path: `/${PATHS.timezoneFromHongKongToLondon}`,
  },
  { name: 'Toronto → Berlin', path: `/${PATHS.timezoneFromTorontoToBerlin}` },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  {
    name: 'Beijing → New York',
    path: `/${PATHS.timezoneFromBeijingToNewYork}`,
  },
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
];

const howItWorks = [
  <>
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
    : Accurately map timezone abbreviations and city names to their
    corresponding timezones.
  </>,
  <>
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
    : Handle precise time conversions and formatting, ensuring every output
    meets your exact requirements.
  </>,
  <>
    <strong>
      <a
        href="https://github.com/wojtekmaj/react-datetime-picker"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-datetime-picker
      </a>
    </strong>
    : Delivers an intuitive interface for selecting dates and times, enhancing
    your overall user experience.
  </>,
];

const ssData = {
  text: 'Check out this awesome multi-timezone conversion tool! Perfect for coordinating across different regions. 🕒🌍',
  hashtags: 'TimeZone,Productivity',
  title: 'Multi-TimeZone Converter',
};

const title = 'Fast Time Zone Converter – By City, Abbrev & IANA';
const description =
  'Convert times between any city, abbreviation or IANA zone with automatic DST adjustment. Developer friendly, simple, accurate and free to use.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'IANA, city & abbreviation support',
      '12-hour & 24-hour date-time picker',
      'Thirteen predefined & custom Moment.js formats',
      'Multi-destination selection with quick-add & clear-all',
      'Instant real-time conversion updates',
      'Shareable result links for teams',
      '30-step undo/redo version history',
      'Live clock synchronization across zones',
      'Developer-friendly, transparent open-source stack',
    ],
    steps: [
      {
        name: 'Select Your Origin Timezone',
        description:
          'Manually choose your starting timezone using official IANA names (e.g., America/New_York), common abbreviations (EST, PST), or by entering a city name to ensure accurate local time.',
      },
      {
        name: 'Enter Date and Time (12-Hour/24-Hour Options)',
        description:
          'Set the moment to convert via our intuitive date-time picker supporting both 12-hour and 24-hour formats, with seamless real-time mode adaptation.',
      },
      {
        name: 'Customize Your Output Time Format',
        description:
          'Choose from thirteen built-in datetime formats—including ISO 8601 and US short date—or define your own using Moment.js tokens for precise output.',
      },
      {
        name: 'Select Destination Timezone(s)',
        description:
          'Pick one or more target timezones. Use quick-add and clear-all controls to manage multiple selections easily for global scheduling.',
      },
      {
        name: 'View Instantly Updated Converted Time',
        description:
          'See conversion results update live with accurate clock displays—ideal for tracking events and coordinating meetings worldwide.',
      },
      {
        name: 'Share Your Conversion Results',
        description:
          'Generate and copy shareable links to communicate your conversion outcomes quickly with colleagues and collaborators.',
      },
      {
        name: 'Utilize Undo/Redo & Version Control',
        description:
          'Navigate a 30-step action history to undo or redo changes effortlessly, so you never lose progress on complex conversion sequences.',
      },
      {
        name: 'Toggle Real-Time Mode for Live Clock Synchronization',
        description:
          'Activate real-time mode to continuously refresh clocks across all selected timezones, ensuring you always see the current time everywhere.',
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
  head: 'Multi-Timezone Converter with City, Abbreviation & IANA Support',
  subHead:
    'Convert time zones quickly and accurately with our advanced multi-timezone converter. Whether you’re planning international meetings, tracking live events, or coordinating schedules, our tool delivers precise and trustworthy results.',
  featuresHead: 'Advanced Features for Professional Timezone Management',
  tipsHead: 'Timezone Conversion Tips & Best Practices',
  faqsHead: 'Timezone Conversion FAQs: Answers & Troubleshooting',
  linksHead: 'Popular Timezone Conversions',
  howItWorksHead: 'How We Convert and Display Time Data',
  showLegend: true,
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    destinationTimeZone:
      'New York@@America/New_York,London@@Europe/London,Tokyo@@Asia/Tokyo,Sydney@@Australia/Sydney',
  },
});
