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
    title: 'Step 1: Select New York Departure',
    description:
      'Use our city picker to choose New York (EST) as your starting point for accurate time alignment.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select London Destination',
    description:
      'Pick London (GMT/BST) so the planner can calculate your 5‑hour phase shift eastward.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter Your JFK Departure',
    description:
      'Input your exact departure time to sync your first sleep adjustment with New York’s pre‑flight window.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter Your Heathrow Arrival',
    description:
      'Log your landing time so the tool can slot in the first London‑time morning cue by the Thames.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Usual Bedtime',
    description:
      'Tell us when you normally sleep, so we can build a phased schedule that lands you at the right London‑time night.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake Time" />,
    title: 'Step 6: Add Your Usual Wake‑Up',
    description:
      'Record your typical wake‑up hour to align daylight exposure with London’s sunrise.',
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
      'Decide whether to begin adjustments before departure or upon landing in London.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a printable PDF—complete with stage‑by‑stage light, meal, and melatonin instructions anchored to London landmarks.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Sunrise Anchoring" />
    ),
    title: 'Sunrise Anchoring',
    description:
      'Synchronize your wake times with London’s first light over the Thames for a natural circadian boost.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Landmark‑Based Cues"
      />
    ),
    title: 'Landmark‑Based Cues',
    description:
      'Incorporate iconic routines—like an 8 AM coffee near Big Ben—to solidify your new time rhythm.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Melatonin Coordination"
      />
    ),
    title: 'Melatonin Coordination',
    description:
      'Targeted 0.5 mg doses timed to London evenings help you fall asleep as Big Ben chimes 10 PM.',
  },
];

const tips = [
  {
    title: 'Sip a Flat White at Dawn',
    description:
      'Plan your first activity around London’s café scene—morning caffeine by 6 AM GMT helps reset your alertness.',
  },
  {
    title: 'Use Hyde Park for Light Therapy',
    description:
      'Take a 20‑minute walk in Hyde Park at sunrise to reinforce your new wake‑time rhythm.',
  },
  {
    title: 'Align Meals with British Customs',
    description:
      'Have your first meal at a traditional English breakfast slot (7–9 AM GMT) to cue your metabolic clock.',
  },
  {
    title: 'Evening Tea as a Wind‑Down',
    description:
      'Enjoy a decaf tea around 8 PM GMT to signal your body to produce sleep hormones.',
  },
];

const faqs = [
  {
    question: 'Will Big Ben’s 10 PM chime help me sleep?',
    answer:
      'Yes—timed melatonin before local 10 PM leverages your body’s natural wind‑down, syncing with London’s night.',
  },
  {
    question: 'How do I handle BST start/end?',
    answer:
      'Our planner auto‑detects BST changes—just choose your travel date, and we’ll adjust daily cues accordingly.',
  },
  {
    question: 'Can I start adjustments mid‑flight?',
    answer:
      'Absolutely—use our “start on departure” option to begin melatonin and light cues at 30,000 ft.',
  },
];

const links = [
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
];

const howItWorks = [
  'Calculates your 5‑hour eastward shift across EST→GMT (or BST) on your travel date.',
  'Builds a day‑by‑day plan anchored to London sunrise, meals, and evening wind‑down rituals.',
  'Schedules melatonin doses to align with London‑time evenings and Big Ben chimes.',
  'Generates a PDF with landmark‑inspired cues for an effortless recovery in the UK’s capital.',
];

const ssData = {
  text: 'Flying NY → London? Shift your sleep 5 hours earlier with our science‑backed jet lag planner—melatonin included! 🌍✈️🇬🇧',
  hashtags: 'JetLag,NYtoLondon',
  title: 'New York to London Jet Lag Plan',
};

const title = 'Jet Lag: New York to London – 5‑Hour Recovery Plan';
const description =
  'Beat jet lag flying New York (EST) to London (GMT/BST) with a custom day‑by‑day plan featuring sunrise cues, meal timing, and melatonin strategies.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '5‑hour eastward shift with phased advance',
      'Sleep, light, meal timing strategies',
      'Melatonin guidance for earlier sleep',
      'Automatic DST adjustment (EST→BST)',
      'PDF export of personalized plan',
    ],
    steps: [
      {
        name: 'Step 1: Set Your Point of Origin (New York)',
        description:
          'Begin by choosing New York (JFK) as your departure hub—this anchors all time calculations to Eastern Time before your eastward journey.',
      },
      {
        name: 'Step 2: Specify Your London Arrival',
        description:
          'Select London (Heathrow) as your target—this tells the planner to map a 5‑hour advance into GMT (or BST in summer).',
      },
      {
        name: 'Step 3: Log Exact Flight Schedule',
        description:
          'Enter your JFK takeoff and Heathrow landing times to compute when your body will hit local sunrise and sunset.',
      },
      {
        name: 'Step 4: Share Your Regular Sleep Window',
        description:
          'Provide your typical bedtime and wake‑up hours so the tool can phase your sleep toward London’s day‑night rhythm.',
      },
      {
        name: 'Step 5: Generate & Download Your Action Plan',
        description:
          'Review your custom PDF plan—complete with London sunrise cues by the Thames and West End–inspired evening light exercises.',
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
  head: 'Jet Lag Plan: New York to London',
  subHead:
    'Recover from a 5‑hour eastward shift with science‑backed light, meal, and melatonin guidance.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Recovery Tips',
  faqsHead: 'FAQs',
  linksHead: 'Transatlantic & Major Hub Routes',
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
    departureTZ: 'New York@@America/New_York',
    destinationTZ: 'London@@Europe/London',
    flightDuration: 12,
  },
});
