import {
  FaTreeCity,
  FaMountainSun,
  FaBookOpen,
  FaClockRotateLeft,
} from 'react-icons/fa6';
import { GiRiver } from 'react-icons/gi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';
import { FaCoffee } from 'react-icons/fa';

const steps = [
  {
    icon: (
      <FaTreeCity
        className={styles.stepIcon}
        aria-label="Begin with São Paulo"
      />
    ),
    title: 'Start with Your São Paulo Rhythm',
    description:
      'Set your departure from GRU airport to capture your natural Brazilian sleep-wake cycle before crossing the Atlantic.',
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Target Frankfurt"
      />
    ),
    title: 'Define Your Frankfurt Destination',
    description:
      'Select Frankfurt Main Airport to prepare for transitioning into Central European time with precision.',
  },
  {
    icon: (
      <FaClockRotateLeft
        className={styles.stepIcon}
        aria-label="Flight timing"
      />
    ),
    title: 'Map Your Flight Path',
    description:
      "Input your exact flight times to synchronize your body's clock with the transcontinental journey.",
  },
  {
    icon: (
      <FaBookOpen className={styles.stepIcon} aria-label="Sleep patterns" />
    ),
    title: 'Share Your Sleep Story',
    description:
      'Tell us about your typical rest patterns so we can craft a personalized adjustment narrative.',
  },
];

const features = [
  {
    icon: (
      <GiRiver
        className={styles.featureIcon}
        aria-label="River light therapy"
      />
    ),
    title: 'Main River Light Strategy',
    description:
      "Leverage Frankfurt's riverfront morning light exposure to naturally advance your internal timing system.",
  },
  {
    icon: (
      <FaCoffee
        className={styles.featureIcon}
        aria-label="Strategic caffeine use"
      />
    ),
    title: 'Café Culture Timing',
    description:
      'Master the art of European coffee consumption timing to maintain alertness without compromising sleep quality.',
  },
  {
    icon: (
      <FaMountainSun
        className={styles.featureIcon}
        aria-label="Gradual adjustment"
      />
    ),
    title: 'Phased Sleep Transition',
    description:
      'Experience a smooth four-hour shift through scientifically-proven gradual sleep schedule modification.',
  },
];

const tips = [
  {
    title: 'Ibirapuera to Main River',
    description:
      "Transition your morning walks from São Paulo's park to Frankfurt's riverbanks to harness natural light cues effectively.",
  },
  {
    title: 'Hydration Across Hemispheres',
    description:
      'Maintain optimal fluid intake starting 48 hours before departure to combat altitude dehydration effects.',
  },
  {
    title: 'Evening Light Management',
    description:
      'Strategically limit exposure to screens and bright lights after 8 PM CET to support natural melatonin production.',
  },
  {
    title: 'Strategic Rest Opportunities',
    description:
      'Identify optimal times for power naps that complement rather than disrupt your core sleep adjustment.',
  },
];

const faqs = [
  {
    question:
      'How does flying from Southern to Northern Hemisphere affect jet lag?',
    answer:
      'The hemispheric transition adds complexity beyond time zones. Our approach considers seasonal light variations in both São Paulo and Frankfurt for optimal adjustment.',
  },
  {
    question: 'What makes this time zone transition unique?',
    answer:
      "The four-hour advance requires careful morning light management in Frankfurt while accounting for São Paulo's more fluid daily rhythm.",
  },
  {
    question: "How can I prepare for Frankfurt's business schedule?",
    answer:
      'Begin adjusting your wake time earlier gradually, using morning light exposure to align with German business hours naturally.',
  },
  {
    question: 'Are there specific dietary considerations for this route?',
    answer:
      'Yes, we recommend adjusting meal timing to align with German dining schedules while maintaining Brazilian hydration practices.',
  },
];

const links = [
  { name: 'New York → London', path: `/${PATHS.jetLagFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'Chicago → Rome', path: `/${PATHS.jetLagFromChicagoToRome}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.jetLagFromMexicoCityToSeoul}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
];

const howItWorks = [
  'Analyzes your current sleep patterns against the four-hour time advance required',
  "Creates a light exposure plan leveraging Frankfurt's urban green spaces",
  'Develops a hydration strategy that begins before departure and continues through arrival',
  'Generates a personalized schedule that respects both Brazilian and German cultural rhythms',
  'Provides specific guidance for managing the first critical days in Central European Time',
];

const ssData = {
  text: 'Master the São Paulo to Frankfurt transition with science-based strategies for the 4-hour time difference. Perfect your internal clock adjustment! 🌍✈️',
  hashtags: 'JetLagScience, SãoPauloFrankfurt',
  title: 'São Paulo to Frankfurt Jet Lag Mastery',
};

const title = 'São Paulo to Frankfurt Jet Lag Strategy | 4-Hour Advance';
const description =
  'Expert guidance for transitioning from Brazilian to Central European time. Science-based techniques for managing the 4-hour time difference with precision.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: 'São Paulo to Frankfurt Jet Lag Optimization',
    description:
      'Comprehensive scientific approach to managing time zone transition between Brazil and Germany',
    featureList: [
      'Hemispheric transition consideration',
      'Urban light exposure optimization',
      'Cultural rhythm integration',
      'Personalized hydration strategy',
      'Gradual sleep schedule adjustment',
    ],
    steps: [
      {
        name: 'Initial Sleep Pattern Analysis',
        description:
          'Comprehensive assessment of your current São Paulo-based sleep rhythms',
      },
      {
        name: 'Flight Timing Integration',
        description:
          'Incorporation of your specific transatlantic flight schedule into the adjustment plan',
      },
      {
        name: 'Light Exposure Strategy Development',
        description:
          'Creation of personalized light management plan for Frankfurt environment',
      },
      {
        name: 'Hydration Protocol Establishment',
        description:
          'Development of fluid intake strategy optimized for long-haul flight recovery',
      },
      {
        name: 'Final Plan Generation and Download',
        description:
          'Production of your customized jet lag management protocol',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title: 'São Paulo to Frankfurt Jet Lag Plan | Science-Based Solution',
    description:
      'Master the 4-hour time difference with our specialized approach for Brazil to Germany travel. Get your personalized jet lag strategy today.',
    manifest: '/manifest.jl.json',
  });
};

export const getData = (page) => ({
  head: 'Transatlantic Time Mastery: São Paulo to Frankfurt',
  subHead:
    'Conquer the 4-hour time difference with our scientifically-designed approach to transcontinental rhythm adjustment',
  featuresHead: 'Specialized Transition Features',
  tipsHead: 'Expert Strategies for Hemispheric Time Adjustment',
  faqsHead: 'Transatlantic Transition Questions',
  linksHead: 'South America to Europe',
  howItWorksHead: 'Our Scientific Methodology',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Sao Paulo@@America/Sao_Paulo',
    destinationTZ: 'Frankfurt@@Europe/Berlin',
    flightDuration: 15.5,
  },
});
