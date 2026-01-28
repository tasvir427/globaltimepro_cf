import { FaBusinessTime, FaMedal } from 'react-icons/fa';
import { MdSchedule, MdOutlineTravelExplore, MdHistory } from 'react-icons/md';
import { GiCarnivalMask } from 'react-icons/gi';
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
    title: 'Enter "Rio de Janeiro"',
    description:
      'Type the name of the "Cidade Maravilhosa" to get its precise live time and official time zone data.',
  },
  {
    icon: <MdSchedule className={styles.stepIcon} aria-label="Check Status" />,
    title: 'Check Current DST Status',
    description:
      'Our tool instantly confirms that Rio currently observes Brasília Standard Time (BRT, UTC-3) year-round, with no active DST.',
  },
  {
    icon: (
      <FaBusinessTime
        className={styles.stepIcon}
        aria-label="Business Planning"
      />
    ),
    title: 'Plan with Confidence',
    description:
      'View the stable UTC-3 offset to coordinate calls, meetings, and events with this South American cultural hub.',
  },
  {
    icon: (
      <GiCarnivalMask className={styles.stepIcon} aria-label="Event Planning" />
    ),
    title: 'Sync for Major Events',
    description:
      "Essential for timing international viewership of Rio's world-famous Carnival or New Year's celebrations on Copacabana Beach.",
  },
];

const features = [
  {
    icon: (
      <MdHistory className={styles.featureIcon} aria-label="Historical Data" />
    ),
    title: 'Historical DST Context',
    description:
      "Understand Brazil's past DST rules, which were observed in Rio until 2019, helping you make sense of historical records.",
  },
  {
    icon: (
      <FaMedal
        className={styles.featureIcon}
        aria-label="Sports Coordination"
      />
    ),
    title: 'Sports & Event Timing',
    description:
      'Crucial for fans and broadcasters coordinating with the schedule of major football matches and sporting events in Rio.',
  },
  {
    icon: (
      <TbBeach className={styles.featureIcon} aria-label="Travel Planning" />
    ),
    title: 'Accurate Travel Planning',
    description:
      "Arrive on time by knowing Rio's exact time zone, eliminating any confusion from outdated information about DST.",
  },
];

const tips = [
  {
    title: 'National Time Alignment',
    description:
      "Rio de Janeiro shares its time zone (BRT/UTC-3) with the capital, Brasília, and most of Brazil's southeastern population centers.",
  },
  {
    title: 'Ideal Calling Hours',
    description:
      'Schedule calls with European partners in the early afternoon Rio time to catch the end of the business day in Europe.',
  },
  {
    title: 'No "Fall Back" or "Spring Forward"',
    description:
      'Since the suspension of DST, you no longer need to worry about clock changes disrupting travel or meeting plans in Rio.',
  },
  {
    title: 'Daylight Hours',
    description:
      'Rio enjoys relatively consistent daylight hours year-round due to its tropical latitude, a key reason DST was deemed unnecessary.',
  },
];

const faqs = [
  {
    question: 'Does Rio de Janeiro currently observe Daylight Saving Time?',
    answer:
      'No. As of 2019, Brazil suspended the observance of Daylight Saving Time nationwide. Rio de Janeiro now remains on Brasília Standard Time (BRT), UTC-3, throughout the entire year.',
  },
  {
    question: 'When did Rio de Janeiro stop using DST?',
    answer:
      'The last time DST was observed in Rio was in the 2018-2019 season. The Brazilian government suspended the practice starting in 2019.',
  },
  {
    question: 'What is the IANA time zone identifier for Rio?',
    answer:
      'The correct identifier is America/Sao_Paulo. Despite the name, this zone covers the entire Southeast Region of Brazil, including Rio de Janeiro and Brasília, all on UTC-3 without DST.',
  },
  {
    question: 'Will DST ever return to Brazil?',
    answer:
      'While possible, there are no current plans to reinstate Daylight Saving Time. Any decision would be made by the federal government and apply nationwide.',
  },
];

const links = [
  { name: 'Sao Paulo', path: `/${PATHS.dstInSaoPaulo}` },
  { name: 'Buenos Aires', path: `/${PATHS.dstInBuenosAires}` },
  { name: 'Miami', path: `/${PATHS.dstInMiami}` },
  { name: 'Sydney', path: `/${PATHS.dstInSydney}` },
  { name: 'Cape Town', path: `/${PATHS.dstInCapeTown}` },
];

const howItWorks = [
  'Sources data from the authoritative IANA Time Zone Database (TZDB) for the zone America/Sao_Paulo.',
  'Checks the current ruleset for Brazil, which confirms the permanent suspension of DST.',
  'Calculates and displays the current local time based on the fixed UTC-3 offset.',
  'Provides context on the historical use of DST to clarify the current status.',
];

const ssData = {
  text: 'Rio de Janeiro uses Brasília Time (BRT, UTC-3) year-round with no Daylight Saving. Check the current time and plan your trip or call to the Marvelous City.',
  hashtags: 'RioDeJaneiro, TimeZone, Brazil, NoDST, BRT',
  title: 'DST in Rio de Janeiro - Brazil Time Zone Checker',
};

const title = 'DST in Rio de Janeiro - Brazil Time Zone Checker';
const description =
  'Rio observes Brasília Time (BRT, UTC-3) year-round with no DST since 2019. Check current time, historical context, and planning tips.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Live Rio clock (BRT, UTC-3)',
      'Definitive "No DST" status',
      'Historical DST context',
      'Precise IANA time zone data (America/Sao_Paulo)',
    ],
    steps: [
      {
        name: 'Step 1: Search "Rio de Janeiro"',
        description:
          'Load the precise current local time for Rio de Janeiro, showing Brasília Time (BRT, UTC-3).',
      },
      {
        name: 'Step 2: Confirm DST Status (Not Observed)',
        description:
          'Get immediate verification that DST is suspended and Rio maintains a consistent UTC-3 offset.',
      },
      {
        name: 'Step 3: Review Historical Context',
        description:
          'Gain insight into past DST rules in Brazil to understand the current timekeeping policy.',
      },
      {
        name: 'Step 4: Plan Your Coordination',
        description:
          'Use the stable time zone information to schedule business, travel, or event viewing.',
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
  head: 'Rio de Janeiro — Consistent Time in the Marvelous City',
  subHead:
    'Rio de Janeiro observes Brasília Standard Time (BRT) at UTC-3 year-round, with no daylight saving changes since 2019. Essential for planning travel and business in Brazil.',
  featuresHead: 'Navigating Time in Rio',
  tipsHead: 'Making the Most of Rio Time',
  faqsHead: 'Rio de Janeiro Time & DST FAQs',
  linksHead: 'Major Coastal Cities',
  howItWorksHead: 'How Our Checker Provides Accurate Data for Rio',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    originTimeZone: 'Rio de Janeiro@@America/Sao_Paulo',
  },
});
