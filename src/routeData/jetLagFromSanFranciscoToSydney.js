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
    title: 'Step 1: Input Your Flight Details',
    description:
      'Enter your San Francisco departure and Sydney arrival times, along with your typical sleep patterns.',
  },
  {
    icon: (
      <FaMoon
        className={styles.stepIcon}
        aria-label="Sleep schedule adjustment"
      />
    ),
    title: 'Step 2: Review Sleep Recommendations',
    description:
      'Get science-based guidance on when to sleep and wake during your transition across the Pacific.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Timeline selection" />
    ),
    title: 'Step 3: Choose Your Planning Perspective',
    description:
      'Switch between pre-departure and post-arrival views to see different phases of your adjustment plan.',
  },
  {
    icon: <FaFileAlt className={styles.stepIcon} aria-label="Download plan" />,
    title: 'Step 4: Download Your Custom Plan',
    description:
      'Export your personalized PDF plan for reference during your travels to Australia.',
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
      'Uses proven chronobiology techniques to ease your transition across 18-20 time zones.',
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
      'Sydney is 18-20 hours ahead of San Francisco. Begin adjusting your schedule 5-6 days before departure.',
  },
  {
    title: 'Flight Duration Consideration',
    description:
      'The 14+ hour flight duration offers significant sleep opportunity if timed correctly with your destination time zone.',
  },
  {
    title: 'Arrival Day Approach',
    description:
      'Upon landing, seek afternoon sunlight in Sydney to help reset your internal clock to local time.',
  },
  {
    title: 'Hydration Priority',
    description:
      'The long flight over the Pacific requires extra hydration - drink water consistently throughout the journey.',
  },
];

const faqs = [
  {
    question: 'How severe is jet lag on San Francisco-Sydney flights?',
    answer:
      'The 18-20 hour time difference is one of the most challenging, typically requiring 5-7 days of adjustment for most travelers.',
  },
  {
    question: 'What is the best flight time for minimizing jet lag?',
    answer:
      'Evening departures from San Francisco often work well, allowing you to sleep during the flight and arrive refreshed in Sydney morning.',
  },
  {
    question: 'Should I use sleep aids on this long flight?',
    answer:
      'Our planner provides specific recommendations about sleep aids and natural alternatives based on your personal preferences and flight timing.',
  },
  {
    question: 'How does daylight saving affect the time difference?',
    answer:
      'When both locations observe daylight saving, the difference is 18 hours. When only Australia observes it, the difference becomes 20 hours. Our tool automatically adjusts for these variations.',
  },
];

const links = [
  {
    name: 'Sydney → Los Angeles',
    path: `/${PATHS.jetLagFromSydneyToLosAngeles}`,
  },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.jetLagFromLosAngelesToSydney}`,
  },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
];

const howItWorks = [
  'Analyzes your specific flight schedule and sleep patterns',
  'Uses light exposure therapy recommendations to reset circadian rhythms',
  'Incorporates strategic meal timing to support internal clock adjustment',
  'Provides hydration and activity recommendations for the long flight',
  'Based on sleep medicine research and travel physiology studies',
];

const ssData = {
  text: 'Conquer jet lag on your San Francisco to Sydney flight with a personalized science-based plan!',
  hashtags: 'JetLag,TravelTips,SanFranciscoSydney',
  title: 'San Francisco-Sydney Jet Lag Planner',
};

const title = 'San Francisco to Sydney Jet Lag Planner';
const description =
  'Science-based plan to minimize jet lag on San Francisco-Sydney flights. Manage 18-20 hour time difference with personalized sleep schedule adjustments.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized jet lag prevention strategy',
      'Evidence-based sleep schedule adjustments',
      'PDF export for travel reference',
      'Light exposure and meal timing recommendations',
    ],
    steps: [
      {
        name: 'Enter flight information',
        description:
          'Input your San Francisco departure and Sydney arrival details',
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
  head: 'San Francisco to Sydney Jet Lag Planner',
  subHead:
    'Create your personalized plan to minimize jet lag on this trans-Pacific journey across 18-20 time zones',
  featuresHead: 'Why Our Approach Works',
  tipsHead: 'San Francisco-Sydney Specific Tips',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'US West Coast to Australia',
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
    departureTZ: 'San Francisco@@America/Los_Angeles',
    destinationTZ: 'Sydney@@Australia/Sydney',
    flightDuration: 32.5,
  },
});
