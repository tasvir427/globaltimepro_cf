import {
  FaRegClock,
  FaExchangeAlt,
  FaShareAlt,
  FaRegSun,
} from 'react-icons/fa';
import { TbWorld, TbCopy, TbRefresh } from 'react-icons/tb';
import { MdOutlineSchedule } from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaRegClock className={styles.stepIcon} aria-label="Pick origin time" />
    ),
    title: 'Enter origin quickly',
    description:
      'Type a city name, three-letter code, or the IANA zone (e.g., "Los Angeles", "LAX", or "America/Los_Angeles"). Choose Live or Custom time.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Instant conversion"
      />
    ),
    title: 'Convert to London instantly',
    description:
      'One origin expands to many destinations. London appears with its local time, offset, and selectable formats (12h, 24h, ISO, custom).',
  },
  {
    icon: (
      <MdOutlineSchedule
        className={styles.stepIcon}
        aria-label="DST & scheduling"
      />
    ),
    title: 'Check DST and good windows',
    description:
      'See DST notes for Europe/London, human-friendly time segments (Morning, Work, Evening), and per-card actions to copy, swap, or plan.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share & act" />,
    title: 'Share or schedule',
    description:
      'Create a shareable link, copy formatted times, or open the Jet Lag Planner — all from the destination card or global toolbar.',
  },
];

const features = [
  {
    icon: <TbWorld className={styles.featureIcon} aria-label="IANA input" />,
    title: 'Flexible input methods',
    description:
      'Accepts city names, airport codes, and IANA identifiers (America/Los_Angeles, Europe/London) so you can type what feels natural.',
  },
  {
    icon: (
      <TbRefresh className={styles.featureIcon} aria-label="Live and custom" />
    ),
    title: 'Live & custom clocks',
    description:
      'Switch between real-time clocks for now and custom instants for planning future meetings or travel itineraries.',
  },
  {
    icon: (
      <TbCopy className={styles.featureIcon} aria-label="Per-card actions" />
    ),
    title: 'Per-card action buttons',
    description:
      'Each destination card offers Swap, Copy, Jet Lag Planner, and DST Checker. Global Undo, Redo, Reset, and Share Link are available too.',
  },
  {
    icon: (
      <FaRegSun className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Human-friendly time segments',
    description:
      'Automatic labels like Sleep, Morning, Work AM, Lunch, Work PM, Evening, Night help pick times that respect both locations.',
  },
];

const tips = [
  {
    title: 'Typical offset',
    description:
      'Los Angeles (America/Los_Angeles) is usually 8 hours behind London (Europe/London). During brief DST transition windows the gap can be 7 hours—use IANA zones to avoid surprises.',
  },
  {
    title: 'Best meeting windows',
    description:
      'Late morning in Los Angeles typically matches early evening in London — good for team calls without very late or very early hours.',
  },
  {
    title: 'Recurring schedules',
    description:
      'When scheduling repeating events, pick IANA zones (America/Los_Angeles and Europe/London) so DST transitions are handled automatically.',
  },
  {
    title: 'Travel planning tip',
    description:
      'If you’re flying eastbound, gradually advance your sleep by 1–2 hours in the days before travel; use the Jet Lag Planner to visualize shifts across the trip.',
  },
];

const faqs = [
  {
    question: 'How many hours is Los Angeles behind London?',
    answer:
      'Most of the year London is 8 hours ahead of Los Angeles. During occasional DST transition periods the difference can be 7 hours — the tool uses IANA rules so these cases are handled automatically.',
  },
  {
    question: 'Will recurring meetings shift when clocks change?',
    answer:
      'Yes. Scheduling with IANA zones (America/Los_Angeles / Europe/London) ensures recurring events shift according to each zone’s DST rules.',
  },
  {
    question: 'Can I paste an IANA zone directly?',
    answer:
      'Yes — the converter parses city names, common abbreviations, and full IANA identifiers like America/Los_Angeles and Europe/London.',
  },
  {
    question: 'Does live mode update in real time?',
    answer:
      'Live mode syncs with an authoritative time source and updates destination clocks in real time; custom times are computed deterministically from the chosen instant.',
  },
  {
    question: 'Are there formats I can copy?',
    answer:
      'You can copy times in 12-hour, 24-hour, ISO, or custom formats — handy for calendar invites and messages.',
  },
];

const links = [
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Jakarta → London', path: `/${PATHS.timezoneFromJakartaToLondon}` },
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
];

const howItWorks = [
  'Parse user input (city name, code, or IANA zone) and normalize to an origin IANA identifier (America/Los_Angeles).',
  'Convert the chosen instant to UTC internally, then apply Europe/London rules to compute the destination local time and offset.',
  'Evaluate DST from the destination zone so displayed times reflect seasonal changes and transition edge cases.',
  'Render multiple output formats and friendly segment labels from the same underlying instant for consistency across the UI.',
];

const ssData = {
  text: 'Los Angeles ↔ London — fast, DST-aware conversions with live clocks, share links, and scheduling help.',
  hashtags: 'TimeZones,LosAngeles,London,Scheduling',
  title: 'Los Angeles to London — quick time converter',
};

const title = 'Los Angeles (PST/PDT) → London (GMT/BST) Time Converter';
const description =
  'Convert time between Los Angeles (America/Los_Angeles) and London (Europe/London). Live clocks, DST checks, share links, and scheduling tips.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'Input by city, abbreviation, or IANA code',
      'DST-aware conversions using America/Los_Angeles and Europe/London',
      'Shareable links and per-card action buttons',
    ],
    steps: [
      {
        name: 'Enter origin',
        description:
          'Type Los Angeles (or America/Los_Angeles) and choose Live or Custom time.',
      },
      {
        name: 'Convert',
        description:
          'See London time instantly with offset, DST notes, and human-friendly segments.',
      },
      {
        name: 'Share or schedule',
        description:
          'Copy formatted times, share links, or plan travel with the Jet Lag Planner.',
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
  head: 'Los Angeles → London time converter',
  subHead:
    'Compare America/Los_Angeles with Europe/London instantly — live clocks, DST notes, and practical scheduling guidance.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical scheduling tips',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Major City to London Routes',
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
    originTimeZone: 'Los Angeles@@America/Los_Angeles',
    destinationTimeZone: 'London@@Europe/London',
  },
});
