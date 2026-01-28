import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaHistory,
  FaMousePointer,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Select Location"
      />
    ),
    title: 'Search “Tokyo”',
    description: 'Instantly load Tokyo’s live clock in JST (UTC+9).',
  },
  {
    icon: <FaCalendarAlt className={styles.stepIcon} aria-label="DST Status" />,
    title: 'See DST Status (None)',
    description: 'Tokyo does not adjust clocks seasonally—DST is not observed.',
  },
  {
    icon: <FaHistory className={styles.stepIcon} aria-label="History" />,
    title: 'Explore History',
    description:
      'Japan used DST briefly (1948–1951) under U.S. administration, then abolished it.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Plan Globally" />,
    title: 'Plan Globally',
    description:
      'Use the stable UTC+9 offset for smooth scheduling across continents.',
  },
];

const features = [
  {
    icon: (
      <FaClock className={styles.featureIcon} aria-label="Real-Time Clock" />
    ),
    title: 'Live Tokyo Clock',
    description:
      'Always-accurate Japan Standard Time (UTC+9) synced with tzdb.',
  },
  {
    icon: <FaBookOpen className={styles.featureIcon} aria-label="History" />,
    title: 'Historical Insights',
    description:
      'Learn why Japan dropped DST and how it impacts today’s schedules.',
  },
];

const tips = [
  {
    title: 'No Clock Changes',
    description:
      'Tokyo’s time stays constant—no need to adjust for seasonal shifts.',
  },
  {
    title: 'Factor in Long Gaps',
    description:
      'During European summers, Tokyo can be 7–8 hours ahead of Central Europe, and 13–14 hours ahead of U.S. Eastern Time.',
  },
  {
    title: 'Business Scheduling',
    description:
      'Plan meetings in late afternoon Tokyo time for best overlap with Europe or U.S. mornings.',
  },
  {
    title: 'Historic Note',
    description:
      'DST was unpopular in Japan due to late sunsets disrupting traditional work and school routines.',
  },
];

const faqs = [
  {
    question: 'Does Tokyo observe DST?',
    answer:
      'No. Tokyo and all of Japan remain on Japan Standard Time (UTC+9) year-round.',
  },
  {
    question: 'Did Japan ever use DST?',
    answer:
      'Yes, Japan adopted DST between 1948–1951 under U.S. occupation. It was repealed in 1952 and has not returned since.',
  },
  {
    question: 'How does this affect global business?',
    answer:
      'International partners must account for a fixed UTC+9 offset—time gaps shift seasonally only because other countries change, not Japan.',
  },
];

const links = [
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Shanghai', path: `/${PATHS.dstInShanghai}` },
  { name: 'Seoul', path: `/${PATHS.dstInSeoul}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
];

const howItWorks = [
  'Pulls Tokyo’s live time directly from tzdb.',
  'Displays UTC+9 offset with no DST applied.',
  'Adds historical context about Japan’s brief DST era.',
  'Highlights practical tips for cross-continental scheduling.',
];

const ssData = {
  text: 'Tokyo stays on Japan Standard Time (UTC+9) all year. Japan ended DST in 1952—learn why and plan your global meetings with confidence.',
  hashtags: 'TimeZones,Tokyo,JapanTravel',
  title: 'Tokyo — No Daylight Saving',
};

const title = 'Tokyo: No DST — Japan Standard Time All Year';
const description =
  'Tokyo follows Japan Standard Time (UTC+9) year-round. Learn why Japan ended DST decades ago and tips for scheduling with global partners.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate Tokyo clock (JST, UTC+9)',
      'Clear “No DST” indicator',
      'Historic context on Japan’s past DST usage',
      'Guidance for international scheduling',
    ],
    steps: [
      {
        name: 'Step 1: Search “Tokyo”',
        description:
          'Load Tokyo’s local time (JST, UTC+9) and confirm that DST is not applied.',
      },
      {
        name: 'Step 2: Check DST Status (Not Observed)',
        description:
          'The page clearly shows that Tokyo remains on Japan Standard Time year-round.',
      },
      {
        name: 'Step 3: Learn Historical Context',
        description:
          'Discover that Japan briefly experimented with DST after WWII but abandoned it in 1952.',
      },
      {
        name: 'Step 4: Plan Internationally',
        description:
          'Use the fixed UTC+9 offset to schedule meetings with Europe and the Americas without seasonal confusion.',
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
  head: 'Tokyo — No Daylight Saving',
  subHead:
    'Tokyo follows Japan Standard Time (UTC+9) all year. Japan ended DST in 1952 and has stayed on a stable clock since.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Practical Tips',
  faqsHead: 'FAQs',
  linksHead: 'Major Asian Business Hubs',
  howItWorksHead: 'How It Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Tokyo@@Asia/Tokyo',
  },
});
