import {
  FaGlobeAmericas,
  FaClock,
  FaSyncAlt,
  FaShareAlt,
  FaBed,
} from 'react-icons/fa';
import { TbClock24, TbPlaneTilt, TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Set origin" />
    ),
    title: 'Input New York Time',
    description:
      'Start with Eastern Time (EST/EDT) - the financial heartbeat of the Americas. Use live mode for real-time Wall Street tracking or custom for future planning.',
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Add Shanghai"
      />
    ),
    title: 'Target Shanghai',
    description:
      'Shanghai automatically loads as your primary destination. Add Beijing, Hong Kong, or other Asian hubs to compare regional time differences.',
  },
  {
    icon: (
      <TbClock24 className={styles.stepIcon} aria-label="Format selection" />
    ),
    title: 'Select Display Format',
    description:
      'Choose from 13+ formats. Both cities commonly use 24-hour time in business contexts, but we support all preferences.',
  },
  {
    icon: <FaSyncAlt className={styles.stepIcon} aria-label="Mode toggle" />,
    title: 'Activate Live Tracking',
    description:
      'Toggle between live synchronization for real-time coordination or custom time for planning quarterly reviews and investor meetings.',
  },
];

const features = [
  {
    icon: (
      <TbPlaneTilt className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Cross-Pacific Work Windows',
    description:
      'Identify the narrow 2-3 hour overlap when both New York morning and Shanghai evening offices are active for urgent matters.',
  },
  {
    icon: (
      <FaShareAlt
        className={styles.featureIcon}
        aria-label="Share functionality"
      />
    ),
    title: 'Board Meeting Scheduler',
    description:
      'Generate and share optimal times for global team syncs between NYSE and SSE trading hours.',
  },
  {
    icon: (
      <FaBed className={styles.featureIcon} aria-label="Jet lag planning" />
    ),
    title: '14-Hour Flight Prep',
    description:
      'Plan for the significant 12-13 hour time difference and 14+ hour flight duration with integrated jet lag strategies.',
  },
  {
    icon: <FaClock className={styles.featureIcon} aria-label="DST handling" />,
    title: 'Complex DST Management',
    description:
      "Automatically handles New York's DST changes while accounting for China's single time zone policy nationwide.",
  },
];

const tips = [
  {
    title: 'Financial Market Overlap',
    description:
      'The only trading hour overlap occurs briefly from 9:30-10:30 PM Shanghai time (9:30-10:30 AM NY). Critical for dual-listed companies and global funds.',
  },
  {
    title: 'Historical Context',
    description:
      'China standardized to a single time zone (CST) in 1949 for national unity, creating unique challenges for western coordination. Shanghai operates on the same time as Beijing despite being 1000km west.',
  },
  {
    title: 'Cultural Timing Awareness',
    description:
      'Schedule Shanghai calls before their lunch (11:30 AM-1 PM) or after 2 PM. Avoid late evening calls in Shanghai (after 8 PM) as it conflicts with family time.',
  },
  {
    title: 'Quarter-End Planning',
    description:
      'Align financial reporting schedules considering the 12-13 hour difference during critical periods like month-end and quarterly closures.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between New York and Shanghai?',
    answer:
      "Shanghai is 12 hours ahead of New York during Standard Time and 13 hours ahead during Daylight Saving Time. When it's 9 AM in New York, it's 9 PM or 10 PM in Shanghai.",
  },
  {
    question: 'Why does China have only one time zone?',
    answer:
      'China adopted a single time zone (China Standard Time) in 1949 for national unity and administrative simplicity, despite spanning what would naturally be five time zones.',
  },
  {
    question:
      'What are the best times for New York-Shanghai video conferences?',
    answer:
      'The optimal window is 8-9 AM New York time (8-9 PM Shanghai) when both sides are typically in the office, or 6-7 PM New York time (6-7 AM Shanghai) for catching Shanghai early arrivals.',
  },
  {
    question: "How does the tool handle China's no-DST policy?",
    answer:
      "Our tool automatically accounts for China's consistent time zone while adjusting for New York's DST changes, ensuring accurate 12 or 13-hour differences throughout the year.",
  },
  {
    question: 'What about public holidays in both financial centers?',
    answer:
      'While we focus on time conversion, be aware of major holidays like Chinese New Year (variable Jan/Feb) and US holidays that can impact business operations in both hubs.',
  },
];

const links = [
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
  'Converts between New York (America/New_York IANA) and Shanghai (Asia/Shanghai IANA)',
  'Accounts for EST/EDT transitions in New York while maintaining consistent CST in Shanghai',
  'Calculates 12-hour standard difference or 13-hour DST difference automatically',
  'Uses geographic coordinates to ensure accurate time zone boundaries',
  'Incorporates historical time zone data for accurate past and future conversions',
];

const ssData = {
  text: 'Master the 12-13 hour time difference between New York and Shanghai. Essential for global business, finance, and cross-Pacific coordination!',
  hashtags: 'NYC,Shanghai,TimeZone,GlobalBusiness,Finance',
  title: 'New York to Shanghai Time Converter',
};

const title = 'New York to Shanghai Time (EST to CST)';
const description =
  'Convert NY to Shanghai time with 12-13 hour difference. Perfect for US-China business, finance, and global team coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise time conversion between major financial hubs',
      'Smart scheduling for cross-Pacific business hours',
      'DST-aware calculations for accurate planning',
      'Multi-format time displays for global teams',
    ],
    steps: [
      {
        name: 'Set New York time zone',
        description:
          'Input Eastern Time accounting for daylight saving changes',
      },
      {
        name: 'Select Shanghai destination',
        description: 'Choose Shanghai with consistent China Standard Time',
      },
      {
        name: 'Configure display preferences',
        description:
          'Select from multiple time formats suitable for international business',
      },
      {
        name: 'Analyze time differences',
        description:
          'View optimal meeting windows and scheduling recommendations',
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
  head: 'New York to Shanghai Time Converter',
  subHead:
    "Bridge the 12-13 hour trans-Pacific divide between the world's financial capitals with intelligent scheduling and cultural awareness",
  featuresHead: 'Advanced Features for Global Business Coordination',
  tipsHead: 'Strategic Insights for US-China Business Relations',
  faqsHead: 'New York-Shanghai Time Coordination Questions',
  linksHead: 'North American Cross-Continental',
  howItWorksHead: 'Technical Implementation Details',
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
    originTimeZone: 'New York@@America/New_York',
    destinationTimeZone: 'Shanghai@@Asia/Shanghai',
  },
});
