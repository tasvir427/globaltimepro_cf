import { GiIndiaGate, GiSandsOfTime, GiWorld } from 'react-icons/gi';
import {
  TbBuildingSkyscraper,
  TbClock,
  TbClockOff,
  TbHandClick,
} from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Search City"
      />
    ),
    title: 'Enter “Mumbai”',
    description:
      'Type the name of India’s financial capital to get the precise live time in Indian Standard Time (IST).',
  },
  {
    icon: <TbClockOff className={styles.stepIcon} aria-label="No DST" />,
    title: 'See No DST Observed',
    description:
      'Get immediate confirmation that India has a stable timezone with no seasonal clock changes.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Unique Offset" />,
    title: 'Note the Unique UTC+5:30',
    description:
      'Understand the half-hour offset, a key differentiator that affects scheduling with most other countries.',
  },
  {
    icon: <TbHandClick className={styles.stepIcon} aria-label="Use Tips" />,
    title: 'Schedule with Confidence',
    description:
      'Leverage specific tips to avoid the common scheduling errors caused by the 30-minute time difference.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime className={styles.featureIcon} aria-label="Live Time" />
    ),
    title: 'Real-Time IST Clock',
    description:
      'Displays the exact current time in Mumbai, sourced live from the authoritative IANA Time Zone Database (Asia/Kolkata).',
  },
  {
    icon: (
      <GiIndiaGate className={styles.featureIcon} aria-label="National Scope" />
    ),
    title: 'Nationwide Time Accuracy',
    description:
      'Confirms that the entire Republic of India, from Mumbai to Kolkata to New Delhi, observes the same single time zone (IST).',
  },
  {
    icon: (
      <GiWorld className={styles.featureIcon} aria-label="Global Context" />
    ),
    title: 'Global Offset Context',
    description:
      'Highlights how the UTC+5:30 offset creates a workday that bridges the end of the East Asian day and the beginning of the European day.',
  },
];

const tips = [
  {
    title: 'Master the “Half-Hour” Meeting Math',
    description:
      'When calculating call times, remember that 9:00 AM IST is 10:30 PM EST (previous day) or 3:30 AM GMT. Always double-check the :30 minute difference.',
  },
  {
    title: 'Leverage the Overlap with Europe',
    description:
      'The late morning in Mumbai (e.g., 11:00 AM IST) overlaps with the early morning in Europe (6:30 AM GMT), providing a short but valuable window for real-time collaboration.',
  },
  {
    title: 'Set Calendar Invites with Explicit Times',
    description:
      'Always specify the time zone explicitly in invites as "IST (UTC+5:30)" to prevent confusion for participants in other countries.',
  },
  {
    title: 'Understand the Indian Work Week',
    description:
      'The standard work week is Monday to Saturday, though many multinationals and tech firms follow a Monday-Friday schedule. Confirm working days with local contacts.',
  },
];

const faqs = [
  {
    question: 'Does Mumbai (India) have Daylight Saving Time?',
    answer:
      'No. India has never observed Daylight Saving Time. It uses Indian Standard Time (IST) year-round, which is UTC+5:30.',
  },
  {
    question: 'Why is India’s time zone a half-hour?',
    answer:
      'IST is based on the longitude of 82.5° E, which passes near Allahabad. This longitude is 5 hours and 30 minutes ahead of Coordinated Universal Time (UTC), resulting in the unique UTC+5:30 offset.',
  },
  {
    question: 'Is all of India on the same time?',
    answer:
      'Yes. The entire Republic of India observes a single time zone, Indian Standard Time (IST), despite its large geographical span.',
  },
  {
    question: 'How does the half-hour offset affect business?',
    answer:
      'It means the time difference between India and most other countries is not a round number of hours. This requires extra attention when scheduling international calls to avoid errors of exactly 30 minutes.',
  },
];

const links = [
  { name: 'Delhi', path: `/${PATHS.dstInDelhi}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Singapore', path: `/${PATHS.dstInSingapore}` },
  { name: 'Bangkok', path: `/${PATHS.dstInBangkok}` },
  { name: 'Hong Kong', path: `/${PATHS.dstInHongKong}` },
];

const howItWorks = [
  'Pulls the current, precise time for the IANA time zone `Asia/Kolkata`.',
  'References the time zone database to confirm that no DST rules are or have been applied in India.',
  'Displays the constant UTC+5:30 offset and current local time for Mumbai.',
  'Provides specific context for scheduling across this unique half-hour time difference.',
];

const ssData = {
  text: 'Mumbai is on Indian Standard Time (IST) year-round (UTC+5:30) with no DST. Master the unique half-hour offset for global business.',
  hashtags: 'MumbaiTime,IST,India,TimeZone,NoDST',
  title: 'DST in Mumbai - India Time Zone Checker',
};

const title = 'DST in Mumbai - India Time Zone Checker';
const description =
  'Mumbai is on Indian Standard Time (IST) year-round (UTC+5:30) and does not observe DST. Check the current time and get tips for scheduling across this unique half-hour time zone.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Mumbai clock (IST, UTC+5:30)',
      'Clear “No DST” status for India',
      'Precise IANA time zone data (Asia/Kolkata)',
      'Guidance for half-hour offset scheduling',
    ],
    steps: [
      {
        name: 'Step 1: Search “Mumbai”',
        description:
          'Instantly load the current local time in Mumbai, showing Indian Standard Time (IST, UTC+5:30).',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'The page confirms India does not use Daylight Saving Time, providing certainty for long-term project planning.',
      },
      {
        name: 'Step 3: Review the UTC+5:30 Offset',
        description:
          'Note the unique half-hour offset, which is crucial for accurately calculating time differences with the rest of the world.',
      },
      {
        name: 'Step 4: Apply Scheduling Tips',
        description:
          'Use practical advice to navigate the half-hour difference when scheduling meetings with North American, European, and Asian partners.',
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
  head: 'Mumbai — The Heart of Indian Standard Time',
  subHead:
    'Mumbai operates on Indian Standard Time (IST) year-round (UTC+5:30) and does not observe DST. This unique half-hour offset is stable but requires careful calculation for international scheduling.',
  featuresHead: 'Precision Timekeeping for India',
  tipsHead: 'Navigating the Half-Hour Difference',
  faqsHead: 'Mumbai & IST FAQs',
  linksHead: 'Major Asian Commercial Centers',
  howItWorksHead: 'How Our Mumbai Time Data is Calculated',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Mumbai@@Asia/Kolkata',
  },
});
