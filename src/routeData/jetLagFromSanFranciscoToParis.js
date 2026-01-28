import {
  FaBed,
  FaClock,
  FaFilePdf,
  FaMoon,
  FaPlaneDeparture,
  FaSearchLocation,
  FaSun,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaSearchLocation className={styles.stepIcon} />,
    title: 'Step 1: Select San Francisco',
    description:
      'Choose SFO as your origin to establish a Pacific Time sleep baseline.',
  },
  {
    icon: <FaSearchLocation className={styles.stepIcon} />,
    title: 'Step 2: Select Paris',
    description:
      'Set CDG as your destination so we can shift you 9 hours forward.',
  },
  {
    icon: <FaPlaneDeparture className={styles.stepIcon} />,
    title: 'Step 3: Enter Departure & Arrival',
    description:
      'Input exact flight times to align sleep and light cues during transit.',
  },
  {
    icon: <FaBed className={styles.stepIcon} />,
    title: 'Step 4: Add Your Sleep Hours',
    description:
      'Tell us your regular bedtime/wake time to begin 1–1.5h advances per day.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} />,
    title: 'Step 5: Download the Full Plan',
    description:
      'Get a printable PDF with melatonin use and Seine-side sunrise guidance.',
  },
];

const features = [
  {
    icon: <FaSun className={styles.featureIcon} />,
    title: 'Melatonin & Light Strategy',
    description:
      'Use 0.5–1 mg melatonin 1 hour before target bedtime and maximize morning light.',
  },
  {
    icon: <FaClock className={styles.featureIcon} />,
    title: 'Paris Sunrise Anchoring',
    description:
      'Wake early and walk along the Seine to reset your circadian rhythm with light.',
  },
  {
    icon: <FaMoon className={styles.featureIcon} />,
    title: 'Blue Light Cutoff',
    description:
      'Avoid screens after 9 PM Paris time to reduce melatonin suppression.',
  },
];

const tips = [
  {
    title: 'Morning Walks in Paris',
    description:
      'Expose yourself to bright sunlight before 9 AM to accelerate adjustment.',
  },
  {
    title: 'Early Dinners Help',
    description:
      'Eat your last meal by 7 PM to support a circadian shift toward Paris time.',
  },
  {
    title: 'Melatonin Use',
    description:
      'Take melatonin (0.5–1mg) 1 hour before your *target* Paris bedtime for 3–5 days.',
  },
  {
    title: 'Avoid Evening Light',
    description:
      'After 9 PM, use warm lighting and avoid screens to support early sleep onset.',
  },
];

const faqs = [
  {
    question: 'Should I use melatonin for a 9-hour time shift?',
    answer:
      'Yes—melatonin is highly recommended when advancing your sleep by more than 3–4 hours.',
  },
  {
    question: 'How many days should I start before departure?',
    answer:
      'Start advancing your sleep 4–5 days before departure to reduce Paris jet lag on arrival.',
  },
  {
    question: 'Can I adjust during the flight?',
    answer:
      'Yes—begin your new sleep timing on the plane using eye masks and earplugs.',
  },
];

const links = [
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
];

const howItWorks = [
  'Calculates a 9-hour phase advance plan from PDT/PST to CEST/CET.',
  'Recommends melatonin and light exposure to support circadian shift.',
  'Schedules daily bedtime and wake-up changes (1–1.5h earlier).',
  'Exports a PDF itinerary with daily actions, cues, and local Paris context.',
];

const ssData = {
  text: 'Flying from San Francisco to Paris? Conquer a 9-hour shift with sunrise walks, melatonin, and a step-by-step PDF plan. 🌍🇫🇷🛫',
  hashtags: 'JetLag,ParisTravel',
  title: 'San Francisco to Paris Jet Lag Plan',
};

const title = 'Jet Lag: San Francisco to Paris – 9‑Hour Advance Plan';
const description =
  'Shift 9 hours east from San Francisco (PDT/PST) to Paris (CEST/CET) with phased sleep advances, melatonin, sunrise walks along the Seine, and screen curfews.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '9-hour phase advance with melatonin guidance',
      'Sunrise cues on the Seine for adaptation',
      'Sleep window and light exposure planner',
      'Auto-adjusts for daylight saving (PST↔CET)',
      'Downloadable PDF with step-by-step recovery plan',
    ],
    steps: [
      {
        name: 'Step 1: Select San Francisco Departure',
        description:
          'Choose SFO (Pacific Time) as your origin to anchor your sleep baseline.',
      },
      {
        name: 'Step 2: Select Paris Arrival',
        description:
          'Set Paris (CDG, CET/CEST) to calculate your 9-hour eastward adjustment.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Input your departure and arrival to synchronize light exposure cues.',
      },
      {
        name: 'Step 4: Provide Sleep Schedule',
        description:
          'We’ll tailor your daily phase advances based on your usual bedtime/wake time.',
      },
      {
        name: 'Step 5: Review and Download Plan',
        description:
          'Get a detailed PDF with melatonin timing, screen curfews, and Seine sunrise walks.',
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
  head: 'Jet Lag Plan: San Francisco to Paris',
  subHead:
    'Recover from a 9-hour eastward shift with melatonin, screen cutoffs, and Seine sunrise cues.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for San Francisco → Paris',
  faqsHead: 'FAQs',
  linksHead: 'European & US West Coast Routes',
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
    departureTZ: 'San Francisco@@America/Los_Angeles',
    destinationTZ: 'Paris@@Europe/Paris',
    flightDuration: 20,
  },
});
