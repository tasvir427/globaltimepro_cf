import {
  FaPlaneDeparture,
  FaBed,
  FaCalendarAlt,
  FaFilePdf,
  FaFlask,
  FaUserClock,
  FaDownload,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter flight details"
      />
    ),
    title: 'Step 1: Enter Your Flight Details',
    description:
      'Select your departure from London and arrival in Singapore, along with your usual sleep patterns.',
  },
  {
    icon: (
      <FaBed className={styles.stepIcon} aria-label="Adjust sleep schedule" />
    ),
    title: 'Step 2: Review Sleep Adjustments',
    description:
      'See science-based recommendations for gradually shifting your sleep schedule before departure.',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="Select timeline view"
      />
    ),
    title: 'Step 3: Choose Your Timeline View',
    description:
      'Switch between "Days Until Departure" or "After Arrival" views to see different phases of your plan.',
  },
  {
    icon: (
      <FaFilePdf className={styles.stepIcon} aria-label="Download PDF plan" />
    ),
    title: 'Step 4: Download Your Plan',
    description:
      'Get your personalized PDF plan with all recommendations for easy reference during your trip.',
  },
];

const features = [
  {
    icon: (
      <FaFlask
        className={styles.featureIcon}
        aria-label="Scientifically backed methods"
      />
    ),
    title: 'Science-Backed Methods',
    description:
      'Uses chronobiology principles to minimize jet lag effects during your long-haul journey.',
  },
  {
    icon: (
      <FaUserClock
        className={styles.featureIcon}
        aria-label="Personalized schedule"
      />
    ),
    title: 'Personalized Schedule',
    description:
      'Creates a custom plan based on your specific flight times and sleep preferences.',
  },
  {
    icon: <FaDownload className={styles.featureIcon} aria-label="PDF export" />,
    title: 'PDF Export',
    description:
      'Download your complete plan for offline access during your travels.',
  },
];

const tips = [
  {
    title: 'Time Zone Preparation',
    description:
      'Singapore is 7-8 hours ahead of London. Start adjusting your schedule 3-4 days before departure.',
  },
  {
    title: 'Flight Timing Strategy',
    description:
      'Consider taking evening flights from London to maximize sleep opportunity during the flight.',
  },
  {
    title: 'First Day Strategy',
    description:
      'Upon arrival, seek morning sunlight in Singapore to help reset your circadian rhythm.',
  },
  {
    title: 'Hydration Protocol',
    description:
      'The cabin humidity is very low on long flights. Drink extra water before and during your flight.',
  },
];

const faqs = [
  {
    question:
      'How long does jet lag typically last on London-Singapore flights?',
    answer:
      'Most travelers experience 3-5 days of adjustment due to the 7-8 hour time difference and long flight duration.',
  },
  {
    question: 'What is the best time to fly to minimize jet lag?',
    answer:
      'Evening departures from London often work well, allowing you to sleep during the flight and arrive in the morning Singapore time.',
  },
  {
    question: 'Should I use melatonin for this route?',
    answer:
      'Melatonin can be effective when timed correctly. Our planner provides specific recommendations based on your flight schedule.',
  },
  {
    question: 'How does the seasonal time change affect the journey?',
    answer:
      'When the UK is on BST (Summer), the time difference is 7 hours. During GMT (Winter), it becomes 8 hours. Our tool automatically accounts for this.',
  },
];

const links = [
  { name: 'Singapore → London', path: `/${PATHS.jetLagFromSingaporeToLondon}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
];

const howItWorks = [
  'Analyzes your flight times and sleep patterns to create a personalized adjustment plan',
  'Uses light exposure recommendations to help reset your internal clock',
  'Incorporates strategic napping and sleep scheduling techniques',
  'Provides specific timing for caffeine intake and meal scheduling',
  'Based on research from sleep studies and chronobiology principles',
];

const ssData = {
  text: 'Beat jet lag on your London to Singapore flight with a science-based plan!',
  hashtags: 'JetLag,TravelTips,LondonSingapore',
  title: 'London-Singapore Jet Lag Planner',
};

const title = 'London to Singapore Jet Lag Planner';
const description =
  'Science-based plan to conquer jet lag on London-Singapore flights. 7-8 hour time difference managed with personalized schedule.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized jet lag prevention plan',
      'Science-based sleep schedule adjustments',
      'PDF export for travel reference',
      'Light exposure and activity recommendations',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input your London departure and Singapore arrival information',
      },
      {
        name: 'Review sleep schedule',
        description:
          'See recommended sleep adjustments before and after travel',
      },
      {
        name: 'Select timeline view',
        description: 'Choose between departure or arrival-focused planning',
      },
      {
        name: 'Download PDF plan',
        description: 'Save your personalized jet lag prevention plan',
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
  head: 'London to Singapore Jet Lag Planner',
  subHead:
    'Create your personalized plan to minimize jet lag on this 7-8 hour time difference journey',
  featuresHead: 'Why Our Planner Works',
  tipsHead: 'London-Singapore Specific Tips',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Europe to Asia Routes',
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
    departureTZ: 'London@@Europe/London',
    destinationTZ: 'Singapore@@Asia/Singapore',
    flightDuration: 21.5,
  },
});
