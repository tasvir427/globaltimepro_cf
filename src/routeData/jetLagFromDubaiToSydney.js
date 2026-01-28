import {
  FaPlane,
  FaMoon,
  FaClock,
  FaFileMedical,
  FaLightbulb,
  FaUserMd,
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
      'Enter your Dubai departure and Sydney arrival times, along with your typical sleep schedule.',
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
      'Get science-based guidance on when to sleep and wake during your transition across time zones.',
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
    icon: (
      <FaFileMedical className={styles.stepIcon} aria-label="Download plan" />
    ),
    title: 'Step 4: Download Your Custom Plan',
    description:
      'Export your personalized PDF plan for reference during your travels to Australia.',
  },
];

const features = [
  {
    icon: (
      <FaLightbulb
        className={styles.featureIcon}
        aria-label="Research-based methods"
      />
    ),
    title: 'Evidence-Based Approach',
    description:
      'Uses proven chronobiology techniques to ease your transition across 7-9 time zones.',
  },
  {
    icon: (
      <FaUserMd className={styles.featureIcon} aria-label="Personalized plan" />
    ),
    title: 'Tailored To Your Schedule',
    description:
      'Creates a custom plan based on your specific flight times and sleep preferences.',
  },
  {
    icon: <FaDownload className={styles.featureIcon} aria-label="PDF export" />,
    title: 'Portable Plan',
    description:
      'Download your complete itinerary for offline access during your journey.',
  },
];

const tips = [
  {
    title: 'Time Difference Strategy',
    description:
      'Sydney is 7-9 hours ahead of Dubai. Begin adjusting your schedule 4-5 days before departure.',
  },
  {
    title: 'Flight Duration Consideration',
    description:
      'The 14+ hour flight allows for significant sleep opportunity if timed correctly with your new time zone.',
  },
  {
    title: 'Arrival Day Approach',
    description:
      'Upon landing, seek afternoon sunlight in Sydney to help reset your internal clock to local time.',
  },
  {
    title: 'Hydration Priority',
    description:
      'The long flight and cabin dryness require extra hydration - drink water consistently throughout.',
  },
];

const faqs = [
  {
    question: 'How severe is jet lag on Dubai-Sydney flights?',
    answer:
      'The 7-9 hour time difference and long flight duration typically cause 4-6 days of adjustment for most travelers.',
  },
  {
    question: 'What is the optimal flight time for this route?',
    answer:
      'Evening departures from Dubai align well with sleep schedules, allowing you to rest during the flight and arrive refreshed in Sydney morning.',
  },
  {
    question: 'Should I use sleep aids on this long flight?',
    answer:
      'Our planner provides specific recommendations about sleep aids and natural alternatives based on your personal preferences and flight timing.',
  },
  {
    question: 'How does daylight saving affect the time difference?',
    answer:
      'When both locations observe daylight saving, the difference is 7 hours. When only Australia observes it, the difference becomes 9 hours. Our tool automatically adjusts for these variations.',
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
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
];

const howItWorks = [
  'Analyzes your specific flight schedule and sleep patterns',
  'Uces light exposure therapy recommendations to reset circadian rhythms',
  'Incorporates strategic meal timing to support internal clock adjustment',
  'Provides hydration and activity recommendations for the long flight',
  'Based on sleep medicine research and travel physiology studies',
];

const ssData = {
  text: 'Conquer jet lag on your Dubai to Sydney flight with a personalized science-based plan!',
  hashtags: 'JetLag,TravelTips,DubaiSydney',
  title: 'Dubai-Sydney Jet Lag Planner',
};

const title = 'Dubai to Sydney Jet Lag Planner';
const description =
  'Science-based plan to minimize jet lag on Dubai-Sydney flights. Manage 7-9 hour time difference with personalized sleep schedule adjustments.';

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
        description: 'Input your Dubai departure and Sydney arrival details',
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
  head: 'Dubai to Sydney Jet Lag Planner',
  subHead:
    'Create your personalized plan to minimize jet lag on this long-haul journey across 7-9 time zones',
  featuresHead: 'Why Our Approach Works',
  tipsHead: 'Dubai-Sydney Specific Tips',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Middle East to Australia Routes',
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
    departureTZ: 'Dubai@@Asia/Dubai',
    destinationTZ: 'Sydney@@Australia/Sydney',
    flightDuration: 20,
  },
});
