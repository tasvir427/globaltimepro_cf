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
    title: 'Step 1: Select Paris Departure',
    description:
      'Pick CDG (CET/CEST) to set your sleep‑wake baseline before flying west.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select New York Arrival',
    description:
      'Choose JFK (EST/EDT) so the planner knows to apply a 6‑hour delay.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter CDG Departure',
    description:
      'Log your exact departure time to sync with evening‑light cues later.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter JFK Arrival',
    description:
      'Provide your landing time to schedule your first Times Square cue.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Bedtime',
    description:
      'Tell us when you normally sleep so we can phase your bedtime later each night.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake‑Up Time" />,
    title: 'Step 6: Add Your Wake‑Up',
    description:
      'Record your usual wake‑up to align morning cues with New York sunrise.',
  },
  {
    icon: (
      <FaHourglassHalf
        className={styles.stepIcon}
        aria-label="Choose Start Option"
      />
    ),
    title: 'Step 7: Choose Start Option',
    description:
      'Decide whether to begin sleep‑delays before departure or upon landing.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a PDF with neon‑lit evening cues and café snack reminders.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Evening Light Exposure"
      />
    ),
    title: 'Evening Light Exposure',
    description:
      'Use vibrant Times Square lights to delay your internal clock naturally.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Café Snack Scheduling"
      />
    ),
    title: 'Café Snack Scheduling',
    description:
      'Enjoy a light midnight snack in a Paris café mindset to shift your metabolic clock.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Offset Handling" />
    ),
    title: 'Offset Handling',
    description:
      'Automatically factors CET→EST changes so your schedule remains accurate.',
  },
];

const tips = [
  {
    title: 'Times Square Strolls',
    description:
      'Take a 20‑minute evening walk in Times Square to harness bright light for delay.',
  },
  {
    title: 'Midnight Café Break',
    description:
      'Have a light snack at a late‑night café for a metabolic cue aligned to Paris time.',
  },
  {
    title: 'Hydrate & Limiting Coffee',
    description:
      'Stay hydrated but avoid caffeine after 6 PM New York time to ease bedtime delays.',
  },
  {
    title: 'Avoid Early Morning Light',
    description:
      'Wear sunglasses outdoors before 9 AM EST to prevent unintended phase‑advance.',
  },
];

const faqs = [
  {
    question: 'Is melatonin needed for a westward delay?',
    answer:
      'No—westward (delay) strategies rely on evening light and phased sleep adjustments, not supplements.',
  },
  {
    question: 'How many days before should I start?',
    answer:
      'Begin delaying your bedtime 2–3 days before departure for a smoother transition.',
  },
  {
    question: 'Can I adjust during layovers?',
    answer:
      'Yes—use layovers for additional evening‑light exposure and follow the delay schedule.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
];

const howItWorks = [
  'Calculates your 6‑hour westward phase delay from CET/CEST→EST/EDT on travel date.',
  'Schedules nightly sleep‑delays supported by evening light cues.',
  'Integrates neon‑light exposure and café snack timing for effective delay.',
  'Generates a downloadable PDF with step‑by‑step, photo‑inspired cues.',
];

const ssData = {
  text: 'Flying Paris → New York? Delay your sleep 6 hours with vivid evening light and café snack cues—no supplements! 🌆☕️🛫',
  hashtags: 'JetLag,ParisNYC',
  title: 'Paris to New York Jet Lag Plan',
};

const title = 'Jet Lag: Paris to New York – 6‑Hour Delay Plan';
const description =
  'Beat a 6‑hour westward shift from Paris (CET/CEST) to New York (EST/EDT) using Times Square evening light cues, midnight Seine café snacks, and phased sleep‑delays.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '6‑hour westward phase delay without supplements',
      'Times Square evening light exposure cues',
      'Midnight Seine café snack scheduling',
      'Automatic CET→EST offset handling',
      'Downloadable PDF with landmark‑inspired guidance',
    ],
    steps: [
      {
        name: 'Step 1: Select Paris Departure',
        description:
          'Choose Paris Charles de Gaulle (CET/CEST) to anchor your starting sleep‑wake baseline.',
      },
      {
        name: 'Step 2: Select New York Arrival',
        description:
          'Pick New York JFK (EST/EDT) so we can plan a 6‑hour phased delay into Eastern Time.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Log CDG departure and JFK landing times to align your first evening‑light cue in NYC.',
      },
      {
        name: 'Step 4: Provide Your Normal Sleep Window',
        description:
          'Tell us your usual bedtime/wake‑up so the tool can schedule gradual nightly delays.',
      },
      {
        name: 'Step 5: Generate & Download Your Plan',
        description:
          'Review your PDF—complete with Times Square neon cues and Seine café snack reminders.',
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
  head: 'Jet Lag Plan: Paris to New York',
  subHead:
    'Recover from a 6-hour shift with phased sleep-delays, Times Square evening light, and café snack cues.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for Paris → New York',
  faqsHead: 'FAQs',
  linksHead: 'Transatlantic Routes',
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
    departureTZ: 'Paris@@Europe/Paris',
    destinationTZ: 'New York@@America/New_York',
    flightDuration: 2,
  },
});
