import { FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import { FaTowerObservation } from 'react-icons/fa6';
import { GiPalette, GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Begin with Tokyo',
    description:
      'Choose Tokyo as your origin city. It maintains Japan Standard Time (JST, UTC+9) without seasonal adjustments throughout the year.',
  },
  {
    icon: (
      <FaTowerObservation
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Destination: Paris',
    description:
      'Select Paris as your target location. It observes seasonal changes between Central European Time and Central European Summer Time.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Configure Time Display',
    description:
      'Switch between live synchronization or input a specific datetime to see corresponding times across these fashion and culture capitals.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Implement Conversion Insights',
    description:
      'Apply the time conversion for event coordination, consider cultural timing nuances, or plan collaborative projects across time zones.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Cultural timing"
      />
    ),
    title: 'Cultural Timing Intelligence',
    description:
      'Specifically designed for Tokyo-Paris coordination, considering both business hours and cultural event timing across these style capitals.',
  },
  {
    icon: (
      <GiPalette
        className={styles.featureIcon}
        aria-label="Creative collaboration"
      />
    ),
    title: 'Creative Collaboration Optimization',
    description:
      'Tailored for fashion, design, and culinary industries where Tokyo-Paris collaboration is particularly significant and timing-sensitive.',
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
      "Seamlessly manages Parisian seasonal time changes while maintaining Tokyo's consistent timekeeping throughout the year.",
  },
];

const tips = [
  {
    title: 'Fashion Week Coordination',
    description:
      'When coordinating between Paris and Tokyo fashion weeks, remember the 8-9 hour difference affects show timing and media coverage schedules.',
  },
  {
    title: 'Culinary Collaboration Timing',
    description:
      'For virtual cooking classes or culinary events, Tokyo evening (7-9 PM JST) corresponds to Paris midday (11 AM-1 PM CET), creating ideal interactive windows.',
  },
  {
    title: 'Historical Time Context',
    description:
      'Japan standardized time in 1888 during Meiji modernization, while France adopted Paris Mean Time in 1891. Both have rich horological histories.',
  },
  {
    title: 'Cultural Event Planning',
    description:
      'When planning joint cultural events, consider that Paris museum hours (9:30 AM-6 PM) align with Tokyo late afternoon to evening (5:30 PM-1:30 AM).',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Tokyo and Paris?',
    answer:
      'Tokyo is 8 hours ahead of Paris during Central European Summer Time (CEST) and 9 hours ahead during Central European Time (CET). Paris observes seasonal changes while Tokyo remains consistent.',
  },
  {
    question: 'How does this affect fashion industry collaboration?',
    answer:
      'The time difference enables follow-the-sun design workflows but requires careful planning for real-time collaboration between these fashion capitals.',
  },
  {
    question:
      'Are there optimal times for virtual events between these cities?',
    answer:
      'Tokyo late morning (10-11 AM JST) corresponds to Paris early morning (2-3 AM CET), while Tokyo evening (7-8 PM JST) aligns with Paris midday (11 AM-12 PM CET).',
  },
  {
    question: 'How do cultural differences affect scheduling?',
    answer:
      'Consider different national holidays, traditional observance periods, and varying work culture norms when scheduling between Japanese and French partners.',
  },
];

const links = [
  { name: 'Tokyo → New York', path: `/${PATHS.timezoneFromTokyoToNewYork}` },
  { name: 'London → Tokyo', path: `/${PATHS.timezoneFromLondonToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Paris → Dubai', path: `/${PATHS.timezoneFromParisToDubai}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
];

const howItWorks = [
  'Utilizes IANA time zones (Asia/Tokyo for Tokyo, Europe/Paris for Paris) with accurate historical timekeeping data',
  "Automatically accommodates Parisian seasonal time variations while maintaining Tokyo's consistent UTC+9 offset",
  'Calculates the 8-9 hour differential precisely, accounting for date changes and optimal timing windows',
  'Provides cultural context indicators relevant to fashion, design, and culinary industries between these cities',
  'Supports various output formats tailored to international event planning and creative collaboration needs',
];

const ssData = {
  text: 'Convert Tokyo time to Paris time! Handles 8-9 hour difference and seasonal changes. Perfect for culture and business coordination.',
  hashtags: 'Tokyo,Paris,TimeZone,Culture',
  title: 'Tokyo to Paris Time Converter - JST to CET/CEST',
};

const title = 'Tokyo to Paris Time Converter - JST to CET/CEST';
const description =
  'Convert Tokyo time to Paris time. Handles 8-9 hour difference with automatic DST adjustment. Ideal for culture and business coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise JST to CET/CEST conversion',
      'Dual time viewing modes',
      'Seasonal DST automation',
      'Cultural timing indicators',
      'Multi-location comparison',
      'Instant result sharing',
      'Cross-cultural scheduling',
    ],
    steps: [
      {
        name: 'Set Tokyo as Origin Point',
        description:
          'Select Tokyo as your starting location. It uses Japan Standard Time (JST, UTC+9) consistently throughout the year.',
      },
      {
        name: 'Add Paris as Destination',
        description:
          'Include Paris as your target city. It switches between Central European Time and Central European Summer Time seasonally.',
      },
      {
        name: 'Select Time Viewing Mode',
        description:
          'Choose between real-time clock display or enter a specific moment for precise conversion between these cultural capitals.',
      },
      {
        name: 'Apply Conversion Insights',
        description:
          'Utilize the results for event planning, check cultural timing considerations, or coordinate international projects.',
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
  head: 'Tokyo to Paris Time Converter',
  subHead:
    'Bridge two global culture capitals with precise time conversions. Essential for fashion, design, and culinary collaboration across continents.',
  featuresHead: 'Cultural Coordination Advantages',
  tipsHead: 'Creative Industry Insights',
  faqsHead: 'Cultural Collaboration Questions',
  linksHead: 'Other Tokyo and Paris Timezone Conversions',
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
    originTimeZone: 'Tokyo@@Asia/Tokyo',
    destinationTimeZone: 'Paris@@Europe/Paris',
  },
});
