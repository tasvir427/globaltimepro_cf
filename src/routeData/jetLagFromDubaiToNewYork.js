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
      'Input your Dubai departure and New York arrival times along with your typical sleep patterns.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Timeline selection" />
    ),
    title: 'Select Planning Approach',
    description:
      'Choose to view recommendations from days before departure or after arriving in New York.',
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
      'Receive your day-by-day schedule with science-based techniques for the 9-hour time difference.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="PDF export" />,
    title: 'Download & Implement',
    description:
      'Export your personalized PDF plan and follow the recommendations for your transatlantic journey.',
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
    title: 'Custom Sleep Strategy',
    description:
      'Tailored recommendations based on your specific flight schedule and sleep habits.',
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
      'Uses circadian rhythm principles to ease the transition across 9 time zones.',
  },
  {
    icon: <FaFilePdf className={styles.featureIcon} aria-label="PDF export" />,
    title: 'Portable PDF Plan',
    description:
      'Download your complete jet lag prevention strategy for easy reference.',
  },
];

const tips = [
  {
    title: 'Evening Departure Advantage',
    description:
      'Opt for evening flights from Dubai to align with sleep patterns during the 14-hour journey to New York.',
  },
  {
    title: 'Gradual Sleep Adjustment',
    description:
      'Start shifting your sleep schedule 2-3 days before departure, moving bedtime earlier each night.',
  },
  {
    title: 'Arrival Daylight Strategy',
    description:
      'Upon landing in New York, seek afternoon sunlight to help reset your internal clock to Eastern Time.',
  },
  {
    title: 'Hydration Management',
    description:
      'The long desert-to-city transition requires extra hydration. Avoid alcohol and caffeine during flight.',
  },
];

const faqs = [
  {
    question:
      'How does the 9-hour time difference between Dubai and New York affect jet lag?',
    answer:
      'This significant time change can disrupt sleep patterns considerably. Our planner creates a gradual adjustment strategy to minimize impact.',
  },
  {
    question:
      'What is the best time to fly from Dubai to New York for reducing jet lag?',
    answer:
      'Evening departures from Dubai that arrive in New York morning allow for sleep during flight and daylight exposure upon arrival.',
  },
  {
    question:
      'How many days should I plan for adjusting to New York time after leaving Dubai?',
    answer:
      'Allow 3-4 days for full adjustment. Our planner provides specific daily recommendations to accelerate this process.',
  },
  {
    question:
      'Does the planner account for seasonal time changes in both locations?',
    answer:
      'Yes, the tool automatically adjusts for daylight saving time changes in New York and any seasonal variations.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
];

const howItWorks = [
  'Calculates the precise 9-hour time difference between Dubai and New York',
  'Analyzes your flight duration and timing to create targeted recommendations',
  'Applies chronobiology principles to gradually shift your sleep-wake cycle',
  'Incorporates light exposure guidance specific to your travel direction',
  'Generates a day-by-day plan that works with your schedule',
];

const ssData = {
  text: 'Beat jet lag on your Dubai to New York trip with this science-based planner!',
  hashtags: 'JetLag,Dubai,NewYork,TravelTips',
  title: 'Dubai to New York Jet Lag Planner',
};

const title = 'Dubai to New York Jet Lag Planner';
const description =
  'Minimize jet lag on your Dubai to New York trip. Science-based plan for the 9-hour time difference. Get personalized sleep schedule adjustments.';

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
      'Specific guidance for Dubai to New York route',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input departure and arrival times between Dubai and New York',
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
  head: 'Dubai to New York Jet Lag Planner',
  subHead:
    'Navigate the 9-hour time difference smoothly with our science-based adjustment strategy for your Middle East to USA journey',
  featuresHead: 'Key Features for Your Dubai-New York Journey',
  tipsHead: 'Specialized Tips for Dubai to New York Travel',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Middle East to US Routes',
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
    departureTZ: 'Dubai@@Asia/Dubai',
    destinationTZ: 'New York@@America/New_York',
    flightDuration: 6,
  },
});
