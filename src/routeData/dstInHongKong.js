import { FaGlobeAsia, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { TbClock, TbBuildingSkyscraper } from 'react-icons/tb';
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
    title: 'Enter "Hong Kong"',
    description:
      'Type the name of this global financial hub to get precise live time in Hong Kong Time (HKT).',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Hong Kong maintains Hong Kong Time (UTC+8) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+8 Offset',
    description:
      'View the stable time offset that has been consistent since 1979, providing reliability for international business.',
  },
  {
    icon: (
      <FaGlobeAsia
        className={styles.stepIcon}
        aria-label="Asian Business Hub"
      />
    ),
    title: 'Understand Regional Business Context',
    description:
      'Learn how Hong Kong time aligns with other major Asian financial centers for optimal business coordination.',
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
      "Provides clear confirmation of Hong Kong's permanent UTC+8 policy, essential for precise financial market operations.",
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
      "Explains Hong Kong's time zone history, including the period when DST was observed (1941-1979) and its discontinuation.",
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.featureIcon}
        aria-label="Business Context"
      />
    ),
    title: 'Financial Market Alignment',
    description:
      'Shows how Hong Kong time coordinates with other major Asian markets and overlaps with European trading hours.',
  },
];

const tips = [
  {
    title: 'Financial Market Coordination',
    description:
      'Hong Kong (UTC+8) overlaps with Singapore and Beijing (same time zone) and provides morning overlap with European markets.',
  },
  {
    title: 'International Business Scheduling',
    description:
      'Schedule meetings with US partners considering Hong Kong is 12-15 hours ahead of North American time zones depending on season.',
  },
  {
    title: 'Travel Planning Simplicity',
    description:
      'No need to adjust for seasonal time changes when traveling to Hong Kong—the time remains consistent throughout the year.',
  },
  {
    title: 'Historical Reference Awareness',
    description:
      'Note that Hong Kong observed DST during various periods between 1941-1979, but has maintained consistent time since.',
  },
];

const faqs = [
  {
    question: 'Does Hong Kong observe Daylight Saving Time?',
    answer:
      'No. Hong Kong abolished Daylight Saving Time in 1979 and now maintains Hong Kong Time (UTC+8) permanently throughout the year.',
  },
  {
    question: 'Why did Hong Kong stop using DST?',
    answer:
      "The practice was discontinued due to its minimal energy savings in Hong Kong's climate and the disruption to business operations.",
  },
  {
    question: "What is Hong Kong's current time zone?",
    answer:
      'Hong Kong uses Hong Kong Time (HKT), which is UTC+8 year-round. This has been consistent since 1979.',
  },
  {
    question: 'How does Hong Kong time compare to mainland China?',
    answer:
      'Hong Kong shares the same time zone (UTC+8) with mainland China, despite maintaining different administrative systems.',
  },
];

const links = [
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Seoul', path: `/${PATHS.dstInSeoul}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Asia/Hong_Kong)',
  "Confirms Hong Kong's permanent UTC+8 offset maintained since 1979",
  'Provides historical context about past DST practices in Hong Kong',
  'Offers comparison data with other major Asian financial centers',
];

const ssData = {
  text: 'Hong Kong maintains Hong Kong Time (UTC+8) year-round with no DST. Essential information for international business and travel planning.',
  hashtags: 'HongKongTime, NoDST, TimeZone, BusinessHours',
  title: 'DST in Hong Kong - Time Zone Checker',
};

const title = 'DST in Hong Kong - Time Zone Checker';
const description =
  "Hong Kong uses Hong Kong Time (UTC+8) permanently without DST. Check current time and understand Hong Kong's stable time zone policy since 1979.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Hong Kong clock (HKT, UTC+8)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Asia/Hong_Kong)',
      "Historical context on Hong Kong's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Hong Kong"',
        description:
          'Instantly load the current local time in Hong Kong, showing Hong Kong Time (UTC+8).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that Hong Kong abolished Daylight Saving Time in 1979.',
      },
      {
        name: 'Step 3: Review Stable UTC+8 Offset',
        description:
          'See the consistent time offset that provides reliability for financial markets and international business.',
      },
      {
        name: 'Step 4: Understand Regional Business Context',
        description:
          'Learn how Hong Kong time aligns with other Asian financial centers for optimal business coordination.',
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
  head: 'Hong Kong — Stable Time for Global Business',
  subHead:
    'Hong Kong maintains Hong Kong Time (UTC+8) year-round without Daylight Saving Time. The city abolished DST in 1979, providing consistent timekeeping for international finance and business.',
  featuresHead: 'Precision for Global Business',
  tipsHead: 'Maximizing Hong Kong Time Effectiveness',
  faqsHead: 'Hong Kong Time & DST FAQs',
  linksHead: 'Asian Financial Centers',
  howItWorksHead: 'How We Provide Accurate Hong Kong Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Hong Kong@@Asia/Hong_Kong',
  },
});
