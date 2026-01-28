import { FaGlobeAsia, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiRiver } from 'react-icons/gi';
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
    title: 'Enter "Bangkok"',
    description:
      "Type the name of Thailand's capital to get precise live time in Indochina Time (ICT).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Bangkok maintains Indochina Time (UTC+7) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+7 Offset',
    description:
      'View the stable time offset that has never changed due to DST, providing reliability for travel planning.',
  },
  {
    icon: (
      <FaGlobeAsia className={styles.stepIcon} aria-label="Regional Context" />
    ),
    title: 'Understand Southeast Asian Alignment',
    description:
      'Learn how Bangkok time coordinates with neighboring countries in the Indochina Time zone.',
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
      "Provides clear confirmation of Thailand's permanent UTC+7 policy, essential for travel and business in Southeast Asia.",
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
      "Explains Thailand's long-standing time zone stability, with no history of Daylight Saving Time observance.",
  },
  {
    icon: (
      <GiRiver className={styles.featureIcon} aria-label="Tourism Context" />
    ),
    title: 'Tourism and Business Alignment',
    description:
      'Shows how Bangkok time supports the tourism industry and business operations across Southeast Asia.',
  },
];

const tips = [
  {
    title: 'Southeast Asian Travel Coordination',
    description:
      'Bangkok (UTC+7) shares the same time zone with Vietnam, Cambodia, and western Indonesia, simplifying regional travel planning.',
  },
  {
    title: 'International Flight Planning',
    description:
      'Schedule connections considering Bangkok is 1 hour behind Singapore/Beijing and 2 hours behind Australian Western Time.',
  },
  {
    title: 'Business Hours Alignment',
    description:
      'Bangkok business hours overlap with both Asian and European markets, making it convenient for international business.',
  },
  {
    title: 'Seasonal Consistency Advantage',
    description:
      'Enjoy the benefit of consistent time year-round without the confusion of seasonal clock changes.',
  },
];

const faqs = [
  {
    question: 'Does Bangkok observe Daylight Saving Time?',
    answer:
      'No. Thailand has never observed Daylight Saving Time and maintains Indochina Time (UTC+7) permanently throughout the year.',
  },
  {
    question: "Why doesn't Thailand use DST?",
    answer:
      "Thailand's tropical location near the equator means relatively consistent daylight hours year-round, eliminating the need for seasonal time adjustments.",
  },
  {
    question: "What is Bangkok's current time zone?",
    answer:
      'Bangkok uses Indochina Time (ICT), which is UTC+7 year-round. This has been consistent throughout modern history.',
  },
  {
    question:
      'How does Bangkok time compare to other Southeast Asian capitals?',
    answer:
      'Bangkok shares the same time zone with Hanoi, Phnom Penh, and Jakarta, but is 1 hour behind Singapore, Kuala Lumpur, and Manila.',
  },
];

const links = [
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Asia/Bangkok)',
  "Confirms Thailand's permanent UTC+7 offset with no DST history",
  'Provides context about timekeeping in Southeast Asia',
  'Offers comparison data with other major Asian destinations',
];

const ssData = {
  text: 'Bangkok maintains Indochina Time (UTC+7) year-round with no DST. Essential information for travel and business in Southeast Asia.',
  hashtags: 'BangkokTime, ThailandTime, NoDST, TravelPlanning',
  title: 'DST in Bangkok - Thailand Time Zone Checker',
};

const title = 'DST in Bangkok - Thailand Time Zone Checker';
const description =
  "Bangkok uses Indochina Time (UTC+7) permanently without DST. Check current time and understand Thailand's consistent time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Bangkok clock (ICT, UTC+7)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Asia/Bangkok)',
      "Historical context on Thailand's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Bangkok"',
        description:
          'Instantly load the current local time in Bangkok, showing Indochina Time (UTC+7).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that Thailand has never observed Daylight Saving Time.',
      },
      {
        name: 'Step 3: Review Stable UTC+7 Offset',
        description:
          'See the consistent time offset that provides reliability for travel and business.',
      },
      {
        name: 'Step 4: Understand Regional Context',
        description:
          'Learn how Bangkok time coordinates with other Southeast Asian destinations.',
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
  head: 'Bangkok — Consistent Time for Southeast Asia',
  subHead:
    'Bangkok maintains Indochina Time (UTC+7) year-round without Daylight Saving Time. Thailand has never observed DST, providing consistent timekeeping for travel and business in Southeast Asia.',
  featuresHead: 'Stability for Travel and Business',
  tipsHead: 'Maximizing Bangkok Time Effectiveness',
  faqsHead: 'Bangkok Time & DST FAQs',
  linksHead: 'Southeast Asian Destinations',
  howItWorksHead: 'How We Provide Accurate Bangkok Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Bangkok@@Asia/Bangkok',
  },
});
