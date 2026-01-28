import { FaCube, FaDownload, FaFileAlt, FaListAlt } from 'react-icons/fa';
import { getMeta, getSchema } from '@/utils';
import styles from '@/utils.module.css';

const steps = [
  {
    icon: <FaListAlt className={styles.stepIcon} aria-label="Select Fields" />,
    title: 'Select Your Fields:',
    description:
      'Choose the data columns you need: IANA timezone name, abbreviation, alternative name, country name, country code, and offset. Defaults cover most use cases.',
  },
  {
    icon: (
      <FaFileAlt className={styles.stepIcon} aria-label="Choose File Type" />
    ),
    title: 'Choose File Type:',
    description:
      'Pick between JSON, CSV (Spreadsheet), or Excel output. Filenames include a timestamp for versioning.',
  },
  {
    icon: <FaDownload className={styles.stepIcon} aria-label="Download Data" />,
    title: 'Download & Integrate:',
    description:
      'Click "Download Now" to generate your file. Offsets are provided in minutes or hours for precise scheduling.',
  },
];

const features = [
  {
    icon: (
      <FaCube className={styles.featureIcon} aria-label="Field Normalization" />
    ),
    title: 'Data Cleaning & Normalization:',
    description:
      'We merge IANA and curated lists, normalize field keys, and ensure country names and codes use ISO standards.',
  },
  {
    icon: (
      <FaCube className={styles.featureIcon} aria-label="Offset Inclusion" />
    ),
    title: 'Precise Offsets in Minutes or Hours:',
    description:
      'Offsets in minutes or hours are calculated per IANA data and included as-is, giving you the most precise values.',
  },
];

const tips = [
  {
    title: 'Use IANA Names for Precision',
    description:
      'Always include the IANA timezone identifier for unambiguous mapping in your applications.',
  },
  {
    title: 'Abbreviations & Alt Names',
    description:
      'Include both official abbreviations and alternative labels for clear display in UIs.',
  },
  {
    title: 'Offset in Minutes or Hours for Accuracy',
    description:
      'Working with raw minute offsets ensures exact scheduling calculations without rounding errors.',
  },
];

const faqs = [
  {
    question: 'Can I download only specific regions?',
    answer:
      'Yes—select only the timezones you need by checkbox to keep your file focused and lightweight.',
  },
  {
    question: 'How are offsets represented?',
    answer:
      'Offsets are provided as raw minute values for precise integration into any scheduling system.',
  },
];

const ssData = {
  text: 'Quickly download a clean, accurate timezone list with IANA names, offsets, and countries. Great for developers and schedulers alike! 🗂️🕓',
  hashtags: 'TimeZones,DataTools',
  title: 'Download Timezone List',
};

const title = 'Download Timezone List as CSV (Spreadsheet), JSON, or Excel';
const description =
  'Download IANA timezone data including identifiers, country details, abbreviations, and minute based UTC offsets in JSON, CSV, or Excel format.';

const schemaData = (page) => {
  return getSchema({
    page,
    applicationCategory: 'Utilities',
    name: title,
    description,
    featureList: [
      'Customizable field selection: IANA name, abbreviation, alternative name, country name, country code, offset in minutes or hours',
      'JSON, CSV (Spreadsheet), and Excel download options',
      'Lightweight and shareable dataset tailored to your needs',
    ],
    steps: [
      {
        name: 'Select Your Fields',
        description:
          'Choose IANA name, abbreviation, alternativeName, countryName, countryCode, and offset via checkboxes.',
      },
      {
        name: 'Choose File Type',
        description:
          'Select either JSON, CSV (Spreadsheet), or Excel format for your download.',
      },
      {
        name: 'Download Your Data',
        description:
          'Click the Download button to generate a file with precise offsets in minutes or hours.',
      },
    ],
  });
};

export const metaData = (page) => {
  return getMeta({
    page,
    title,
    description,
    manifest: '/manifest.dl.json',
  });
};

export const getData = (page) => ({
  head: 'Download Custom Timezone Data',
  subHead:
    'Export IANA timezone data—including names, abbreviations, country info, and offsets in minutes or hours—as JSON or Excel.',
  featuresHead: 'Key Features for Quality Data',
  tipsHead: 'Best Practices',
  faqsHead: 'FAQs',
  steps,
  features,
  tips,
  faqs,
  ssData,
  schemaData: schemaData(page),
  defaultValue: {},
});
