import { FaEuroSign, FaShip } from 'react-icons/fa';
import { TbPlaneTilt, TbBuildingBank, TbAnchor } from 'react-icons/tb';
import { GiWorld } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbBuildingBank
        className={styles.stepIcon}
        aria-label="Set Frankfurt time"
      />
    ),
    title: 'Configure European Banking Time (CET/CEST)',
    description:
      'Begin with Frankfurt time - the financial engine of continental Europe. Account for the 6-7 hour difference that spans European trading day to Asian evening.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Add Singapore" />,
    title: 'Target Global Hub Singapore',
    description:
      'Singapore operates on Singapore Standard Time (SST) - a strategic timezone choice positioning it as the bridge between Asian markets and European business days.',
  },
  {
    icon: (
      <TbAnchor
        className={styles.stepIcon}
        aria-label="Maritime coordination"
      />
    ),
    title: 'Coordinate Global Supply Chains',
    description:
      "Leverage the time difference for seamless handoffs between European manufacturing and Asian logistics operations through the world's busiest port.",
  },
  {
    icon: (
      <FaEuroSign className={styles.stepIcon} aria-label="Financial markets" />
    ),
    title: 'Sync Financial Market Windows',
    description:
      'Critical for coordinating between Frankfurt Stock Exchange (Xetra) and Singapore Exchange (SGX) with overlapping trading sessions.',
  },
];

const features = [
  {
    icon: (
      <TbBuildingBank
        className={styles.featureIcon}
        aria-label="Banking coordination"
      />
    ),
    title: 'European-Asian Banking Bridge',
    description:
      'Coordinate interbank settlements, forex trading, and financial operations between ECB and MAS regulatory environments.',
  },
  {
    icon: (
      <FaShip className={styles.featureIcon} aria-label="Shipping logistics" />
    ),
    title: 'Global Shipping & Logistics',
    description:
      'Essential for coordinating container shipping, supply chain management, and port operations between European exporters and Asian distributors.',
  },
  {
    icon: (
      <GiWorld className={styles.featureIcon} aria-label="Global business" />
    ),
    title: 'APAC Regional Headquarters Coordination',
    description:
      'Critical for European multinationals coordinating with their Singapore-based Asia-Pacific regional headquarters.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.featureIcon}
        aria-label="Flight planning"
      />
    ),
    title: '12-Hour Flight Optimization',
    description:
      'Plan for the long-haul flights with integrated layover planning and jet lag management for the 6-7 hour time shift.',
  },
];

const tips = [
  {
    title: 'Financial Market Overlap Strategy',
    description:
      'The 2-hour trading overlap occurs 8-10 AM Frankfurt (2-4 PM Singapore). Critical for EUR/SGD forex pairs and dual-listed securities.',
  },
  {
    title: 'Historical Time Zone Strategy',
    description:
      'Singapore moved from UTC+7:30 to UTC+8 in 1982 to align with Hong Kong and Beijing, strategically positioning itself as the bridge between Chinese and European business hours.',
  },
  {
    title: 'Supply Chain Handoff Windows',
    description:
      'Coordinate manufacturing updates from European plants (ending 4-5 PM CET) with Singapore logistics teams (10-11 PM SST) for overnight shipping preparations.',
  },
  {
    title: 'Monsoon Season Logistics Planning',
    description:
      'Account for European winter weather disruptions and Asian monsoon seasons in supply chain timing, using the time difference for contingency planning.',
  },
  {
    title: 'Regulatory Reporting Deadlines',
    description:
      'Coordinate financial reporting between EU MiFID II requirements and Singapore MAS regulations across time zones for multinational corporations.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Frankfurt and Singapore?',
    answer:
      "Singapore is 6 hours ahead of Frankfurt during Central European Time and 7 hours ahead during Central European Summer Time. When it's 9 AM in Frankfurt, it's 3 PM or 4 PM in Singapore.",
  },
  {
    question: 'Why did Singapore change its time zone in 1982?',
    answer:
      'Singapore moved from UTC+7:30 to UTC+8 to align with Hong Kong and Beijing, strategically positioning itself as the financial bridge between Chinese markets and European business hours.',
  },
  {
    question:
      'What are the best meeting times for Frankfurt-Singapore coordination?',
    answer:
      '8-10 AM Frankfurt (2-4 PM Singapore) captures both sides in their productive work periods. Alternatively, 3-4 PM Frankfurt (9-10 PM Singapore) works for urgent matters with Singapore teams willing to work late.',
  },
  {
    question: 'How does this route impact global supply chain management?',
    answer:
      'The 6-7 hour difference enables continuous supply chain operations - European manufacturing updates flow to Asian logistics teams who prepare overnight for next-day distribution.',
  },
  {
    question: 'What about financial market coordination?',
    answer:
      'Frankfurt Stock Exchange (9 AM-5:30 PM CET) and Singapore Exchange (9 AM-5 PM SST) have a 2-hour overlap, crucial for dual-listed companies and cross-border trading.',
  },
  {
    question: 'How do European and Asian public holidays affect coordination?',
    answer:
      'Singapore has Chinese, Malay, Indian, and Western holidays. Frankfurt observes German and EU holidays. Our tool helps navigate these complex holiday calendars for critical business operations.',
  },
  {
    question:
      'What is the significance for European companies with APAC headquarters?',
    answer:
      'Most European multinationals base their Asia-Pacific headquarters in Singapore. The 6-7 hour difference requires sophisticated coordination for regional strategy and operational execution.',
  },
];

const links = [
  {
    name: 'Berlin → São Paulo',
    path: `/${PATHS.timezoneFromBerlinToSaoPaulo}`,
  },
  { name: 'London → Delhi', path: `/${PATHS.timezoneFromLondonToDelhi}` },
  {
    name: 'Zurich → Hong Kong',
    path: `/${PATHS.timezoneFromZurichToHongKong}`,
  },
  {
    name: 'Stockholm → Bengaluru',
    path: `/${PATHS.timezoneFromStockholmToBengaluru}`,
  },
  {
    name: 'Istanbul → Bangkok',
    path: `/${PATHS.timezoneFromIstanbulToBangkok}`,
  },
];

const howItWorks = [
  'Converts between Frankfurt (Europe/Berlin IANA) with CET/CEST and Singapore (Asia/Singapore IANA) with consistent SST UTC+8',
  "Accounts for Germany's EU-standard DST transitions while Singapore maintains fixed UTC+8 year-round",
  'Calculates 6-7 hour differences with precision for financial and logistical operations',
  "Incorporates historical time zone data including Singapore's 1982 transition from UTC+7:30",
  'Uses geographical awareness of both financial hubs and their global economic roles',
  'Maintains awareness of complex holiday calendars affecting both business centers',
];

const ssData = {
  text: 'Master the 6-7 hour strategic bridge between European finance and Asian global trade. Essential for banking, supply chains, and multinational coordination!',
  hashtags: 'Frankfurt,Singapore,TimeZone',
  title: 'Frankfurt to Singapore Global Business Bridge',
};

const title = 'Frankfurt to Singapore Time (CET/CEST to SST)';
const description =
  'Convert Frankfurt to Singapore time with 6-7 hour difference. Financial and logistics coordination between European and Asian hubs.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise financial market coordination',
      'Global supply chain optimization',
      'Multinational corporate planning',
      'Strategic time bridge management',
    ],
    steps: [
      {
        name: 'Set Frankfurt time zone',
        description:
          'Configure Central European Time accounting for EU daylight saving transitions',
      },
      {
        name: 'Select Singapore with fixed UTC+8',
        description:
          'Choose Singapore with consistent SST timezone strategically aligned with Asian markets',
      },
      {
        name: 'Analyze business overlap windows',
        description:
          'Study the 6-7 hour difference for optimal financial and operational coordination',
      },
      {
        name: 'Coordinate global operations',
        description:
          'Optimize scheduling for financial markets, supply chains, and multinational operations',
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
  head: 'Frankfurt to Singapore Global Business Bridge',
  subHead:
    "Connect Europe's financial capital with Asia's global hub across 6-7 hours with strategic coordination for banking, logistics, and multinational operations",
  featuresHead: 'Advanced Features for Global Economic Coordination',
  tipsHead: 'Strategic Insights for Europe-Asia Business Operations',
  faqsHead:
    'Frankfurt-Singapore Coordination: Economic and Operational Questions',
  linksHead: 'European Cities to Asian Metropolises',
  howItWorksHead: 'Technical Implementation with Economic Strategy Awareness',
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
    originTimeZone: 'Frankfurt@@Europe/Berlin',
    destinationTimeZone: 'Singapore@@Asia/Singapore',
  },
});
