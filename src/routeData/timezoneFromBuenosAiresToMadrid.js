import {
  FaClock,
  FaExchangeAlt,
  FaRegCopy,
  FaPlaneDeparture,
  FaUndo,
} from 'react-icons/fa';
import { TbWorld, TbSunset } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaClock className={styles.stepIcon} aria-label="select-time" />,
    title: 'Choose your origin time',
    description:
      'Type "Buenos Aires", an abbreviation (ART), or the IANA zone. The tool accepts free-text city names and IANA codes so you can start from wherever you are.',
  },
  {
    icon: (
      <TbWorld className={styles.stepIcon} aria-label="select-destinations" />
    ),
    title: 'Add Madrid as a destination',
    description:
      'Add one destination or many — the converter shows Madrid alongside other cities if you need multiple comparisons. Use the Swap button on any card to flip origin/destination instantly.',
  },
  {
    icon: (
      <FaExchangeAlt className={styles.stepIcon} aria-label="live-or-custom" />
    ),
    title: 'Pick Live or Custom time',
    description:
      'Live mode shows real-time clocks. Custom mode lets you set a specific date & time to check meetings, flights or deadlines across hemispheres.',
  },
  {
    icon: <FaRegCopy className={styles.stepIcon} aria-label="actions" />,
    title: 'Use action buttons',
    description:
      'Copy the converted time, open the Jet Lag Planner for travel prep, check DST with the Info button, or share a link to your setup with colleagues.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="live-clock" />,
    title: 'Live & Custom clocks',
    description:
      'See live local times for Buenos Aires and Madrid, or freeze any date/time to plan across DST transitions.',
  },
  {
    icon: (
      <TbSunset className={styles.featureIcon} aria-label="time-segments" />
    ),
    title: 'Human-friendly time segments',
    description:
      'Each result includes labels like Morning, Lunch, Evening or Night so you can instantly judge whether a time is meeting-friendly for both cities.',
  },
  {
    icon: (
      <FaPlaneDeparture className={styles.featureIcon} aria-label="jet-lag" />
    ),
    title: 'Jet Lag Planner quick-link',
    description:
      'One-click access to jet-lag tips tailored for travel between South America and Europe — handy for business trips or holiday planning.',
  },
  {
    icon: <FaRegCopy className={styles.featureIcon} aria-label="copy" />,
    title: 'Action buttons per card',
    description:
      'Swap, Copy, Jet Lag Planner, and DST Checker live on each destination card for fast scheduling and sharing.',
  },
  {
    icon: <FaUndo className={styles.featureIcon} aria-label="undo-redo" />,
    title: 'Undo, Redo, Reset & Share',
    description:
      'Experiment fearlessly: revert changes, reset to defaults, or share a permalink of your conversion with collaborators.',
  },
];

const tips = [
  {
    title: 'Remember DST varies',
    description:
      'Madrid switches between CET and CEST; Buenos Aires stays on Argentina Time (ART). That means the difference flips between 4 and 5 hours depending on the date — use Custom mode to be certain.',
  },
  {
    title: 'Best meeting windows',
    description:
      'Late afternoon in Buenos Aires (after 4 PM) often aligns with working hours in Madrid (evening), useful for casual catch-ups; aim for morning Madrid / late-night Buenos Aires for urgent calls.',
  },
  {
    title: 'Travel prep tip',
    description:
      'When flying from Buenos Aires to Madrid, check the Jet Lag Planner for sleep-window suggestions; eastward travel shortens evenings and can skew your circadian rhythm.',
  },
  {
    title: 'Historical time note',
    description:
      'Spain once had a complex history of local times; modern standardization aligned Madrid to central European timezones — a reminder that timezones are as much cultural as technical.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Buenos Aires and Madrid?',
    answer:
      'Buenos Aires (ART, UTC−3) is normally 4–5 hours behind Madrid depending on whether Madrid is observing daylight saving time (CET/CEST). Use Custom mode to check a specific date.',
  },
  {
    question: 'Does Argentina observe daylight saving time?',
    answer:
      'Argentina currently does not use DST; Buenos Aires stays on ART year-round. Madrid does observe DST, which causes the difference to shift seasonally.',
  },
  {
    question: 'Can I schedule a recurring meeting between the two cities?',
    answer:
      'Yes — set the desired local time in Custom mode, verify across representative dates (including DST transitions), then save or share the permalink for attendees.',
  },
  {
    question: 'Which IANA zones should I use for exact conversions?',
    answer:
      'Use America/Argentina/Buenos_Aires for Buenos Aires and Europe/Madrid for Madrid to guarantee precise results in the converter.',
  },
];

const links = [
  {
    name: 'Auckland → Los Angeles',
    path: `/${PATHS.timezoneFromAucklandToLosAngeles}`,
  },
  { name: 'Sydney → Santiago', path: `/${PATHS.timezoneFromSydneyToSantiago}` },
];

const howItWorks = [
  'You enter an origin time using city name, common abbreviation, or the IANA identifier.',
  'The tool maps each input to IANA zones (America/Argentina/Buenos_Aires → Europe/Madrid) and computes offsets from UTC.',
  'DST rules are applied for the chosen date so the result is accurate whether Madrid is on CET or CEST.',
  'Output formats include 12h, 24h, ISO and custom formats; human-friendly labels are added for quick context.',
];

const ssData = {
  text: 'Quickly compare local time between Buenos Aires and Madrid — perfect for meetings and travel.',
  hashtags: 'TimeConversion,BuenosAires,Madrid,Scheduling',
  title: 'Buenos Aires ↔ Madrid Time Converter',
};

const title = 'Buenos Aires (ART) → Madrid (CET/CEST) Time';
const description =
  'Convert time between Buenos Aires and Madrid — 4–5 hour difference depending on DST. Fast, accurate, and easy to share.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live and custom time modes',
      'Multiple output formats (12h, 24h, ISO, custom)',
      'Time segment labels for human context',
      'Per-card actions: Swap, Copy, Jet Lag Planner, DST Checker',
      'Support for city names, abbreviations and IANA codes',
    ],
    steps: [
      {
        name: 'Select origin',
        description: 'Enter Buenos Aires by city, abbreviation, or IANA code.',
      },
      {
        name: 'Add destination',
        description:
          'Add Madrid and any other destinations to compare side-by-side.',
      },
      {
        name: 'Choose mode',
        description:
          'Switch between Live clocks or pick a Custom date/time for planning.',
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
  head: 'Buenos Aires ↔ Madrid — quick local time checks',
  subHead:
    'Compare local hours across hemispheres. Use Live mode for real-time clocks or Custom mode to verify times around DST changes.',
  featuresHead: 'Why this converter helps',
  tipsHead: 'Quick tips & historical notes',
  faqsHead: 'Frequently asked',
  linksHead: 'Pacific & South America Links',
  howItWorksHead: 'How the converter calculates time',
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
    originTimeZone: 'Buenos Aires@@America/Argentina/Buenos_Aires',
    destinationTimeZone: 'Madrid@@Europe/Madrid',
  },
});
