import { FaBusinessTime, FaCity, FaClock, FaRegClock } from 'react-icons/fa';
import { GiSandsOfTime, GiWorld } from 'react-icons/gi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaCity className={styles.stepIcon} aria-label="Set Origin" />,
    title: 'Start with Mumbai',
    description:
      'Select Mumbai as your origin. It maintains consistent India Standard Time (IST, UTC+5:30) throughout the year with no seasonal changes.',
  },
  {
    icon: (
      <TbBuildingSkyscraper
        className={styles.stepIcon}
        aria-label="Add Destination"
      />
    ),
    title: 'Target New York',
    description:
      'Add New York as your destination. It alternates between Eastern Standard Time and Eastern Daylight Time based on the season.',
  },
  {
    icon: <FaClock className={styles.stepIcon} aria-label="Time Mode" />,
    title: 'Choose Your Time View',
    description:
      'Watch real-time clocks or enter a specific moment to see how business hours align between these economic hubs.',
  },
  {
    icon: <GiWorld className={styles.stepIcon} aria-label="Use Results" />,
    title: 'Apply Your Conversion',
    description:
      'Use the copy feature for meeting invites, check DST status for accurate planning, or explore jet lag options for travel.',
  },
];

const features = [
  {
    icon: (
      <GiSandsOfTime
        className={styles.featureIcon}
        aria-label="Half-hour precision"
      />
    ),
    title: 'Precise Half-hour Offset Handling',
    description:
      "Accurately calculates Mumbai's unique UTC+5:30 offset, avoiding common scheduling errors that occur with manual time math.",
  },
  {
    icon: (
      <FaBusinessTime
        className={styles.featureIcon}
        aria-label="Business optimization"
      />
    ),
    title: 'Optimized for Global Business Coordination',
    description:
      'Specifically designed for India-US business collaboration, with insights on optimal meeting times across the 9.5-10.5 hour difference.',
  },
  {
    icon: (
      <FaRegClock className={styles.featureIcon} aria-label="DST handling" />
    ),
    title: 'Automatic DST Transition Management',
    description:
      "Seamlessly handles New York's Daylight Saving Time changes while maintaining Mumbai's consistent timekeeping.",
  },
];

const tips = [
  {
    title: 'Optimal Meeting Windows',
    description:
      'The best overlap is Mumbai afternoon (2-4 PM IST) which equals New York morning (4:30-6:30 AM EDT). This captures the start of the US business day.',
  },
  {
    title: 'Historical Time Context',
    description:
      'India adopted the unusual UTC+5:30 offset in 1906 to balance sunrise times across its vast territory. This half-hour difference requires precise calculation tools.',
  },
  {
    title: 'Follow-the-Sun Workflow Advantage',
    description:
      'The time difference enables a continuous workflow where Mumbai teams can hand off work to New York teams at the end of their day.',
  },
  {
    title: 'Weekend Awareness',
    description:
      'Both locations follow Saturday-Sunday weekends, simplifying scheduling compared to some other international pairs.',
  },
];

const faqs = [
  {
    question: 'What is the time difference between Mumbai and New York?',
    answer:
      'Mumbai is 9.5 hours ahead of New York during Eastern Daylight Time (EDT) and 10.5 hours ahead during Eastern Standard Time (EST). The difference changes seasonally.',
  },
  {
    question: 'Why does the time difference include a half-hour?',
    answer:
      'India uses UTC+5:30 instead of a full-hour offset to better align with solar time across its wide geographical span. This unique offset requires precise calculation tools.',
  },
  {
    question: 'How do DST changes affect Mumbai-New York scheduling?',
    answer:
      'New York observes DST while Mumbai does not. This means the time difference changes by one hour seasonally, which our tool automatically handles for accurate scheduling.',
  },
  {
    question: 'What are the best days for business calls between these cities?',
    answer:
      'Tuesday-Thursday typically work best. Avoid scheduling during major holidays in either country, and remember that time differences mean dates may change between locations.',
  },
];

const links = [
  { name: 'Mumbai → Dubai', path: `/${PATHS.timezoneFromMumbaiToDubai}` },
  { name: 'Mumbai → London', path: `/${PATHS.timezoneFromMumbaiToLondon}` },
  { name: 'New York → Mumbai', path: `/${PATHS.timezoneFromNewYorkToMumbai}` },
  { name: 'New York → London', path: `/${PATHS.timezoneFromNewYorkToLondon}` },
  { name: 'Paris → New York', path: `/${PATHS.timezoneFromParisToNewYork}` },
  { name: 'Berlin → New York', path: `/${PATHS.timezoneFromBerlinToNewYork}` },
];

const howItWorks = [
  'Uses IANA time zones (Asia/Kolkata for Mumbai, America/New_York for New York) with precise historical DST data',
  "Automatically adjusts for New York's seasonal time changes while maintaining Mumbai's consistent UTC+5:30 offset",
  'Calculates the 9.5-10.5 hour difference accurately, including the half-hour component that often causes manual calculation errors',
  'Provides clear visual indicators for time-of-day context and date changes between locations',
  'Offers multiple output formats and one-click copying for easy scheduling across cultures and time zones',
];

const ssData = {
  text: 'Convert Mumbai time to New York time! Handles the 9.5-10.5 hour difference and DST automatically. Essential for India-US business.',
  hashtags: 'Mumbai,NewYork,TimeZone,Business',
  title: 'Mumbai to New York Time Converter - IST to EST/EDT',
};

const title = 'Mumbai to New York Time Converter - IST to EST/EDT';
const description =
  'Convert Mumbai time to New York time. Handles 9.5–10.5 hour difference with automatic DST adjustment. Essential for business and collaboration.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Accurate IST to EST/EDT conversion',
      'Live and custom time modes',
      'Automatic DST adjustment for New York',
      'Half-hour time zone precision',
      'Date change indicators',
      'One-click copy for scheduling',
      'DST status information',
    ],
    steps: [
      {
        name: 'Set Mumbai as Origin',
        description:
          'Select Mumbai as your starting point. It uses India Standard Time (IST, UTC+5:30) consistently year-round.',
      },
      {
        name: 'Add New York as Destination',
        description:
          'Add New York as your target. It switches between EST (UTC-5) and EDT (UTC-4) for Daylight Saving.',
      },
      {
        name: 'Choose Time Mode',
        description:
          'Toggle between Live clocks or enter a custom time to see the conversion instantly.',
      },
      {
        name: 'Utilize Conversion Results',
        description:
          'Copy results for scheduling, check DST status, or plan travel with jet lag insights.',
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
  head: 'Mumbai to New York Time Converter',
  subHead:
    'Bridge two economic powerhouses with precise time conversions. Essential for business, outsourcing, and collaboration between India and the United States.',
  featuresHead: 'Key Advantages for Mumbai-NYC Conversions',
  tipsHead: 'Strategic Scheduling Insights',
  faqsHead: 'Common Questions Answered',
  linksHead: 'Other Mumbai and New York Timezone Conversions',
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
    originTimeZone: 'Mumbai@@Asia/Kolkata',
    destinationTimeZone: 'New York@@America/New_York',
  },
});
