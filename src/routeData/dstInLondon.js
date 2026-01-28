import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMousePointer,
  FaShareSquare,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer
        className={styles.stepIcon}
        aria-label="Select Location"
      />
    ),
    title: 'Select London as Your Location',
    description:
      'Use our smart search to pinpoint “London” and load its DST data (GMT/BST).',
  },
  {
    icon: (
      <FaCalendarAlt className={styles.stepIcon} aria-label="View DST Status" />
    ),
    title: 'View Current DST Status',
    description:
      'Instantly see if British Summer Time is active and what the local time is right now.',
  },
  {
    icon: (
      <FaClock className={styles.stepIcon} aria-label="Check Start & End" />
    ),
    title: 'Check Exact Start & End',
    description:
      'Review the precise “clocks forward” and “clocks back” dates and times in London.',
  },
  {
    icon: (
      <FaShareSquare className={styles.stepIcon} aria-label="Plan & Share" />
    ),
    title: 'Countdown to Next Change & Tips',
    description:
      'Track the time until the next transition and follow our London-tuned adjustment advice.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Accurate Data"
      />
    ),
    title: 'Minute-Precise Start/End',
    description:
      'Get local-time stamps down to the minute for both spring and autumn transitions.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="UK-Tuned Tips"
      />
    ),
    title: 'UK-Tuned Adjustment Tips',
    description:
      'From pub-garden walks to tea-time delays, our guidance fits London’s daily rhythms.',
  },
];

const tips = [
  {
    title: 'Delay Your Morning Tea',
    description:
      'Hold off your first cup until 9 AM BST to help shift your internal clock forward.',
  },
  {
    title: 'Take a Pub-Garden Stroll',
    description:
      'Enjoy a morning walk in a garden pub at 8 AM BST to anchor your wake-time to the sun.',
  },
  {
    title: 'Adjust Evening Routines',
    description:
      'Push back dinner and winding-down activities by 15 minutes on the week before change.',
  },
  {
    title: 'Sync Watches Manually',
    description:
      'At 2 AM on change day, manually move your clocks forward/back to avoid glitches.',
  },
];

const faqs = [
  {
    question: 'Why does BST start on a Sunday?',
    answer:
      'UK DST always begins on the last Sunday in March for consistency—Sunday mornings minimize business disruption.',
  },
  {
    question: 'Can I automate my home clocks?',
    answer:
      'Most smart devices update automatically; analog clocks and watches must be adjusted manually at 1 AM GMT.',
  },
  {
    question: 'What if I’m traveling overnight?',
    answer:
      'If you cross the 2 AM shift point in flight, reset to local London time on arrival and follow our tips.',
  },
];

const links = [
  { name: 'Paris', path: `/${PATHS.dstInParis}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'Madrid', path: `/${PATHS.dstInMadrid}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
];

const howItWorks = [
  'Detects London’s current time and whether BST is active.',
  'Retrieves minute-precise DST start/end timestamps from tzdb.',
  'Calculates time until next transition and displays a live countdown.',
  'Offers London-specific tips to adjust routines around pub and tea culture.',
];

const ssData = {
  text: 'Is DST active in London? Check GMT vs BST, change dates, countdown, and get London-tuned adjustment tips! 🇬🇧⏰',
  hashtags: 'DST,LondonTime',
  title: 'Daylight Saving in London',
};

const title = 'Daylight Saving in London – Status & Dates';
const description =
  'Is DST active in London? View current GMT/BST offset, find exact start & end dates, countdown to next change, and expert adjustment tips specific to the UK capital.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live London time & DST on/off status',
      'GMT vs BST offset breakdown',
      'Exact DST start & end dates (local times)',
      'Countdown timer to next change',
      'London-specific clock adjustment tips',
    ],
    steps: [
      {
        name: 'Step 1: Select London as Your Location',
        description:
          'Begin by choosing “London” to anchor all DST data to UK time, including GMT and BST offsets.',
      },
      {
        name: 'Step 2: View Current DST Status',
        description:
          'Instantly see whether British Summer Time is active, and what local time it corresponds to right now.',
      },
      {
        name: 'Step 3: Check Exact Start & End',
        description:
          'Review the precise dates and times when clocks forward in spring and back in autumn, with local-time stamps.',
      },
      {
        name: 'Step 4: Countdown to Next Change',
        description:
          'Get a live timer showing days, hours, and minutes until the upcoming DST transition.',
      },
      {
        name: 'Step 5: Follow Adjustment Tips',
        description:
          'Read location-tuned advice—like adjusting your pub-garden strolls or tea times—to reset your routine smoothly.',
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
  head: 'Daylight Saving in London',
  subHead:
    'Is BST active? See GMT vs BST offsets, exact change dates, a live countdown, and London-tuned tips.',
  featuresHead: 'Advanced Features',
  tipsHead: 'Adjustment Tips',
  faqsHead: 'FAQs',
  linksHead: 'Other Major European Cities',
  howItWorksHead: 'How It Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'London@@Europe/London',
  },
});
