import React from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames';
import JSZip from 'jszip';
import {
  FaClock,
  FaBed,
  FaSun,
  FaBook,
  FaBan,
  FaRunning,
  FaUtensils,
  FaTint,
  FaPlane,
  FaPills,
  FaThermometerHalf,
  FaRegLightbulb,
  FaExclamationTriangle,
  FaFish,
  FaHamburger,
  FaCoffee,
  FaMoon,
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaRegCalendarAlt,
  FaChartLine,
  FaCalendar,
  FaFlask,
  FaRegClock,
  FaChevronDown,
} from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { GiSandsOfTime } from 'react-icons/gi';
import { FaXTwitter, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import {
  FiArrowUp,
  FiGlobe,
  FiClock,
  FiCalendar,
  FiInfo,
  FiAlertTriangle,
  FiCornerUpLeft,
} from 'react-icons/fi';
import { MdContentCopy } from 'react-icons/md';
import { RiDeleteBin6Line, RiResetLeftLine } from 'react-icons/ri';
import { PiSwapFill, PiExportLight, PiAirplaneTakeoff } from 'react-icons/pi';
import { TbWorldQuestion } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { IoMdUndo, IoMdRedo } from 'react-icons/io';
import { PATHS, PATHS_REVERSE } from '@/paramsData';
import timezones from '@/generated/timezones';
import styles from '@/utils.module.css';

const COUNTRIES = moment.tz.countries();
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const countryOptions = (() => {
  return COUNTRIES.map((code) => {
    const label = regionNames.of(code) || code;
    return { value: code, label };
  }).sort((a, b) => a.label.localeCompare(b.label, 'en'));
})();

const combineShortNames = (data) => {
  const { hasDst, standardAbbreviation, dstAbbreviation } = data;
  return hasDst
    ? `${standardAbbreviation}/${dstAbbreviation}`
    : standardAbbreviation;
};

const formatLabels = (...strings) => {
  const filtered = strings.filter(Boolean);
  return filtered.length ? filtered.join(' • ') : '';
};

const primaryTZOptText = (data, withCountry) => {
  const { type, timezone, city, countryName } = data;
  let str1, str2;

  if (type === 'name') {
    str1 = timezone;
  }

  if (type === 'abbreviation') {
    str1 = combineShortNames(data);
  }

  if (type === 'city') {
    str1 = city;
  }

  if (withCountry) {
    str2 = countryName;
  }

  return formatLabels(str1, str2);
};

const secondaryTZOptText = (data) => {
  const {
    type,
    timezone,
    standardLongName,
    alternativeName,
    continentName,
    province,
  } = data;
  let str1, str2, str3, str4;

  if (type === 'name') {
    str1 = combineShortNames(data);
    str2 = alternativeName || standardLongName;
    str3 = continentName;
  }

  if (type === 'abbreviation') {
    str1 = alternativeName || standardLongName;
    str2 = timezone;
  }

  if (type === 'city') {
    str1 = combineShortNames(data);
    str2 = alternativeName || standardLongName;
    str3 = province;
    str4 = timezone;
  }

  return formatLabels(str1, str2, str3, str4);
};

const isTZDST = (tz) => {
  if (!tz) return false;

  const { timezone, hasDst, standardOffset, dstOffset } = tz;
  if (!hasDst) return false;

  const currentMoment = moment.tz(timezone);
  if (currentMoment.isDST()) return true;

  const currentOffset = currentMoment.utcOffset();
  return currentOffset === dstOffset && standardOffset !== dstOffset;
};

const getTZInfo = (originTimeZone) => {
  if (!originTimeZone) return;

  const {
    timezone,
    countryName,
    countryCode,
    hasDst,
    standardAbbreviation,
    standardLongName,
    dstAbbreviation,
    dstLongName,
  } = originTimeZone;

  let abbreviation = standardAbbreviation;
  let longName = standardLongName;

  if (hasDst) {
    const isDST = isTZDST(originTimeZone);

    if (isDST) {
      abbreviation = dstAbbreviation;
      longName = dstLongName;
    }
  }

  return {
    timezone,
    abbreviation: `${abbreviation || ''} ${longName ? `(${longName})` : ''}`,
    countryName: `${countryCode || ''} ${
      countryName ? `(${countryName})` : ''
    }`,
  };
};

const checkFields = [
  'city',
  'province',
  'timezone',
  'observesDst',
  'currentDSTStatus',
  'currentAbbreviation',
  'currentLongName',
  'currentOffset',
  'countryName',
  'countryCode',
  'standardAbbreviation',
  'standardLongName',
  'standardOffset',
  'dstAbbreviation',
  'dstLongName',
  'dstOffset',
  'identifiers',
  'upcomingDSTChange',
];

const getAbbrevKey = (tz) => {
  const { countryCode, standardOffset, dstOffset } = tz;
  return `${countryCode || ''}${standardOffset}${dstOffset || ''}`;
};

const getTZList = ({ fieldChecks, countries, offsetIn }) => {
  const now = Date.now();
  const countrySet = Array.isArray(countries) ? new Set(countries) : new Set();
  const seen = new Set();
  const arr = [];

  const isTimezone = fieldChecks['timezone'];
  const isCity = fieldChecks['city'];
  const isProvince = fieldChecks['province'];
  const currentAbbreviation = fieldChecks['currentAbbreviation'];
  const currentLongName = fieldChecks['currentLongName'];
  const currentOffset = fieldChecks['currentOffset'];
  const currentDSTStatus = fieldChecks['currentDSTStatus'];
  const upcomingDSTChange = fieldChecks['upcomingDSTChange'];
  const isInMinutes = offsetIn === offsetOptions[0];

  for (const timezone in timezones) {
    const tz = timezones[timezone];
    if (
      countries.length &&
      !isCity &&
      !isProvince &&
      !countrySet.has(tz.countryCode)
    ) {
      continue;
    }

    const abbrevKey = getAbbrevKey(tz);
    if (!isCity && !isProvince && !isTimezone && seen.has(abbrevKey)) {
      continue;
    }

    const { cities, ...restTZ } = tz;
    const obj = {
      timezone,
      observesDst: restTZ.hasDst ? 'Yes' : 'No',
      ...restTZ,
    };

    if (!isInMinutes) {
      obj.standardOffset = minutesToHourString(obj.standardOffset);
      obj.dstOffset = minutesToHourString(obj.dstOffset);
    }

    let isDST = -1;

    if (upcomingDSTChange) {
      if (restTZ.hasDst) {
        isDST = isTZDST({ timezone, ...restTZ });
        const currentTZTime = moment.tz(now, timezone);
        const nextTransitionData = getNextTransition(timezone, currentTZTime);
        const transitionType = getTransitionType(nextTransitionData, isDST);
        const nextTransitionText = getNextTransitionText(nextTransitionData);
        const nextTransitionISOString =
          getNextTransitionISOString(nextTransitionData);
        const nextTransitionOffset =
          getNextTransitionOffset(nextTransitionData);

        obj.upcomingDSTChange = `${transitionType} on ${nextTransitionText} (UTC${minutesToHourString(
          isDST ? restTZ.dstOffset : restTZ.standardOffset,
        )} to UTC${nextTransitionOffset})`;
        obj.upcomingDSTChangeAt = nextTransitionISOString;
      } else {
        obj.upcomingDSTChange = 'DST not observed';
      }
    }

    if (
      currentAbbreviation ||
      currentLongName ||
      currentOffset ||
      currentDSTStatus
    ) {
      if (restTZ.hasDst) {
        isDST = isDST === -1 ? isTZDST({ timezone, ...restTZ }) : isDST;

        obj.currentAbbreviation = isDST
          ? restTZ.dstAbbreviation
          : restTZ.standardAbbreviation;
        obj.currentLongName = isDST
          ? restTZ.dstLongName
          : restTZ.standardLongName;
        obj.currentOffset = isDST ? restTZ.dstOffset : restTZ.standardOffset;
        obj.currentDSTStatus = getCurrentDSTStatus(isDST);
      } else {
        obj.currentAbbreviation = restTZ.standardAbbreviation;
        obj.currentLongName = restTZ.standardLongName;
        obj.currentOffset = restTZ.standardOffset;
        obj.currentDSTStatus = getCurrentDSTStatus(false);
      }

      if (!isInMinutes) {
        obj.currentOffset = minutesToHourString(obj.currentOffset);
      }
    }

    if (isCity || isProvince) {
      if (cities?.length) {
        for (const c of cities) {
          const provinceData = { province: c.province };

          if (
            c.iso2 &&
            c.iso2 !== obj.countryCode &&
            !Number.isFinite(c.iso2)
          ) {
            provinceData.countryName = c.country;
            provinceData.countryCode = c.iso2;
          }

          if (
            countries.length &&
            !countrySet.has(provinceData.countryCode || tz.countryCode)
          ) {
            continue;
          }

          if (isCity) {
            arr.push({ ...obj, ...provinceData, city: c.city });
          } else {
            const provinceKey = `${c.province}@@${timezone}`;

            if (!seen.has(provinceKey)) {
              seen.add(provinceKey);
              arr.push({ ...obj, ...provinceData });
            }
          }
        }
      } else if (isTimezone) {
        if (!countries.length || countrySet.has(tz.countryCode)) {
          arr.push({ ...obj });
        }
      }
    } else if (isTimezone) {
      arr.push({ ...obj });
    } else {
      seen.add(abbrevKey);
      arr.push({ ...obj });
    }
  }

  const sortBy = isCity
    ? 'city'
    : isProvince
      ? 'province'
      : isTimezone
        ? 'timezone'
        : 'standardAbbreviation';
  return arr.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
};

const fileTypeOptions = [
  { label: 'JSON (.json)', value: 'json' },
  { label: 'CSV (Spreadsheet)', value: 'csv' },
  { label: 'Excel (.xlsx)', value: 'excel' },
];

const timeLineOptions = [
  { value: 'afterDeparture', label: 'After Departure' },
  { value: 'afterArrival', label: 'After Arrival' },
  { value: 'daysUntilDeparture', label: 'Days Until Departure' },
];

const natoMap = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  ':': 'colon',
};

const toNato = (input) => {
  let timeStr = String(input);

  const [h, m] = timeStr.split(':');
  const hh = h.padStart(2, '0');
  const mm = m.padStart(2, '0');
  timeStr = `${hh}:${mm}`;

  return timeStr
    .split('')
    .map((c) => natoMap[c] || c)
    .join(' ');
};

const timeFormatOptions = [
  { value: 'DD MMM YYYY HH:mm:ss', label: 'Day Month Year, Time (24-hour)' },
  { value: 'DD MMM YYYY h:mm:ss A', label: 'Day Month Year, Time (12-hour)' },
  { value: 'dddd, MMMM Do YYYY, h:mm:ss A', label: 'Full Date and Time' },
  { value: 'MM/DD/YYYY, h:mm A', label: 'Short Date and Time (US)' },
  { value: 'HH:mm:ss', label: 'Time Only (24-hour)' },
  { value: 'h:mm:ss A', label: 'Time Only (12-hour)' },
  { value: 'dddd, h:mm A', label: 'Day and Time' },
  {
    value: 'HH:mm (military-nato)',
    label: 'Military Time w/ NATO Phonetics',
  },
  { value: 'YYYY-MM-DD', label: 'ISO 8601 Date (Calendar)' },
  { value: 'YYYY-MM-DDTHH:mm:ssZ', label: 'ISO 8601 Date-Time (UTC)' },
  {
    value: 'YYYY-MM-DDTHH:mm:ssZZ',
    label: 'ISO 8601 Date-Time (Local Offset)',
  },
  { value: 'YYYY-DDD', label: 'ISO 8601 Ordinal Date (Day-of-Year)' },
  { value: 'GGGG-[W]WW-E', label: 'ISO 8601 Week Date (Week-Year-Weekday)' },
  { value: 'custom', label: 'Custom Format (enter your own)' },
];

const timezoneFormatOptions = [
  { label: 'By City (e.g., New York)', value: 'city' },
  {
    label: 'By Abbreviation (e.g., EST, PST)',
    value: 'abbreviation',
  },
  { label: 'By IANA (e.g., America/New_York)', value: 'name' },
];

const dayFormatOptions = ['12H', '24H'];

const offsetOptions = ['MINUTES', 'HOURS'];

const tooltips = {
  redo: '"Restore the last change you reverted to the time or timezone settings."',
  undo: '"Revert the last change you made to the time or timezone settings."',
  reset: '"Clear all inputs and reset the tool to its default state."',
  copy_result: '"Copy a sharable link with the current settings and results."',
  real_time:
    '"Toggle this switch to display the real-time clock of the selected destination time zones."',
  dayFormat:
    '"Choose between 12-hour (AM/PM) or 24-hour format for displaying the time."',
  originTime:
    '"Specify the date and time for the start time zone. The time will automatically convert to the selected end time zone"',
  timezoneFormat: `"Choose whether to select a timezone by its full name (e.g., 'America/New_York') or by its abbreviation (e.g., 'EST') or by city."`,
  timeZone: '"Select the time zone for the location or event."',
  originTimeZone: '"Select the time zone for the starting location or event."',
  current_origin: '"Automatically set your current location based on your IP."',
  destinationTimeZone:
    '"Select the time zone for the destination or other location."',
  current_destination:
    '"Automatically set your current location based on your IP."',
  timeFormat:
    '"Choose from various predefined formats to display the converted time, such as 24-hour or 12-hour formats, full date and time, or a custom format."',
  customTimeFormat: `"Enter a custom time format (e.g., 'HH:mm:ss'). Leave blank to use the default format."`,
  swap_tz: '"Click to swap this time zone with the Origin time zone."',
  copy_tz: '"Click to copy the converted time to your clipboard."',
  remove_tz: '"Click to remove this output time zone."',
  info_tz: '"See DST status, offset, country, and other timezone details."',
  jetlag_opt: '"Plan your sleep to reduce jet lag for this time zone."',
  departureTZ: '"Select the city for the departure location."',
  destinationTZ: '"Select the city for the destination location."',
  current_departure_city: '"Automatically set city based on your IP."',
  current_destination_city: '"Automatically set city based on your IP."',
  departureTime: '"Specify the date and time for the departure."',
  arrivalTime: '"Specify the date and time for the arrival."',
  bedTime: '"Specify usual bed time."',
  wakeTime: '"Specify usual wake-up time."',
  daysUntilDeparture: `"Enter number of days Until Departure (e.g., '2')."`,
  timeLine: '"Choose from Timeline options to display the schedule."',
  non_expanded_output: '"Expand to make the output easier to view"',
  expanded_output: '"Collapse output area to return to split view"',
  dl_city: 'City, e.g. New York',
  dl_province: 'Province, e.g. Texas',
  dl_timezone: 'IANA time zone. Example: America/New_York',
  dl_identifiers:
    'List of identifiers. Ex. of America/New_York: America/New_York, EST5EDT, US/Eastern',
  dl_standardAbbreviation: 'Short form used in standard time. Example: EST',
  dl_dstAbbreviation: 'Short form used in daylight saving time. Example: EDT',
  dl_currentAbbreviation: 'Short form currently in effect. Example: EDT',
  dl_currentLongName:
    'Full time zone name currently in effect. Example: Eastern Daylight Time',
  dl_standardLongName:
    'Full name used in standard time. Example: Eastern Standard Time',
  dl_dstLongName:
    'Full name used in daylight saving time. Example: Eastern Daylight Time',
  dl_countryName: 'Country name. Example: United States',
  dl_countryCode: 'ISO country code. Example: US',
  dl_standardOffset: 'Standard (non-DST) UTC offset. Example: -05:00',
  dl_dstOffset: 'UTC offset during DST. Example: -04:00',
  dl_currentOffset: 'Current UTC offset in effect now. Example: -04:00',
  dl_currentDSTStatus:
    'Current DST status. Example: DST Active or Standard Time',
  dl_observesDst: 'Does this zone ever use DST? Yes or No',
  dl_upcomingDSTChange:
    'The next time the timezone’s clock will change due to daylight saving time',
  dl_fileType: 'Choose download format: CSV, JSON, or Excel',
  dl_offsetIn:
    'How offsets are displayed: Minutes (e.g. 330) or Hours (e.g. +05:30)',
  country_select: 'Filter download by one or more countries',
};

const placeholders = {
  timezone: 'Select Timezone',
  timezoneFormat: 'Timezone format',
  departureTZ: 'Departure City',
  destinationTZ: 'Destination City',
  originTimeZone: 'Origin timezone',
  destinationTimeZone: 'Destination timezone',
  timeFormat: 'Output format',
  customTimeFormat: 'Enter custom format (e.g., MM/DD/YYYY HH:mm)',
  daysUntilDeparture: 'Enter number of days',
  timeLine: 'Select Timeline',
  dl_fileType: 'Choose format (e.g. JSON, CSV, or Excel)',
  country_select: 'All',
};

const inputLabels = {
  timezone: 'Search Timezone',
  bedTime: 'Usual Bed Time',
  wakeTime: 'Usual Wake-up Time',
  departureTime: 'Departure Time (of Departure city)',
  arrivalTime: 'Arrival Time (of Arrival city)',
  departureTZ: 'Search Departure City',
  destinationTZ: 'Search Destination City',
  current_departure_city: 'Auto-locate',
  current_destination_city: 'Auto-locate',
  originTimeZone: 'Search Origin Timezone',
  destinationTimeZone: 'Search Destination Timezone(s)',
  current_origin: 'Auto-locate',
  current_destination: 'Auto-locate',
  timezoneFormat: 'Time Zone: City vs. IANA vs. Abbreviation',
  originTime: 'Enter Date and Time',
  timeFormat: 'Select Output Time Format',
  isRealTime: 'Live Clock',
  timeLine: 'Select Timeline',
  dl_city: 'City',
  dl_province: 'Province',
  dl_timezone: 'Time Zone (IANA)',
  dl_identifiers: 'TimeZone Identifiers',
  dl_standardAbbreviation: 'Standard Abbreviation',
  dl_dstAbbreviation: 'DST Abbreviation',
  dl_currentAbbreviation: 'Current Abbreviation',
  dl_currentLongName: 'Current Time Zone (long name)',
  dl_standardLongName: 'Standard Time Zone (long name)',
  dl_dstLongName: 'DST Time Zone (long name)',
  dl_countryName: 'Country',
  dl_countryCode: 'Country Code',
  dl_standardOffset: 'Standard Offset',
  dl_dstOffset: 'DST Offset',
  dl_currentOffset: 'Current Offset',
  dl_currentDSTStatus: 'Current DST Status',
  dl_observesDst: 'Observes DST?',
  dl_upcomingDSTChange: 'Upcoming DST Change',
  dl_choose: 'What To Include',
  dl_fileType: 'Select File Type',
  dl_offsetIn: 'Offsets In',
  country_select: 'Select Countries',
};

const timezoneSheetHeaders = {
  city: 'City Name',
  province: 'Province',
  timezone: 'Timezone (IANA)',
  standardAbbreviation: 'Standard Abbreviation',
  dstAbbreviation: 'DST Abbreviation',
  currentAbbreviation: 'Current Abbreviation',
  standardLongName: 'Standard Time Zone (long name)',
  dstLongName: 'DST Time Zone (long name)',
  currentLongName: 'Current Time Zone (long name)',
  countryName: 'Country Name',
  countryCode: 'Country Code',
  standardOffset: 'Standard Offset',
  dstOffset: 'DST Offset',
  currentOffset: 'Current Offset',
  currentDSTStatus: 'Current DST Status',
  observesDst: 'Observes DST?',
  upcomingDSTChange: 'Upcoming DST Change',
  upcomingDSTChangeAt: 'Upcoming DST Change At',
  identifiers: 'TimeZone Identifiers',
};

const flattenGroupedChildren = (children) => {
  return children.reduce((result, child) => {
    if (
      child.props.children != null &&
      typeof child.props.children === 'string'
    ) {
      return [...result, child];
    } else {
      const {
        props: { children: nestedChildren = [] },
      } = child;

      return [
        ...result,
        React.cloneElement(child, { type: 'group' }, []),
        ...nestedChildren,
      ];
    }
  }, []);
};

const isSelected = ({ props: { isSelected } }) => {
  return isSelected === true;
};

const getSelectedIndex = (children) => {
  return Math.max(children.findIndex(isSelected), 0);
};

const createGetHeight = ({
  groupHeadingHeight,
  noOptionsMsgHeight,
  optionHeight,
  loadingMsgHeight,
}) => {
  return function getHeight(child) {
    const {
      props: {
        type,
        children: childChildren,
        inputValue,
        selectProps: { noOptionsMessage, loadingMessage },
      },
    } = child;

    if (type === 'group') {
      return groupHeadingHeight;
    } else if (type === 'option') {
      return optionHeight;
    } else if (
      typeof noOptionsMessage === 'function' &&
      childChildren === noOptionsMessage({ inputValue })
    ) {
      return noOptionsMsgHeight;
    } else if (
      typeof loadingMessage === 'function' &&
      childChildren === loadingMessage({ inputValue })
    ) {
      return loadingMsgHeight;
    } else {
      return 35;
    }
  };
};

const calculateWeights = (searchKeys) => {
  const weights = {};
  let currentWeight = 1;
  searchKeys.forEach((key) => {
    weights[key] = currentWeight;
    currentWeight *= 0.5;
  });
  return weights;
};

const adjustedOffset = ({ scrollDirection, scrollOffset }, itemSizeDiff) => {
  let newOffset = scrollOffset;

  if (scrollDirection === 'backward') {
    newOffset += itemSizeDiff;
  }

  return newOffset;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const OG_IMG = 'https://www.globaltimepro.com/opengraph-image.png';

const getTZOptionValue = (opt) => {
  if (!opt) return null;
  if (opt.type === 'city') {
    return `${opt.city}@@${opt.timezone}`;
  }
  return opt.timezone;
};

const getTZOptionLabel = (opt) => {
  let label = '';
  if (opt) {
    label = primaryTZOptText(opt, true);
    if (opt.isCurrent) {
      label += ' (current)';
    }
  }
  return label;
};

const joinValues = (arr) =>
  arr?.map((tz) => getTZOptionValue(tz)).join(',') || '';

const getTZSearchKeys = (timezoneFormatValue) => {
  if (timezoneFormatValue === 'name') {
    return [
      'timezone',
      'countryName',
      'standardAbbreviation',
      'dstAbbreviation',
      'alternativeName',
      'standardLongName',
      'dstLongName',
      'continentName',
    ];
  } else if (timezoneFormatValue === 'abbreviation') {
    return [
      'standardAbbreviation',
      'dstAbbreviation',
      'countryName',
      'alternativeName',
      'standardLongName',
      'dstLongName',
      'timezone',
    ];
  } else {
    return [
      'city',
      'countryName',
      'standardAbbreviation',
      'dstAbbreviation',
      'alternativeName',
      'standardLongName',
      'dstLongName',
      'province',
      'timezone',
    ];
  }
};

const formatTimeBothCities = (time, departureTZ, destinationTZ, format) => {
  const depTime = time
    .clone()
    .tz(departureTZ.timezone)
    .format(format || 'hh:mm A');
  const destTime = time
    .clone()
    .tz(destinationTZ.timezone)
    .format(format || 'hh:mm A');
  return `${depTime} (${departureTZ.city}) / ${destTime} (${destinationTZ.city})`;
};

const formatRangeBothCities = (start, end, departureTZ, destinationTZ) => {
  const startDep = start.clone().tz(departureTZ.timezone).format('hh:mm A');
  const startDest = start.clone().tz(destinationTZ.timezone).format('hh:mm A');
  const endDep = end.clone().tz(departureTZ.timezone).format('hh:mm A');
  const endDest = end.clone().tz(destinationTZ.timezone).format('hh:mm A');
  return `${startDep}-${endDep} (${departureTZ.city}) / ${startDest}-${endDest} (${destinationTZ.city})`;
};

const generatePlanData = ({
  departureTime,
  arrivalTime,
  departureTZ,
  destinationTZ,
  wakeTimeOnly,
  bedTimeOnly,
  daysUntilDeparture,
  timeLine,
}) => {
  if (
    !departureTime ||
    !arrivalTime ||
    !departureTZ ||
    !destinationTZ ||
    !wakeTimeOnly ||
    !bedTimeOnly ||
    (timeLine.value === 'daysUntilDeparture' && !Number(daysUntilDeparture))
  ) {
    return null;
  }

  const depMoment = moment.tz(
    departureTime,
    'YYYY-MM-DD HH:mm:ss',
    departureTZ.timezone,
  );
  const arrMoment = moment.tz(
    arrivalTime,
    'YYYY-MM-DD HH:mm:ss',
    destinationTZ.timezone,
  );

  const tzDifference =
    arrMoment.clone().tz(destinationTZ.timezone).utcOffset() -
    depMoment.clone().tz(departureTZ.timezone).utcOffset();
  const hoursDiff = Math.abs(tzDifference / 60);
  const isWestward = tzDifference < 0;

  const hoursIfShiftLater = isWestward ? hoursDiff : 24 - hoursDiff;
  const hoursIfShiftEarlier = !isWestward ? hoursDiff : 24 - hoursDiff;
  const daysIfShiftLater = Math.ceil(hoursIfShiftLater / 2);
  const daysIfShiftEarlier = Math.ceil(hoursIfShiftEarlier / 1);

  let totalShiftNeeded = hoursDiff;
  let shouldShiftLater = isWestward;

  if (daysIfShiftLater < daysIfShiftEarlier) {
    totalShiftNeeded = hoursIfShiftLater;
    shouldShiftLater = true;
  }

  if (daysIfShiftLater > daysIfShiftEarlier) {
    totalShiftNeeded = hoursIfShiftEarlier;
    shouldShiftLater = false;
  }

  const maxDailyShift = shouldShiftLater ? 2 : 1;
  const optimalDays = Math.ceil(totalShiftNeeded / maxDailyShift);
  const effectiveDays = Math.min(
    parseInt(daysUntilDeparture, 10) || 0,
    optimalDays,
  );
  const dailyShift =
    Math.min(maxDailyShift, totalShiftNeeded / Math.max(effectiveDays, 1)) *
      (shouldShiftLater ? 1 : -1) || 0;
  const shiftIsDelaying = dailyShift > 0;

  const generatePhases = (startDate, days, timezone) => {
    const phases = [];
    let currentDate = moment(startDate).subtract(days, 'days');
    let cumulativeShift = 0;

    for (let day = 1; day <= days; day++) {
      cumulativeShift += dailyShift;
      const [bedHour, bedMinute] = bedTimeOnly.split(':').map(Number);
      const [wakeHour, wakeMinute] = wakeTimeOnly.split(':').map(Number);

      const baseBedTime = currentDate.clone().tz(timezone).set({
        hour: bedHour,
        minute: bedMinute,
      });
      const baseWakeTime = currentDate.clone().tz(timezone).set({
        hour: wakeHour,
        minute: wakeMinute,
      });

      if (baseWakeTime.isSameOrBefore(baseBedTime)) {
        baseWakeTime.add(1, 'day');
      }

      const adjustedBedTime = baseBedTime.clone().add(cumulativeShift, 'hours');
      const adjustedWakeTime = baseWakeTime
        .clone()
        .add(cumulativeShift, 'hours');

      if (adjustedWakeTime.isSameOrBefore(adjustedBedTime)) {
        adjustedWakeTime.add(1, 'day');
      }

      let lightStart, lightEnd;
      if (shiftIsDelaying) {
        lightStart = adjustedBedTime.clone().subtract(2, 'hours');
        lightEnd = lightStart.clone().add(2, 'hours');
      } else {
        lightStart = adjustedWakeTime.clone();
        lightEnd = lightStart.clone().add(2, 'hours');
      }

      const breakfast = adjustedWakeTime.clone().add(1, 'hour');
      const lunch = breakfast.clone().add(5, 'hours');
      const dinner = lunch.clone().add(5, 'hours');

      phases.push({
        title: `Preparation Day ${day}`,
        date: currentDate.format('DD MMM YYYY'),
        city: departureTZ.city,
        schedule: [
          {
            icon: <FaMoon />,
            type: 'sleep',
            text: `Sleep Time: ${formatRangeBothCities(
              adjustedBedTime,
              adjustedWakeTime,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaCoffee />,
            type: 'meal',
            text: `First Meal: ${formatTimeBothCities(
              breakfast,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaHamburger />,
            type: 'meal',
            text: `Midday Meal: ${formatTimeBothCities(
              lunch,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaFish />,
            type: 'meal',
            text: `Evening Meal: ${formatTimeBothCities(
              dinner,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaSun />,
            type: 'light',
            text: `Light Therapy: ${formatRangeBothCities(
              lightStart,
              lightEnd,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaExclamationTriangle />,
            type: 'warning',
            text: `Light Restriction: Avoid ${
              shiftIsDelaying
                ? 'morning light (first 4h after waking)'
                : 'evening light (4h before bed)'
            }`,
          },
        ],
        scientific: [
          {
            icon: <FaRegLightbulb />,
            text: `Daily Rhythm Shift: Adjust schedule ${Math.abs(
              dailyShift,
            ).toFixed(1)} hours ${shiftIsDelaying ? 'later' : 'earlier'}`,
          },
          {
            icon: <FaThermometerHalf />,
            text: `Body Clock Tip: Focus on ${
              shiftIsDelaying ? 'evening' : 'morning'
            } activities`,
          },
          ...(shiftIsDelaying
            ? []
            : [
                {
                  icon: <FaPills />,
                  text: `Sleep Aid: Consider melatonin at ${formatTimeBothCities(
                    adjustedBedTime.clone().subtract(2, 'hours'),
                    departureTZ,
                    destinationTZ,
                  )} (Consult doctor first)`,
                },
              ]),
        ],
      });

      currentDate = adjustedWakeTime.clone().startOf('day');
    }
    return phases;
  };

  const generateFlightPhase = () => {
    const flightDuration = moment.duration(arrMoment.diff(depMoment)).asHours();
    const achievedShift = dailyShift * effectiveDays;
    const remainingShift = totalShiftNeeded - Math.abs(achievedShift);

    return {
      title: `Flight Phase (${departureTZ.city} → ${destinationTZ.city})`,
      date: depMoment.format('YYYY-MM-DD'),
      schedule: [
        {
          icon: <FaPlane />,
          text: `Departure: ${formatTimeBothCities(
            depMoment,
            departureTZ,
            destinationTZ,
            'DD MMM YYYY hh:mm A',
          )}`,
        },
        {
          icon: <FaPlane />,
          text: `Arrival: ${formatTimeBothCities(
            arrMoment,
            departureTZ,
            destinationTZ,
            'DD MMM YYYY hh:mm A',
          )}`,
        },
        {
          icon: <FaClock />,
          text: `Duration: ${flightDuration.toFixed(1)} hours`,
        },
        {
          icon: <FaBed />,
          text: `In-Flight Sleep: ${
            remainingShift > 0
              ? `Gradually adjust ${remainingShift.toFixed(1)}h ${
                  shiftIsDelaying ? 'later' : 'earlier'
                }`
              : 'Keep normal schedule'
          }`,
        },
        {
          icon: <FaTint />,
          text: `Hydration: Drink ${Math.floor(
            flightDuration / 3,
          )} cups of water (250ml each)`,
        },
        {
          icon: <FaUtensils />,
          text: `Meals: Follow ${destinationTZ.city} local time`,
        },
      ],
    };
  };

  const generateRecoveryPhases = (remainingDays) => {
    const phases = [];
    let currentDate = arrMoment.clone();

    for (let day = 1; day <= remainingDays; day++) {
      const [bedHour, bedMinute] = bedTimeOnly.split(':').map(Number);
      const [wakeHour, wakeMinute] = wakeTimeOnly.split(':').map(Number);

      const targetBedTime = currentDate
        .clone()
        .tz(departureTZ.timezone)
        .set({ hour: bedHour, minute: bedMinute })
        .add(dailyShift * (effectiveDays + day), 'hours');

      const targetWakeTime = currentDate
        .clone()
        .tz(departureTZ.timezone)
        .set({ hour: wakeHour, minute: wakeMinute })
        .add(dailyShift * (effectiveDays + day), 'hours');

      let lightStart, lightEnd;
      if (shiftIsDelaying) {
        lightStart = targetBedTime.clone().subtract(2, 'hours');
        lightEnd = lightStart.clone().add(2, 'hours');
      } else {
        lightStart = targetWakeTime.clone();
        lightEnd = lightStart.clone().add(2, 'hours');
      }

      phases.push({
        title: `Recovery Day ${day}`,
        date: currentDate.format('DD MMM YYYY'),
        city: destinationTZ.city,
        schedule: [
          {
            icon: <FaBed />,
            text: `Target Sleep: ${formatRangeBothCities(
              targetBedTime,
              targetWakeTime,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaSun />,
            text: `Light Exposure: ${formatRangeBothCities(
              lightStart,
              lightEnd,
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaRunning />,
            text: `Exercise: ${formatTimeBothCities(
              targetWakeTime.clone().add(2, 'hours'),
              departureTZ,
              destinationTZ,
            )}`,
          },
          {
            icon: <FaBan />,
            text: `No Naps After: ${formatTimeBothCities(
              targetBedTime.clone().subtract(4, 'hours'),
              departureTZ,
              destinationTZ,
            )}`,
          },
        ],
        scientific: [
          {
            icon: <FaBook />,
            text: 'Consistent Wake-Up: Keep within 30 minutes of target',
          },
          {
            icon: <FaBook />,
            text: `Phase Lock: ${
              shiftIsDelaying ? 'Evening' : 'Morning'
            } Light Exposure`,
          },
          {
            icon: <FaBook />,
            text: 'Chrononutrition: 30g Protein within 1h of Waking',
          },
        ],
      });

      currentDate.add(1, 'day');
    }
    return phases;
  };

  const achievedShift = dailyShift * effectiveDays;
  const remainingShift = totalShiftNeeded - Math.abs(achievedShift);
  const remainingRecovery = Math.ceil(remainingShift / maxDailyShift);

  let phases = {};
  switch (timeLine.value) {
    case 'daysUntilDeparture':
      phases.preDeparture = generatePhases(
        depMoment,
        effectiveDays,
        departureTZ.timezone,
      );
      phases.inFlight = generateFlightPhase();
      phases.recovery = generateRecoveryPhases(remainingRecovery);
      break;
    case 'afterDeparture':
      phases.inFlight = generateFlightPhase();
      phases.recovery = generateRecoveryPhases(
        Math.ceil(totalShiftNeeded / maxDailyShift),
      );
      break;
    case 'afterArrival':
      phases.recovery = generateRecoveryPhases(
        Math.ceil(totalShiftNeeded / maxDailyShift),
      );
      break;
    default:
      break;
  }

  return {
    meta: {
      departureCity: departureTZ.city,
      destinationCity: destinationTZ.city,
      timeDifference: `${hoursDiff.toFixed(1)} hours (${
        isWestward ? 'West' : 'East'
      } direction)`,
      strategy: `${Math.abs(dailyShift).toFixed(1)}h/${
        shiftIsDelaying ? 'later' : 'earlier'
      } daily`,
      totalDays: effectiveDays + remainingRecovery,
    },
    phases,
  };
};

const getCurrentTZTime = (originTimeZone) =>
  originTimeZone ? moment.tz(originTimeZone.timezone) : false;

const getCurrentDSTStatus = (isDST) => (isDST ? 'DST Active' : 'Standard Time');

const getCurrentOffset = (currentTZTime) =>
  currentTZTime ? currentTZTime.format('Z') : '';

const getNextTransitionText = (nextTransitionData) => {
  if (!nextTransitionData) return 'No transition within a year';
  return nextTransitionData.officialTransition.format('DD MMM YYYY hh:mm A');
};

const getNextTransitionISOString = (nextTransitionData) => {
  if (!nextTransitionData) return '';
  return nextTransitionData.officialTransition.toISOString();
};

const getNextTransitionOffset = (nextTransitionData) => {
  if (!nextTransitionData) return null;
  return minutesToHourString(nextTransitionData.newOffset);
};

const getTransitionType = (nextTransitionData, isDST) => {
  if (nextTransitionData) {
    return isDST ? 'DST ends' : 'DST starts';
  }
  return '';
};

const getNextTransition = (timezone, currentTZTime) => {
  const zone = moment.tz.zone(timezone);
  if (!zone) return null;
  const nowMs = currentTZTime.valueOf();

  for (let i = 0; i < zone.untils.length - 1; i++) {
    const transMs = zone.untils[i];
    if (transMs > nowMs) {
      const oldOffset = -zone.offsets[i];
      const newOffset = -zone.offsets[i + 1];

      const officialTransition = moment.utc(transMs).utcOffset(oldOffset);

      return { officialTransition, newOffset, oldOffset };
    }
  }
  return null;
};

const getExtraMessage = (nextTransitionData, isDST) => {
  if (!nextTransitionData) {
    return 'This region does not observe Daylight Saving Time, so your clock stays the same all year.';
  }

  const delta = nextTransitionData.newOffset - nextTransitionData.oldOffset;
  const absDelta = Math.abs(delta);
  const hours = Math.floor(absDelta / 60);
  const mins = absDelta % 60;
  const label = [
    hours && `${hours} hour${hours > 1 ? 's' : ''}`,
    mins && `${mins} minute${mins > 1 ? 's' : ''}`,
  ]
    .filter(Boolean)
    .join(' and ');

  if (delta > 0) {
    return `Your clock will be set forward by ${label} at the upcoming change – enjoy longer evenings!`;
  } else {
    return `Your clock will be set back by ${label} at the upcoming change – enjoy that extra ${label} of sleep!`;
  }
};

const getFollowingMessage = (followingTransitionData, isDST) => {
  if (followingTransitionData) {
    const followingType = isDST ? 'DST starts' : 'DST ends';
    return `After that, ${followingType} on ${followingTransitionData.officialTransition.format(
      'DD MMM YYYY hh:mm A',
    )} with a new offset of ${moment()
      .utcOffset(followingTransitionData.newOffset)
      .format('Z')}.`;
  }
  return undefined;
};

const reactSelectStyles = {
  valueContainer: (provided) => ({
    ...provided,
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
  }),
  multiValue: (provided) => ({
    ...provided,
    flexShrink: 0,
    backgroundColor: 'var(--tc)',
    color: 'var(--light)',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'var(--light)' : 'var(--bg)',
    borderColor: state.isFocused ? 'var(--tc)' : 'var(--accent)',
    boxShadow: null,
    overflow: 'hidden',
    ':hover': {
      borderColor: state.isFocused ? 'var(--tc)' : 'var(--accent)',
    },
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'var(--light)',
    fontSize: '13.33px',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'var(--light)',
    cursor: 'pointer',
    ':hover': {
      color: 'var(--fc-3)',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--tc)' : 'var(--light)',
    color: state.isSelected ? 'var(--light)' : 'var(--fc-1)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: state.isSelected ? 'var(--tc)' : 'var(--light)',
      color: state.isSelected ? 'var(--light)' : 'var(--tc)',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--fc-1)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--fc-2)',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'var(--fc-3)',
    ':hover': {
      color: 'var(--fc-3)',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--fc-3)',
    cursor: 'pointer',
    ':hover': {
      color: 'var(--fc-2)',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'var(--fc-3)',
  }),
};

const encodeStr = (str) => encodeURIComponent(str);

const buildQueryString = (searchParams = {}) => {
  if (!searchParams) return '';
  const sp = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item != null) sp.append(key, item);
      });
      return;
    }

    if (value != null) {
      sp.set(key, value);
    }
  });

  return sp.toString();
};

const iconFaArrowRight = <FaArrowRight />;
const iconFaXTwitter = (
  <FaXTwitter
    className={classNames(styles.socialIcon, styles.xIcon)}
    aria-label="Share on X"
  />
);
const iconFaFacebookF = (
  <FaFacebookF
    className={classNames(styles.socialIcon, styles.fbIcon)}
    aria-label="Share on Facebook"
  />
);
const iconFaLinkedinIn = (
  <FaLinkedinIn
    className={classNames(styles.socialIcon, styles.liIcon)}
    aria-label="Share on LinkedIn"
  />
);
const iconFiArrowUp = <FiArrowUp />;
const iconPiSwapFill = <PiSwapFill color="var(--tc)" />;
const iconMdContentCopy = <MdContentCopy color="var(--accent)" />;
const iconRiDeleteBin6Line = <RiDeleteBin6Line color="var(--danger)" />;
const iconPiAirplaneTakeoff = <PiAirplaneTakeoff color="var(--travel)" />;
const iconFaAnglesLeft = <FaAnglesLeft color="var(--accent)" />;
const iconFaAnglesRight = <FaAnglesRight color="var(--accent)" />;
const iconTbWorldQuestion = <TbWorldQuestion color="var(--tc)" size={15} />;
const iconFaRegCalendarAlt = <FaRegCalendarAlt size={15} color="var(--fc-2)" />;
const iconIoClose = <IoClose size={19} color="var(--fc-2)" />;
const iconIoMdUndo = <IoMdUndo className={styles.top_btn_Icon} />;
const iconRiResetLeftLine = <RiResetLeftLine className={styles.top_btn_Icon} />;
const iconIoMdRedo = <IoMdRedo className={styles.top_btn_Icon} />;
const icon2MdContentCopy = <MdContentCopy className={styles.top_btn_Icon} />;
const iconPiExportLight = <PiExportLight className={styles.top_btn_Icon} />;
const iconFiGlobe = <FiGlobe className={styles.dst_icon} />;
const iconFiClock = (
  <FiClock className={classNames(styles.dst_iconSm, styles.dst_clock_icon)} />
);
const iconFiCalendar = <FiCalendar className={styles.dst_iconSm} />;
const iconFiInfo = <FiInfo className={styles.dst_iconSm} />;
const iconFiAlertTriangle = <FiAlertTriangle className={styles.dst_iconSm} />;
const iconFiCornerUpLeft = <FiCornerUpLeft className={styles.dst_iconSm} />;
const iconFaRegClock = <FaRegClock className={styles.jl_title_icon} />;
const iconFaExclamationTriangle = <FaExclamationTriangle />;
const iconBiSolidPlaneAlt = (
  <BiSolidPlaneAlt className={styles.jl_title_icon} />
);
const iconGiSandsOfTime = <GiSandsOfTime />;
const iconFaChartLine = <FaChartLine />;
const iconFaFlask = <FaFlask />;
const iconFaCalendar = <FaCalendar />;
const iconFaBook = <FaBook />;
const iconFaRegLightbulb = <FaRegLightbulb className={styles.jl_method_icon} />;
const icon2FaFlask = <FaFlask className={styles.jl_method_icon} />;
const iconFaChevronDown = <FaChevronDown />;

const pageLinks = (page) => {
  const pages = { other: [], current: [] };

  const type = (name) => (name === page ? 'current' : 'other');

  pages[type('DST')].push({
    title: 'DST',
    subtitle: 'checker',
    href: `/${PATHS.dstChecker}`,
    tooltip: 'Check Daylight Saving Time for your region',
  });

  pages[type('JET LAG')].push({
    title: 'JET LAG',
    subtitle: 'planner',
    href: `/${PATHS.jetLagPlanner}`,
    tooltip: 'Optimize your travel experience by reducing jet lag',
  });

  pages[type('TIME ZONE')].push({
    title: 'TIME ZONE',
    subtitle: 'converter',
    href: `/${PATHS.timezoneConverter}`,
    tooltip: 'Convert time across different time zones effortlessly',
  });

  pages[type('DOWNLOAD')].push({
    title: 'DOWNLOAD',
    subtitle: 'timezone list',
    href: `/${PATHS.downloadTimezoneList}`,
    tooltip:
      'Download a customizable timezone list in JSON, CSV (Spreadsheet), or Excel',
  });

  return pages;
};

const getTZTime = (timezone, formatStr, timeFormat) => {
  let time = moment.tz(timezone).format(formatStr);

  if (timeFormat?.value === 'HH:mm (military-nato)') {
    time = toNato(time);
  }

  return {
    time,
    date: moment.tz(timezone).format('DD MMM YYYY'),
  };
};

const minutesToHourString = (mins) => {
  if (mins == null) return null;
  const sign = mins >= 0 ? '+' : '-';
  const abs = Math.abs(mins);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  return `${sign}${hh}:${mm}`;
};

const convertToCSV = (data, fieldKeys, headerLabels) => {
  const headerLine = headerLabels
    .map((h) => `"${h.replace(/"/g, '""')}"`)
    .join(',');

  const rows = data.map((row) =>
    fieldKeys
      .map((key) => {
        const val = row[key] ?? '';
        return `"${val.toString().replace(/"/g, '""')}"`;
      })
      .join(','),
  );

  return [headerLine, ...rows].join('\n');
};

const convertToExcel = async (data, fieldKeys, headerLabels) => {
  const zip = new JSZip();

  const colName = (colIndex) => {
    let s = '';
    let n = colIndex;
    while (n >= 0) {
      s = String.fromCharCode((n % 26) + 65) + s;
      n = Math.floor(n / 26) - 1;
    }
    return s;
  };

  const xmlEscape = (value) => {
    if (value === null || value === undefined) return '';
    const s = String(value);
    const cleaned = s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
    return cleaned
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const contentTypes = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`;

  const rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`;

  const workbook = `<?xml version="1.0" encoding="UTF-8"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Sheet1" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`;

  const workbookRels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

  const styles = `<?xml version="1.0" encoding="UTF-8"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="1"><font/></fonts>
  <fills count="1"><fill/></fills>
  <borders count="1"><border/></borders>
  <cellStyleXfs count="1"><xf/></cellStyleXfs>
  <cellXfs count="2">
    <xf/> <!-- default -->
    <xf applyAlignment="1"><alignment wrapText="1"/></xf> <!-- wrap text -->
  </cellXfs>
</styleSheet>`;

  const headerRowCells = headerLabels
    .map((h, j) => {
      const col = colName(j);
      return `<c r="${col}1" s="1" t="inlineStr"><is><t xml:space="preserve">${xmlEscape(
        h,
      )}</t></is></c>`;
    })
    .join('');

  const dataRows = data
    .map((row, i) => {
      const rowIndex = i + 2;
      const cells = fieldKeys
        .map((key, j) => {
          const col = colName(j);
          const value = Array.isArray(row) ? row[key] : row[key];
          return `<c r="${col}${rowIndex}" s="1" t="inlineStr"><is><t xml:space="preserve">${xmlEscape(
            value,
          )}</t></is></c>`;
        })
        .join('');
      return `<row r="${rowIndex}">${cells}</row>`;
    })
    .join('');

  const colDefs = headerLabels
    .map((h, j) => {
      const width = Math.max(h.length + 2, 10); // header length + padding
      return `<col min="${j + 1}" max="${
        j + 1
      }" width="${width}" customWidth="1"/>`;
    })
    .join('');

  const sheet = `<?xml version="1.0" encoding="UTF-8"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <cols>
    ${colDefs}
  </cols>
  <sheetData>
    <row r="1">${headerRowCells}</row>
    ${dataRows}
  </sheetData>
</worksheet>`;

  zip.file('[Content_Types].xml', contentTypes);
  zip.folder('_rels').file('.rels', rels);
  zip.folder('xl').file('workbook.xml', workbook);
  zip.folder('xl/_rels').file('workbook.xml.rels', workbookRels);
  zip.folder('xl').file('styles.xml', styles);
  zip.folder('xl/worksheets').file('sheet1.xml', sheet);

  const blob = await zip.generateAsync({ type: 'blob' });
  return blob;
};

const timeSegments = [
  { name: 'Sleep', start: 0, end: 6, className: 'sleep' },
  { name: 'Morning', start: 6, end: 9, className: 'morning' },
  { name: 'Work AM', start: 9, end: 12, className: 'workAm' },
  { name: 'Lunch', start: 12, end: 13, className: 'lunch' },
  { name: 'Work PM', start: 13, end: 17, className: 'workPm' },
  { name: 'Evening', start: 17, end: 21, className: 'evening' },
  { name: 'Night', start: 21, end: 24, className: 'night' },
];

const getTimeSegment = (date, originTZ, destTZ, isRealTime) => {
  let m;

  if (isRealTime) {
    m = moment.tz(destTZ);
  } else {
    m = moment.tz(date, 'YYYY-MM-DD HH:mm:ss', originTZ).tz(destTZ);
  }

  const hour = m.hour();

  return (
    timeSegments.find((s) => hour >= s.start && hour < s.end) || timeSegments[0]
  );
};

const getDefaultValue = (value, type) => {
  if (!value) {
    return '';
  }

  if (!type || type === 'city') {
    return value;
  }

  return value
    .split(',')
    .map((item) => item.split('@@')[1])
    .join(',');
};

const defDateFormat = 'YYYY-MM-DD HH:mm:ss';

const getRouteData = async (page, defaultPage) => {
  const key = PATHS_REVERSE[page] || PATHS_REVERSE[defaultPage];
  if (!key) return null;

  const mod = await import(`@/routeData/${key}.js`);
  const path = PATHS[key];
  return mod.getData ? mod.getData(path) : null;
};

const getMetaData = async (page, defaultPage) => {
  const key = PATHS_REVERSE[page] || PATHS_REVERSE[defaultPage];
  if (!key) return null;

  const mod = await import(`@/routeData/${key}.js`);
  const path = PATHS[key];
  return mod.metaData ? mod.metaData(path) : null;
};

const getSchema = ({
  name,
  description,
  page,
  applicationCategory,
  featureList,
  steps,
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE_URL}/${page}`,
    image: OG_IMG,
    publisher: {
      '@type': 'Organization',
      name: 'Global Time Pro',
      logo: {
        '@type': 'ImageObject',
        url: OG_IMG,
      },
    },
    applicationCategory,
    operatingSystem: 'Any',
    softwareVersion: '1.1.1.1',
    featureList,
    mainEntity: {
      '@type': 'HowTo',
      name,
      description,
      step: steps.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.description,
        image: OG_IMG,
      })),
    },
  };
};

const getMeta = ({ title, description, page, manifest }) => {
  return {
    title,
    description,
    robots: 'index, follow',
    creator: 'GlobalTimePro',
    publisher: 'GlobalTimePro',
    alternates: {
      canonical: `${SITE_URL}/${page}`,
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/${page}`,
      title,
      description,
      siteName: 'GlobalTimePro',
      images: OG_IMG,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@GlobalTimePro',
      title,
      description,
      images: OG_IMG,
    },
    appleWebApp: {
      capable: true,
      title: 'GlobalTimePro',
      statusBarStyle: 'black-translucent',
    },
    manifest,
  };
};

export {
  primaryTZOptText,
  secondaryTZOptText,
  checkFields,
  getMeta,
  getSchema,
  getMetaData,
  getRouteData,
  defDateFormat,
  getDefaultValue,
  getTimeSegment,
  timeSegments,
  countryOptions,
  getAbbrevKey,
  getTZList,
  convertToCSV,
  convertToExcel,
  isTZDST,
  timezoneSheetHeaders,
  fileTypeOptions,
  getTZTime,
  getTZInfo,
  pageLinks,
  iconFaAnglesLeft,
  iconFaAnglesRight,
  iconPiAirplaneTakeoff,
  iconFaChevronDown,
  icon2FaFlask,
  iconFaRegLightbulb,
  iconFaBook,
  iconFaRegClock,
  iconFaExclamationTriangle,
  iconBiSolidPlaneAlt,
  iconGiSandsOfTime,
  iconFaChartLine,
  iconFaFlask,
  iconFaCalendar,
  iconFiGlobe,
  iconFiClock,
  iconFiCalendar,
  iconFiInfo,
  iconFiAlertTriangle,
  iconFiCornerUpLeft,
  icon2MdContentCopy,
  iconIoMdRedo,
  iconFaArrowRight,
  iconFaXTwitter,
  iconFaFacebookF,
  iconFaLinkedinIn,
  iconFiArrowUp,
  iconMdContentCopy,
  iconRiDeleteBin6Line,
  iconPiSwapFill,
  iconTbWorldQuestion,
  iconFaRegCalendarAlt,
  iconIoClose,
  iconIoMdUndo,
  iconRiResetLeftLine,
  iconPiExportLight,
  getCurrentTZTime,
  getCurrentDSTStatus,
  getCurrentOffset,
  getNextTransitionText,
  getNextTransitionOffset,
  getTransitionType,
  getExtraMessage,
  getFollowingMessage,
  timeFormatOptions,
  timezoneFormatOptions,
  dayFormatOptions,
  offsetOptions,
  tooltips,
  placeholders,
  inputLabels,
  SITE_URL,
  flattenGroupedChildren,
  createGetHeight,
  getSelectedIndex,
  getNextTransition,
  timeLineOptions,
  getTZSearchKeys,
  joinValues,
  getTZOptionLabel,
  getTZOptionValue,
  generatePlanData,
  calculateWeights,
  adjustedOffset,
  encodeStr,
  buildQueryString,
  reactSelectStyles,
  toNato,
};
