import {
  FaPlane,
  FaMoon,
  FaClock,
  FaFileAlt,
  FaFlask,
  FaUserCheck,
  FaDownload,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaPlane className={styles.stepIcon} aria-label="Enter flight details" />
    ),
    title: 'Step 1: Input Your Flight Information',
    description:
      'Enter your New York departure and Tokyo arrival details, plus your regular sleep-wake cycle.',
  },
  {
    icon: (
      <FaMoon className={styles.stepIcon} aria-label="Sleep adjustment plan" />
    ),
    title: 'Step 2: Review Sleep Schedule Adjustments',
    description:
      'Get scientifically-grounded recommendations for gradually shifting your sleep pattern before travel.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Timeline selection" />
    ),
    title: 'Step 3: Select Your Planning Perspective',
    description:
      'Toggle between pre-departure preparation and post-arrival adjustment views for comprehensive planning.',
  },
  {
    icon: <FaFileAlt className={styles.stepIcon} aria-label="Download plan" />,
    title: 'Step 4: Download Your Personalized Plan',
    description:
      'Export your custom PDF itinerary with all recommendations for your journey to Japan.',
  },
];

const features = [
  {
    icon: (
      <FaFlask
        className={styles.featureIcon}
        aria-label="Science-based methods"
      />
    ),
    title: 'Research-Backed Methodology',
    description:
      'Employs proven chronobiology techniques to ease your transition across 13-14 time zones.',
  },
  {
    icon: (
      <FaUserCheck
        className={styles.featureIcon}
        aria-label="Personalized schedule"
      />
    ),
    title: 'Customized To Your Itinerary',
    description:
      'Creates a tailored plan based on your specific flight schedule and sleep preferences.',
  },
  {
    icon: <FaDownload className={styles.featureIcon} aria-label="PDF export" />,
    title: 'Portable Reference',
    description:
      'Download your complete plan for easy access during your international travels.',
  },
];

const tips = [
  {
    title: 'Time Difference Strategy',
    description:
      'Tokyo is 13-14 hours ahead of New York. Begin adjusting your schedule 5-6 days before departure.',
  },
  {
    title: 'Flight Timing Consideration',
    description:
      'The 13+ hour flight duration offers significant sleep opportunity if aligned with your destination time zone.',
  },
  {
    title: 'First Day Approach',
    description:
      'Upon arrival, seek morning light exposure in Tokyo to help reset your circadian rhythm to local time.',
  },
  {
    title: 'Hydration Strategy',
    description:
      'The long flight and cabin conditions require conscious hydration - drink water consistently throughout.',
  },
];

const faqs = [
  {
    question: 'How severe is jet lag on New York-Tokyo flights?',
    answer:
      'The 13-14 hour time difference is one of the most challenging, typically requiring 5-7 days of adjustment for most travelers.',
  },
  {
    question: 'What is the best flight time for minimizing jet lag?',
    answer:
      'Late afternoon departures from New York often work well, allowing you to sleep during the flight and arrive in the evening Tokyo time.',
  },
  {
    question: 'Should I use melatonin for this significant time change?',
    answer:
      'Melatonin can be particularly effective for eastward travel. Our planner provides specific timing recommendations based on your flight schedule.',
  },
  {
    question: 'How does daylight saving time affect the time difference?',
    answer:
      'When New York is on EDT (Daylight Time), the difference is 13 hours. During EST (Standard Time), it becomes 14 hours. Our tool automatically accounts for these changes.',
  },
];

const links = [
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Toronto → Tokyo', path: `/${PATHS.jetLagFromTorontoToTokyo}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
];

const howItWorks = [
  'Analyzes your specific flight schedule and personal sleep patterns',
  'Uses strategic light exposure recommendations to reset your internal clock',
  'Incorporates meal timing strategies to support circadian rhythm adjustment',
  'Provides hydration and activity recommendations for the extended flight',
  'Based on sleep science research and travel medicine principles',
];

const ssData = {
  text: 'Master jet lag on your New York to Tokyo flight with a personalized science-based plan!',
  hashtags: 'JetLag,TravelTips,NewYorkTokyo',
  title: 'New York-Tokyo Jet Lag Planner',
};

const title = 'New York to Tokyo Jet Lag Planner';
const description =
  'Science-based plan to conquer jet lag on New York-Tokyo flights. Manage 13-14 hour time difference with personalized sleep schedule adjustments.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized jet lag prevention strategy',
      'Research-based sleep schedule adjustments',
      'PDF export for travel reference',
      'Light exposure and meal timing recommendations',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input your New York departure and Tokyo arrival information',
      },
      {
        name: 'Review sleep adjustments',
        description:
          'See recommended sleep schedule changes before and after travel',
      },
      {
        name: 'Select planning perspective',
        description:
          'Choose between pre-departure or post-arrival focused planning',
      },
      {
        name: 'Download customized plan',
        description: 'Save your personalized jet lag prevention strategy',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.jl.json',
  });
};

export const getData = (page) => ({
  head: 'New York to Tokyo Jet Lag Planner',
  subHead:
    'Create your personalized plan to conquer jet lag on this trans-Pacific journey across 13-14 time zones',
  featuresHead: 'Why Our Approach Works',
  tipsHead: 'New York-Tokyo Specific Tips',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'US to Japan Routes',
  howItWorksHead: 'The Science Behind Your Plan',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'New York@@America/New_York',
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 28,
  },
});
