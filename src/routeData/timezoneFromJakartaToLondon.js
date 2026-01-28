import {
  FaRegClock,
  FaExchangeAlt,
  FaShareAlt,
  FaRegMoon,
} from 'react-icons/fa';
import { TbWorld, TbRefresh, TbCopy } from 'react-icons/tb';
import { MdOutlineSchedule } from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaRegClock className={styles.stepIcon} aria-label="Enter time" />,
    title: 'Set the origin time',
    description:
      'Type a city name, 3-letter code, or IANA zone (e.g., Asia/Jakarta). The tool accepts live time or any custom time you choose.',
  },
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="Convert" />,
    title: 'See instant conversions',
    description:
      'One origin expands to multiple destinations. London appears with its current offset and alternative formats (12h, 24h, ISO…).',
  },
  {
    icon: (
      <MdOutlineSchedule
        className={styles.stepIcon}
        aria-label="Check DST & schedule"
      />
    ),
    title: 'Check DST & labels',
    description:
      'View DST notes for Europe/London, helpful time-segment labels (Morning, Work AM, Evening) and quick actions on each card.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share" />,
    title: 'Share or tweak',
    description:
      'Share a link, copy a time, swap origin/destination, or use the Jet Lag Planner to map schedules across travel days.',
  },
];

const features = [
  {
    icon: <TbWorld className={styles.featureIcon} aria-label="IANA input" />,
    title: 'Flexible input',
    description:
      'Enter a city (Jakarta), a short code, or the IANA zone (Asia/Jakarta). The converter recognizes synonyms and common abbreviations.',
  },
  {
    icon: (
      <TbRefresh className={styles.featureIcon} aria-label="Live vs custom" />
    ),
    title: 'Live & custom modes',
    description:
      'Switch between live clocks (real-time) and custom times for planning meetings, events, or travel itineraries.',
  },
  {
    icon: <TbCopy className={styles.featureIcon} aria-label="Copy & share" />,
    title: 'Action buttons per card',
    description:
      'Each destination card offers Swap, Copy, Jet Lag Planner, and a DST Checker — plus global Undo/Redo/Reset and Share Link controls.',
  },
  {
    icon: (
      <FaRegMoon className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Time segment labels',
    description:
      'Automatic segments like Sleep, Morning, Work AM, Lunch, Work PM, and Evening help you pick times that suit both Jakarta and London.',
  },
];

const tips = [
  {
    title: 'Remember DST in London',
    description:
      'London switches between GMT and BST. If you schedule recurring calls, prefer an IANA-based rule (Europe/London) so DST shifts are handled automatically.',
  },
  {
    title: 'Best overlap window',
    description:
      'For live meetings, late afternoon in Jakarta tends to match London morning — convenient for business calls without late nights.',
  },
  {
    title: 'Travel and jet lag',
    description:
      'Jakarta is UTC+7 and London is typically UTC+0 (or +1 during BST). For eastbound travel from London, plan sleep transitions gradually using the Jet Lag Planner.',
  },
  {
    title: 'Historical nugget',
    description:
      'Indonesia spans multiple time zones and never uses daylight saving. Britain adopted standard time earlier, and its seasonal clock changes still affect cross-border scheduling.',
  },
];

const faqs = [
  {
    question: 'What is the usual time difference between Jakarta and London?',
    answer:
      'Jakarta (Asia/Jakarta) is UTC+7. London uses Europe/London which is GMT in winter and BST (UTC+1) in summer — so the offset is typically +7 or +6 hours depending on DST.',
  },
  {
    question: 'Will the converter handle recurring events across DST?',
    answer:
      'Yes. Use the IANA zone (Europe/London) when creating recurring times so DST transitions are applied automatically by the tool.',
  },
  {
    question: 'Can I enter an IANA code directly?',
    answer:
      'Absolutely — the tool accepts city names, abbreviations, and full IANA identifiers like Asia/Jakarta and Europe/London.',
  },
  {
    question: 'How accurate are live clocks?',
    answer:
      'Live mode syncs to a precise time source and displays real-time clocks for each destination; custom times are calculated deterministically from the chosen origin instant.',
  },
  {
    question: 'Does Jakarta observe daylight saving?',
    answer:
      'No — Indonesia does not use DST. Only the London side observes seasonal changes, so most adjustments come from Europe/London shifts.',
  },
];

const links = [
  {
    name: 'Los Angeles → London',
    path: `/${PATHS.timezoneFromLosAngelesToLondon}`,
  },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
];

const howItWorks = [
  'Input parsed as city name, abbreviation, or IANA zone (e.g., "Jakarta", "JKT", or "Asia/Jakarta").',
  'Origin instant converted to UTC internally, then applied to destination IANA zone (Europe/London) to compute local time and offsets.',
  'DST is evaluated using the destination zone’s rules (Europe/London), so displayed times reflect seasonal changes automatically.',
  'Multiple output formats (12h, 24h, ISO, custom) and human-friendly segment labels are generated from the same underlying instant.',
];

const ssData = {
  text: 'Jakarta ↔ London made simple — live clocks, DST checks, and scheduling tips.',
  hashtags: 'TimeZones,Jakarta,London,MeetingPlanner',
  title: 'Jakarta to London — quick time converter',
};

const title = 'Jakarta (WIB) → London (GMT/BST) Time Converter';
const description =
  'Convert time between Jakarta (Asia/Jakarta) and London (Europe/London). Live clocks, DST checks, scheduling tips, and shareable links.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'Input by city, abbreviation, or IANA code',
      'DST-aware conversions using Europe/London and Asia/Jakarta',
      'Shareable links and per-card action buttons',
    ],
    steps: [
      {
        name: 'Choose origin',
        description:
          'Enter Jakarta (or Asia/Jakarta) and pick live or custom time.',
      },
      {
        name: 'Convert',
        description:
          'See London time, DST notes, and time segment labels instantly.',
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
  head: 'Jakarta → London time converter',
  subHead:
    'Instantly compare Asia/Jakarta with Europe/London — live clocks, DST notes, and practical scheduling guidance.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Smart tips for scheduling',
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
    originTimeZone: 'Jakarta@@Asia/Jakarta',
    destinationTimeZone: 'London@@Europe/London',
  },
});
