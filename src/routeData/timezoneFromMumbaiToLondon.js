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
        aria-label="Pick origin & targets"
      />
    ),
    title: 'Set Mumbai as origin',
    description:
      'Choose City, IANA or Abbreviation mode and set Mumbai as the origin. Add London and any other destinations you need to compare.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Live or exact time" />
    ),
    title: 'Live ticking clocks or an exact candidate time',
    description:
      'Toggle Live to monitor current ticking clocks across destinations, or enter a precise origin time (past or future) to convert into many destination times at once.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Format outputs" />
    ),
    title: 'Pick display formats',
    description:
      'Select output formats (24h, 12h, ISO, full date or custom) so copied strings fit interview invites, schedules or documentation.',
  },
  {
    icon: (
      <FaCopy
        className={styles.stepIcon}
        aria-label="Per-destination actions"
      />
    ),
    title: 'Copy, swap, info & jet-lag',
    description:
      'Use per-destination actions to Swap origin/destination, Copy the exact formatted string, open DST Info for the timezone, or jump to the Jet-Lag planner.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversions',
    description:
      'Convert a single Mumbai time (live or custom) into multiple destination cards to compare local times at a glance.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Half-hour attention"
      />
    ),
    title: 'Half-hour offset attention',
    description:
      'Mumbai uses IST (UTC+5:30). The 30-minute offset can cause ambiguous-looking calendar entries—our converter shows exact numeric offsets to avoid errors.',
  },
];

const tips = [
  {
    title: 'Best interview window (same day)',
    description:
      'A practical overlap is Mumbai 14:00–16:30 IST ↔ London 09:30–12:00 GMT (when London is on GMT). In BST (London +1) these map to Mumbai 14:00–16:30 ↔ London 10:30–13:00 — always confirm via the Info action during DST switch windows.',
  },
  {
    title: 'Morning meetings for India, late-morning for UK',
    description:
      'If Mumbai schedules morning interviews (09:00–11:00 IST), London participants will join in the early morning (04:30–06:30 GMT) — avoid these unless necessary for round-the-clock teams.',
  },
  {
    title: 'How to paste times clearly',
    description:
      'Copy both local date & time (use Copy) and paste like: “Mon 14:00 IST / Mon 09:30 GMT” to prevent misunderstandings—include timezone abbreviations when possible.',
  },
  {
    title: 'Why check DST for London',
    description:
      'India does not use DST; London does. Around the DST swap there are short periods when offsets shift — use the Info button to verify London’s current DST status before finalizing times.',
  },
];

const faqs = [
  {
    question: 'What is the exact offset between Mumbai and London?',
    answer:
      'Mumbai uses IST (UTC+5:30). London is on GMT (UTC+0) or BST (UTC+1) depending on the time of year. That makes Mumbai 5.5 hours ahead of London in GMT, and 4.5 hours ahead when London is on BST.',
  },
  {
    question: 'Does India observe DST?',
    answer:
      'No—India does not observe daylight saving time. Offsets for IST remain stable year-round; London’s offset can change for BST so verify with the Info action if needed.',
  },
  {
    question: 'Can I prepare multiple formatted times for invites?',
    answer:
      'Yes—use Custom mode to set a candidate Mumbai time, then copy formatted strings from each destination card to paste into invites, messages, or spreadsheets.',
  },
];

const links = [
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
];

const howItWorks = [
  'Accepts one origin and many destinations using City, IANA or Abbreviation selectors.',
  'Uses tzdb offsets for precise conversions so Live mode ticks in real time and Custom mode converts a static origin time across destinations.',
  'Displays formatted local date/time and numeric offsets; flags when a converted time falls on a different calendar day.',
  'Per-destination actions: Swap, Copy formatted time, Info (DST details), and Jet-Lag planner link.',
];

const ssData = {
  text: 'Mumbai → London — convert IST↔GMT/BST. Note the 30-min offset; copy exact invite times fast.',
  hashtags: 'TimeZones,Mumbai,London',
  title: 'Mumbai → London Time Converter — IST↔GMT/BST',
};

const title = 'Mumbai → London Time Converter — IST↔GMT/BST';
const description =
  "Convert Mumbai (IST) → London (GMT/BST). One-to-many live/custom conversions. Note India's 30-min offset, best meeting windows and one-click copy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversions (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Half-hour offset clarity and date-rollover flags',
      'Per-destination actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Set origin & targets',
        description:
          'Choose City, IANA or Abbreviation mode and set Mumbai plus one or more destinations (e.g., London).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live for ticking clocks or enter a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Choose formats & copy',
        description:
          'Pick output formats, review converted destination cards, and copy formatted strings for invites or schedules.',
      },
      {
        name: 'Step 4: Verify DST & offsets',
        description:
          'Use Info to check DST for any destination and rely on numeric offsets to avoid mistakes caused by half-hour rules.',
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
  head: 'Mumbai → London Time Converter',
  subHead:
    'Convert Mumbai (IST) to London (GMT/BST) and multiple destinations. Choose City/IANA/Abbreviation mode, use Live clocks or a Custom time, pick output formats, and copy with one click.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Scheduling Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Mumbai and London Timezone Conversions',
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
    destinationTimeZone: 'London@@Europe/London',
  },
});
