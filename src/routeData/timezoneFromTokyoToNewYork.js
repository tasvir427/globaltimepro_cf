import {
  FaCheckCircle,
  FaClock,
  FaCopy,
  FaGlobeAmericas,
  FaMousePointer,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaMousePointer className={styles.stepIcon} aria-label="Select Tokyo" />
    ),
    title: 'Set Tokyo as your origin timezone',
    description:
      'Use the searchable selector (City, IANA, or Abbreviation) to choose Tokyo. The IANA zone is Asia/Tokyo, and it consistently uses Japan Standard Time (JST, UTC+9).',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Choose time mode" />,
    title: 'Toggle between Live and Custom time',
    description:
      'Keep "Live" on to watch the real-time difference between Tokyo and New York. Turn it off to enter a specific date and time in Tokyo (e.g., a meeting time) to convert it to New York time.',
  },
  {
    icon: (
      <FaGlobeAmericas
        className={styles.stepIcon}
        aria-label="Add destination"
      />
    ),
    title: 'Add New York as your destination',
    description:
      'Search for and select New York. You can add multiple other destinations (e.g., London, LA) to compare times across several global hubs at once from your single Tokyo origin time.',
  },
  {
    icon: <FaCopy className={styles.stepIcon} aria-label="Copy results" />,
    title: 'Copy, share, and plan',
    description:
      'Use the "Copy" button on the New York card to get a formatted time string. Use "Info" to check New York\'s DST status, or "Jet-Lag" to plan your travel sleep schedule.',
  },
];

const features = [
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="DST Automatic"
      />
    ),
    title: 'Automatic Daylight Saving Handling',
    description:
      'New York observes DST (EDT/EST), while Tokyo does not. Our converter automatically adjusts for this, so you never have to manually calculate the 13-hour (EST) or 14-hour (EDT) difference.',
  },
  {
    icon: (
      <FaCheckCircle
        className={styles.featureIcon}
        aria-label="Date Change Flag"
      />
    ),
    title: 'Clear Date Change Indicators',
    description:
      'A time converted from Tokyo to New York will almost always land on the previous calendar day. Our tool clearly flags this "date rollover" to prevent critical scheduling errors.',
  },
];

const tips = [
  {
    title: 'The "Previous Day" Rule',
    description:
      'Almost any reasonable business hour in Tokyo (9 AM - 6 PM JST) converts to the afternoon/evening of the previous day in New York (8 PM - 5 AM EST). Schedule calls carefully!',
  },
  {
    title: 'Ideal Tokyo-to-NYC Call Window',
    description:
      'For a same-day conversation, the tiny overlap is late in Tokyo and early in NYC: Tokyo 9:00 AM - 10:00 AM JST converts to New York 8:00 PM - 9:00 PM EST (the previous day). For a call on the same *calendar day* in both cities, you must schedule it in the very early morning in NYC and evening in Tokyo.',
  },
  {
    title: 'Financial Market Overlap',
    description:
      'The Tokyo Stock Exchange (TSE) is closed when the New York Stock Exchange (NYSE) opens. The only direct overlap is for 45 minutes between the TSE close (3:00 PM JST) and the NYSE open (9:30 AM EST), which is 11:30 PM JST - 12:15 AM JST (next day).',
  },
  {
    title: 'Always Specify the Time Zone',
    description:
      'When sending invites, always use the "Copy" function to include the time zone (e.g., "JST" or "EST"). A meeting at "10:00" is ambiguous; "10:00 JST / 20:00 EST" is clear.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Tokyo and New York?',
    answer:
      'Tokyo is 13 hours ahead of New York when New York is on Eastern Standard Time (EST, UTC-5). Tokyo is 14 hours ahead when New York is on Eastern Daylight Time (EDT, UTC-4).',
  },
  {
    question: 'Why does my meeting show up on the wrong day?',
    answer:
      'This is normal due to the large time difference. A meeting on Tuesday at 10:00 AM in Tokyo will be at 8:00 PM on Monday in New York (during EST). Our tool clearly labels this date change to avoid confusion.',
  },
  {
    question: 'Do both Tokyo and New York observe Daylight Saving Time?',
    answer:
      'No. Japan (Tokyo) does not observe DST and stays on JST (UTC+9) year-round. The United States (New York) does observe DST, switching from EST (UTC-5) to EDT (UTC-4) in spring and back in fall.',
  },
  {
    question:
      'What is the best time for a video conference between Tokyo and New York?',
    answer:
      'The most practical window is very early morning in New York (8:00 AM - 9:30 AM EDT, which is 9:00 PM - 10:30 PM JST) or very late evening in New York (8:00 PM - 10:00 PM EST, which is 10:00 AM - 12:00 PM JST the next day).',
  },
];

const links = [
  { name: 'Tokyo → Paris', path: `/${PATHS.timezoneFromTokyoToParis}` },
  { name: 'London → Tokyo', path: `/${PATHS.timezoneFromLondonToTokyo}` },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.timezoneFromSanFranciscoToTokyo}`,
  },
  { name: 'Chicago → Tokyo', path: `/${PATHS.timezoneFromChicagoToTokyo}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
];

const howItWorks = [
  'Leverages the IANA time zone database (Asia/Tokyo, America/New_York) for historical and future-offset accuracy.',
  "Automatically calculates the complex 13/14-hour difference, factoring in New York's Daylight Saving Time changes so you don't have to.",
  'Formats the output time according to your selection (12h, 24h, ISO, custom) for clear communication across cultures.',
  'Provides direct links to check DST details for New York or plan a trip with the Jet Lag Planner.',
];

const ssData = {
  text: 'Convert Tokyo time to New York time instantly! Handles the 14-hour difference and DST automatically. Essential for global scheduling. 🗽🗼',
  hashtags: 'Tokyo,NewYork,TimeZone,Productivity',
  title: 'Tokyo to New York Time Converter — JST↔EST/EDT',
};

const title = 'Tokyo → New York Time Converter — JST↔EST/EDT';
const description =
  'Convert Tokyo (JST) to New York (EST/EDT). Live clocks & custom conversion. Manage the 13–14 hour gap for calls, trading, and scheduling.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise JST to EST/EDT conversion',
      'Live ticking clocks or custom time input',
      'One-origin to many-destination support',
      'Daylight Saving Time (DST) awareness for New York',
      'Per-destination actions: Copy, Swap, Info, Jet-Lag',
      '13+ output formats including custom Moment.js',
    ],
    steps: [
      {
        name: 'Set Tokyo as your origin timezone',
        description:
          'Select Tokyo using city, IANA (Asia/Tokyo), or abbreviation (JST) search to set it as your origin point for conversion.',
      },
      {
        name: 'Choose Live or Custom time mode',
        description:
          'Toggle Live for real-time clocks in both cities, or enter a specific past/future time in Tokyo to see the corresponding time in New York.',
      },
      {
        name: 'Add New York as your destination',
        description:
          'Select New York as your target destination. Add other cities if needed for a one-to-many comparison.',
      },
      {
        name: 'Copy and share the converted time',
        description:
          'Use the copy button on the New York card to get a perfectly formatted time string for emails, calendars, or messages, including the correct timezone abbreviation.',
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
  head: 'Tokyo → New York Time Converter',
  subHead:
    'Master the 13-14 hour time difference between Tokyo (JST) and New York (EST/EDT). Convert live times or schedule future meetings with automatic DST adjustment for flawless global coordination.',
  featuresHead: 'Why This Converter is Essential for Tokyo-NYC',
  tipsHead: 'Navigating the Tokyo-New York Time Divide',
  faqsHead: 'Tokyo and New York Time Conversion FAQs',
  linksHead: 'Other Tokyo and New York Timezone Conversions',
  howItWorksHead: 'How We Accurately Convert JST to EST/EDT',
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
    originTimeZone: 'Tokyo@@Asia/Tokyo',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
