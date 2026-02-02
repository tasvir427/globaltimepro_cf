import { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';
import timezones from '@/generated/timezones';
import { getAbbrevKey } from '@/utils';

const useTimezone = () => {
  const [userCity, setUserCity] = useState(-1);

  useEffect(() => {
    const initUserCity = async () => {
      if (userCity !== -1) return;

      let city = -2;
      try {
        const res = await fetch('/api/get-user-city', {
          method: 'GET',
          credentials: 'same-origin',
        });
        if (res.ok) {
          const data = await res.json();

          if (data.city) {
            city = data.city;
          }
        }
      } catch (err) {
        console.error('Failed to get user city:', err);
      } finally {
        setUserCity(city);
      }
    };
    initUserCity();
  }, [userCity]);

  const timeNow = useCallback(() => moment().format('YYYY-MM-DD HH:mm:ss'), []);

  const timeNowTZ = useCallback(
    (tz) => (tz ? moment.tz(tz).format('YYYY-MM-DD HH:mm:ss') : timeNow()),
    [],
  );

  const getTZList = useCallback(
    (value) => {
      const arr = [];
      const seen = new Set();
      const guessedZone = moment.tz.guess();
      const type = value || 'city';

      for (const timezone in timezones) {
        const tz = timezones[timezone];
        const abbrevKey = getAbbrevKey(tz);

        if (
          type === 'abbreviation' &&
          (seen.has(abbrevKey) || !tz.standardAbbreviation)
        )
          continue;
        if (type === 'city' && !tz.cities?.length) continue;

        const { cities, ...restTZ } = tz;
        const identifiers = restTZ.identifiers;
        const obj = { timezone, type, ...restTZ };

        if (type === 'name') {
          arr.push({ ...obj, isCurrent: timezone === guessedZone });
        }

        if (type === 'abbreviation') {
          seen.add(abbrevKey);
          arr.push({ ...obj, isCurrent: identifiers.includes(guessedZone) });
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
                userCity !== -1
                  ? c.city === userCity
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
    },
    [userCity],
  );

  return {
    timeNow,
    timeNowTZ,
    getTZList,
    userCity,
  };
};

export default useTimezone;
