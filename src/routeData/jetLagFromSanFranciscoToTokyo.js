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
    title: 'Step 1: Select San Francisco Departure',
    description:
      'Pick SFO (PST) as your starting point for accurate time anchoring.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Tokyo Arrival',
    description:
      'Choose Tokyo (JST) so the planner knows to apply a 17‑hour delay.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter SFO Departure',
    description:
      'Log your exact departure time to sync your initial delay cue.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter Tokyo Arrival',
    description:
      'Provide your landing time to schedule your first Tokyo‑time evening cue.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Bedtime',
    description:
      'Tell us your normal sleep hours so we can plan nightly **delays**.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake‑Up Time" />,
    title: 'Step 6: Add Your Wake‑Up',
    description:
      'Record your typical wake‑up to align morning cues with Tokyo sunrise.',
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
      'Decide whether to begin sleep‑delay before departure or on arrival.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a PDF featuring Golden Gate and Mt Fuji–inspired cues for offline use.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Dusk Delay Cues" />
    ),
    title: 'Dusk Delay Cues',
    description:
      'Use Golden Gate Bridge twilight to push your bedtime later naturally.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Evening Light Exposure"
      />
    ),
    title: 'Evening Light Exposure',
    description:
      'Spend 30 minutes under bright evening light (e.g., a well‑lit terrace) to aid delayed sleep.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="DST & Offset Handling"
      />
    ),
    title: 'DST & Offset Handling',
    description:
      'Automatically factors PST→JST changes so your plan stays accurate year‑round.',
  },
];

const tips = [
  {
    title: 'Stroll at Golden Hour',
    description:
      'Take a 15‑minute walk near the Golden Gate at dusk to reinforce your delayed bedtime.',
  },
  {
    title: 'Light Dinner Timing',
    description:
      'Have your last meal at 7 PM PST (11 AM JST) to cue your metabolic clock later.',
  },
  {
    title: 'Evening Terrace Sessions',
    description:
      'Sit under bright evening lights—like a rooftop bar—to help shift your internal clock.',
  },
  {
    title: 'Morning Light Avoidance',
    description:
      'Wear sunglasses on Tokyo mornings to prevent unwanted phase‑advance from early light.',
  },
];

const faqs = [
  {
    question: 'Are supplements needed for a 17‑hour delay?',
    answer:
      'No—this plan uses timed light cues and sleep‑delay increments, without any supplements.',
  },
  {
    question: 'Can I start delays in flight?',
    answer:
      'Yes—select “start on departure” to begin your nightly delays as soon as you take off.',
  },
  {
    question: 'How do I handle PST→JST difference?',
    answer:
      'Our planner auto‑detects timezone changes—just pick your travel date and we’ll adjust accordingly.',
  },
];

const links = [
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
  {
    name: 'Shanghai → San Francisco',
    path: `/${PATHS.jetLagFromShanghaiToSanFrancisco}`,
  },
  {
    name: 'Bengaluru → San Francisco',
    path: `/${PATHS.jetLagFromBengaluruToSanFrancisco}`,
  },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.jetLagFromLosAngelesToSydney}`,
  },
];

const howItWorks = [
  'Calculates your 17‑hour phased delay from PST→JST on your travel date.',
  'Schedules nightly sleep‑delay increments to align with Tokyo time.',
  'Integrates Golden Gate dusk cues and evening light exposure for natural adjustment.',
  'Generates a downloadable PDF with landmark‑inspired, step‑by‑step cues.',
];

const ssData = {
  text: 'Flying SF → Tokyo? Beat the 17‑hour time gap with our dusk and evening light delay plan—no supplements needed! 🌉🗼',
  hashtags: 'JetLag,SFtoTokyo',
  title: 'San Francisco to Tokyo Jet Lag Plan',
};

const title = 'Jet Lag: San Francisco to Tokyo – 17‑Hour Delay Plan';
const description =
  'Overcome a 17‑hour eastward shift from San Francisco (PST) to Tokyo (JST) with Golden Gate dusk cues, evening light exposure, and gradual sleep delays.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '17‑hour phased sleep‑delay into JST',
      'Golden Gate dusk and Tokyo Tower night light cues',
      'Evening light exposure to push bedtime later',
      'Automatic PST→JST offset handling',
      'PDF export with photo‑inspired schedule',
    ],
    steps: [
      {
        name: 'Step 1: Select San Francisco Departure',
        description:
          'Choose San Francisco (SFO, PST) so we anchor your baseline to Pacific Time before the long haul.',
      },
      {
        name: 'Step 2: Select Tokyo Arrival',
        description:
          'Set Tokyo (NRT/HND, JST) as your destination to calculate a 17‑hour phased delay into Japan time.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Log your SFO departure and NRT/HND arrival times to align key cues with Mt Fuji sunrise.',
      },
      {
        name: 'Step 4: Provide Sleep Window',
        description:
          'Input your usual bedtime and wake‑up hours so we can schedule gradual nightly delays.',
      },
      {
        name: 'Step 5: Generate & Download Plan',
        description:
          'Review your PDF plan—complete with Golden Gate Bridge twilight and Tokyo Tower evening light cues.',
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
  head: 'Jet Lag Plan: San Francisco to Tokyo',
  subHead:
    'Recover from a 17-hour shift with phased sleep-delays, dusk cues at Golden Gate, evening light exposure, and Tokyo sunrise alignment.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for San Francisco → Tokyo',
  faqsHead: 'FAQs',
  linksHead: 'Transpacific & Asia Routes',
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
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 27,
  },
});
