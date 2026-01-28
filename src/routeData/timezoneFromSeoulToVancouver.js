import {
  FaGlobeAsia,
  FaRegClock,
  FaExchangeAlt,
  FaCopy,
  FaPlane,
} from 'react-icons/fa';
import { TbClockHour4, TbWorld, TbCalendarTime } from 'react-icons/tb';
import { RiShareBoxLine, RiRepeat2Fill } from 'react-icons/ri';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaGlobeAsia className={styles.stepIcon} aria-label="Select Seoul" />,
    title: 'Enter Seoul as the origin',
    description:
      'Type "Seoul", "SEL", or the IANA zone "Asia/Seoul" — the tool accepts city names, abbreviations, and IANA codes for precise conversion.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add Vancouver" />,
    title: 'Add Vancouver as destination',
    description:
      'Add "Vancouver", "YVR", or "America/Vancouver". You can compare Seoul against many destinations at once from a single origin.',
  },
  {
    icon: (
      <TbClockHour4 className={styles.stepIcon} aria-label="Live or custom" />
    ),
    title: 'Toggle Live or Custom time',
    description:
      'Switch to Live to watch real-time clocks, or set a Custom date/time to preview meetings across future DST boundaries.',
  },
  {
    icon: <FaExchangeAlt className={styles.stepIcon} aria-label="Actions" />,
    title: 'Use action buttons on each card',
    description:
      'Swap origin/destination, copy a converted time, open the Jet Lag Planner, or run the DST Checker from each destination card.',
  },
  {
    icon: <RiShareBoxLine className={styles.stepIcon} aria-label="Share" />,
    title: 'Share, export, or reset',
    description:
      'Create a shareable link, copy times for calendar invites, use Undo/Redo while experimenting, or Reset to the default Seoul → Vancouver setup.',
  },
];

const features = [
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Live clocks" />
    ),
    title: 'Live clocks & Custom mode',
    description:
      'Follow Seoul and Vancouver in real time or test any date/time to see how the large 16–17 hour gap behaves with DST.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Quick copy" />,
    title: 'One-click copy & share links',
    description:
      'Quickly copy converted times or generate a link that preserves your exact selection for easy sharing with colleagues or friends.',
  },
  {
    icon: (
      <FaPlane className={styles.featureIcon} aria-label="Jet lag planner" />
    ),
    title: 'Jet Lag Planner & DST check',
    description:
      'Plan long-haul trips with the Jet Lag Planner and verify DST effects — Korea has no DST while Vancouver follows Pacific Time rules.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Formats" />
    ),
    title: '13+ display formats',
    description:
      'View times in 12h, 24h, ISO or custom formats — useful for calendar invites, code, or international communications.',
  },
  {
    icon: (
      <RiRepeat2Fill className={styles.featureIcon} aria-label="Undo redo" />
    ),
    title: 'Undo, Redo, Reset',
    description:
      'Experiment confidently — undo or redo changes and reset the board when you want to start fresh with Seoul → Vancouver.',
  },
];

const tips = [
  {
    title: 'Typical offset range',
    description:
      'Seoul (Asia/Seoul, UTC+9) is typically 16–17 hours ahead of Vancouver (America/Vancouver), depending on Pacific DST.',
  },
  {
    title: 'Best overlap windows',
    description:
      'For meetings, try late evening in Seoul (20:00–22:00) to catch Vancouver morning (03:00–05:00) or choose early Seoul morning for Vancouver afternoon.',
  },
  {
    title: 'Jet lag adaptation tip',
    description:
      'Travelling westward (Seoul → Vancouver) often adapts better if you delay sleep times by an hour or two in the nights before departure.',
  },
  {
    title: 'Time history note',
    description:
      'Seoul uses a standard Korea time (no DST); Vancouver follows Pacific Time with regular DST shifts — our converter applies the official IANA rules.',
  },
];

const faqs = [
  {
    question: 'Why does the Seoul–Vancouver gap look so large?',
    answer:
      'Seoul is at UTC+9 while Vancouver is at UTC−8 (standard) or UTC−7 (daylight). That creates a 16–17 hour difference depending on Pacific DST.',
  },
  {
    question: 'Will my recurring meeting shift when Vancouver changes DST?',
    answer:
      'The tool shows future DST changes. Recurring meetings can appear to shift in local time when one side observes DST and the other does not.',
  },
  {
    question: 'Can I input IANA zones directly?',
    answer:
      'Yes — entering Asia/Seoul and America/Vancouver ensures the converter uses authoritative IANA rules for offsets and DST transitions.',
  },
  {
    question: 'Is cross-date scheduling handled?',
    answer:
      'Yes. When time conversions cross midnight or the calendar date, destination cards clearly show the local date alongside the time.',
  },
];

const links = [
  { name: 'Seoul → Sydney', path: `/${PATHS.timezoneFromSeoulToSydney}` },
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Accepts city names, abbreviations, or IANA zones (e.g., Seoul, SEL, Asia/Seoul; Vancouver, YVR, America/Vancouver).',
  'Computes UTC offsets and applies IANA DST rules so Asia/Seoul stays fixed at UTC+9 while America/Vancouver toggles between UTC−8/UTC−7.',
  'Displays results in 13+ formats (12h, 24h, ISO, custom) and labels times with segments like Morning, Work PM, Evening, and Night.',
  'Destination cards include action buttons: Swap, Copy, Jet Lag Planner, DST Checker. Common controls: Undo, Redo, Reset, Share Link.',
];

const ssData = {
  text: 'Scheduling between Seoul and Vancouver? Convert instantly, check DST, and pick practical overlap windows.',
  hashtags: 'SeoulTime,VancouverTime,TimeConverter',
  title: 'Seoul → Vancouver — quick time converter & scheduler',
};

const title = 'Seoul (KST) → Vancouver (PT) — Time Converter';
const description =
  'Convert Seoul (Asia/Seoul, KST) to Vancouver (America/Vancouver, PT). Live clocks, DST-aware conversions, and tips for the 16–17 hour gap.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'IANA-based DST-aware conversions',
      'One origin to many destinations',
      'Multiple display formats and shareable links',
    ],
    steps: [
      {
        name: 'Set origin & destination',
        description:
          'Enter Asia/Seoul as origin and America/Vancouver as destination (or use city names/abbreviations).',
      },
      {
        name: 'Choose Live or Custom',
        description:
          'Live shows real-time clocks; Custom lets you test future dates and DST transitions.',
      },
      {
        name: 'Share or plan travel',
        description:
          'Copy times, create share links, use the Jet Lag Planner, or run DST checks for accurate scheduling.',
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
  head: 'Seoul → Vancouver time converter',
  subHead:
    'Instantly convert Seoul (KST) to Vancouver (PT). Live clocks, DST checks, and practical overlap suggestions for global teams and travellers.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical tips & quick facts',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Asian Hubs to Global Destinations',
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
    originTimeZone: 'Seoul@@Asia/Seoul',
    destinationTimeZone: 'Vancouver@@America/Vancouver',
  },
});
