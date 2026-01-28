import { FaSyncAlt, FaShareAlt, FaHistory, FaSun } from 'react-icons/fa';
import { TbClock, TbWorld, TbBuilding, TbSchool } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaHistory className={styles.stepIcon} aria-label="Historical time" />
    ),
    title: 'Start with Berlin Standard Time',
    description:
      'Enter "Berlin" or select Europe/Berlin to access Central European Time, rooted in Germany\'s 19th-century railway time synchronization legacy.',
  },
  {
    icon: (
      <TbWorld className={styles.stepIcon} aria-label="Global connection" />
    ),
    title: 'Connect to Cape Town',
    description:
      'Add "Cape Town" with Africa/Johannesburg timezone - sharing the same UTC offset despite being 9,000 km apart across hemispheres.',
  },
  {
    icon: (
      <FaSyncAlt className={styles.stepIcon} aria-label="Seasonal adjustment" />
    ),
    title: 'Account for Seasonal Variations',
    description:
      'Use Custom mode to plan across seasonal differences - when Berlin has 16 hours of daylight in summer, Cape Town experiences its shortest days.',
  },
  {
    icon: (
      <TbBuilding
        className={styles.stepIcon}
        aria-label="Business coordination"
      />
    ),
    title: 'Optimize International Coordination',
    description:
      'Leverage the identical time zones to schedule seamless meetings while accounting for different national holidays and cultural working patterns.',
  },
];

const features = [
  {
    icon: (
      <FaSun className={styles.featureIcon} aria-label="Daylight analysis" />
    ),
    title: 'Seasonal Daylight Intelligence',
    description:
      'Our time segments reveal fascinating contrasts: Berlin\'s "Summer Evening" occurs during Cape Town\'s "Winter Afternoon" with completely different daylight conditions.',
  },
  {
    icon: (
      <TbClock className={styles.featureIcon} aria-label="Precision timing" />
    ),
    title: 'Academic and Research Coordination',
    description:
      "Perfect for synchronizing between Berlin's research institutes and Cape Town's universities, with ISO timestamps for scientific collaboration.",
  },
  {
    icon: (
      <TbSchool className={styles.featureIcon} aria-label="Educational value" />
    ),
    title: 'Historical Time Context',
    description:
      'Learn how both cities adopted standardized time through different historical paths - Berlin leading European synchronization, Cape Town following South African unification.',
  },
  {
    icon: (
      <FaShareAlt
        className={styles.featureIcon}
        aria-label="Advanced sharing"
      />
    ),
    title: 'Cultural Exchange Tools',
    description:
      'Share meeting times that respect both German punctuality traditions and South African "ubuntu" philosophy of relational time keeping.',
  },
];

const tips = [
  {
    title: 'The Hemispheric Paradox',
    description:
      'While clocks show identical times, seasonal opposites create unique scheduling dynamics. Plan Berlin-Cape Town collaborations considering that peak productivity hours align with different seasonal daylight conditions.',
  },
  {
    title: 'Historical Time Synchronization',
    description:
      'Berlin adopted Central European Time in 1893 as part of German unification, while Cape Town standardized to South African Standard Time in 1903, creating this unique trans-hemispheric time alignment.',
  },
  {
    title: 'Business Culture Bridge',
    description:
      'Leverage the identical time zones to build trust - German precision meets South African relationship-building in perfectly synchronized meeting environments.',
  },
  {
    title: 'Academic Collaboration Advantage',
    description:
      'Research partnerships between Berlin and Cape Town universities benefit from simultaneous workdays while accounting for different academic calendar structures and holiday periods.',
  },
  {
    title: 'Sustainable Energy Planning',
    description:
      'Coordinate renewable energy research considering that solar peak hours occur at the same clock time but with different solar angles and intensity across hemispheres.',
  },
];

const faqs = [
  {
    question:
      'Why do Berlin and Cape Town have the same time zone despite being in different hemispheres?',
    answer:
      'This results from historical standardization. Berlin uses Central European Time (UTC+1/UTC+2 with DST) while South Africa standardized on Central Africa Time (UTC+2) for national consistency, creating this unique alignment between European and African cities.',
  },
  {
    question:
      'How does daylight saving time affect Berlin-Cape Town coordination?',
    answer:
      'When Berlin observes DST (March-October), both cities share UTC+2. During European winter, Berlin reverts to UTC+1 while Cape Town remains UTC+2, creating a one-hour difference for half the year.',
  },
  {
    question: 'What are the best meeting times between Berlin and Cape Town?',
    answer:
      'With minimal time difference, focus on overlapping business cultures rather than time gaps. Berlin mornings (08:00-10:00) work well with Cape Town mornings, while afternoons align perfectly for collaborative work sessions.',
  },
  {
    question: 'How do seasonal differences impact virtual meetings?',
    answer:
      'Consider that when you schedule a 17:00 meeting in December, Berlin participants experience darkness while Cape Town colleagues enjoy summer evening light - factor this into meeting energy and focus levels.',
  },
  {
    question: 'What historical factors created this time zone alignment?',
    answer:
      'Germany standardized time for railway efficiency in the 1890s, while South Africa unified time zones post-Boer War. The UTC+2 alignment emerged from practical colonial and trade considerations rather than geographical logic.',
  },
];

const links = [
  { name: 'London → Lagos', path: `/${PATHS.timezoneFromLagosToLondon}` },
  {
    name: 'Amsterdam → Nairobi',
    path: `/${PATHS.timezoneFromNairobiToAmsterdam}`,
  },
];

const howItWorks = [
  'Converts between Europe/Berlin (CET/CEST) and Africa/Johannesburg (SAST) IANA timezones',
  "Automatically adjusts for Berlin's daylight saving transitions (UTC+1 to UTC+2)",
  "Maintains Cape Town's consistent UTC+2 offset throughout the year",
  "Calculates precise alignment accounting for Germany's EU-mandated DST schedule",
  "Incorporates historical timezone data showing the evolution of both regions' time standards",
  'Processes complex seasonal daylight variations while maintaining clock time synchronization',
];

const ssData = {
  text: 'Discover the unique time alignment between Berlin and Cape Town - same clock time across hemispheres with fascinating seasonal variations. Perfect for international collaboration.',
  hashtags:
    'Berlin,CapeTown,TimeZone,InternationalBusiness,GlobalCollaboration',
  title: 'Berlin to Cape Town Time Converter - Hemispheric Time Alignment',
};

const title = 'Berlin to Cape Town Time (CET to SAST)';
const description =
  'Same time zone across hemispheres! Convert Berlin-Cape Town time with seasonal insights. Perfect for business, research & cultural exchange.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise time conversion between Berlin and Cape Town',
      'Daylight saving time adjustments for CET/CEST',
      'Seasonal daylight analysis across hemispheres',
      'Historical timezone evolution context',
      'Cultural and business scheduling optimization',
    ],
    steps: [
      {
        name: 'Set Berlin as origin timezone',
        description:
          'Input Berlin location or select Europe/Berlin IANA timezone with historical context',
      },
      {
        name: 'Add Cape Town as destination',
        description:
          'Select Africa/Johannesburg for South African Standard Time conversion',
      },
      {
        name: 'Analyze seasonal time alignment',
        description:
          'Review how identical clock times correspond to different seasonal conditions',
      },
      {
        name: 'Optimize cross-hemispheric scheduling',
        description:
          'Leverage time synchronization while accounting for cultural and seasonal factors',
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
  head: 'Berlin to Cape Town Time Converter',
  subHead:
    'Explore the fascinating time alignment between Europe and Africa - identical time zones across hemispheres with rich historical context and practical coordination insights',
  featuresHead: 'Advanced Features for Cross-Hemispheric Coordination',
  tipsHead: 'Expert Insights for Trans-Continental Collaboration',
  faqsHead: 'Berlin-Cape Town Time Alignment Deep Dive',
  linksHead: 'European to African Destinations',
  howItWorksHead: 'Precision Time Technology with Historical Intelligence',
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
    originTimeZone: 'Berlin@@Europe/Berlin',
    destinationTimeZone: 'Cape Town@@Africa/Johannesburg',
  },
});
