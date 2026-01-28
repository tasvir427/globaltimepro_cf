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
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Choose selector"
      />
    ),
    title: 'Select how you’ll pick zones',
    description:
      'Choose City, IANA or Abbreviation mode. Pick one origin (Beijing) and add one or more destinations (Singapore + others).',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Live clocks or a fixed time',
    description:
      'Toggle Live to watch ticking destination clocks, or enter a Custom origin time (past/future) to generate converted times for multiple destinations.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Format choices" />
    ),
    title: 'Choose display formats',
    description:
      'Select the date/time formats you prefer so copied strings match your calendar, logs or messaging style.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Quick actions" />,
    title: 'Use per-destination actions',
    description:
      'Swap origin/destination, Copy formatted time strings, open DST Info for any timezone, or jump to the Jet-Lag planner for that destination.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Zero-offset check"
      />
    ),
    title: 'Instant parity check',
    description:
      'Quickly see that Beijing and Singapore share UTC+8 — useful when you add other destinations to a list and need to spot offset differences at a glance.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Format precision"
      />
    ),
    title: 'Precise output formatting',
    description:
      'Display converted times in multiple formats (24h, 12h, ISO, full date or custom) and copy the exact string you need.',
  },
];

const tips = [
  {
    title: 'No conversion needed between the two',
    description:
      'Beijing (CST) and Singapore (SGT) both use UTC+8 — their local clocks read the same. If you only need parity, Live mode confirms identical local times instantly.',
  },
  {
    title: 'Why still use the converter here',
    description:
      'Add additional destinations (e.g., Tokyo, Jakarta) and the converter highlights differences immediately; use Custom mode to propose multi-city slots and copy formatted strings.',
  },
  {
    title: 'Work hours alignment',
    description:
      'Because both cities share timezone, typical business hours overlap fully — use the color-slot label to pick morning, lunch or afternoon slots consistently.',
  },
  {
    title: 'DST note',
    description:
      'Neither Beijing nor Singapore observes DST. When mixing other destinations, use the Info action to check DST status that may affect offsets.',
  },
];

const faqs = [
  {
    question: 'Are Beijing and Singapore on the same time?',
    answer:
      'Yes — both operate on UTC+8. The converter will show identical local times for these two cities unless you add other destinations with different offsets.',
  },
  {
    question: 'Do either city use DST?',
    answer:
      'No—Beijing and Singapore do not observe Daylight Saving Time. Offsets for these cities remain stable year-round.',
  },
  {
    question: 'How can I include both local dates when copying?',
    answer:
      'Use the Copy action to copy formatted date+time strings for each destination; the converter shows local date and flags any cross-date conversions when other timezones are present.',
  },
];

const links = [
  {
    name: 'Beijing → New York',
    path: `/${PATHS.timezoneFromBeijingToNewYork}`,
  },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation mode.',
  'Uses tzdb offsets to compute Live or Custom conversions for each selected destination.',
  'Highlights identical offsets (parity) and flags date-rollover for destinations on different calendar days.',
  'Provides destination actions: Swap, Copy formatted time, Info (DST details), and Jet-Lag planner link.',
];

const ssData = {
  text: 'Beijing → Singapore — same-time (UTC+8). Instant one→many conversions & quick copy for schedules.',
  hashtags: 'TimeZones,Beijing,Singapore',
  title: 'Beijing → Singapore — Same-Timezone Converter',
};

const title = 'Beijing → Singapore — Same-Timezone Converter';
const description =
  'Convert Beijing (CST) → Singapore (SGT) — both UTC+8. One-to-many live/custom conversions, selectable formats, quick copy & swap, plus DST info.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversion (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Parity detection (same-offset) and date-rollover visibility',
      'Per-destination actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Choose selector mode & targets',
        description:
          'Pick City, IANA, or Abbreviation mode and select Beijing plus one or more destinations (e.g., Singapore).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live for ticking clocks or enter a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Select formats & view results',
        description:
          'Pick display formats and review converted destination cards; parity and date-rollover flags help spot differences.',
      },
      {
        name: 'Step 4: Copy or view DST/jet-lag',
        description:
          'Copy formatted timestamps, swap origin/destination, open DST details, or jump to the jet-lag planner when needed.',
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
  head: 'Beijing → Singapore Time Converter',
  subHead:
    'Convert Beijing (CST) to Singapore (SGT) — both are UTC+8. Use City/IANA/Abbreviation selectors, toggle Live or Custom time, pick display formats, and copy exact formatted timestamps for messages or schedules.',
  featuresHead: 'Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Beijing and Singapore Timezone Conversions',
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
    originTimeZone: 'Beijing@@Asia/Shanghai',
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
