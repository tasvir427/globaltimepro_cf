import { FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { TbClock } from 'react-icons/tb';
import {
  MdSchedule,
  MdOutlineTravelExplore,
  MdOutlinePublic,
} from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdOutlineTravelExplore
        className={styles.stepIcon}
        aria-label="Search City"
      />
    ),
    title: 'Enter "Shanghai"',
    description:
      'Type the name of this global economic hub to get precise live time in China Standard Time (CST).',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Shanghai maintains China Standard Time (UTC+8) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+8 Offset',
    description:
      'View the stable time offset that has been consistent since 1991, providing reliability for international trade.',
  },
  {
    icon: (
      <MdOutlinePublic
        className={styles.stepIcon}
        aria-label="National Time Policy"
      />
    ),
    title: "Understand China's Unified Time",
    description:
      "Learn how Shanghai time reflects China's single time zone policy that spans the entire country.",
  },
];

const features = [
  {
    icon: (
      <FaInfoCircle
        className={styles.featureIcon}
        aria-label="Authoritative Data"
      />
    ),
    title: 'Definitive Time Confirmation',
    description:
      "Provides clear confirmation of China's permanent UTC+8 policy, essential for global supply chain coordination.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Time Policy',
    description:
      "Explains China's time zone history, including the brief period when DST was observed (1986-1991) and its discontinuation.",
  },
  {
    icon: (
      <GiCommercialAirplane
        className={styles.featureIcon}
        aria-label="Global Trade"
      />
    ),
    title: 'Global Trade Alignment',
    description:
      'Shows how Shanghai time coordinates with other major global markets for international business and logistics.',
  },
];

const tips = [
  {
    title: 'Global Supply Chain Coordination',
    description:
      'Shanghai (UTC+8) aligns with Singapore, Hong Kong, and Perth, while providing morning overlap with European markets.',
  },
  {
    title: 'International Business Scheduling',
    description:
      'Schedule meetings with American partners considering Shanghai is 12-16 hours ahead of North American time zones.',
  },
  {
    title: 'Domestic Travel Awareness',
    description:
      'Remember that all of China uses the same time zone, despite spanning geographically across what would naturally be 5 time zones.',
  },
  {
    title: 'Historical Reference Context',
    description:
      'Note that China observed DST briefly from 1986-1991 but discontinued it due to minimal benefits and implementation challenges.',
  },
];

const faqs = [
  {
    question: 'Does Shanghai observe Daylight Saving Time?',
    answer:
      'No. China abolished Daylight Saving Time in 1991 and now maintains China Standard Time (UTC+8) permanently throughout the year.',
  },
  {
    question: 'Why does all of China use one time zone?',
    answer:
      'The single time zone policy was implemented in 1949 to promote national unity and simplify administration across the vast country.',
  },
  {
    question: "What is Shanghai's current time zone?",
    answer:
      'Shanghai uses China Standard Time (CST), which is UTC+8 year-round. This has been consistent since 1991.',
  },
  {
    question: 'How does Shanghai time affect western China?',
    answer:
      'While convenient for eastern cities like Shanghai, the single time zone means western regions like Xinjiang experience significant misalignment between clock time and solar time.',
  },
];

const links = [
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Seoul', path: `/${PATHS.dstInSeoul}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Bangkok', path: `/${PATHS.dstInBangkok}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Asia/Shanghai)',
  "Confirms China's permanent UTC+8 offset maintained since 1991",
  'Provides historical context about past DST practices in China',
  'Offers comparison data with other major global economic centers',
];

const ssData = {
  text: 'Shanghai maintains China Standard Time (UTC+8) year-round with no DST. Essential information for global trade and business coordination.',
  hashtags: 'ShanghaiTime, ChinaTime, NoDST, GlobalBusiness',
  title: 'DST in Shanghai - China Time Zone Checker',
};

const title = 'DST in Shanghai - China Time Zone Checker';
const description =
  "Shanghai uses China Standard Time (UTC+8) permanently without DST. Check current time and understand China's unified time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Shanghai clock (CST, UTC+8)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Asia/Shanghai)',
      "Historical context on China's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Shanghai"',
        description:
          'Instantly load the current local time in Shanghai, showing China Standard Time (UTC+8).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that China abolished Daylight Saving Time in 1991.',
      },
      {
        name: 'Step 3: Review Stable UTC+8 Offset',
        description:
          'See the consistent time offset that provides reliability for global trade and manufacturing.',
      },
      {
        name: 'Step 4: Understand National Time Policy',
        description:
          "Learn how China's single time zone system works across this vast country.",
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.dst.json',
  });
};

export const getData = (page) => ({
  head: 'Shanghai — Consistent Time for Global Trade',
  subHead:
    "Shanghai maintains China Standard Time (UTC+8) year-round without Daylight Saving Time. China abolished DST in 1991, providing consistent timekeeping for the world's manufacturing hub.",
  featuresHead: 'Precision for Global Commerce',
  tipsHead: 'Maximizing Shanghai Time Effectiveness',
  faqsHead: 'Shanghai Time & DST FAQs',
  linksHead: 'Major East Asian Cities',
  howItWorksHead: 'How We Provide Accurate Shanghai Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Shanghai@@Asia/Shanghai',
  },
});
