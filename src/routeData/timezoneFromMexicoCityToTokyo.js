import { FaGlobeAmericas, FaSyncAlt, FaShareAlt } from 'react-icons/fa';
import { TbClock, TbPlaneTilt, TbSunset2 } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Set origin" />
    ),
    title: 'Start with Mexico City Time',
    description:
      'Enter "Mexico City" or select America/Mexico_City as your origin. Watch as the tool pre-fills with current Central Time.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.stepIcon}
        aria-label="Add Tokyo destination"
      />
    ),
    title: 'Add Tokyo as Your Destination',
    description:
      'Type "Tokyo" to select Asia/Tokyo timezone. Convert one Mexico City time to multiple Asian destinations simultaneously.',
  },
  {
    icon: (
      <FaSyncAlt
        className={styles.stepIcon}
        aria-label="Choose conversion mode"
      />
    ),
    title: 'Select Your Conversion Mode',
    description:
      'Use Live mode for real-time tracking, or Custom mode to plan meetings across the 14-15 hour time difference for future dates.',
  },
  {
    icon: (
      <FaShareAlt className={styles.stepIcon} aria-label="Share and analyze" />
    ),
    title: 'Analyze and Share Results',
    description:
      'Use action buttons to check daylight saving impacts, plan for jet lag, or share scheduling proposals with international teams.',
  },
];

const features = [
  {
    icon: (
      <TbSunset2 className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Visual Time Segment Mapping',
    description:
      'See exactly when "Business Hours" in Mexico City overlap with "Evening" in Tokyo, or when Tokyo\'s workday begins as Mexico City winds down.',
  },
  {
    icon: (
      <TbClock className={styles.featureIcon} aria-label="Multiple formats" />
    ),
    title: 'Flexible Time Formats',
    description:
      'Choose from 13+ display formats including 24-hour for business, 12-hour for casual, and ISO for technical documentation across languages.',
  },
  {
    icon: (
      <FaSyncAlt
        className={styles.featureIcon}
        aria-label="Real-time conversion"
      />
    ),
    title: 'Live vs Custom Time Modes',
    description:
      'Switch instantly between real-time clocks for current coordination or set custom times for planning future events across the international date line.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.featureIcon}
        aria-label="Travel planning"
      />
    ),
    title: 'Advanced Travel Tools',
    description:
      "Use Jet Lag Planner for the long-haul flight, DST Checker for Mexico's seasonal changes, and Swap function to reverse the conversion direction.",
  },
];

const tips = [
  {
    title: 'Business Hour Overlap Strategy',
    description:
      "Mexico City morning (08:00-10:00 CST) overlaps with Tokyo late evening (22:00-24:00 JST), creating a narrow window for urgent communications before Tokyo's business day ends.",
  },
  {
    title: 'Historical Time Synchronization',
    description:
      "Both cities have rich timekeeping histories - from Mexico City's Aztec calendar stone to Tokyo's role in establishing Japan Standard Time in 1886, bridging ancient and modern time traditions.",
  },
  {
    title: 'Daylight Saving Impact',
    description:
      'When Mexico City observes DST (April-October), the time difference reduces to 14 hours. During standard time, it expands to 15 hours, significantly affecting scheduling patterns.',
  },
  {
    title: 'Weekend Planning Advantage',
    description:
      'Schedule Mexico City Friday afternoon meetings for Tokyo Saturday morning, leveraging the weekend time difference for non-urgent weekly planning and follow-ups.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Mexico City and Tokyo?',
    answer:
      "Tokyo is typically 14-15 hours ahead of Mexico City. When it's 09:00 Monday in Mexico City, it's 23:00 Monday or 00:00 Tuesday in Tokyo, depending on daylight saving time.",
  },
  {
    question:
      'How can I schedule meetings between Mexico City and Tokyo with such a large time difference?',
    answer:
      'The most practical windows are Mexico City early morning (07:00-09:00) for Tokyo evening (21:00-23:00), or Mexico City late afternoon (16:00-17:00) for Tokyo morning (06:00-07:00).',
  },
  {
    question: 'Do both cities observe daylight saving time?',
    answer:
      'Mexico City observes DST from April to October, while Tokyo does not change clocks. This creates a 14-hour difference during Mexican summer and 15 hours during standard time.',
  },
  {
    question:
      'How does the international date line affect Mexico City to Tokyo time conversion?',
    answer:
      "Tokyo is across the date line from Mexico, so Tokyo is always ahead. When converting times, you'll often see the date change - afternoon in Mexico City is typically the next day in Tokyo.",
  },
];

const links = [
  {
    name: 'New York → Shanghai',
    path: `/${PATHS.timezoneFromNewYorkToShanghai}`,
  },
  { name: 'New York → Tokyo', path: `/${PATHS.timezoneFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tel Aviv',
    path: `/${PATHS.timezoneFromSanFranciscoToTelAvivYafo}`,
  },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.timezoneFromMexicoCityToSeoul}`,
  },
  {
    name: 'Toronto → Melbourne',
    path: `/${PATHS.timezoneFromTorontoToMelbourne}`,
  },
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Converts between America/Mexico_City (CST/CDT) and Asia/Tokyo (JST) IANA timezones',
  "Automatically adjusts for Mexico's daylight saving transitions between UTC-6 and UTC-5",
  "Maintains Tokyo's consistent UTC+9 offset throughout the year",
  'Handles complex date transitions across the 14-15 hour difference',
  'Processes multiple destination timezones simultaneously from a single Mexico City origin',
];

const ssData = {
  text: 'Master the 14-hour time difference between Mexico City and Tokyo with precise scheduling tools for business and cultural exchanges.',
  hashtags: 'MexicoCity,Tokyo,TimeZone,InternationalBusiness,CulturalExchange',
  title: 'Mexico City to Tokyo Time Converter',
};

const title = 'Mexico City to Tokyo Time (CST to JST)';
const description =
  'Convert Mexico City time to Tokyo time across 14-15 hour difference. Essential for business coordination between North America and Asia.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live time conversion between Mexico City and Tokyo',
      'Daylight saving time adjustments for CST/CDT',
      'Time segment visualization for optimal scheduling',
      'Jet lag planning for long-distance travel',
    ],
    steps: [
      {
        name: 'Set Mexico City as origin timezone',
        description:
          'Input Mexico City location or select America/Mexico_City IANA timezone',
      },
      {
        name: 'Add Tokyo as destination',
        description:
          'Select Asia/Tokyo for accurate Japan Standard Time conversion',
      },
      {
        name: 'Choose real-time or custom conversion',
        description: 'Switch between live clocks or schedule future events',
      },
      {
        name: 'Analyze time segments and share results',
        description:
          'View optimal meeting windows and generate shareable schedules',
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
  head: 'Mexico City to Tokyo Time Converter',
  subHead:
    'Bridge the 14-hour gap between North American and Asian business hubs with precision scheduling for international collaboration and cultural exchange',
  featuresHead: 'Tools for Extreme Time Zone Management',
  tipsHead: 'Expert Scheduling Across Continents',
  faqsHead: 'Mexico City-Tokyo Time Coordination FAQs',
  linksHead: 'North American Cross-Continental',
  howItWorksHead: 'Advanced Timezone Conversion Technology',
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
    originTimeZone: 'Mexico City@@America/Mexico_City',
    destinationTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
