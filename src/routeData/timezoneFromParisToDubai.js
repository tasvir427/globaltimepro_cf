import { FaCheckCircle, FaClock, FaHistory, FaMonument } from 'react-icons/fa';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaMonument className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Paris',
    description:
      'Select Paris as your origin. It uses Central European Time (CET/CEST) which switches between UTC+1 (winter) and UTC+2 (summer) for Daylight Saving.',
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Target Dubai',
    description:
      'Add Dubai as your destination. It uses Gulf Standard Time (GST, UTC+4) consistently throughout the year, with no DST observance.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in Paris to find the corresponding time in Dubai.',
  },
  {
    icon: <FaHistory className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Learn',
    description:
      'Use the Copy button for invites. Explore the interesting historical time relationship between these two cities in our tips section below.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for Paris',
    description:
      "Paris observes DST while Dubai does not. Our tool automatically tracks Paris's seasonal time changes, ensuring accurate conversions year-round.",
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Consistent Offset"
      />
    ),
    title: 'Consistent Dubai Time',
    description:
      "Dubai's steadfast use of GST (UTC+4) without DST provides a stable reference point for scheduling, making conversions more predictable for half the year.",
  },
];

const tips = [
  {
    title: 'Business Hours Alignment',
    description:
      'The optimal meeting window is Paris morning (9-11 AM CET) which is Dubai afternoon (12-2 PM GST). During DST, this becomes Paris 9-11 AM CEST to Dubai 11 AM-1 PM GST.',
  },
  {
    title: 'Historical Time Oddity',
    description:
      "Before 1911, Paris used Paris Mean Time (UTC+0:09:21). If this were still in use, the conversion to Dubai would be even more complex! France didn't adopt GMT+1 until 1978.",
  },
  {
    title: 'Modern Time Unity',
    description:
      'While France has 12 time zones due to its territories, metropolitan Paris uses a single time zone. The UAE, unlike its size, also uses a single time zone (GST) nationwide.',
  },
  {
    title: 'Weekend Awareness',
    description:
      'Remember that the UAE weekend is Friday-Saturday, while France is Saturday-Sunday. Schedule meetings accordingly for best attendance.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Paris and Dubai?',
    answer:
      'Dubai is 3 hours ahead of Paris when Paris is on Central European Time (CET, UTC+1). During Central European Summer Time (CEST, UTC+2), Dubai is 2 hours ahead of Paris.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'No. Paris observes DST, switching between CET and CEST. Dubai does not observe DST and remains on Gulf Standard Time (GST, UTC+4) throughout the year.',
  },
  {
    question: "Why doesn't Dubai observe Daylight Saving Time?",
    answer:
      "Dubai's consistent daylight hours throughout the year and extreme summer heat make DST unnecessary. The UAE abolished DST in 2018 to maintain consistency with neighboring countries and simplify business scheduling.",
  },
  {
    question: 'What was the historical time system in France?',
    answer:
      'Interestingly, France used to have multiple time zones within the country until 1891. Paris specifically used Paris Mean Time (UTC+0:09:21) until 1911 when France adopted GMT+0, later switching to GMT+1 in 1978.',
  },
];

const links = [
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  {
    name: 'Johannesburg → Dubai',
    path: `/${PATHS.timezoneFromJohannesburgToDubai}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'Dubai → London', path: `/${PATHS.timezoneFromDubaiToLondon}` },
];

const howItWorks = [
  'Uses IANA time zones (Europe/Paris for Paris, Asia/Dubai for Dubai) for precise conversions.',
  "Automatically adjusts for Paris's DST changes while maintaining Dubai's consistent UTC+4 offset.",
  'Calculates the 2-3 hour time difference accurately based on the date and DST status.',
  'Formats the output according to your preference for easy sharing across cultures.',
];

const ssData = {
  text: 'Convert Paris time to Dubai time instantly! Handles the 2-3 hour difference and DST automatically. Discover fascinating time history between these cities. 🗼🌆',
  hashtags: 'Paris,Dubai,TimeZone,History',
  title: 'Paris to Dubai Time Converter — CET/CEST to GST',
};

const title = 'Paris to Dubai Time Converter — CET/CEST to GST';
const description =
  'Convert Paris time (CET/CEST) to Dubai time (GST). Live clocks, automatic DST adjustment. Discover the fascinating 2–3 hour difference and its history.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate CET/CEST to GST conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for Paris',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set Paris as Origin',
        description:
          'Select Paris using city, IANA (Europe/Paris), or abbreviation (CET/CEST). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Dubai as Destination',
        description:
          'Dubai uses Gulf Standard Time (GST, UTC+4) year-round with no DST changes. Add it as your target destination.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from Paris to Dubai.',
      },
      {
        name: 'Copy and Use Results',
        description:
          'Copy the converted time for invites, or use other actions like Swap or Info for more details.',
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
  head: 'Paris to Dubai Time Converter',
  subHead:
    'Bridge Europe and the Middle East with precise time conversions. Convert Paris time (CET/CEST) to Dubai time (GST) with live clocks, automatic DST adjustment, and fascinating historical insights.',
  featuresHead: 'Key Features for Paris-Dubai Conversions',
  tipsHead: 'Scheduling and Historical Insights',
  faqsHead: 'Frequently Asked Questions & Time History',
  linksHead: 'Other Paris and Dubai Timezone Conversions',
  howItWorksHead: 'How We Convert Time Accurately',
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
    originTimeZone: 'Paris@@Europe/Paris',
    destinationTimeZone: 'Dubai@@Asia/Dubai',
  },
});
