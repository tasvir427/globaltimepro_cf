import { FaCheckCircle, FaClock, FaGlobe, FaLandmark } from 'react-icons/fa';
import { GiSydneyOperaHouse } from 'react-icons/gi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaLandmark className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with London',
    description:
      'Select London as your origin. It uses Greenwich Mean Time (GMT, UTC+0) or British Summer Time (BST, UTC+1) during Daylight Saving.',
  },
  {
    icon: (
      <GiSydneyOperaHouse
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Target Sydney',
    description:
      'Add Sydney as your destination. It uses Australian Eastern Standard Time (AEST, UTC+10) or Daylight Time (AEDT, UTC+11) during DST.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Live or Custom Time',
    description:
      'Toggle Live mode to see the current time difference, or enter a custom time in London to find the corresponding time in Sydney.',
  },
  {
    icon: <FaGlobe className={styles.stepIcon} aria-label="Use Actions" />,
    title: 'Apply and Explore',
    description:
      'Use the Copy button for invites. Discover how opposite hemisphere DST affects the time difference in our tips below.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="DST Auto" />
    ),
    title: 'Automatic DST Adjustment for Both Hemispheres',
    description:
      'London and Sydney have opposite DST schedules. Our tool automatically syncs these changes, ensuring accuracy even during transition periods.',
  },
  {
    icon: (
      <FaCheckCircle className={styles.featureIcon} aria-label="Large Offset" />
    ),
    title: 'Handles Large Time Difference with Date Changes',
    description:
      'The 9-11 hour difference often means date changes. Our tool clearly indicates the date in both locations to avoid scheduling errors.',
  },
];

const tips = [
  {
    title: 'Best Time for Business Calls',
    description:
      'The ideal overlap is London morning (8-9 AM GMT) which is Sydney evening (6-7 PM AEST) in winter. During DST overlaps, it shifts to London 8-9 AM BST and Sydney 5-6 PM AEDT.',
  },
  {
    title: 'Historical Time Alignment',
    description:
      'Before the 19th century, local time was based on solar time. Sydney used local mean time until 1895 when it adopted standard time zones. London’s GMT became the world time standard in 1884.',
  },
  {
    title: 'Opposite Hemisphere DST Effect',
    description:
      'When London is on BST (summer), Sydney is on AEST (winter), resulting in a 9-hour difference. When London is on GMT (winter), Sydney is on AEDT (summer), resulting in an 11-hour difference.',
  },
  {
    title: 'Travel Planning',
    description:
      'Flying from London to Sydney? You’ll lose most of a day. Use the Jet Lag Planner via the button to prepare for the long flight and time change.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between London and Sydney?',
    answer:
      'The time difference varies from 9 to 11 hours. When London is on GMT and Sydney on AEDT, Sydney is 11 hours ahead. When London is on BST and Sydney on AEST, Sydney is 9 hours ahead. Our converter always shows the current offset.',
  },
  {
    question: 'Do both cities observe Daylight Saving Time?',
    answer:
      'Yes, both observe DST but on opposite schedules. London switches from GMT to BST from late March to late October. Sydney switches from AEST to AEDT from early October to early April.',
  },
  {
    question: 'Why do London and Sydney have opposite DST periods?',
    answer:
      "Because they are in opposite hemispheres. When it's summer in London (Northern Hemisphere), it's winter in Sydney (Southern Hemisphere), and vice versa. DST is applied during the warmer months for each.",
  },
  {
    question: 'How did time zones develop in Australia?',
    answer:
      'Australia adopted standard time zones in 1895, with Sydney on Eastern Standard Time. DST was first introduced during WWI in 1917. The current DST schedule has evolved over time, with variations between states.',
  },
];

const links = [
  { name: 'London → Tokyo', path: `/${PATHS.timezoneFromLondonToTokyo}` },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.timezoneFromLosAngelesToSydney}`,
  },
  { name: 'Sydney → London', path: `/${PATHS.timezoneFromSydneyToLondon}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.timezoneFromDubaiToSydney}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  {
    name: 'Singapore → London',
    path: `/${PATHS.timezoneFromSingaporeToLondon}`,
  },
];

const howItWorks = [
  'Uses IANA time zones (Europe/London for London, Australia/Sydney for Sydney) for precise conversions.',
  'Automatically adjusts for DST changes in both cities, handling the opposite hemisphere schedules.',
  'Calculates the large time difference accurately, including date changes, and displays them clearly.',
  'Formats the output according to your preference for easy sharing across time zones.',
];

const ssData = {
  text: 'Convert London time to Sydney time instantly! Handles the 9-11 hour difference and opposite DST automatically. Essential for UK-Australia planning. 🇬🇧🇦🇺',
  hashtags: 'London,Sydney,TimeZone,Travel',
  title: 'London to Sydney Time Converter — GMT/BST to AEST/AEDT',
};

const title = 'London to Sydney Time Converter — GMT/BST to AEST/AEDT';
const description =
  'Convert London time (GMT/BST) to Sydney time (AEST/AEDT). Live clocks, automatic DST adjustment for both hemispheres. Explore the 9–11 hour difference.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate GMT/BST to AEST/AEDT conversion',
      'Real-time and custom time modes',
      'Automatic DST handling for both cities',
      'Multi-destination support',
      'Shareable results and copy functionality',
      'Integration with DST Checker and Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Set London as Origin',
        description:
          'Select London using city, IANA (Europe/London), or abbreviation (GMT/BST). It observes Daylight Saving Time.',
      },
      {
        name: 'Add Sydney as Destination',
        description:
          'Sydney uses Australian Eastern Time (AEST/AEDT), switching between UTC+10 and UTC+11 for DST. Add it as your target.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Use Live mode for real-time comparison or Custom mode to convert a specific time from London to Sydney.',
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
  head: 'London to Sydney Time Converter',
  subHead:
    'Bridge the UK and Australia with precise time conversions. Convert London time (GMT/BST) to Sydney time (AEST/AEDT) with live clocks, automatic DST adjustment, and historical insights.',
  featuresHead: 'Key Features for London-Sydney Conversions',
  tipsHead: 'Scheduling and Historical Context',
  faqsHead: 'Frequently Asked Questions & Time History',
  linksHead: 'Other London and Sydney Timezone Conversions',
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
    originTimeZone: 'London@@Europe/London',
    destinationTimeZone: 'Sydney@@Australia/Sydney',
  },
});
