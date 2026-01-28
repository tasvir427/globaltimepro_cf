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
      <FaMousePointer className={styles.stepIcon} aria-label="Pick selector" />
    ),
    title: 'Pick a selector and targets',
    description:
      'Choose City, IANA or Abbreviation mode. Set New York as the origin and add London plus any other destinations to compare side-by-side.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Live ticking clocks or a fixed candidate time',
    description:
      'Toggle Live to monitor current local times, or enter a custom New York time (past or future) to convert for multiple destinations at once.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Choose formats" />
    ),
    title: 'Select display formats',
    description:
      'Pick one or more output formats (24h, 12h, ISO, full date, or custom) so the strings you copy match calendar or publication needs.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Quick actions" />,
    title: 'Use per-destination actions',
    description:
      'For each destination card you can Swap origin/destination, Copy the formatted time, open DST Info, or jump to the Jet-Lag planner for that timezone.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversions at a glance',
    description:
      'Convert a single New York time into multiple destination cards so you can rapidly compare local times for teams, partners, or audiences.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Overlap hints"
      />
    ),
    title: 'Market & media overlap hints',
    description:
      'Quickly see suggested windows that balance U.S. market hours and U.K. business schedules — handy for calls, broadcasts, and deadlines.',
  },
];

const tips = [
  {
    title: 'Prime window for transatlantic calls',
    description:
      'A dependable overlap is New York 08:00–11:00 ET ↔ London 13:00–16:00 GMT/BST. This range avoids early mornings in New York and late evenings in London for typical business days.',
  },
  {
    title: 'Finance & markets note',
    description:
      'When coordinating traders or analysts, be mindful of stock market open/close times (NYSE vs LSE). Use the converter to copy exact local timestamps for reports or deadlines.',
  },
  {
    title: 'Media scheduling tip',
    description:
      'If booking live interviews, prefer late-morning NY slots (which are afternoon in London) to maximize audience reach in both regions.',
  },
  {
    title: 'DST transition caveat',
    description:
      'New York and London usually differ by 5 hours, but around DST changeovers the offset may shift temporarily. Use the Info action to confirm current DST status for any destination before finalizing times.',
  },
];

const faqs = [
  {
    question: 'Is New York always five hours behind London?',
    answer:
      'Most of the year the numeric offset between New York and London is 5 hours (NY = UTC−5 standard / UTC−4 daylight; London = UTC+0 standard / UTC+1 daylight). Offsets can temporarily change during the few weeks when DST switches do not align exactly — check Info for current status.',
  },
  {
    question: 'How do I paste times into calendar invites?',
    answer:
      'Use Copy on any destination card to copy an exact formatted date + time string (e.g., “08:30 ET / 13:30 GMT”) and paste it into your invite so recipients see the correct local time.',
  },
  {
    question: 'Can I convert once and copy many formatted strings?',
    answer:
      'Yes—enter one origin time (Live or Custom) and copy formatted strings from each destination card to paste into messages, spreadsheets, or calendar invites.',
  },
];

const links = [
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  {
    name: 'Beijing → New York',
    path: `/${PATHS.timezoneFromBeijingToNewYork}`,
  },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation selectors.',
  'Applies tzdb offsets so Live clocks tick in real time and Custom mode converts a static origin time across destinations.',
  'Displays formatted local date/time, timezone label, and numeric offset; flags date-rollover when a converted time falls on another calendar day.',
  'Provides per-destination quick actions: Swap, Copy formatted time, Info (DST details), and Jet-Lag planner link.',
];

const ssData = {
  text: 'NY → London — convert ET↔GMT/BST and find market-friendly overlap windows. Copy exact local times fast.',
  hashtags: 'TimeZones,NYC,London',
  title: 'New York → London — Time Converter & Market Overlap',
};

const title = 'New York → London — Time Converter & Market Overlap';
const description =
  'Convert New York (ET) to London (GMT/BST). One→many live or custom conversions, suggested market & media overlap windows, and quick copy/swap/DST-info actions.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin → many-destination conversions (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Market & media overlap hints and date-rollover visibility',
      'Per-destination quick actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Pick a selector and targets',
        description:
          'Choose City, IANA or Abbreviation mode and select New York plus one or more destinations (e.g., London).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live to watch ticking clocks or set a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Choose formats & review',
        description:
          'Pick output formats and review converted destination cards; date-rollover flags mark different calendar days.',
      },
      {
        name: 'Step 4: Copy or view DST/jet-lag',
        description:
          'Copy formatted timestamps, swap origin/destination, open DST details, or go to the jet-lag planner for any destination.',
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
  head: 'New York → London Time Converter',
  subHead:
    'Convert New York (ET) to London (GMT/BST) and multiple destinations. Use City/IANA/Abbreviation selectors, toggle Live ticking clocks or a Custom origin time, select display formats, and copy exact formatted timestamps for meetings, publications, or broadcasts.',
  featuresHead: 'Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other New York and London Timezone Conversions',
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
    originTimeZone: 'New York@@America/New_York',
    destinationTimeZone: 'London@@Europe/London',
  },
});
