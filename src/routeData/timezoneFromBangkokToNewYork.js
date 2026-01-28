import {
  FaClock,
  FaRegCalendarAlt,
  FaExchangeAlt,
  FaClipboard,
  FaPlane,
  FaSyncAlt,
} from 'react-icons/fa';
import { TbSun, TbWorld } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="swap" />,
    title: 'Choose origin and destinations',
    description:
      'Type "Bangkok", "BKK", or "Asia/Bangkok" as the origin, then add New York ("New York", "NYC", or "America/New_York"). The field accepts city names, abbreviations, and IANA codes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="live-or-custom" />,
    title: 'Live clocks or custom time',
    description:
      'Toggle Live to observe current clocks or switch to Custom to audition future meeting times — useful because Bangkok is generally ahead of New York by 11–12 hours.',
  },
  {
    icon: (
      <FaRegCalendarAlt
        className={styles.stepIcon}
        aria-label="format-and-share"
      />
    ),
    title: 'Format, verify DST & share',
    description:
      'Pick from 13+ output formats (12h, 24h, ISO, custom), run the DST Checker on the New York card, then copy or share a link to lock the exact timestamps for invitees.',
  },
];

const features = [
  {
    icon: (
      <TbWorld className={styles.featureIcon} aria-label="multi-destination" />
    ),
    title: 'One origin → many destinations',
    description:
      'Start with Bangkok and add New York plus any other cities; the layout shows each destination as its own card so you can compare multiple timezones at a glance.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="time-segments" />,
    title: 'Meaningful time segments',
    description:
      'Each destination shows segments (Morning, Work AM, Lunch, Work PM, Evening, Night) so you can quickly spot reasonable meeting slots for both Bangkok and New York.',
  },
  {
    icon: <FaPlane className={styles.featureIcon} aria-label="jet-lag" />,
    title: 'Travel-friendly planning',
    description:
      'Use the Jet Lag Planner to generate suggested sleep and nap windows for eastbound or westbound travel — handy for long-haul flights between the U.S. East Coast and Southeast Asia.',
  },
  {
    icon: <FaClipboard className={styles.featureIcon} aria-label="copy" />,
    title: 'Action buttons on every card',
    description:
      'Swap flips origin/destination, Copy copies a formatted timestamp, DST Checker explains local offsets, and Share Link preserves your current layout for teammates.',
  },
  {
    icon: <FaSyncAlt className={styles.featureIcon} aria-label="undo" />,
    title: 'Undo / Redo / Reset',
    description:
      'Try multiple scenarios without worry — undo or redo changes, or reset to the default Bangkok→New York configuration any time.',
  },
];

const tips = [
  {
    title: 'Understand the DST nuance',
    description:
      'Bangkok uses a fixed offset (UTC+7). New York observes DST (EST/EDT), so the difference is 12 hours when New York is on standard time and 11 hours during daylight saving. Verify with the DST Checker for recurring events.',
  },
  {
    title: 'Best windows for live calls',
    description:
      'For the least friction, schedule New York morning (07:00–10:00 ET) which maps to Bangkok evening (18:00–21:00 or 19:00–22:00 depending on DST) — friendly for both business and personal calls.',
  },
  {
    title: 'Recurring meetings & DST',
    description:
      'If you set a recurring meeting by local time in New York, note that daylight saving transitions may shift the Bangkok local time by an hour. Use the share link to show fixed UTC timestamps to participants if you want absolute stability.',
  },
  {
    title: 'Custom mode for events and flights',
    description:
      'Use Custom mode to audition several candidate times quickly — great for webinar scheduling or checking arrival times after a long flight connecting through the U.S. or Asia.',
  },
  {
    title: 'A short time-history note',
    description:
      'Modern standardized timezones (IANA) replaced local solar time; this stability is why scheduled remote work and global events are manageable today — but DST quirks still require a quick check for transatlantic and transpacific meetings.',
  },
];

const faqs = [
  {
    question: 'Exactly how many hours ahead is Bangkok compared to New York?',
    answer:
      'Bangkok is typically 12 hours ahead of New York when New York is on standard time (EST, UTC−5). During New York daylight saving time (EDT, UTC−4) the gap is 11 hours. Use the converter’s DST Checker for precise conversions on specific dates.',
  },
  {
    question: 'Why does the time difference sometimes change?',
    answer:
      'The difference changes because New York observes daylight saving time while Bangkok does not. When clocks in New York spring forward, the Bangkok local time that matches a given New York time will shift by one hour.',
  },
  {
    question: 'Can I enter IANA codes like Asia/Bangkok and America/New_York?',
    answer:
      'Yes — the tool accepts city names, abbreviations (BKK, NYC), and IANA identifiers (Asia/Bangkok, America/New_York) for accurate conversions.',
  },
  {
    question:
      'Is there a recommended slot for cross-continental team meetings?',
    answer:
      'Aim for New York early morning (07:00–10:00 ET) — it becomes Bangkok evening and usually balances professional hours for both sides. Use Live or Custom preview to confirm on your chosen dates.',
  },
  {
    question: 'Does the tool handle multiple destinations at once?',
    answer:
      'Yes — you can compare New York with other cities (London, Singapore, Los Angeles, etc.) in a single view to find the best multi-party time.',
  },
];

const links = [
  { name: 'Zurich → New York', path: `/${PATHS.timezoneFromZurichToNewYork}` },
  { name: 'Mumbai → Toronto', path: `/${PATHS.timezoneFromMumbaiToToronto}` },
  {
    name: 'Istanbul → New York',
    path: `/${PATHS.timezoneFromIstanbulToNewYork}`,
  },
  { name: 'Manila → New York', path: `/${PATHS.timezoneFromManilaToNewYork}` },
  { name: 'Doha → Singapore', path: `/${PATHS.timezoneFromDohaToSingapore}` },
];

const howItWorks = [
  'Enter origin: "Bangkok", "BKK", or "Asia/Bangkok". Add destination: "New York", "NYC", or "America/New_York".',
  'The converter uses IANA timezone data to compute UTC offsets (Asia/Bangkok = UTC+7; America/New_York toggles between UTC-5 and UTC-4) and applies DST rules where relevant.',
  'Choose Live to view real-time clocks, or Custom to set a specific timestamp and test meeting windows across the two cities.',
  'Use built-in actions: Swap, Copy, Jet Lag Planner, DST Checker, Undo/Redo, Reset, and Share Link to save or send the exact converted timestamps.',
];

const ssData = {
  text: 'Bangkok is 11–12 hours ahead of New York (DST dependent). Use live clocks, DST checks, and custom previews to pick the best time.',
  hashtags: 'TimeZones,Bangkok,NewYork,Scheduling,RemoteWork',
  title: 'Bangkok ↔ New York — quick time converter',
};

const title = 'Bangkok (ICT) ↔ New York (ET) — Time Converter';
const description =
  'Bangkok is 11–12 hours ahead of New York depending on DST. Live clocks, DST checks, 13+ formats and planning tools for smooth scheduling across Asia and the U.S.';

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
        name: 'Enter origin and destination',
        description:
          'Specify Bangkok and New York by city, abbreviation, or IANA code.',
      },
      {
        name: 'Select Live or Custom',
        description:
          'Use Live to see current clocks or Custom to test meeting times on future dates.',
      },
      {
        name: 'Verify DST and share',
        description:
          'Run DST Checker for precise offsets, format outputs, and share a stable link with invitees.',
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
  head: 'Bangkok → New York time converter',
  subHead:
    'Compare ICT (Asia/Bangkok) with ET (America/New_York) — accurate offsets, DST checks, and planning helpers for calls and travel.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Scheduling tips & context',
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
    originTimeZone: 'Bangkok@@Asia/Bangkok',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
