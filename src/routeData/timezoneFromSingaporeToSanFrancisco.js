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
      'Choose City, IANA or Abbreviation mode. Select one origin (Singapore) and one or more destinations (San Francisco + others).',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Live or custom" />,
    title: 'Live clocks or custom time',
    description:
      'Toggle Live mode to see ticking destination clocks or set a custom origin time (past/future) to convert for many destinations at once.',
  },
  {
    icon: <FaCalendarAlt className={styles.stepIcon} aria-label="Formats" />,
    title: 'Pick output formats',
    description:
      'Select one or more display formats (24h, 12h, ISO, full date, or a custom format) for all destination results.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Quick actions" />,
    title: 'Use quick actions',
    description:
      'Swap origin/destination, copy a formatted time string, open DST info for any timezone, or jump to the jet-lag planner for a selected destination.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="One-to-many" />
    ),
    title: 'One → Many conversions',
    description:
      'Convert a single origin time (live or custom) into multiple destination times in a single, scrollable view.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Format support"
      />
    ),
    title: 'Multiple display formats',
    description:
      'Show results in any combination of supported formats and copy the exact string your calendar or team prefers.',
  },
];

const tips = [
  {
    title: 'Best overlap for APAC ↔ US West',
    description:
      'Common workable overlap: San Francisco 16:00–18:00 PT ↔ Singapore 08:00–10:00 SGT (next day). Good for late-afternoon US meetings and early-morning APAC catch-ups.',
  },
  {
    title: 'Handle the date change clearly',
    description:
      'Because SGT is ahead, the Singapore date may be one day later than San Francisco. Always include both local dates in invites (e.g., “Mon 08:00 SGT / Sun 16:00 PT”).',
  },
  {
    title: 'When to use Live mode',
    description:
      'Use Live for real-time monitoring across destinations (useful during product launches or global ops coverage).',
  },
  {
    title: 'When to use Custom time',
    description:
      'Use Custom time when proposing future meeting slots across many time zones — convert a single candidate and copy multiple formatted times into an invite.',
  },
];

const faqs = [
  {
    question:
      'Why does Singapore sometimes appear a day ahead of San Francisco?',
    answer:
      'Singapore (SGT, UTC+8) is many hours ahead — converted times often fall on the next calendar day. The converter shows both local date and time to avoid confusion.',
  },
  {
    question: 'Will the converter account for Pacific daylight saving?',
    answer:
      'Yes — use the Info button on any destination card to open that timezone’s DST page for current DST status and exact offsets. The converter applies live tzdb offsets to compute results.',
  },
  {
    question: 'How do I add converted times to calendar invites?',
    answer:
      'Use one-click copy to copy a formatted time string (e.g., “08:00 SGT / 16:00 PT”) and paste it into your invite; include both local timestamps so attendees see their correct local time.',
  },
];

const links = [
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  {
    name: 'Berlin → Singapore',
    path: `/${PATHS.timezoneFromBerlinToSingapore}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
];

const howItWorks = [
  'Accepts one origin and many destinations in City, IANA, or Abbreviation mode.',
  'Uses tzdb offsets to compute accurate conversions for Live or Custom times for each destination.',
  'Displays converted destination cards with formatted date/time and a human-friendly time-slot label (morning, work AM/PM, evening, etc.).',
  'Provides quick actions: Swap, Copy formatted time, Info (open DST page), and Jet-Lag (open planner) for each destination.',
];

const ssData = {
  text: 'Singapore → San Francisco — find the best meeting window across SGT⇄PT. Instant conversions & one-click copy.',
  hashtags: 'TimeZones,RemoteWork',
  title: 'Singapore → San Francisco Time Converter',
};

const title = 'Singapore → San Francisco Time Converter';
const description =
  'Convert Singapore (SGT) → San Francisco (PT). One-to-many conversions, selectable formats, APAC–US West meeting windows, quick copy.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'One-origin to many-destination conversion (City/IANA/Abbr)',
      'Live ticking clocks or Custom time conversion',
      'Multiple output formats and custom format support',
      'Destination cards with human-friendly slot labels and quick actions (swap, copy, info, jet-lag)',
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
  head: 'Singapore → San Francisco Time Converter',
  subHead:
    'Convert Singapore (SGT) to San Francisco (PT) and multiple destinations. Use City/IANA/Abbreviation selectors, toggle Live ticking clocks or a Custom origin time, select display formats, and copy exact formatted timestamps for scheduling.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Scheduling Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Singapore and San Francisco Timezone Conversions',
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
    originTimeZone: 'Singapore@@Asia/Singapore',
    destinationTimeZone: 'San Francisco@@America/Los_Angeles',
  },
});
