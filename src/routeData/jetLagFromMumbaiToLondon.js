import {
  FaAdjust,
  FaBed,
  FaClock,
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
        aria-label="Departure City: Mumbai"
        className={styles.stepIcon}
      />
    ),
    title: 'Step 1: Set Departure City to Mumbai',
    description:
      'Ensure Mumbai (IST) is selected as your departure city. This sets the baseline for the westward 4.5‑hour time shift.',
  },
  {
    icon: (
      <FaSearchLocation
        aria-label="Arrival City: London"
        className={styles.stepIcon}
      />
    ),
    title: 'Step 2: Set Arrival City to London',
    description:
      'Choose London (BST/GMT) as your arrival city so the planner can align your recovery plan to local London time.',
  },
  {
    icon: (
      <FaPlaneDeparture
        aria-label="Departure Time"
        className={styles.stepIcon}
      />
    ),
    title: 'Step 3: Enter Your Departure Time',
    description:
      'Input your flight’s exact departure time from Mumbai. This lets the planner calculate the overnight schedule shift.',
  },
  {
    icon: (
      <FaPlaneArrival aria-label="Arrival Time" className={styles.stepIcon} />
    ),
    title: 'Step 4: Enter Your Arrival Time in London',
    description:
      'Enter your scheduled landing time in London. This aligns your recovery plan with local cues like light and meals.',
  },
  {
    icon: <FaBed aria-label="Usual Bed Time" className={styles.stepIcon} />,
    title: 'Step 5: Provide Your Usual Bedtime',
    description:
      'Share your normal sleep time in Mumbai. The planner will use it to gradually shift your sleep schedule later.',
  },
  {
    icon: <FaSun aria-label="Usual Wake-up Time" className={styles.stepIcon} />,
    title: 'Step 6: Provide Your Usual Wake-up Time',
    description:
      'Tell us when you usually wake up. This sets the rhythm for adjusting your alert hours in London.',
  },
  {
    icon: (
      <FaHourglassHalf
        aria-label="Adjustment Timeline"
        className={styles.stepIcon}
      />
    ),
    title: 'Step 7: Choose Adjustment Timeline',
    description:
      'Pick whether to start shifting your schedule before departure or adjust after arrival — both are supported.',
  },
  {
    icon: <FaFilePdf aria-label="Export PDF" className={styles.stepIcon} />,
    title: 'Step 8: Export Your Plan as PDF',
    description:
      'Once ready, download your full recovery plan as a PDF — perfect for offline use during your trip.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust aria-label="Circadian Science" className={styles.featureIcon} />
    ),
    title: 'Circadian Science-Backed Strategy',
    description:
      'We guide your internal clock using science-based shifts in light exposure, sleep timing, and meal cues — ideal for westward travel.',
  },
  {
    icon: (
      <FaClock aria-label="Time Zone Aware" className={styles.featureIcon} />
    ),
    title: 'Time Zone & DST Aware',
    description:
      'The planner automatically adjusts for BST or GMT based on your arrival date — no manual timezone guesswork.',
  },
];

const tips = [
  {
    title: 'Westward Is Easier — Use It',
    description:
      'Westward travel (like to London) is easier to adapt to. Gradually delay your sleep by 30–60 minutes per night before departure if possible.',
  },
  {
    title: 'Seek Morning Light in London',
    description:
      'After arrival, go outside in the morning sun. Bright light helps delay your circadian rhythm to match the new time zone.',
  },
  {
    title: 'Delay First Meal After Arrival',
    description:
      'Have your first full meal only after local breakfast time in London (around 8 AM). This helps shift your body clock faster.',
  },
  {
    title: 'Hydration & Cabin Prep',
    description:
      'Stay hydrated and avoid alcohol before and during flight. Try using blue-light blockers during the last 2 hours in-flight to prep for the new time.',
  },
];

const faqs = [
  {
    question: 'How many days to fully adjust after Mumbai → London?',
    answer:
      'Usually 3–4 days with proper planning. Without a shift strategy, it may take up to a week to feel normal.',
  },
  {
    question: 'Is melatonin needed for this route?',
    answer:
      'No. Since your sleep schedule shifts later (not earlier), melatonin isn’t required for this adjustment.',
  },
  {
    question: 'Can I shift only after arrival?',
    answer:
      'Yes, post-arrival adjustment is supported — but pre-departure shifting is easier and often leads to faster recovery.',
  },
];

const links = [
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  {
    name: 'Bengaluru → San Francisco',
    path: `/${PATHS.jetLagFromBengaluruToSanFrancisco}`,
  },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
];

const howItWorks = [
  'Your Mumbai and London time zones are mapped to calculate the 4.5‑hour westward shift.',
  'Sleep and wake times are shifted later over a series of days to align with London time.',
  'We use timed light exposure and food timing — no melatonin required for this adjustment.',
  'You get a clear PDF plan for every day of your shift and arrival.',
];

const ssData = {
  text: 'Flying from Mumbai to London? This route-specific jet lag planner gives you a custom plan to shift your schedule westward—no melatonin needed. ✈️🇮🇳➡️🇬🇧',
  hashtags: 'JetLag,LondonTravel',
  title: 'Mumbai to London Jet Lag Plan',
};

const title = 'Jet Lag Plan: Mumbai to London – Fast Recovery Guide';
const description =
  'Create a personalized jet lag recovery plan for flights from Mumbai to London. Adjust your sleep, light, and meals day-by-day to sync with the new timezone.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Optimized for Mumbai → London long-haul flights',
      'Sleep, light, and meal timing strategies',
      'Custom prep windows based on your flight',
      'Works with your usual bedtime/wake time',
      'Exportable PDF plans for travel convenience',
      'Science-backed circadian rhythm alignment',
    ],
    steps: [
      {
        name: 'Step 1: Choose Mumbai as Departure City',
        description:
          'Start by selecting Mumbai as your departure to align with India Standard Time (IST).',
      },
      {
        name: 'Step 2: Select London as Arrival City',
        description:
          'Choose London to calculate the correct timezone shift to British Summer Time (BST) or GMT.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Input your departure and arrival times to calculate timezone shift and duration.',
      },
      {
        name: 'Step 4: Provide Your Regular Sleep Schedule',
        description:
          'Enter your normal bedtime and wake-up hours to generate a custom circadian reset plan.',
      },
      {
        name: 'Step 5: Choose When to Start Adjusting',
        description:
          'Decide if you want to begin shifting before or after your flight.',
      },
      {
        name: 'Step 6: View & Export Your Personalized Plan',
        description:
          'You’ll get a full schedule for sleep, light exposure, and meals — with PDF export.',
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
  head: 'Jet Lag Plan: Mumbai to London',
  subHead:
    'Adjust to a 4.5‑hour westward shift from IST to BST/GMT with our science-based, day-by-day recovery guide.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for Mumbai → London',
  faqsHead: 'FAQs',
  linksHead: 'Popular European & Asian Routes',
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
    departureTZ: 'Mumbai@@Asia/Kolkata',
    destinationTZ: 'London@@Europe/London',
    flightDuration: 5,
  },
});
