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
    icon: <FaSearchLocation className={styles.stepIcon} />,
    title: 'Step 1: Confirm Sydney as Departure',
    description:
      'Ensure Sydney (AEST) is selected to establish your origin time.',
  },
  {
    icon: <FaSearchLocation className={styles.stepIcon} />,
    title: 'Step 2: Confirm Los Angeles as Arrival',
    description:
      'Choose Los Angeles (PDT) for a correct 17‑hour shift calculation.',
  },
  {
    icon: <FaPlaneDeparture className={styles.stepIcon} />,
    title: 'Step 3: Enter Departure Time',
    description: 'Input your flight’s exact takeoff time from Sydney.',
  },
  {
    icon: <FaPlaneArrival className={styles.stepIcon} />,
    title: 'Step 4: Enter Arrival Time',
    description:
      'Provide your landing time in Los Angeles for accurate scheduling.',
  },
  {
    icon: <FaBed className={styles.stepIcon} />,
    title: 'Step 5: Add Your Bedtime',
    description: 'Enter your usual bedtime to plan incremental sleep advances.',
  },
  {
    icon: <FaSun className={styles.stepIcon} />,
    title: 'Step 6: Add Your Wake-up Time',
    description: 'Input your regular wake time to align daytime activity.',
  },
  {
    icon: <FaHourglassHalf className={styles.stepIcon} />,
    title: 'Step 7: Choose When to Start',
    description:
      'Select pre‑departure or post‑arrival adjustments with melatonin for early sleep.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} />,
    title: 'Step 8: Export as PDF',
    description: 'Download your personalized plan for offline reference.',
  },
];

const features = [
  {
    icon: <FaAdjust className={styles.featureIcon} />,
    title: '17‑Hour Time Advance',
    description: 'Plan a phased 7‑hour sleep advance to match LA’s timezone.',
  },
  {
    icon: <FaAdjust className={styles.featureIcon} />,
    title: 'Melatonin for Early Sleep',
    description:
      'Low‑dose melatonin (0.5–1 mg) is recommended to help you sleep earlier.',
  },
  {
    icon: <FaAdjust className={styles.featureIcon} />,
    title: 'DST & Local Time',
    description: 'Automatically handles PDT/PST changes so you stay in sync.',
  },
];

const tips = [
  {
    title: 'Phase Advance Your Sleep',
    description:
      'Shift sleep earlier by 1–2 hours per day starting 3 days before departure.',
  },
  {
    title: 'Morning Light in LA',
    description:
      'Expose yourself to bright light on LA mornings to solidify your new rhythm.',
  },
  {
    title: 'Meal Timing Aligns Clock',
    description:
      'Eat your first meal at local breakfast time (7–9 AM) to reset your food clock.',
  },
  {
    title: 'Stay Hydrated',
    description:
      'Hydrate well and avoid alcohol; use blue‑light blockers before sleep.',
  },
];

const faqs = [
  {
    question: 'How many days to adjust?',
    answer:
      'Typically 4–5 days with a phased advance. Without it, recovery may take a week.',
  },
  {
    question: 'Should I take melatonin?',
    answer:
      'Yes, for advancing sleep: 0.5–1 mg one hour before your target bedtime.',
  },
  {
    question: 'Pre or post arrival?',
    answer:
      'Pre‑departure shifting is fastest; post‑arrival also works with melatonin support.',
  },
];

const links = [
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.jetLagFromLosAngelesToSydney}`,
  },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
];

const howItWorks = [
  'Calculates the 17‑hour timezone difference across AEST to PDT.',
  'Shifts your sleep schedule earlier in phases per day.',
  'Includes light, meal, and melatonin cues for early sleep.',
  'Generates a PDF you can download and follow offline.',
];

const ssData = {
  text: 'Flying from Sydney to Los Angeles? Use this personalized jet lag planner to shift your sleep earlier before arrival—melatonin included. 🌏✈️🌎',
  hashtags: 'JetLag,PacificFlights',
  title: 'Sydney to Los Angeles Jet Lag Plan',
};

const title = 'Jet Lag Plan: Sydney to Los Angeles – Quick Recovery';
const description =
  'Beat jet lag after flying Sydney to Los Angeles. Get a step‑by‑step recovery plan with sleep, light, meal timing, and melatonin guidance for a 17‑hour time shift.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '17‑hour shift handling with 7‑hour sleep advance',
      'Sleep, light, meal timing strategies',
      'Melatonin guidance for earlier sleep onset',
      'Automatic DST adjustment',
      'PDF export of personalized plan',
    ],
    steps: [
      {
        name: 'Step 1: Select Sydney as Departure',
        description:
          'Start with Sydney (AEST) to set your origin time correctly.',
      },
      {
        name: 'Step 2: Select Los Angeles as Arrival',
        description:
          'Choose Los Angeles (PDT) so the planner maps the 17‑hour shift.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Input departure and arrival times to calculate your circadian shift.',
      },
      {
        name: 'Step 4: Add Your Bed/Wake Times',
        description:
          'Provide usual sleep hours to build a phased advance schedule.',
      },
      {
        name: 'Step 5: View & Export Plan',
        description:
          'Download a day‑by‑day PDF with sleep, light, meal timing, and melatonin SOP.',
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
  head: 'Jet Lag Plan: Sydney to Los Angeles',
  subHead:
    'Recover from a 17-hour shift by advancing your sleep schedule with science-backed light, meal, and melatonin guidance.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Recovery Tips',
  faqsHead: 'FAQs',
  linksHead: 'Pacific Crossings & Australia Routes',
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
    departureTZ: 'Sydney@@Australia/Sydney',
    destinationTZ: 'Los Angeles@@America/Los_Angeles',
    flightDuration: 21,
  },
});
