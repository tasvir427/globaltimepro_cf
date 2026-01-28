import {
  FaPlane,
  FaMoon,
  FaClock,
  FaCalendarAlt,
  FaUserClock,
  FaFilePdf,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaPlane className={styles.stepIcon} aria-label="Flight details" />,
    title: 'Enter Your Flight Details',
    description:
      'Input your Shanghai departure and San Francisco arrival times, along with your usual sleep patterns.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Timeline selection" />
    ),
    title: 'Select Planning Perspective',
    description:
      'Choose whether to view recommendations from days before departure or after arrival in San Francisco.',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="Personalized plan"
      />
    ),
    title: 'Review Your Custom Plan',
    description:
      'Receive your day-by-day schedule with scientifically-backed adjustment techniques for the 16-hour time difference.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="PDF export" />,
    title: 'Download & Implement',
    description:
      'Export your personalized PDF plan and follow the recommendations for a smoother transition between time zones.',
  },
];

const features = [
  {
    icon: (
      <FaUserClock
        className={styles.featureIcon}
        aria-label="Personalized schedule"
      />
    ),
    title: 'Personalized Sleep Strategy',
    description:
      'Get tailored recommendations based on your specific flight times and normal sleep patterns.',
  },
  {
    icon: (
      <FaMoon
        className={styles.featureIcon}
        aria-label="Scientifically backed"
      />
    ),
    title: 'Science-Based Methods',
    description:
      'Utilizes chronobiology principles to gradually adjust your circadian rhythm across 16 time zones.',
  },
  {
    icon: <FaFilePdf className={styles.featureIcon} aria-label="PDF export" />,
    title: 'Portable PDF Plan',
    description:
      'Download your complete jet lag prevention strategy to reference throughout your journey.',
  },
];

const tips = [
  {
    title: 'Pre-Adjustment Strategy',
    description:
      'Begin shifting your sleep schedule 2-3 days before departure, moving bedtime 1-2 hours later each night to align with San Francisco time.',
  },
  {
    title: 'Flight Hydration',
    description:
      'The 12-hour flight over the Pacific can be dehydrating. Drink plenty of water and avoid alcohol to minimize jet lag symptoms.',
  },
  {
    title: 'Daylight Exposure',
    description:
      'Upon arrival in San Francisco, seek afternoon sunlight to help reset your internal clock to Pacific Time.',
  },
  {
    title: 'First-Day Planning',
    description:
      'Schedule important meetings for your second day in San Francisco, allowing your body time to adjust after crossing the International Date Line.',
  },
];

const faqs = [
  {
    question:
      'How does the 16-hour time difference between Shanghai and San Francisco affect jet lag?',
    answer:
      'This is one of the most significant time zone changes possible, crossing the International Date Line and moving backward in time. Our planner creates a gradual adjustment strategy to ease this transition.',
  },
  {
    question:
      'What is the best time to fly from Shanghai to San Francisco to minimize jet lag?',
    answer:
      'Daytime flights that arrive in the afternoon San Francisco time tend to work well, as they allow for some daylight exposure upon arrival while still getting to sleep at a reasonable local time.',
  },
  {
    question:
      'How many days should I plan for adjusting to San Francisco time after leaving Shanghai?',
    answer:
      'For this significant time change, allow 3-5 days for full adjustment. Our planner provides specific daily recommendations to accelerate this process.',
  },
  {
    question:
      'Does crossing the International Date Line affect jet lag differently?',
    answer:
      'While the psychological effect of "gaining" a day is interesting, the biological impact is similar to other large time zone changes. Our planner addresses the circadian rhythm disruption specifically.',
  },
];

const links = [
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
  {
    name: 'Bengaluru → San Francisco',
    path: `/${PATHS.jetLagFromBengaluruToSanFrancisco}`,
  },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.jetLagFromMexicoCityToSeoul}`,
  },
];

const howItWorks = [
  'Calculates the precise 16-hour time difference between Shanghai and San Francisco',
  'Analyzes your flight duration and timing to create targeted recommendations',
  'Applies chronobiology principles to gradually shift your sleep-wake cycle',
  'Incorporates light exposure guidance specific to your travel direction',
  'Generates a day-by-day plan that works with your schedule rather than against it',
];

const ssData = {
  text: 'Beat jet lag on your Shanghai to San Francisco trip with this science-based planner!',
  hashtags: 'JetLag,TravelTips,Shanghai,SanFrancisco',
  title: 'Shanghai to San Francisco Jet Lag Planner',
};

const title = 'Shanghai to San Francisco Jet Lag Planner';
const description =
  'Minimize jet lag on your Shanghai to San Francisco trip. Science-based plan for the 16-hour time difference. Get personalized sleep schedule adjustments.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized jet lag prevention plan',
      'Science-based sleep schedule adjustments',
      'PDF export for easy reference',
      'Specific guidance for Shanghai to San Francisco route',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input departure and arrival times between Shanghai and San Francisco',
      },
      {
        name: 'Select planning perspective',
        description: 'Choose pre-departure or post-arrival timeline view',
      },
      {
        name: 'Review custom plan',
        description: 'Receive personalized day-by-day recommendations',
      },
      {
        name: 'Download PDF',
        description: 'Export your plan for reference during your trip',
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
  head: 'Shanghai to San Francisco Jet Lag Planner',
  subHead:
    'Cross 16 time zones and the International Date Line with minimal jet lag using our science-based adjustment plan',
  featuresHead: 'Key Features for Your Journey',
  tipsHead: 'Specialized Tips for Shanghai to San Francisco Travel',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Asia to US West Coast',
  howItWorksHead: 'The Science Behind Your Jet Lag Plan',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Shanghai@@Asia/Shanghai',
    destinationTZ: 'San Francisco@@America/Los_Angeles',
    flightDuration: -4.5,
  },
});
