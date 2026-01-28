import { FaMountain, FaBusinessTime } from 'react-icons/fa';
import { MdSchedule, MdOutlineTravelExplore, MdWbSunny } from 'react-icons/md';
import { GiAfrica } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <MdOutlineTravelExplore
        className={styles.stepIcon}
        aria-label="Search City"
      />
    ),
    title: 'Enter "Cape Town"',
    description:
      'Type the name of South Africa\'s "Mother City" to get its precise live time and official time zone data.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Check Status" />,
    title: 'Confirm Consistent Time Zone',
    description:
      'Instantly see that Cape Town maintains South Africa Standard Time (SAST, UTC+2) year-round without any daylight saving changes.',
  },
  {
    icon: (
      <FaBusinessTime
        className={styles.stepIcon}
        aria-label="Business Planning"
      />
    ),
    title: 'Plan International Connections',
    description:
      "Use the stable UTC+2 offset to seamlessly coordinate with one of Africa's top economic and technology centers.",
  },
  {
    icon: (
      <FaMountain className={styles.stepIcon} aria-label="Adventure Planning" />
    ),
    title: 'Schedule Your Adventure',
    description:
      'Perfect for travelers planning to hike Table Mountain, explore the Winelands, or witness the penguins at Boulders Beach.',
  },
];

const features = [
  {
    icon: <GiAfrica className={styles.featureIcon} aria-label="African Hub" />,
    title: 'Gateway to Africa Timing',
    description:
      'Essential for coordinating business and travel across Southern Africa, as many neighboring countries align with SAST.',
  },
  {
    icon: (
      <MdWbSunny className={styles.featureIcon} aria-label="Sunny Climate" />
    ),
    title: 'Sunrise & Sunset Consistency',
    description:
      "Cape Town's latitude provides balanced daylight hours, making seasonal clock adjustments unnecessary and simplifying schedules.",
  },
  {
    icon: (
      <TbBeach className={styles.featureIcon} aria-label="Travel Planning" />
    ),
    title: 'Accurate Travel Itineraries',
    description:
      'Eliminate confusion for international visitors planning flights, tours, and bookings in this world-class destination.',
  },
];

const tips = [
  {
    title: 'Ideal European Overlap',
    description:
      'Schedule virtual meetings with European colleagues in the late morning (Cape Town time) for optimal overlap with European business hours.',
  },
  {
    title: 'National Time Unity',
    description:
      'Cape Town shares its time zone with the entire nation of South Africa, including Johannesburg and Durban, ensuring easy domestic coordination.',
  },
  {
    title: 'No Clock Change Surprises',
    description:
      'Plan long-term projects and repeat meetings with confidence, as the UTC+2 offset remains constant throughout the year.',
  },
  {
    title: 'Summer Sunset Advantage',
    description:
      'Enjoy famously late summer sunsets (after 8 PM), providing long evenings for outdoor activities without the complication of DST.',
  },
];

const faqs = [
  {
    question: 'Does Cape Town use Daylight Saving Time?',
    answer:
      'No. Cape Town, and all of South Africa, observes South Africa Standard Time (SAST) at UTC+2 year-round and does not implement daylight saving time.',
  },
  {
    question: 'Has South Africa ever observed DST?',
    answer:
      'South Africa briefly trialed daylight saving time between 1942-1944 and again in the 1970s and 1980s. However, it was not widely adopted and has not been used for decades.',
  },
  {
    question: 'What is the correct time zone identifier for Cape Town?',
    answer:
      'The IANA time zone identifier is Africa/Johannesburg. This identifier is used for the entire South African nation, which is consistently on UTC+2.',
  },
  {
    question: 'Do other countries use the same time as Cape Town?',
    answer:
      'Yes. South Africa Standard Time (UTC+2) is also used by countries like Botswana, Zimbabwe, and Egypt for at least part of the year, facilitating regional business.',
  },
];

const links = [
  { name: 'Johannesburg', path: `/${PATHS.dstInJohannesburg}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
  { name: 'Rio de Janeiro', path: `/${PATHS.dstInRioDeJaneiro}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Mumbai', path: `/${PATHS.dstInMumbai}` },
];

const howItWorks = [
  'Pulls real-time data for the IANA time zone Africa/Johannesburg.',
  'References official time policy confirming South Africa does not observe DST.',
  'Calculates and displays the consistent local time based on the fixed UTC+2 offset.',
  'Provides context about timekeeping in this major African economic and tourist hub.',
];

const ssData = {
  text: 'Cape Town uses South Africa Standard Time (SAST, UTC+2) year-round with no Daylight Saving. Plan your business and travel to this stunning city with confidence.',
  hashtags: 'CapeTown, TimeZone, SouthAfrica, NoDST, SAST',
  title: 'DST in Cape Town - South Africa Time Zone Checker',
};

const title = 'DST in Cape Town - South Africa Time Zone Checker';
const description =
  'Cape Town uses South Africa Standard Time (SAST, UTC+2) consistently with no DST. Check current time and plan your business or safari.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Cape Town clock (SAST, UTC+2)',
      'Definitive "No DST" status for South Africa',
      'Precise IANA time zone data (Africa/Johannesburg)',
      'Business and travel coordination guidance',
    ],
    steps: [
      {
        name: 'Step 1: Search "Cape Town"',
        description:
          'Instantly load the current local time in Cape Town, showing South Africa Standard Time (SAST, UTC+2).',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'Receive immediate confirmation that South Africa does not observe Daylight Saving Time.',
      },
      {
        name: 'Step 3: Note the Consistent UTC+2 Offset',
        description:
          'See the stable time zone essential for planning business and travel in this key global destination.',
      },
      {
        name: 'Step 4: Plan with Confidence',
        description:
          'Schedule calls, meetings, and itineraries without ever worrying about seasonal clock changes.',
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
  head: 'Cape Town — Stable Time in South Africa’s Mother City',
  subHead:
    'Cape Town observes South Africa Standard Time (SAST) at UTC+2 year-round without daylight saving adjustments. Essential for coordinating business and travel in this world-renowned destination.',
  featuresHead: 'Reliable Time for a Premier Destination',
  tipsHead: 'Mastering Time in Cape Town',
  faqsHead: 'Cape Town Time & DST FAQs',
  linksHead: 'Major Southern Hemisphere Cities',
  howItWorksHead: 'How We Provide Accurate Cape Town Time Data',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Cape Town@@Africa/Johannesburg',
  },
});
