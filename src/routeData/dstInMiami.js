import { FaBuildingColumns, FaClock } from 'react-icons/fa6';
import {
  MdLocationCity,
  MdBusinessCenter,
  MdOutlineWbSunny,
} from 'react-icons/md';
import { TbWorldLatitude } from 'react-icons/tb';
import { GiPalmTree } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdLocationCity className={styles.stepIcon} aria-label="Search Miami" />
    ),
    title: 'Enter "Miami"',
    description:
      "Input the Magic City's name to instantly access precise Eastern Time (ET) information and current DST status.",
  },
  {
    icon: (
      <MdOutlineWbSunny className={styles.stepIcon} aria-label="DST Active" />
    ),
    title: 'View Live DST Status',
    description:
      'See whether Miami is currently observing Eastern Daylight Time (EDT) or Eastern Standard Time (EST) with exact UTC offset.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Changes" />,
    title: 'Track Upcoming Changes',
    description:
      'Get precise dates and times for spring forward and fall back transitions, crucial for business scheduling and travel planning.',
  },
  {
    icon: (
      <MdBusinessCenter
        className={styles.stepIcon}
        aria-label="Business Planning"
      />
    ),
    title: 'Plan International Business',
    description:
      "Essential for Miami's role as a global financial hub with over 60 international banks and extensive Latin American business connections.",
  },
];

const features = [
  {
    icon: (
      <FaBuildingColumns
        className={styles.featureIcon}
        aria-label="Financial Hub Data"
      />
    ),
    title: 'Global Financial Hub Support',
    description:
      "Tailored for Miami's position as the largest U.S. banking center outside NYC, serving the critical timing needs of international finance and Latin American trade.",
  },
  {
    icon: (
      <GiPalmTree className={styles.featureIcon} aria-label="Tourism Clarity" />
    ),
    title: 'Tourism Time Clarity',
    description:
      "Eliminates confusion for Miami's millions of international visitors who need reliable DST information for flights, hotels, and cruise departures.",
  },
  {
    icon: (
      <TbWorldLatitude
        className={styles.featureIcon}
        aria-label="IANA Precision"
      />
    ),
    title: 'Americas/New_York Zone Authority',
    description:
      'Uses official IANA time zone database (America/New_York) to provide definitive EDT/EST transitions and UTC-4/-5 offset accuracy.',
  },
];

const tips = [
  {
    title: "Navigate Florida's Dual Time Zones",
    description:
      'Miami is in Eastern Time, but remember that western Florida (panhandle) uses Central Time. This matters for business calls with Tampa vs. Pensacola.',
  },
  {
    title: 'International Business Timing',
    description:
      "Miami's financial sector operates heavily with Latin America. During DST (March-November), Miami is typically 1-2 hours ahead of most South American financial centers.",
  },
  {
    title: 'Cruise and Flight Coordination',
    description:
      "Miami's major ports and airport operate on local time. Verify departure times match your device's time zone, especially during DST transition weekends.",
  },
  {
    title: 'Peak Season DST Overlap',
    description:
      "Miami's tourist high season (November-April) spans both DST periods. EST begins in November just as peak season starts, affecting international visitor scheduling.",
  },
];

const faqs = [
  {
    question: 'Does Miami observe Daylight Saving Time?',
    answer:
      'Yes, Miami follows U.S. Eastern Time zone rules, observing Daylight Saving Time from the second Sunday in March to the first Sunday in November, shifting from EST (UTC-5) to EDT (UTC-4).',
  },
  {
    question: 'What time zone is Miami International Airport?',
    answer:
      'Miami International Airport operates on Eastern Time year-round, switching between EST (UTC-5) in winter and EDT (UTC-4) during Daylight Saving Time. All flight schedules use local Miami time.',
  },
  {
    question: "How does Miami's DST affect business with Latin America?",
    answer:
      'During EDT (March-November), Miami is typically 1 hour ahead of Colombia/Peru, 2 hours ahead of Mexico City, and same time as most of Chile. This changes when Miami switches back to EST.',
  },
  {
    question: 'Are Miami and New York always on the same time?',
    answer:
      'Yes, Miami and New York share the Eastern Time Zone and observe identical DST schedules, making them synchronized year-round for business and communication purposes.',
  },
];

const links = [
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
  { name: 'Sao Paulo', path: `/${PATHS.dstInSaoPaulo}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Los Angeles', path: `/${PATHS.dstInLosAngeles}` },
  { name: 'New York', path: `/${PATHS.dstInNewYork}` },
];

const howItWorks = [
  "Connects to the IANA time zone database using America/New_York identifier for Miami's official time zone.",
  'Calculates current UTC offset: -5 hours (EST) in winter, -4 hours (EDT) during Daylight Saving Time.',
  'Displays precise DST transition dates: second Sunday in March (spring forward), first Sunday in November (fall back).',
  'Provides real-time clock synchronized with Eastern Time zone for accurate business and travel coordination.',
  "Includes DST impact analysis for Miami's role as a gateway to Latin American markets and international tourism.",
];

const ssData = {
  text: 'Miami observes Eastern Daylight Time (EDT) from March-November. Essential for international business, cruise schedules, and Latin American coordination.',
  hashtags: 'MiamiTime, EasternTime, DST, MiamiTravel',
  title: 'DST in Miami - Florida Eastern Time Checker',
};

const title = 'DST in Miami - Florida Eastern Time Checker';
const description =
  "Check Miami's current DST status. Miami observes Eastern Time (EDT/EST) with standard U.S. transitions. Essential for business, cruise timing, and international travel.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Miami clock with EDT/EST status',
      'DST transition dates for business planning',
      'Eastern Time Zone (America/New_York) precision',
      'International business coordination support',
    ],
    steps: [
      {
        name: 'Step 1: Search "Miami"',
        description:
          "Instantly view Miami's current time in Eastern Time Zone, showing whether EDT (UTC-4) or EST (UTC-5) is active.",
      },
      {
        name: 'Step 2: Check DST Status',
        description:
          "See live DST status with precise UTC offset - critical for Miami's role as an international business and tourism hub.",
      },
      {
        name: 'Step 3: View Transition Dates',
        description:
          'Access upcoming spring forward and fall back dates for accurate scheduling of international meetings and travel plans.',
      },
      {
        name: 'Step 4: Coordinate Business Operations',
        description:
          "Use Miami's time data for coordination with Latin American markets, cruise schedules, and international financial operations.",
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
  head: 'Miami — Gateway Time Precision',
  subHead:
    "Miami operates on Eastern Time with standard U.S. DST transitions. From international finance to cruise departures, get the precise timing you need for America's gateway to Latin America.",
  featuresHead: "Built for Miami's Global Connections",
  tipsHead: 'Mastering Miami Time',
  faqsHead: 'Miami DST & Time Zone FAQs',
  linksHead: 'Gateway Cities to the Americas',
  howItWorksHead: 'How We Deliver Miami Time Accuracy',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Miami@@America/New_York',
  },
});
