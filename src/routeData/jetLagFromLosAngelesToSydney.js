import {
  FaAdjust,
  FaBed,
  FaFilePdf,
  FaHourglassHalf,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaSearchLocation,
  FaSun,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Departure City"
      />
    ),
    title: 'Step 1: Select Los Angeles Departure',
    description:
      'Use the city picker to choose LAX (PST) as your origin for accurate time mapping.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Sydney Arrival',
    description:
      'Pick Sydney (AEST/AEDT) so the planner can map your 17‑hour eastward shift.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter LAX Departure',
    description:
      'Log your exact LAX departure time to anchor your first sleep adjustment.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter SYD Arrival',
    description:
      'Provide your SYD landing time so we can schedule Bondi sunrise cues.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Bedtime',
    description:
      'Tell us your normal sleep hours so we can plan **phased delays** toward later Sydney nights.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake‑Up Time" />,
    title: 'Step 6: Add Your Wake‑Up',
    description:
      'Record your usual wake‑up to align daylight exposure with Australian mornings.',
  },
  {
    icon: (
      <FaHourglassHalf
        className={styles.stepIcon}
        aria-label="Select Start Option"
      />
    ),
    title: 'Step 7: Choose Start Option',
    description:
      'Decide whether to begin **sleep delays** before departure or on arrival in Sydney.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export your printable PDF—complete with photogenic Bondi sunrise and light cues.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Sunrise Surf Sessions"
      />
    ),
    title: 'Sunrise Surf Sessions',
    description:
      'Align your wake times with Bondi Beach sunrise to harness natural morning light.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Hydration Reminders"
      />
    ),
    title: 'Hydration Reminders',
    description:
      'Stay well‑hydrated before, during, and after your flight to combat travel fatigue.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="DST Adjustment" />
    ),
    title: 'DST Adjustment',
    description:
      'Automatically factors PST→AEDT changes so your plan stays accurate year‑round.',
  },
];

const tips = [
  {
    title: 'Catch a Bondi Sunrise',
    description:
      'Plan a 20‑minute morning walk on Bondi Beach to reinforce your new wake‑time rhythm.',
  },
  {
    title: 'Hydrate Pre‑Flight & Post‑Arrival',
    description:
      'Drink plenty of water before and after flying to combat dehydration and travel fatigue.',
  },
  {
    title: 'Sync Meals to Aussie Time',
    description:
      'Have brunch at 9 AM AEST—cafés open early in Sydney—to cue your metabolic clock.',
  },
  {
    title: 'Evening Light Exposure',
    description:
      'Spend 30 minutes under bright evening light (e.g., a well-lit terrace) to help shift your sleep later each day.',
  },
];

const faqs = [
  {
    question: 'Do I need special supplements for this eastward shift?',
    answer:
      'No—this eastward, phase‑delay plan relies on timed light exposure and sleep adjustments, without supplements.',
  },
  {
    question: 'How do I handle AEDT vs AEST?',
    answer:
      'Our planner auto‑detects Australian daylight saving; just enter your travel date and we’ll adjust your schedule.',
  },
  {
    question: 'Can I begin adjustments mid‑flight?',
    answer:
      'Yes—select “start on departure” to start your sleep‑delay regimen as soon as you take off.',
  },
];

const links = [
  {
    name: 'Sydney → Los Angeles',
    path: `/${PATHS.jetLagFromSydneyToLosAngeles}`,
  },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Honolulu → Dubai', path: `/${PATHS.jetLagFromHonoluluToDubai}` },
  {
    name: 'Shanghai → San Francisco',
    path: `/${PATHS.jetLagFromShanghaiToSanFrancisco}`,
  },
];

const howItWorks = [
  'Calculates your 17‑hour eastward time shift across PST→AEST/AEDT on your travel date.',
  'Schedules gradual, daily sleep‑delay increments to align with Sydney time.',
  'Integrates Bondi Beach sunrise walks and evening light‑dimming rituals for natural adaptation.',
  'Generates a downloadable PDF with step‑by‑step, photo‑inspired cues for easy offline use.',
];

const ssData = {
  text: 'Flying LA → Sydney? Conquer your 17‑hour eastward jet lag with Bondi sunrise cues and melatonin timing! 🌊🏄‍♂️🇦🇺',
  hashtags: 'JetLag,LAtoSydney',
  title: 'Los Angeles to Sydney Jet Lag Plan',
};

const title = 'Jet Lag: Los Angeles to Sydney – 17‑Hour Eastward Plan';
const description =
  'Tackle a 17‑hour eastward shift from Los Angeles (PST) to Sydney (AEST/AEDT) with Bondi Beach sunrise cues, hydration strategies, and day‑by‑day sleep delays.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '17‑hour eastward shift with phased sleep delays',
      'Bondi Beach sunrise and outdoor light cues',
      'DST handling PST→AEDT adjustments',
      'PDF export of personalized plan',
    ],
    steps: [
      {
        name: 'Step 1: Select Los Angeles Departure',
        description:
          'Choose Los Angeles (LAX, PST) to anchor your baseline before the eastward journey.',
      },
      {
        name: 'Step 2: Select Sydney Arrival',
        description:
          'Set Sydney (AEST/AEDT) to calculate your 17‑hour phased sleep adjustment.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Log your LAX departure and SYD arrival times to synchronize sunrise and light cues.',
      },
      {
        name: 'Step 4: Provide Sleep Window',
        description:
          'Input your usual bedtime and wake‑up to create a step-by-step sleep-delay schedule.',
      },
      {
        name: 'Step 5: Review and Download Plan',
        description:
          'Get a detailed PDF plan—complete with Bondi sunrise cues and hydration reminders.',
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
  head: 'Jet Lag Plan: Los Angeles to Sydney',
  subHead:
    'Recover from a 17‑hour shift with phased sleep‑delays, Bondi sunrise cues, evening light exposure, and hydration.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for Los Angeles → Sydney',
  faqsHead: 'FAQs',
  linksHead: 'Pacific Routes & Long Hauls',
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
    departureTZ: 'Los Angeles@@America/Los_Angeles',
    destinationTZ: 'Sydney@@Australia/Sydney',
    flightDuration: 32,
  },
});
