import {
  FaPlaneDeparture,
  FaClock,
  FaFilePdf,
  FaLightbulb,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { TbWorld } from 'react-icons/tb';
import { PATHS } from '@/paramsData';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: (
      <FaRegCalendarAlt
        className={styles.stepIcon}
        aria-label="Set trip times"
      />
    ),
    title: 'Enter trip details',
    description:
      'Tell the planner your departure & arrival cities, flight times, and typical sleep/wake hours so the plan matches your routine.',
  },
  {
    icon: (
      <GiSandsOfTime className={styles.stepIcon} aria-label="Choose timeline" />
    ),
    title: 'Pick a timeline',
    description:
      'Select "After Departure", "After Arrival", or "Days Until Departure" to shape whether the plan shifts you before, during, or after travel.',
  },
  {
    icon: <FaLightbulb className={styles.stepIcon} aria-label="View plan" />,
    title: 'Follow a day-by-day plan',
    description:
      'Get a science-based, hour-by-hour schedule for light, sleep, naps, and caffeine to steadily move your body clock toward San Francisco time.',
  },
  {
    icon: <FaFilePdf className={styles.stepIcon} aria-label="Download PDF" />,
    title: 'Save or share your plan',
    description:
      'Export the tailored plan as a PDF for offline use or to share with travel companions and teammates.',
  },
];

const features = [
  {
    icon: (
      <FaPlaneDeparture
        className={styles.featureIcon}
        aria-label="Trip-aware scheduling"
      />
    ),
    title: 'Trip-aware scheduling',
    description:
      'Plans account for your exact departure and arrival times so guidance fits the real flight windows and layovers.',
  },
  {
    icon: (
      <FaClock
        className={styles.featureIcon}
        aria-label="Science-backed routines"
      />
    ),
    title: 'Science-backed routines',
    description:
      'Daily recommendations are based on circadian science: timed light exposure, melatonin-friendly sleep windows, and strategic naps.',
  },
  {
    icon: <TbWorld className={styles.featureIcon} aria-label="PDF export" />,
    title: 'PDF export & portability',
    description:
      'Download a neat PDF of your personalized schedule — perfect for long flights, team trips, or packing into a travel folder.',
  },
];

const tips = [
  {
    title: 'Respect the 12.5-hour shift',
    description:
      'Bengaluru is roughly 12½ hours ahead of San Francisco — plan to shift sleep in half-day chunks rather than trying a full flip overnight.',
  },
  {
    title: 'Use morning light in SF, evening light in Bengaluru',
    description:
      'If you arrive in San Francisco, seek bright morning light to anchor an earlier day; if prepping in Bengaluru, evening light helps delay your clock.',
  },
  {
    title: 'Split long flights with planned naps',
    description:
      'A single long sleep on the plane can confuse your rhythm — short strategic naps timed by the plan work better than one long try at sleep.',
  },
  {
    title: 'Time caffeine to support, not sabotage',
    description:
      'Use caffeine in the planner’s recommended windows to improve alertness; avoid it close to planned sleep periods.',
  },
];

const faqs = [
  {
    question:
      'How big is the time difference between Bengaluru and San Francisco?',
    answer:
      'Bengaluru is about 12 hours 30 minutes ahead of San Francisco (so a midday in Bengaluru is often an early morning in SF). Use the planner to visualize the exact offset for your travel dates.',
  },
  {
    question: 'Can I reduce jet lag if I have only one day before departure?',
    answer:
      'Yes — choose "Days Until Departure" and the planner will compress recommendations into the available time with conservative steps to avoid sleep debt.',
  },
  {
    question:
      'Does the planner consider overnight layovers or multi-leg flights?',
    answer:
      'Yes — enter each leg’s departure/arrival times and the planner incorporates layovers into the day-by-day schedule so timing stays realistic.',
  },
  {
    question: 'Is the PDF schedule editable?',
    answer:
      'The PDF is a snapshot of your personalized plan. You can re-generate it quickly after adjusting inputs if your itinerary changes.',
  },
];

const links = [
  {
    name: 'San Francisco → Tokyo',
    path: `/${PATHS.jetLagFromSanFranciscoToTokyo}`,
  },
  {
    name: 'San Francisco → Sydney',
    path: `/${PATHS.jetLagFromSanFranciscoToSydney}`,
  },
  {
    name: 'Shanghai → San Francisco',
    path: `/${PATHS.jetLagFromShanghaiToSanFrancisco}`,
  },
  { name: 'Mumbai → London', path: `/${PATHS.jetLagFromMumbaiToLondon}` },
  { name: 'Dubai → Singapore', path: `/${PATHS.jetLagFromDubaiToSingapore}` },
  { name: 'Berlin → Bangkok', path: `/${PATHS.jetLagFromBerlinToBangkok}` },
];

const howItWorks = [
  'Takes your local sleep/wake pattern and target timezone to compute gradual shifts.',
  'Uses timed light exposure and sleep windows aligned to circadian phase-shifting evidence.',
  'Applies strategic naps and controlled caffeine timing to maintain daytime function.',
  'Provides a downloadable plan so you can use the guidance on the go.',
];

const ssData = {
  text: 'Beat jet lag on Bengaluru → San Francisco trips with a personalized, science-backed schedule. Download as PDF!',
  hashtags: 'JetLag,TravelHacks,Sleep',
  title: 'Bengaluru → San Francisco Jet Lag Plan',
};

const title = 'Bengaluru → San Francisco Jet Lag Planner';
const description =
  'Tailored, science-based day-by-day plan for the ~12.5h time difference between Bengaluru and San Francisco. Personalized schedules + PDF export.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: ['HealthApplication', 'TravelApplication'],
    name: title,
    description,
    featureList: [
      'Personalized circadian adjustment schedule',
      'Trip-aware timing with layover support',
      'PDF export of the day-by-day plan',
    ],
    steps: [
      {
        name: 'Enter trip details',
        description:
          'Provide departure/destination times and usual sleep schedule.',
      },
      {
        name: 'Choose timeline',
        description:
          'Decide whether to shift before departure, after arrival, or both.',
      },
      {
        name: 'Follow plan',
        description:
          'Implement timed light, sleep, nap, and caffeine guidance.',
      },
      {
        name: 'Export',
        description: 'Download the plan as a PDF for offline use.',
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
  head: 'Beat the Bengaluru → San Francisco clock',
  subHead:
    'Personalized, science-based jet lag plans that match your itinerary and routine.',
  featuresHead: 'Why this planner helps',
  tipsHead: 'Route-specific tips',
  faqsHead: 'FAQs about Bengaluru ↔ San Francisco travel',
  linksHead: 'India to US West Coast',
  howItWorksHead: 'How the planner works',
  steps,
  features,
  tips,
  faqs,
  links,
  howItWorks,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {
    departureTZ: 'Bengaluru@@Asia/Kolkata',
    destinationTZ: 'San Francisco@@America/Los_Angeles',
    flightDuration: 4,
  },
});
