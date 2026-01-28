import {
  FaExchangeAlt,
  FaShareAlt,
  FaHistory,
  FaRobot,
  FaCalendarDay,
  FaFighterJet,
} from 'react-icons/fa';
import { TbPyramid, TbBuildingCastle } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <TbPyramid className={styles.stepIcon} aria-label="Select origin" />,
    title: 'Start in Mexico City Time',
    description:
      'Enter "Mexico City" or America/Mexico_City as your origin. The tool auto-configures for Central Time with seasonal adjustments.',
  },
  {
    icon: (
      <TbBuildingCastle
        className={styles.stepIcon}
        aria-label="Add destinations"
      />
    ),
    title: 'Connect to Seoul',
    description:
      'Add "Seoul" or Asia/Seoul to see the dramatic 14-hour leap across the Pacific and International Date Line.',
  },
  {
    icon: (
      <FaCalendarDay className={styles.stepIcon} aria-label="Choose mode" />
    ),
    title: 'Navigate Time Perspectives',
    description:
      'Use Live mode for real-time tracking or Custom mode to plan across the "today-tomorrow" boundary between these cities.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share results" />,
    title: 'Share Transpacific Timing',
    description:
      'Generate links that help teams understand the complex time relationship between these ancient-meets-modern civilizations.',
  },
];

const features = [
  {
    icon: <FaRobot className={styles.featureIcon} aria-label="Tech industry" />,
    title: 'Tech Industry Synchronization',
    description:
      "Coordinate between Mexico's growing tech hubs and Seoul's electronics giants, accounting for manufacturing and development cycles.",
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Swap function"
      />
    ),
    title: 'Bidirectional Cultural Bridge',
    description:
      'Instantly swap perspectives to understand how Seoul teams view Mexico City timing for mutual scheduling respect.',
  },
  {
    icon: (
      <FaFighterJet
        className={styles.featureIcon}
        aria-label="Flight planning"
      />
    ),
    title: 'Transpacific Journey Planner',
    description:
      'Plan the long-haul flight (one of the longest direct routes) with jet lag management for the 14-hour time zone shift.',
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical context"
      />
    ),
    title: 'Historical Time Context',
    description:
      'Understand how both civilizations transitioned from ancient calendar systems to modern global time coordination.',
  },
];

const tips = [
  {
    title: 'Ancient Calendars to Modern Time',
    description:
      'Mexico City inherits timekeeping from the Aztec calendar system (260-day sacred year), while Seoul comes from Korean astronomical traditions. Both now sync to global standards while preserving cultural time consciousness.',
  },
  {
    title: 'Manufacturing Supply Chain Coordination',
    description:
      "Use Mexico City's afternoon (15:00-17:00) to send production updates that arrive in Seoul morning (06:00-08:00 next day), creating seamless 24-hour workflow.",
  },
  {
    title: 'Gaming Industry Collaboration',
    description:
      "Leverage the time difference for continuous development - Mexico City teams can hand off to Seoul teams at day's end, effectively creating a 24-hour development cycle.",
  },
  {
    title: 'Academic Research Windows',
    description:
      'Schedule joint research between UNAM and Seoul National University during the brief overlap (Mexico City 16:00-18:00 = Seoul 07:00-09:00 next day).',
  },
];

const faqs = [
  {
    question:
      'Why does Mexico City to Seoul feel like time travel to tomorrow?',
    answer:
      "Seoul is 14-15 hours ahead, meaning when you're finishing work in Mexico City, Seoul is already well into the next calendar day.",
  },
  {
    question:
      'How do different work cultures affect scheduling between these cities?',
    answer:
      'Mexican business culture often has later starts and longer lunches, while Korean culture typically starts early. Our tool helps find harmonious overlap times.',
  },
  {
    question:
      "What's the best strategy for video conferences across this time gap?",
    answer:
      'Early morning in Mexico City (07:00-08:00) connects with late evening in Seoul (21:00-22:00), allowing both sides to be at their optimal times.',
  },
  {
    question: 'How do daylight saving time changes affect this route?',
    answer:
      'Mexico observes DST while South Korea does not, causing the time difference to shift between 14 and 15 hours seasonally. Our tool automatically adjusts.',
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
    name: 'Mexico City → Tokyo',
    path: `/${PATHS.timezoneFromMexicoCityToTokyo}`,
  },
  {
    name: 'Toronto → Melbourne',
    path: `/${PATHS.timezoneFromTorontoToMelbourne}`,
  },
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Converts between America/Mexico_City (CST/CDT - UTC-6/UTC-5) and Asia/Seoul (KST - UTC+9) IANA time zones',
  'Manages the 14-hour standard difference and 15-hour difference during Mexican daylight saving time',
  'Handles complex date line calculations showing correct day relationships across the Pacific',
  'Processes time using precise UTC offsets with automatic seasonal adjustment detection',
];

const ssData = {
  text: 'Bridge ancient civilizations and modern tech with Mexico City to Seoul time conversion! Perfect for transpacific business and cultural exchange. 🕐🇲🇽➡️🇰🇷',
  hashtags: 'MexicoCitySeoul,TimeZone,Transpacific,TechCollaboration',
  title: 'Mexico City to Seoul Time Converter',
};

const title = 'Mexico City to Seoul Time Converter (CST to KST)';
const description =
  'Convert Mexico City to Seoul time with 14-hour difference. Essential for tech collaboration, manufacturing, and cultural exchange across the Pacific.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Mexico City to Seoul time conversion',
      'Date line crossing and tomorrow-today relationships',
      'Tech industry and manufacturing coordination',
      'Automatic DST adjustment handling',
    ],
    steps: [
      {
        name: 'Set Mexico City as origin time zone',
        description:
          'Select America/Mexico_City or type city name to establish Central Time base',
      },
      {
        name: 'Add Seoul as destination',
        description:
          'Enter Asia/Seoul to see converted time with 14-hour difference and date change',
      },
      {
        name: 'Choose Live or Custom time mode',
        description:
          'View current times or plan future collaboration across the Pacific',
      },
      {
        name: 'Share complex timing relationships',
        description:
          'Generate links that make the tomorrow-today relationship clear for teams',
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
  head: 'Mexico City to Seoul Time Conversion',
  subHead:
    'Connect ancient Aztec and Korean civilizations through modern time coordination, bridging 14 hours across the Pacific for technology and culture',
  featuresHead: 'Transpacific Coordination Features',
  tipsHead: 'Cultural and Industrial Timing Insights',
  faqsHead: 'Mexico City-Seoul Time Questions',
  linksHead: 'North American Cross-Continental',
  howItWorksHead: 'Precision Time Zone Calculation',
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
    destinationTimeZone: 'Seoul@@Asia/Seoul',
  },
});
