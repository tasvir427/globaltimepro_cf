import {
  FaBell,
  FaClock,
  FaGlobe,
  FaHandshake,
  FaHistory,
  FaInfoCircle,
  FaMousePointer,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer className={styles.stepIcon} aria-label="Select City" />
    ),
    title: 'Enter “Dubai”',
    description:
      'Type the city name to load the live Dubai clock, showing Gulf Standard Time (UTC+4).',
  },
  {
    icon: (
      <FaInfoCircle className={styles.stepIcon} aria-label="Check Status" />
    ),
    title: 'Confirm No DST',
    description:
      'See the definitive “Daylight Saving Time is not observed” status, a key fact for long-term planning.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Review Offset" />,
    title: 'Note the UTC+4 Offset',
    description:
      'Use the stable UTC+4 offset to accurately calculate time differences with the rest of the world.',
  },
  {
    icon: (
      <FaHandshake className={styles.stepIcon} aria-label="Plan Confidently" />
    ),
    title: 'Schedule with Confidence',
    description:
      'Leverage this certainty to book flights, set international meetings, and manage projects without time change surprises.',
  },
];

const features = [
  {
    icon: <FaClock className={styles.featureIcon} aria-label="Live Clock" />,
    title: 'Always-Accurate Live Clock',
    description:
      'Displays the precise current time in Dubai (GST, UTC+4), sourced directly from the IANA Time Zone Database.',
  },
  {
    icon: <FaBell className={styles.featureIcon} aria-label="No Alerts" />,
    title: 'Zero DST Change Alerts',
    description:
      'Enjoy peace of mind; you will never get a DST change notification for Dubai, as its time remains constant all year.',
  },
  {
    icon: (
      <FaHistory className={styles.featureIcon} aria-label="Historical Data" />
    ),
    title: 'Historically Accurate',
    description:
      'Our data confirms the UAE permanently adopted GST (UTC+4) in 1972 and has never observed Daylight Saving Time.',
  },
];

const tips = [
  {
    title: 'Simplify International Scheduling',
    description:
      'When scheduling with European partners, remember the time difference is stable in winter (e.g., Dubai is always ahead of London by 4 hours, 3 during UK DST).',
  },
  {
    title: 'Ideal for Remote Work Alignment',
    description:
      'Dubai’s workday can neatly overlap with both Asian mornings and European mornings, making it a strategic hub for remote teams across continents.',
  },
  {
    title: 'No Clock Changes for Travel',
    description:
      'Travelers can rejoice; you never need to worry about adjusting your watch or missing a flight due to a DST time change in Dubai.',
  },
  {
    title: 'Set Permament World Clocks',
    description:
      'Add Dubai as a permanent “UTC+4” city on your world clock apps. You never need to update it for seasonal changes.',
  },
];

const faqs = [
  {
    question: 'Does Dubai have Daylight Saving Time?',
    answer:
      'No. Dubai, and the entire United Arab Emirates, operates on Gulf Standard Time (GST) which is UTC+4 year-round. It does not observe Daylight Saving Time.',
  },
  {
    question: 'Why doesn’t Dubai use DST?',
    answer:
      'The UAE’s consistent sunlight hours throughout the year and its focus as a stable global business hub reduce the need for seasonal clock changes. The benefits of a stable, predictable time zone outweigh perceived advantages of DST.',
  },
  {
    question: 'Has Dubai ever observed DST in the past?',
    answer:
      'No. The UAE has never observed Daylight Saving Time since the federation was formed and GST (UTC+4) was adopted nationwide in 1972.',
  },
  {
    question: 'How does the lack of DST affect business with Europe?',
    answer:
      'It creates a predictable time difference. For example, Dubai is always 3 hours ahead of London when the UK is on BST (DST), and 4 hours ahead when the UK is on GMT (standard time). This consistency simplifies scheduling.',
  },
];

const links = [
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
];

const howItWorks = [
  'Pulls the current, precise time for the IANA time zone `Asia/Dubai`.',
  'Checks against the official time zone database to confirm that no DST rules are or have been applied.',
  'Displays the constant UTC+4 offset and current local time.',
  'Provides context on how this stable time zone interacts with major global business centers that do change their clocks.',
];

const ssData = {
  text: 'Dubai is on Gulf Standard Time (UTC+4) year-round and does not observe Daylight Saving. Perfect for stable international scheduling.',
  hashtags: 'DubaiTime,NoDST,TimeZone,Business',
  title: 'DST in Dubai - Time Zone Checker',
};

const title = 'DST in Dubai - Daylight Saving Time Checker';
const description =
  'Dubai is on Gulf Standard Time (GST) year-round (UTC+4) and does not observe DST. Check the current time and get scheduling tips for this global business hub.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Dubai clock (GST, UTC+4)',
      'Clear “No DST” status confirmation',
      'Precise IANA time zone data (Asia/Dubai)',
      'International scheduling guidance',
    ],
    steps: [
      {
        name: 'Step 1: Search “Dubai”',
        description:
          'Instantly load the current local time in Dubai (GST, UTC+4) and confirm its stable time zone.',
      },
      {
        name: 'Step 2: See DST Status (Not Observed)',
        description:
          'The page clearly displays that Dubai does not change its clocks for Daylight Saving, providing scheduling certainty.',
      },
      {
        name: 'Step 3: Review UTC Offset',
        description:
          'Note the consistent UTC+4 offset, crucial for converting time for international calls and deadlines.',
      },
      {
        name: 'Step 4: Apply Business Tips',
        description:
          'Utilize practical advice for coordinating with regions that do observe DST, preventing meeting mishaps.',
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
  head: 'Dubai — No Daylight Saving Time',
  subHead:
    'Dubai operates on Gulf Standard Time (GST) year-round (UTC+4) and does not observe DST. This provides unmatched consistency for international business and travel scheduling.',
  featuresHead: 'Key Features for Dubai',
  tipsHead: 'Scheduling Tips for a DST-Free Zone',
  faqsHead: 'Dubai DST FAQs',
  linksHead: 'Major Global Business Centers',
  howItWorksHead: 'How Our Dubai Time Check Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Dubai@@Asia/Dubai',
  },
});
