import { FaCertificate, FaHistory, FaRegClock } from 'react-icons/fa';
import {
  MdAvTimer,
  MdLocationCity,
  MdOutlineDarkMode,
  MdPublic,
} from 'react-icons/md';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdLocationCity className={styles.stepIcon} aria-label="Search City" />
    ),
    title: 'Enter “Moscow”',
    description:
      'Type the name of Russias capital to get the precise live time in Moscow Standard Time (MSK).',
  },
  {
    icon: <MdOutlineDarkMode className={styles.stepIcon} aria-label="No DST" />,
    title: 'See Definitive No DST Status',
    description:
      'Get a clear, authoritative confirmation that Russia does not observe Daylight Saving Time—resolving widespread confusion.',
  },
  {
    icon: <MdAvTimer className={styles.stepIcon} aria-label="Stable Offset" />,
    title: 'Note the Permanent UTC+3',
    description:
      'View the stable UTC+3 offset, which has been in place since 2014, providing certainty for long-term planning.',
  },
  {
    icon: (
      <MdPublic className={styles.stepIcon} aria-label="National Context" />
    ),
    title: 'Gain National Context',
    description:
      'Learn how Moscow time fits within Russias framework of 11 time zones, many of which have also been reformed recently.',
  },
];

const features = [
  {
    icon: (
      <FaCertificate
        className={styles.featureIcon}
        aria-label="Authoritative Data"
      />
    ),
    title: 'Authoritative Clarification',
    description:
      'Cuts through the confusion of Russias past time changes with a definitive, sourced answer based on current IANA data (Europe/Moscow).',
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Policy Context',
    description:
      'Explains the timeline of Russias time changes: the switch to permanent DST in 2011, and the subsequent switch to permanent standard time (MSK) in 2014.',
  },
  {
    icon: (
      <FaRegClock
        className={styles.featureIcon}
        aria-label="Stable Reference"
      />
    ),
    title: 'Stable Reference Point',
    description:
      'Provides a reliable anchor of MSK (UTC+3) from which to understand the times in other Russian cities and former Soviet states.',
  },
];

const tips = [
  {
    title: 'Ignore Old Information Online',
    description:
      'Many websites and even old news articles state that Russia is on permanent DST (UTC+4). This is outdated. Russia has been on permanent standard time (UTC+3 for Moscow) since October 2014.',
  },
  {
    title: 'Confirm Times for Internal Russian Travel',
    description:
      'While Moscow time is stable, always double-check the local time zone of your destination within Russia, as the number of zones and their UTC offsets have been subject to change.',
  },
  {
    title: 'Use for Diplomatic and Energy Scheduling',
    description:
      'For engagements with entities in Moscow, you can rely on MSK (UTC+3) as a constant, which simplifies scheduling for critical communications.',
  },
  {
    title: 'Verify with Live Sources',
    description:
      'For the utmost accuracy, use a live tool like this one right before a critical meeting, as it pulls from the most current time zone database.',
  },
];

const faqs = [
  {
    question: 'Does Moscow observe Daylight Saving Time in 2024?',
    answer:
      'No. Russia does not observe Daylight Saving Time. It abolished seasonal clock changes in 2014 and now uses Moscow Standard Time (MSK, UTC+3) year-round.',
  },
  {
    question: 'What is the correct time zone for Moscow?',
    answer:
      'Moscow is consistently on Moscow Standard Time (MSK), which is UTC+3. This has been the case since October 26, 2014.',
  },
  {
    question: 'Why is there so much confusion about time in Russia?',
    answer:
      'Because Russias time policy changed dramatically twice in recent history. From 2011 to 2014, it was on permanent Daylight Saving Time (UTC+4). This was reversed in 2014 to permanent standard time (UTC+3), which is the current system.',
  },
  {
    question: 'Do other parts of Russia use the same time?',
    answer:
      'No, Russia spans 11 time zones. Moscow time (MSK, UTC+3) is just one of them. However, it is the time used for official government business, rail, and air transport schedules across the country.',
  },
];

const links = [
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Tokyo', path: `/${PATHS.dstInTokyo}` },
];

const howItWorks = [
  'Pulls the current, precise time for the IANA time zone `Europe/Moscow`.',
  'References the definitive time zone database rules, which confirm no DST changes are scheduled for Russia.',
  'Displays the permanent UTC+3 offset and current local time for Moscow.',
  'Provides crucial context to correct common misconceptions about Russias current time policy.',
];

const ssData = {
  text: 'Moscow is on MSK (UTC+3) year-round with no DST. Get clarity on Russia’s stable but often confused time zone policy.',
  hashtags: 'MoscowTime, Russia, TimeZone, NoDST',
  title: 'DST in Moscow - Russia Time Zone Checker',
};

const title = 'DST in Moscow - Russia Time Zone Checker';
const description =
  'Moscow is on Moscow Standard Time (MSK) year-round (UTC+3) and does not observe DST. Get the current time and clarity on Russia’s stable but complex time zone history.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Moscow clock (MSK, UTC+3)',
      'Definitive “No DST” status for Russia',
      'Precise IANA time zone data (Europe/Moscow)',
      'Context on Russia’s time zone reforms',
    ],
    steps: [
      {
        name: 'Step 1: Search “Moscow”',
        description:
          'Instantly load the current local time in Moscow, showing Moscow Standard Time (MSK, UTC+3).',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'The page provides a definitive answer: Russia abolished Daylight Saving Time in 2014 and now uses permanent standard time.',
      },
      {
        name: 'Step 3: Review the Stable UTC+3 Offset',
        description:
          'See the consistent UTC+3 offset, crucial for accurate scheduling with a major geopolitical and economic capital.',
      },
      {
        name: 'Step 4: Understand Regional Complexity',
        description:
          'Gain insight into how time works across Russias 11 time zones, with Moscow time (MSK) serving as a key reference point.',
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
  head: 'Moscow — Clarity on Russia’s Time Zone',
  subHead:
    'Moscow Standard Time (MSK) is UTC+3 year-round, with no Daylight Saving Time. Russia abolished DST in 2014, providing a stable but often misunderstood time reference for this global capital.',
  featuresHead: 'Cutting Through the Confusion',
  tipsHead: 'Using Moscow Time Accurately',
  faqsHead: 'Moscow Time & DST FAQs',
  linksHead: 'Eurasian Capitals',
  howItWorksHead: 'How We Provide Definitive Moscow Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Moscow@@Europe/Moscow',
  },
});
