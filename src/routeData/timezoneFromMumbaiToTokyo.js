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
    title: 'Set Mumbai as the origin',
    description:
      'Type "Mumbai", use the abbreviation (IST) or the IANA code. The converter normalizes free-text to Asia/Kolkata for precise results.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="add-destination" />,
    title: 'Add Tokyo (and extras)',
    description:
      'Add Tokyo by name or Europe/Asia IANA identifier. You can add multiple destinations to compare Mumbai against other APAC hubs at once.',
  },
  {
    icon: (
      <FaExchangeAlt className={styles.stepIcon} aria-label="live-or-custom" />
    ),
    title: 'Choose Live or Custom time',
    description:
      'Live mode shows real-time clocks. Custom mode lets you freeze any date to verify schedules — handy when planning around non-hour offsets.',
  },
  {
    icon: <FaRegCopy className={styles.stepIcon} aria-label="use-actions" />,
    title: 'Act on a converted time',
    description:
      'Swap, copy, check DST (Info), open the Jet Lag Planner for travel, or share a permalink — all actions live on each destination card.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="live-clocks" />,
    title: 'Live & Custom clocks',
    description:
      'See live local times for Mumbai and Tokyo, or freeze a date/time to check exact offsets when scheduling across months.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="time-segments" />,
    title: 'Human-friendly time segments',
    description:
      'Each result includes labels like Morning, Work AM, Lunch, Evening, Night so you can judge meeting suitability at a glance.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.featureIcon}
        aria-label="jet-lag-planner"
      />
    ),
    title: 'Jet Lag Planner link',
    description:
      'Eastward travel from Mumbai to Tokyo shifts your clock ~3½ hours — open the Jet Lag Planner to build a gentle sleep adjustment plan.',
  },
  {
    icon: (
      <FaInfoCircle className={styles.featureIcon} aria-label="dst-checker" />
    ),
    title: 'DST-safe calculations',
    description:
      'Both Asia/Kolkata and Asia/Tokyo are non-DST zones. The converter uses IANA rules so results remain stable year-round.',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="undo" />,
    title: 'Undo, Reset & Share',
    description:
      'Try different times without worry — undo mistakes, reset to defaults or share a permalink with collaborators instantly.',
  },
];

const tips = [
  {
    title: 'Watch the half-hour offset',
    description:
      'Tokyo is 3 hours 30 minutes ahead of Mumbai (Asia/Kolkata → Asia/Tokyo). That half-hour makes whole-hour assumptions wrong — always verify with the tool.',
  },
  {
    title: 'Best meeting windows',
    description:
      'Aim for late morning Mumbai (10:00–12:00 IST) which maps to early–mid afternoon in Tokyo (13:30–15:30 JST) — a practical overlap for synchronous work.',
  },
  {
    title: 'Early Tokyo = very early Mumbai',
    description:
      'A 09:00 JST meeting equals 05:30 IST. Avoid scheduling Tokyo mornings if Mumbai participants prefer not to join before dawn.',
  },
  {
    title: 'Travel tip for eastward trips',
    description:
      'A 3½-hour eastward jump can affect sleep. Shift sleep/wake times by 1–2 hours in the days before departure and use the Jet Lag Planner for targeted advice.',
  },
  {
    title: 'Calendar invite sanity',
    description:
      'Because of the 30-minute offset, double-check calendar invites and time-zone tags so recipients in both cities see the correct local time.',
  },
];

const faqs = [
  {
    question: 'What is the exact time difference between Mumbai and Tokyo?',
    answer:
      'Tokyo (JST, UTC+9) is 3 hours 30 minutes ahead of Mumbai (IST, UTC+5:30). Both zones do not observe daylight saving, so the offset is stable year-round.',
  },
  {
    question: 'Which IANA zones guarantee precise conversions?',
    answer:
      'Use Asia/Kolkata for Mumbai and Asia/Tokyo for Tokyo to ensure accurate, DST-free calculations in the converter.',
  },
  {
    question: 'Can I schedule recurring meetings across this half-hour offset?',
    answer:
      'Yes. Use Custom mode to test representative dates and then share the permalink. Always include explicit local times in invites (e.g., 10:00 IST / 13:30 JST).',
  },
  {
    question: 'Will the tool handle multiple formats and labels?',
    answer:
      'Absolutely — choose from 12h, 24h, ISO or a custom format. Time-segment labels help you choose suitable slots without mental math.',
  },
];

const links = [
  { name: 'Seoul → Sydney', path: `/${PATHS.timezoneFromSeoulToSydney}` },
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Input a city name, common abbreviation, or IANA identifier; the tool normalizes inputs to canonical zones (Asia/Kolkata → Asia/Tokyo).',
  'It calculates each zone’s offset from UTC for the selected date and applies any DST rules (none apply here) to produce exact local times.',
  'Results are available in multiple formats and carry human-friendly labels; each destination card exposes actions like Swap, Copy, Jet Lag Planner and DST Checker.',
  'Per-card action buttons and permalink sharing let you move from insight to coordination instantly.',
];

const ssData = {
  text: 'Mumbai ↔ Tokyo — convert times with half-hour accuracy, plan meetings and share exact local times.',
  hashtags: 'Mumbai,Tokyo,TimeConversion,Scheduling',
  title: 'Mumbai ↔ Tokyo Time Converter',
};

const title = 'Mumbai (IST) → Tokyo (JST) Time';
const description =
  'Convert Mumbai to Tokyo time — Tokyo is 3h30m ahead of Mumbai. Live/custom modes, half-hour aware, and shareable links for scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'Support for city names, abbreviations and IANA codes',
      'Half-hour offset awareness (Asia/Kolkata → Asia/Tokyo)',
      'Human-friendly time segment labels',
      'Per-card actions: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Choose origin',
        description:
          'Enter Mumbai by city, abbreviation (IST) or IANA code for precise origin time.',
      },
      {
        name: 'Add destination',
        description:
          'Select Tokyo (Asia/Tokyo) and any other cities you need to compare.',
      },
      {
        name: 'Verify and share',
        description:
          'Use Live or pick a Custom date, then copy or share the permalink to lock in the chosen times.',
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
  head: 'Mumbai ↔ Tokyo — precise half-hour aware conversions',
  subHead:
    'Plan meetings, travel and shared schedules between Mumbai and Tokyo using live clocks or custom dates for exact results.',
  featuresHead: 'Why this converter matters for Mumbai ↔ Tokyo',
  tipsHead: 'Practical scheduling tips & travel notes',
  faqsHead: 'Frequently asked',
  linksHead: 'Asian Hubs to Global Destinations',
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
    originTimeZone: 'Mumbai@@Asia/Kolkata',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
