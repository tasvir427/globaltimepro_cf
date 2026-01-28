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
    title: 'Select how to pick zones',
    description:
      'Choose City, IANA, or Abbreviation mode. Set São Paulo as origin and add London and any other destinations you need to compare.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or fixed" />,
    title: 'Watch live clocks or freeze a candidate time',
    description:
      'Use Live mode for ticking destination clocks (helpful when monitoring overlaps) or set a fixed São Paulo time to generate converted timestamps for many cities at once.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Select format" />
    ),
    title: 'Choose display formatting',
    description:
      'Pick the output format(s) you prefer (24h/12h/ISO/full date/custom) so copied strings match your scheduling workflow.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Use actions" />,
    title: 'Use per-card quick actions',
    description:
      'For every destination card: Swap origin/destination, Copy the formatted time string, open DST Info, or jump to the Jet-Lag planner for that timezone.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Batch conversions"
      />
    ),
    title: 'Batch one→many conversions',
    description:
      'Convert a single São Paulo time into a compact list of destination cards so you can scan multiple local times at once.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Overlap hints"
      />
    ),
    title: 'Overlap hints for Europe ↔ LATAM',
    description:
      'See suggested windows that balance São Paulo daytime with London business hours — useful when scheduling same-day transatlantic calls.',
  },
];

const tips = [
  {
    title: 'Typical overlap for calls',
    description:
      'A practical overlap often used is São Paulo 10:00–13:00 BRT ↔ London 14:00–17:00 GMT/BST (Paris/London windows differ slightly during DST). Use these ranges to schedule calls that avoid late evenings for either side.',
  },
  {
    title: 'Date awareness',
    description:
      'London can be several hours ahead or behind depending on DST — when San Paulo times fall near midnight, double-check the local date in both cities before pasting into invites.',
  },
  {
    title: 'Banking & clearance note (usage tip)',
    description:
      'When giving timestamps for payments or deadlines, copy the exact local date+time using the Copy action and paste the formatted string into instructions to avoid ambiguity across regions.',
  },
  {
    title: 'Live vs Custom guidance',
    description:
      'Live is great for real-time coordination; Custom is ideal for preparing candidate slots to paste into calendar invites or scheduling polls.',
  },
];

const faqs = [
  {
    question: 'What is the offset between São Paulo and London?',
    answer:
      'São Paulo typically uses Brasília Time (BRT, UTC−3) year-round; London is GMT (UTC+0) in winter and BST (UTC+1) in summer. That means the numeric offset can vary depending on whether London is on BST. (São Paulo currently does not observe DST.)',
  },
  {
    question: 'Does São Paulo observe Daylight Saving Time?',
    answer:
      'No — Brazil abolished daylight saving time and São Paulo remains on BRT year-round. Use the Info action to check DST for any destination you add.',
  },
  {
    question: 'When does London switch between GMT and BST?',
    answer:
      'British Summer Time (BST) starts and ends on defined Sundays (last Sunday in March → last Sunday in October), shifting the UK from GMT (UTC+0) to BST (UTC+1); check a destination’s Info for current status.',
  },
  {
    question: 'How should I paste times into invites?',
    answer:
      'Copy both local date and time from destination cards (use the Copy action) and paste the formatted string (e.g., “Mon 14:00 BRT / Mon 18:00 GMT”) into your invite to avoid confusion.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
];

const howItWorks = [
  'Accepts one origin and many destinations using City, IANA or Abbreviation selectors.',
  'Uses tzdb offsets so Live mode shows ticking destination clocks and Custom mode converts a static origin time across destinations.',
  'Displays local date/time, timezone labels and numeric offsets; flags date-rollovers where applicable.',
  'Per-destination quick actions: Swap, Copy formatted time, Info (DST details) and Jet-Lag planner link.',
];

const ssData = {
  text: 'São Paulo → London — convert BRT↔GMT/BST and find workable transatlantic windows. Copy formatted times fast.',
  hashtags: 'TimeZones,SaoPaulo,London',
  title: 'São Paulo → London — Time Converter for Transatlantic Scheduling',
};

const title =
  'São Paulo → London — Time Converter for Transatlantic Scheduling';
const description =
  'Convert São Paulo (BRT) → London (GMT/BST). One-to-many live/custom conversions, overlap tips for Europe-LATAM calls, plus quick copy/swap/DST info.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversion (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Suggested overlap hints and date-rollover visibility',
      'Per-destination actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Select mode & targets',
        description:
          'Choose City, IANA, or Abbreviation mode and select São Paulo plus one or more destinations (e.g., London).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live to watch ticking clocks or enter a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Choose formats & review',
        description:
          'Pick output formats and review converted destination cards; date-rollover flags mark different calendar days.',
      },
      {
        name: 'Step 4: Copy or view DST/jet-lag',
        description:
          'Copy formatted times, swap origin/destination, open DST details, or jump to the jet-lag planner as needed.',
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
  head: 'São Paulo → London Time Converter',
  subHead:
    'Convert São Paulo (BRT) to London (GMT/BST) and multiple destinations. Use City/IANA/Abbreviation selectors, toggle Live ticking clocks or a Custom origin time, select display formats, and copy exact formatted timestamps for clear cross-region scheduling.',
  featuresHead: 'Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other London Timezone Conversions',
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
    originTimeZone: 'Sao Paulo@@America/Sao_Paulo',
    destinationTimeZone: 'London@@Europe/London',
  },
});
