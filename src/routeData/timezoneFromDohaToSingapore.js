import {
  FaClock,
  FaGlobe,
  FaExchangeAlt,
  FaCopy,
  FaPlane,
} from 'react-icons/fa';
import { TbWorld, TbCalendarTime, TbRefresh } from 'react-icons/tb';
import { RiShareForwardLine } from 'react-icons/ri';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Choose Doha" />,
    title: 'Set Doha as origin',
    description:
      'Type "Doha", "DOH", or the IANA code "Asia/Qatar" into the origin field — the tool accepts names, airport abbreviations, or IANA zones.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add Singapore" />,
    title: 'Add Singapore as destination',
    description:
      'Add "Singapore", "SIN", or "Asia/Singapore". You can convert one origin to many destinations if you want to compare additional cities.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Switch Live ↔ Custom time',
    description:
      'Use Live for real-time clocks or Custom mode to test future meeting dates — useful when planning across fixed vs DST-observing zones.',
  },
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="Actions" />,
    title: 'Use action buttons',
    description:
      'Swap origin/destination, copy a converted time, run the DST Checker, or open the Jet Lag Planner directly from any destination card.',
  },
  {
    icon: <RiShareForwardLine className={styles.stepIcon} aria-label="Share" />,
    title: 'Share, export, or reset',
    description:
      'Generate a share link or copy times for calendar invites. Use Undo/Redo while experimenting, then Reset to return to the default route.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="Live clocks" />,
    title: 'Live clocks & Custom time',
    description:
      'Watch Doha and Singapore live, or enter a custom date/time to preview how offsets behave on any future day.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Formats" />
    ),
    title: '13+ display formats',
    description:
      'See times in 12h, 24h, ISO, or tailor a custom format — handy for calendar invites, automation, or developer use.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Copy" />,
    title: 'One-click copy & share links',
    description:
      'Copy converted times instantly or create a shareable link that preserves your exact selection and custom date/time.',
  },
  {
    icon: <FaPlane className={styles.featureIcon} aria-label="Jet lag" />,
    title: 'Jet Lag Planner & DST Checker',
    description:
      'Estimate best local windows for travel and confirm DST behavior per zone — especially useful because Qatar and Singapore have fixed offsets.',
  },
  {
    icon: <TbRefresh className={styles.featureIcon} aria-label="Undo redo" />,
    title: 'Undo, Redo, Reset',
    description:
      'Try different configurations confidently — undo errors, redo choices, or reset the board back to the Doha → Singapore defaults.',
  },
];

const tips = [
  {
    title: 'Know the gap',
    description:
      'Singapore is five hours ahead of Doha (Doha UTC+3 → Singapore UTC+8). That 5-hour offset is stable because both zones do not observe DST.',
  },
  {
    title: 'Good meeting windows',
    description:
      'For overlap, aim for late morning in Doha (10:00–12:00) which maps to mid-afternoon in Singapore (15:00–17:00) — comfortable for business hours in both cities.',
  },
  {
    title: 'Travel rhythm tip',
    description:
      'When flying east (Doha → Singapore), gradually advance sleep times by 30–60 minutes in the nights before departure to ease adaptation.',
  },
  {
    title: 'Quick historical note',
    description:
      'Local time in the Gulf and in Singapore was standardised to support trade and modern transport; today both use stable, region-based standard times.',
  },
];

const faqs = [
  {
    question: 'What is the IANA code for Doha and Singapore?',
    answer:
      'Doha uses Asia/Qatar and Singapore uses Asia/Singapore — entering these IANA identifiers yields authoritative DST/offset rules.',
  },
  {
    question: 'Do either Doha or Singapore observe daylight saving time?',
    answer:
      'No — both zones maintain fixed offsets year-round, so the 5-hour difference between them stays constant through the calendar.',
  },
  {
    question: 'Can I enter airport codes like DOH and SIN?',
    answer:
      'Yes. The tool accepts city names, common abbreviations (DOH, SIN), and IANA codes for accurate conversions.',
  },
  {
    question: 'How does the tool handle cross-date conversions?',
    answer:
      'When a conversion crosses midnight, destination cards clearly show the local date and time so you always know whether it’s the same day or the next.',
  },
];

const links = [
  { name: 'Zurich → New York', path: `/${PATHS.timezoneFromZurichToNewYork}` },
  { name: 'Mumbai → Toronto', path: `/${PATHS.timezoneFromMumbaiToToronto}` },
  {
    name: 'Istanbul → New York',
    path: `/${PATHS.timezoneFromIstanbulToNewYork}`,
  },
  {
    name: 'Bangkok → New York',
    path: `/${PATHS.timezoneFromBangkokToNewYork}`,
  },
  { name: 'Manila → New York', path: `/${PATHS.timezoneFromManilaToNewYork}` },
];

const howItWorks = [
  'Accepts city names, abbreviations, or IANA codes (Doha, DOH, Asia/Qatar; Singapore, SIN, Asia/Singapore).',
  'Computes UTC offsets using IANA zone rules and applies DST where applicable (neither Asia/Qatar nor Asia/Singapore observe DST).',
  'Displays results in 13+ formats and labels times with human-friendly segments (Morning, Work AM, Lunch, Evening, Night).',
  'Destination cards expose action buttons: Swap, Copy, Jet Lag Planner, DST Checker. Global controls include Undo, Redo, Reset, Share Link.',
];

const ssData = {
  text: 'Scheduling between Doha and Singapore? Convert instantly, check DST behavior, and pick the best overlap.',
  hashtags: 'DohaTime,SingaporeTime,TimeConverter',
  title: 'Doha → Singapore — quick time converter & scheduler',
};

const title = 'Doha (AST) → Singapore (SGT) — Time Converter';
const description =
  'Convert Doha (Asia/Qatar, AST) to Singapore (Asia/Singapore, SGT). Live clocks, share links, and tips for the stable 5-hour gap.';

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
      'DST-aware conversions using IANA zones (where applicable)',
    ],
    steps: [
      {
        name: 'Select origin & destination',
        description:
          'Enter Asia/Qatar as origin and Asia/Singapore as destination (or use city names/abbreviations).',
      },
      {
        name: 'Choose Live or Custom',
        description:
          'Live shows real-time clocks; Custom lets you test future dates and offsets.',
      },
      {
        name: 'Share or plan',
        description:
          'Copy times, create share links, run DST checks, or use the Jet Lag Planner to prepare travel windows.',
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
  head: 'Doha → Singapore time converter',
  subHead:
    'Instantly convert Doha (AST) to Singapore (SGT). Live clocks, stable offsets, and scheduling tips for teams and travellers.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical tips & quick facts',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Intercontinental Business Routes',
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
    originTimeZone: 'Doha@@Asia/Qatar',
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
