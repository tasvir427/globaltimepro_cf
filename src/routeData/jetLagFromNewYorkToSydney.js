import {
  FaPlaneDeparture,
  FaMoon,
  FaCalendarAlt,
  FaFilePdf,
  FaSun,
} from 'react-icons/fa';
import { GiLibertyWing, GiSydneyOperaHouse } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Flight Details"
      />
    ),
    title: 'Step 1: Map Your Transpacific Journey',
    description:
      'Input your JFK/SYD flight details across the International Date Line. Our tool accounts for the unique "losing a day" phenomenon on eastbound Australia flights.',
  },
  {
    icon: (
      <FaMoon className={styles.stepIcon} aria-label="Set Sleep Schedule" />
    ),
    title: 'Step 2: Configure Your Body Clock',
    description:
      'Share your typical NYC sleep patterns. The 14-16 hour time difference (depending on daylight saving) requires careful circadian rhythm management.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Choose Timeline" />
    ),
    title: 'Step 3: Plan Your Time Jump Strategy',
    description:
      'Select your planning approach: pre-departure preparation or post-arrival recovery for one of the longest regular commercial flights in the world.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download Plan" />,
    title: 'Step 4: Get Your Survival Guide',
    description:
      'Download your personalized PDF plan with hour-by-hour recommendations for the 19+ hour flight and critical first days in Sydney.',
  },
];

const features = [
  {
    icon: (
      <GiLibertyWing
        className={styles.featureIcon}
        aria-label="Long Haul Optimized"
      />
    ),
    title: 'Ultra-Long-Haul Flight Optimized',
    description:
      'Special strategies for QF12/UA841 equivalent routes—the longest regularly scheduled passenger flights connecting North America and Australia.',
  },
  {
    icon: (
      <FaSun className={styles.featureIcon} aria-label="Seasonal Adaptation" />
    ),
    title: 'Southern Hemisphere Seasonal Adjustment',
    description:
      'Accounts for reversed seasons—flying from NYC winter to Sydney summer requires different light exposure strategies than summer-to-winter transitions.',
  },
  {
    icon: (
      <GiSydneyOperaHouse
        className={styles.featureIcon}
        aria-label="Sydney Specific"
      />
    ),
    title: 'Sydney-Specific Arrival Protocol',
    description:
      'Includes optimal times for Bondi Beach walks or Harbour Bridge climbs to maximize natural light exposure for circadian resetting.',
  },
];

const tips = [
  {
    title: 'Date Line Crossing Strategy',
    description:
      'Time your sleep to align with Sydney time as you cross the International Date Line. You\'ll "lose" a day, so mental preparation is as important as sleep planning.',
  },
  {
    title: 'Hydration for Desert Crossings',
    description:
      'The flight path over the Pacific and Australian outback is extremely arid. Start hydrating 48 hours before departure and continue through arrival.',
  },
  {
    title: 'Arrival Timing Advantage',
    description:
      'Most NYC-Sydney flights arrive early morning. Use this to your advantage by staying awake until evening Sydney time, leveraging the harbor sunrise for natural reset.',
  },
  {
    title: 'Meal Timing for Business Travelers',
    description:
      'If meeting with Sydney colleagues, gradually shift your meal times in NYC to approximate Australian business hours (late breakfast, early dinner).',
  },
];

const faqs = [
  {
    question: 'Why is NYC to Sydney jet lag considered particularly severe?',
    answer:
      'The combination of 14-16 hour time difference, 19+ hour flight duration, and International Date Line crossing creates the "perfect storm" for circadian disruption.',
  },
  {
    question:
      'How does crossing the International Date Line affect jet lag recovery?',
    answer:
      'You arrive in Sydney two calendar days after departure but only ~19 hours later. This temporal disorientation adds cognitive load to the physiological adjustment.',
  },
  {
    question: 'What is the best seat selection strategy for this route?',
    answer:
      'Window seats on the southern side (left) provide optimal light control for eastbound travel, while aisle seats help with movement during the ultra-long flight.',
  },
  {
    question: 'How do Australian seasons affect light exposure strategies?',
    answer:
      "Sydney's summer (Dec-Feb) has 5:30am sunrises and 8pm sunsets—much longer days than NYC summer. Winter has shorter days but more intense midday light.",
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
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
];

const howItWorks = [
  'Calculates the complex 14-16 hour time difference accounting for both Northern and Southern Hemisphere daylight saving schedules',
  'Incorporates research on ultra-long-haul flight fatigue from aviation medicine studies',
  "Uses Sydney's coastal light patterns (strong morning light off the Pacific) for optimal circadian resetting",
  'Accounts for seasonal variations in daylight hours between New York and Sydney',
  'Provides specific recommendations for managing the International Date Line crossing effect',
];

const ssData = {
  text: 'Survive the NYC to Sydney marathon flight! Science-based jet lag planner for the ultimate transpacific journey.',
  hashtags: 'jetlag,NYCtoSydney,longhaul,travelaustralia,timeshift',
  title: 'Jet Lag Planner: New York to Sydney Survival Guide',
};

const title = 'Jet Lag Planner: New York to Sydney';
const description =
  'Master the 14-16 hour time difference on NYC to Sydney flights. Science-based strategies for the ultra-long-haul journey across the International Date Line.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Ultra-long-haul flight optimization (19+ hours)',
      'International Date Line crossing strategies',
      'Southern Hemisphere seasonal adaptation',
      'Sydney-specific light exposure recommendations',
    ],
    steps: [
      {
        name: 'Enter transpacific flight details',
        description:
          'Input JFK to SYD flight information accounting for date line crossing.',
      },
      {
        name: 'Configure circadian rhythms',
        description: 'Set NYC sleep patterns for personalized adjustment plan.',
      },
      {
        name: 'Choose time jump strategy',
        description: 'Select pre-departure or post-arrival planning approach.',
      },
      {
        name: 'Download survival guide',
        description:
          'Get PDF with hour-by-hour recommendations for the marathon journey.',
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
  head: 'New York to Sydney Jet Lag Survival Guide',
  subHead:
    "Conquer the 14-16 hour time difference and International Date Line crossing on one of the world's longest commercial flights",
  featuresHead: 'Specialized for the Ultimate Transpacific Journey',
  tipsHead: 'Pro Tips for NYC-Sydney Marathon Flights',
  faqsHead: 'Ultra-Long-Haul Jet Lag Questions',
  linksHead: 'US to Australia Routes',
  howItWorksHead: 'The Science of Crossing 16 Time Zones',
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
    destinationTZ: 'Sydney@@Australia/Sydney',
    flightDuration: 34,
  },
});
