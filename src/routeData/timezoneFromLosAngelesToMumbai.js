import {
  FaRegClock,
  FaPlane,
  FaCopy,
  FaExchangeAlt,
  FaGlobe,
} from 'react-icons/fa';
import { MdOutlineSchedule, MdShare, MdUndo } from 'react-icons/md';
import { TbClockHour10, TbCalendarTime } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Pick origin" />,
    title: 'Set Los Angeles as origin',
    description:
      'Type "Los Angeles", "LA", or the IANA zone "America/Los_Angeles" into the origin field — city names, airport abbreviations, and IANA codes are supported.',
  },
  {
    icon: <TbClockHour10 className={styles.stepIcon} aria-label="Add Mumbai" />,
    title: 'Add Mumbai as destination',
    description:
      'Enter "Mumbai", "BOM", or "Asia/Kolkata". The converter accepts multiple destinations so you can compare Mumbai with other cities in the same view.',
  },
  {
    icon: (
      <MdOutlineSchedule
        className={styles.stepIcon}
        aria-label="Live or custom"
      />
    ),
    title: 'Choose Live or Custom time',
    description:
      'Use Live mode to follow current clocks or switch to Custom mode to test specific dates — handy for planning when Pacific DST is active.',
  },
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="Actions" />,
    title: 'Use action buttons on cards',
    description:
      'Swap origin/destination, copy a converted time, run the DST Checker, or open the Jet Lag Planner right from each destination card.',
  },
  {
    icon: <MdShare className={styles.stepIcon} aria-label="Share" />,
    title: 'Share or save your selection',
    description:
      'Create a share link, copy times for calendar invites, or reset/undo changes while experimenting with different meeting slots.',
  },
];

const features = [
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Live clocks" />
    ),
    title: 'Live clocks & Custom mode',
    description:
      'Watch Los Angeles and Mumbai in real time or set any custom date/time to preview how the 12.5–13.5 hour gap behaves.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Copy" />,
    title: 'One-click copy & share links',
    description:
      'Copy converted times instantly, or generate a link that encodes your exact origin, destinations, and custom date/time.',
  },
  {
    icon: <FaPlane className={styles.featureIcon} aria-label="Jet lag" />,
    title: 'Jet Lag Planner & DST Checker',
    description:
      'Plan long flights and confirm DST effects — India uses a fixed +5:30 offset while Los Angeles toggles between PST/PDT.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Formats" />
    ),
    title: 'Multiple display formats',
    description:
      'View times in 12h, 24h, ISO, or custom formats (13+ options) so you can paste them into calendars, emails, or scripts.',
  },
  {
    icon: <MdUndo className={styles.featureIcon} aria-label="Undo redo" />,
    title: 'Undo, Redo, Reset',
    description:
      'Try different meeting times without fear — undo or redo changes or reset the workspace to the default Los Angeles → Mumbai setup.',
  },
];

const tips = [
  {
    title: 'Understand the half-hour',
    description:
      'India uses a half-hour offset (Asia/Kolkata, UTC+5:30). That creates a 12.5–13.5 hour lead for Mumbai over Los Angeles depending on Pacific DST.',
  },
  {
    title: 'Best overlap windows',
    description:
      'To catch reasonable local hours for both sides, try late evening in Los Angeles (20:00–22:00) which maps to morning in Mumbai (08:30–10:30) the next day.',
  },
  {
    title: 'Scheduling for recurring calls',
    description:
      'Use Custom mode to preview how a recurring local time behaves across DST changes — recurring slots may seem to “shift” when LA changes clocks.',
  },
  {
    title: 'Travel & sleep advice',
    description:
      'Westbound trips (LA → Mumbai) often benefit from gradually delaying sleep by an hour or two before departure to better match Indian local time.',
  },
];

const faqs = [
  {
    question:
      'Why is the time difference 12.5 hours sometimes and 13.5 other times?',
    answer:
      'Los Angeles moves between Pacific Standard Time (UTC−8) and Pacific Daylight Time (UTC−7). Mumbai stays at UTC+5:30, so the gap alternates between 13.5 and 12.5 hours.',
  },
  {
    question: 'Can I input IANA zone names directly?',
    answer:
      'Yes — use America/Los_Angeles and Asia/Kolkata to ensure the converter applies correct DST and offset rules.',
  },
  {
    question: 'Does the tool show when conversions cross dates?',
    answer:
      'Yes — destination cards display the local date and time so you’ll always see if the conversion falls on the next calendar day.',
  },
  {
    question: 'Will calendar invites respect the half-hour offset?',
    answer:
      'If you copy the converted time into calendar tools that support time zones, the half-hour offset is preserved. Use the ISO format for the most precise imports.',
  },
];

const links = [
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.timezoneFromMexicoCityToSeoul}`,
  },
];

const howItWorks = [
  'Accepts city names, common abbreviations, or IANA zones (e.g., Los Angeles, LA, America/Los_Angeles; Mumbai, BOM, Asia/Kolkata).',
  'Computes UTC offsets and applies IANA DST rules so Asia/Kolkata remains at UTC+5:30 while America/Los_Angeles toggles between UTC−8/UTC−7.',
  'Displays results in 13+ formats (12h, 24h, ISO, custom) and labels times with human-friendly segments (Morning, Work, Evening, Night).',
  'Destination cards include action buttons: Swap, Copy, Jet Lag Planner, DST Checker; controls include Undo, Redo, Reset, Share Link.',
];

const ssData = {
  text: 'Need to schedule between Los Angeles and Mumbai? Convert instantly, account for the half-hour, and pick the best overlap.',
  hashtags: 'LATime,MumbaiTime,TimeConverter',
  title: 'Los Angeles → Mumbai — quick time converter & scheduler',
};

const title = 'Los Angeles (PT) → Mumbai (IST) — Time Converter';
const description =
  'Convert Los Angeles (America/Los_Angeles, PT) to Mumbai (Asia/Kolkata, IST). Live clocks, DST checks, and guidance for the 12.5–13.5 hour gap.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'IANA-aware DST and half-hour offset handling',
      'One origin to many destinations',
      'Multiple display formats and shareable links',
    ],
    steps: [
      {
        name: 'Select origin and destination',
        description:
          'Enter America/Los_Angeles as origin and Asia/Kolkata as destination (or use city names/abbreviations).',
      },
      {
        name: 'Choose Live or Custom',
        description:
          'Live shows current clocks; Custom lets you test future dates, DST transitions, and half-hour offsets.',
      },
      {
        name: 'Share or plan',
        description:
          'Copy times, generate share links, use Jet Lag Planner, or run DST checks for accurate scheduling.',
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
  head: 'Los Angeles → Mumbai time converter',
  subHead:
    'Instantly convert Los Angeles (PT) to Mumbai (IST). Live clocks, half-hour offset awareness, and scheduling tips for travellers and remote teams.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical tips & quick facts',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Asian to North American Tech Hubs',
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
    originTimeZone: 'Los Angeles@@America/Los_Angeles',
    destinationTimeZone: 'Mumbai@@Asia/Kolkata',
  },
});
