import { PATHS } from '@/paramsData';
import { SITE_URL } from '@/utils';

const sitemapList = [
  {
    path: PATHS.timezoneConverter,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstChecker,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagPlanner,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.downloadTimezoneList,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromMumbaiToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSydneyToLosAngeles,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromNewYorkToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromTokyoToParis,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromLosAngelesToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSanFranciscoToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromLondonToDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromBerlinToBangkok,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSanFranciscoToParis,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromParisToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInSaoPaulo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInBerlin,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInChicago,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInLosAngeles,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInParis,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInToronto,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInMexicoCity,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMumbaiToDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSingaporeToSanFrancisco,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLondonToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLosAngelesToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromParisToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBeijingToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromJohannesburgToDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSaoPauloToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNewYorkToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMumbaiToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromTokyoToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSingaporeToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSanFranciscoToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBerlinToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromParisToDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLondonToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDubaiToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNewYorkToMumbai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromChicagoToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromHongKongToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromTorontoToBerlin,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDubaiToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMumbaiToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSanFranciscoToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSydneyToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromTokyoToParis,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBerlinToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBeijingToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromTorontoToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDubaiToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInMumbai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInCairo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInMoscow,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInAtlanta,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInIstanbul,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInHongKong,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInShanghai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInJohannesburg,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInBangkok,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInDelhi,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInSeoul,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInBuenosAires,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInMiami,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInMadrid,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInLagos,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInRioDeJaneiro,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.dstInCapeTown,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromDubaiToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromTorontoToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSaoPauloToFrankfurt,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromChicagoToRome,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromLondonToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromDubaiToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromNewYorkToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSanFranciscoToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromParisToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromShanghaiToSanFrancisco,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromSingaporeToLondon,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromDubaiToNewYork,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromBengaluruToSanFrancisco,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromLondonToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromNewYorkToSydney,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromCairoToBeijing,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromReykjavikToTokyo,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromHonoluluToDubai,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromAnchorageToSingapore,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.jetLagFromMexicoCityToSeoul,
    lastModified: '2025-10-01T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBerlinToSaoPaulo,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNewYorkToShanghai,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLondonToDelhi,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSanFranciscoToTelAvivYafo,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromFrankfurtToSingapore,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSeoulToSydney,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromZurichToHongKong,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMexicoCityToTokyo,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBerlinToCapeTown,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromStockholmToBengaluru,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromZurichToNewYork,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSeoulToSanFrancisco,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromCairoToIstanbul,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMexicoCityToSeoul,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSeoulToLondon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMumbaiToToronto,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromAucklandToLosAngeles,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromIstanbulToNewYork,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDubaiToShanghai,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSydneyToSantiago,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDelhiToBeijing,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromTorontoToMelbourne,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromIstanbulToBangkok,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSeattleToTaipei,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromChicagoToLisbon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBuenosAiresToMadrid,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLagosToLondon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNairobiToAmsterdam,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromMumbaiToTokyo,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromManilaToDubai,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromBangkokToNewYork,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNewYorkToTokyo,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromJakartaToLondon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromManilaToNewYork,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLosAngelesToLondon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLagosToNewYork,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromNairobiToLondon,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromSeoulToVancouver,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromDohaToSingapore,
    lastModified: '2025-11-24T00:00:00Z',
  },
  {
    path: PATHS.timezoneFromLosAngelesToMumbai,
    lastModified: '2025-11-24T00:00:00Z',
  },
];

const sitemap = () => {
  return sitemapList.map((s) => ({
    url: `${SITE_URL}/${s.path}`,
    lastModified: new Date(s.lastModified),
  }));
};

export default sitemap;
