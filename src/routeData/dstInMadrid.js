import { MdLocationCity, MdOutlineWbSunny, MdPublic } from 'react-icons/md';
import { FaGlobeEurope, FaHistory, FaMapMarkerAlt } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdLocationCity className={styles.stepIcon} aria-label="Search City" />
    ),
    title: 'Enter "Madrid"',
    description:
      "Type Spain's capital to load live local time in Central European Time (CET) or Central European Summer Time (CEST).",
  },
  {
    icon: <MdOutlineWbSunny className={styles.stepIcon} aria-label="DST On" />,
    title: 'Check DST Status',
    description:
      'Instantly see if Madrid is observing Central European Summer Time (UTC+2) or standard CET (UTC+1).',
  },
  {
    icon: (
      <FaClockRotateLeft className={styles.stepIcon} aria-label="Transitions" />
    ),
    title: 'See Upcoming Shifts',
    description:
      'View precise dates and times for the spring forward and fall back transitions, essential for travel and events.',
  },
  {
    icon: (
      <FaMapMarkerAlt className={styles.stepIcon} aria-label="Local Context" />
    ),
    title: 'Understand Regional Impact',
    description:
      "Learn how Spain's DST rules align with EU regulations and affect scheduling across Europe and North Africa.",
  },
];

const features = [
  {
    icon: (
      <FaGlobeEurope className={styles.featureIcon} aria-label="EU Alignment" />
    ),
    title: 'EU-Wide Consistency',
    description:
      'Reflects European Union directives, keeping Madrid in sync with 26 other countries for seamless cross-border coordination.',
  },
  {
    icon: (
      <FaHistory
        className={styles.featureIcon}
        aria-label="Historical Insight"
      />
    ),
    title: 'Historical DST Timeline',
    description:
      "Outlines Spain's past shifts—from wartime double DST to modern EU-standard transitions—providing rich context for enthusiasts.",
  },
  {
    icon: <MdPublic className={styles.featureIcon} aria-label="IANA Data" />,
    title: 'Authoritative Data Source',
    description:
      'Powered by the IANA time zone database (Europe/Madrid), ensuring accurate UTC offsets and transition rules.',
  },
];

const tips = [
  {
    title: 'Plan European Meetings',
    description:
      'Madrid shares time with Berlin and Rome. During summer, it matches Paris and Warsaw—ideal for pan-EU conference calls.',
  },
  {
    title: 'Schedule Southern Europe Travel',
    description:
      'DST in Spain begins later than the UK; plan trips to London or Lisbon accordingly during March transitions.',
  },
  {
    title: 'Navigate Ramadan Timings',
    description:
      "Religious observances in Spain's Muslim communities can shift with DST; verify local sunset times around Ramadan.",
  },
  {
    title: 'Capsule Events and Sports',
    description:
      'Major sporting events, like La Liga matches or Madrid marathons, adhere strictly to local DST—double-check kickoff times.',
  },
];

const faqs = [
  {
    question: 'When does Spain start and end DST?',
    answer:
      'Spain follows EU rules: clocks move forward one hour on the last Sunday in March and back on the last Sunday in October.',
  },
  {
    question: 'Is Madrid always one hour ahead of London?',
    answer:
      'Madrid is one hour ahead of London during standard time and two hours ahead when the UK is on BST and Spain on CEST.',
  },
  {
    question: 'Why does Spain use CET rather than GMT?',
    answer:
      'Spain adopted CET in 1940 for political alignment. Despite geographic preference for GMT, CET/CEST remains for EU conformity.',
  },
  {
    question: 'Does all of Spain observe the same DST rules?',
    answer:
      'Yes, mainland Spain and Balearic Islands follow CET/CEST. The Canary Islands use Western European Time (UTC±0/UTC+1).',
  },
];

const links = [
  { name: 'Paris', path: `/${PATHS.dstInParis}` },
  { name: 'London', path: `/${PATHS.dstInLondon}` },
  { name: 'Berlin', path: `/${PATHS.dstInBerlin}` },
  { name: 'Istanbul', path: `/${PATHS.dstInIstanbul}` },
  { name: 'Moscow', path: `/${PATHS.dstInMoscow}` },
];

const howItWorks = [
  'Fetches current time for Europe/Madrid from IANA database.',
  'Determines UTC offset: +1 hour for CET, +2 hours for CEST.',
  'Identifies DST transition rules based on EU legislation.',
  'Calculates exact spring forward and fall back timestamps.',
  'Synchronizes clock display with authoritative global time servers.',
];

const ssData = {
  text: 'Madrid observes CEST (UTC+2) in summer and CET (UTC+1) in winter. Get precise DST transition dates and local time instantly.',
  hashtags: 'MadridTime, CEST, CET, DST',
  title: 'DST in Madrid - Spain Time Zone Checker',
};

const title = 'DST in Madrid - Spain Time Zone Checker';
const description =
  "Check Madrid's current DST status. Spain observes CET/CEST with EU-standard transitions. Perfect for travel, events, and international coordination.";

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Madrid clock (CET/CEST)',
      'EU-standard DST transitions',
      'Official Europe/Madrid IANA data',
      'Historical DST context for Spain',
    ],
    steps: [
      {
        name: 'Step 1: Search "Madrid"',
        description:
          'Instantly view local Madrid time in CET or CEST with live UTC offset.',
      },
      {
        name: 'Step 2: Confirm DST Status',
        description:
          'See definitive DST status, indicating whether clocks are on UTC+2 or UTC+1.',
      },
      {
        name: 'Step 3: Review Transition Dates',
        description:
          'Access upcoming "spring forward" and "fall back" dates for accurate planning.',
      },
      {
        name: 'Step 4: Coordinate Across Europe',
        description:
          'Use synchronized times to streamline meetings, travel, and events across EU countries.',
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
  head: 'Madrid — EU Time Harmonized',
  subHead:
    "Central European Time with EU-mandated DST transitions. From business meetings to sporting events, get Madrid's precise local time and daylight saving details.",
  featuresHead: "Why Madrid's Time Matters",
  tipsHead: 'Master Madrid Timing',
  faqsHead: 'Madrid DST & Time Zone FAQs',
  linksHead: 'European Cultural Capitals',
  howItWorksHead: 'How We Source Madrid Time',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Madrid@@Europe/Madrid',
  },
});
