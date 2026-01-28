import { useCallback } from 'react';
import moment from 'moment-timezone';
import timezones from '../../data/timezones.json';
import { getAbbrevKey, getCurrentCity } from '@/utils';

const useTimezone = () => {
  const timeNow = useCallback(() => moment().format('YYYY-MM-DD HH:mm:ss'), []);

  const timeNowTZ = useCallback(
    (tz) => (tz ? moment.tz(tz).format('YYYY-MM-DD HH:mm:ss') : timeNow()),
    [],
  );

  const getTZList = useCallback((value) => {
    const arr = [];
    const seen = new Set();
    const guessedZone = moment.tz.guess();
    const currentCity = getCurrentCity();
    const type = value || 'city';

    for (const timezone in timezones) {
      const tz = timezones[timezone];
      const abbrevKey = getAbbrevKey(tz);

      if (
        type === 'abbreviation' &&
        (seen.has(abbrevKey) || !tz.standardAbbreviation)
      ) {
        continue;
      }

      if (type === 'city' && !tz.cities?.length) {
        continue;
      }

      const { cities, ...restTZ } = tz;
      const identifiers = restTZ.identifiers;

      const obj = { timezone, type, ...restTZ };

      if (type === 'name') {
        arr.push({
          ...obj,
          isCurrent: timezone === guessedZone,
        });
      }

      if (type === 'abbreviation') {
        seen.add(abbrevKey);
        arr.push({
          ...obj,
          isCurrent: identifiers.includes(guessedZone),
        });
      }

      if (type === 'city') {
        for (const c of cities) {
          const cityData = { province: c.province, city: c.city };

          if (
            c.iso2 &&
            c.iso2 !== obj.countryCode &&
            !Number.isFinite(c.iso2)
          ) {
            cityData.countryName = c.country;
            cityData.countryCode = c.iso2;
          }

          arr.push({
            ...obj,
            ...cityData,
            isCurrent:
              currentCity !== -1
                ? c.city === currentCity
                : identifiers.includes(guessedZone),
          });
        }
      }
    }

    const sortBy =
      type === 'city'
        ? 'city'
        : type === 'name'
        ? 'timezone'
        : 'standardAbbreviation';
    return arr.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
  }, []);

  return {
    timeNow,
    timeNowTZ,
    getTZList,
  };
};

export default useTimezone;
