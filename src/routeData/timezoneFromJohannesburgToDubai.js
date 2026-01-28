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
      'Select City, IANA or Abbreviation mode. Pick Johannesburg as origin and one or more destinations (Dubai and others) to see side-by-side conversions.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Live clocks or a custom origin time',
    description:
      'Switch to Live mode for ticking destination clocks, or enter a fixed origin time (past or future) to generate converted times for all selected destinations.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Pick formats" />
    ),
    title: 'Pick output formats',
    description:
      'Choose one or more display formats (24h, 12h, ISO, full date, or a custom format) so copied strings match your calendar or workflow.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Quick actions" />,
    title: 'Use per-destination quick actions',
    description:
      'For each destination you can Swap origin/destination, Copy the formatted time, open DST Info, or go to the Jet-Lag planner for that timezone.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversion view',
    description:
      'Convert a single Johannesburg time into multiple destination cards at once for fast comparison across partners and suppliers.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Offset clarity"
      />
    ),
    title: 'Clear numeric offsets',
    description:
      'See the exact numeric offset (Johannesburg UTC+2 → Dubai UTC+4) shown per destination so you avoid manual math errors.',
  },
];

const tips = [
  {
    title: 'Typical business overlap',
    description:
      'Dubai is 2 hours ahead of Johannesburg (e.g., Joburg 09:00 → Dubai 11:00). A convenient overlap for same-day calls is Joburg 09:00–12:00 ↔ Dubai 11:00–14:00.',
  },
  {
    title: 'Late-afternoon calls (Joburg) for Dubai morning',
    description:
      'Scheduling Joburg late-afternoon slots (16:00–18:00) can catch Dubai late-evening (18:00–20:00) — useful for urgent handoffs where Dubai teams are still available.',
  },
  {
    title: 'Remittances & banking timing',
    description:
      'When coordinating payments, confirm cut-off times with local banks — use the converter to copy exact local timestamps you can paste in payment instructions.',
  },
  {
    title: 'Live vs Custom: recommended uses',
    description:
      'Use Live mode to monitor arrival times or ongoing operations across a list of destinations. Use Custom to prepare scheduled slots and copy formatted strings into messages or calendar invites.',
  },
];

const faqs = [
  {
    question: 'What is the exact offset between Johannesburg and Dubai?',
    answer:
      'Johannesburg is UTC+2 (SAST); Dubai is UTC+4 (GST). Dubai is two hours ahead of Johannesburg—this does not change seasonally as neither city uses DST.',
  },
  {
    question: 'Do I need to worry about DST for these cities?',
    answer:
      'No. South Africa and the UAE do not observe daylight saving time, so offsets remain stable year-round. Use the Info action if you add destinations that may use DST.',
  },
  {
    question: 'How should I paste converted times into instructions?',
    answer:
      'Copy both the local date and time from the destination card (use Copy) and paste into messages or paperwork—this prevents ambiguity for partners in different timezones.',
  },
];

const links = [
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'Paris → Dubai', path: `/${PATHS.timezoneFromParisToDubai}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation mode.',
  'Uses tzdb offsets so Live mode shows ticking clocks and Custom mode converts a static origin time across destinations.',
  'Displays formatted local date/time, a timezone label, and the numeric offset for each destination; flags date-rollover when a converted time lands on another calendar day.',
  'Per-destination quick actions: Swap origin/destination, Copy formatted time, Info (DST details), and Jet-Lag planner link.',
];

const ssData = {
  text: 'Joburg → Dubai — convert SAST→GST and find trade-friendly call windows. One-click copy.',
  hashtags: 'TimeZones,Joburg,Dubai',
  title: 'Johannesburg → Dubai — Trade & Call Times',
};

const title = 'Johannesburg → Dubai — Trade & Call Times';
const description =
  'Convert Johannesburg (SAST) to Dubai (GST). One→many live or custom conversions, suggested trade-friendly call windows, and quick copy/swap/DST-info actions.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin → many-destination conversions (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Clear numeric offsets and date-rollover visibility',
      'Per-destination quick actions: Swap, Copy, Info (DST), Jet-Lag',
    ],
    steps: [
      {
        name: 'Step 1: Choose selector mode & targets',
        description:
          'Pick City, IANA, or Abbreviation mode and select Johannesburg plus one or more destinations (e.g., Dubai).',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live mode for ticking destination clocks or enter a Custom origin time to convert across destinations.',
      },
      {
        name: 'Step 3: Select formats & view results',
        description:
          'Select display formats and review converted destination cards with numeric offsets and date-rollover flags.',
      },
      {
        name: 'Step 4: Copy or view DST/jet-lag',
        description:
          'Copy formatted timestamps, swap origin/destination, open DST info, or jump to the jet-lag planner for any timezone.',
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
  head: 'Johannesburg → Dubai Time Converter',
  subHead:
    'Convert Johannesburg (SAST) to Dubai (GST) and multiple destinations. Use City/IANA/Abbreviation selectors, toggle Live ticking clocks or set a Custom origin time, select display formats, and copy exact formatted timestamps for coordination.',
  featuresHead: 'Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Dubai Timezone Conversions',
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
    originTimeZone: 'Johannesburg@@Africa/Johannesburg',
    destinationTimeZone: 'Dubai@@Asia/Dubai',
  },
});
