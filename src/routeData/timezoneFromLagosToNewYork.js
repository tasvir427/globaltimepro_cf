import {
  FaGlobe,
  FaRegClock,
  FaExchangeAlt,
  FaCopy,
  FaPlaneDeparture,
} from 'react-icons/fa';
import { TbClock, TbCalendarTime, TbRefresh } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Pick cities" />,
    title: 'Choose Lagos as origin',
    description:
      'Type "Lagos", "LOS", or the IANA code "Africa/Lagos" into the origin field — the tool accepts city names, abbreviations, or IANA codes.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Add New York" />,
    title: 'Add New York as a destination',
    description:
      'Add "New York", "NYC", or "America/New_York" to list it as a destination. You can convert one origin to many destinations at once.',
  },
  {
    icon: (
      <FaRegClock className={styles.stepIcon} aria-label="Live or custom" />
    ),
    title: 'Toggle Live or Custom time',
    description:
      'Use Live mode to watch real-time clocks or switch to Custom mode to test future meeting times and time-shifts.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Use action buttons"
      />
    ),
    title: 'Use the action buttons',
    description:
      'Swap origin/destination, copy a converted time, open the Jet Lag Planner, or run a DST check per destination card.',
  },
  {
    icon: (
      <TbCalendarTime
        className={styles.stepIcon}
        aria-label="Share & schedule"
      />
    ),
    title: 'Share or pin a schedule',
    description:
      'Save a share link, export your selections, or use the time segment labels (Morning, Work, Evening) to pick a meeting slot.',
  },
];

const features = [
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Live clocks" />
    ),
    title: 'Live clocks & Custom time',
    description:
      'Watch Lagos and New York in real time or set any custom date/time to preview how the offset changes with DST.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Copy times" />,
    title: 'Copy & share quick',
    description:
      'Copy a destination’s converted time with one click, or create a shareable link that preserves your exact selection.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.featureIcon}
        aria-label="Jet lag planner"
      />
    ),
    title: 'Jet Lag Planner & DST Checker',
    description:
      'Estimate local wake windows for travellers and check DST differences — especially helpful because Lagos does not observe DST.',
  },
  {
    icon: (
      <FaExchangeAlt className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One origin → many destinations',
    description:
      'Convert from Lagos to multiple cities in the same view — ideal for diaspora coordination or global team stand-ups.',
  },
  {
    icon: <TbRefresh className={styles.featureIcon} aria-label="Undo/Redo" />,
    title: 'Undo, Redo, Reset',
    description:
      'Experiment freely — undo mistakes, redo steps, or reset the board back to the default Lagos → New York setup.',
  },
];

const tips = [
  {
    title: 'Typical offset to expect',
    description:
      'New York is typically 5–6 hours behind Lagos: when New York is on Eastern Standard Time it’s 6 hours behind; during Eastern Daylight Time it is 5 hours behind.',
  },
  {
    title: 'Best window for meetings',
    description:
      'For live collaboration, try late morning in Lagos (10:00–12:00) which maps to early morning in New York (05:00–07:00) during DST-sensitive months — or pick early Lagos evening for overlap with New York morning.',
  },
  {
    title: 'Travel & jet lag hint',
    description:
      'If flying from Lagos to New York, shift sleep earlier by an hour a few nights before travel to ease adaptation to the westward time change.',
  },
  {
    title: 'Historical note',
    description:
      'Local time in many West African cities was standardised in the colonial era; today Nigeria uses West Africa Time (WAT, UTC+1) while New York follows Eastern Time (US/Eastern).',
  },
];

const faqs = [
  {
    question: 'Does Lagos observe daylight saving time (DST)?',
    answer:
      'No — Lagos (Africa/Lagos, WAT) does not observe DST. New York (America/New_York) does, so the Lagos ↔ New York offset changes when New York moves between EST and EDT.',
  },
  {
    question:
      'Why does the time difference sometimes look like 5 hours and other times 6?',
    answer:
      'Because New York shifts to Daylight Saving Time while Lagos does not. During US daylight time the gap is 5 hours; otherwise it’s 6 hours.',
  },
  {
    question: 'Can I schedule recurring meetings across Lagos and New York?',
    answer:
      'Yes. Use Custom mode to pick a recurring slot and then share the link. The tool will preserve the original time and show future DST-adjusted equivalents.',
  },
  {
    question: 'Are IANA codes supported?',
    answer:
      'Absolutely — you can enter Africa/Lagos or America/New_York directly as input. The app uses IANA zones internally for reliable conversions.',
  },
];

const links = [
  { name: 'Cairo → Istanbul', path: `/${PATHS.timezoneFromCairoToIstanbul}` },
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  {
    name: 'Nairobi → Amsterdam',
    path: `/${PATHS.timezoneFromNairobiToAmsterdam}`,
  },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
];

const howItWorks = [
  'Input recognized names (Lagos, New York), abbreviations (LOS, NYC), or IANA zones (Africa/Lagos, America/New_York).',
  'The converter computes UTC offsets and applies DST rules from the America/New_York zone while Africa/Lagos remains at UTC+1 year-round.',
  'You can view results in multiple formats (12h, 24h, ISO, or custom) and test future dates using Custom mode.',
  'Destination cards show time segment labels (Sleep, Morning, Work AM, Lunch, Work PM, Evening, Night) and action buttons (Swap, Copy, Jet Lag Planner, DST Checker).',
];

const ssData = {
  text: 'Planning a call between Lagos and New York? Check live times, DST, and pick the best overlap.',
  hashtags: 'LagosTime,NYCTime,TimeConversion',
  title: 'Lagos → New York time — quick convert & schedule',
};

const title = 'Lagos (WAT) → New York (ET) — Time Converter';
const description =
  'Convert Lagos (Africa/Lagos, WAT) to New York (America/New_York). Live clocks, DST checks, and scheduling tips for the 5–6 hour gap.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'Input by city, abbreviation, or IANA code',
      'One origin to many destinations',
      'DST-aware conversions using IANA zones',
    ],
    steps: [
      {
        name: 'Select origin and destination',
        description:
          'Enter Africa/Lagos as origin and America/New_York as destination (or their city names/abbreviations).',
      },
      {
        name: 'Choose Live or Custom',
        description:
          'Live shows real-time clocks; Custom lets you test specific dates and future schedules.',
      },
      {
        name: 'Share or act',
        description:
          'Copy times, run a DST check, plan jet lag, or share a link with collaborators.',
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
  head: 'Lagos → New York time converter',
  subHead:
    'Instantly convert time between Lagos (WAT) and New York (ET). Live clocks, DST checks, and scheduling guidance for global teams and travellers.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical tips & quick facts',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Africa & Middle East Connections',
  howItWorksHead: 'How the converter works',
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
    originTimeZone: 'Lagos@@Africa/Lagos',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
