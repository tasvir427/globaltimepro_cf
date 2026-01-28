import {
  FaGlobeAmericas,
  FaExchangeAlt,
  FaShareAlt,
  FaSyncAlt,
  FaFighterJet,
} from 'react-icons/fa';
import { TbClock, TbCalendarTime } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Select origin" />
    ),
    title: 'Set Your Zurich Base',
    description:
      'Enter "Zurich" or select Europe/Zurich as your starting time zone. The tool auto-fills for immediate conversion.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Add destinations"
      />
    ),
    title: 'Add New York Targets',
    description:
      'Type "New York" or America/New_York to see real-time conversion. Add multiple destinations for complex scheduling.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Choose Your Time Mode',
    description:
      'Use Live mode for current time or Custom to plan future meetings across the 6-hour time gap.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share results" />,
    title: 'Share & Collaborate',
    description:
      'Generate shareable links for team coordination or use copy buttons for each converted time result.',
  },
];

const features = [
  {
    icon: (
      <FaFighterJet
        className={styles.featureIcon}
        aria-label="Jet lag planner"
      />
    ),
    title: 'Jet Lag Strategy',
    description:
      'Plan your travel sleep schedule between Zurich and New York to minimize fatigue from the transatlantic flight.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.featureIcon}
        aria-label="Swap function"
      />
    ),
    title: 'Instant Role Reversal',
    description:
      'Quickly swap Zurich and New York to see the reverse time relationship for callback scheduling.',
  },
  {
    icon: (
      <TbCalendarTime
        className={styles.featureIcon}
        aria-label="Time segments"
      />
    ),
    title: 'Business Hour Overlap',
    description:
      'Identify the limited 3-hour morning overlap (Zurich 14:00-17:00 = New York 08:00-11:00) for urgent matters.',
  },
  {
    icon: (
      <FaSyncAlt className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'DST Transition Alerts',
    description:
      'Get visual indicators when daylight saving time changes affect the 6-hour difference between these cities.',
  },
];

const tips = [
  {
    title: 'Financial Market Coordination',
    description:
      'Schedule critical calls during the 2-hour window when both Swiss and NY stock exchanges are open (14:30-16:30 Zurich time).',
  },
  {
    title: 'Historical Time Alignment',
    description:
      'Before time zones were standardized in 1883, New York used local solar time while Zurich followed Berne time, creating even more complex conversions.',
  },
  {
    title: 'Evening Productivity',
    description:
      "Use Zurich's evening (18:00-21:00) for focused work while New York colleagues are still in their afternoon, ensuring uninterrupted deep work.",
  },
];

const faqs = [
  {
    question:
      'How does daylight saving time affect Zurich to New York time difference?',
    answer:
      'Both cities observe DST but transition on different dates, temporarily changing the difference from 6 to 5 hours for about 3 weeks each spring.',
  },
  {
    question: "What's the best time for Zurich-New York video conferences?",
    answer:
      'Early afternoon in Zurich (13:00-15:00) corresponds to morning in New York (07:00-09:00), ideal for starting the day together.',
  },
  {
    question: 'Can I calculate time for multiple New York offices from Zurich?',
    answer:
      'Yes, add multiple destination time zones to coordinate across Manhattan, Brooklyn, and New Jersey offices simultaneously from Switzerland.',
  },
];

const links = [
  { name: 'Mumbai → Toronto', path: `/${PATHS.timezoneFromMumbaiToToronto}` },
  {
    name: 'Istanbul → New York',
    path: `/${PATHS.timezoneFromIstanbulToNewYork}`,
  },
  {
    name: 'Bangkok → New York',
    path: `/${PATHS.timezoneFromBangkokToNewYork}`,
  },
  { name: 'Manila → New York', path: `/${PATHS.timezoneFromManilaToNewYork}` },
  { name: 'Doha → Singapore', path: `/${PATHS.timezoneFromDohaToSingapore}` },
];

const howItWorks = [
  'Converts between Europe/Zurich (CET/CEST) and America/New_York (EST/EDT) IANA time zones',
  'Automatically adjusts for daylight saving time transitions in both locations',
  'Calculates the consistent 6-hour difference (Zurich ahead) with temporary 5-hour variations',
  'Processes real-time clock data using UTC offsets for precision accuracy',
];

const ssData = {
  text: 'Master the 6-hour time gap between Zurich and New York! Perfect for financial coordination and transatlantic planning. 🕐🇨🇭➡️🇺🇸',
  hashtags: 'ZurichNewYork,TimeZone,BusinessHours,Transatlantic',
  title: 'Zurich to New York Time Converter',
};

const title = 'Zurich to New York Time Converter (CET to EST)';
const description =
  'Convert Zurich to New York time with 6-hour difference. Perfect for financial coordination, meeting planning, and travel between these global hubs.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Zurich to New York time conversion',
      'Multiple destination time zone support',
      'Daylight saving time adjustments',
      'Business hour overlap identification',
    ],
    steps: [
      {
        name: 'Set Zurich as origin time zone',
        description:
          'Select Europe/Zurich or type city name to establish base time',
      },
      {
        name: 'Add New York as destination',
        description:
          'Enter America/New_York to see converted time with 6-hour difference',
      },
      {
        name: 'Choose Live or Custom time mode',
        description:
          'View current times or plan future schedules across time zones',
      },
      {
        name: 'Share and collaborate on timing',
        description: 'Generate links or copy results for team coordination',
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
  head: 'Zurich to New York Time Conversion',
  subHead:
    'Bridge the 6-hour gap between Swiss precision and New York pace with intelligent time coordination',
  featuresHead: 'Essential Features for Zurich-New York Planning',
  tipsHead: 'Smart Scheduling Strategies',
  faqsHead: 'Zurich-New York Time Questions',
  linksHead: 'Intercontinental Business Routes',
  howItWorksHead: 'Technical Precision Behind the Conversion',
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
    originTimeZone: 'Zürich@@Europe/Zurich',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
