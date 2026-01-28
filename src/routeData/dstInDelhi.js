import { FaGlobeAsia, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiMonumentValley } from 'react-icons/gi';
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
    title: 'Enter "Delhi"',
    description:
      "Type the name of India's capital to get precise live time in India Standard Time (IST).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Delhi maintains India Standard Time (UTC+5:30) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Unique UTC+5:30 Offset',
    description:
      "View the distinctive half-hour time offset that has been consistent throughout India's modern history.",
  },
  {
    icon: (
      <FaGlobeAsia className={styles.stepIcon} aria-label="Regional Context" />
    ),
    title: 'Understand South Asian Time Alignment',
    description:
      'Learn how Delhi time coordinates with neighboring countries and its unique position between time zones.',
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
      "Provides clear confirmation of India's permanent UTC+5:30 policy, essential for business and diplomatic coordination.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Time Consistency',
    description:
      "Explains India's long-standing time zone stability, with no history of Daylight Saving Time observance.",
  },
  {
    icon: (
      <GiMonumentValley
        className={styles.featureIcon}
        aria-label="Cultural Context"
      />
    ),
    title: 'Cultural and Business Alignment',
    description:
      "Shows how Delhi time supports India's growing global business presence and cultural connections.",
  },
];

const tips = [
  {
    title: 'International Business Coordination',
    description:
      'Delhi (UTC+5:30) creates unique scheduling opportunities with morning overlap with Europe and afternoon overlap with North America.',
  },
  {
    title: 'Regional Time Awareness',
    description:
      'India shares its unusual half-hour offset with only a few other countries, making coordination with neighboring time zones particularly important.',
  },
  {
    title: 'Domestic Travel Consistency',
    description:
      "All of India uses the same time zone, making domestic travel scheduling straightforward despite the country's vast east-west span.",
  },
  {
    title: 'Global Meeting Planning',
    description:
      "Leverage Delhi's unique time position to bridge gaps between Asian, European, and American business hours.",
  },
];

const faqs = [
  {
    question: 'Does Delhi observe Daylight Saving Time?',
    answer:
      'No. India has never observed Daylight Saving Time and maintains India Standard Time (UTC+5:30) permanently throughout the year.',
  },
  {
    question: 'Why does India use a half-hour time offset?',
    answer:
      "The UTC+5:30 offset was chosen to better align with the solar time across most of India's populated regions, striking a balance between eastern and western parts of the country.",
  },
  {
    question: "What is Delhi's current time zone?",
    answer:
      'Delhi uses India Standard Time (IST), which is UTC+5:30 year-round. This has been consistent throughout modern Indian history.',
  },
  {
    question: 'How does Delhi time compare to other South Asian capitals?',
    answer:
      'Delhi is 30 minutes ahead of Kabul, 15 minutes ahead of Kathmandu, and 30 minutes behind Yangon, creating interesting scheduling considerations for regional business.',
  },
];

const links = [
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Bangkok', path: `/${PATHS.dstInBangkok}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Asia/Kolkata)',
  "Confirms India's permanent UTC+5:30 offset with no DST history",
  "Provides context about India's unique time zone position",
  'Offers comparison data with other global business centers',
];

const ssData = {
  text: 'Delhi maintains India Standard Time (UTC+5:30) year-round with no DST. Essential information for business and travel to India.',
  hashtags: 'DelhiTime, IndiaTime, IST, NoDST',
  title: 'DST in Delhi - India Time Zone Checker',
};

const title = 'DST in Delhi - India Time Zone Checker';
const description =
  "Delhi uses India Standard Time (UTC+5:30) permanently without DST. Check current time and understand India's unique time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Delhi clock (IST, UTC+5:30)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Asia/Kolkata)',
      "Historical context on India's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Delhi"',
        description:
          'Instantly load the current local time in Delhi, showing India Standard Time (UTC+5:30).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that India has never observed Daylight Saving Time.',
      },
      {
        name: 'Step 3: Review Unique UTC+5:30 Offset',
        description:
          "See the distinctive half-hour time offset that provides India's unique global positioning.",
      },
      {
        name: 'Step 4: Understand Strategic Time Position',
        description:
          'Learn how Delhi time bridges multiple global business regions throughout the day.',
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
  head: "Delhi — India's Consistent Time Anchor",
  subHead:
    "Delhi maintains India Standard Time (UTC+5:30) year-round without Daylight Saving Time. India has never observed DST, providing stable timekeeping for one of the world's fastest-growing economies.",
  featuresHead: 'Stability for Global Business',
  tipsHead: 'Maximizing Delhi Time Effectiveness',
  faqsHead: 'Delhi Time & DST FAQs',
  linksHead: 'Major South Asian Cities',
  howItWorksHead: 'How We Provide Accurate Delhi Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Delhi@@Asia/Kolkata',
  },
});
