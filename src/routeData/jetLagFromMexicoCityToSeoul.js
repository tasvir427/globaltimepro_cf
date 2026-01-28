import { FaSun, FaMountain, FaRegCalendarAlt } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { TbClock, TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <GiWorld
        className={styles.stepIcon}
        aria-label="Americas to Asia Journey"
      />
    ),
    title: 'Step 1: Map Your Transcontinental Route',
    description:
      'Input your MEX-ICN flight across the Pacific. This eastward journey crosses the International Date Line, creating a 15-hour time difference with unique circadian challenges.',
  },
  {
    icon: (
      <TbClock className={styles.stepIcon} aria-label="Time Zone Strategy" />
    ),
    title: 'Step 2: Configure for High-Altitude Adaptation',
    description:
      "Mexico City's 2,240m altitude affects sleep architecture. Plan your transition to Seoul's sea-level sleeping patterns for optimal recovery.",
  },
  {
    icon: (
      <FaMountain
        className={styles.stepIcon}
        aria-label="Altitude Adjustment"
      />
    ),
    title: 'Step 3: Valley to Megacity Sleep Strategy',
    description:
      "Adapt from Mexico Valley's high-altitude thin air to Seoul's dense urban atmosphere. Oxygen levels significantly impact sleep quality and jet lag recovery.",
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Urban Adaptation"
      />
    ),
    title: 'Step 4: Get Your Joseon Dynasty Sleep Protocol',
    description:
      "Download your PDF with strategies adapted to Korean business culture and Seoul's 24-hour urban rhythm.",
  },
];

const features = [
  {
    icon: (
      <FaRegCalendarAlt
        className={styles.featureIcon}
        aria-label="Cultural Time Adaptation"
      />
    ),
    title: 'Cultural Time Perception Bridge',
    description:
      'Adapts from Mexican "mañana" time flexibility to Korean precision punctuality, accounting for different social and business timing expectations.',
  },
  {
    icon: (
      <FaMountain
        className={styles.featureIcon}
        aria-label="Altitude Science"
      />
    ),
    title: 'High-Altitude Sleep Science',
    description:
      "Incorporates research on altitude sleep patterns and the transition to sea-level sleeping in one of Asia's most densely populated cities.",
  },
  {
    icon: <FaSun className={styles.featureIcon} aria-label="Light Strategy" />,
    title: 'Latitude Light Strategy',
    description:
      "Manages transition from Mexico City's tropical latitude (19°N) to Seoul's temperate latitude (37°N) with different seasonal light variations.",
  },
];

const tips = [
  {
    title: 'Altitude Acclimatization Strategy',
    description:
      "Start hydration 72 hours before departure to compensate for Mexico City's altitude. Continue electrolyte balance during flight to aid sea-level adaptation.",
  },
  {
    title: 'Meal Timing Cultural Bridge',
    description:
      "Gradually shift meal times toward Korean schedule: later dinners (7-9pm vs. Mexico's 2-4pm comida) to align with business culture.",
  },
  {
    title: 'Date Line Mathematics',
    description:
      'You arrive in Seoul "yesterday" relative to departure. Use this psychological advantage—you\'re only 9 hours "ahead" biologically despite the 15-timezone difference.',
  },
  {
    title: 'Han River Morning Strategy',
    description:
      "Use Seoul's Han River parks for morning light exposure. The reflective water surface provides optimal light intensity for circadian resetting.",
  },
];

const faqs = [
  {
    question:
      "How does Mexico City's high altitude affect jet lag preparation?",
    answer:
      'The 2,240m elevation causes lighter sleep stages and more frequent awakenings. Pre-adapting to sea-level sleep patterns requires specialized strategies.',
  },
  {
    question:
      'What is the actual biological time difference after Date Line crossing?',
    answer:
      'While 15 time zones separate the cities, crossing the Date Line eastbound makes the effective biological difference 9 hours forward, not 15.',
  },
  {
    question:
      'How do seasonal differences between locations impact adjustment?',
    answer:
      "Mexico City's consistent tropical light vs. Seoul's distinct four seasons requires different light management strategies throughout the year.",
  },
  {
    question: 'What are the key differences in business time culture?',
    answer:
      'Korean business starts earlier (8-9am) with longer hours, while Mexican business has later starts but includes long midday breaks. Our plan bridges this gap.',
  },
];

const links = [
  { name: 'Toronto → Tokyo', path: `/${PATHS.jetLagFromTorontoToTokyo}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'Cairo → Beijing', path: `/${PATHS.jetLagFromCairoToBeijing}` },
  {
    name: 'São Paulo → Frankfurt',
    path: `/${PATHS.jetLagFromSaoPauloToFrankfurt}`,
  },
  { name: 'Chicago → Rome', path: `/${PATHS.jetLagFromChicagoToRome}` },
];

const howItWorks = [
  'Calculates the effective 9-hour biological difference after International Date Line crossing mathematics',
  "Incorporates high-altitude sleep research from Mexico City's unique elevation challenges",
  "Uses Seoul's distinct seasonal light patterns (4pm winter sunsets vs. 8pm summer sunsets) for precise light therapy timing",
  'Accounts for cultural differences in meal timing, business hours, and social scheduling between Mexican and Korean cultures',
  'Provides specific oxygen adaptation strategies for moving from high-altitude thin air to sea-level dense atmosphere',
];

const ssData = {
  text: 'Master the high-altitude to megacity time jump! Mexico City to Seoul jet lag strategies for the 15-timezone trans-Pacific journey.',
  hashtags: 'jetlag,MexicoCitySeoul,altitudetravel,Koreatravel,businesstravel',
  title: 'Jet Lag Planner: Mexico City to Seoul Altitude Bridge',
};

const title = 'Jet Lag Planner: Mexico City to Seoul';
const description =
  'Conquer 15 time zones from high-altitude capital to Asian megacity. Science-based strategies for altitude adaptation and cultural time differences.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'High-altitude to sea-level sleep adaptation',
      'Cultural time perception bridging strategies',
      'International Date Line crossing optimization',
      'Latitude-based light therapy adjustments',
    ],
    steps: [
      {
        name: 'Map your transcontinental route',
        description:
          'Input MEX to ICN flight details across the Pacific and Date Line.',
      },
      {
        name: 'Configure high-altitude adaptation',
        description:
          'Set sleep patterns accounting for Mexico City elevation effects.',
      },
      {
        name: 'Plan valley to megacity transition',
        description: 'Adjust for altitude and atmospheric density changes.',
      },
      {
        name: 'Download your Joseon sleep protocol',
        description:
          'Get PDF with strategies for Korean business culture adaptation.',
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
  head: 'Mexico City to Seoul Jet Lag Master',
  subHead:
    'From high-altitude valley to high-tech megacity—bridge 15 time zones with altitude-aware strategies and cultural time adaptation',
  featuresHead: 'Altitude to Megacity Specialized Features',
  tipsHead: 'Aztec to Joseon: Cultural Time Bridge Secrets',
  faqsHead: 'High-Altitude to Sea-Level Jet Lag Questions',
  linksHead: 'Americas to Asia Routes',
  howItWorksHead: 'The Science of Altitude and Time Zone Transition',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Mexico City@@America/Mexico_City',
    destinationTZ: 'Seoul@@Asia/Seoul',
    flightDuration: 30,
  },
});
