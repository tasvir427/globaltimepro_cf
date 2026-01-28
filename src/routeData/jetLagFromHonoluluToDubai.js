import { FaMoon, FaSun, FaWater, FaCloudSun } from 'react-icons/fa';
import { GiCactus } from 'react-icons/gi';
import { TbBeach, TbWorld } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Global Journey" />,
    title: 'Step 1: Map Your Hemisphere Leap',
    description:
      'Input your HNL-DXB flight across the Pacific and Asia. This eastward journey spans 14 time zones but crosses the International Date Line, creating an effective 10-hour forward time jump.',
  },
  {
    icon: (
      <FaMoon className={styles.stepIcon} aria-label="Set Sleep Schedule" />
    ),
    title: 'Step 2: Tropical to Desert Sleep Adaptation',
    description:
      "Honolulu's consistent 12-hour daylight year-round contrasts with Dubai's seasonal variations. Adjust from ocean-regulated rhythms to desert climate patterns.",
  },
  {
    icon: (
      <FaCloudSun className={styles.stepIcon} aria-label="Light Strategy" />
    ),
    title: 'Step 3: Pacific vs. Desert Light Strategy',
    description:
      "Plan light exposure shifting from Hawaii's humid marine light to Dubai's intense desert sunlight with different UV intensity and atmospheric conditions.",
  },
  {
    icon: <GiCactus className={styles.stepIcon} aria-label="Download Plan" />,
    title: 'Step 4: Get Your Desert Adaptation Plan',
    description:
      "Download your PDF with strategies for Dubai's late-night business culture and climate adjustment from tropical paradise to desert metropolis.",
  },
];

const features = [
  {
    icon: (
      <TbBeach className={styles.featureIcon} aria-label="Tropical to Desert" />
    ),
    title: 'Climate Extreme Adaptation',
    description:
      "Special protocols for moving from Hawaii's 70-85°F range to Dubai's 50-110°F extremes, affecting sleep quality and hydration needs.",
  },
  {
    icon: (
      <FaSun
        className={styles.featureIcon}
        aria-label="Sunlight Intensity Change"
      />
    ),
    title: 'Sunlight Intensity Management',
    description:
      "Hawaii's filtered tropical light vs. Dubai's direct desert sunlight requires different light therapy timing and intensity strategies.",
  },
  {
    icon: (
      <FaWater className={styles.featureIcon} aria-label="Hydration Strategy" />
    ),
    title: 'Ocean to Desert Hydration Protocol',
    description:
      "Advanced hydration planning for moving from Hawaii's humid marine air to Dubai's arid desert climate with different electrolyte balance needs.",
  },
];

const tips = [
  {
    title: 'Date Line Math Strategy',
    description:
      'You "lose" a day flying east but gain 14 hours. Arrive in Dubai feeling like it\'s 4 hours earlier than Honolulu time, not 10 hours later.',
  },
  {
    title: 'Humidity Transition Protocol',
    description:
      "Start adapting 72 hours before departure by gradually reducing humidity exposure. Use Dubai's dry plane air to begin desert climate adaptation.",
  },
  {
    title: 'Business Culture Timing',
    description:
      "Dubai business hours start later than Honolulu's early morning culture. Schedule important meetings for your biological afternoon (2-4pm Dubai time).",
  },
  {
    title: 'Beach to Souk Light Therapy',
    description:
      'Use Waikiki sunrise walks pre-flight and Dubai Creek morning light exposure post-arrival for optimal circadian resetting in each environment.',
  },
];

const faqs = [
  {
    question: 'Why does the 14-hour time difference feel like only 10 hours?',
    answer:
      'Crossing the International Date Line eastbound subtracts a day but adds hours. You arrive in Dubai only 10 hours "ahead" biologically despite the 14-timezone difference.',
  },
  {
    question: "How does Hawaii's lack of daylight saving affect adjustment?",
    answer:
      'Hawaii stays on HST year-round, creating a consistent 14-hour difference with Dubai (13 during DST). This stability simplifies long-term adjustment strategies.',
  },
  {
    question: 'What is the best season for this journey to minimize jet lag?',
    answer:
      'Spring and autumn when temperature extremes are mildest in both locations, reducing additional climate adaptation stress on your system.',
  },
  {
    question: 'How do the different humidity levels affect sleep quality?',
    answer:
      'Moving from 60-70% humidity in Honolulu to 20-30% in Dubai significantly impacts breathing patterns and hydration needs during sleep.',
  },
];

const links = [
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  {
    name: 'Anchorage → Singapore',
    path: `/${PATHS.jetLagFromAnchorageToSingapore}`,
  },
  { name: 'Reykjavik → Tokyo', path: `/${PATHS.jetLagFromReykjavikToTokyo}` },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.jetLagFromLosAngelesToSydney}`,
  },
];

const howItWorks = [
  'Calculates the effective 10-hour time difference after accounting for International Date Line crossing eastbound',
  'Incorporates research on tropical vs. desert climate adaptation and its impact on circadian rhythms',
  "Uses Dubai's consistent sunrise/sunset times (minimal seasonal variation) for reliable light therapy scheduling",
  "Accounts for Hawaii's stable 12-hour daylight year-round in pre-departure planning",
  'Provides specific hydration strategies for moving from marine humid to desert arid environments',
];

const ssData = {
  text: 'Master the ultimate tropical to desert time jump! Honolulu to Dubai jet lag strategies for the 14-timezone journey.',
  hashtags: 'jetlag,HonoluluDubai,tropicaldesert,traveluae,businesstravel',
  title: 'Jet Lag Planner: Honolulu to Dubai Climate Leap',
};

const title = 'Jet Lag Planner: Honolulu to Dubai';
const description =
  'Conquer 14 time zones from tropical paradise to desert metropolis. Science-based strategies for climate extremes and International Date Line crossing.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'International Date Line crossing optimization',
      'Tropical to desert climate adaptation',
      'Humidity extreme management strategies',
      '14-timezone effective 10-hour difference planning',
    ],
    steps: [
      {
        name: 'Map your hemisphere leap',
        description: 'Input HNL to DXB flight details across Pacific and Asia.',
      },
      {
        name: 'Configure tropical to desert sleep',
        description: 'Set sleep patterns for climate and time zone transition.',
      },
      {
        name: 'Plan Pacific vs. desert light strategy',
        description:
          'Adjust light exposure for different atmospheric conditions.',
      },
      {
        name: 'Download your desert adaptation plan',
        description:
          "Get PDF with strategies for Dubai's climate and business culture.",
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
  head: 'Honolulu to Dubai Jet Lag Master',
  subHead:
    'From Pacific paradise to Arabian Gulf—master 14 time zones across climate extremes with science-based adaptation strategies',
  featuresHead: 'Tropical to Desert Specialized Features',
  tipsHead: 'Aloha to Marhaba: Climate Leap Secrets',
  faqsHead: 'Pacific to Arabian Gulf Jet Lag Questions',
  linksHead: 'Unique Long Distance Routes',
  howItWorksHead: 'The Science of Hemisphere Time Jumping',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Honolulu@@Pacific/Honolulu',
    destinationTZ: 'Dubai@@Asia/Dubai',
    flightDuration: 31,
  },
});
