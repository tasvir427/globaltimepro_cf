import {
  FaPlane,
  FaClock,
  FaBed,
  FaFileAlt,
  FaMapMarkerAlt,
  FaLightbulb,
  FaRegClock,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaMapMarkerAlt className={styles.stepIcon} />,
    title: 'Select Chicago as your origin',
    description: 'Choose Chicago to set your current time zone (Central Time).',
  },
  {
    icon: <FaMapMarkerAlt className={styles.stepIcon} />,
    title: 'Select Rome as your destination',
    description: 'Choose Rome to calculate the 7-hour time difference.',
  },
  {
    icon: <FaPlane className={styles.stepIcon} />,
    title: 'Enter your flight details',
    description: 'Add your departure and arrival times to customize your plan.',
  },
  {
    icon: <FaBed className={styles.stepIcon} />,
    title: 'Share your sleep habits',
    description:
      'Tell us your usual sleep schedule for personalized recommendations.',
  },
  {
    icon: <FaFileAlt className={styles.stepIcon} />,
    title: 'Get your personalized plan',
    description:
      'Receive your customized schedule for adjusting to the time change.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} />,
    title: 'Time difference calculation',
    description: 'Calculates the 7-hour difference between Chicago and Rome.',
  },
  {
    icon: <FaLightbulb className={styles.featureIcon} />,
    title: 'Light adjustment guidance',
    description:
      'Recommends optimal light exposure times to help reset your internal clock.',
  },
  {
    icon: <FaRegClock className={styles.featureIcon} />,
    title: 'Sleep schedule planning',
    description: 'Provides a gradual adjustment plan for your sleep schedule.',
  },
];

const tips = [
  {
    title: 'Start adjusting before you travel',
    description:
      'Begin shifting your sleep schedule 2-3 days before departure by going to bed 1-2 hours earlier each night.',
  },
  {
    title: 'Stay hydrated during your flight',
    description:
      'Drink plenty of water and avoid alcohol and caffeine, which can dehydrate you.',
  },
  {
    title: 'Get sunlight upon arrival',
    description:
      'Spend time outside in the morning to help your body adjust to local time.',
  },
  {
    title: 'Avoid long naps on arrival day',
    description:
      'If you need to nap, keep it to 20-30 minutes to avoid disrupting nighttime sleep.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Chicago and Rome?',
    answer:
      "Rome is 7 hours ahead of Chicago. When it's 12:00 PM in Chicago, it's 7:00 PM in Rome.",
  },
  {
    question: 'How long does jet lag typically last on this route?',
    answer:
      'For a 7-hour time difference, most people adjust within 3-5 days with proper preparation.',
  },
  {
    question: "What's the best way to adjust to the time change?",
    answer:
      'Gradually adjusting your sleep schedule before travel and getting sunlight exposure at the right times after arrival are most effective.',
  },
  {
    question: 'Should I take melatonin for this trip?',
    answer:
      'Some travelers find melatonin helpful. Consult with a healthcare professional for personalized advice.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  { name: 'Toronto → Tokyo', path: `/${PATHS.jetLagFromTorontoToTokyo}` },
  {
    name: 'São Paulo → Frankfurt',
    path: `/${PATHS.jetLagFromSaoPauloToFrankfurt}`,
  },
];

const howItWorks = [
  'Calculates the 7-hour time difference between Chicago and Rome',
  'Creates a personalized sleep adjustment schedule based on your flight times',
  'Provides recommendations for light exposure to help reset your circadian rhythm',
  'Offers practical tips for hydration and meal timing',
  'Generates a downloadable plan you can reference during your trip',
];

const ssData = {
  text: 'Traveling from Chicago to Rome? Get a personalized jet lag plan for the 7-hour time difference.',
  hashtags: 'JetLag, TravelTips',
  title: 'Chicago to Rome Jet Lag Plan',
};

const title = 'Chicago to Rome Jet Lag Planner - 7-Hour Time Difference';
const description =
  'Adjust your sleep schedule between Chicago and Rome. Get personalized recommendations for the 7-hour time difference.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '7-hour time difference calculation',
      'Personalized sleep schedule adjustment',
      'Light exposure timing recommendations',
      'Hydration and meal timing guidance',
      'Downloadable travel plan',
    ],
    steps: [
      {
        name: 'Select departure city',
        description: 'Choose Chicago as your starting location',
      },
      {
        name: 'Choose destination city',
        description: 'Select Rome as your arrival location',
      },
      {
        name: 'Enter flight details',
        description: 'Add your departure and arrival times',
      },
      {
        name: 'Provide sleep information',
        description: 'Share your typical sleep schedule',
      },
      {
        name: 'Receive your plan',
        description: 'Get personalized recommendations for your trip',
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
  head: 'Chicago to Rome Jet Lag Planning',
  subHead:
    'Adjust to the 7-hour time difference with practical sleep strategies',
  featuresHead: 'Planning Features',
  tipsHead: 'Helpful Tips for Your Journey',
  faqsHead: 'Common Questions',
  linksHead: 'US to Europe Routes',
  howItWorksHead: 'How the Planner Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Chicago@@America/Chicago',
    destinationTZ: 'Rome@@Europe/Rome',
    flightDuration: 16,
  },
});
