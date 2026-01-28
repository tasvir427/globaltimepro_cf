import {
  FaRegClock,
  FaRegCalendarAlt,
  FaPlaneDeparture,
  FaSyncAlt,
} from 'react-icons/fa';
import { TbSun, TbMoon } from 'react-icons/tb';
import { RiTimeLine } from 'react-icons/ri';
import { AiOutlineCopy } from 'react-icons/ai';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaRegClock
        className={styles.stepIcon}
        aria-label="Live or custom time"
      />
    ),
    title: 'Set the origin time',
    description:
      'Toggle “Live” to use Auckland’s current clock or type any date/time. Enter the city name, abbreviation, or IANA code (Pacific/Auckland) — the tool canonicalizes your input for precision.',
  },
  {
    icon: (
      <FaRegCalendarAlt className={styles.stepIcon} aria-label="Date check" />
    ),
    title: 'Watch the calendar effect',
    description:
      'Because Auckland sits near the International Date Line, local times often fall on the next calendar day compared with Los Angeles. The converter highlights the calendar day for clarity.',
  },
  {
    icon: (
      <FaSyncAlt className={styles.stepIcon} aria-label="Compare formats" />
    ),
    title: 'Choose output format & segments',
    description:
      'Flip between 12h / 24h / ISO or custom formats and inspect labelled time segments (Morning, Work PM, Night) to find natural overlap windows.',
  },
  {
    icon: (
      <FaPlaneDeparture className={styles.stepIcon} aria-label="Plan travel" />
    ),
    title: 'Plan travel or meetings',
    description:
      'Use card actions — Swap, Copy, Jet Lag Planner, DST Checker — then share the deep link or copy times to calendars to preserve the exact offsets.',
  },
];

const features = [
  {
    icon: <RiTimeLine className={styles.featureIcon} aria-label="IANA input" />,
    title: 'City, Abbrev, or IANA input',
    description:
      'Accepts “Auckland”, “NZST/NZDT”, or `Pacific/Auckland` and maps to `America/Los_Angeles` for consistent conversions.',
  },
  {
    icon: <TbSun className={styles.featureIcon} aria-label="Live mode" />,
    title: 'Live + Custom Time Modes',
    description:
      'Compare live clocks or freeze a custom origin time — ideal for rehearsals, broadcasts, or booking flights where the calendar day matters.',
  },
  {
    icon: <TbMoon className={styles.featureIcon} aria-label="Segments" />,
    title: 'Time segments & many formats',
    description:
      'Over a dozen display options with labelled segments (Sleep, Morning, Lunch, Evening) help you avoid awkward meeting times across nearly a full-day offset.',
  },
  {
    icon: <AiOutlineCopy className={styles.featureIcon} aria-label="Actions" />,
    title: 'Action buttons & workflow',
    description:
      'Destination cards include Swap, Copy, Jet Lag Planner, DST Info; toolbar supports Undo, Redo, Reset and Share Link for repeatable workflows.',
  },
];

const tips = [
  {
    title: 'Expect the “next-day” effect',
    description:
      'Auckland is often a calendar day ahead of Los Angeles. When it’s morning in Auckland, it may still be the previous evening in LA. The tool flags day changes so your invite never lands a day off.',
  },
  {
    title: 'Typical good meeting windows',
    description:
      'For live calls: late afternoon in Los Angeles (4–6 PM PT) aligns with early morning next day in Auckland (11 PM–1 AM NZT depending on DST). Alternatively, late Auckland evenings map to LA mornings.',
  },
  {
    title: 'DST & date-line quirks',
    description:
      'Both locations observe DST at different times of year. Offsets can vary around transitions; always check the DST Checker action for exact offsets on a chosen date.',
  },
  {
    title: 'Jet-lag practicalities',
    description:
      'Eastbound flights (LA → Auckland) often require gradual sleep shifting. Use the Jet Lag Planner to build staged sleep/wake adjustments before departure and after arrival.',
  },
  {
    title: 'Broadcasting & publishing tip',
    description:
      'If you publish content for both markets, label release times with both local times *and* an ISO timestamp (UTC) to reduce global confusion.',
  },
];

const faqs = [
  {
    question: 'How many hours ahead is Auckland of Los Angeles?',
    answer:
      'Auckland (Pacific/Auckland) is typically about 19–21 hours ahead of Los Angeles (America/Los_Angeles) depending on DST and the specific date. The converter shows the exact offset and whether the result falls on the next calendar day.',
  },
  {
    question: 'Why do dates sometimes differ by a day?',
    answer:
      'Auckland is close to the International Date Line and sits on the opposite side of the globe from Los Angeles. That geography can mean Auckland’s local clock is a calendar day ahead — your tool highlights these day changes so you schedule correctly.',
  },
  {
    question: 'Can I use this for flight planning?',
    answer:
      'Yes. Use Live or a custom origin time plus the Jet Lag Planner and copy/share functions to coordinate itineraries, transfers, and local arrival/departure times.',
  },
  {
    question: 'Does the converter handle historical dates?',
    answer:
      'Yes. The converter applies IANA tz rules for historical and future dates so offsets reflect historical DST rules when relevant.',
  },
];

const links = [
  { name: 'Sydney → Santiago', path: `/${PATHS.timezoneFromSydneyToSantiago}` },
  {
    name: 'Buenos Aires → Madrid',
    path: `/${PATHS.timezoneFromBuenosAiresToMadrid}`,
  },
];

const howItWorks = [
  'User input (city, abbreviation, or IANA) is canonicalized to `Pacific/Auckland` and `America/Los_Angeles`.',
  'The engine applies IANA timezone rules (including DST and historical changes) to compute the exact UTC offset for the chosen date.',
  'Outputs are rendered in the selected display format (12h/24h/ISO/custom) and annotated with time segment labels and calendar-day markers.',
  'Destination cards include quick actions (Swap, Copy, Jet Lag Planner, DST Info) and the common toolbar provides Undo/Redo/Reset/Share.',
];

const ssData = {
  text: 'Auckland → Los Angeles time converter — DST-aware, date-line smart, and built for travel, teams, and broadcasts.',
  hashtags: 'TimeZones,Auckland,LosAngeles,JetLag,DST',
  title: 'Auckland → Los Angeles — convert times & plan travel',
};

const title = 'Auckland (NZ) → Los Angeles (PT) Time Converter';
const description =
  'Convert times between Auckland (Pacific/Auckland) and Los Angeles (America/Los_Angeles). Live clocks, calendar-day clarity, DST-aware offsets, and jet-lag planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom origin modes',
      'Inputs via city name, abbreviation, or IANA code',
      'DST-aware and historical conversions',
      'Time segments and 12+ output formats',
      'Card actions: Swap, Copy, Jet Lag Planner, DST Checker',
    ],
    steps: [
      {
        name: 'Enter an origin time',
        description:
          'Use Live or type a custom date/time for Pacific/Auckland.',
      },
      {
        name: 'Add Los Angeles',
        description:
          'Resolve America/Los_Angeles and inspect the exact offset and calendar day.',
      },
      {
        name: 'Use card actions',
        description:
          'Copy times, check DST, plan jet lag, or share a deep link for precise scheduling.',
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
  head: 'Auckland to Los Angeles Time',
  subHead:
    'Fast, DST-aware conversions between Auckland and Los Angeles with clear calendar-day visibility and travel-friendly scheduling tools.',
  featuresHead: 'Why this page helps',
  tipsHead: 'Practical scheduling & travel tips',
  faqsHead: 'Questions people ask',
  linksHead: 'Pacific & South America Links',
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
    originTimeZone: 'Auckland@@Pacific/Auckland',
    destinationTimeZone: 'Los Angeles@@America/Los_Angeles',
  },
});
