import { FaSun, FaWater, FaSnowflake, FaTree } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { TbTemperature, TbClock } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <GiWorld
        className={styles.stepIcon}
        aria-label="Arctic to Equator Journey"
      />
    ),
    title: 'Step 1: Plot Your Polar to Equator Route',
    description:
      'Input your ANC-SIN flight across the Bering Sea and Asia. This journey spans 16 time zones with extreme climate transition from subarctic to tropical.',
  },
  {
    icon: (
      <TbClock
        className={styles.stepIcon}
        aria-label="Extreme Time Difference"
      />
    ),
    title: 'Step 2: Configure for 16-Hour Time Jump',
    description:
      'Anchorage (AKST) to Singapore (SGT) creates one of the largest time differences possible. The eastward direction amplifies circadian disruption.',
  },
  {
    icon: (
      <TbTemperature
        className={styles.stepIcon}
        aria-label="Climate Adaptation"
      />
    ),
    title: 'Step 3: Thermal Shock Management',
    description:
      "Plan for moving from Alaska's -30°F winter to Singapore's 90°F tropical climate. This 120°F temperature swing requires specialized adaptation.",
  },
  {
    icon: <FaTree className={styles.stepIcon} aria-label="Download Plan" />,
    title: 'Step 4: Get Your Equator Adaptation Plan',
    description:
      "Download your PDF with strategies for Singapore's equatorial light patterns and year-round consistent 12-hour daylight.",
  },
];

const features = [
  {
    icon: (
      <FaSnowflake
        className={styles.featureIcon}
        aria-label="Extreme Climate Adaptation"
      />
    ),
    title: 'Polar to Equator Climate Protocol',
    description:
      'Specialized strategies for one of the most extreme climate transitions in commercial travel, affecting sleep architecture and metabolic rate.',
  },
  {
    icon: (
      <FaSun
        className={styles.featureIcon}
        aria-label="Light Extreme Management"
      />
    ),
    title: 'Midnight Sun to Equatorial Light',
    description:
      "Manages transition from Alaska's extreme seasonal light variations to Singapore's consistent 12-hour days year-round.",
  },
  {
    icon: (
      <FaWater className={styles.featureIcon} aria-label="Hydration Strategy" />
    ),
    title: 'Arctic Dryness to Tropical Humidity',
    description:
      "Advanced hydration planning for moving from Alaska's dry cold air to Singapore's 80%+ humidity, requiring different electrolyte strategies.",
  },
];

const tips = [
  {
    title: 'Seasonal Light Strategy',
    description:
      "If traveling during Alaska's summer midnight sun, use blackout strategies. During winter darkness, bring light therapy gear for the flight.",
  },
  {
    title: 'Temperature Gradual Adaptation',
    description:
      "Start adjusting your thermostat 72 hours before departure. Gradually increase temperature exposure to prepare for Singapore's heat.",
  },
  {
    title: 'Hydration for Latitude Extreme',
    description:
      'The dry cabin air combined with extreme latitude changes requires advanced hydration. Use electrolyte solutions, not just water.',
  },
  {
    title: 'Business Meeting Timing',
    description:
      'Schedule Singapore meetings during your biological morning (4-6pm Singapore time equals midnight-2am Alaska time—your natural alertness peak).',
  },
];

const faqs = [
  {
    question:
      'Why is the Anchorage to Singapore route particularly challenging for jet lag?',
    answer:
      'The combination of 16-timezone difference, eastward travel direction, and extreme climate transition creates the perfect storm for circadian disruption.',
  },
  {
    question:
      "How does Alaska's extreme daylight variation affect preparation?",
    answer:
      "Summer's 19+ hours of daylight vs. winter's 5 hours requires completely different pre-flight light management strategies for the same destination.",
  },
  {
    question:
      'What is the best seating strategy for this ultra-long-haul route?',
    answer:
      'Window seats help control light exposure during extreme daylight conditions. Aisle seats facilitate movement during the 15+ hour flight.',
  },
  {
    question: 'How do I manage the extreme temperature difference?',
    answer:
      'Layer clothing for gradual adjustment. Start with Alaska-appropriate layers and have Singapore-ready clothing accessible upon arrival.',
  },
];

const links = [
  { name: 'Singapore → London', path: `/${PATHS.jetLagFromSingaporeToLondon}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'Reykjavik → Tokyo', path: `/${PATHS.jetLagFromReykjavikToTokyo}` },
  { name: 'Honolulu → Dubai', path: `/${PATHS.jetLagFromHonoluluToDubai}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
];

const howItWorks = [
  'Accounts for the 16-hour time difference—one of the largest possible in commercial travel',
  'Incorporates research on extreme latitude travel and its effects on melatonin production and sleep architecture',
  "Uses Singapore's consistent equatorial light patterns (12-hour days year-round) for reliable circadian resetting",
  "Adapts to Anchorage's extreme seasonal light variations (5-19 hours of daylight) in pre-departure planning",
  'Provides specific protocols for managing 120°F temperature differential between locations',
];

const ssData = {
  text: 'Conquer the ultimate climate and time jump! Anchorage to Singapore jet lag strategies for 16 time zones and 120°F temperature difference.',
  hashtags:
    'jetlag,AnchorageSingapore,polarequator,extremetravel,climatetransition',
  title: 'Jet Lag Planner: Anchorage to Singapore Extreme Journey',
};

const title = 'Jet Lag Planner: Anchorage to Singapore';
const description =
  'Master 16 time zones from Arctic to Equator. Science-based strategies for extreme climate transition and one of the largest time differences in travel.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      '16-timezone difference optimization',
      'Polar to equator climate adaptation',
      'Extreme seasonal light variation management',
      '120°F temperature differential protocols',
    ],
    steps: [
      {
        name: 'Plot your polar to equator route',
        description:
          'Input ANC to SIN flight details across extreme latitudes.',
      },
      {
        name: 'Configure for 16-hour time jump',
        description:
          'Set sleep patterns for maximum time difference and eastward travel.',
      },
      {
        name: 'Plan thermal shock management',
        description: 'Adjust for extreme temperature and humidity changes.',
      },
      {
        name: 'Download your equator adaptation plan',
        description:
          "Get PDF with strategies for Singapore's equatorial climate.",
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
  head: 'Anchorage to Singapore Jet Lag Master',
  subHead:
    'From Arctic wilderness to equatorial metropolis—conquer 16 time zones and extreme climate transition with specialized science-based strategies',
  featuresHead: 'Polar to Equator Specialized Features',
  tipsHead: 'Arctic to Equator: Extreme Transition Secrets',
  faqsHead: 'Polar to Tropical Jet Lag Questions',
  linksHead: 'Unique Arctic & Asia Routes',
  howItWorksHead: 'The Science of Extreme Latitude Time Jumping',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Anchorage@@America/Anchorage',
    destinationTZ: 'Singapore@@Asia/Singapore',
    flightDuration: 31,
  },
});
