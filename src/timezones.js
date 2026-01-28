import moment from 'moment-timezone';
import ct from 'countries-and-timezones';
import cityTimezones from 'city-timezones';
import { rawTimeZones, abbreviations as abbrevs } from '@vvo/tzdb';

const abbreviations = {
  ...abbrevs,
  'Chatham Standard Time': 'CHAST',
  'Chatham Daylight Time': 'CHADT',
  'Tonga Standard Time': 'TOT',
  'Apia Standard Time': 'WST',
  'Petropavlovsk-Kamchatski Standard Time': 'PETT',
  'Fiji Standard Time': 'FJT',
  'Vanuatu Standard Time': 'VUT',
  'Sakhalin Standard Time': 'SAKT',
  'Norfolk Island Daylight Time': 'NFDT',
  'Norfolk Island Standard Time': 'NFT',
  'New Caledonia Standard Time': 'NCT',
  'Vladivostok Standard Time': 'VLAT',
  'Yakutsk Standard Time': 'YAKT',
  'Korean Standard Time': 'KST',
  'Ulaanbaatar Standard Time': 'ULAT',
  'Taipei Standard Time': 'TWT',
  'Singapore Standard Time': 'SGT',
  'Philippine Standard Time': 'PHT',
  'Irkutsk Standard Time': 'IRKT',
  'Hong Kong Standard Time': 'HKT',
  'Novosibirsk Standard Time': 'NOVT',
  'Hovd Standard Time': 'HOVT',
  'Yekaterinburg Standard Time': 'YEKT',
  'Uzbekistan Standard Time': 'UZT',
  'Turkmenistan Standard Time': 'TMT',
  'Samara Standard Time': 'SAMT',
  'Mauritius Standard Time': 'MUT',
  'Azerbaijan Standard Time': 'AZT',
  'Armenia Standard Time': 'AMT',
  'Arabian Standard Time': 'AST',
  'Eastern European Standard Time': 'EET',
  'West Africa Standard Time': 'WAT',
  'Central European Standard Time': 'CET',
  'Western European Standard Time': 'WET',
  'Cape Verde Standard Time': 'CVT',
  'Azores Standard Time': 'AZOT',
  'Fernando de Noronha Standard Time': 'FNT',
  'Uruguay Standard Time': 'UYT',
  'St. Pierre & Miquelon Daylight Time': 'PMDT',
  'St. Pierre & Miquelon Standard Time': 'PMST',
  'Paraguay Standard Time': 'PYT',
  'Falkland Islands Standard Time': 'FKT',
  'Brasilia Standard Time': 'BRT',
  'Argentina Standard Time': 'ART',
  'Amazon Standard Time': 'AMT',
  'Peru Standard Time': 'PET',
  'Colombia Standard Time': 'COT',
  'Acre Standard Time': 'ACT',
  'Mexican Pacific Standard Time': 'MST',
  'Pitcairn Time': 'PST',
  'Hawaii-Aleutian Standard Time': 'HAST',
  'Cook Islands Standard Time': 'CKT',
  'Bougainville Time': 'BST',
  'China Time': 'CST',
  'Kazakhstan Time': 'KZT',
  'Chile Time': 'CLT',
  'Mexican Pacific Time': 'MST',
  'Brunei Time': 'BNT',
  'Timor-Leste Time': 'TLT',
  'Taiwan Time': 'TWT',
  'American Samoa Time': 'SST',
};

delete abbreviations['Coordinated Universal Time'];

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const IANAS = moment.tz.names();

const IDENTIFIERS = (() => {
  // const links = (moment.tz && moment.tz._links) || [];
  // const names = (moment.tz && moment.tz._names) || [];
  // const parent = {};

  // const find = (x) => {
  //   if (!(x in parent)) parent[x] = x;
  //   if (parent[x] !== x) parent[x] = find(parent[x]);
  //   return parent[x];
  // };

  // const union = (a, b) => {
  //   const pa = find(a),
  //     pb = find(b);
  //   if (pa !== pb) parent[pa] = pb;
  // };

  // for (const [k, v] of Object.entries(links)) {
  //   union(k, v);
  // }

  // const groups = {};
  // for (const key in names) {
  //   const root = find(key);
  //   if (!groups[root]) groups[root] = [];
  //   groups[root].push(names[key]);
  // }

  // return Object.values(groups);

  const zones = ct.getAllTimezones({ deprecated: true });
  const groups = {};

  for (const [zoneName, zone] of Object.entries(zones)) {
    const root = zone.aliasOf || zoneName;

    if (!groups[root]) {
      groups[root] = [];
    }

    groups[root].push(zoneName);
  }

  return Object.values(groups);
})();

const getTZIdentifiers = (tz) => IDENTIFIERS.find((g) => g.includes(tz));

const getTZCountry = (tz) => {
  const country = ct.getTimezone(tz);
  if (country) {
    const countryCode = country.countries[0];
    if (countryCode) {
      return { countryCode, countryName: regionNames.of(countryCode) };
    }
  }
  return null;
};

const getTZCities = (tz) => {
  return cityTimezones.cityMapping
    .filter((c) => c.timezone === tz)
    .map((c) => ({
      city: c.city,
      province: c.province,
      iso2: c.iso2,
      country: c.country,
    }));
};

const getTransitionSamples = (tz) => {
  const currentMoment = moment.tz(tz);
  const start = currentMoment
    .clone()
    .date(15)
    .hour(12)
    .minute(0)
    .second(0)
    .millisecond(0)
    .subtract(1, 'month');

  const offsetsSeen = new Set();
  let minOffset = Infinity;
  let maxOffset = -Infinity;
  let standardSample = null;
  let dstSample = null;

  for (let i = 0; i < 13; i++) {
    const m = start.clone().add(i, 'month');
    const offset = m.utcOffset();

    if (!offsetsSeen.has(offset)) offsetsSeen.add(offset);

    if (offset < minOffset) {
      minOffset = offset;
      standardSample = { offset, date: m.toDate() };
    }

    if (offset > maxOffset) {
      maxOffset = offset;
      dstSample = { offset, date: m.toDate() };
    }
  }

  return {
    hasDst: offsetsSeen.size > 1,
    standardSample,
    dstSample,
  };
};

const getTZAbbreviation = (name) => {
  return rawTimeZones.find((tz) => tz.name === name || tz.group.includes(name));
};

const isValidTZName = (abbrev) => {
  return (
    abbrev &&
    ![
      /\d/,
      /^GMT([+-])?$/,
      /^UTC([+-])?$/,
      /^[+-]/,
      /^Coordinated Universal Time$/,
    ].some((pattern) => pattern.test(abbrev))
  );
};

const makeTZName = (tz, date, type) => {
  try {
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: type || 'long',
    });

    const parts = dtf.formatToParts(date);
    const timeZonePart = parts.find((part) => part.type === 'timeZoneName');

    return timeZonePart.value;
  } catch {
    return null;
  }
};

const getTZLongName = (tz, date) => {
  const longName = makeTZName(tz.name, date);
  const isValid = isValidTZName(longName);

  if (!isValid && tz.group.length) {
    for (const i of tz.group) {
      if (!i || i === tz.name) continue;
      const i_longName = makeTZName(i, date);
      const i_isValid = isValidTZName(i_longName);

      if (i_longName && i_isValid) {
        return { name: i_longName, isValid: i_isValid };
      }
    }
  }

  if (!isValid && tz.abbreviation && moment.tz.zone(tz.abbreviation)) {
    const a_longName = makeTZName(tz.abbreviation, date);
    const a_isValid = isValidTZName(a_longName);

    if (a_longName && a_isValid) {
      return { name: a_longName, isValid: a_isValid };
    }
  }

  return {
    name: longName,
    isValid,
  };
};

const getTZShortName = (tz, date) => {
  const shortName = makeTZName(tz, date, 'short');

  return {
    name: shortName,
    isValid: isValidTZName(shortName),
  };
};

const getTZDSTData = (name) => {
  const tz = getTZAbbreviation(name) || { name, group: [] };
  const { hasDst, standardSample, dstSample } = getTransitionSamples(tz.name);

  let standardLongName = tz.alternativeName;
  let standardAbbreviation = tz.abbreviation;
  let dstLongName = null;
  let dstAbbreviation = null;

  const standardLN = getTZLongName(tz, standardSample.date);
  if (standardLN.isValid || !tz.alternativeName) {
    standardLongName = standardLN.name;
  }

  if (!isValidTZName(tz.abbreviation)) {
    const standardSN =
      abbreviations[standardLongName] || abbreviations[tz.alternativeName];
    if (standardSN) {
      standardAbbreviation = standardSN;
    } else if (!tz.abbreviation) {
      const standardSN = getTZShortName(tz.name, standardSample.date);
      standardAbbreviation = standardSN.name;
    }
  }

  if (hasDst) {
    const dstLN = getTZLongName(tz, dstSample.date);
    dstLongName = dstLN.name;

    const dstSN = abbreviations[dstLongName];
    if (dstSN) {
      dstAbbreviation = dstSN;
    } else {
      const dstSN = getTZShortName(tz.name, dstSample.date);
      dstAbbreviation = dstSN.name;
    }
  }

  return {
    hasDst,
    standardOffset: standardSample.offset,
    dstOffset: hasDst ? dstSample.offset : null,
    standardAbbreviation,
    dstAbbreviation,
    standardLongName,
    dstLongName,
    alternativeName: tz.alternativeName,
    continentName: tz.continentName,
    countryName: tz.countryName,
    countryCode: tz.countryCode,
    group: [...new Set([tz.name, ...tz.group])],
  };
};

const uniqueByKey = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};

const timezones = (() => {
  const obj = {};

  for (const tz of IANAS) {
    if (!obj[tz]) {
      const { group, ...restDstData } = getTZDSTData(tz);

      for (const i of group) {
        const identifiers = getTZIdentifiers(i);
        const cities = getTZCities(i);
        const country = getTZCountry(i);

        obj[i] = {
          identifiers,
          cities: uniqueByKey(cities, 'city'),
          ...restDstData,
          ...country,
        };
      }
    }
  }

  return obj;
})();

export default timezones;
