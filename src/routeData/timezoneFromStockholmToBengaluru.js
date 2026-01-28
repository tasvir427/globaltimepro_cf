import { FaLaptopCode, FaUniversity } from 'react-icons/fa';
import { TbBrain, TbZoom, TbClockHour4, TbLeaf } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaLaptopCode className={styles.stepIcon} aria-label="Tech hub origin" />
    ),
    title: 'Start with Swedish Innovation Time',
    description:
      'Enter "Stockholm" or select Europe/Stockholm - home to Europe\'s fastest growing tech scene and the birthplace of UTC+1 time standardization in Scandinavia.',
  },
  {
    icon: <TbBrain className={styles.stepIcon} aria-label="IT destination" />,
    title: "Connect to India's Silicon Valley",
    description:
      'Add "Bengaluru" with Asia/Kolkata timezone - the heart of India\'s IT revolution operating on Indian Standard Time, established in 1906.',
  },
  {
    icon: (
      <TbClockHour4
        className={styles.stepIcon}
        aria-label="Partial hour difference"
      />
    ),
    title: 'Master the 3.5-Hour Innovation Gap',
    description:
      'Our tool precisely handles the unique 3.5-hour winter difference (4.5 hours during Swedish summer) - optimized for agile development cycles between two tech capitals.',
  },
  {
    icon: (
      <TbZoom className={styles.stepIcon} aria-label="Optimize collaboration" />
    ),
    title: 'Optimize Sustainable Tech Collaboration',
    description:
      "Leverage the time difference for continuous innovation - Stockholm's green tech expertise meets Bengaluru's software scalability in perfectly synchronized workflows.",
  },
];

const features = [
  {
    icon: (
      <TbClockHour4
        className={styles.featureIcon}
        aria-label="Precision timing"
      />
    ),
    title: 'Partial-Hour Precision Intelligence',
    description:
      "Accurately convert across Stockholm's UTC+1/UTC+2 and Bengaluru's consistent UTC+5:30 - handling the unique 3.5 to 4.5 hour gap with minute precision for critical deployments.",
  },
  {
    icon: (
      <FaLaptopCode
        className={styles.featureIcon}
        aria-label="Tech collaboration"
      />
    ),
    title: 'Agile & DevOps Synchronization',
    description:
      'Time segment labels show exactly when Stockholm\'s "Work PM" hands off to Bengaluru\'s "Work PM" - perfect for CI/CD pipelines and sprint planning coordination.',
  },
  {
    icon: (
      <TbLeaf className={styles.featureIcon} aria-label="Sustainable tech" />
    ),
    title: 'Green Tech Coordination',
    description:
      "Essential for synchronizing Stockholm's climate tech innovations with Bengaluru's sustainable IT solutions - bridging Nordic cleantech with Indian digital transformation.",
  },
  {
    icon: (
      <FaUniversity
        className={styles.featureIcon}
        aria-label="Academic research"
      />
    ),
    title: 'Research & Deep Tech Alignment',
    description:
      "Coordinate between Stockholm's Karolinska Institute and Bengaluru's Indian Institute of Science - with precise timestamps for global research collaborations and patent filings.",
  },
];

const tips = [
  {
    title: 'The Agile Development Sweet Spot',
    description:
      'Stockholm morning (09:00-11:30 CET) overlaps with Bengaluru afternoon (13:30-16:00 IST), creating a 2.5-hour window for real-time collaboration on complex technical challenges.',
  },
  {
    title: 'Historical Time Standardization Legacy',
    description:
      'Sweden adopted Central European Time in 1900, while India established IST in 1906 at 82.5°E longitude - creating this precise 3.5-hour baseline difference rooted in colonial railway synchronization.',
  },
  {
    title: 'Continuous Innovation Advantage',
    description:
      'Schedule Stockholm code reviews at 16:00 (CET) for Bengaluru developers to address at 20:30 (IST), effectively creating a follow-the-sun development model that accelerates time-to-market.',
  },
  {
    title: 'Cultural Synergy in Tech',
    description:
      'Bridge Swedish "lagom" (balanced approach) with Bengaluru\'s "jugaad" (innovative improvisation) - the time difference naturally accommodates both systematic planning and adaptive execution.',
  },
  {
    title: 'Garden City to Green City',
    description:
      "Leverage Stockholm's sustainable urban planning expertise during Bengaluru's extended afternoon hours - perfect for environmental tech collaborations that address both Nordic and Indian climate challenges.",
  },
];

const faqs = [
  {
    question:
      'Why is the time difference between Stockholm and Bengaluru not a whole number?',
    answer:
      'India uses UTC+5:30, established in 1906 based on the 82.5°E meridian, while Stockholm uses UTC+1 (UTC+2 in summer). This creates a precise 3.5-hour difference in winter and 4.5 hours in summer.',
  },
  {
    question:
      'What are the optimal meeting times for Stockholm-Bengaluru tech collaborations?',
    answer:
      'The innovation golden hours are Stockholm 09:00-11:30 (Bengaluru 13:30-16:00) for real-time problem-solving. For knowledge transfer, use Stockholm 15:00-17:00 (Bengaluru 19:30-21:30) to maximize the continuous workday.',
  },
  {
    question: 'How does daylight saving time impact deep tech collaborations?',
    answer:
      'When Stockholm switches to CEST (UTC+2) in March, the time gap increases to 4.5 hours. This extends afternoon overlap but requires adjusting scrum ceremonies to maintain rhythm for distributed teams.',
  },
  {
    question: 'What makes the Stockholm-Bengaluru tech corridor unique?',
    answer:
      "This corridor connects Stockholm's impact tech and sustainability focus with Bengaluru's scale and software excellence. The 3.5-hour difference enables same-day iteration while preserving focused work time for both hubs.",
  },
  {
    question: 'How can climate tech startups leverage this time difference?',
    answer:
      'Use Stockholm mornings for strategic sustainability planning and Bengaluru afternoons for technical implementation. The partial-hour gap allows for rapid prototyping while maintaining work-life balance across time zones.',
  },
];

const links = [
  {
    name: 'Berlin → São Paulo',
    path: `/${PATHS.timezoneFromBerlinToSaoPaulo}`,
  },
  { name: 'London → Delhi', path: `/${PATHS.timezoneFromLondonToDelhi}` },
  {
    name: 'Frankfurt → Singapore',
    path: `/${PATHS.timezoneFromFrankfurtToSingapore}`,
  },
  {
    name: 'Zurich → Hong Kong',
    path: `/${PATHS.timezoneFromZurichToHongKong}`,
  },
  {
    name: 'Istanbul → Bangkok',
    path: `/${PATHS.timezoneFromIstanbulToBangkok}`,
  },
];

const howItWorks = [
  'Converts between Europe/Stockholm (CET/CEST) and Asia/Kolkata (IST) IANA timezones',
  'Precisely calculates the 3.5-hour winter difference (UTC+1 to UTC+5:30) and 4.5-hour summer difference (UTC+2 to UTC+5:30)',
  "Automatically adjusts for Sweden's EU-mandated DST transitions between UTC+1 and UTC+2",
  "Maintains India's consistent UTC+5:30 offset established in 1906",
  'Handles complex partial-hour arithmetic with minute-level precision for critical tech deployments',
  "Incorporates historical context from Bengaluru's transformation from garden city to tech capital",
];

const ssData = {
  text: 'Master the 3.5-hour innovation corridor between Stockholm and Bengaluru - perfect for sustainable tech, agile development, and impact startup collaboration.',
  hashtags: 'Stockholm,Bengaluru,TimeZone',
  title: 'Stockholm to Bengaluru Time Converter - Sustainable Tech Corridor',
};

const title = 'Stockholm to Bengaluru Time (CET to IST)';
const description =
  '3.5-hour innovation corridor! Convert Stockholm-Bengaluru time for sustainable tech & agile development between impact hubs.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Precise partial-hour time conversion between Stockholm and Bengaluru',
      'Daylight saving time adjustments for CET/CEST',
      'Agile development and sustainable tech optimization',
      'Deep tech research coordination tools',
      'Historical timezone evolution context',
    ],
    steps: [
      {
        name: 'Set Stockholm as origin timezone',
        description:
          'Input Stockholm location or select Europe/Stockholm IANA timezone with sustainable tech context',
      },
      {
        name: 'Add Bengaluru as destination',
        description:
          'Select Asia/Kolkata for precise Indian Standard Time conversion',
      },
      {
        name: 'Analyze partial-hour innovation gap',
        description:
          'Review the unique 3.5 to 4.5 hour difference optimization for tech collaboration',
      },
      {
        name: 'Optimize sustainable workflows',
        description:
          'Leverage time segments for agile sprints and impact tech development cycles',
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
  head: 'Stockholm to Bengaluru Time Converter',
  subHead:
    "Bridge Europe's impact tech hub with India's Silicon Valley using precision time coordination for sustainable innovation, agile development, and deep tech research",
  featuresHead: 'Advanced Tools for Impact Tech Coordination',
  tipsHead: 'Expert Insights for Sustainable Innovation Collaboration',
  faqsHead: 'Stockholm-Bengaluru Innovation Corridor Deep Dive',
  linksHead: 'European Cities to Asian Metropolises',
  howItWorksHead: 'Precision Partial-Hour Time Technology',
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
    originTimeZone: 'Stockholm@@Europe/Stockholm',
    destinationTimeZone: 'Bengaluru@@Asia/Kolkata',
  },
});
