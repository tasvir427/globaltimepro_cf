import {
  FaPlaneDeparture,
  FaMoon,
  FaCalendarAlt,
  FaFilePdf,
  FaFlask,
  FaUserClock,
} from 'react-icons/fa';
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
    title: 'Step 1: Enter Your Flight Details',
    description:
      'Input your departure from London (GMT/BST) and arrival in Tokyo (JST), including dates and times. The 8-9 hour time difference will be automatically calculated.',
  },
  {
    icon: (
      <FaMoon className={styles.stepIcon} aria-label="Set Sleep Schedule" />
    ),
    title: 'Step 2: Set Your Sleep Patterns',
    description:
      'Tell us your usual sleep and wake times in London. This helps create a personalized adjustment plan tailored to your circadian rhythm.',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="Choose Timeline" />
    ),
    title: 'Step 3: Choose Your Planning Perspective',
    description:
      'Select whether you want to plan from days before departure, during your flight, or after arriving in Tokyo. Each view offers unique strategies.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download Plan" />,
    title: 'Step 4: Download Your Custom Plan',
    description:
      'Get your science-based jet lag prevention plan as a printable PDF, perfect for keeping handy during your journey from London to Tokyo.',
  },
];

const features = [
  {
    icon: (
      <FaFlask className={styles.featureIcon} aria-label="Science Backed" />
    ),
    title: 'Chronobiology-Based Strategy',
    description:
      'Uses proven light exposure and sleep adjustment techniques specifically calibrated for the 8-9 hour time difference between London and Tokyo.',
  },
  {
    icon: (
      <FaUserClock
        className={styles.featureIcon}
        aria-label="Personalized Schedule"
      />
    ),
    title: 'Tailored Sleep Adjustment',
    description:
      'Creates a day-by-day plan that gradually shifts your sleep schedule based on your personal patterns and flight timing.',
  },
  {
    icon: <FaFilePdf className={styles.featureIcon} aria-label="PDF Export" />,
    title: 'Portable Travel Companion',
    description:
      'Export your complete jet lag plan as a PDF that you can access offline during your journey across 9 time zones.',
  },
];

const tips = [
  {
    title: 'Pre-Departure Light Strategy',
    description:
      'Begin adjusting 3-4 days before departure by seeking morning light in London and avoiding evening light to gradually shift your clock toward Tokyo time.',
  },
  {
    title: 'Hydration Protocol',
    description:
      'The long flight over Russia or the Middle East is extremely dehydrating. Increase water intake 48 hours before flying and avoid alcohol during the flight.',
  },
  {
    title: 'First Day in Tokyo',
    description:
      'Upon arrival, resist napping and stay active until early evening Tokyo time. Exposure to afternoon sunlight helps reset your internal clock faster.',
  },
  {
    title: 'Meal Timing Adjustment',
    description:
      'Gradually shift your meal times in London to align closer to Tokyo meal schedules, helping your digestive system adjust before you travel.',
  },
];

const faqs = [
  {
    question:
      'How long does jet lag typically last when flying from London to Tokyo?',
    answer:
      'For most travelers, adjusting to the 8-9 hour time difference takes 3-5 days. Following a structured plan can reduce this to 1-2 days.',
  },
  {
    question:
      'Is it better to fly direct or with a stopover for reducing jet lag?',
    answer:
      'Direct flights minimize travel stress, but a well-timed stopover can help with gradual adjustment. Our planner adapts to your specific flight route.',
  },
  {
    question: 'What is the best time of day to fly from London to Tokyo?',
    answer:
      'Morning departures from London often work well, allowing afternoon arrival in Tokyo and keeping you awake until local bedtime.',
  },
  {
    question:
      'How does the time difference vary between British Summer Time and GMT?',
    answer:
      'Tokyo is always 9 hours ahead of GMT. During British Summer Time (late March to late October), the difference reduces to 8 hours.',
  },
];

const links = [
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
];

const howItWorks = [
  'Calculates the precise 8-9 hour time difference between London and Tokyo based on your travel dates',
  'Analyzes your current sleep-wake cycle and creates a gradual adjustment schedule',
  'Uses light exposure timing recommendations to naturally reset your circadian rhythm',
  'Provides specific meal and activity timing to synchronize your body clock',
  'Generates a printable day-by-day plan with exact times for sleep, light exposure, and meals',
];

const ssData = {
  text: 'Beat jet lag on your London to Tokyo trip with this science-based planner!',
  hashtags: 'jetlag,travel,tokyo,london,timeshift',
  title: 'Jet Lag Planner: London to Tokyo',
};

const title = 'Jet Lag Planner: London to Tokyo';
const description =
  'Science-based plan to avoid jet lag on London to Tokyo flights. Manage the 8-9 hour time difference with personalized sleep adjustment strategies.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized sleep adjustment plan for London-Tokyo flights',
      'Chronobiology-based light exposure recommendations',
      'PDF export for offline access during travel',
      '8-9 hour time difference optimization',
    ],
    steps: [
      {
        name: 'Enter flight details',
        description:
          'Input departure and arrival times between London and Tokyo.',
      },
      {
        name: 'Set sleep schedule',
        description: 'Provide your usual sleep patterns for personalization.',
      },
      {
        name: 'Choose planning perspective',
        description:
          'Select pre-departure, in-flight, or post-arrival planning.',
      },
      {
        name: 'Download PDF plan',
        description: 'Get your customized jet lag prevention strategy.',
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
  head: 'London to Tokyo Jet Lag Planner',
  subHead:
    'Master the 8-9 hour time difference with science-based strategies for your journey from Big Ben to Mount Fuji',
  featuresHead: 'Why This Planner Works for London-Tokyo Travel',
  tipsHead: 'Specialized Tips for Crossing 9 Time Zones',
  faqsHead: 'London to Tokyo Jet Lag Questions',
  linksHead: 'Europe to Japan Routes',
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
    departureTZ: 'London@@Europe/London',
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 21,
  },
});
