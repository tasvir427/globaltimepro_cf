import {
  FaCity,
  FaClock,
  FaShareAlt,
  FaHistory,
  FaBusinessTime,
} from 'react-icons/fa';
import {
  TbPlaneTilt,
  TbBuildingCastle,
  TbTimeDuration45,
} from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbBuildingCastle
        className={styles.stepIcon}
        aria-label="Set London time"
      />
    ),
    title: 'Configure London Time (GMT/BST)',
    description:
      'Begin with London time - the historical home of Greenwich Mean Time. Our tool automatically handles the GMT/BST transition that impacts the 4.5-5.5 hour difference with Delhi.',
  },
  {
    icon: (
      <FaCity className={styles.stepIcon} aria-label="Add Delhi destination" />
    ),
    title: 'Select Delhi (IST)',
    description:
      'Delhi runs on India Standard Time (IST) - a unique half-hour offset timezone established in 1906. Add Mumbai, Bangalore or other Indian tech hubs for regional comparisons.',
  },
  {
    icon: (
      <TbTimeDuration45
        className={styles.stepIcon}
        aria-label="Time difference analysis"
      />
    ),
    title: 'Analyze the 4.5-5.5 Hour Gap',
    description:
      'Study the unique half-hour time difference that creates distinctive scheduling patterns different from full-hour offset timezones.',
  },
  {
    icon: (
      <FaBusinessTime
        className={styles.stepIcon}
        aria-label="Business optimization"
      />
    ),
    title: 'Optimize Commonwealth Business Hours',
    description:
      'Leverage the substantial morning overlap for UK-India business, outsourcing, and remote team coordination.',
  },
];

const features = [
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical context"
      />
    ),
    title: 'Colonial Time Legacy Tools',
    description:
      'Understand the historical context of Indian time standardization under British rule and how it evolved to current IST.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.featureIcon}
        aria-label="Flight planning"
      />
    ),
    title: 'Long-Haul Flight Preparation',
    description:
      'Plan for the 8-9 hour flights between Heathrow and Delhi with integrated jet lag analysis for the 4.5-5.5 hour time shift.',
  },
  {
    icon: (
      <FaShareAlt
        className={styles.featureIcon}
        aria-label="Team coordination"
      />
    ),
    title: 'Outsourcing Team Synchronization',
    description:
      'Critical for London-based companies coordinating with Delhi outsourcing centers, tech teams, and customer service operations.',
  },
  {
    icon: (
      <FaClock
        className={styles.featureIcon}
        aria-label="Precise time handling"
      />
    ),
    title: 'Half-Hour Offset Precision',
    description:
      "Accurate handling of India's unique UTC+5:30 offset and Britain's GMT/BST transitions with 30-minute precision.",
  },
];

const tips = [
  {
    title: 'Optimal Business Overlap Windows',
    description:
      'The golden hours are 8:30-11:30 AM London time (1-4 PM Delhi) - maximizing productive overlap before Delhi teams wrap up and after London morning standups.',
  },
  {
    title: 'Historical Time Evolution',
    description:
      'India adopted IST in 1906, choosing 82.5°E longitude (near Allahabad) as the central meridian. The 30-minute offset from full hours was a compromise between Bombay and Calcutta time.',
  },
  {
    title: 'Monsoon Season Considerations',
    description:
      'During July-September monsoon, account for potential Delhi infrastructure delays when scheduling critical virtual meetings from London.',
  },
  {
    title: 'Cultural & Holiday Awareness',
    description:
      'Coordinate around major Indian festivals (Diwali, Holi) and UK bank holidays. Diwali dates change annually based on lunar calendar.',
  },
  {
    title: 'British Summer Time Impact',
    description:
      'The time difference shrinks from 5.5 to 4.5 hours during British Summer Time (late March to late October), creating seasonal scheduling adjustments.',
  },
];

const faqs = [
  {
    question: 'Why does India have a 30-minute time offset?',
    answer:
      'India Standard Time (IST) uses UTC+5:30, based on 82.5°E longitude. The 30-minute offset was a historical compromise between Bombay Time (UTC+4:51) and Calcutta Time (UTC+5:54) during British rule.',
  },
  {
    question: 'What is the actual time difference between London and Delhi?',
    answer:
      'Delhi is 4.5 hours ahead of London during British Summer Time (BST) and 5.5 hours ahead during Greenwich Mean Time (GMT) in winter.',
  },
  {
    question: 'How does this compare to other UK-India city pairs?',
    answer:
      'The same time difference applies across all of India due to the single time zone policy. London to Mumbai, Bangalore, or Chennai all maintain the same 4.5-5.5 hour difference.',
  },
  {
    question: 'What are the best times for London-Delhi team standups?',
    answer:
      '8:30-9 AM London time (1-1:30 PM Delhi) works well, catching both teams in their productive morning/midday periods without being too early or late for either.',
  },
  {
    question: 'How does daylight saving affect UK-India coordination?',
    answer:
      'British Summer Time creates a 4.5-hour difference (March-October), while GMT creates a 5.5-hour difference. India does not observe daylight saving, providing consistency from the Delhi side.',
  },
  {
    question: 'What about the UK-India historical time relationship?',
    answer:
      'During British rule, India had multiple time zones. The current single time zone was established post-independence but retained the 30-minute offset chosen during colonial administration.',
  },
];

const links = [
  {
    name: 'Berlin → São Paulo',
    path: `/${PATHS.timezoneFromBerlinToSaoPaulo}`,
  },
  {
    name: 'Frankfurt → Singapore',
    path: `/${PATHS.timezoneFromFrankfurtToSingapore}`,
  },
  {
    name: 'Zurich → Hong Kong',
    path: `/${PATHS.timezoneFromZurichToHongKong}`,
  },
  {
    name: 'Stockholm → Bengaluru',
    path: `/${PATHS.timezoneFromStockholmToBengaluru}`,
  },
  {
    name: 'Istanbul → Bangkok',
    path: `/${PATHS.timezoneFromIstanbulToBangkok}`,
  },
];

const howItWorks = [
  'Converts between London (Europe/London IANA) with GMT/BST transitions and Delhi (Asia/Kolkata IANA) with consistent IST',
  'Calculates the unique 4.5-5.5 hour difference accounting for British Summer Time changes',
  "Handles India's fixed UTC+5:30 offset with 30-minute precision",
  'Incorporates historical time zone data from British colonial period to modern era',
  'Uses astronomical calculations for accurate sunrise/sunset comparisons between the cities',
];

const ssData = {
  text: 'Master the unique 4.5-5.5 hour time difference between London and Delhi. Essential for UK-India business, outsourcing, and historical time coordination!',
  hashtags: 'London,Delhi,TimeZone,UKIndia,Business,History',
  title: 'London to Delhi Time Converter with Historical Context',
};

const title = 'London to Delhi Time (GMT/BST to IST)';
const description =
  'Convert London to Delhi time with 4.5-5.5 hour difference. Historical insights for UK-India business and cultural coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise half-hour offset time conversion',
      'Historical time zone evolution tracking',
      'UK-India business hour optimization',
      'Seasonal daylight saving adjustments',
    ],
    steps: [
      {
        name: 'Set London time with DST awareness',
        description:
          'Configure London time accounting for GMT/BST transitions throughout the year',
      },
      {
        name: 'Select Delhi with IST precision',
        description:
          'Choose Delhi with India Standard Time UTC+5:30 fixed offset',
      },
      {
        name: 'Analyze the half-hour difference',
        description:
          'Study the unique scheduling patterns created by the 30-minute time offset',
      },
      {
        name: 'Optimize cross-continental coordination',
        description:
          'Leverage historical insights and modern business practices for optimal timing',
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
  head: 'London to Delhi Time Converter',
  subHead:
    'Bridge the 4.5-5.5 hour gap between Commonwealth capitals with deep historical context and modern business optimization for UK-India relations',
  featuresHead: 'Advanced Features for Historical and Business Coordination',
  tipsHead:
    'Strategic Insights Blending Historical Context with Modern Practice',
  faqsHead:
    'London-Delhi Time Coordination: Historical and Practical Questions',
  linksHead: 'European Cities to Asian Metropolises',
  howItWorksHead: 'Technical and Historical Implementation Details',
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
    destinationTimeZone: 'Delhi@@Asia/Kolkata',
  },
});
