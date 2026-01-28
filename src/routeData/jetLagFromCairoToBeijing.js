import {
  FaMoon,
  FaSun,
  FaMountain,
  FaHistory,
  FaFilePdf,
} from 'react-icons/fa';
import { TbSunset2 } from 'react-icons/tb';
import { BiPyramid } from 'react-icons/bi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <BiPyramid
        className={styles.stepIcon}
        aria-label="Ancient Civilizations Journey"
      />
    ),
    title: 'Step 1: Chart Your Silk Road in Reverse',
    description:
      'Input your CAI-PEK flight details across ancient trade routes. The eastbound journey follows historical paths but crosses diverse climate zones affecting sleep patterns.',
  },
  {
    icon: (
      <FaMoon className={styles.stepIcon} aria-label="Set Sleep Schedule" />
    ),
    title: 'Step 2: Align with Dual Time Histories',
    description:
      'Egypt uses EET (UTC+2) year-round while China maintains single timezone (UTC+8) despite spanning five geographical zones. The consistent 6-hour difference simplifies planning.',
  },
  {
    icon: (
      <TbSunset2
        className={styles.stepIcon}
        aria-label="Light Exposure Planning"
      />
    ),
    title: 'Step 3: Desert to Megacity Light Strategy',
    description:
      "Plan light exposure shifting from Cairo's clear desert skies to Beijing's urban light environment. Different atmospheric conditions affect melatonin production.",
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download Plan" />,
    title: 'Step 4: Get Your Great Wall Defense Plan',
    description:
      "Download your PDF with strategies to protect your sleep against Beijing's bustling 24-hour culture and late business dinners.",
  },
];

const features = [
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Time Patterns"
      />
    ),
    title: 'Ancient Civilization Sleep Wisdom',
    description:
      "Incorporates research on traditional sleep patterns in both cultures, including siesta adaptations for Beijing's intense business schedule.",
  },
  {
    icon: (
      <FaMountain
        className={styles.featureIcon}
        aria-label="Altitude and Climate Adaptation"
      />
    ),
    title: 'Climate Zone Transition Strategy',
    description:
      "Accounts for moving from Nile delta humidity to North China plain dryness, with hydration plans specific to the route's atmospheric changes.",
  },
  {
    icon: (
      <FaSun
        className={styles.featureIcon}
        aria-label="Seasonal Light Variations"
      />
    ),
    title: 'Monsoon vs. Desert Light Patterns',
    description:
      "Adapts to Beijing's seasonal haze variations and Cairo's consistent desert light—critical for effective light therapy timing.",
  },
];

const tips = [
  {
    title: 'Flight Path Hydration Strategy',
    description:
      'The route over Central Asia crosses multiple arid regions. Start hydrating with Egyptian hibiscus tea (known for hydration) 48 hours before departure.',
  },
  {
    title: 'Business Meeting Timing',
    description:
      'Schedule important Beijing meetings for your biological afternoon (9-11am Beijing time equals 3-5am Cairo time—peak alertness for early risers).',
  },
  {
    title: 'The Ramadan Consideration',
    description:
      'If traveling during Islamic months, adjust for fasting schedules which naturally alter sleep patterns in Cairo—plan accordingly for Beijing arrival.',
  },
  {
    title: 'Temple of Heaven Morning Strategy',
    description:
      "Use Beijing's Temple of Heaven Park for morning light exposure—the large open spaces provide optimal light intensity for circadian resetting.",
  },
];

const faqs = [
  {
    question:
      'Why does the 6-hour time difference feel more severe than expected?',
    answer:
      'The eastward direction combined with crossing multiple climate zones and cultural time usage patterns amplifies the physiological impact beyond the numerical difference.',
  },
  {
    question:
      "How does Beijing's single timezone policy affect jet lag recovery?",
    answer:
      'China uses Beijing time nationwide, so even western regions follow Beijing schedule. This consistency helps once adjusted, but the geographical mismatch can cause initial disorientation.',
  },
  {
    question:
      'What is the best season to travel from Cairo to Beijing for minimizing jet lag?',
    answer:
      'Spring and autumn offer similar daylight hours in both cities, making circadian adjustment smoother than extreme summer/winter differences.',
  },
  {
    question:
      'How do meal times differ between Egyptian and Chinese business culture?',
    answer:
      "Beijing business dinners typically start later (7-8pm) than Cairo's (2-3pm main meal). Our plan gradually shifts your eating schedule to accommodate this difference.",
  },
];

const links = [
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.jetLagFromMexicoCityToSeoul}`,
  },
];

const howItWorks = [
  'Leverages the consistent 6-hour time difference (Cairo UTC+2 to Beijing UTC+8) for predictable adjustment patterns',
  'Incorporates research on desert climate vs. temperate continental climate effects on sleep quality and duration',
  "Uses Beijing's urban light pollution patterns to optimize artificial light exposure strategies",
  'Accounts for cultural differences in meal timing and business hours between Middle Eastern and East Asian cultures',
  'Provides specific hydration strategies for transitioning from Nile humidity to North China plain dryness',
];

const ssData = {
  text: 'Master the Cairo to Beijing time jump! Ancient civilizations meet modern jet lag science for the ultimate eastward journey.',
  hashtags: 'jetlag,CairoBeijing,SilkRoad,travelchina,businesstravel',
  title: 'Jet Lag Planner: Cairo to Beijing Time Bridge',
};

const title = 'Jet Lag Planner: Cairo to Beijing';
const description =
  'Bridge 6 time zones from Nile to Great Wall. Science-based strategies accounting for desert-to-megacity transition and cultural time differences.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Ancient civilization sleep pattern integration',
      'Desert to temperate climate adaptation strategies',
      'Cultural meal timing adjustment for business travel',
      'Consistent 6-hour time difference optimization',
    ],
    steps: [
      {
        name: 'Chart your Silk Road journey',
        description:
          'Input CAI to PEK flight details across historical trade routes.',
      },
      {
        name: 'Align with dual time histories',
        description:
          "Set sleep patterns considering Egypt and China's unique timekeeping approaches.",
      },
      {
        name: 'Plan desert to megacity light transition',
        description:
          'Adjust light exposure strategies for different atmospheric conditions.',
      },
      {
        name: 'Download your Great Wall defense plan',
        description:
          'Get PDF with cultural and physiological adaptation strategies.',
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
  head: 'Cairo to Beijing Jet Lag Bridge',
  subHead:
    'Navigate 6 time zones from ancient pyramids to modern megacity with culturally-aware jet lag strategies',
  featuresHead: 'Silk Road Meets Sleep Science',
  tipsHead: 'Pharaoh to Emperor: Time Transition Secrets',
  faqsHead: 'Middle East to East Asia Jet Lag Questions',
  linksHead: 'Middle East to Asia Routes',
  howItWorksHead: 'Bridging Civilizations Through Sleep Science',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Cairo@@Africa/Cairo',
    destinationTZ: 'Beijing@@Asia/Shanghai',
    flightDuration: 15,
  },
});
