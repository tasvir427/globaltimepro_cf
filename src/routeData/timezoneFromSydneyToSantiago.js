import { FaGlobeAmericas, FaExchangeAlt, FaHistory } from 'react-icons/fa';
import { TbClock, TbWorld, TbCalendarTime } from 'react-icons/tb';
import { WiTime3 } from 'react-icons/wi';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaGlobeAmericas className={styles.stepIcon} aria-label="Set origin" />
    ),
    title: 'Set Your Sydney Start Time',
    description:
      'Enter "Sydney" or select Australia/Sydney IANA timezone. The tool auto-detects Australian Eastern Time (AEST/AEDT).',
  },
  {
    icon: <TbWorld className={styles.stepIcon} aria-label="Add destinations" />,
    title: 'Add Santiago and Other Cities',
    description:
      'Type "Santiago" for America/Santiago timezone. Add multiple South American destinations for simultaneous conversion.',
  },
  {
    icon: <TbClock className={styles.stepIcon} aria-label="Choose mode" />,
    title: 'Select Live or Custom Time',
    description:
      'Use Live mode for real-time tracking or Custom mode to plan future events across the 13-15 hour time difference.',
  },
  {
    icon: (
      <FaExchangeAlt
        className={styles.stepIcon}
        aria-label="Convert and analyze"
      />
    ),
    title: 'Convert and Interpret Results',
    description:
      'View Santiago time in 13+ formats. Use time segment labels to identify optimal scheduling windows between these hubs.',
  },
];

const features = [
  {
    icon: (
      <WiTime3 className={styles.featureIcon} aria-label="Time difference" />
    ),
    title: 'Transpacific Time Bridge',
    description:
      'Manage the complex 13-15 hour difference, which fluctuates due to opposite-season Daylight Saving Time transitions.',
  },
  {
    icon: (
      <TbCalendarTime className={styles.featureIcon} aria-label="Scheduling" />
    ),
    title: 'Opposite-Day Scheduling',
    description:
      'Smart labels help you navigate the unique challenge where Sydney morning occurs during the previous afternoon in Santiago.',
  },
  {
    icon: (
      <FaHistory className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'Accurate DST Handling',
    description:
      'Precisely accounts for DST in Australia (Oct-Apr) and Chile (Sep-Apr), which occur in opposite hemispheres but overlapping months.',
  },
  {
    icon: <FaExchangeAlt className={styles.featureIcon} aria-label="Formats" />,
    title: 'Flexible Time Formats',
    description:
      'Output in 13+ formats including 24-hour and 12-hour with AM/PM, suitable for business in both regions.',
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'A very narrow window exists: Sydney 4:00 PM - 5:00 PM (AEDT) aligns with Santiago 1:00 AM - 2:00 AM (CLST) the same night. For longer meetings, consider Sydney late afternoon corresponding to Santiago very early morning.',
  },
  {
    title: 'Understanding "Day Rollover"',
    description:
      'When it is morning in Sydney, it is still the late afternoon/evening of the *previous* day in Santiago. Our tool clearly displays the date change.',
  },
  {
    title: 'Daylight Saving Time Coordination',
    description:
      'The time difference is smallest (13 hours) when both cities are on DST (Oct-Dec). It is largest (15 hours) when Sydney is on DST and Santiago is on standard time (Apr-Sep).',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Sydney and Santiago?',
    answer:
      'Sydney is 13 to 15 hours ahead of Santiago. The exact difference depends on the time of year due to Daylight Saving Time (DST) changes in both countries, which do not perfectly align.',
  },
  {
    question: 'Do the dates change between Sydney and Santiago?',
    answer:
      'Yes, this is a key feature of this route. Sydney is so far ahead that when it is, for example, 10 AM on Tuesday in Sydney, it is 7 PM on *Monday* in Santiago. Our tool automatically handles this date-line crossing.',
  },
  {
    question: 'When is the best time to schedule a call?',
    answer:
      'The most practical window is late afternoon in Sydney (4-5 PM AEDT), which is very early morning in Santiago (1-2 AM CLST). This requires flexibility from the Santiago participant. Asynchronous communication is often most effective.',
  },
  {
    question: 'How do I account for Daylight Saving Time changes?',
    answer:
      'Our tool uses the IANA timezone database (Australia/Sydney, America/Santiago) which automatically includes all historical and future DST rules. The DST Checker info button provides details on upcoming transitions.',
  },
];

const links = [
  {
    name: 'Auckland → Los Angeles',
    path: `/${PATHS.timezoneFromAucklandToLosAngeles}`,
  },
  {
    name: 'Buenos Aires → Madrid',
    path: `/${PATHS.timezoneFromBuenosAiresToMadrid}`,
  },
];

const howItWorks = [
  'Uses IANA Timezone Database identifiers (Australia/Sydney, America/Santiago) for precise historical and future time rule calculation.',
  'Converts time by calculating the offset from UTC for each location, accounting for their specific Daylight Saving Time rules.',
  'Handles the international date line implication, correctly displaying the day and date for both locations.',
  'Time segment labels (Work, Sleep, etc.) are applied based on typical activity patterns in each city.',
];

const ssData = {
  text: 'Master the 13-15 hour time difference between Sydney and Santiago! Perfect for Oceania-South America business and planning.',
  hashtags: 'TimeZone,Sydney,Santiago,Australia,Chile,Productivity',
  title: 'Sydney to Santiago Time Converter',
};

const title = 'Sydney to Santiago Time | AEST to CLT Converter';
const description =
  'Convert Sydney to Santiago time across a 13-15 hour difference. Live clocks, date-change handling, and smart scheduling for Australia-Chile coordination.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Real-time Sydney to Santiago conversion',
      '13-15 hour time difference management',
      'International date line handling',
      'Opposite-hemisphere DST tracking',
    ],
    steps: [
      {
        name: 'Set Sydney origin timezone',
        description:
          'Enter Sydney time using city name or Australia/Sydney IANA code',
      },
      {
        name: 'Add Santiago destination',
        description:
          'Select Santiago with automatic America/Santiago timezone detection',
      },
      {
        name: 'Choose live or custom mode',
        description:
          'Select between real-time tracking or future time planning',
      },
      {
        name: 'Analyze scheduling options',
        description:
          'View converted time with date awareness and scheduling labels',
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
  head: 'Sydney to Santiago Time Conversion',
  subHead:
    'Navigate the 13-15 hour gap and international date line between the South Pacific and South America with precision scheduling tools.',
  featuresHead: 'Features for Australia-Chile Coordination',
  tipsHead: 'Scheduling Across the Date Line',
  faqsHead: 'Sydney and Santiago Time Conversion FAQs',
  linksHead: 'Pacific & South America Links',
  howItWorksHead: 'Precision Time Conversion',
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
    destinationTimeZone: 'Santiago@@America/Santiago',
  },
});
