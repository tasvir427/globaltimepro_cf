import {
  FaCheckCircle,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaPlusCircle,
  FaToggleOn,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMapMarkerAlt className={styles.stepIcon} aria-label="Set Origin" />
    ),
    title: 'Start with Singapore as your origin',
    description:
      'Select Singapore using city search, IANA (Asia/Singapore), or its abbreviation (SGT). Singapore stays on UTC+8 consistently, with no Daylight Saving shifts.',
  },
  {
    icon: (
      <FaPlusCircle className={styles.stepIcon} aria-label="Add Destination" />
    ),
    title: 'Add London and other global hubs',
    description:
      'Search for London (Europe/London) as your primary destination. Our tool can handle multiple destinations, allowing you to compare London time with other cities simultaneously.',
  },
  {
    icon: <FaToggleOn className={styles.stepIcon} aria-label="Toggle Mode" />,
    title: 'Switch between Live and Custom time',
    description:
      'Keep Live mode on for a real-time view of the time gap. Switch to Custom to calculate the London time for a specific future event, like a conference call or market open time in Singapore.',
  },
  {
    icon: (
      <FaClipboardCheck className={styles.stepIcon} aria-label="Use Actions" />
    ),
    title: 'Leverage actions for efficiency',
    description:
      'Don’t just view the time—use it. The Copy button formats the time for your calendar invite. The Info button confirms London’s DST status, crucial for scheduling months in advance.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Fixed vs Dynamic"
      />
    ),
    title: 'Fixed Singapore vs. Dynamic London Time',
    description:
      'Singapore’s time is constant (UTC+8). London’s changes twice a year. Our converter is the guardian that tracks these changes for you, ensuring your conversions are always accurate, whether for a meeting tomorrow or next December.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Workday Overlap"
      />
    ),
    title: 'Clear Workday Overlap Visualization',
    description:
      'The time segment colors (Work AM, PM, etc.) instantly show you when 9 AM in Singapore is already afternoon in London, helping you identify viable meeting windows at a glance.',
  },
];

const tips = [
  {
    title: 'The "End-of-Day" Handoff Window',
    description:
      'A message sent at 5:00 PM SGT arrives at 10:00 AM BST (9:00 AM GMT) in London. This makes the late Singapore afternoon perfect for handing off tasks to colleagues just starting their day in the UK.',
  },
  {
    title: 'Best Time for a Video Call',
    description:
      'The ideal overlap for a live conversation is Singapore afternoon / London morning. Aim for between 3:00 PM and 5:00 PM SGT, which is 8:00 AM to 10:00 AM BST—a productive time for both parties.',
  },
  {
    title: 'Mind the GMT/BST Switch',
    description:
      'The UK’s shift to BST in spring momentarily shortens the gap from 8 hours to 7. For critical annual scheduling, use the DST Checker (via the Info button) to see exact transition dates for London.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Singapore and London?',
    answer:
      'Singapore (SGT) is 8 hours ahead of London when it is on Greenwich Mean Time (GMT, UTC+0). During British Summer Time (BST, UTC+1), the difference is 7 hours.',
  },
  {
    question: 'Do Singapore and London observe Daylight Saving Time?',
    answer:
      'No, Singapore does not observe DST and remains on SGT (UTC+8) all year. Yes, the United Kingdom (London) observes DST, switching from GMT to BST from late March to late October.',
  },
  {
    question: "If it's 12 PM in Singapore, what time is it in London?",
    answer:
      'If it’s 12:00 PM (noon) in Singapore, it is 4:00 AM in London during GMT (winter), and 5:00 AM during BST (summer). Our converter gives you this answer instantly and accounts for the date change.',
  },
];

const links = [
  {
    name: 'Singapore → San Francisco',
    path: `/${PATHS.timezoneFromSingaporeToSanFrancisco}`,
  },
  {
    name: 'Beijing → Singapore',
    path: `/${PATHS.timezoneFromBeijingToSingapore}`,
  },
  { name: 'Dubai → Singapore', path: `/${PATHS.timezoneFromDubaiToSingapore}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  { name: 'Toronto → London', path: `/${PATHS.timezoneFromTorontoToLondon}` },
];

const howItWorks = [
  'Our system uses the authoritative IANA time zone database (Asia/Singapore, Europe/London) to ensure historical and future accuracy.',
  'The conversion engine automatically applies the correct offset for London, toggling between GMT (UTC+0) and BST (UTC+1) based on the date you select.',
  'We translate the raw time data into human-friendly formats and labels, clearly indicating the time of day in both cities to prevent miscommunication.',
  'This specialized tool eliminates the mental math of the 7-8 hour difference, reducing errors in international scheduling.',
];

const ssData = {
  text: 'Need to sync Singapore and London time? This converter handles the 7-8 hour shift and auto-adjusts for UK Daylight Saving. Perfect for global teams. 🌍✈️',
  hashtags: 'Singapore,London,TimeZone,Business',
  title: 'Singapore Time to London Time Converter — SGT↔GMT/BST',
};

const title = 'Singapore Time to London Time Converter — SGT↔GMT/BST';
const description =
  'Live converter for Singapore (SGT) to London (GMT/BST). Perfect for syncing business hours between Asia and UK. Auto-DST adjustment, one-click copy.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Instant SGT to GMT/BST conversion',
      'Real-time and custom time calculation',
      'Automatic London Daylight Saving Time detection',
      'Multi-destination conversion capability',
      'Shareable results and one-click copying',
      'Seamless integration with DST Checker & Jet Lag Planner',
    ],
    steps: [
      {
        name: 'Origin: Set Singapore',
        description:
          'Select Singapore as your origin point. It uses Singapore Time (SGT), a fixed UTC+8 offset year-round.',
      },
      {
        name: 'Target: Add London',
        description:
          'Add London as your destination. Observe how its offset changes between GMT (UTC+0) and BST (UTC+1) with Daylight Saving.',
      },
      {
        name: 'Choose Your Time Mode',
        description:
          'Use Live mode for real-time clocks or input a custom Singapore time to find the precise corresponding time in London.',
      },
      {
        name: 'Utilize Output Actions',
        description:
          'Copy the formatted time for invites, use Swap to reverse the conversion, or check Info for London’s current DST status.',
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
  head: 'Singapore to London Time Converter',
  subHead:
    'Bridge the 7-hour gap between Asia and the UK. Get live, accurate conversions between Singapore (SGT) and London (GMT/BST) with automatic Daylight Saving Time adjustment for flawless scheduling.',
  featuresHead: 'Key Features for Singapore-London Conversions',
  tipsHead: 'Scheduling Between Singapore and London',
  faqsHead: 'Frequently Asked Questions',
  linksHead: 'Other Singapore and London Timezone Conversions',
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
    originTimeZone: 'Singapore@@Asia/Singapore',
    destinationTimeZone: 'London@@Europe/London',
  },
});
