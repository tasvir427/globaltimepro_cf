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
    title: 'Enter Your Flight Information',
    description:
      'Provide your Singapore departure and London arrival details, plus your typical sleep schedule.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Timeline selection" />
    ),
    title: 'Choose Your Planning View',
    description:
      'Select whether to see recommendations starting from days before departure or after arriving in London.',
  },
  {
    icon: (
      <FaCalendarAlt
        className={styles.stepIcon}
        aria-label="Personalized plan"
      />
    ),
    title: 'Receive Your Custom Schedule',
    description:
      'Get a detailed day-by-day plan with science-based techniques for the 7-hour time difference.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="PDF export" />,
    title: 'Download Your Plan',
    description:
      'Export your personalized PDF to follow during your journey from Southeast Asia to Europe.',
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
    title: 'Tailored Sleep Adjustment',
    description:
      'Custom recommendations based on your specific flight times and sleep preferences.',
  },
  {
    icon: (
      <FaMoon
        className={styles.featureIcon}
        aria-label="Scientifically backed"
      />
    ),
    title: 'Evidence-Based Methods',
    description:
      'Uses circadian rhythm science to ease the transition across 7 time zones.',
  },
  {
    icon: <FaFilePdf className={styles.featureIcon} aria-label="PDF export" />,
    title: 'Downloadable Plan',
    description:
      'Take your jet lag strategy with you in an easy-to-reference PDF format.',
  },
];

const tips = [
  {
    title: 'Westward Travel Advantage',
    description:
      'Flying from Singapore to London is easier on your body than eastward travel. Start adjusting by staying up slightly later before departure.',
  },
  {
    title: 'Flight Timing Strategy',
    description:
      'Opt for overnight flights that allow you to sleep during the journey and arrive refreshed in London morning.',
  },
  {
    title: 'Light Exposure Management',
    description:
      'Upon arrival, seek morning sunlight in London to help reset your internal clock to GMT/BST.',
  },
  {
    title: 'Hydration Focus',
    description:
      'The long 13-14 hour flight can be dehydrating. Drink water regularly and avoid excessive caffeine.',
  },
];

const faqs = [
  {
    question:
      'How significant is the 7-hour time difference between Singapore and London?',
    answer:
      'This represents a substantial change that can cause noticeable jet lag. Our planner creates a gradual adjustment strategy to minimize disruption to your sleep cycle.',
  },
  {
    question:
      'What is the best flight schedule for Singapore to London to reduce jet lag?',
    answer:
      'Evening departures from Singapore that arrive in London early morning work well, as they align with natural sleep patterns on the plane.',
  },
  {
    question:
      'How long does it typically take to adjust after arriving in London from Singapore?',
    answer:
      'Most travelers need 2-4 days to fully adapt. Our planner can help reduce this adjustment period with targeted techniques.',
  },
  {
    question: 'Does the planner account for British Summer Time changes?',
    answer:
      'Yes, the tool automatically adjusts for GMT/BST differences throughout the year based on your travel dates.',
  },
];

const links = [
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
];

const howItWorks = [
  'Calculates the precise 7-hour time difference between Singapore and London',
  'Analyzes your specific flight duration and timing patterns',
  'Applies circadian science to create gradual sleep schedule adjustments',
  'Provides light exposure recommendations specific to westward travel',
  'Generates a personalized day-by-day plan for your journey',
];

const ssData = {
  text: 'Master the Singapore to London time change with our science-based jet lag planner!',
  hashtags: 'JetLag,Singapore,London,TravelTips',
  title: 'Singapore to London Jet Lag Planner',
};

const title = 'Singapore to London Jet Lag Planner';
const description =
  'Minimize jet lag on your Singapore to London trip. Science-based plan for the 7-hour time difference. Get personalized sleep schedule adjustments.';

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
      'Specific guidance for Singapore to London route',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input departure and arrival times between Singapore and London',
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
  head: 'Singapore to London Jet Lag Planner',
  subHead:
    'Navigate the 7-hour time difference smoothly with our science-based adjustment strategy for your Southeast Asia to Europe journey',
  featuresHead: 'Key Features for Your Singapore-London Journey',
  tipsHead: 'Specialized Tips for Singapore to London Travel',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Asia to Europe Routes',
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
    departureTZ: 'Singapore@@Asia/Singapore',
    destinationTZ: 'London@@Europe/London',
    flightDuration: 7,
  },
});
