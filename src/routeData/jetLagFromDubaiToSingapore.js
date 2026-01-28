import {
  FaPlane,
  FaClock,
  FaBed,
  FaFileAlt,
  FaMapMarkerAlt,
  FaLightbulb,
  FaUmbrellaBeach,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaMapMarkerAlt className={styles.stepIcon} />,
    title: 'Select your departure city',
    description:
      'Choose Dubai as your starting point to set your current time zone baseline.',
  },
  {
    icon: <FaMapMarkerAlt className={styles.stepIcon} />,
    title: 'Choose your destination',
    description:
      'Select Singapore to calculate the 4-hour time difference for your journey.',
  },
  {
    icon: <FaPlane className={styles.stepIcon} />,
    title: 'Enter flight details',
    description:
      'Add your departure and arrival times to personalize your jet lag plan.',
  },
  {
    icon: <FaBed className={styles.stepIcon} />,
    title: 'Share your sleep pattern',
    description:
      'Tell us your usual sleep schedule for tailored adjustment recommendations.',
  },
  {
    icon: <FaFileAlt className={styles.stepIcon} />,
    title: 'Get your plan',
    description:
      'Receive your personalized schedule for managing the time zone change.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} />,
    title: 'Time difference calculation',
    description:
      'Automatically calculates the 4-hour difference between Dubai and Singapore.',
  },
  {
    icon: <FaLightbulb className={styles.featureIcon} />,
    title: 'Light exposure guidance',
    description:
      'Suggests optimal times for light exposure to help adjust your internal clock.',
  },
  {
    icon: <FaUmbrellaBeach className={styles.featureIcon} />,
    title: 'Sleep schedule adjustment',
    description:
      'Provides gradual sleep time recommendations for easier adaptation.',
  },
];

const tips = [
  {
    title: 'Adjust gradually before travel',
    description:
      'Start shifting your sleep schedule 15-30 minutes earlier each night a few days before your trip.',
  },
  {
    title: 'Stay hydrated during flight',
    description:
      'Drink plenty of water and avoid excessive caffeine or alcohol during your journey.',
  },
  {
    title: 'Get morning sunlight in Singapore',
    description:
      'Spend time outdoors in the morning to help reset your internal clock to local time.',
  },
  {
    title: 'Avoid long naps upon arrival',
    description:
      "Keep daytime naps under 30 minutes to avoid disrupting your first night's sleep.",
  },
];

const faqs = [
  {
    question: 'What is the time difference between Dubai and Singapore?',
    answer:
      "Singapore is 4 hours ahead of Dubai. When it's 12:00 PM in Dubai, it's 4:00 PM in Singapore.",
  },
  {
    question: 'How long does jet lag typically last on this route?',
    answer:
      'Most people adjust within 2-3 days for a 4-hour time difference with proper preparation.',
  },
  {
    question: 'Should I use melatonin for this trip?',
    answer:
      'Some travelers find melatonin helpful. Consult with a healthcare professional for personalized advice.',
  },
  {
    question: "What's the best flight time to minimize jet lag?",
    answer:
      'Daytime flights often work well for this route, allowing you to arrive in the evening and sleep at local time.',
  },
];

const links = [
  { name: 'Singapore → London', path: `/${PATHS.jetLagFromSingaporeToLondon}` },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
];

const howItWorks = [
  'Calculates the 4-hour time difference between Dubai and Singapore',
  'Creates a personalized sleep adjustment schedule based on your flight times',
  'Provides light exposure recommendations to help reset your circadian rhythm',
  'Offers practical tips for hydration and activity timing',
  'Generates a downloadable plan you can reference during your trip',
];

const ssData = {
  text: 'Traveling from Dubai to Singapore? Get a personalized jet lag plan for the 4-hour time difference.',
  hashtags: 'JetLag, TravelTips',
  title: 'Dubai to Singapore Jet Lag Plan',
};

const title = 'Dubai to Singapore Jet Lag Planner - 4-Hour Time Difference';
const description =
  'Manage your sleep schedule adjustment between Dubai and Singapore. Get personalized recommendations for the 4-hour time difference.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '4-hour time difference calculation',
      'Personalized sleep schedule adjustment',
      'Light exposure timing recommendations',
      'Hydration and activity guidance',
      'Downloadable travel plan',
    ],
    steps: [
      {
        name: 'Select departure city',
        description: 'Choose Dubai as your starting location',
      },
      {
        name: 'Choose destination city',
        description: 'Select Singapore as your arrival location',
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
  head: 'Dubai to Singapore Jet Lag Planning',
  subHead:
    'Manage the 4-hour time difference with practical sleep adjustment strategies',
  featuresHead: 'Planning Features',
  tipsHead: 'Helpful Tips for Your Journey',
  faqsHead: 'Common Questions',
  linksHead: 'Asian Hub Connections',
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
    departureTZ: 'Dubai@@Asia/Dubai',
    destinationTZ: 'Singapore@@Asia/Singapore',
    flightDuration: 11,
  },
});
