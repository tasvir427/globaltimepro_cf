import {
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
} from 'react-icons/fa';
import { TbPlaneTilt, TbJewishStar, TbClockHeart } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaLaptopCode className={styles.stepIcon} aria-label="Set SF time" />,
    title: 'Configure Silicon Valley Time (PDT/PST)',
    description:
      'Start with Pacific Time - the heartbeat of global tech innovation. Account for the 10-11 hour difference that creates unique "next-day" scheduling patterns with Tel Aviv-Yafo.',
  },
  {
    icon: (
      <FaRocket className={styles.stepIcon} aria-label="Add Tel Aviv-Yafo" />
    ),
    title: 'Target Startup Nation',
    description:
      'Tel Aviv-Yafo operates on Israel Standard Time (IST) or Israel Daylight Time (IDT) with complex DST rules different from US patterns. Add other Israeli tech hubs like Herzliya for comparison.',
  },
  {
    icon: (
      <TbClockHeart className={styles.stepIcon} aria-label="Time analysis" />
    ),
    title: 'Analyze the Innovation Time Bridge',
    description:
      'Study how the 10-11 hour gap enables 24-hour development cycles - SF day work flowing into Tel Aviv-Yafo next-morning progress.',
  },
  {
    icon: (
      <FaShieldAlt
        className={styles.stepIcon}
        aria-label="Security coordination"
      />
    ),
    title: 'Coordinate Cyber Security Shifts',
    description:
      'Critical for cybersecurity firms maintaining 24/7 threat monitoring across the two leading cyber innovation ecosystems.',
  },
];

const features = [
  {
    icon: (
      <FaLightbulb
        className={styles.featureIcon}
        aria-label="Startup coordination"
      />
    ),
    title: 'Venture Capital Sync Tools',
    description:
      'Coordinate investor meetings between Sand Hill Road and Tel Aviv-Yafo venture firms, accounting for the complex time difference and funding cycle timing.',
  },
  {
    icon: (
      <TbJewishStar
        className={styles.featureIcon}
        aria-label="Jewish calendar"
      />
    ),
    title: 'Jewish Calendar Integration',
    description:
      'Awareness of Shabbat (Friday sunset to Saturday night) and major Jewish holidays that impact Israeli business operations and availability.',
  },
  {
    icon: (
      <FaLaptopCode
        className={styles.featureIcon}
        aria-label="Tech development"
      />
    ),
    title: '24-Hour Development Cycles',
    description:
      'Optimize handoffs between SF and Tel Aviv-Yafo engineering teams for continuous development progress across time zones.',
  },
  {
    icon: (
      <TbPlaneTilt
        className={styles.featureIcon}
        aria-label="Flight planning"
      />
    ),
    title: '15-Hour Flight Preparation',
    description:
      'Plan for the ultra-long-haul flights with integrated jet lag analysis for the dramatic 10-11 hour time shift.',
  },
];

const tips = [
  {
    title: 'Tech Development Handoff Windows',
    description:
      'The optimal handoff occurs at 3-4 PM SF time (1-2 AM next day Tel Aviv-Yafo). SF team documents daily progress before leaving, Tel Aviv-Yafo team picks up fresh the next morning.',
  },
  {
    title: 'Geopolitical Time Awareness',
    description:
      'Israel observes DST from March to October, but dates often differ from US transitions. The Knesset sometimes changes DST dates with short notice for religious reasons.',
  },
  {
    title: 'Funding Cycle Coordination',
    description:
      'Coordinate quarterly investor updates and board meetings considering both US fiscal calendar and Israeli business cycles. Critical for dual-listed tech companies.',
  },
  {
    title: 'Cultural Work Pattern Differences',
    description:
      'Israeli work culture often starts earlier (7-8 AM) and includes longer midday breaks. SF teams typically start later (9-10 AM) with continuous workdays.',
  },
  {
    title: 'Emergency Response Protocols',
    description:
      'For cybersecurity incidents, establish clear escalation paths that account for the time difference while maintaining 24/7 coverage across both security operations centers.',
  },
];

const faqs = [
  {
    question:
      'What is the time difference between San Francisco and Tel Aviv-Yafo?',
    answer:
      "Tel Aviv-Yafo is 10 hours ahead of San Francisco during Pacific Daylight Time and 11 hours ahead during Pacific Standard Time. When it's 9 AM in SF, it's 7 PM or 8 PM in Tel Aviv-Yafo.",
  },
  {
    question: 'How do Israeli daylight saving rules differ from US rules?',
    answer:
      "Israel observes DST from the Friday before the last Sunday in March until the last Sunday in October. These dates often don't align with US transitions, creating temporary 9 or 12-hour differences.",
  },
  {
    question: 'What are the best times for SF-Tel Aviv-Yafo video conferences?',
    answer:
      '7-9 AM SF time (5-7 PM Tel Aviv-Yafo) works well, catching Israelis at end of their workday and SF teams at start of theirs. Avoid Israeli Friday afternoons and US weekend mornings.',
  },
  {
    question: 'How does the Jewish Sabbath affect business hours?',
    answer:
      'Israeli businesses typically close early on Fridays (around 2-3 PM) and remain closed Saturdays. Sunday is a full workday. Plan meetings accordingly.',
  },
  {
    question: 'What about major Jewish holidays?',
    answer:
      'During Rosh Hashanah, Yom Kippur, Sukkot, and Passover, Israeli businesses may close for multiple days. These follow the lunar calendar so dates change annually.',
  },
  {
    question: 'How do you handle the "next day" phenomenon in development?',
    answer:
      'The 10-11 hour difference means Tel Aviv-Yafo is already in the next calendar day. This enables true 24-hour development cycles with proper documentation and handoff protocols.',
  },
  {
    question: 'What are the flight logistics between these tech hubs?',
    answer:
      'Direct flights take 14-16 hours. The time difference means you effectively "arrive yesterday" when flying west to east, creating unique jet lag patterns.',
  },
];

const links = [
  {
    name: 'New York → Shanghai',
    path: `/${PATHS.timezoneFromNewYorkToShanghai}`,
  },
  { name: 'New York → Tokyo', path: `/${PATHS.timezoneFromNewYorkToTokyo}` },
  {
    name: 'Mexico City → Tokyo',
    path: `/${PATHS.timezoneFromMexicoCityToTokyo}`,
  },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.timezoneFromMexicoCityToSeoul}`,
  },
  {
    name: 'Toronto → Melbourne',
    path: `/${PATHS.timezoneFromTorontoToMelbourne}`,
  },
  { name: 'Seattle → Taipei', path: `/${PATHS.timezoneFromSeattleToTaipei}` },
  { name: 'Chicago → Lisbon', path: `/${PATHS.timezoneFromChicagoToLisbon}` },
];

const howItWorks = [
  'Converts between San Francisco (America/Los_Angeles IANA) with PST/PDT and Tel Aviv-Yafo (Asia/Jerusalem IANA) with IST/IDT',
  'Accounts for complex DST transitions that rarely align between US and Israeli systems',
  'Calculates 9-12 hour differences during transitional periods when DST rules mismatch',
  'Incorporates Israeli cabinet decisions on DST dates which can change with short notice',
  'Uses geographical awareness of both innovation ecosystems and their operational patterns',
  'Maintains awareness of Jewish calendar events that impact business operations',
];

const ssData = {
  text: 'Master the 10-11 hour innovation bridge between Silicon Valley and Startup Nation. Essential for tech development, venture capital, and cybersecurity coordination!',
  hashtags: 'SiliconValley,TelAvivYafo,TimeZone',
  title: 'San Francisco to Tel Aviv-Yafo Tech Time Bridge',
};

const title = 'SF to Tel Aviv-Yafo Time (PST/PDT to IST/IDT)';
const description =
  'Convert SF to Tel Aviv-Yafo time with 10-11 hour difference. Tech innovation bridge with cultural and geopolitical awareness.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise time conversion for tech development cycles',
      'Jewish calendar and Sabbath awareness',
      'Venture capital meeting optimization',
      'Complex DST transition handling',
    ],
    steps: [
      {
        name: 'Set San Francisco time zone',
        description:
          'Configure Pacific Time accounting for US daylight saving transitions',
      },
      {
        name: 'Select Tel Aviv-Yafo with Israeli DST rules',
        description:
          'Choose Tel Aviv-Yafo with Israel Standard/Daylight Time and unique DST calendar',
      },
      {
        name: 'Analyze innovation bridge timing',
        description:
          'Study the 10-11 hour difference that enables 24-hour development cycles',
      },
      {
        name: 'Coordinate across cultural calendars',
        description:
          'Optimize scheduling considering both US business and Israeli religious calendars',
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
  head: 'San Francisco to Tel Aviv-Yafo Tech Time Bridge',
  subHead:
    "Connect the world's leading innovation ecosystems across 10-11 hours with deep cultural, geopolitical, and technical awareness for seamless collaboration",
  featuresHead: 'Advanced Features for Global Tech Innovation Coordination',
  tipsHead:
    'Strategic Insights for Silicon Valley-Startup Nation Collaboration',
  faqsHead:
    'SF-Tel Aviv-Yafo Time Coordination: Technical and Cultural Questions',
  linksHead: 'North American Cross-Continental',
  howItWorksHead: 'Technical Implementation with Geopolitical Awareness',
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
    originTimeZone: 'San Francisco@@America/Los_Angeles',
    destinationTimeZone: 'Tel Aviv-Yafo@@Asia/Jerusalem',
  },
});
