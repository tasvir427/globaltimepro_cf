import { FaCity, FaClock, FaPlane, FaRegClock } from 'react-icons/fa';
import { GiCuckooClock, GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Sydney',
    description:
      'Select Sydney as your origin. It uses Australian Eastern Time which switches between AEST (UTC+10) and AEDT (UTC+11) for Daylight Saving.',
  },
  {
    icon: (
      <GiCuckooClock className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Target London',
    description:
      'Add London as your destination. It uses Greenwich Mean Time (GMT, UTC+0) or British Summer Time (BST, UTC+1) with seasonal changes.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Choose Your Time View',
    description:
      'Use Live mode for real-time comparison or enter a specific time to see how business hours align between these global cities.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Apply Your Conversion',
    description:
      'Leverage time segment colors to identify optimal meeting times, copy results for scheduling, or explore additional planning tools.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Opposite seasons"
      />
    ),
    title: 'Handles Opposite Hemisphere Seasons',
    description:
      'Manages the complex time difference that varies due to opposite DST schedules in the Southern and Northern hemispheres.',
  },
  {
    icon: (
      <FaPlane
        className={styles.featureIcon}
        aria-label="Travel optimization"
      />
    ),
    title: 'Optimized for Long-Haul Travel Planning',
    description:
      'Specifically designed for Australia-UK travel, with insights on jet lag management and optimal flight scheduling.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="Time segments" />
    ),
    title: 'Visual Time Segment Indicators',
    description:
      'Color-coded time segments help quickly identify whether converted times fall within work hours, evenings, or overnight periods.',
  },
];

const tips = [
  {
    title: 'Business Hours Overlap',
    description:
      'The small overlap occurs in Sydney late afternoon (4-5 PM AEDT) which is London early morning (5-6 AM GMT). Perfect for brief daily check-ins.',
  },
  {
    title: 'Opposite Season Awareness',
    description:
      "Remember that when it's summer in Sydney, it's winter in London, affecting not just time but also working patterns and holiday schedules.",
  },
  {
    title: 'Historical Time Context',
    description:
      'Sydney adopted standard time in 1895, while London has been the reference for GMT since 1884. This historical significance affects global timekeeping.',
  },
  {
    title: 'Long-Haul Flight Planning',
    description:
      'Flights from Sydney to London take about 22-24 hours. Use our Jet Lag Planner to prepare for this significant journey across time zones.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Sydney and London?',
    answer:
      'The time difference varies from 9 to 11 hours. When both cities are on standard time, Sydney is 10 hours ahead. During DST transitions, it can range from 9 to 11 hours.',
  },
  {
    question: 'How do opposite hemisphere seasons affect the time difference?',
    answer:
      "When it's summer in Sydney (AEDT, UTC+11) and winter in London (GMT, UTC+0), the difference is 11 hours. When it's winter in Sydney (AEST, UTC+10) and summer in London (BST, UTC+1), the difference is 9 hours.",
  },
  {
    question: 'Are there any good overlapping business hours?',
    answer:
      'A small window exists: Sydney late afternoon (4-5 PM) corresponds to London early morning (5-6 AM in winter, 6-7 AM in summer).',
  },
  {
    question: 'How does this affect international collaboration?',
    answer:
      'The time difference requires careful planning, but enables follow-the-sun workflows where work can progress nearly 24 hours between the two locations.',
  },
];

const links = [
  { name: 'London → Sydney', path: `/${PATHS.timezoneFromLondonToSydney}` },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.timezoneFromLosAngelesToSydney}`,
  },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (Australia/Sydney for Sydney, Europe/London for London) with precise DST data',
  'Automatically adjusts for seasonal time changes in both hemispheres, handling the complex 9-11 hour difference',
  'Calculates the time difference accurately, clearly indicating when dates change between locations',
  'Provides visual time segment indicators to quickly assess whether converted times are work-appropriate',
  'Supports multiple output formats and one-click copying for easy scheduling across global teams',
];

const ssData = {
  text: 'Convert Sydney time to London time! Handles 9-11 hour difference and opposite DST automatically. Perfect for Australia-UK planning.',
  hashtags: 'Sydney,London,TimeZone,Travel',
  title: 'Sydney to London Time Converter - AEST/AEDT to GMT/BST',
};

const title = 'Sydney to London Time Converter - AEST/AEDT to GMT/BST';
const description =
  'Convert Sydney time to London time. Handles 9-11 hour difference with automatic DST adjustment. Perfect for business and travel planning.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate AEST/AEDT to GMT/BST conversion',
      'Live and custom time modes',
      'Automatic DST adjustment for both hemispheres',
      'Time segment indicators',
      'Multi-destination support',
      'One-click copy functionality',
      'Shareable results',
    ],
    steps: [
      {
        name: 'Set Sydney as Origin',
        description:
          'Select Sydney as your starting point. It uses Australian Eastern Time (AEST/AEDT) with seasonal DST changes.',
      },
      {
        name: 'Add London as Destination',
        description:
          'Add London as your target. It uses Greenwich Mean Time (GMT) or British Summer Time (BST) with DST changes.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Toggle between Live clocks or enter a custom time to see the conversion instantly.',
      },
      {
        name: 'Utilize Conversion Results',
        description:
          'Copy results for scheduling, check time segments, or use additional tools for comprehensive planning.',
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
  head: 'Sydney to London Time Converter',
  subHead:
    'Connect Australia with the UK with precise time conversions. Essential for business, travel, and collaboration across hemispheres.',
  featuresHead: 'Key Advantages for Cross-Hemisphere Planning',
  tipsHead: 'Strategic Scheduling Insights',
  faqsHead: 'Cross-Hemisphere Questions Answered',
  linksHead: 'Other Sydney and London Timezone Conversions',
  howItWorksHead: 'Precision Time Conversion Technology',
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
    originTimeZone: 'Sydney@@Australia/Sydney',
    destinationTimeZone: 'London@@Europe/London',
  },
});
