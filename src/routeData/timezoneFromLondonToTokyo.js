import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCopy,
  FaMousePointer,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer className={styles.stepIcon} aria-label="Choose mode" />
    ),
    title: 'Pick selection mode',
    description:
      'Choose City, IANA or Abbreviation mode. Select one origin (London) and one or more destinations (Tokyo + others).',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Live clocks or custom time',
    description:
      'Toggle Live mode for ticking destination clocks or enter a custom origin time (past/future) to convert across destinations.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Pick formats" />
    ),
    title: 'Choose display formats',
    description:
      'Select the output format(s) you prefer (24h, 12h, ISO, full date, or a custom format) for all destination boxes.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Use quick actions" />,
    title: 'Copy, swap, info & jet-lag',
    description:
      'Use quick actions to copy formatted times, swap origin/destination, open DST info for any timezone, or jump to the jet-lag planner.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversions',
    description:
      'Convert a single London time (live or custom) into multiple destination times in one unified view.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Format options"
      />
    ),
    title: 'Flexible output formats',
    description:
      'Show results in any supported display format and copy the exact string your team or calendar requires.',
  },
];

const tips = [
  {
    title: 'How far ahead is Tokyo?',
    description:
      'Tokyo (JST) is UTC+9 and does not use DST. London is UTC+0 (GMT) in winter and UTC+1 (BST) in summer — so Tokyo is 9 hours ahead in GMT and 8 hours ahead in BST.',
  },
  {
    title: 'Best workable window (recommended)',
    description:
      'Morning London meetings work best for Tokyo evenings. Example: London 08:00–10:00 → Tokyo 16:00–19:00 (Tokyo = London+9 when London is GMT; London+8 when BST — check DST with Info).',
  },
  {
    title: 'Cross-date clarity',
    description:
      'Because Tokyo is ahead, the converted time may fall on the next calendar day. Always show both local date + time in invites (e.g., “Mon 08:00 LON / Mon 17:00 TYO” or “Mon 08:00 LON / Tue 00:00 TYO”).',
  },
  {
    title: 'When to use Live vs Custom',
    description:
      'Use Live mode for real-time monitoring (ops, launches). Use Custom mode to propose future slots and copy many formatted times into an invite at once.',
  },
];

const faqs = [
  {
    question: 'Why do converted times sometimes shift by one hour?',
    answer:
      'London observes British Summer Time (BST), which moves London +1 hour. The converter applies live tzdb offsets — use the Info button on a destination to see current DST status and exact offsets.',
  },
  {
    question: 'Will Tokyo’s time ever change seasonally?',
    answer:
      'No—Tokyo uses Japan Standard Time (JST, UTC+9) year-round and does not observe DST. That makes Tokyo’s offset stable; London’s offset can shift by one hour due to BST.',
  },
  {
    question: 'How should I format invites for clarity?',
    answer:
      'Include both local timestamps and the timezone abbreviation (e.g., “08:00 BST / 16:00 JST”) and attach a link to the converter so attendees can confirm their local time.',
  },
];

const links = [
  { name: 'London → Sydney', path: `/${PATHS.timezoneFromLondonToSydney}` },
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  { name: 'Chicago → Tokyo', path: `/${PATHS.timezoneFromChicagoToTokyo}` },
];

const howItWorks = [
  'Accepts one origin and multiple destinations in City, IANA, or Abbreviation mode.',
  'Uses tzdb to apply current offsets (London may be GMT or BST; Tokyo is JST = UTC+9).',
  'In Live mode destination clocks tick in real time; Custom mode converts a static origin time across destinations.',
  'Destination cards include formatted date/time, timezone label, a human-friendly time-slot, and quick actions (Swap, Copy, Info, Jet-Lag).',
];

const ssData = {
  text: 'London → Tokyo — find the best EMEA↔APAC meeting window. Instant conversions & one-click copy.',
  hashtags: 'TimeZones,London,Tokyo',
  title: 'London → Tokyo Time Converter',
};

const title = 'London → Tokyo Time Converter';
const description =
  'Convert London (GMT/BST) to Tokyo (JST). Live or custom one→many conversions, clear meeting-window guidance for EMEA↔APAC, and one-click copy for invites.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversion (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Multiple display formats and custom format support',
      'Destination cards with slot labels and quick actions (swap, copy, info, jet-lag)',
    ],
    steps: [
      {
        name: 'Step 1: Pick selection mode',
        description:
          'Choose City, IANA or Abbreviation mode and select one origin plus multiple destinations.',
      },
      {
        name: 'Step 2: Live or Custom time',
        description:
          'Toggle Live mode for ticking clocks or enter a custom origin time for one→many conversions.',
      },
      {
        name: 'Step 3: Choose formats & view results',
        description:
          'Select display formats and view converted destination cards with local date/time and slot labels.',
      },
      {
        name: 'Step 4: Copy or export',
        description:
          'Copy formatted times, swap origin/destination, open DST info, or jump to the jet-lag planner for any destination.',
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
  head: 'London → Tokyo Time Converter',
  subHead:
    'Convert London (GMT/BST) to Tokyo (JST) and multiple destinations. Choose City/IANA/Abbreviation mode, use Live or Custom time, pick display formats, and copy exact formatted times for calendar invites.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Scheduling Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other London and Tokyo Timezone Conversions',
  howItWorksHead: 'How It Works',
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
    originTimeZone: 'London@@Europe/London',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
