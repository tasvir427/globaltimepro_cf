import {
  FaClock,
  FaRegSun,
  FaRegMoon,
  FaUndo,
  FaCopy,
  FaPlaneDeparture,
} from 'react-icons/fa';
import { TbArrowsRightLeft, TbWorld, TbCalendarTime } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbArrowsRightLeft className={styles.stepIcon} aria-label="swap-times" />
    ),
    title: 'Pick origin and targets',
    description:
      'Type "Manila", "MNL", or the IANA code "Asia/Manila" as your origin and add one or many destinations such as "Dubai" (Asia/Dubai). The tool accepts city, abbreviation, or IANA entries.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="live-or-custom" />,
    title: 'Use Live or Custom time',
    description:
      'Toggle Live to see real-time clocks or set a Custom time to preview how a meeting or flight will look across Manila (PHT) and Dubai (GST).',
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
      'Choose from 13+ output formats (12h, 24h, ISO, custom), run the DST Checker or Jet Lag Planner, then copy or share a link to preserve the layout.',
  },
];

const features = [
  {
    icon: (
      <TbWorld className={styles.featureIcon} aria-label="multi-destination" />
    ),
    title: 'One origin → many destinations',
    description:
      'Set Manila as the origin and display Dubai alongside additional cities — perfect for managers, families, and travellers coordinating across time zones.',
  },
  {
    icon: (
      <FaRegSun className={styles.featureIcon} aria-label="time-segments" />
    ),
    title: 'Time segment labels',
    description:
      'Each destination card shows helpful segments (Morning, Work AM, Lunch, Evening, Night) so you can quickly see reasonable meeting windows between PHT and GST.',
  },
  {
    icon: (
      <FaRegMoon className={styles.featureIcon} aria-label="live-vs-custom" />
    ),
    title: 'Live clocks & custom previews',
    description:
      'See live, ticking clocks or switch to a custom timestamp to plan future calls — useful when booking across the 4-hour gap (Manila is ahead of Dubai).',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="copy" />,
    title: 'Action buttons per card',
    description:
      'Every destination includes Swap, Copy, Jet Lag Planner and DST Checker (Info) actions so the precise operations you need are a single click away.',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="undo" />,
    title: 'Undo / Redo / Reset',
    description:
      'Experiment freely: undo mistakes, redo changes, or reset to the default Manila→Dubai view without losing your work.',
  },
  {
    icon: (
      <FaPlaneDeparture className={styles.featureIcon} aria-label="jet-lag" />
    ),
    title: 'Jet lag & travel planning hints',
    description:
      'Integrated Jet Lag Planner suggests optimal sleep windows when flying between Manila and Dubai, making travel planning less guesswork and more smooth landings.',
  },
];

const tips = [
  {
    title: 'Remember the direction',
    description:
      'Manila (PHT, Asia/Manila) is 4 hours ahead of Dubai (GST, Asia/Dubai). A 3:00 PM meeting in Manila is 11:00 AM in Dubai — handy for scheduling morning calls in the Gulf.',
  },
  {
    title: 'No DST surprises',
    description:
      'Both locations use steady, year-round time (no daylight saving shifts), so once you pick a recurring meeting time it’s unlikely to move unexpectedly.',
  },
  {
    title: 'Best meeting windows',
    description:
      'For overlap, target Dubai late morning (10:00–12:00 GST) which maps to Manila afternoon (14:00–16:00 PHT) — good for teams split between the two cities.',
  },
  {
    title: 'Use Custom mode for events',
    description:
      'If you’re coordinating a flight or webinar, switch to Custom mode and try several timestamps back-to-back to compare participant availability at a glance.',
  },
  {
    title: 'A brief historical note',
    description:
      'Before standardized timezones, local solar time ruled. Today, a standardized national time in the Philippines and the Gulf Standard Time keep schedules predictable across the region.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Manila and Dubai?',
    answer:
      'Manila is 4 hours ahead of Dubai. So when it’s noon in Dubai, it’s 4:00 PM in Manila. Use the converter to test specific dates and times.',
  },
  {
    question: 'Do either Manila or Dubai observe daylight saving time?',
    answer:
      'No — both Manila (PHT) and Dubai (GST) stay on the same offset year-round, so recurring meeting times remain stable throughout the year.',
  },
  {
    question: 'How can I schedule a recurring meeting that suits both places?',
    answer:
      'Pick a mid-overlap window (e.g., Dubai 10:00–12:00 → Manila 14:00–16:00) and save the schedule using the share link so participants see the same converted times.',
  },
  {
    question: 'Can I enter city abbreviations or IANA codes?',
    answer:
      'Yes — the tool accepts city names (Manila), abbreviations (MNL), and IANA identifiers (Asia/Manila and Asia/Dubai).',
  },
  {
    question:
      'What if I travel between the two cities — is there a jet lag planner?',
    answer:
      'Yes. Use the Jet Lag Planner on any destination card to get suggested sleep and nap windows tailored to the flight direction and time difference.',
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
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
];

const howItWorks = [
  'Input origin as "Manila", "MNL", or "Asia/Manila". Add "Dubai" or "Asia/Dubai" as a destination.',
  'The converter computes UTC offsets for Asia/Manila (UTC+08:00) and Asia/Dubai (UTC+04:00) and shows live or custom time mappings.',
  'Output supports 13+ formats (12h, 24h, ISO, custom). Use DST Checker and Jet Lag Planner from each destination card to refine plans.',
  'Actions: Swap flips origin/destination, Copy saves a timestamp to clipboard, Share Link preserves your current layout and selections.',
];

const ssData = {
  text: 'Quick check: Manila is 4 hours ahead of Dubai — plan calls, not confusion.',
  hashtags: 'TimeZones,Manila,Dubai,TimeConverter,RemoteWork',
  title: 'Manila → Dubai time converter — quick and clear',
};

const title = 'Manila (PHT) ↔ Dubai (GST) — Time Converter';
const description =
  'Manila is 4 hours ahead of Dubai. Live clocks, custom previews, DST checks and a jet-lag planner for smooth scheduling across PHT and GST.';

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
      'Jet Lag Planner and DST Checker per destination',
      'Copy, Swap, Share Link, Undo/Redo controls',
    ],
    steps: [
      {
        name: 'Set origin and destinations',
        description:
          'Enter Manila by city, abbreviation, or IANA code and add Dubai and other destinations.',
      },
      {
        name: 'Choose Live or Custom time',
        description:
          'Toggle live clocks or set a custom timestamp to preview conversions.',
      },
      {
        name: 'Format, check, and share',
        description:
          'Pick an output format, run DST/jet-lag checks, then copy or share a link to save the configuration.',
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
  head: 'Manila → Dubai time converter',
  subHead:
    'Compare Philippine Time (PHT, Asia/Manila) with Gulf Standard Time (GST, Asia/Dubai) — live clocks, custom previews, and scheduling helpers.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Scheduling tips & context',
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
    originTimeZone: 'Manila@@Asia/Manila',
    destinationTimeZone: 'Dubai@@Asia/Dubai',
  },
});
