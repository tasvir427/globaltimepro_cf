import {
  FaClock,
  FaExchangeAlt,
  FaRegCopy,
  FaPlaneDeparture,
  FaInfoCircle,
  FaUndo,
} from 'react-icons/fa';
import { TbWorld, TbSun } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaClock className={styles.stepIcon} aria-label="pick-origin-time" />,
    title: 'Enter Nairobi as origin',
    description:
      'Type "Nairobi", the abbreviation (EAT) or the IANA code — the converter normalizes free-text inputs into Africa/Nairobi to guarantee precise math.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="add-destination" />,
    title: 'Add Amsterdam (and extras)',
    description:
      'Add Europe/Amsterdam as your destination. You can append more cities to see how a single Nairobi time maps across multiple European or global hubs.',
  },
  {
    icon: (
      <FaExchangeAlt className={styles.stepIcon} aria-label="live-or-custom" />
    ),
    title: 'Choose Live or Custom mode',
    description:
      'Live shows real-time local clocks. Custom lets you freeze a date and time to test meetings around DST changes in Europe/Amsterdam.',
  },
  {
    icon: <FaRegCopy className={styles.stepIcon} aria-label="actions" />,
    title: 'Use action buttons to act fast',
    description:
      'Swap origin/destination, copy converted times, open the Jet Lag Planner for travel prep, or use the DST Checker on any destination card for clarity.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="live-clocks" />,
    title: 'Live & Custom clocks',
    description:
      'Toggle live clocks for instant checks or set a custom date to verify offsets when Europe/Amsterdam is on standard or daylight time.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="time-segments" />,
    title: 'Friendly time segments',
    description:
      'Human-readable labels (Morning, Work AM, Lunch, Evening, Night) appear with each result so you can pick times that actually work for people.',
  },
  {
    icon: (
      <FaPlaneDeparture className={styles.featureIcon} aria-label="jet-lag" />
    ),
    title: 'Quick travel guidance',
    description:
      'Small hour differences still affect sleep patterns. One-click Jet Lag Planner helps travellers shifting between East Africa and Western Europe.',
  },
  {
    icon: <FaInfoCircle className={styles.featureIcon} aria-label="dst-info" />,
    title: 'DST-aware calculations',
    description:
      'Africa/Nairobi is constant (EAT, UTC+3). Europe/Amsterdam follows CET/CEST rules — the tool applies the correct offset for any chosen date.',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="undo-redo" />,
    title: 'Undo, Redo, Reset & Share',
    description:
      'Experiment without fear: undo changes, redo experiments, reset defaults, or share a permalink showing the exact converted times and settings.',
  },
];

const tips = [
  {
    title: 'How the offset behaves',
    description:
      'Nairobi (EAT, UTC+3) is generally 1–2 hours ahead of Amsterdam depending on whether Amsterdam is on CET (UTC+1) or CEST (UTC+2). Use Custom mode to lock a date and avoid surprises.',
  },
  {
    title: 'Best meeting windows',
    description:
      'Late morning in Nairobi (10:00–12:00) maps comfortably to early/mid-morning in Amsterdam — a natural overlap for synchronous work that avoids very early or late hours.',
  },
  {
    title: 'Cultural scheduling cues',
    description:
      'Amsterdam’s workday often respects strict start times and short, punctual meetings. Nairobi teams may favor flexible blocks; pick times that allow calm handoffs rather than tight overlaps.',
  },
  {
    title: 'Small time difference, simple travel',
    description:
      'Even 1–2 hour differences mean minor jet-lag risk. For business trips, shift sleep windows slightly before departure and use the Jet Lag Planner for targeted advice.',
  },
  {
    title: 'A compact time-history note',
    description:
      'Timezones in both regions were standardized to support rail, shipping and telegraph networks. That infrastructure logic still shapes how we coordinate work across continents today.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Nairobi and Amsterdam?',
    answer:
      'Nairobi (EAT, UTC+3) is typically 1–2 hours ahead of Amsterdam. When Amsterdam observes daylight saving (CEST, UTC+2) the gap is 1 hour; during standard time (CET, UTC+1) the gap is 2 hours.',
  },
  {
    question: 'Does Nairobi change clocks for daylight saving?',
    answer:
      'No — Nairobi stays on East Africa Time (EAT, UTC+3) year-round. Only Europe/Amsterdam switches between CET and CEST, which changes the offset seasonally.',
  },
  {
    question: 'Which IANA identifiers give exact results?',
    answer:
      'Use Africa/Nairobi and Europe/Amsterdam in the converter for precise, DST-aware calculations.',
  },
  {
    question: 'Can I verify recurring meetings that cross DST?',
    answer:
      'Yes. Use Custom mode to test representative dates including DST transitions, then share the permalink so participants have a stable reference.',
  },
];

const links = [
  { name: 'Cairo → Istanbul', path: `/${PATHS.timezoneFromCairoToIstanbul}` },
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
  { name: 'Lagos → New York', path: `/${PATHS.timezoneFromLagosToNewYork}` },
];

const howItWorks = [
  'You enter an origin time as city, abbreviation, or IANA code; the tool normalizes inputs to canonical zones (Africa/Nairobi → Europe/Amsterdam).',
  'It computes each zone’s offset from UTC for the selected date and applies DST rules where applicable.',
  'Results are shown in multiple formats (12h, 24h, ISO, custom) with human-friendly labels and per-card actions for scheduling convenience.',
  'Action buttons (Swap, Copy, Jet Lag Planner, DST Checker) sit on each destination card so you can move from insight to action instantly.',
];

const ssData = {
  text: 'Nairobi ↔ Amsterdam — check offsets, pick meeting windows, and share exact times between East Africa and Western Europe.',
  hashtags: 'Nairobi,Amsterdam,TimeConversion,Scheduling',
  title: 'Nairobi ↔ Amsterdam Time Converter',
};

const title = 'Nairobi (EAT) → Amsterdam (CET/CEST) Time';
const description =
  'Convert times between Nairobi and Amsterdam — 1–2 hour difference depending on DST. Plan meetings, travel, and share exact times.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'DST-aware conversion for Europe/Amsterdam',
      'Support for city names, abbreviations and IANA codes',
      'Human-friendly time segment labels',
      'Per-card actions: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Select origin',
        description:
          'Enter Nairobi by city, abbreviation, or IANA identifier for precise origin time.',
      },
      {
        name: 'Add destination',
        description:
          'Add Amsterdam (Europe/Amsterdam) and any other cities you need to compare.',
      },
      {
        name: 'Verify date',
        description:
          'Use Live clocks or pick a Custom date to confirm offsets during DST transitions.',
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
  head: 'Nairobi ↔ Amsterdam — clear, DST-aware time conversion',
  subHead:
    'Plan meetings and trips between East Africa and Western Europe using live clocks or custom dates for DST-aware accuracy.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Practical tips & compact context',
  faqsHead: 'Frequently asked',
  linksHead: 'Africa & Middle East Connections',
  howItWorksHead: 'How conversions are calculated',
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
    originTimeZone: 'Nairobi@@Africa/Nairobi',
    destinationTimeZone: 'Amsterdam@@Europe/Amsterdam',
  },
});
