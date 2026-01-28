import { FaGlobeAmericas, FaSyncAlt, FaShareAlt } from 'react-icons/fa';
import { TbClock, TbCalendarTime, TbPlaneTilt } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Select origin" />
    ),
    title: 'Set Your Zurich Starting Point',
    description:
      'Begin by entering "Zurich" or selecting Europe/Zurich as your origin timezone. The tool auto-fills with Zurich\'s current time.',
  },
  {
    icon: (
      <TbPlaneTilt className={styles.stepIcon} aria-label="Add destinations" />
    ),
    title: 'Add Hong Kong as Destination',
    description:
      'Type "Hong Kong" to see Asia/Hong_Kong appear. Our tool supports converting one Zurich time to multiple Asian business hubs simultaneously.',
  },
  {
    icon: <FaSyncAlt className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Switch Between Live & Custom Modes',
    description:
      'Use Live mode for real-time market hours tracking, or Custom mode to schedule future Zurich-Hong Kong video conferences.',
  },
  {
    icon: <FaShareAlt className={styles.stepIcon} aria-label="Share results" />,
    title: 'Share Your Time Comparison',
    description:
      'Generate a permanent link to share banking hour overlaps or meeting proposals with colleagues in both financial centers.',
  },
];

const features = [
  {
    icon: (
      <TbClock className={styles.featureIcon} aria-label="Multiple formats" />
    ),
    title: '13+ Financial-Grade Formats',
    description:
      'Display times in 24-hour format (15:30) for professional settings, or 12-hour with AM/PM. Export as ISO 8601 for compliance documentation.',
  },
  {
    icon: (
      <FaSyncAlt
        className={styles.featureIcon}
        aria-label="Real-time conversion"
      />
    ),
    title: 'Live Banking Hours Overlap',
    description:
      "Instantly see when Zurich's financial district (09:00-17:00) overlaps with Hong Kong's trading day (09:00-17:00 HKT) across the 6-7 hour gap.",
  },
  {
    icon: (
      <TbCalendarTime
        className={styles.featureIcon}
        aria-label="Time segments"
      />
    ),
    title: 'Intelligent Time Segment Labels',
    description:
      'Quickly identify "Work AM", "Lunch", and "Work PM" segments in both cities to find optimal meeting windows across continents.',
  },
  {
    icon: (
      <FaShareAlt className={styles.featureIcon} aria-label="Action buttons" />
    ),
    title: 'Smart Action Buttons',
    description:
      'Use Jet Lag Planner for travel between Switzerland and Asia, or DST Checker to track European summer time changes affecting your schedule.',
  },
];

const tips = [
  {
    title: 'Banking Hours Sweet Spot',
    description:
      'Zurich morning (08:00-11:00 CET) overlaps with Hong Kong afternoon (14:00-17:00 HKT), creating a 3-hour window for urgent financial transactions between the two hubs.',
  },
  {
    title: 'Historical Time Alignment',
    description:
      "Both cities have maintained precise timekeeping traditions - from Zurich's medieval water clocks to Hong Kong's introduction of standard time in 1904, bridging European and Asian commerce.",
  },
  {
    title: 'Daylight Saving Transition',
    description:
      'When Zurich switches to CEST (UTC+2) in March, the time difference shrinks to 6 hours until October, creating shifting overlap patterns throughout the year.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Zurich and Hong Kong?',
    answer:
      "Zurich is typically 7 hours behind Hong Kong (6 hours during Central European Summer Time). When it's 09:00 in Zurich, it's 16:00 or 17:00 in Hong Kong depending on the season.",
  },
  {
    question: 'How do I schedule meetings between Zurich and Hong Kong?',
    answer:
      'Aim for Zurich late morning (10:00-11:00) which corresponds to Hong Kong late afternoon (17:00-18:00), or Zurich early afternoon (13:00-14:00) for Hong Kong evening (20:00-21:00) if both parties are flexible.',
  },
  {
    question: 'Do both Zurich and Hong Kong observe daylight saving time?',
    answer:
      'Zurich observes DST (CET to CEST), while Hong Kong does not change clocks. This creates a 6-hour difference from late March to late October, and 7 hours for the rest of the year.',
  },
];

const links = [
  {
    name: 'Berlin → São Paulo',
    path: `/${PATHS.timezoneFromBerlinToSaoPaulo}`,
  },
  { name: 'London → Delhi', path: `/${PATHS.timezoneFromLondonToDelhi}` },
  {
    name: 'Frankfurt → Singapore',
    path: `/${PATHS.timezoneFromFrankfurtToSingapore}`,
  },
  {
    name: 'Stockholm → Bengaluru',
    path: `/${PATHS.timezoneFromStockholmToBengaluru}`,
  },
  {
    name: 'Istanbul → Bangkok',
    path: `/${PATHS.timezoneFromIstanbulToBangkok}`,
  },
];

const howItWorks = [
  'Converts time between Europe/Zurich (CET/CEST) and Asia/Hong_Kong (HKT) IANA timezones',
  "Automatically adjusts for Zurich's daylight saving transitions between UTC+1 and UTC+2",
  "Maintains Hong Kong's consistent UTC+8 offset throughout the year",
  'Calculates precise time differences accounting for historical timezone data',
  'Updates in real-time using browser geolocation or manual timezone selection',
];

const ssData = {
  text: 'Easily convert time between Zurich and Hong Kong - perfect for finance professionals coordinating across European and Asian markets.',
  hashtags: 'Zurich,HongKong,TimeZone,Finance,Business',
  title: 'Zurich to Hong Kong Time Converter',
};

const title = 'Zurich to Hong Kong Time (CET to HKT)';
const description =
  'Convert Zurich time to Hong Kong time with 6-7 hour difference. Perfect for banking hours and business scheduling between financial hubs.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live time conversion between Zurich and Hong Kong',
      'Daylight saving time adjustments for CET/CEST',
      'Multiple time format outputs including financial standards',
      'Time segment labels for business hour identification',
    ],
    steps: [
      {
        name: 'Set Zurich as origin timezone',
        description:
          'Input Zurich location or select Europe/Zurich IANA timezone',
      },
      {
        name: 'Add Hong Kong as destination',
        description: 'Select Asia/Hong_Kong for precise time conversion',
      },
      {
        name: 'Choose conversion mode',
        description:
          'Switch between real-time clocks or custom time scheduling',
      },
      {
        name: 'Analyze results and share',
        description: 'View time differences and generate shareable links',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.tz.json',
  });
};

export const getData = (page) => ({
  head: 'Zurich to Hong Kong Time Converter',
  subHead:
    "Bridge European and Asian financial markets with precise time coordination between Switzerland's banking capital and Hong Kong's global trading hub",
  featuresHead: 'Essential Features for Cross-Continental Business',
  tipsHead: 'Smart Scheduling Between Financial Centers',
  faqsHead: 'Zurich-Hong Kong Time Coordination FAQs',
  linksHead: 'European Cities to Asian Metropolises',
  howItWorksHead: 'Precision Timezone Conversion Technology',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  showLegend: true,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Zürich@@Europe/Zurich',
    destinationTimeZone: 'Hong Kong@@Asia/Hong_Kong',
  },
});
