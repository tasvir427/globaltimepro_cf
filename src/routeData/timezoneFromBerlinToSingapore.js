import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import {
  GiProcessor,
  GiSandsOfTime,
  GiVerticalBanner,
  GiWorld,
} from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Begin with Berlin',
    description:
      'Choose Berlin as your origin city. It uses Central European Time which switches between CET (UTC+1) and CEST (UTC+2) seasonally.',
  },
  {
    icon: (
      <GiVerticalBanner
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Destination: Singapore',
    description:
      'Select Singapore as your target location. It maintains consistent Singapore Standard Time (SGT, UTC+8) without seasonal adjustments.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Configure Time Display',
    description:
      'Switch between live synchronization or input a specific datetime to see corresponding times across these innovation capitals.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Implement Conversion Insights',
    description:
      'Apply the time conversion for tech collaboration, consider optimal meeting windows, or coordinate startup initiatives across time zones.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Innovation timing"
      />
    ),
    title: 'Startup Collaboration Optimization',
    description:
      'Specifically designed for Berlin-Singapore tech partnerships, considering both deep tech development cycles and investor meeting schedules.',
  },
  {
    icon: (
      <GiProcessor
        className={styles.featureIcon}
        aria-label="Tech collaboration"
      />
    ),
    title: 'Deep Tech Coordination Features',
    description:
      'Tailored for AI, blockchain, and biotech industries where Berlin-Singapore collaboration is growing rapidly and requires precise timing.',
  },
  {
    icon: (
      <FaRegClock
        className={styles.featureIcon}
        aria-label="Seasonal adjustments"
      />
    ),
    title: 'Automatic Seasonal Adjustment',
    description:
      "Seamlessly manages Berlin's seasonal time changes while maintaining Singapore's consistent timekeeping throughout the year.",
  },
];

const tips = [
  {
    title: 'Tech Demo Coordination',
    description:
      'When scheduling product demos between Berlin and Singapore, aim for Berlin morning (9-11 AM CET) which corresponds to Singapore afternoon (4-6 PM SGT).',
  },
  {
    title: 'Investor Meeting Windows',
    description:
      'For investor pitches, Berlin late afternoon (4-5 PM CEST) aligns with Singapore evening (10-11 PM SGT), allowing follow-up discussions the same day.',
  },
  {
    title: 'Historical Innovation Context',
    description:
      "Berlin's tech scene emerged post-reunification in the 1990s, while Singapore strategically developed its tech ecosystem since the 2000s through government initiatives.",
  },
  {
    title: 'Hackathon Planning',
    description:
      'When organizing virtual hackathons, the 6-7 hour difference enables extended coding sessions with handoffs between Berlin and Singapore teams.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Berlin and Singapore?',
    answer:
      'Singapore is 7 hours ahead of Berlin during Central European Time (CET) and 6 hours ahead during Central European Summer Time (CEST).',
  },
  {
    question: 'How does this affect tech startup collaboration?',
    answer:
      'The time difference enables near-continuous development cycles but requires careful planning for real-time collaboration between these innovation ecosystems.',
  },
  {
    question:
      'Are there optimal times for investor meetings between these hubs?',
    answer:
      'Berlin morning (9-11 AM CET) corresponds to Singapore afternoon (4-6 PM SGT), providing a good window for discussions with both European and Asian investors.',
  },
  {
    question:
      'How do cultural differences affect tech collaboration scheduling?',
    answer:
      'Consider different work culture norms, public holidays, and traditional observance periods when scheduling between German and Singaporean tech teams.',
  },
];

const links = [
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
  { name: 'Toronto → Berlin', path: `/${PATHS.timezoneFromTorontoToBerlin}` },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  {
    name: 'San Francisco → Singapore',
    path: `/${PATHS.timezoneFromSanFranciscoToSingapore}`,
  },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Utilizes IANA time zones (Europe/Berlin for Berlin, Asia/Singapore for Singapore) with accurate historical timekeeping data',
  "Automatically accommodates Berlin's seasonal time variations while maintaining Singapore's consistent UTC+8 offset",
  'Calculates the 6-7 hour differential precisely, accounting for optimal collaboration windows between tech ecosystems',
  'Provides innovation context indicators relevant to startup, AI, and deep tech industries between these cities',
  'Supports various output formats tailored to international project planning and tech collaboration needs',
];

const ssData = {
  text: 'Convert Berlin time to Singapore time! Handles 6-7 hour difference and seasonal changes. Perfect for tech and innovation collaboration.',
  hashtags: 'Berlin,Singapore,TimeZone,Tech',
  title: 'Berlin to Singapore Time Converter - CET/CEST to SGT',
};

const title = 'Berlin to Singapore Time Converter - CET/CEST to SGT';
const description =
  'Convert Berlin time to Singapore time. Handles 6-7 hour difference with automatic DST adjustment. Ideal for business and innovation collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise CET/CEST to SGT conversion',
      'Dual time viewing modes',
      'Seasonal DST automation',
      'Innovation timing indicators',
      'Multi-location comparison',
      'Instant result sharing',
      'Cross-continent scheduling',
    ],
    steps: [
      {
        name: 'Set Berlin as Origin Point',
        description:
          'Select Berlin as your starting location. It uses Central European Time (CET/CEST) with seasonal DST changes.',
      },
      {
        name: 'Add Singapore as Destination',
        description:
          'Include Singapore as your target city. It maintains Singapore Standard Time (SGT, UTC+8) consistently year-round.',
      },
      {
        name: 'Select Time Viewing Mode',
        description:
          'Choose between real-time clock display or enter a specific moment for precise conversion between these innovation hubs.',
      },
      {
        name: 'Apply Conversion Insights',
        description:
          'Utilize the results for project coordination, check optimal collaboration windows, or plan international initiatives.',
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
  head: 'Berlin to Singapore Time Converter',
  subHead:
    'Connect two leading innovation hubs with precise time conversions. Essential for tech startups, deep tech collaboration, and cross-continent entrepreneurship.',
  featuresHead: 'Innovation Ecosystem Advantages',
  tipsHead: 'Tech Collaboration Insights',
  faqsHead: 'Innovation Partnership Questions',
  linksHead: 'Other Berlin and Singapore Timezone Conversions',
  howItWorksHead: 'Precision Time Conversion System',
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
    originTimeZone: 'Berlin@@Europe/Berlin',
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
