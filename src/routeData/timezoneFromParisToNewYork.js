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
    title: 'Choose selector mode & targets',
    description:
      'Pick City, IANA, or Abbreviation mode. Select Paris as origin and add one or more destinations such as New York and other US cities.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live vs custom" />,
    title: 'Live clocks or a custom origin time',
    description:
      'Toggle Live to watch ticking destination clocks, or enter a custom origin time (past or future) to convert simultaneously for many destinations.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Choose formats" />
    ),
    title: 'Select display formats',
    description:
      'Choose one or more date/time formats (24h, 12h, ISO, full date, or custom) so the copied strings fit your calendar or messaging style.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Quick actions" />,
    title: 'Use per-destination quick actions',
    description:
      'For each destination: Swap origin/destination, Copy the formatted time string, open DST Info, or jump to the Jet-Lag planner for that timezone.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One origin → many destinations',
    description:
      'Convert a single Paris time to multiple US destinations in one view — ideal for creating precise multi-recipient invites.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Overlap hints"
      />
    ),
    title: 'Transatlantic overlap hints',
    description:
      'Get suggested overlap windows based on typical business hours to help you pick times that respect both Paris and New York workdays.',
  },
];

const tips = [
  {
    title: 'Typical workable window for calls',
    description:
      'A commonly useful overlap is New York 08:00–11:00 ET ↔ Paris 14:00–17:00 CET/CEST. Use this range for same-day meetings that avoid after-hours for both sides.',
  },
  {
    title: 'Webinars & announcements',
    description:
      'If you need live participation across both regions, consider late-morning Paris slots (local) which fall in early morning New York — these capture both European midday and US early-bird attendees.',
  },
  {
    title: 'Date handling — show both dates',
    description:
      'Because Paris is ahead, converted times can fall on the next calendar day in New York. Paste both local date + time (e.g., “Mon 14:00 CEST / Mon 08:00 ET”) to avoid confusion.',
  },
  {
    title: 'DST transition note (brief)',
    description:
      'Paris and New York observe DST but on slightly different schedules at times of year — during those brief switch windows the numeric offset can vary by an hour. Use the Info action to confirm current DST status for any destination.',
  },
];

const faqs = [
  {
    question: 'Is Paris always six hours ahead of New York?',
    answer:
      'For most of the year Paris is 6 hours ahead of New York (Paris UTC+1/UTC+2 vs New York UTC−5/UTC−4). Short transition periods around DST changes can temporarily alter the offset by one hour — check Info for live status.',
  },
  {
    question:
      'How should I paste times into invites for transatlantic meetings?',
    answer:
      'Include both local date and time plus the timezone abbreviation (e.g., “Tue 14:00 CEST / Tue 08:00 ET”). Use the Copy action to paste correctly formatted strings and avoid manual errors.',
  },
  {
    question:
      'Can I convert a single Paris time into multiple US timezones at once?',
    answer:
      'Yes — select Paris as origin, add New York and other US destinations, then use Live or Custom mode to produce side-by-side converted times for all selected locations.',
  },
];

const links = [
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  {
    name: 'Beijing → New York',
    path: `/${PATHS.timezoneFromBeijingToNewYork}`,
  },
  { name: 'Mumbai → New York', path: `/${PATHS.timezoneFromMumbaiToNewYork}` },
  { name: 'Paris → Dubai', path: `/${PATHS.timezoneFromParisToDubai}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation modes.',
  'Applies tzdb offsets so Live clocks tick in real time and Custom mode converts a static origin time across destinations.',
  'Displays formatted local date/time, timezone labels, numeric offsets, and a human-friendly slot indicator; flags date-rollover when applicable.',
  'Offers per-destination quick actions: Swap, Copy formatted time, Info (DST details), and Jet-Lag planner link.',
];

const ssData = {
  text: 'Paris → New York — quick one→many conversions and suggested overlap windows for transatlantic calls. Copy formatted times fast.',
  hashtags: 'TimeZones,Paris,NYC',
  title: 'Paris → New York — Transatlantic Time Converter',
};

const title = 'Paris → New York — Transatlantic Time Converter';
const description =
  'Convert Paris (CET/CEST) → New York (ET). One-to-many live/custom conversions, overlap windows for transatlantic calls, plus quick copy/swap and DST info.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin → many-destination conversions (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Suggested overlap windows and date-rollover visibility',
      'Per-destination quick actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Pick selector mode & targets',
        description:
          'Choose City, IANA, or Abbreviation mode and select Paris plus one or more destinations (e.g., New York).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live mode for ticking clocks or enter a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Select formats & view results',
        description:
          'Pick display formats and review converted destination cards with local date/time and slot indicators; date-rollover flags mark different calendar days.',
      },
      {
        name: 'Step 4: Copy or view DST/jet-lag',
        description:
          'Copy formatted timestamps, swap origin/destination, open DST details for any timezone, or open the jet-lag planner when needed.',
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
  head: 'Paris → New York Time Converter',
  subHead:
    'Convert Paris (CET/CEST) to New York (ET) and multiple destinations. Use City/IANA/Abbreviation selectors, toggle Live ticking clocks or a Custom origin time, select display formats, and copy exact formatted timestamps for clear scheduling.',
  featuresHead: 'Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Paris and New York Timezone Conversions',
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
    originTimeZone: 'Paris@@Europe/Paris',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
