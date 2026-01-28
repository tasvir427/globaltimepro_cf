import { FaGlobeAfrica, FaPlane, FaBusinessTime } from 'react-icons/fa';
import {
  MdSchedule,
  MdOutlineTravelExplore,
  MdLightbulb,
} from 'react-icons/md';
import { GiCommercialAirplane } from 'react-icons/gi';
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
    title: 'Enter "Lagos"',
    description:
      "Type the name of Nigeria's commercial capital to get the precise live time in West Africa Time (WAT).",
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="No DST" />,
    title: 'Confirm Consistent Time Zone',
    description:
      'Get immediate confirmation that Lagos maintains West Africa Time (UTC+1) year-round without daylight saving changes.',
  },
  {
    icon: (
      <GiCommercialAirplane
        className={styles.stepIcon}
        aria-label="Business Hub"
      />
    ),
    title: 'Plan Business Connections',
    description:
      "View the stable UTC+1 offset to coordinate with one of Africa's fastest-growing economic centers.",
  },
  {
    icon: (
      <FaGlobeAfrica
        className={styles.stepIcon}
        aria-label="Regional Context"
      />
    ),
    title: 'Understand Regional Alignment',
    description:
      'See how Lagos time connects with other major West African commercial centers sharing the same time zone.',
  },
];

const features = [
  {
    icon: (
      <FaBusinessTime
        className={styles.featureIcon}
        aria-label="Business Focus"
      />
    ),
    title: 'Business-Friendly Timing',
    description:
      "Essential for coordinating with Lagos's growing fintech sector and international business community without DST disruptions.",
  },
  {
    icon: (
      <MdLightbulb className={styles.featureIcon} aria-label="Energy Savings" />
    ),
    title: 'Equatorial Consistency',
    description:
      'Learn why locations near the equator like Lagos maintain consistent timekeeping without seasonal adjustments.',
  },
  {
    icon: (
      <FaPlane className={styles.featureIcon} aria-label="Travel Planning" />
    ),
    title: 'Travel Planning Simplified',
    description:
      "Perfect for international visitors planning trips to Nigeria's vibrant economic and cultural capital.",
  },
];

const tips = [
  {
    title: 'Ideal Business Window',
    description:
      'Schedule meetings with European partners in late morning Lagos time to catch both African and European business hours.',
  },
  {
    title: 'Consistent Across Nigeria',
    description:
      'Lagos time represents the entire nation of Nigeria, making it easy to coordinate across all Nigerian destinations.',
  },
  {
    title: 'No Seasonal Adjustments',
    description:
      'Unlike many Western countries, you never need to worry about clock changes when dealing with Lagos-based contacts.',
  },
  {
    title: 'Time Zone Neighbors',
    description:
      'Lagos shares its time zone with many West African neighbors, facilitating regional business coordination.',
  },
];

const faqs = [
  {
    question: 'Does Lagos observe Daylight Saving Time?',
    answer:
      'No. Lagos maintains West Africa Time (WAT) year-round at UTC+1 without any daylight saving time adjustments.',
  },
  {
    question: "Why doesn't Lagos use DST?",
    answer:
      'As a city near the equator, Lagos experiences minimal variation in daylight hours throughout the year, eliminating the need for seasonal clock changes.',
  },
  {
    question: 'What is the correct time zone identifier for Lagos?',
    answer:
      'The IANA time zone identifier for Lagos is Africa/Lagos, which consistently uses UTC+1 without DST.',
  },
  {
    question: 'Do other Nigerian cities use the same time?',
    answer:
      'Yes, all of Nigeria uses West Africa Time (UTC+1) consistently throughout the year without regional variations.',
  },
];

const links = [
  { name: 'Johannesburg', path: `/${PATHS.dstInJohannesburg}` },
  { name: 'Cairo', path: `/${PATHS.dstInCairo}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
];

const howItWorks = [
  'Pulls current time data for the IANA time zone Africa/Lagos',
  'References authoritative time zone databases confirming no DST observance',
  'Displays the consistent UTC+1 offset and current local time',
  "Provides context about timekeeping in West Africa's economic hub",
];

const ssData = {
  text: "Lagos maintains West Africa Time (UTC+1) year-round with no DST. Perfect for business coordination with Nigeria's commercial capital.",
  hashtags: 'LagosTime, Nigeria, TimeZone, NoDST, WestAfricaTime',
  title: 'DST in Lagos - Nigeria Time Zone Checker',
};

const title = 'DST in Lagos - Nigeria Time Zone Checker';
const description =
  "Lagos uses West Africa Time (WAT) consistently at UTC+1 with no daylight saving changes. Check current time and plan business with Africa's economic hub.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Lagos clock (WAT, UTC+1)',
      'Definitive "No DST" status for Nigeria',
      'Precise IANA time zone data (Africa/Lagos)',
      'Business coordination guidance',
    ],
    steps: [
      {
        name: 'Step 1: Search "Lagos"',
        description:
          'Instantly load the current local time in Lagos, showing West Africa Time (WAT, UTC+1).',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'Receive immediate confirmation that Nigeria does not observe Daylight Saving Time.',
      },
      {
        name: 'Step 3: Note the Consistent UTC+1 Offset',
        description:
          "See the stable UTC+1 offset essential for business planning with West Africa's economic center.",
      },
      {
        name: 'Step 4: Plan Regional Coordination',
        description:
          'Understand how Lagos time connects with other major West African commercial centers.',
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
  head: "Lagos — Consistent Time in West Africa's Business Hub",
  subHead:
    "Lagos maintains West Africa Time (WAT) at UTC+1 year-round without daylight saving adjustments. Essential for business coordination with Nigeria's commercial capital.",
  featuresHead: 'Business-Friendly Time Management',
  tipsHead: 'Maximizing Lagos Time Coordination',
  faqsHead: 'Lagos Time & DST FAQs',
  linksHead: 'Major African Commercial Hubs',
  howItWorksHead: 'How We Provide Accurate Lagos Time Data',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Lagos@@Africa/Lagos',
  },
});
