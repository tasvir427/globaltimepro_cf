import {
  FaGlobeAmericas,
  FaHistory,
  FaInfoCircle,
  FaTheaterMasks,
} from 'react-icons/fa';
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
    title: 'Enter "Buenos Aires"',
    description:
      "Type the name of Argentina's capital to get precise live time in Argentina Time (ART).",
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="No DST Status" />,
    title: 'Confirm No Daylight Saving Time',
    description:
      'See that Buenos Aires maintains Argentina Time (UTC-3) year-round without seasonal clock changes.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Stable Time" />,
    title: 'Note Consistent UTC-3 Offset',
    description:
      'View the stable time offset that has been consistent since 2009, providing reliability for South American business.',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Regional Context"
      />
    ),
    title: 'Understand South American Alignment',
    description:
      'Learn how Buenos Aires time coordinates with other major South American economic centers.',
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
      "Provides clear confirmation of Argentina's permanent UTC-3 policy, essential for business across South America.",
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Policy Changes',
    description:
      "Explains Argentina's complex history with DST, including multiple starts and stops over recent decades.",
  },
  {
    icon: (
      <FaTheaterMasks
        className={styles.featureIcon}
        aria-label="Cultural Context"
      />
    ),
    title: 'Cultural and Business Alignment',
    description:
      "Shows how Buenos Aires time supports Argentina's cultural exports and business operations.",
  },
];

const tips = [
  {
    title: 'South American Business Coordination',
    description:
      'Buenos Aires (UTC-3) aligns with Brasília, Montevideo, and Santiago, facilitating regional business across Mercosur countries.',
  },
  {
    title: 'International Meeting Planning',
    description:
      'Schedule meetings with European partners considering Buenos Aires is 4-5 hours behind European time zones depending on season.',
  },
  {
    title: 'Cultural Event Timing',
    description:
      'Plan for tango shows and cultural events knowing that Argentine time remains consistent throughout the year.',
  },
  {
    title: 'Historical Policy Awareness',
    description:
      'Be aware that Argentina has changed its DST policy multiple times, with the current stable system only in place since 2009.',
  },
];

const faqs = [
  {
    question: 'Does Buenos Aires observe Daylight Saving Time?',
    answer:
      'No. Argentina does not currently observe Daylight Saving Time and maintains Argentina Time (UTC-3) permanently throughout the year.',
  },
  {
    question: 'Has Argentina ever used DST?',
    answer:
      'Yes, Argentina has experimented with Daylight Saving Time multiple times, most recently from 2007-2009, but discontinued it due to energy savings being less than expected.',
  },
  {
    question: "What is Buenos Aires' current time zone?",
    answer:
      'Buenos Aires uses Argentina Time (ART), which is UTC-3 year-round. This has been consistent since 2009.',
  },
  {
    question:
      'How does Buenos Aires time compare to other South American capitals?',
    answer:
      'Buenos Aires shares the same time zone with Brasília, Montevideo, and Santiago, but is 1 hour ahead of Caracas and 2 hours ahead of Bogotá.',
  },
];

const links = [
  { name: 'Sao Paulo', path: `/${PATHS.dstInSaoPaulo}` },
  { name: 'Rio de Janeiro', path: `/${PATHS.dstInRioDeJaneiro}` },
  { name: 'Mexico City', path: `/${PATHS.dstInMexicoCity}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Madrid', path: `/${PATHS.dstInMadrid}` },
];

const howItWorks = [
  'Sources accurate time data from the IANA time zone database (America/Argentina/Buenos_Aires)',
  "Confirms Argentina's permanent UTC-3 offset maintained since 2009",
  "Provides historical context about Argentina's time policy changes",
  'Offers comparison data with other South American business centers',
];

const ssData = {
  text: 'Buenos Aires maintains Argentina Time (UTC-3) year-round with no DST. Essential information for business and travel in South America.',
  hashtags: 'BuenosAiresTime, ArgentinaTime, NoDST, SouthAmerica',
  title: 'DST in Buenos Aires - Argentina Time Zone Checker',
};

const title = 'DST in Buenos Aires - Argentina Time Zone Checker';
const description =
  "Buenos Aires uses Argentina Time (UTC-3) permanently without DST. Check current time and understand Argentina's stable time zone policy.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Buenos Aires clock (ART, UTC-3)',
      'Definitive "No DST" status confirmation',
      'Precise IANA time zone data (America/Argentina/Buenos_Aires)',
      "Historical context on Argentina's time policy",
    ],
    steps: [
      {
        name: 'Step 1: Search "Buenos Aires"',
        description:
          'Instantly load the current local time in Buenos Aires, showing Argentina Time (UTC-3).',
      },
      {
        name: 'Step 2: Confirm No DST Status',
        description:
          'Get clear confirmation that Argentina does not observe Daylight Saving Time.',
      },
      {
        name: 'Step 3: Review Stable UTC-3 Offset',
        description:
          'See the consistent time offset that provides reliability for business across South America.',
      },
      {
        name: 'Step 4: Understand Regional Context',
        description:
          'Learn how Buenos Aires time coordinates with other South American economic centers.',
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
  head: 'Buenos Aires — Stable Time for South American Business',
  subHead:
    "Buenos Aires maintains Argentina Time (UTC-3) year-round without Daylight Saving Time. Argentina discontinued DST after multiple experiments, providing consistent timekeeping for one of South America's largest economies.",
  featuresHead: 'Consistency for Regional Commerce',
  tipsHead: 'Maximizing Buenos Aires Time Effectiveness',
  faqsHead: 'Buenos Aires Time & DST FAQs',
  linksHead: 'Major South American Cities',
  howItWorksHead: 'How We Provide Accurate Buenos Aires Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Buenos Aires@@America/Argentina/Buenos_Aires',
  },
});
