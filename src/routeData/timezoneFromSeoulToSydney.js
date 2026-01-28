import { FaRobot, FaUniversity } from 'react-icons/fa';
import { TbPlaneTilt, TbBuildingSkyscraper, TbWaveSine } from 'react-icons/tb';
import { GiAustralia, GiSouthKorea } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <GiSouthKorea className={styles.stepIcon} aria-label="Set Seoul time" />
    ),
    title: 'Configure Korean Standard Time (KST)',
    description:
      "Begin with Seoul time - the heartbeat of Korea's advanced digital economy. KST maintains a consistent UTC+9 without daylight saving, providing predictability for international coordination.",
  },
  {
    icon: <GiAustralia className={styles.stepIcon} aria-label="Add Sydney" />,
    title: 'Target Asia-Pacific Gateway',
    description:
      'Sydney operates on Australian Eastern Time (AET) with complex DST rules that create dynamic 0-2 hour differences throughout the year with Seoul.',
  },
  {
    icon: (
      <TbWaveSine className={styles.stepIcon} aria-label="Time wave analysis" />
    ),
    title: 'Analyze the Shifting Time Relationship',
    description:
      'Study how the time difference fluctuates between same-day coordination (0-1 hour) and next-day planning (2 hours) depending on Australian DST.',
  },
  {
    icon: (
      <FaRobot className={styles.stepIcon} aria-label="Tech coordination" />
    ),
    title: 'Coordinate Advanced Manufacturing',
    description:
      'Critical for semiconductor supply chains, robotics development, and advanced materials research between Korean tech giants and Australian resources.',
  },
];

const features = [
  {
    icon: (
      <FaRobot className={styles.featureIcon} aria-label="Tech manufacturing" />
    ),
    title: 'Semiconductor Supply Chain Sync',
    description:
      'Coordinate between Korean semiconductor fabrication and Australian rare earth mineral supply - critical for global electronics manufacturing.',
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.featureIcon}
        aria-label="Financial markets"
      />
    ),
    title: 'Trading Session Handoffs',
    description:
      'Essential for coordinating between Korea Exchange (KRX) and Australian Securities Exchange (ASX) with overlapping morning trading sessions.',
  },
  {
    icon: (
      <FaUniversity
        className={styles.featureIcon}
        aria-label="Education coordination"
      />
    ),
    title: 'Academic Research Collaboration',
    description:
      'Critical for coordinating joint research between Korean tech universities and Australian research institutions in quantum computing and renewable energy.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.featureIcon}
        aria-label="Flight planning"
      />
    ),
    title: '9-Hour Flight Optimization',
    description:
      'Plan for the long-haul flights with integrated time zone adaptation strategies for the minimal yet impactful 0-2 hour time shift.',
  },
];

const tips = [
  {
    title: 'Trading Session Overlap Strategy',
    description:
      'The 2-hour trading overlap occurs 10 AM-12 PM Seoul (12-2 PM Sydney AEST). Critical for KOSPI-ASX cross-listings and won-AUD currency pairs.',
  },
  {
    title: 'Historical Time Zone Evolution',
    description:
      "Korea adopted KST (UTC+9) in 1954, aligning with Japan. Australia's time zones evolved from colonial local time to the current state-based system, creating the unique 0-2 hour difference with Seoul.",
  },
  {
    title: 'Advanced Manufacturing Coordination',
    description:
      'Coordinate semiconductor production schedules from Korean fabs with Australian rare earth shipments, leveraging the minimal time difference for real-time quality control discussions.',
  },
  {
    title: 'Academic Research Windows',
    description:
      'The 0-2 hour difference creates ideal conditions for joint research between Korean and Australian universities, enabling same-day collaboration without overnight delays.',
  },
  {
    title: 'Cultural Event Planning',
    description:
      'Coordinate K-pop concerts, esports tournaments, and cultural exchanges considering both Korean and Australian public holidays and peak viewing times.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Seoul and Sydney?',
    answer:
      'Sydney is typically 1 hour ahead of Seoul during Australian winter (AEST). During Australian summer (AEDT), Sydney is 2 hours ahead. The difference is minimal but strategically important.',
  },
  {
    question:
      'Why is the Seoul-Sydney time difference so small compared to other international routes?',
    answer:
      'Both cities are in similar longitudinal positions relative to UTC. Seoul uses UTC+9 consistently, while Sydney uses UTC+10 (winter) or UTC+11 (summer), creating the 1-2 hour difference.',
  },
  {
    question:
      'What are the optimal business hours for Seoul-Sydney coordination?',
    answer:
      '9 AM-12 PM Seoul (10 AM-1 PM Sydney winter, 11 AM-2 PM Sydney summer) provides the best overlap for real-time collaboration without extended hours.',
  },
  {
    question:
      'How does this route impact semiconductor and technology supply chains?',
    answer:
      'Korea leads in semiconductor manufacturing while Australia provides critical rare earth minerals. The minimal time difference enables real-time coordination for just-in-time supply chain management.',
  },
  {
    question: 'What about financial market coordination?',
    answer:
      'Korea Exchange (9 AM-3:30 PM KST) and Australian Securities Exchange (10 AM-4 PM AEST) have 2.5 hours of overlap, crucial for dual-listed companies and cross-border investments.',
  },
  {
    question: 'How do seasonal changes affect coordination?',
    answer:
      "Australian daylight saving (October-April) shifts the difference from 1 to 2 hours. Korea doesn't observe DST, providing consistency from the Seoul side.",
  },
  {
    question:
      'What is the significance for education and research collaboration?',
    answer:
      'Korean and Australian universities collaborate extensively in technology research. The minimal time difference enables same-day peer reviews, joint experiments, and real-time data sharing.',
  },
  {
    question:
      'How does this route support cultural and entertainment industries?',
    answer:
      'K-pop concerts, esports tournaments, and film collaborations benefit from the minimal time difference, enabling real-time coordination of live events and releases.',
  },
];

const links = [
  {
    name: 'Seoul → San Francisco',
    path: `/${PATHS.timezoneFromSeoulToSanFrancisco}`,
  },
  { name: 'Seoul → London', path: `/${PATHS.timezoneFromSeoulToLondon}` },
  { name: 'Seoul → Vancouver', path: `/${PATHS.timezoneFromSeoulToVancouver}` },
  { name: 'Dubai → Shanghai', path: `/${PATHS.timezoneFromDubaiToShanghai}` },
  { name: 'Delhi → Beijing', path: `/${PATHS.timezoneFromDelhiToBeijing}` },
  { name: 'Mumbai → Tokyo', path: `/${PATHS.timezoneFromMumbaiToTokyo}` },
  { name: 'Manila → Dubai', path: `/${PATHS.timezoneFromManilaToDubai}` },
];

const howItWorks = [
  'Converts between Seoul (Asia/Seoul IANA) with consistent KST UTC+9 and Sydney (Australia/Sydney IANA) with AEST/AEDT transitions',
  "Accounts for Australia's complex DST rules (first Sunday in October to first Sunday in April) while Korea maintains fixed UTC+9",
  'Calculates 1-2 hour differences with precision for high-frequency trading and manufacturing coordination',
  "Incorporates geographical awareness of both nations' strategic economic positions in the Asia-Pacific region",
  'Uses advanced time zone databases accounting for historical changes in both Korean and Australian time policies',
  'Maintains awareness of academic calendars and research funding cycles in both countries',
];

const ssData = {
  text: 'Master the strategic 1-2 hour bridge between Korean tech innovation and Australian resources. Essential for semiconductors, finance, and research collaboration!',
  hashtags: 'Seoul,Sydney,TimeZone,Korea,Australia',
  title: 'Seoul to Sydney Strategic Innovation Bridge',
};

const title = 'Seoul to Sydney Time (KST to AEST/AEDT)';
const description =
  'Convert Seoul to Sydney time with 1-2 hour difference. Tech supply chain, financial, and research coordination between innovation hubs.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise tech supply chain coordination',
      'Financial market overlap optimization',
      'Academic research collaboration tools',
      'Minimal time difference strategic planning',
    ],
    steps: [
      {
        name: 'Set Seoul time zone',
        description:
          'Configure Korean Standard Time with consistent UTC+9 throughout the year',
      },
      {
        name: 'Select Sydney with Australian DST',
        description:
          'Choose Sydney with Australian Eastern Time accounting for complex DST transitions',
      },
      {
        name: 'Analyze strategic time bridge',
        description:
          'Study the minimal 1-2 hour difference for real-time collaboration opportunities',
      },
      {
        name: 'Coordinate innovation ecosystems',
        description:
          'Optimize scheduling for technology, finance, and research across both nations',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.tz.json',
  });
};

export const getData = (page) => ({
  head: 'Seoul to Sydney Strategic Innovation Bridge',
  subHead:
    "Connect Asia's technology powerhouse with Australia's resource and financial hub across 1-2 hours with precision coordination for semiconductors, finance, and cutting-edge research",
  featuresHead: 'Advanced Features for Technology and Research Coordination',
  tipsHead: 'Strategic Insights for Korea-Australia Innovation Partnership',
  faqsHead: 'Seoul-Sydney Coordination: Technology and Economic Questions',
  linksHead: 'Asian Hubs to Global Destinations',
  howItWorksHead:
    'Technical Implementation with Innovation Ecosystem Awareness',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  showLegend: true,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Seoul@@Asia/Seoul',
    destinationTimeZone: 'Sydney@@Australia/Sydney',
  },
});
