import {
  FaRegClock,
  FaGlobe,
  FaShareAlt,
  FaSyncAlt,
  FaCopy,
} from 'react-icons/fa';
import { TbCalendarTime, TbSunrise } from 'react-icons/tb';
import { RiMapPin2Line } from 'react-icons/ri';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaRegClock className={styles.stepIcon} aria-label="Set origin time" />
    ),
    title: 'Choose an origin time in Istanbul',
    description:
      'Type a time or toggle Live to use Istanbul’s current clock. Inputs accept city name, abbreviation, or IANA (Europe/Istanbul). The tool canonicalizes your input for consistency.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Add destination" />,
    title: 'Add New York as a destination',
    description:
      'Select “New York” (America/New_York). The converter applies IANA rules so your result reflects local offsets and DST rules on the chosen date.',
  },
  {
    icon: (
      <FaSyncAlt className={styles.stepIcon} aria-label="Compare formats" />
    ),
    title: 'Pick display formats & segments',
    description:
      'Switch among 12h, 24h, ISO or custom formats and read labelled segments (Morning, Work PM, Evening) to find natural meeting overlaps.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share or plan" />,
    title: 'Use actions to share or plan',
    description:
      'Each destination card includes Swap, Copy, Jet Lag Planner and DST Checker. Use Undo / Redo / Reset and create shareable links for consistent invites.',
  },
];

const features = [
  {
    icon: (
      <RiMapPin2Line
        className={styles.featureIcon}
        aria-label="Input flexibility"
      />
    ),
    title: 'City, Abbreviation, or IANA input',
    description:
      'Accepts Istanbul, TR/IST, or Europe/Istanbul and New York, NY/ET, or America/New_York — input style is yours; results remain canonical.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="DST-aware" />
    ),
    title: 'DST-aware conversions & calendar clarity',
    description:
      'America/New_York observes DST; Europe/Istanbul uses a fixed UTC+3 offset. The converter shows the exact offset for any date and flags calendar-day differences.',
  },
  {
    icon: (
      <TbSunrise className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Time segments & 13+ formats',
    description:
      'See labelled slots (Sleep, Morning, Work AM/PM, Evening, Night) and export in many formats — handy for public schedules, broadcasts, and cross-border planning.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Actions" />,
    title: 'Action buttons & workflow',
    description:
      'Quick actions per card (Swap, Copy, Jet Lag Planner, DST Info) plus Undo / Redo / Reset and share link generation for repeatable scheduling.',
  },
];

const tips = [
  {
    title: 'Understand the 7–8 hour swing',
    description:
      'Istanbul (UTC+3) is typically 7–8 hours ahead of New York (UTC−5 standard / UTC−4 DST). During New York’s DST the gap is usually 7 hours, otherwise 8 hours — always verify for your date.',
  },
  {
    title: 'Best overlap windows',
    description:
      'For working meetings, aim for late morning in New York (9–11 AM ET) which lands in Istanbul afternoons (4–7 PM TRT). Early New York mornings can work for Istanbul nights if participants are flexible.',
  },
  {
    title: 'Historical note — why Turkey’s offset matters',
    description:
      'Turkey shifted to permanent UTC+3 in 2016; that change removes a recurring DST switch on the Istanbul side and can surprise planners used to past patterns.',
  },
  {
    title: 'Newsrooms & markets',
    description:
      'Traders, editors, and PR teams can use labeled segments and ISO timestamps to publish synchronized content across both markets without ambiguity.',
  },
];

const faqs = [
  {
    question: 'How many hours ahead is Istanbul of New York?',
    answer:
      'Istanbul is usually 7–8 hours ahead of New York depending on whether New York is observing DST. The converter shows the exact offset for any given date.',
  },
  {
    question: 'Does Istanbul observe daylight saving time?',
    answer:
      'Istanbul uses a permanent UTC+3 offset; it no longer changes clocks seasonally. The converter uses IANA rules so you see accurate results for past and future dates.',
  },
  {
    question: 'Which inputs are safest for accuracy?',
    answer:
      'IANA codes (Europe/Istanbul, America/New_York) are the most robust — they encode historical DST and offset rules. City names and common abbreviations also work and are resolved to IANA zones.',
  },
  {
    question: 'Can I schedule recurring meetings safely?',
    answer:
      'Yes. Pick a local time window that minimizes impact from DST transitions (for New York) or annotate invites with both local times and an ISO/UTC timestamp to avoid confusion.',
  },
];

const links = [
  { name: 'Zurich → New York', path: `/${PATHS.timezoneFromZurichToNewYork}` },
  { name: 'Mumbai → Toronto', path: `/${PATHS.timezoneFromMumbaiToToronto}` },
  {
    name: 'Bangkok → New York',
    path: `/${PATHS.timezoneFromBangkokToNewYork}`,
  },
  { name: 'Manila → New York', path: `/${PATHS.timezoneFromManilaToNewYork}` },
  { name: 'Doha → Singapore', path: `/${PATHS.timezoneFromDohaToSingapore}` },
];

const howItWorks = [
  'User input is resolved to canonical IANA zones: Europe/Istanbul → America/New_York for this route.',
  'The engine applies tz database rules (offsets and DST history) to compute the precise UTC offset for the chosen date/time.',
  'Outputs are formatted to your selected style (12h, 24h, ISO, or custom) and annotated with time-segment labels and calendar-day markers.',
  'Each destination card includes quick actions (Swap, Copy, Jet Lag Planner, DST Info) and the toolbar supports Undo, Redo, Reset and Share Link.',
];

const ssData = {
  text: 'Istanbul → New York time converter — DST-aware, IANA-accurate, and designed for teams, travel, and publishing.',
  hashtags: 'TimeZones,Istanbul,NewYork,Scheduling,DST',
  title: 'Istanbul → New York — convert times, avoid mistakes',
};

const title = 'Istanbul (TR) → New York (ET) Time Converter';
const description =
  'Convert times between Istanbul (Europe/Istanbul) and New York (America/New_York). DST-aware, IANA-accurate, with scheduling tips and historical context.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom origin modes',
      'Inputs: city, abbreviation, or IANA code',
      'DST-aware conversions and calendar-day markers',
      'Time segments and 12+ output formats',
      'Actions: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Set origin time',
        description: 'Use Live or set a custom date/time for Europe/Istanbul.',
      },
      {
        name: 'Add New York',
        description:
          'Resolve America/New_York and inspect the exact offset and calendar implications.',
      },
      {
        name: 'Use actions & share',
        description:
          'Copy times, check DST, plan jet lag, or share a deep link to preserve the schedule.',
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
  head: 'Istanbul to New York Time',
  subHead:
    'Precise, DST-aware time conversions between Istanbul (Europe/Istanbul) and New York (America/New_York). Ideal for teams, travelers, and publishers.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Scheduling & historical tips',
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
    originTimeZone: 'Istanbul@@Europe/Istanbul',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
