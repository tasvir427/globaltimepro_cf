import {
  FaRegClock,
  FaExchangeAlt,
  FaShareAlt,
  FaRegSun,
} from 'react-icons/fa';
import { TbWorld, TbCopy, TbHistory } from 'react-icons/tb';
import { MdOutlineSchedule } from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaRegClock className={styles.stepIcon} aria-label="Enter origin time" />
    ),
    title: 'Enter origin (fast)',
    description:
      'Type Manila, the IANA zone (Asia/Manila), or a short code. Choose Live for current clocks or switch to Custom time for planning.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert instantly"
      />
    ),
    title: 'Convert instantly',
    description:
      'One origin expands to destinations — New York displays local time, offset, and selectable output formats (12h, 24h, ISO, custom).',
  },
  {
    icon: (
      <MdOutlineSchedule className={styles.stepIcon} aria-label="DST checks" />
    ),
    title: 'Inspect DST & schedule',
    description:
      'See DST notes for America/New_York, time-segment labels to find good meeting slots, and quick actions on each destination card.',
  },
  {
    icon: (
      <FaShareAlt
        className={styles.stepIcon}
        aria-label="Share and use actions"
      />
    ),
    title: 'Act on results',
    description:
      'Copy times, swap origin/destination, create a shareable link, or kick off the Jet Lag Planner from any destination card.',
  },
];

const features = [
  {
    icon: <TbWorld className={styles.featureIcon} aria-label="IANA input" />,
    title: 'Multiple input styles',
    description:
      'Accepts city name, abbreviation, or full IANA zone (e.g., "Manila", "MNL", "Asia/Manila").',
  },
  {
    icon: <TbCopy className={styles.featureIcon} aria-label="Copy & share" />,
    title: 'Per-card actions',
    description:
      'Each destination card exposes Swap, Copy, Jet Lag Planner, and a DST info checker — plus global Undo/Redo/Reset controls.',
  },
  {
    icon: (
      <TbHistory className={styles.featureIcon} aria-label="Live vs custom" />
    ),
    title: 'Live and custom modes',
    description:
      'Toggle live clocks for real-time reference or pick a custom instant to plan meetings across the Manila–New York gap.',
  },
  {
    icon: (
      <FaRegSun className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Human-friendly labels',
    description:
      'Automatic segments like Morning, Work, Lunch, Evening, Night help you choose sensible times for both Manila and New York.',
  },
];

const tips = [
  {
    title: 'Mind the big gap',
    description:
      'Manila is UTC+8 and New York follows America/New_York (UTC−5 or −4 during DST). Typical overlap windows are tight — plan for early mornings or late evenings depending on direction.',
  },
  {
    title: 'Use IANA for recurring events',
    description:
      'Schedule recurring meetings with IANA zones (Asia/Manila / America/New_York) so DST transitions in New York are applied automatically.',
  },
  {
    title: 'Work-friendly window',
    description:
      'Late afternoon in Manila often pairs with New York morning — a practical slot for business calls that avoids very late or very early hours.',
  },
  {
    title: 'Quick cultural note',
    description:
      'The Philippines observes a single national standard time (Philippine Standard Time, UTC+8) and does not use daylight saving, while New York does — so most shifts come from the American side.',
  },
];

const faqs = [
  {
    question: 'How many hours apart are Manila and New York?',
    answer:
      'Manila (Asia/Manila) is UTC+8. New York (America/New_York) is typically UTC−5 (EST) or UTC−4 (EDT) during daylight saving — so the offset is usually +13 or +12 hours from New York to Manila, depending on DST.',
  },
  {
    question: 'Will my recurring meeting adjust when New York changes clocks?',
    answer:
      'Yes — when you schedule using the America/New_York IANA zone, the tool applies DST rules so recurring events shift correctly on DST transitions.',
  },
  {
    question: 'Can I paste an IANA code directly?',
    answer:
      'Yes. The tool parses city names, common abbreviations, and IANA identifiers like Asia/Manila and America/New_York.',
  },
  {
    question: 'Does the tool show multiple output formats?',
    answer:
      'It does. Choose from 12-hour, 24-hour, ISO, or a custom format to copy or share times in the layout you need.',
  },
  {
    question: 'Is the live clock accurate?',
    answer:
      'Live mode syncs to a precise time source and updates destination clocks in real time. Custom times are computed deterministically from the chosen instant.',
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
  { name: 'Doha → Singapore', path: `/${PATHS.timezoneFromDohaToSingapore}` },
];

const howItWorks = [
  'User input parsed as city name, abbreviation, or IANA zone (e.g., "Manila", "MNL", "Asia/Manila").',
  'Origin instant converted to UTC; destination zone (America/New_York) rules applied to compute local time and offset.',
  'DST rules are evaluated from the destination IANA zone so seasonal changes are reflected automatically.',
  'Multiple display formats and human-friendly time-segment labels are derived from the same underlying instant.',
];

const ssData = {
  text: 'Manila ↔ New York: fast, DST-aware time conversion with live clocks and shareable links.',
  hashtags: 'TimeZones,Manila,NewYork,Scheduling',
  title: 'Manila to New York — quick time converter',
};

const title = 'Manila (PHT) → New York (EST/EDT) Time Converter';
const description =
  'Convert time between Manila (Asia/Manila) and New York (America/New_York). Live clocks, DST-aware conversions, share links, and planning tips.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'Input by city, abbreviation, or IANA code',
      'DST-aware conversions using Asia/Manila and America/New_York',
      'Shareable links and per-card action buttons',
    ],
    steps: [
      {
        name: 'Choose origin',
        description:
          'Enter Manila (or Asia/Manila) and pick live or custom time.',
      },
      {
        name: 'Convert',
        description:
          'See New York time, DST notes, and time segment labels instantly.',
      },
      {
        name: 'Share or schedule',
        description:
          'Copy times, share a link, or plan travel with the Jet Lag Planner.',
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
  head: 'Manila → New York time converter',
  subHead:
    'Quickly compare Asia/Manila with America/New_York — live clocks, DST checks, and practical scheduling guidance.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Smart tips for cross-time scheduling',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Intercontinental Business Routes',
  howItWorksHead: 'How it works (technical)',
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
    originTimeZone: 'Manila@@Asia/Manila',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
