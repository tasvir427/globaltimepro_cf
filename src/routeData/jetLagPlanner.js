import {
  FaAdjust,
  FaBed,
  FaFilePdf,
  FaHourglassHalf,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaSearchLocation,
  FaSun,
} from 'react-icons/fa';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Search Departure City"
      />
    ),
    title: 'Step 1: Choose Your Departure City Accurately:',
    description:
      'Start by searching and selecting your departure city from our easy-to-use menu. This ensures a precise start for calculating time differences, travel durations, and setting up your scientifically-derived, day-by-day recovery schedule.',
  },
  {
    icon: (
      <FaSearchLocation
        className={styles.stepIcon}
        aria-label="Search Destination City"
      />
    ),
    title: 'Step 2: Select Your Arrival City with Confidence:',
    description:
      'Next, search for and choose your destination city. Our tool precisely maps your city to its time zone, which is critical for building your custom jet lag recovery plan using evidence-based methods and day-wise sleep adjustments.',
  },
  {
    icon: (
      <FaPlaneDeparture
        className={styles.stepIcon}
        aria-label="Departure Time"
      />
    ),
    title: 'Step 3: Enter Your Departure Time:',
    description:
      'Input your departure time accurately from your chosen location. This timestamp is key to calculating the journey’s duration and determining the ideal timing for your personalized, science-based jet lag countermeasures.',
  },
  {
    icon: (
      <FaPlaneArrival className={styles.stepIcon} aria-label="Arrival Time" />
    ),
    title: 'Step 4: Provide Your Expected Arrival Time:',
    description:
      'Enter your expected arrival time at the destination. Using your travel times, our tool designs a day-wise schedule that outlines exact sleep and wake adjustments, ensuring your biological clock resets naturally.',
  },
  {
    icon: <FaBed className={styles.stepIcon} aria-label="Usual Bed Time" />,
    title: 'Step 5: Record Your Regular Bedtime Routine:',
    description:
      'Share your usual sleep schedule to help us craft customized sleep strategies. The tool tailors scientifically-backed recommendations to help you get quality rest and minimize travel fatigue day by day.',
  },
  {
    icon: <FaSun className={styles.stepIcon} aria-label="Usual Wake-up Time" />,
    title: 'Step 6: Note Your Standard Wake-up Time:',
    description:
      'Let us know your regular wake-up time. This information is vital in adjusting your sleep-wake cycle so that your internal clock adapts smoothly to the new time zone with our step-by-step recovery plan.',
  },
  {
    icon: (
      <FaHourglassHalf
        className={styles.stepIcon}
        aria-label="Select Timeline"
      />
    ),
    title: 'Step 7: Select Your Optimization Timeline:',
    description:
      'Decide how far in advance you want to start preparing. You can opt for departure time adjustments, arrival-based scheduling, or a custom “days until departure” plan. This enables our tool to generate a detailed, day-wise regimen for overcoming jet lag naturally and scientifically.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Export PDF" />,
    title: 'Step 8: Export Your Personalized Jet Lag Plan as PDF:',
    description:
      'After generating your optimized schedule, use our one-click PDF export to save or print your plan. This portable format lets you access your day-by-day recovery strategy offline, share it with travel companions, or easily reference it during your journey.',
  },
];

const features = [
  {
    icon: (
      <FaAdjust
        className={styles.featureIcon}
        aria-label="Smart Sleep Strategy"
      />
    ),
    title: 'Smart Sleep Strategy:',
    description:
      'Leverage your travel data to generate a personalized, day-by-day sleep schedule. Get scientifically tested recommendations for sleep, light exposure, and activity.',
  },
  {
    icon: (
      <FaAdjust className={styles.featureIcon} aria-label="DST Consideration" />
    ),
    title: 'Daylight Saving Time Adjustments:',
    description:
      'Automatically adjust for regional DST shifts in your recovery plan. Our tool factors in all DST changes for a seamless journey.',
  },
];

const tips = [
  {
    title: 'The "Flight Direction" Advantage',
    description:
      'Eastbound travel disrupts circadian rhythms more than westbound due to forcing your body to "advance" time. Start shifting sleep 3 days pre-flight: for eastbound, wake up 1 hour earlier daily; for westbound, stay up 1 hour later. This mimics natural adaptation, reducing recovery time.',
  },
  {
    title: 'Meal Timing as a Time Zone Hack',
    description:
      'Fasting for 12-16 hours before arrival resets your "food clock," a lesser-known circadian trigger. Eat your first meal at breakfast time in your destination—studies show this accelerates adaptation by syncing metabolism with local time.',
  },
  {
    title: 'The Layover Loophole',
    description:
      'A strategic layover in a mid-point time zone (e.g., Iceland for US→Europe trips) lets your body adjust incrementally. Even 8 hours in a neutral zone reduces the shock of a sudden 6+ hour jump, especially for sensitive travelers.',
  },
  {
    title: 'Cabin Pressure’s Hidden Impact',
    description:
      'Low oxygen at high altitudes mimics hypoxia, worsening jet lag. Hydrate aggressively (1L water per 3 flight hours) and avoid alcohol—dehydration amplifies hypoxia’s effects, making circadian adjustment harder post-landing.',
  },
];

const faqs = [
  {
    question: 'Why does jet lag feel worse after red-eye flights?',
    answer:
      'Red-eyes disrupt two critical circadian cues: light (forcing wakefulness in darkness) and meal timing (delaying breakfast). Use amber glasses to block cabin blue light 2 hours before landing, and eat a protein-rich meal upon waking to reset your clock.',
  },
  {
    question: 'Can you "pre-load" jet lag adjustments for multi-stop trips?',
    answer:
      'Yes. For trips like NYC→Dubai→Singapore, align adjustments to your *final* destination first. Mimic Dubai’s time zone en route to NYC, then shift to Singapore’s during the layover. This avoids double adaptation.',
  },
  {
    question: 'Do age or gender affect jet lag recovery?',
    answer:
      'Studies show adults over 50 adapt 20-30% slower due to declining melatonin production. Women may recover faster during follicular menstrual phases (higher estrogen aids circadian flexibility). Adjust strategies accordingly.',
  },
  {
    question: 'How does temperature reset circadian rhythms?',
    answer:
      'Cold showers or warm baths timed to your destination’s morning/evening can trick your body. A 10-minute cold plunge at 7 AM local time boosts cortisol (wakefulness), while a warm bath at 9 PM mimics melatonin release.',
  },
];

const links = [
  { name: 'Mumbai → London', path: `/${PATHS.jetLagFromMumbaiToLondon}` },
  {
    name: 'Sydney → Los Angeles',
    path: `/${PATHS.jetLagFromSydneyToLosAngeles}`,
  },
  {
    name: 'New York → London',
    path: `/${PATHS.jetLagFromNewYorkToLondon}`,
  },
  { name: 'Tokyo → Paris', path: `/${PATHS.jetLagFromTokyoToParis}` },
  {
    name: 'Los Angeles → Sydney',
    path: `/${PATHS.jetLagFromLosAngelesToSydney}`,
  },
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  { name: 'London → Dubai', path: `/${PATHS.jetLagFromLondonToDubai}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
  {
    name: 'San Francisco → Paris',
    path: `/${PATHS.jetLagFromSanFranciscoToParis}`,
  },
  { name: 'Paris → New York', path: `/${PATHS.jetLagFromParisToNewYork}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Toronto → Tokyo', path: `/${PATHS.jetLagFromTorontoToTokyo}` },
  {
    name: 'São Paulo → Frankfurt',
    path: `/${PATHS.jetLagFromSaoPauloToFrankfurt}`,
  },
  { name: 'Chicago → Rome', path: `/${PATHS.jetLagFromChicagoToRome}` },
  { name: 'London → Singapore', path: `/${PATHS.jetLagFromLondonToSingapore}` },
  { name: 'Dubai → Sydney', path: `/${PATHS.jetLagFromDubaiToSydney}` },
  { name: 'New York → Tokyo', path: `/${PATHS.jetLagFromNewYorkToTokyo}` },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  { name: 'Paris → Tokyo', path: `/${PATHS.jetLagFromParisToTokyo}` },
  {
    name: 'Shanghai → San Francisco',
    path: `/${PATHS.jetLagFromShanghaiToSanFrancisco}`,
  },
  {
    name: 'Singapore → London',
    path: `/${PATHS.jetLagFromSingaporeToLondon}`,
  },
  { name: 'Dubai → New York', path: `/${PATHS.jetLagFromDubaiToNewYork}` },
  {
    name: 'Bengaluru → San Francisco',
    path: `/${PATHS.jetLagFromBengaluruToSanFrancisco}`,
  },
  { name: 'London → Tokyo', path: `/${PATHS.jetLagFromLondonToTokyo}` },
  { name: 'New York → Sydney', path: `/${PATHS.jetLagFromNewYorkToSydney}` },
  { name: 'Cairo → Beijing', path: `/${PATHS.jetLagFromCairoToBeijing}` },
  { name: 'Reykjavik → Tokyo', path: `/${PATHS.jetLagFromReykjavikToTokyo}` },
  { name: 'Honolulu → Dubai', path: `/${PATHS.jetLagFromHonoluluToDubai}` },
  {
    name: 'Anchorage → Singapore',
    path: `/${PATHS.jetLagFromAnchorageToSingapore}`,
  },
  {
    name: 'Mexico City → Seoul',
    path: `/${PATHS.jetLagFromMexicoCityToSeoul}`,
  },
];

const howItWorks = [
  <>
    <strong>
      <a
        href="https://www.npmjs.com/package/city-timezones"
        target="_blank"
        rel="noopener noreferrer"
      >
        city-timezones
      </a>
    </strong>
    : Maps city names to their exact time zones, forming the backbone of your
    tailored schedule.
  </>,
  <>
    {' '}
    <strong>
      <a
        href="https://www.npmjs.com/package/react-datetime-picker"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-datetime-picker
      </a>
    </strong>
    : A user-friendly interface that helps you select precise travel dates and
    times.
  </>,
  <>
    {' '}
    <strong>
      <a
        href="https://momentjs.com/timezone/"
        target="_blank"
        rel="noopener noreferrer"
      >
        moment-timezone
      </a>
    </strong>
    : Facilitates complex time zone conversions with accuracy—ensuring your
    day-wise recovery plan is spot on.
  </>,
  <>
    {' '}
    <strong>
      <a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">
        moment
      </a>
    </strong>
    : Provides deep date and time manipulation, critical for building robust
    travel schedules.
  </>,
];

const ssData = {
  text: 'Beat jet lag with this smart optimization tool! Plan your travels and adjust your schedule effectively. ✈️😎',
  hashtags: 'JetLag,TravelHacks',
  title: 'Jet Lag Planner',
};

const title = 'Instant Jet Lag Planner – Day-by-Day Recovery Guide';
const description =
  'Get a day-by-day recovery plan for jet lag—with sleep schedule adjustments and tips to adapt smoothly to new time zones.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Accurate departure & arrival timezone mapping',
      'Science-backed day-by-day recovery schedules',
      'Customizable preparation timeline options',
      'Integration of your regular sleep/wake routines',
      'One-click PDF export of personalized plans',
      'Intuitive date-time picker for precise inputs',
      'Evidence-based circadian adjustment tips',
      'Transparent open-source library stack',
    ],
    steps: [
      {
        name: 'Step 1: Choose Your Departure City Accurately',
        description:
          'Search and select your departure city to ensure precise calculation of time differences, travel durations, and setup of your customized, day-by-day recovery schedule.',
      },
      {
        name: 'Step 2: Select Your Arrival City with Confidence',
        description:
          'Search for and choose your destination city, which our tool maps precisely to its timezone—critical for crafting your tailored jet lag recovery plan.',
      },
      {
        name: 'Step 3: Enter Your Departure Time',
        description:
          'Input your exact departure timestamp to calculate journey duration and determine optimal timings for science-based countermeasures.',
      },
      {
        name: 'Step 4: Provide Your Expected Arrival Time',
        description:
          'Enter your anticipated arrival time so the tool can generate a detailed, day-wise sleep and wake adjustment schedule for natural circadian reset.',
      },
      {
        name: 'Step 5: Record Your Regular Bedtime Routine',
        description:
          'Share your usual sleep schedule to help us tailor scientifically-backed recommendations for quality rest and minimized travel fatigue.',
      },
      {
        name: 'Step 6: Note Your Standard Wake-up Time',
        description:
          'Provide your regular wake-up time so the plan can adjust your sleep-wake cycle smoothly to the new timezone.',
      },
      {
        name: 'Step 7: Select Your Optimization Timeline',
        description:
          'Choose how far in advance to begin: departure-based, arrival-based, or a custom “days-until-departure” plan for a fully detailed regimen.',
      },
      {
        name: 'Step 8: Export Your Personalized Jet Lag Plan as PDF',
        description:
          'Use our one-click PDF export to save or print your optimized schedule—perfect for offline access and sharing with travel companions.',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.jl.json',
  });
};

export const getData = (page) => ({
  head: 'Jet Lag Planner - Your Ultimate, Science-Backed Travel Recovery Planner',
  subHead:
    'Whether you’re asking, “How can I recover from jet lag?” or “What are the best ways to adjust to a new time zone?”, our tool offers rare, research-based solutions to redefine your travel experience. With a day-by-day personalized schedule, cutting-edge sleep science, and precise time zone calculations, we empower you to beat jet lag naturally and maximize your performance upon landing.',
  featuresHead:
    'Advanced Features for a Scientifically Proven, Seamless Travel Experience',
  tipsHead: 'Jet Lag Recovery Tips: Evidence‑Based Strategies',
  faqsHead: 'Jet Lag FAQs: Causes, Solutions & Expert Advice',
  linksHead: 'Common Jet Lag Routes',
  howItWorksHead: 'How Our Jet Lag Planner Works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {},
});
