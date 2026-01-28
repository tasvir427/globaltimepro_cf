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
    title: 'Step 1: Select Berlin Departure',
    description:
      'Use the picker to choose Berlin Brandenburg (CET/CEST) as your origin.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Bangkok Arrival',
    description:
      'Choose Suvarnabhumi Airport (ICT) so our planner applies a 5‑hour advance.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter BER Departure',
    description:
      'Log your exact flight takeoff time to anchor your first sleep‑advance.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter BKK Arrival',
    description:
      'Provide your landing time to schedule sunrise cues by the river.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Bedtime',
    description:
      'Enter your normal bedtime so we can phase your sleep earlier each day.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake‑Up Time" />,
    title: 'Step 6: Add Your Wake‑Up',
    description:
      'Record your typical wake‑up so morning light cues align with Thailand sunrise.',
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
      'Decide whether to begin sleep‑advances before departure or upon arrival.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a PDF featuring Temple of Dawn sunrise cues and melatonin timing.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Sunrise River Cues"
      />
    ),
    title: 'Sunrise River Cues',
    description:
      'Anchor your first wake‑time with morning light by Bangkok’s Chao Phraya River.',
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
      '0.5–1 mg one hour before your target bedtime to support daily advances.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Offset Handling" />
    ),
    title: 'Offset Handling',
    description:
      'Automatically factors CET→ICT shifts so your plan is accurate on travel dates.',
  },
];

const tips = [
  {
    title: 'Morning River Walks',
    description:
      'Take a 20‑minute stroll along the Chao Phraya after sunrise to lock in Thailand time.',
  },
  {
    title: 'Early Curries for Dinner',
    description:
      'Have your last meal at 6 PM ICT—try a light curry to cue your digestive clock.',
  },
  {
    title: 'Pre‑Bedtime Melatonin',
    description:
      'Take a low dose (0.5 mg) one hour before bedtime to help shift your sleep earlier.',
  },
  {
    title: 'Limit Evening Screens',
    description:
      'Avoid blue light from devices after 9 PM ICT to reinforce melatonin’s effects.',
  },
];

const faqs = [
  {
    question: 'Do I need melatonin for a 5‑hour advance?',
    answer:
      'Yes—low‑dose melatonin helps you fall asleep earlier when adjusting 1–2 hours per day.',
  },
  {
    question: 'Can I start advances mid‑flight?',
    answer:
      'Absolutely—select “start on departure” to begin your sleep‑advance routine as soon as you take off.',
  },
  {
    question: 'How do I handle CET vs ICT?',
    answer:
      'Our planner auto‑detects CET→ICT changes; just choose your travel date and we’ll adjust.',
  },
];

const links = [
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'Chicago → Rome', path: `/${PATHS.jetLagFromChicagoToRome}` },
  {
    name: 'São Paulo → Frankfurt',
    path: `/${PATHS.jetLagFromSaoPauloToFrankfurt}`,
  },
];

const howItWorks = [
  'Calculates your 5‑hour phase advance from CET/CEST→ICT on your travel date.',
  'Schedules daily sleep‑advance steps with Chao Phraya sunrise cues.',
  'Integrates melatonin dosing and screen‑time limits for effective adaptation.',
  'Generates a downloadable PDF with Bangkok‑inspired, step‑by‑step guidance.',
];

const ssData = {
  text: 'Flying Berlin → Bangkok? Shift your sleep 5 hours earlier with our Chao Phraya sunrise and melatonin‑aided plan! 🌅🌏🇹🇭',
  hashtags: 'JetLag,BerlinBangkok',
  title: 'Berlin to Bangkok Jet Lag Plan',
};

const title = 'Jet Lag: Berlin to Bangkok – 5‑Hour Advance Plan';
const description =
  'Beat a 5‑hour eastward shift from Berlin (CET/CEST) to Bangkok (ICT) with Chao Phraya sunrise cues, melatonin timing, and step‑by‑step sleep‑advance guidance.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '5‑hour eastward phase advance with melatonin',
      'Chao Phraya sunrise and Temple of Dawn cues',
      'Guided daily sleep‑advance schedule',
      'Automatic CET→ICT offset handling',
      'PDF export with landmark‑inspired guidance',
    ],
    steps: [
      {
        name: 'Step 1: Select Berlin Departure',
        description:
          'Choose Berlin Brandenburg (BER, CET/CEST) so your baseline aligns with Central European time.',
      },
      {
        name: 'Step 2: Select Bangkok Arrival',
        description:
          'Pick Bangkok Suvarnabhumi (BKK, ICT) to plan a 5‑hour daily sleep‑advance into Thailand time.',
      },
      {
        name: 'Step 3: Enter Flight Times',
        description:
          'Log your BER departure and BKK arrival times to synchronize your first morning cue by the Chao Phraya River.',
      },
      {
        name: 'Step 4: Provide Sleep Window',
        description:
          'Input your usual bedtime and wake‑up hours so the tool can schedule incremental advances.',
      },
      {
        name: 'Step 5: Generate & Download Plan',
        description:
          'Review a PDF schedule—complete with Temple of Dawn sunrise cues and melatonin recommendations.',
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
  head: 'Jet Lag Plan: Berlin to Bangkok',
  subHead:
    'Conquer a 5‑hour eastward shift with phased sleep‑advances, Chao Phraya sunrise cues, melatonin scheduling, and screen‑time control.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for Berlin → Bangkok',
  faqsHead: 'FAQs',
  linksHead: 'Asian & European Routes',
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
    departureTZ: 'Berlin@@Europe/Berlin',
    destinationTZ: 'Bangkok@@Asia/Bangkok',
    flightDuration: 15,
  },
});
