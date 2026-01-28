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
    title: 'Step 1: Select Tokyo Departure',
    description:
      'Pick Tokyo (JST) to base your initial sleep and light schedule on Japan’s early morning rhythms.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Select Arrival City"
      />
    ),
    title: 'Step 2: Select Paris Arrival',
    description:
      'Choose Paris (CET/CEST) so we know you need to delay your clock by 8 hours westward.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Enter Departure Time"
      />
    ),
    title: 'Step 3: Enter NRT Departure',
    description:
      'Input your flight’s departure time to align initial sleep adjustments with Tokyo’s dusk.',
  },
  {
    icon: (
      <FaPlaneArrival
        className={styles.stepIcon}
        aria-label="Enter Arrival Time"
      />
    ),
    title: 'Step 4: Enter CDG Arrival',
    description:
      'Log your landing time to schedule your first Paris‑time morning cue at sunrise by the Seine.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bedtime" />,
    title: 'Step 5: Add Your Usual Bedtime',
    description:
      'Share when you normally sleep so we can phase delays into your home‑time pattern.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake-up Time" />,
    title: 'Step 6: Add Your Usual Wake‑Up',
    description:
      'Record your standard wake time to map daylight exposure around Paris’s early café openings.',
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
      'Decide to begin sleep delays before departure or upon arrival in Paris.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Step 8: Download Your Plan',
    description:
      'Export a printable PDF with Seine‑side morning walks and Montmartre sunset exercises to beat jet lag.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Sunlight Delay Strategy"
      />
    ),
    title: 'Sunlight Delay Strategy',
    description:
      'Shift your sleep cycle westward by delaying light exposure—start with an evening stroll near Shibuya Crossing.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="Café‑Timed Meals" />
    ),
    title: 'Café‑Timed Meals',
    description:
      'Use Parisian meal schedules—breakfast at a local café at 8 AM CET—to reset your metabolic clock.',
  },
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Incremental Sleep Delays"
      />
    ),
    title: 'Incremental Sleep Delays',
    description:
      'Push your bedtime later by 1–2 hours per day, culminating in Paris‑time nights by the Eiffel Tower.',
  },
];

const tips = [
  {
    title: 'Match Your First Meal to Paris Breakfast',
    description:
      'Have your first post‑arrival croissant and café au lait around 8 AM CET to cue your digestive rhythm.',
  },
  {
    title: 'Walk the Seine at Sunrise',
    description:
      'A 15‑minute riverside walk at dawn helps anchor your body clock to Paris’s daylight schedule.',
  },
  {
    title: 'Use Evening Patios for Light Control',
    description:
      'Spend early evenings on a terrace—gradual dimming of daylight helps your body adjust sleep readiness.',
  },
  {
    title: 'Hydrate with Matcha‑Style Tea Delays',
    description:
      'Sip a soothing herbal tea at Tokyo‑time midnight (4 PM CET) to ease your body into delayed sleep.',
  },
];

const faqs = [
  {
    question: 'Can I start delays during my Tokyo layover?',
    answer:
      'Yes—activate “start on departure” to begin incremental sleep delays during your mid‑flight transfer.',
  },
  {
    question: 'How do I handle CEST vs CET?',
    answer:
      'Our planner auto‑detects Central European Summer Time changes—just pick your travel date and we’ll adjust.',
  },
  {
    question: 'What if my flight is overnight?',
    answer:
      'Use our overnight‑flight option: we’ll anchor your first cue to Paris‑time morning light, regardless of takeoff.',
  },
];

const links = [
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
];

const howItWorks = [
  'Calculates your 8‑hour westward shift from JST to CET/CEST on your travel date.',
  'Schedules gradual bedtime delays and Seine‑side morning walks to reset your clock.',
  'Integrates Paris café breakfasts and evening patio light control for natural adaptation.',
  'Produces a PDF with step‑by‑step cues tied to Tokyo departure and Paris arrival landmarks.',
];

const ssData = {
  text: 'Traveling Tokyo → Paris? Conquer your 8‑hour jet lag with our fresh, landmark‑inspired recovery plan! ✈️🌏🗼',
  hashtags: 'JetLag,TokyoParis',
  title: 'Tokyo to Paris Jet Lag Plan',
};

const title = 'Jet Lag: Tokyo to Paris – 8‑Hour Westward Plan';
const description =
  'Beat the 8‑hour westward shift from Tokyo (JST) to Paris (CET/CEST) with staged sleep delays, Seine‑side light cues, and café‑timed meal strategies.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '8‑hour westward shift with phased sleep delay',
      'Sunrise walks along the Seine for circadian reset',
      'Café‑timed meal cues to reset your metabolic clock',
      'Incremental bedtime delays—no melatonin needed',
      'PDF export of your landmark‑inspired plan',
    ],
    steps: [
      {
        name: 'Step 1: Choose Tokyo as Departure',
        description:
          'Start at Tokyo Narita (JST) so we anchor your circadian baseline to Japan’s morning light and early matcha rituals.',
      },
      {
        name: 'Step 2: Select Paris as Arrival',
        description:
          'Set your destination to Paris Charles de Gaulle (CET/CEST) to plan an 8‑hour phased delay into European time.',
      },
      {
        name: 'Step 3: Input Flight Times',
        description:
          'Enter NRT takeoff and CDG landing times to map when you’ll sync with Parisian sunrise over the Seine.',
      },
      {
        name: 'Step 4: Provide Your Regular Sleep Window',
        description:
          'Tell us your usual bedtime and wake‑up to schedule gradual sleep delays and outdoor walks by the Louvre at dawn.',
      },
      {
        name: 'Step 5: Generate & Download Plan',
        description:
          'Review your PDF plan—complete with café‑cued meal times and Montmartre‑inspired evening wind‑downs.',
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
  head: 'Jet Lag Plan: Tokyo to Paris',
  subHead:
    'Overcome an 8-hour westward shift from JST to CET/CEST with our landmark-inspired, day-by-day recovery guide.',
  featuresHead: 'Advanced Route Features',
  tipsHead: 'Recovery Tips for Tokyo → Paris',
  faqsHead: 'FAQs',
  linksHead: 'Europe to Asia Connections',
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
    departureTZ: 'Tokyo@@Asia/Tokyo',
    destinationTZ: 'Paris@@Europe/Paris',
    flightDuration: 5.5,
  },
});
