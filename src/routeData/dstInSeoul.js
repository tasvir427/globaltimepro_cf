import { FaGlobeAsia, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { TbClock } from 'react-icons/tb';
import { MdSchedule, MdOutlineTravelExplore } from 'react-icons/md';
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
    title: 'Enter "Seoul"',
    description:
      "Type the name of South Korea's capital to get precise live time in Korea Standard Time (KST).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Seoul maintains Korea Standard Time (UTC+9) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+9 Offset',
    description:
      'View the stable time offset that has been consistent since 1988, providing reliability for technology and business.',
  },
  {
    icon: (
      <FaGlobeAsia className={styles.stepIcon} aria-label="Regional Context" />
    ),
    title: 'Understand East Asian Alignment',
    description:
      'Learn how Seoul time coordinates with other major East Asian economic centers.',
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
      "Provides clear confirmation of South Korea's permanent UTC+9 policy, essential for global technology coordination.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Time Experiments',
    description:
      "Explains South Korea's brief DST experiments and the return to permanent standard time.",
  },
  {
    icon: (
      <GiModernCity
        className={styles.featureIcon}
        aria-label="Technology Context"
      />
    ),
    title: 'Technology Industry Alignment',
    description:
      'Shows how Seoul time supports the global technology industry and 24/7 operations.',
  },
];

const tips = [
  {
    title: 'Global Technology Coordination',
    description:
      'Seoul (UTC+9) provides afternoon overlap with European markets and morning overlap with North American West Coast tech hubs.',
  },
  {
    title: 'Regional Business Planning',
    description:
      'Seoul shares time with Tokyo but is 1 hour ahead of Beijing, creating strategic scheduling opportunities across East Asia.',
  },
  {
    title: 'Cultural Event Timing',
    description:
      'Plan for K-pop releases and cultural events knowing that South Korean time remains consistent throughout the year.',
  },
  {
    title: 'Historical Awareness',
    description:
      'Note that South Korea briefly experimented with DST in 1987-1988 but reverted due to public opposition.',
  },
];

const faqs = [
  {
    question: 'Does Seoul observe Daylight Saving Time?',
    answer:
      'No. South Korea does not currently observe Daylight Saving Time and maintains Korea Standard Time (UTC+9) permanently.',
  },
  {
    question: 'Has South Korea ever used DST?',
    answer:
      'Yes, South Korea briefly experimented with Daylight Saving Time during the 1988 Seoul Olympics but discontinued it due to public dissatisfaction.',
  },
  {
    question: "What is Seoul's current time zone?",
    answer:
      'Seoul uses Korea Standard Time (KST), which is UTC+9 year-round. This has been consistent since 1988.',
  },
  {
    question: 'How does Seoul time compare to other Asian technology hubs?',
    answer:
      'Seoul shares the same time zone with Tokyo but is 1 hour ahead of major Chinese cities and 1 hour behind Australian Eastern Time.',
  },
];

const links = [
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Asia/Seoul)',
  "Confirms South Korea's permanent UTC+9 offset maintained since 1988",
  'Provides historical context about timekeeping experiments in South Korea',
  'Offers comparison data with other global technology centers',
];

const ssData = {
  text: 'Seoul maintains Korea Standard Time (UTC+9) year-round with no DST. Essential information for technology and business coordination with South Korea.',
  hashtags: 'SeoulTime, KoreaTime, KST, NoDST',
  title: 'DST in Seoul - South Korea Time Zone Checker',
};

const title = 'DST in Seoul - South Korea Time Zone Checker';
const description =
  "Seoul uses Korea Standard Time (UTC+9) permanently without DST. Check current time and understand South Korea's stable time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Seoul clock (KST, UTC+9)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Asia/Seoul)',
      "Historical context on South Korea's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Seoul"',
        description:
          'Instantly load the current local time in Seoul, showing Korea Standard Time (UTC+9).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that South Korea does not observe Daylight Saving Time.',
      },
      {
        name: 'Step 3: Review Stable UTC+9 Offset',
        description:
          'See the consistent time offset that provides reliability for global technology operations.',
      },
      {
        name: 'Step 4: Understand Regional Technology Context',
        description:
          'Learn how Seoul time coordinates with other major Asian technology hubs.',
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
  head: 'Seoul — Consistent Time for Technology Hub',
  subHead:
    "Seoul maintains Korea Standard Time (UTC+9) year-round without Daylight Saving Time. South Korea discontinued DST after brief experiments, providing stable timekeeping for one of the world's leading technology centers.",
  featuresHead: 'Precision for Global Technology',
  tipsHead: 'Maximizing Seoul Time Effectiveness',
  faqsHead: 'Seoul Time & DST FAQs',
  linksHead: 'Northeast Asian Tech Hubs',
  howItWorksHead: 'How We Provide Accurate Seoul Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Seoul@@Asia/Seoul',
  },
});
