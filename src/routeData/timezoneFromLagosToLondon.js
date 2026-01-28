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
    title: 'Set Lagos as the origin',
    description:
      'Type "Lagos", use the abbreviation (WAT) or the IANA code. The tool accepts flexible inputs and will normalize them to Africa/Lagos for exact calculations.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="add-destination" />,
    title: 'Add London (and extras if needed)',
    description:
      'Add one destination or a list of cities. London appears as Europe/London; add other hubs to see how a single Lagos time maps across multiple work zones.',
  },
  {
    icon: (
      <FaExchangeAlt className={styles.stepIcon} aria-label="live-or-custom" />
    ),
    title: 'Choose Live or set a Custom date',
    description:
      'Live mode shows real-time clocks. Use Custom mode to test dates around British Summer Time (BST) transitions when offsets change.',
  },
  {
    icon: <FaRegCopy className={styles.stepIcon} aria-label="use-actions" />,
    title: 'Act on results',
    description:
      'Swap origin/destination, copy a converted time, open the Jet Lag Planner for travel tips, or check DST with the Info (DST Checker) button on any destination card.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="live-clocks" />,
    title: 'Live & Custom modes',
    description:
      'Instant live clocks for Lagos and London, plus the option to freeze any date/time so you can verify meetings across DST transitions.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="time-segments" />,
    title: 'Human time segments',
    description:
      'Results include friendly labels (Morning, Work AM, Lunch, Evening, Night) so you can choose times that respect business hours and local routines.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.featureIcon}
        aria-label="jet-lag-planner"
      />
    ),
    title: 'Jet-lag & travel readiness',
    description:
      'Quick access to the Jet Lag Planner helps travelers crossing from West Africa to the UK adapt sleep windows and minimize disruption.',
  },
  {
    icon: <FaInfoCircle className={styles.featureIcon} aria-label="dst-info" />,
    title: 'Accurate DST handling',
    description:
      'Europe/London rules (GMT ↔ BST) are applied for chosen dates, while Africa/Lagos is treated as WAT (no DST). This avoids surprises when scheduling around spring/fall shifts.',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="undo-redo" />,
    title: 'Undo, Redo, Reset & Share',
    description:
      'Experiment freely, revert mistakes, reset to defaults, and share a permalink of your configuration with coworkers or invitees.',
  },
];

const tips = [
  {
    title: 'When Lagos and London match',
    description:
      'During British Summer Time (BST), London moves to UTC+1 — the same offset as Lagos (WAT). For part of the year clocks are identical; at other times Lagos is 1 hour ahead. Use Custom mode to confirm a specific date.',
  },
  {
    title: 'Best windows for meetings',
    description:
      'Aim for late morning Lagos (10:00–11:30 WAT) which maps to mid-morning London in winter and late morning in summer — a naturally convenient overlap for business calls.',
  },
  {
    title: 'Mind local rhythms',
    description:
      'Work patterns, commuting times and social norms differ: in Lagos early evening may be lively, while in London calendar-heavy late afternoons can be packed. Prefer mid-morning to mid-afternoon for cross-city collaboration.',
  },
  {
    title: 'Travel & jet-lag reality check',
    description:
      'Although Lagos and London are close in hours, travel still requires pre-trip planning. Use the Jet Lag Planner to shift sleep times gradually if you have critical morning meetings after arrival.',
  },
  {
    title: 'A short time-history note',
    description:
      'Greenwich—home of the Prime Meridian—shaped global time standards. That legacy explains why London’s time policies can create the familiar “same or one-hour difference” pattern with cities on West Africa Time.',
  },
];

const faqs = [
  {
    question: 'Are Lagos and London ever in the same clock hour?',
    answer:
      'Yes. When the UK observes British Summer Time (BST, UTC+1), London shares the same clock hour as Lagos (WAT, UTC+1). Outside BST, London reverts to GMT (UTC+0) and Lagos is one hour ahead.',
  },
  {
    question: 'Which IANA time zones should I use for precise checks?',
    answer:
      'Use Africa/Lagos for Lagos and Europe/London for London to ensure exact, DST-aware conversions in the tool.',
  },
  {
    question: 'Does Lagos observe daylight saving time?',
    answer:
      'No — Lagos remains on West Africa Time (WAT, UTC+1) year-round. Only London’s DST (GMT↔BST) affects the offset between the two cities.',
  },
  {
    question: 'Can I create a shareable link for recurring meeting slots?',
    answer:
      'Yes — set the desired local time in Custom mode, verify across a few representative dates (including DST transitions), then share the permalink with attendees.',
  },
];

const links = [
  { name: 'Cairo → Istanbul', path: `/${PATHS.timezoneFromCairoToIstanbul}` },
  {
    name: 'Nairobi → Amsterdam',
    path: `/${PATHS.timezoneFromNairobiToAmsterdam}`,
  },
  { name: 'Nairobi → London', path: `/${PATHS.timezoneFromNairobiToLondon}` },
  { name: 'Lagos → New York', path: `/${PATHS.timezoneFromLagosToNewYork}` },
];

const howItWorks = [
  'The converter accepts city names, abbreviations or IANA identifiers and maps them to canonical timezones (Africa/Lagos → Europe/London).',
  'It calculates each zone’s offset from UTC for the chosen date and applies DST rules where applicable (Europe/London rules are included).',
  'The result is presented in multiple formats (12h, 24h, ISO, custom) with human-friendly time-segment labels and per-card action buttons.',
  'Actions such as Swap, Copy, Jet Lag Planner and DST Checker are available on each destination card to streamline scheduling and travel planning.',
];

const ssData = {
  text: 'Lagos ↔ London: check offsets, plan meetings, and share exact times with colleagues.',
  hashtags: 'Lagos,London,TimeConversion,Scheduling',
  title: 'Lagos ↔ London Time Converter',
};

const title = 'Lagos (WAT) → London (GMT/BST) Time';
const description =
  'Compare Lagos and London times — same hour in summer (BST), one-hour difference in winter. Plan calls and travel with confidence.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'DST-aware conversion for Europe/London',
      'Support for city name, abbreviation and IANA codes',
      'Human-friendly time segment labels',
      'Per-card actions: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Choose origin',
        description:
          'Enter Lagos by city name, abbreviation (WAT) or IANA code for precise origin time.',
      },
      {
        name: 'Add destination',
        description:
          'Select London (Europe/London) and any other comparisons you need.',
      },
      {
        name: 'Verify date',
        description:
          'Use Live clocks or pick a Custom date to check DST effects and get exact offsets.',
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
  head: 'Lagos ↔ London — thoughtful local time guidance',
  subHead:
    'Plan meetings and travel between Lagos and London with DST-aware accuracy and cultural scheduling context.',
  featuresHead: 'Why this converter is useful',
  tipsHead: 'Practical scheduling tips & context',
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
    originTimeZone: 'Lagos@@Africa/Lagos',
    destinationTimeZone: 'London@@Europe/London',
  },
});
