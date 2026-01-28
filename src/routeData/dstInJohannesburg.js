import { FaGlobeAfrica, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { GiGoldMine } from 'react-icons/gi';
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
    title: 'Enter "Johannesburg"',
    description:
      "Type the name of South Africa's economic hub to get precise live time in South Africa Standard Time (SAST).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Johannesburg maintains South Africa Standard Time (UTC+2) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC+2 Offset',
    description:
      'View the stable time offset that has been consistent for decades, providing reliability for business across Africa.',
  },
  {
    icon: (
      <FaGlobeAfrica className={styles.stepIcon} aria-label="African Context" />
    ),
    title: 'Understand Continental Alignment',
    description:
      'Learn how Johannesburg time coordinates with other major African business centers and European markets.',
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
      "Provides clear confirmation of South Africa's permanent UTC+2 policy, essential for pan-African business coordination.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Time Stability',
    description:
      "Explains South Africa's long-standing time zone consistency, with no DST changes since the World War II era.",
  },
  {
    icon: (
      <GiGoldMine
        className={styles.featureIcon}
        aria-label="Economic Context"
      />
    ),
    title: 'Mining and Business Alignment',
    description:
      'Shows how Johannesburg time supports the mining industry and financial markets that operate across multiple African time zones.',
  },
];

const tips = [
  {
    title: 'African Business Coordination',
    description:
      'Johannesburg (UTC+2) aligns with Central African Time and is 1 hour ahead of West Africa Time, facilitating regional business.',
  },
  {
    title: 'European Market Overlap',
    description:
      'Schedule meetings with European partners considering Johannesburg time provides 1-2 hours of morning overlap with European business hours.',
  },
  {
    title: 'Domestic Travel Consistency',
    description:
      'All of South Africa uses the same time zone, making domestic travel scheduling straightforward throughout the year.',
  },
  {
    title: 'Seasonal Awareness',
    description:
      "While time doesn't change, remember that seasonal variations in daylight hours are opposite to the Northern Hemisphere.",
  },
];

const faqs = [
  {
    question: 'Does Johannesburg observe Daylight Saving Time?',
    answer:
      'No. South Africa has not observed Daylight Saving Time since 1944 and maintains South Africa Standard Time (UTC+2) permanently.',
  },
  {
    question: "Why doesn't South Africa use DST?",
    answer:
      "The country's latitude near the equator means daylight hours don't vary enough to justify the disruption of seasonal time changes.",
  },
  {
    question: "What is Johannesburg's current time zone?",
    answer:
      'Johannesburg uses South Africa Standard Time (SAST), which is UTC+2 year-round. This has been consistent for decades.',
  },
  {
    question: 'How does Johannesburg time compare to other African capitals?',
    answer:
      'Johannesburg shares the same time zone with Harare, Maputo, and Cairo, but is 1 hour ahead of Lagos and 2 hours ahead of Dakar.',
  },
];

const links = [
  { name: 'Cape Town', path: `/${PATHS.dstInCapeTown}` },
  { name: 'Lagos', path: `/${PATHS.dstInLagos}` },
  { name: 'Cairo', path: `/${PATHS.dstInCairo}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (Africa/Johannesburg)',
  "Confirms South Africa's permanent UTC+2 offset maintained for decades",
  'Provides historical context about timekeeping in Southern Africa',
  'Offers comparison data with other major African economic centers',
];

const ssData = {
  text: 'Johannesburg maintains South Africa Standard Time (UTC+2) year-round with no DST. Essential information for African business and travel planning.',
  hashtags: 'JohannesburgTime, SouthAfricaTime, NoDST, AfricanBusiness',
  title: 'DST in Johannesburg - South Africa Time Zone Checker',
};

const title = 'DST in Johannesburg - South Africa Time Zone Checker';
const description =
  "Johannesburg uses South Africa Standard Time (UTC+2) permanently without DST. Check current time and understand South Africa's stable time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Johannesburg clock (SAST, UTC+2)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (Africa/Johannesburg)',
      "Historical context on South Africa's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Johannesburg"',
        description:
          'Instantly load the current local time in Johannesburg, showing South Africa Standard Time (UTC+2).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that South Africa has not observed Daylight Saving Time since 1944.',
      },
      {
        name: 'Step 3: Review Stable UTC+2 Offset',
        description:
          'See the consistent time offset that provides reliability for business across Africa.',
      },
      {
        name: 'Step 4: Understand Continental Context',
        description:
          'Learn how Johannesburg time coordinates with other African economic centers.',
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
  head: 'Johannesburg — Stable Time for African Business',
  subHead:
    "Johannesburg maintains South Africa Standard Time (UTC+2) year-round without Daylight Saving Time. South Africa has not observed DST since 1944, providing consistent timekeeping for Africa's economic hub.",
  featuresHead: 'Consistency for African Commerce',
  tipsHead: 'Maximizing Johannesburg Time Effectiveness',
  faqsHead: 'Johannesburg Time & DST FAQs',
  linksHead: 'Major African Economic Hubs',
  howItWorksHead: 'How We Provide Accurate Johannesburg Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Johannesburg@@Africa/Johannesburg',
  },
});
