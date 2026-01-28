import {
  FaCity,
  FaFileDownload,
  FaPlane,
  FaRegClock,
  FaSnowflake,
} from 'react-icons/fa';
import { TbSunrise, TbClock24 } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaPlane
        className={styles.stepIcon}
        aria-label="Arctic to Pacific Journey"
      />
    ),
    title: 'Step 1: Plot Your Polar Route',
    description:
      'Input your KEF-NRT/HND flight details across the Arctic Circle. This great circle route over Greenland and Siberia creates unique sleep challenges with extended daylight exposure.',
  },
  {
    icon: (
      <TbClock24
        className={styles.stepIcon}
        aria-label="Extreme Time Difference"
      />
    ),
    title: 'Step 2: Configure for Extreme Time Jump',
    description:
      "The 9-hour difference is magnified by Iceland's midnight sun and Tokyo's precise time culture. Your body must adapt from flexible Icelandic time to Japan's exact scheduling.",
  },
  {
    icon: (
      <FaSnowflake
        className={styles.stepIcon}
        aria-label="Climate Adaptation"
      />
    ),
    title: 'Step 3: Thermal Transition Strategy',
    description:
      "Plan for moving from Reykjavik's cool maritime climate to Tokyo's humid subtropical environment. Temperature affects sleep quality and jet lag recovery significantly.",
  },
  {
    icon: (
      <FaFileDownload className={styles.stepIcon} aria-label="Download Plan" />
    ),
    title: 'Step 4: Get Your Samurai Sleep Strategy',
    description:
      "Download your PDF with disciplined sleep protocols tailored for Japanese business culture and Tokyo's 24-hour city rhythm.",
  },
];

const features = [
  {
    icon: (
      <TbSunrise
        className={styles.featureIcon}
        aria-label="Midnight Sun Adaptation"
      />
    ),
    title: 'Arctic Light Condition Adaptation',
    description:
      "Special strategies for travelers departing during Iceland's midnight sun (May-July) or polar night (Nov-Jan) seasons affecting melatonin production.",
  },
  {
    icon: (
      <FaCity
        className={styles.featureIcon}
        aria-label="Geothermal to Urban Transition"
      />
    ),
    title: 'Geothermal to Megacity Sleep Environment',
    description:
      "Adaptation from Reykjavik's quiet, geothermal-heated homes to Tokyo's dense urban soundscape and different bedding traditions.",
  },
  {
    icon: (
      <FaRegClock
        className={styles.featureIcon}
        aria-label="Cultural Time Perception"
      />
    ),
    title: 'Flexible vs. Precise Time Culture Bridge',
    description:
      'Helps transition from Iceland\'s relaxed "þetta reddast" (it will work out) timing to Japan\'s exact punctuality expectations in business settings.',
  },
];

const tips = [
  {
    title: 'Blue Lagoon to Onsen Transition',
    description:
      'Use geothermal bathing strategically—Icelandic hot pots pre-flight relax muscles, while Japanese onsen post-arrival help circadian reset through temperature therapy.',
  },
  {
    title: 'Seasonal Light Management',
    description:
      "If traveling during Iceland's midnight sun, use blackout strategies on the plane. During polar night, bring a light therapy lamp for the flight.",
  },
  {
    title: 'Hydration for High-Latitude Flight',
    description:
      "The Arctic route is extremely dehydrating. Start with Iceland's pure water 72 hours before departure and continue with Japanese green tea's L-theanine benefits.",
  },
  {
    title: 'Business Meeting Chronobiology',
    description:
      'Schedule important Tokyo meetings during your biological morning (3-5pm Tokyo time equals 6-8am Reykjavik time—when Icelanders are naturally most alert).',
  },
];

const faqs = [
  {
    question:
      'Why does the Reykjavik to Tokyo route cause such severe jet lag despite "only" 9 hours difference?',
    answer:
      'The combination of eastward travel, crossing the International Date Line westward, Arctic light conditions, and extreme climate difference amplifies the time change impact.',
  },
  {
    question:
      "How does Iceland's lack of daylight saving time affect adjustment?",
    answer:
      'Iceland stays on UTC year-round, creating a consistent 9-hour difference with Tokyo. This stability actually simplifies long-term adjustment compared to changing time differences.',
  },
  {
    question: 'What is the best seating strategy for the polar route?',
    answer:
      'Window seats on the north side provide darkness during midnight sun seasons, while aisle seats help with movement during the long flight over sparse northern regions.',
  },
  {
    question: 'How do Icelandic and Japanese sleep cultures differ?',
    answer:
      'Icelanders have more flexible sleep patterns influenced by extreme daylight variations, while Japanese culture emphasizes disciplined sleep schedules despite urban nightlife.',
  },
];

const links = [
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'Anchorage → Singapore',
    path: `/${PATHS.jetLagFromAnchorageToSingapore}`,
  },
  { name: 'Honolulu → Dubai', path: `/${PATHS.jetLagFromHonoluluToDubai}` },
  {
    name: 'São Paulo → Frankfurt',
    path: `/${PATHS.jetLagFromSaoPauloToFrankfurt}`,
  },
];

const howItWorks = [
  'Accounts for the unique great circle flight path over the Arctic Circle and Siberia with extended daylight exposure',
  'Incorporates research on high-latitude travel and its effects on circadian rhythms from polar medicine studies',
  "Uses Tokyo's precise sunrise/sunset times (varying only about 2 hours annually) for consistent light therapy scheduling",
  "Adapts to Reykjavik's extreme seasonal light variations (4-22 hours of daylight) in pre-departure planning",
  'Provides specific temperature adaptation strategies for moving from cool maritime to humid subtropical climates',
];

const ssData = {
  text: 'Conquer the ultimate time jump from Arctic to Pacific! Science-based jet lag strategies for Reykjavik to Tokyo polar route.',
  hashtags: 'jetlag,ReykjavikTokyo,polarroute,midnightsun,Japan travel',
  title: 'Jet Lag Planner: Reykjavik to Tokyo Polar Journey',
};

const title = 'Jet Lag Planner: Reykjavik to Tokyo';
const description =
  'Master the 9-hour time difference on the Arctic to Pacific polar route. Special strategies for midnight sun, climate transition, and cultural time differences.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Polar route optimization with Arctic Circle crossing',
      'Midnight sun and polar night seasonal adaptation',
      'Geothermal to urban sleep environment transition',
      'Flexible vs. precise time culture adjustment',
    ],
    steps: [
      {
        name: 'Plot your polar route journey',
        description: 'Input KEF to Tokyo flight details across Arctic regions.',
      },
      {
        name: 'Configure for extreme time jump',
        description:
          'Set sleep patterns accounting for 9-hour difference and light extremes.',
      },
      {
        name: 'Plan thermal climate transition',
        description:
          'Adjust for Iceland to Japan temperature and humidity changes.',
      },
      {
        name: 'Download your samurai sleep strategy',
        description:
          'Get PDF with disciplined protocols for Japanese business culture.',
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
  head: 'Reykjavik to Tokyo Jet Lag Master',
  subHead:
    'From Arctic midnight sun to Pacific precision—conquer 9 time zones across the polar route with climate-aware strategies',
  featuresHead: 'Polar Route Specialized Features',
  tipsHead: 'Viking to Samurai: Extreme Time Jump Secrets',
  faqsHead: 'Arctic to Pacific Jet Lag Questions',
  linksHead: 'Unique Long Haul Routes',
  howItWorksHead: 'The Science of Polar Route Circadian Adjustment',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Reykjavík@@Atlantic/Reykjavik',
    destinationTZ: 'Tokyo@@Asia/Tokyo',
    flightDuration: 22,
  },
});
