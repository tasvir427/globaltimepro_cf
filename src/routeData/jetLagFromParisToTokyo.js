import {
  RiFlightTakeoffLine,
  RiMoonClearLine,
  RiCalendarScheduleLine,
  RiFileDownloadLine,
  RiMentalHealthLine,
  RiUserSettingsLine,
  RiDownloadLine,
} from 'react-icons/ri';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <RiFlightTakeoffLine
        className={styles.stepIcon}
        aria-label="Enter journey details"
      />
    ),
    title: 'Chart Your Paris-Tokyo Journey',
    description:
      'Input your departure from Charles de Gaulle and arrival at Narita/Haneda, along with your natural sleep rhythm.',
  },
  {
    icon: (
      <RiMoonClearLine
        className={styles.stepIcon}
        aria-label="Sleep optimization"
      />
    ),
    title: 'Discover Your Sleep Strategy',
    description:
      'Receive tailored recommendations for gradually aligning your sleep pattern with Tokyo time before you depart.',
  },
  {
    icon: (
      <RiCalendarScheduleLine
        className={styles.stepIcon}
        aria-label="Adaptation timeline"
      />
    ),
    title: 'Map Your Adaptation Journey',
    description:
      'Explore different planning perspectives to see how your body can smoothly transition between time zones.',
  },
  {
    icon: (
      <RiFileDownloadLine
        className={styles.stepIcon}
        aria-label="Personalized guide"
      />
    ),
    title: 'Secure Your Travel Companion',
    description:
      'Download your customized guide to navigate the time difference with confidence throughout your trip.',
  },
];

const features = [
  {
    icon: (
      <RiMentalHealthLine
        className={styles.featureIcon}
        aria-label="Circadian science"
      />
    ),
    title: 'Circadian Rhythm Science',
    description:
      "Leverages advanced understanding of your body's internal clock to ease the 8-hour time zone transition.",
  },
  {
    icon: (
      <RiUserSettingsLine
        className={styles.featureIcon}
        aria-label="Personal adaptation"
      />
    ),
    title: 'Personalized Adaptation Plan',
    description:
      'Creates a unique strategy that respects your individual sleep patterns and flight schedule.',
  },
  {
    icon: (
      <RiDownloadLine
        className={styles.featureIcon}
        aria-label="Digital companion"
      />
    ),
    title: 'Your Digital Travel Companion',
    description:
      'Carry your personalized strategy with you throughout your journey between these iconic cities.',
  },
];

const tips = [
  {
    title: 'Embrace Gradual Adjustment',
    description:
      'Begin shifting your schedule 15-30 minutes earlier each night starting a week before departure from Paris.',
  },
  {
    title: 'Strategic Light Exposure',
    description:
      'Seek morning light in Paris before departure and evening light in Tokyo after arrival to reset your internal clock.',
  },
  {
    title: 'Hydration Strategy',
    description:
      'The 12+ hour flight demands conscious hydration - aim for 250ml water every hour awake during the flight.',
  },
  {
    title: 'First Evening in Tokyo',
    description:
      'Resist napping upon arrival and stay awake until at least 9 PM local time to accelerate adaptation.',
  },
];

const faqs = [
  {
    question:
      'What makes the Paris-Tokyo time difference particularly challenging?',
    answer:
      "The 8-hour difference means when it's evening in Paris, it's already the next morning in Tokyo, creating significant circadian disruption that requires careful planning.",
  },
  {
    question: 'How does the flight duration impact jet lag recovery?',
    answer:
      'The 12+ hour journey provides adequate time for rest if properly timed, but the eastward travel direction requires more adjustment than westward routes.',
  },
  {
    question:
      'Are there cultural considerations for managing jet lag in Japan?',
    answer:
      'Yes, understanding typical business hours and social timing in Tokyo can help you plan your adaptation strategy more effectively.',
  },
  {
    question: 'How do seasonal time changes affect this route?',
    answer:
      "When Europe observes summer time and Japan doesn't, the difference becomes 7 hours. Our system automatically adjusts for these temporal nuances.",
  },
];

const links = [
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
];

const howItWorks = [
  'Analyzes the specific chronobiological challenges of eastward travel across 8 time zones',
  'Incorporates latest research on light therapy timing for phase-advancing your circadian rhythm',
  'Considers the impact of in-flight conditions on your sleep-wake cycle during the long journey',
  'Provides specific nutritional timing recommendations to support circadian realignment',
  'Adapts strategies based on individual sleep chronotypes and flight timing specifics',
];

const ssData = {
  text: 'Master the art of time travel between Paris and Tokyo with a scientifically-grounded jet lag strategy!',
  hashtags: 'JetLagScience,ParisTokyo,TravelWellness',
  title: 'Paris-Tokyo Circadian Adaptation Guide',
};

const title = 'Paris to Tokyo Jet Lag Strategy Planner';
const description =
  'Expert circadian guidance for Paris-Tokyo travelers. Conquer the 8-hour time difference with personalized adaptation techniques and science-based scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized circadian adaptation strategy',
      'Science-based sleep schedule optimization',
      'Comprehensive travel wellness guide',
      'Cultural and temporal consideration integration',
    ],
    steps: [
      {
        name: 'Input your travel details',
        description:
          'Share your Paris departure and Tokyo arrival information along with sleep preferences',
      },
      {
        name: 'Receive circadian adaptation plan',
        description:
          'Get tailored recommendations for adjusting your internal clock',
      },
      {
        name: 'Explore adaptation timeline',
        description:
          'View different planning perspectives for your time zone transition',
      },
      {
        name: 'Download your travel guide',
        description: 'Secure your personalized strategy for the journey',
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
  head: 'Paris to Tokyo Circadian Adaptation Guide',
  subHead:
    'Navigate the 8-hour time difference with scientifically-grounded strategies tailored for your journey between these global capitals',
  featuresHead: 'Intelligent Adaptation Framework',
  tipsHead: 'Paris-Tokyo Chronobiology Insights',
  faqsHead: 'Time Zone Transition Considerations',
  linksHead: 'Europe to Japan Routes',
  howItWorksHead: 'The Science of Circadian Adaptation',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Paris@@Europe/Paris',
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 20,
  },
});
