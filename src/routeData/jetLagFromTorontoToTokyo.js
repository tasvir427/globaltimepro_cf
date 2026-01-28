import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaBed,
  FaSun,
  FaFilePdf,
  FaHourglassHalf,
  FaEyeSlash,
} from 'react-icons/fa';
import { GiNightSky } from 'react-icons/gi';
import { TbSunrise } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Select Departure City"
      />
    ),
    title: 'Step 1: Select Toronto Departure',
    description:
      'Choose Toronto Pearson Airport (YYZ) in EST/EDT timezone to establish your North American sleep-wake baseline.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Tokyo Arrival',
    description:
      'Select Narita or Haneda Airport (JST) for a 13-14 hour phase advance into Japanese time.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter YYZ Departure Time',
    description:
      'Input your exact departure time to synchronize with pre-flight sleep adjustments.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter Tokyo Arrival Time',
    description:
      'Provide landing time to schedule your first morning light exposure in Japan.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Regular Sleep Schedule',
    description:
      'Share your normal sleep patterns to calculate optimal phase advancement strategy.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake-Up Time" />,
    title: 'Step 6: Add Your Wake-Up Routine',
    description:
      'Record your typical morning routine to align with Tokyo sunrise timing.',
  },
  {
    icon: (
      <FaHourglassHalf
        className={styles.stepIcon}
        aria-label="Choose Start Option"
      />
    ),
    title: 'Step 7: Select Adjustment Approach',
    description:
      'Choose whether to begin sleep adjustments before departure or upon arrival.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a customized PDF with Meiji Shrine morning walks and strategic nap timing.',
  },
];

const features = [
  {
    icon: (
      <TbSunrise
        className={styles.featureIcon}
        aria-label="Morning Light Strategy"
      />
    ),
    title: 'Morning Light Strategy',
    description:
      "Utilize Tokyo's early sunrise at Meiji Shrine or Imperial Palace gardens for optimal phase advancement.",
  },
  {
    icon: (
      <GiNightSky
        className={styles.featureIcon}
        aria-label="Sleep Phase Management"
      />
    ),
    title: 'Sleep Phase Management',
    description:
      'Gradual sleep schedule adjustment with strategic napping to manage the 13-hour time difference.',
  },
  {
    icon: (
      <FaEyeSlash
        className={styles.featureIcon}
        aria-label="Light Avoidance Techniques"
      />
    ),
    title: 'Light Avoidance Techniques',
    description:
      'Strategic timing for avoiding evening light exposure to prevent further phase delays.',
  },
];

const tips = [
  {
    title: 'Meiji Shrine Morning Meditation',
    description:
      'Visit Meiji Shrine within 2 hours of Tokyo sunrise for natural light exposure that helps reset your internal clock.',
  },
  {
    title: 'Strategic Hydration Protocol',
    description:
      'Begin hydration strategy 3 days before departure and continue through flight to combat dehydration effects.',
  },
  {
    title: 'Evening Blue Light Management',
    description:
      'Use blue light blocking glasses after 6 PM Tokyo time to support natural melatonin production.',
  },
  {
    title: 'Strategic Caffeine Timing',
    description:
      'Schedule caffeine intake for maximum alertness during Tokyo business hours without disrupting sleep.',
  },
];

const faqs = [
  {
    question: 'How does the 13-hour time difference affect jet lag direction?',
    answer:
      "Flying westward to Tokyo actually requires phase advancement as you're moving ahead in time. This is one of the most challenging adjustments requiring strategic light exposure and sleep management.",
  },
  {
    question: 'Should I use melatonin for this direction of travel?',
    answer:
      'Melatonin can be helpful when taken at specific times relative to Tokyo bedtime. Our planner calculates optimal timing based on your flight schedule and normal sleep patterns.',
  },
  {
    question: 'How many days should I allocate for adjustment?',
    answer:
      'For this significant time change, allow 5-7 days for full adjustment. Begin preparations 3-4 days before departure for best results.',
  },
  {
    question:
      'Are there cultural considerations for managing jet lag in Tokyo?',
    answer:
      'Yes, many temples and gardens open at sunrise, providing perfect locations for morning light therapy. Evening onsens can also support relaxation before bedtime.',
  },
];

const links = [
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.jetLagFromMexicoCityToSeoul}`,
  },
  { name: 'Chicago → Rome', path: `/${PATHS.jetLagFromChicagoToRome}` },
];

const howItWorks = [
  'Calculates your 13-14 hour phase advance from EST/EDT to JST time zones',
  'Schedules gradual sleep advancement with strategic light exposure timing',
  'Incorporates hydration and nutrition strategies for optimal adjustment',
  'Generates a personalized PDF with location-specific recommendations',
  'Adapts to seasonal variations in sunrise/sunset times in both locations',
];

const ssData = {
  text: 'Flying Toronto → Tokyo? Master the 13-hour time difference with strategic light exposure at Meiji Shrine and science-based sleep adjustments! 🌅✈️',
  hashtags: 'JetLag, TorontoTokyo',
  title: 'Toronto to Tokyo Jet Lag Plan',
};

const title = 'Jet Lag: Toronto to Tokyo - 13-Hour Shift Plan';
const description =
  'Conquer the 13-hour time difference from Toronto (EST/EDT) to Tokyo (JST) using science-based sleep adjustments, strategic light exposure at Meiji Shrine, and optimal hydration timing.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '13-hour phase advance strategy',
      'Meiji Shrine morning light therapy',
      'Strategic hydration and nutrition timing',
      'Automatic EST to JST time conversion',
      'Downloadable PDF with location-specific guidance',
    ],
    steps: [
      {
        name: 'Step 1: Select Toronto Departure',
        description:
          'Choose Toronto Pearson Airport (EST/EDT) to establish your baseline sleep-wake pattern.',
      },
      {
        name: 'Step 2: Select Tokyo Arrival',
        description:
          'Select Tokyo airports (JST) for 13-hour phase advance planning.',
      },
      {
        name: 'Step 3: Enter Flight Details',
        description:
          'Input departure and arrival times to personalize your adjustment schedule.',
      },
      {
        name: 'Step 4: Provide Sleep Patterns',
        description:
          'Share your usual sleep-wake times for customized phase advancement.',
      },
      {
        name: 'Step 5: Generate Your Plan',
        description:
          'Download PDF with specific timing for light exposure, sleep, and hydration.',
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
  head: 'Jet Lag Plan: Toronto to Tokyo',
  subHead:
    'Master the 13-hour time difference with strategic light exposure, phased sleep adjustments, and science-based recovery techniques.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Adjustment Strategies for Toronto → Tokyo',
  faqsHead: 'FAQs',
  linksHead: 'North America to Asia Routes',
  howItWorksHead: 'How It Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Toronto@@America/Toronto',
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 27.5,
  },
});
