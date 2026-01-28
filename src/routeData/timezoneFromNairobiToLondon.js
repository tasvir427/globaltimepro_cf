import {
  FaMapMarkerAlt,
  FaClock,
  FaSyncAlt,
  FaLink,
  FaClipboardList,
} from 'react-icons/fa';
import { TbWorld, TbSunrise } from 'react-icons/tb';
import { RiShareForwardLine, RiCalendarTodoFill } from 'react-icons/ri';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMapMarkerAlt className={styles.stepIcon} aria-label="Pick origin" />
    ),
    title: 'Set Nairobi as origin',
    description:
      'Enter "Nairobi", "NBO", or the IANA zone "Africa/Nairobi" — the tool accepts city names, abbreviations, and IANA codes for reliable results.',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add London" />,
    title: 'Add London as destination',
    description:
      'Type "London", "LON", or "Europe/London" to add it. The converter supports one origin to many destinations if you want to add more cities later.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Choose Live or Custom mode',
    description:
      'Use Live mode to follow real-time clocks, or Custom mode to preview future meeting dates and DST transitions between Nairobi and London.',
  },
  {
    icon: <FaSyncAlt className={styles.stepIcon} aria-label="Use actions" />,
    title: 'Use action buttons per card',
    description:
      'Swap origin/destination, copy a converted time, run the DST Checker, or open the Jet Lag Planner from each destination card.',
  },
  {
    icon: <RiShareForwardLine className={styles.stepIcon} aria-label="Share" />,
    title: 'Share or pin a schedule',
    description:
      'Create a share link, export your times, or use the time-segment labels (Morning, Work PM, Evening) to quickly find overlap windows.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="Live clocks" />,
    title: 'Live clocks + Custom time',
    description:
      'Switch between live real-time clocks and custom date/time testing to plan meetings across different DST states.',
  },
  {
    icon: (
      <FaClipboardList className={styles.featureIcon} aria-label="Formats" />
    ),
    title: 'Multiple output formats',
    description:
      'View times in 12h, 24h, ISO, or custom formats (13+ formats supported) — handy for calendars, emails, or code snippets.',
  },
  {
    icon: (
      <TbSunrise className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Time segment labels',
    description:
      'Each destination card shows labels like Morning, Work AM, Lunch, Evening, and Night so you can pick human-friendly meeting slots.',
  },
  {
    icon: <FaLink className={styles.featureIcon} aria-label="Share link" />,
    title: 'Share, copy, and export',
    description:
      'One-click copy, shareable link generation, and export options make scheduling across Nairobi and London quick and repeatable.',
  },
  {
    icon: (
      <RiCalendarTodoFill
        className={styles.featureIcon}
        aria-label="DST & jet lag"
      />
    ),
    title: 'DST Checker & Jet Lag Planner',
    description:
      'Check DST effects for Europe/London and use the Jet Lag Planner to estimate best local windows for travellers coming from Nairobi.',
  },
];

const tips = [
  {
    title: 'Typical offset',
    description:
      'Nairobi is at UTC+3 year-round (EAT). London toggles between UTC+0 and UTC+1 (GMT/BST), so the gap is usually 2–3 hours depending on British DST.',
  },
  {
    title: 'Smart meeting windows',
    description:
      'Late morning in London (09:00–11:00) gives early afternoon in Nairobi (11:00–14:00) — a natural slot for teams spanning the two cities.',
  },
  {
    title: 'Travel rhythm tip',
    description:
      'Travelling east from London to Nairobi means advancing your sleep schedule gradually: move bedtime earlier by 30–60 minutes each night for a few nights.',
  },
  {
    title: 'Historical time fact',
    description:
      'Standard time in East Africa was formalised to simplify rail and shipping schedules — today Nairobi uses East Africa Time (EAT) without DST.',
  },
];

const faqs = [
  {
    question: 'Why sometimes 2 hours and other times 3?',
    answer:
      'Because London observes British Summer Time (BST). When London is on BST (UTC+1) the difference to Nairobi (UTC+3) is 2 hours; otherwise it’s 3 hours.',
  },
  {
    question: 'Can I add multiple destinations from Nairobi?',
    answer:
      'Yes. The tool supports converting one origin to many destinations so you can compare Nairobi against several cities side-by-side.',
  },
  {
    question: 'Does entering IANA zones improve accuracy?',
    answer:
      'Yes — entering Africa/Nairobi and Europe/London uses official IANA rules so DST and historical offset rules are applied correctly.',
  },
  {
    question: 'Will recurring meetings adjust for DST?',
    answer:
      'The tool shows future DST effects and preserves the original scheduled local time; you can preview how recurring slots shift when DST changes.',
  },
];

const links = [
  { name: 'Cairo → Istanbul', path: `/${PATHS.timezoneFromCairoToIstanbul}` },
  { name: 'Lagos → London', path: `/${PATHS.timezoneFromLagosToLondon}` },
  {
    name: 'Nairobi → Amsterdam',
    path: `/${PATHS.timezoneFromNairobiToAmsterdam}`,
  },
  { name: 'Lagos → New York', path: `/${PATHS.timezoneFromLagosToNewYork}` },
];

const howItWorks = [
  'Accepts city names, abbreviations, or IANA codes (e.g., Nairobi, NBO, Africa/Nairobi; London, LON, Europe/London).',
  'Uses IANA zone rules to compute UTC offsets and apply DST transitions for Europe/London while Africa/Nairobi remains constant at UTC+3.',
  'Outputs results in 13+ formats (12h, 24h, ISO, and custom) and labels times with human-friendly segments like Morning and Evening.',
  'Each destination card includes action buttons: Swap, Copy, Jet Lag Planner, DST Checker; common controls include Undo, Redo, Reset, Share Link.',
];

const ssData = {
  text: 'Need to schedule between Nairobi and London? Quickly convert times, check DST, and pick the best overlap.',
  hashtags: 'NairobiTime,LondonTime,TimeConverter',
  title: 'Nairobi → London — quick time converter & scheduler',
};

const title = 'Nairobi (EAT) → London (GMT/BST) — Time Converter';
const description =
  'Convert Nairobi (Africa/Nairobi, EAT) to London (Europe/London). Live clocks, DST checks, and clear overlap tips for the 2–3 hour difference.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and Custom time modes',
      'IANA-aware DST conversions',
      'One origin to many destinations',
      'Multiple display formats and shareable links',
    ],
    steps: [
      {
        name: 'Select origin & destination',
        description:
          'Set Africa/Nairobi as origin and Europe/London as destination (or use city names/abbreviations).',
      },
      {
        name: 'Choose mode & view formats',
        description:
          'Switch between Live and Custom, then pick the preferred time format for export or sharing.',
      },
      {
        name: 'Use action buttons',
        description:
          'Copy times, generate share links, run DST checks, or plan jet lag per destination.',
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
  head: 'Nairobi → London time converter',
  subHead:
    'Instantly convert Nairobi (EAT) to London (GMT/BST). Live clocks, DST-aware conversions, and scheduling tips for teams and travellers.',
  featuresHead: 'What this converter helps you do',
  tipsHead: 'Practical tips & quick facts',
  faqsHead: 'Frequently asked questions',
  linksHead: 'Africa & Middle East Connections',
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
    originTimeZone: 'Nairobi@@Africa/Nairobi',
    destinationTimeZone: 'London@@Europe/London',
  },
});
