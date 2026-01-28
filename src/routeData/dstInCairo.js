import { FaBell, FaHistory, FaSyncAlt } from 'react-icons/fa';
import {
  GiCalendarHalfYear,
  GiEgyptianBird,
  GiEgyptianSphinx,
  GiSundial,
} from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <GiEgyptianSphinx className={styles.stepIcon} aria-label="Search City" />
    ),
    title: 'Enter “Cairo”',
    description:
      'Type the name of Egypt’s capital to get the precise live time, which changes between EET (UTC+2) and EEST (UTC+3).',
  },
  {
    icon: <GiSundial className={styles.stepIcon} aria-label="Check DST" />,
    title: 'Check Live DST Status',
    description:
      'Get an immediate, clear readout of whether Egypt is currently observing Daylight Saving Time—essential due to frequent rule changes.',
  },
  {
    icon: (
      <GiEgyptianBird className={styles.stepIcon} aria-label="See Offset" />
    ),
    title: 'See the Correct UTC Offset',
    description:
      'View the accurate offset (UTC+2 or +3) based on the live DST status, which is vital for connecting with this historical hub.',
  },
  {
    icon: (
      <GiCalendarHalfYear className={styles.stepIcon} aria-label="Plan Ahead" />
    ),
    title: 'Review Upcoming Change Dates',
    description:
      'If DST is observed, see the exact date and time of the next clock change to avoid surprises with flight or meeting times.',
  },
];

const features = [
  {
    icon: (
      <FaSyncAlt className={styles.featureIcon} aria-label="Dynamic Status" />
    ),
    title: 'Dynamic DST Status Check',
    description:
      'Our tool actively checks the current year’s rules for Egypt, which have changed multiple times in the last decade, providing absolute accuracy.',
  },
  {
    icon: <FaBell className={styles.featureIcon} aria-label="Change Alerts" />,
    title: 'Upcoming Change Alerts',
    description:
      'Get clear visibility on the next start or end date for DST in Egypt, so you can adjust international plans accordingly.',
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Context"
      />
    ),
    title: 'Historical Rule Context',
    description:
      'Understand the context of Egypt’s fluctuating DST policy, which has been adopted, suspended, and reinstated multiple times since 2010.',
  },
];

const tips = [
  {
    title: 'Always Verify DST Status Before Travel',
    description:
      'Do not assume Egypt’s DST status year-to-year. Always check a reliable source like this tool before booking flights and tours to avoid being an hour early or late.',
  },
  {
    title: 'Confirm Tour and Flight Times Locally',
    description:
      'When DST begins or ends, some local operators may be slow to update schedules. Double-check your pickup times with your hotel or guide upon arrival.',
  },
  {
    title: 'Use Our Tool for Critical Business Meetings',
    description:
      'For video conferences with Cairo, use this live checker immediately before the meeting to confirm the current time difference, especially during the spring and fall.',
  },
  {
    title: 'Set Devices to Automatic Time Zone',
    description:
      'Ensure your phone and computer are set to update time zones automatically. They will typically reflect the correct local time in Cairo upon arrival.',
  },
];

const faqs = [
  {
    question: 'Does Cairo currently observe Daylight Saving Time?',
    answer:
      'Our live checker at the top of the page provides the definitive answer. Egypt has a history of changing its DST policy. It was reinstated in 2023 after a previous suspension, but its future observance is not always guaranteed.',
  },
  {
    question: 'What is the history of DST in Egypt?',
    answer:
      'Egypt’s use of DST has been inconsistent. It was used for many years, then suspended from 2011 to 2014, reintroduced, and then suspended again from 2016 until its reinstatement in 2023. This checker provides the current status.',
  },
  {
    question: 'What are the time zones in Egypt?',
    answer:
      'Egypt uses Eastern European Time (EET) which is UTC+2 as its standard time. When Daylight Saving is observed, it switches to Eastern European Summer Time (EEST), which is UTC+3.',
  },
  {
    question: 'How does this affect visiting the pyramids?',
    answer:
      'The opening hours for historical sites like the Giza Pyramids are based on local time. If DST is active, the sun will set an hour "later" by the clock, which can affect the ideal time for visits and photography.',
  },
];

const links = [
  { name: 'Dubai', path: `/${PATHS.dstInDubai}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Johannesburg', path: `/${PATHS.dstInJohannesburg}` },
  { name: 'Lagos', path: `/${PATHS.dstInLagos}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
];

const howItWorks = [
  'Pulls the current, precise time for the IANA time zone `Africa/Cairo`.',
  'Continuously updates based on the official, latest DST rules published for Egypt in the IANA Time Zone Database.',
  'Dynamically displays whether DST is currently active (EEST, UTC+3) or not (EET, UTC+2).',
  'Calculates and displays the exact dates of the next upcoming DST transition, if applicable.',
];

const ssData = {
  text: 'Does Egypt use DST? Check the current status for Cairo (EET or EEST). Essential for travel to the pyramids and business in this historical capital.',
  hashtags: 'CairoTime, Egypt, DaylightSaving, TravelTips',
  title: 'DST in Cairo - Egypt Time Zone Checker',
};

const title = 'DST in Cairo - Egypt Time Zone Checker';
const description =
  'Is Cairo on Daylight Saving Time? Check the current DST status & local time (EET or EEST). Egypt frequently changes its DST rules—stay updated for travel and business.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Cairo clock (EET/EEST)',
      'Dynamic DST status for Egypt',
      'Precise IANA time zone data (Africa/Cairo)',
      'Updates on recent DST rule changes',
    ],
    steps: [
      {
        name: 'Step 1: Search “Cairo”',
        description:
          'Load the live local clock for Cairo, showing either Eastern European Time (EET) or Eastern European Summer Time (EEST).',
      },
      {
        name: 'Step 2: Check Current DST Status',
        description:
          'The page displays a clear “Active” or “Inactive” status for Daylight Saving Time, a critical feature for Egypt.',
      },
      {
        name: 'Step 3: Review the Accurate UTC Offset',
        description:
          'See the precise UTC offset (UTC+2 or UTC+3) based on the current DST status, ensuring correct time calculations.',
      },
      {
        name: 'Step 4: Plan with Confidence',
        description:
          'Use the provided information and tips to schedule flights, meetings, and tours without confusion from changing time rules.',
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
  head: 'Cairo — Check Egypt’s Dynamic Daylight Saving Time',
  subHead:
    'Egypt frequently changes its Daylight Saving Time policy. Our live checker confirms if Cairo is currently on EET (UTC+2) or EEST (UTC+3), providing essential clarity for travel and business in this historical capital.',
  featuresHead: 'Navigating Egypt’s Changing Time Rules',
  tipsHead: 'Essential Tips for Cairo Time',
  faqsHead: 'Cairo DST FAQs',
  linksHead: 'Major African & Middle Eastern Cities',
  howItWorksHead: 'How Our Cairo Time Checker Stays Accurate',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Cairo@@Africa/Cairo',
  },
});
