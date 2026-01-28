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
    title: 'Step 1: Select London Departure',
    description:
      'Use the picker to choose Heathrow (GMT/BST) so we start from UK time.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Dubai Arrival',
    description:
      'Pick Dubai Intl (GST) to program a 4‑hour sleep‑advance schedule.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter Heathrow Departure',
    description:
      'Log your exact takeoff time to set the baseline for your first adjustment.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter Dubai Arrival',
    description:
      'Provide your landing time to align with Dubai’s desert‑sunrise cues.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Bedtime',
    description:
      'Tell us when you normally sleep so we can phase your bedtime earlier daily.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake‑Up Time" />,
    title: 'Step 6: Add Your Wake‑Up',
    description:
      'Record your usual wake time to anchor morning light and melatonin timing.',
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
      'Decide whether to begin sleep‑advances before departure or after landing.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a PDF with Burj Khalifa‑inspired cues and melatonin schedules.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Sunrise Advance" />
    ),
    title: 'Sunrise Advance',
    description:
      'Align your wake‑up with Dubai’s desert sunrise for a natural phase‑advance cue.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Melatonin Scheduling"
      />
    ),
    title: 'Melatonin Scheduling',
    description:
      '0.5–1 mg one hour before target bedtime to support earlier sleep onset.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Offset Handling" />
    ),
    title: 'Offset Handling',
    description:
      'Automatically factors GMT→GST shifts so your schedule remains accurate.',
  },
];

const tips = [
  {
    title: 'Desert Sunrise Stroll',
    description:
      'Take a brief walk in early morning light near the Burj Khalifa to reset your clock.',
  },
  {
    title: 'Early Iftar‑Style Dinner',
    description:
      'Have your first meal at local sunset hours (e.g. 6 PM GST) to cue your digestive rhythm.',
  },
  {
    title: 'Controlled Evening Lighting',
    description:
      'Dim your lights after 8 PM GST and use warm bulbs to signal your body toward earlier sleep.',
  },
  {
    title: 'Pre‑Flight Relaxation Ritual',
    description:
      'Practice gentle stretching or meditation 2 hours before departure to prepare your body for phase‑advance.',
  },
];

const faqs = [
  {
    question: 'Do I need melatonin for a 4‑hour advance?',
    answer:
      'Yes—low‑dose melatonin supports earlier sleep when adjusting 1–2 hours per day.',
  },
  {
    question: 'Can I start advances during my flight?',
    answer:
      'Absolutely—select “start on departure” to begin your nightly advances at takeoff.',
  },
  {
    question: 'How do I handle BST vs GST?',
    answer:
      'Our planner auto‑detects BST→GST changes; just select your travel date and we’ll adjust.',
  },
];

const links = [
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
];

const howItWorks = [
  'Calculates your 4‑hour phased advance from GMT/BST→GST on your travel date.',
  'Schedules daily sleep‑advance increments to align you with Dubai time.',
  'Integrates desert sunrise walks and controlled lighting for natural adaptation.',
  'Generates a PDF with landmark‑based, step‑by‑step cues and melatonin timings.',
];

const ssData = {
  text: 'Flying London → Dubai? Reset your clock with our 4‑hour sleep‑advance plan featuring desert sunrise and melatonin cues! 🌇🏜🇦🇪',
  hashtags: 'JetLag,LondonDubai',
  title: 'London to Dubai Jet Lag Plan',
};

const title = 'Jet Lag: London to Dubai – 4‑Hour Advance Plan';
const description =
  'Conquer a 4‑hour eastward shift from London (GMT/BST) to Dubai (GST) with desert sunrise cues, melatonin timing, and step‑by‑step sleep advances.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '4‑hour eastward phase advance with melatonin',
      'Desert sunrise and Burj Khalifa light cues',
      'Step‑by‑step sleep‑advance schedule',
      'Automatic GMT→GST offset handling',
      'PDF export with landmark‑inspired guidance',
    ],
    steps: [
      {
        name: 'Step 1: Select London Departure',
        description:
          'Choose London Heathrow (GMT/BST) as your origin so we anchor to UK time before your eastward journey.',
      },
      {
        name: 'Step 2: Select Dubai Arrival',
        description:
          'Pick Dubai International (GST) to plan a 4‑hour phased advance into Gulf Standard Time.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Log your Heathrow takeoff and DXB landing times to align your first cue with Dubai’s sunrise over the desert.',
      },
      {
        name: 'Step 4: Provide Sleep Window',
        description:
          'Enter your usual bedtime and wake‑up so we can create incremental sleep‑advance steps.',
      },
      {
        name: 'Step 5: Generate & Download Plan',
        description:
          'Review your PDF—complete with Burj Khalifa morning light cues and timed melatonin guidance.',
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
  head: 'Jet Lag Plan: London to Dubai',
  subHead:
    'Conquer a 4‑hour eastward shift with phased sleep‑advances, desert sunrise cues, melatonin scheduling, and evening light control.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for London → Dubai',
  faqsHead: 'FAQs',
  linksHead: 'Middle East & Asian Connections',
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
    departureTZ: 'London@@Europe/London',
    destinationTZ: 'Dubai@@Asia/Dubai',
    flightDuration: 10,
  },
});
