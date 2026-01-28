import {
  FaAssistiveListeningSystems,
  FaBan,
  FaClock,
  FaDatabase,
  FaGlobeAsia,
  FaHistory,
  FaSearch,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaSearch className={styles.stepIcon} aria-label="Search City" />,
    title: 'Look Up “Singapore”',
    description:
      'Enter the city name to get the precise live time in Singapore Standard Time (SGT, UTC+8).',
  },
  {
    icon: <FaBan className={styles.stepIcon} aria-label="No DST" />,
    title: 'See No DST Observed',
    description:
      'Get immediate confirmation that Singapore has a stable timezone with no seasonal clock changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Stable Offset" />,
    title: 'Note the UTC+8 Alignment',
    description:
      'Use the consistent UTC+8 offset to seamlessly coordinate with other major Asian business centers.',
  },
  {
    icon: <FaHistory className={styles.stepIcon} aria-label="Learn History" />,
    title: 'Understand the “Why”',
    description:
      'Gain valuable context from Singapore’s unique timezone history to better understand regional timekeeping.',
  },
];

const features = [
  {
    icon: (
      <FaAssistiveListeningSystems
        className={styles.featureIcon}
        aria-label="Live Data"
      />
    ),
    title: 'Real-Time SGT Clock',
    description:
      'Displays the exact current time in Singapore, sourced live from the authoritative IANA Time Zone Database (Asia/Singapore).',
  },
  {
    icon: (
      <FaDatabase className={styles.featureIcon} aria-label="Historical Data" />
    ),
    title: 'Historical Timezone Accuracy',
    description:
      'Our data reflects Singapore’s full history, from its UTC+7:20 era to its various offset changes before settling on UTC+8 in 1982.',
  },
  {
    icon: (
      <FaGlobeAsia
        className={styles.featureIcon}
        aria-label="Regional Context"
      />
    ),
    title: 'Regional Business Context',
    description:
      'Highlights Singapore’s alignment with China Standard Time and Hong Kong Time, which is critical for regional finance and trade.',
  },
];

const tips = [
  {
    title: 'Leverage the “Shanghai-Hong Kong-Singapore” Corridor',
    description:
      'With all three financial hubs on UTC+8, your business day aligns perfectly from open to close, simplifying real-time trading and communication.',
  },
  {
    title: 'Schedule Pan-Asia Meetings with Ease',
    description:
      'Use Singapore time (UTC+8) as a stable anchor point when scheduling calls with parties in Japan (UTC+9), Australia (various), and India (UTC+5:30).',
  },
  {
    title: 'No Need for Bi-Annual Updates',
    description:
      'When setting recurring meetings or deadlines with Singaporean partners, you can set it once forever. The time difference will never change due to DST.',
  },
  {
    title: 'Perfect for Maritime Scheduling',
    description:
      'The Port of Singapore, one of the busiest in the world, operates on a stable SGT. This consistency is vital for logistics and shipping timelines.',
  },
];

const faqs = [
  {
    question: 'Does Singapore have Daylight Saving Time?',
    answer:
      'No. Singapore has not observed Daylight Saving Time since 1935. It currently uses Singapore Standard Time (SGT), which is UTC+8 year-round.',
  },
  {
    question: 'Why is Singapore on UTC+8?',
    answer:
      'Singapore moved to UTC+8 in 1982 to align its working hours with key trading partners in Hong Kong and China, streamlining business and financial markets across the region.',
  },
  {
    question: 'Has Singapore always been on UTC+8?',
    answer:
      'No, Singapore has a fascinating timezone history. It was once UTC+7:20, among other offsets. It briefly experimented with DST in the 1930s and adopted half-hour adjustments (UTC+7:30) before settling on its current, stable UTC+8.',
  },
  {
    question: 'How does this affect calls with the West?',
    answer:
      'The time difference with places like the US and Europe is stable but significant. For example, Singapore is always 12 or 13 hours ahead of New York, depending on *their* DST changes. Our tool helps you track this.',
  },
];

const links = [
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
];

const howItWorks = [
  'Sources the current time for the IANA time zone `Asia/Singapore`.',
  'References the time zone database to confirm that no DST rules are currently or historically in effect for modern Singapore.',
  'Displays the constant UTC+8 offset and precise local time.',
  'Provides context on Singapore’s alignment within the crucial UTC+8 business bloc in Asia.',
];

const ssData = {
  text: 'Singapore Time (SGT) is a stable UTC+8 year-round, with no Daylight Saving. Essential for finance and business in Asia.',
  hashtags: 'SingaporeTime,TimeZone,Finance,NoDST',
  title: 'DST in Singapore - Time Zone Checker',
};

const title = 'DST in Singapore - Time Zone Checker';
const description =
  'Singapore is on Singapore Time (SGT) year-round (UTC+8) and does not use DST. Check the current time and learn about its unique time zone history for seamless scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Singapore clock (SGT, UTC+8)',
      'Clear “No DST” status confirmation',
      'Precise IANA time zone data (Asia/Singapore)',
      'Historical timezone context',
    ],
    steps: [
      {
        name: 'Step 1: Search “Singapore”',
        description:
          'Load the live local clock for Singapore (SGT, UTC+8) instantly.',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'The checker confirms Singapore does not change its clocks for Daylight Saving Time, a key fact for long-term planning in Asia.',
      },
      {
        name: 'Step 3: Review Stable UTC+8 Offset',
        description:
          'See the consistent UTC+8 offset, crucial for coordinating with key financial markets like Hong Kong and China.',
      },
      {
        name: 'Step 4: Apply Historical Context',
        description:
          'Understand the historical timezone changes that led to the current stable SGT, providing deeper insight for regional business.',
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
  head: 'Singapore — A Stable Time Hub in Asia',
  subHead:
    'Singapore Standard Time (SGT) is UTC+8 year-round, with no Daylight Saving Time. This consistency is vital for its role as a global financial center, perfectly aligning it with Hong Kong and Beijing.',
  featuresHead: 'Why Our Singapore Time Check is Best',
  tipsHead: 'Mastering Business in SGT',
  faqsHead: 'Singapore Time & DST FAQs',
  linksHead: 'Asian Financial Hubs',
  howItWorksHead: 'How Our Singapore Time Data is Sourced',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Singapore@@Asia/Singapore',
  },
});
