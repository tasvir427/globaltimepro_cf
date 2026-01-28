import {
  FaClock,
  FaSyncAlt,
  FaCopy,
  FaPlane,
  FaRegSun,
  FaRegMoon,
} from 'react-icons/fa';
import { TbWorld, TbClockHour4 } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live clock" />,
    title: 'Start with a Time',
    description:
      'Type a time or toggle “Live” to use the current clock in Mumbai (IST). You can enter city names, abbreviations (IST), or the IANA code (Asia/Kolkata).',
  },
  {
    icon: (
      <TbWorld className={styles.stepIcon} aria-label="Multi destinations" />
    ),
    title: 'Add Toronto as Destination',
    description:
      'Add Toronto (ET / America/Toronto) as a destination card — the converter shows the matching local time instantly, accounting for DST when applicable.',
  },
  {
    icon: <FaSyncAlt className={styles.stepIcon} aria-label="Formats" />,
    title: 'Pick a Format & Compare',
    description:
      'Switch between 12h, 24h, ISO or custom formats and glance at time segments (Morning, Work AM, Lunch, Evening) to find the best overlap.',
  },
  {
    icon: <FaPlane className={styles.stepIcon} aria-label="Plan travel" />,
    title: 'Plan or Share',
    description:
      'Use action buttons on each card — Swap, Copy, Jet Lag Planner, DST Checker — and share a link or schedule using the Undo/Redo/Reset toolbar.',
  },
];

const features = [
  {
    icon: (
      <TbClockHour4 className={styles.featureIcon} aria-label="IANA input" />
    ),
    title: 'IANA + City + Abbrev input',
    description:
      'Accepts Asia/Kolkata, “Mumbai”, or “IST” — whichever your user prefers. The converter maps inputs to canonical time zones for accuracy.',
  },
  {
    icon: <FaRegSun className={styles.featureIcon} aria-label="Live mode" />,
    title: 'Live and Custom Time Modes',
    description:
      'Compare the live clocks or freeze the origin to any custom time — handy for booking calls or planning classes across time zones.',
  },
  {
    icon: <FaRegMoon className={styles.featureIcon} aria-label="Segments" />,
    title: 'Time Segments & 13+ Formats',
    description:
      'See labelled segments (Sleep, Morning, Work AM, Lunch, Work PM, Evening, Night) and export times in 12h, 24h, ISO or other formats.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Action buttons" />,
    title: 'Action Buttons per Destination',
    description:
      'Swap, Copy, Jet Lag Planner, DST Checker (info) — plus Undo, Redo, Reset and Share Link for fast scheduling workflows.',
  },
];

const tips = [
  {
    title: 'Remember DST shifts',
    description:
      'Toronto observes DST; Mumbai does not. The time difference can be either ~9.5 hours or ~10.5 hours depending on Toronto’s DST status — your tool shows the precise offset.',
  },
  {
    title: 'Best meeting windows',
    description:
      'For live meetings, aim for late mornings in Toronto (9–11 AM ET) which land in Mumbai evenings (7:30–9:30 PM IST), or pick early Toronto evenings for Mumbai mornings.',
  },
  {
    title: 'Students & recruiters',
    description:
      'International students and recruiters often need repeated scheduling — use saved links and the share feature to avoid time confusion across semesters or interview rounds.',
  },
  {
    title: 'Jet lag planning',
    description:
      'Use the Jet Lag Planner action to view gradual schedules for adjustment when traveling from Mumbai to Toronto (or returning).',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Mumbai and Toronto?',
    answer:
      'Mumbai (Asia/Kolkata, UTC+5:30) is ahead of Toronto (America/Toronto, ET). Because Toronto observes DST and Mumbai does not, the difference varies — typically 9.5 or 10.5 hours. The converter shows the exact offset for any date.',
  },
  {
    question: 'Can I enter “IST” or should I use Asia/Kolkata?',
    answer:
      'Both work. The tool accepts city names, common abbreviations (like IST), or IANA codes (Asia/Kolkata / America/Toronto) and resolves them to exact time zones.',
  },
  {
    question: 'Does the converter update for DST automatically?',
    answer:
      'Yes. DST rules from the IANA database are applied automatically, so results reflect local DST rules for historical and future dates.',
  },
  {
    question: 'How do I schedule recurring calls across these zones?',
    answer:
      'Create the meeting in one zone, copy the local time card for the other, and share the generated link. For recurring events, pick a local window that’s consistent across DST changes or add calendar notes about DST transitions.',
  },
];

const links = [
  { name: 'Zurich → New York', path: `/${PATHS.timezoneFromZurichToNewYork}` },
  {
    name: 'Istanbul → New York',
    path: `/${PATHS.timezoneFromIstanbulToNewYork}`,
  },
  {
    name: 'Bangkok → New York',
    path: `/${PATHS.timezoneFromBangkokToNewYork}`,
  },
  { name: 'Manila → New York', path: `/${PATHS.timezoneFromManilaToNewYork}` },
  { name: 'Doha → Singapore', path: `/${PATHS.timezoneFromDohaToSingapore}` },
];

const howItWorks = [
  'Resolves inputs (city, abbreviation, or IANA code) to canonical IANA time zones: Asia/Kolkata → America/Toronto.',
  'Applies the IANA tz database rules (including DST) to compute offsets for the selected date/time.',
  'Formats outputs in the selected display style (12h, 24h, ISO, or custom) and tags times with segments (e.g., Morning, Work PM).',
  'Each destination card includes quick actions (Swap, Copy, Jet Lag Planner, DST Info) and common toolbar commands (Undo/Redo/Reset/Share).',
];

const ssData = {
  text: 'Convert Mumbai (IST) → Toronto (ET) instantly. Live clocks, DST-aware offsets, and schedule-ready formats.',
  hashtags: 'TimeZones,MumbaiToronto,Scheduling,DST',
  title: 'Mumbai → Toronto time — quick converter',
};

const title = 'Mumbai (IST) → Toronto (ET) Time Converter';
const description =
  'Convert time between Mumbai (IST) and Toronto (ET). Live clocks, DST-aware offsets, scheduling tips and jet-lag planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'Inputs via city, abbreviation, or IANA code',
      'DST-aware conversions',
      'Time segments and multiple output formats',
      'Action buttons: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Choose origin time',
        description:
          'Enter a time or toggle Live to use Mumbai’s current clock.',
      },
      {
        name: 'Add Toronto destination',
        description:
          'Add America/Toronto to view the matched local time and offset.',
      },
      {
        name: 'Use actions & share',
        description:
          'Copy times, check DST, plan jet lag, or share a deep link to preserve the exact schedule.',
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
  head: 'Mumbai to Toronto Time',
  subHead:
    'Instantly convert times between Mumbai (IST) and Toronto (ET). Live clocks, DST checks, and scheduling tools designed for diasporas, students, and remote teams.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Smart scheduling tips',
  faqsHead: 'Common questions',
  linksHead: 'Intercontinental Business Routes',
  howItWorksHead: 'How it works',
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
    destinationTimeZone: 'Toronto@@America/Toronto',
  },
});
