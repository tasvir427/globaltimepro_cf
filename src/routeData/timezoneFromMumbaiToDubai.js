import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCopy,
  FaMousePointer,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer className={styles.stepIcon} aria-label="Select Mode" />
    ),
    title: 'Choose selection mode',
    description:
      'Pick City, IANA, or Abbreviation mode. Select one origin (Mumbai) and one or more destinations (Dubai + others).',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Live or Custom Time" />
    ),
    title: 'Live clocks or custom time',
    description:
      'Switch between live ticking clocks for all destinations or enter a custom origin time (past/future) to convert across destinations.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Format Output" />
    ),
    title: 'Choose output formats',
    description:
      'Select one or more date/time formats to display converted times (24h, 12h, ISO, full date, or a custom format).',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Copy & Actions" />,
    title: 'Use quick actions',
    description:
      'Copy times, swap origin/destination, open DST info for any timezone, or jump to the jet-lag planner for that destination.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversions',
    description:
      'Convert one origin time (live or custom) into multiple destination times in one view.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Multiple formats"
      />
    ),
    title: 'Multiple output formats',
    description:
      'Display converted times in any combination of available formats and custom strings.',
  },
];

const tips = [
  {
    title: 'Common business overlap',
    description:
      'Mumbai is 1h30m ahead of Dubai (IST UTC+5:30 vs GST UTC+4). Typical overlap for standard business hours: Mumbai 10:30–16:00 ↔ Dubai 09:00–14:30.',
  },
  {
    title: 'When to use Live mode',
    description:
      'Use Live mode for real-time monitoring of multiple destinations (helpful for operations desks and travel arrivals).',
  },
  {
    title: 'When to use Custom time',
    description:
      'Pick Custom time for past/future scheduling across several timezones (useful when proposing meeting slots or planning flights).',
  },
  {
    title: 'How to avoid invite confusion',
    description:
      'Include both origin and destination timestamps in invites and attach a link to the converter—use copy-to-clipboard for exact formatting.',
  },
];

const faqs = [
  {
    question: 'Can I convert one time to many destinations at once?',
    answer:
      'Yes. Pick one origin (City/IANA/Abbr) and multiple destinations. The converter displays all converted times side-by-side.',
  },
  {
    question: 'Do converted times update automatically?',
    answer:
      'In Live mode, destination clocks tick in real-time. In Custom mode, conversions are static based on the entered origin time.',
  },
  {
    question: 'What do the color labels mean?',
    answer:
      'Color labels map converted times to human-friendly slots (sleep, morning, work AM, lunch, work PM, evening, night) so you can pick convenient meeting times at a glance.',
  },
  {
    question: 'What do the action buttons do?',
    answer:
      'Swap swaps origin/destination, Copy copies the formatted time & timezone, Info opens the DST page for that timezone, and Jet Lag links to the jet-lag planner for that destination.',
  },
];

const links = [
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  { name: 'Paris → Dubai', path: `/${PATHS.timezoneFromParisToDubai}` },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation modes.',
  'Uses tzdb offsets to compute accurate conversions for Live or Custom times.',
  'Formats outputs using user-selected formats or a custom string.',
  'Displays destination cards with color-coded time slots and quick action buttons for copy, info (DST), swap, and jet-lag.',
];

const ssData = {
  text: 'Convert Mumbai (IST) to Dubai (GST) and multiple destinations. Live or custom times, multiple formats, color-coded slots, one-click copy, swap, and quick DST/info links.',
  hashtags: 'TimeZones,Mumbai,Dubai,Productivity',
  title: 'Mumbai → Dubai Time Converter',
};

const title = 'Mumbai → Dubai Time Converter';
const description =
  'Convert Mumbai (IST) → Dubai (GST) & other cities. One-to-many live/custom times, selectable formats, color-coded slots, one-click copy, swap & DST info.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversion (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Multiple output formats and custom format support',
      'Destination cards with color slots and quick actions (swap, copy, info, jet-lag)',
    ],
    steps: [
      {
        name: 'Step 1: Choose selection mode',
        description:
          'Pick City, IANA, or Abbreviation mode and select one origin plus multiple destinations.',
      },
      {
        name: 'Step 2: Live or Custom Time',
        description:
          'Toggle Live clocks for ticking times or enter a custom origin time for conversions.',
      },
      {
        name: 'Step 3: Pick formats & view results',
        description:
          'Select output formats and view converted destination times with color-coded slots and action buttons.',
      },
      {
        name: 'Step 4: Copy or export',
        description:
          'Copy formatted times, swap origin/destination, view DST info, or open the jet-lag planner for a destination.',
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
  head: 'Mumbai → Dubai Time Converter',
  subHead:
    'Convert Mumbai (IST) to Dubai (GST) and multiple destinations. Choose City/IANA/Abbreviation mode, use Live clocks or a Custom time, pick output formats, and copy or export with one click.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Scheduling Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Mumbai and Dubai Timezone Conversions',
  howItWorksHead: 'How It Works',
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
    originTimeZone: 'Mumbai@@Asia/Kolkata',
    destinationTimeZone: 'Dubai@@Asia/Dubai',
  },
});
