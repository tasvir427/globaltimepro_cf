import {
  FaExchangeAlt,
  FaClock,
  FaClipboard,
  FaPlane,
  FaInfoCircle,
} from 'react-icons/fa';
import { TbWorld, TbSun, TbCalendarTime } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="swap-times" />,
    title: 'Set origin and destination',
    description:
      'Enter "New York", "NYC", or "America/New_York" as the origin and add "Tokyo", "TYO", or "Asia/Tokyo" as the destination. The field accepts city names, IATA/abbrev forms and IANA identifiers.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="live-or-custom" />,
    title: 'Live mode or custom timestamps',
    description:
      'Flip Live to see real-time clocks or choose Custom to audition future meeting times. The tool applies each zone’s offset and DST rules automatically.',
  },
  {
    icon: (
      <TbCalendarTime
        className={styles.stepIcon}
        aria-label="format-and-share"
      />
    ),
    title: 'Format, check DST & share',
    description:
      'Pick one of 13+ formats (12h, 24h, ISO, custom), run the DST Checker on the New York card, then copy or share a link to lock the exact UTC-backed timestamps for invitees.',
  },
];

const features = [
  {
    icon: (
      <TbWorld className={styles.featureIcon} aria-label="multi-destination" />
    ),
    title: 'One origin → many destinations',
    description:
      'Start with New York and add Tokyo plus additional cities to compare multiple participant clocks in a single, scannable view.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="time-segments" />,
    title: 'Readable time segments',
    description:
      'Destination cards include intuitive segments (Morning, Work AM, Lunch, Evening, Night) so you can instantly spot practical meeting windows across the 13–14 hour gap.',
  },
  {
    icon: (
      <FaPlane className={styles.featureIcon} aria-label="jet-lag-planner" />
    ),
    title: 'Jet Lag Planner & travel hints',
    description:
      'Built-in planner recommends sleep and nap windows for eastbound and westbound travel, helping you pick arrival and in-flight sleep strategies for NY ↔ Tokyo routes.',
  },
  {
    icon: <FaClipboard className={styles.featureIcon} aria-label="copy" />,
    title: 'Action buttons on each card',
    description:
      'Swap, Copy, Jet Lag Planner and DST Checker are available per destination. Common controls include Undo, Redo, Reset and Share Link to preserve your configuration.',
  },
  {
    icon: <FaInfoCircle className={styles.featureIcon} aria-label="dst-info" />,
    title: 'DST-aware conversions',
    description:
      'The converter uses IANA timezone rules: America/New_York toggles between UTC−05:00 and UTC−04:00, while Asia/Tokyo stays at UTC+09:00 year-round — the tool highlights any date-based shifts.',
  },
];

const tips = [
  {
    title: 'Remember the numeric gap',
    description:
      'Tokyo is typically 14 hours ahead of New York (UTC+9 vs UTC−5). When New York is on daylight saving time the gap narrows to 13 hours — always confirm with the DST Checker for recurring meetings.',
  },
  {
    title: 'Best windows for live calls',
    description:
      'Target New York early morning (07:00–09:00 ET) which maps to Tokyo evening (20:00–22:00 JST during standard time). This keeps calls within conventional waking hours for both sides.',
  },
  {
    title: 'Avoid date confusion',
    description:
      'Because Tokyo is ahead, many Tokyo-side evenings map to the previous day (or earlier same day) in New York. The converter shows absolute UTC timestamps to remove ambiguity when sharing invites.',
  },
  {
    title: 'Scheduling recurring meetings',
    description:
      'If you schedule by local New York time, DST transitions will shift the Tokyo local time by an hour. Use the Share Link with UTC timestamps if you want a recurrence that doesn’t move relative to UTC.',
  },
  {
    title: 'Small historical aside',
    description:
      'Japan standardized on JST long ago and has not used DST since the early 1950s — that stability makes long-term planning easier on the Tokyo side.',
  },
];

const faqs = [
  {
    question: 'How many hours ahead is Tokyo compared to New York?',
    answer:
      'Tokyo is 14 hours ahead of New York when New York is on standard time (EST, UTC−05:00), and 13 hours ahead when New York observes daylight saving time (EDT, UTC−04:00). Use the DST Checker to confirm for specific dates.',
  },
  {
    question: 'Does Tokyo ever observe daylight saving time?',
    answer:
      'No — Japan (Asia/Tokyo) remains on Japan Standard Time (UTC+09:00) year-round and does not use daylight saving time.',
  },
  {
    question:
      'Will a recurring calendar invite shift times for Tokyo participants?',
    answer:
      'Yes — if you create a recurring invite by local New York time, Tokyo participants may see a one-hour shift during New York’s DST transitions. Sharing the UTC timestamp avoids this ambiguity.',
  },
  {
    question: 'Can I enter IANA codes or abbreviations?',
    answer:
      'Yes — the tool accepts city names (New York), abbreviations (NYC, TYO), and IANA identifiers (America/New_York, Asia/Tokyo) for precise conversions.',
  },
  {
    question:
      'Which meeting times usually work best for teams split between NY and Tokyo?',
    answer:
      'Commonly used windows are New York morning (07:00–09:00 ET) → Tokyo evening (20:00–22:00 JST) or New York late night (22:00–23:00 ET) → Tokyo midday (11:00–12:00 JST) depending on participant flexibility. Test candidates in Custom mode.',
  },
];

const links = [
  {
    name: 'New York → Shanghai',
    path: `/${PATHS.timezoneFromNewYorkToShanghai}`,
  },
  {
    name: 'San Francisco → Tel Aviv',
    path: `/${PATHS.timezoneFromSanFranciscoToTelAvivYafo}`,
  },
  {
    name: 'Mexico City → Tokyo',
    path: `/${PATHS.timezoneFromMexicoCityToTokyo}`,
  },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.timezoneFromMexicoCityToSeoul}`,
  },
  {
    name: 'Toronto → Melbourne',
    path: `/${PATHS.timezoneFromTorontoToMelbourne}`,
  },
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Enter origin: "New York", "NYC", or "America/New_York". Add destination: "Tokyo", "TYO", or "Asia/Tokyo".',
  'The converter looks up IANA offsets and applies DST rules where relevant: America/New_York uses UTC−05:00 (EST) / UTC−04:00 (EDT); Asia/Tokyo is UTC+09:00 with no DST.',
  'Choose Live to watch real-time clocks or Custom to test a specific timestamp. Outputs are shown in 13+ formats (12h, 24h, ISO, custom).',
  'Use per-card actions — Swap, Copy, Jet Lag Planner, DST Checker — and the global controls (Undo, Redo, Reset, Share Link) to lock or share exact UTC timestamps with invitees.',
];

const ssData = {
  text: 'Tokyo is 13–14 hours ahead of New York (DST dependent). Use live clocks, DST checks, and custom previews to pick fair meeting times.',
  hashtags: 'TimeZones,NewYork,Tokyo,Scheduling,RemoteWork',
  title: 'New York → Tokyo — time converter and meeting guide',
};

const title = 'New York (ET) ↔ Tokyo (JST) — Time Converter';
const description =
  'Tokyo is 13–14 hours ahead of New York depending on DST. Live clocks, DST checks, 13+ formats and jet-lag planning to schedule across ET and JST.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One origin to many destinations',
      'Live clocks and Custom time previews',
      '13+ output formats (12h, 24h, ISO, custom)',
      'DST Checker and Jet Lag Planner per destination',
      'Swap, Copy, Share Link, Undo/Redo controls',
    ],
    steps: [
      {
        name: 'Set origin and destinations',
        description:
          'Enter New York by city, abbreviation, or IANA code; add Tokyo and other cities to compare.',
      },
      {
        name: 'Select Live or Custom',
        description:
          'Use Live to see current clocks or Custom to preview meetings on specific dates.',
      },
      {
        name: 'Verify DST and share',
        description:
          'Run DST Checker for New York, pick an output format, and share a UTC-anchored link with attendees.',
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
  head: 'New York → Tokyo time converter',
  subHead:
    'Compare Eastern Time (America/New_York) with Japan Standard Time (Asia/Tokyo) — accurate offsets, DST checks, and planning helpers.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Scheduling tips & context',
  faqsHead: 'Frequently asked questions',
  linksHead: 'North American Cross-Continental',
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
    originTimeZone: 'New York@@America/New_York',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
