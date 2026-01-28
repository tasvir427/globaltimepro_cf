import { FaRegClock, FaShareAlt, FaUndo, FaCopy } from 'react-icons/fa';
import { TbArrowsLeftRight, TbSunrise } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaRegClock className={styles.stepIcon} aria-label="Select time" />,
    title: 'Pick an origin time (Seoul)',
    description:
      'Type “Seoul”, “ICN”, or the IANA code and choose a live clock or set a custom moment to convert.',
  },
  {
    icon: (
      <TbArrowsLeftRight className={styles.stepIcon} aria-label="Convert" />
    ),
    title: 'Convert to London at a glance',
    description:
      'See London’s local time instantly across multiple formats — 12/24/ISO — with clear time-segment labels for scheduling.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share" />,
    title: 'Act on the result',
    description:
      'Use copy, share link, or swap to flip origin/destination. Use the Jet Lag Planner and DST Checker when planning trips or meetings.',
  },
];

const features = [
  {
    icon: (
      <TbSunrise className={styles.featureIcon} aria-label="Day segments" />
    ),
    title: 'Time Segments tuned for wake & work',
    description:
      'Segment labels (Morning, Work AM, Lunch, Evening, Night) make it easy to find overlapping business hours between Seoul and London.',
  },
  {
    icon: (
      <TbArrowsLeftRight className={styles.featureIcon} aria-label="Swap" />
    ),
    title: 'One origin → many destinations (optimized)',
    description:
      'Start in Seoul and add multiple London-area locations or offices — compare times side-by-side with action buttons per card.',
  },
  {
    icon: <FaCopy className={styles.featureIcon} aria-label="Copy" />,
    title: 'Shareable times & formats',
    description:
      'Copy a destination time, share a pre-filled link, or export in several formats (12h, 24h, ISO, or a custom layout).',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="Undo" />,
    title: 'Undo / Redo / Reset',
    description:
      'Try different meeting slots without losing progress — revert choices or reset the whole board with one click.',
  },
];

const tips = [
  {
    title: 'Typical offset to remember',
    description:
      'Seoul is typically 9 hours ahead of London (when London is on standard time). During British Summer Time, the difference is usually 8 hours — check the DST Checker for exact dates.',
  },
  {
    title: 'Best meeting windows',
    description:
      'For minimal disruption: aim for London late morning (09:00–11:00) which corresponds to Seoul late evening — or London late afternoon for Seoul late night. Use live mode to preview clocks together.',
  },
  {
    title: 'Travel & jet lag planning',
    description:
      'Heading west to London? Use the Jet Lag Planner to estimate ideal sleep shifts and light exposure timings for quicker adjustment.',
  },
  {
    title: 'Cultural scheduling note',
    description:
      'London’s business culture often prefers 09:30–17:30 meetings; Seoul teams commonly operate earlier or later depending on industry — check with participants before locking a time.',
  },
];

const faqs = [
  {
    question: 'How many hours ahead is Seoul compared to London?',
    answer:
      'Seoul is normally 9 hours ahead of London. When London observes British Summer Time (BST), Seoul is typically 8 hours ahead. Our DST Checker will show the precise difference for any date.',
  },
  {
    question: 'Does the tool handle daylight saving automatically?',
    answer:
      'Yes — the DST Checker inspects both IANA zones (Asia/Seoul and Europe/London) and adjusts results for daylight saving on the date you choose.',
  },
  {
    question:
      'Can I convert a custom date and time, not just the current time?',
    answer:
      'Absolutely. Toggle from Live to Custom mode, enter the date/time you want, and the converter will calculate corresponding London times in multiple formats.',
  },
  {
    question: 'Can I share a pre-filled result with a teammate in London?',
    answer:
      'Yes — use Share Link to generate a URL that opens the tool with origin set to Seoul and your chosen time pre-filled for London recipients.',
  },
];

const links = [
  { name: 'Seoul → Sydney', path: `/${PATHS.timezoneFromSeoulToSydney}` },
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Input accepts city names, common abbreviations (e.g., ICN for Incheon), or IANA time zone codes.',
  'The tool resolves Asia/Seoul → Europe/London using IANA databases and applies DST rules for the selected date.',
  'Outputs display in multiple formats; action controls allow swap, copy, or open Jet Lag Planner and DST Checker for context.',
];

const ssData = {
  text: 'Seoul ↔ London time converter — find the best meeting window and check DST instantly.',
  hashtags: 'timezone,Seoul,London,meetingplanner,timeconverter',
  title: 'Seoul to London — Time Converter',
};

const title = 'Seoul (KST) ⇄ London (GMT/BST) — Time Converter';
const description =
  'Convert time between Seoul and London — typically 9 hours ahead. Plan meetings, check DST, and use live or custom modes.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Convert Seoul to London times in real-time or for custom dates',
      'DST-aware results using IANA time zones',
      'Shareable links, multiple formats, Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Choose origin time',
        description: 'Set a live clock or custom date/time for Seoul.',
      },
      {
        name: 'Convert and compare',
        description: 'See London results across multiple formats and segments.',
      },
      {
        name: 'Act',
        description:
          'Copy, share, swap or plan travel adjustments using integrated tools.',
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
  head: 'Seoul ⇄ London time conversion',
  subHead:
    'Quickly compare Seoul and London clocks — great for international teams, travellers, and event planners.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Scheduling & travel tips',
  faqsHead: 'Frequently asked about Seoul ↔ London',
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
    destinationTimeZone: 'London@@Europe/London',
  },
});
