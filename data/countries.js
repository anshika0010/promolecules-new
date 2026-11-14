// Country subdomains — source: deploy-map.csv
// Each country is served at https://<code>.promolecules.com

// In development (`npm run dev`) the root is "localhost", so countries open at
// http://ae.localhost:3000 — browsers resolve *.localhost to 127.0.0.1, no hosts-file setup.
// Override with NEXT_PUBLIC_ROOT_DOMAIN if needed.
const IS_DEV = process.env.NODE_ENV === "development";
export const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || (IS_DEV ? "localhost" : "promolecules.com");

export const COUNTRIES = [
  // ── Middle East & Africa ──
  { code: "ae", name: "UAE", region: "Middle East & Africa", language: "ar", hreflang: "ar-AE", currency: "AED", status: "ready" },
  { code: "qa", name: "Qatar", region: "Middle East & Africa", language: "ar", hreflang: "ar-QA", currency: "QAR", status: "ready" },
  { code: "dz", name: "Algeria", region: "Middle East & Africa", language: "ar", hreflang: "ar-DZ", currency: "DZD", status: "ready" },
  { code: "jo", name: "Jordan", region: "Middle East & Africa", language: "ar", hreflang: "ar-JO", currency: "JOD", status: "ready" },
  { code: "kw", name: "Kuwait", region: "Middle East & Africa", language: "ar", hreflang: "ar-KW", currency: "KWD", status: "ready" },
  { code: "lb", name: "Lebanon", region: "Middle East & Africa", language: "ar", hreflang: "ar-LB", currency: "USD", status: "ready" },
  { code: "eg", name: "Egypt", region: "Middle East & Africa", language: "ar", hreflang: "ar-EG", currency: "EGP", status: "ready" },
  { code: "sy", name: "Syria", region: "Middle East & Africa", language: "ar", hreflang: "ar-SY", currency: "USD", status: "on-hold" },
  { code: "tn", name: "Tunisia", region: "Middle East & Africa", language: "ar", hreflang: "ar-TN", currency: "TND", status: "ready" },
  { code: "ma", name: "Morocco", region: "Middle East & Africa", language: "ar", hreflang: "ar-MA", currency: "MAD", status: "ready" },
  { code: "bh", name: "Bahrain", region: "Middle East & Africa", language: "ar", hreflang: "ar-BH", currency: "BHD", status: "ready" },
  { code: "iq", name: "Iraq", region: "Middle East & Africa", language: "ar", hreflang: "ar-IQ", currency: "IQD", status: "ready" },
  { code: "ir", name: "Iran", region: "Middle East & Africa", language: "fa", hreflang: "fa-IR", currency: "IRR", status: "on-hold" },
  { code: "om", name: "Oman", region: "Middle East & Africa", language: "ar", hreflang: "ar-OM", currency: "OMR", status: "ready" },
  { code: "sa", name: "Saudi Arabia", region: "Middle East & Africa", language: "ar", hreflang: "ar-SA", currency: "SAR", status: "ready" },
  { code: "my", name: "Malaysia", region: "Middle East & Africa", language: "ms", hreflang: "ms-MY", currency: "MYR", status: "ready" },
  { code: "ly", name: "Libya", region: "Middle East & Africa", language: "ar", hreflang: "ar-LY", currency: "LYD", status: "ready" },
  { code: "tz", name: "Tanzania", region: "Middle East & Africa", language: "sw", hreflang: "sw-TZ", currency: "TZS", status: "ready" },

  // ── Central Asia ──
  { code: "kz", name: "Kazakhstan", region: "Central Asia", language: "ru", hreflang: "ru-KZ", currency: "KZT", status: "ready" },
  { code: "uz", name: "Uzbekistan", region: "Central Asia", language: "uz", hreflang: "uz-UZ", currency: "UZS", status: "ready" },
  { code: "tm", name: "Turkmenistan", region: "Central Asia", language: "ru", hreflang: "ru-TM", currency: "TMT", status: "ready" },
  { code: "kg", name: "Kyrgyzstan", region: "Central Asia", language: "ru", hreflang: "ru-KG", currency: "KGS", status: "ready" },
  { code: "tj", name: "Tajikistan", region: "Central Asia", language: "ru", hreflang: "ru-TJ", currency: "TJS", status: "ready" },

  // ── South America ──
  { code: "br", name: "Brazil", region: "South America", language: "pt", hreflang: "pt-BR", currency: "BRL", status: "ready" },
  { code: "ar", name: "Argentina", region: "South America", language: "es", hreflang: "es-AR", currency: "ARS", status: "ready" },
  { code: "co", name: "Colombia", region: "South America", language: "es", hreflang: "es-CO", currency: "COP", status: "ready" },
  { code: "cl", name: "Chile", region: "South America", language: "es", hreflang: "es-CL", currency: "CLP", status: "ready" },
  { code: "pe", name: "Peru", region: "South America", language: "es", hreflang: "es-PE", currency: "PEN", status: "ready" },
  { code: "ve", name: "Venezuela", region: "South America", language: "es", hreflang: "es-VE", currency: "USD", status: "ready" },
  { code: "ec", name: "Ecuador", region: "South America", language: "es", hreflang: "es-EC", currency: "USD", status: "ready" },
  { code: "bo", name: "Bolivia", region: "South America", language: "es", hreflang: "es-BO", currency: "BOB", status: "ready" },
  { code: "py", name: "Paraguay", region: "South America", language: "es", hreflang: "es-PY", currency: "PYG", status: "ready" },
  { code: "uy", name: "Uruguay", region: "South America", language: "es", hreflang: "es-UY", currency: "UYU", status: "ready" },

  // ── Central America ──
  { code: "mx", name: "Mexico", region: "Central America", language: "es", hreflang: "es-MX", currency: "MXN", status: "ready" },
  { code: "gt", name: "Guatemala", region: "Central America", language: "es", hreflang: "es-GT", currency: "GTQ", status: "ready" },
  { code: "hn", name: "Honduras", region: "Central America", language: "es", hreflang: "es-HN", currency: "HNL", status: "ready" },
  { code: "sv", name: "El Salvador", region: "Central America", language: "es", hreflang: "es-SV", currency: "USD", status: "ready" },
  { code: "ni", name: "Nicaragua", region: "Central America", language: "es", hreflang: "es-NI", currency: "NIO", status: "ready" },
  { code: "cr", name: "Costa Rica", region: "Central America", language: "es", hreflang: "es-CR", currency: "CRC", status: "ready" },
  { code: "pa", name: "Panama", region: "Central America", language: "es", hreflang: "es-PA", currency: "USD", status: "ready" },
  { code: "bz", name: "Belize", region: "Central America", language: "en", hreflang: "en-BZ", currency: "BZD", status: "ready" },

  // ── Caribbean ──
  { code: "cu", name: "Cuba", region: "Caribbean", language: "es", hreflang: "es-CU", currency: "CUP", status: "on-hold" },
  { code: "do", name: "Dominican Republic", region: "Caribbean", language: "es", hreflang: "es-DO", currency: "DOP", status: "ready" },
  { code: "ht", name: "Haiti", region: "Caribbean", language: "fr", hreflang: "fr-HT", currency: "HTG", status: "ready" },
  { code: "pr", name: "Puerto Rico", region: "Caribbean", language: "es", hreflang: "es-PR", currency: "USD", status: "ready" },
];

// Countries shown in the navbar dropdown. On-hold (noindex) countries are hidden;
// remove the filter to show them too.
export const SELECTABLE_COUNTRIES = COUNTRIES.filter((c) => c.status === "ready");

export const REGIONS = [...new Set(SELECTABLE_COUNTRIES.map((c) => c.region))];

// "Global" = the main promolecules.com site (no country subdomain)
export const GLOBAL_OPTION = { code: "global", name: "Global", region: "Global" };

export const COOKIE_NAME = "selectedCountry";

/** 2-letter code -> flag emoji (subdomain codes are ISO 3166-1 alpha-2). */
export const flagEmoji = (code) =>
  code === "global"
    ? "🌐"
    : code
        .toUpperCase()
        .replace(/./g, (ch) => String.fromCodePoint(127397 + ch.charCodeAt(0)));

/** Country code from a hostname like "ae.promolecules.com", or "global". */
export const getCountryFromHost = (hostname = "") => {
  const host = hostname.toLowerCase().replace(/^www\./, "");
  if (!host.endsWith(`.${ROOT_DOMAIN}`)) return "global"; // ROOT_DOMAIN has no port; hostname excludes it
  const sub = host.slice(0, -(ROOT_DOMAIN.length + 1));
  return COUNTRIES.some((c) => c.code === sub) ? sub : "global";
};

/** Full URL for a country, keeping the current path + query. */
export const buildCountryUrl = (code, path = "/") => {
  const host = code === "global" ? ROOT_DOMAIN : `${code}.${ROOT_DOMAIN}`;
  if (IS_DEV && typeof window !== "undefined") {
    // keep http and the dev port, e.g. http://ae.localhost:3000/shop/
    const { protocol, port } = window.location;
    return `${protocol}//${host}${port ? `:${port}` : ""}${path}`;
  }
  return `https://${host}${path}`;
};

/** Remember the choice on every *.promolecules.com subdomain (localStorage is per-subdomain). */
export const saveCountryCookie = (code) => {
  if (typeof document === "undefined") return;
  // Browsers refuse a domain attribute on localhost, so only share across subdomains in production
  const onRoot = ROOT_DOMAIN !== "localhost" && window.location.hostname.endsWith(ROOT_DOMAIN);
  const domainAttr = onRoot ? `; domain=.${ROOT_DOMAIN}` : "";
  document.cookie = `${COOKIE_NAME}=${code}; path=/; max-age=31536000; SameSite=Lax${domainAttr}`;
};

export const readCountryCookie = () => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? match[1] : null;
};

// ── Localisation helpers ─────────────────────────────────────────

/** Country names in each site language, used for "{loc}" (e.g. "في الإمارات", "en México"). */
export const COUNTRY_NAMES_AR = {
  ae: "الإمارات", qa: "قطر", dz: "الجزائر", jo: "الأردن", kw: "الكويت", lb: "لبنان",
  eg: "مصر", sy: "سوريا", tn: "تونس", ma: "المغرب", bh: "البحرين", iq: "العراق",
  om: "عُمان", sa: "السعودية", ly: "ليبيا",
};
export const COUNTRY_NAMES_ES = {
  ar: "Argentina", co: "Colombia", cl: "Chile", pe: "Perú", ve: "Venezuela", ec: "Ecuador",
  bo: "Bolivia", py: "Paraguay", uy: "Uruguay", mx: "México", gt: "Guatemala", hn: "Honduras",
  sv: "El Salvador", ni: "Nicaragua", cr: "Costa Rica", pa: "Panamá", cu: "Cuba",
  do: "República Dominicana", pr: "Puerto Rico",
};
export const COUNTRY_NAMES_FA = { ir: "ایران" };
export const COUNTRY_NAMES_FR = { ht: "Haïti" };
export const COUNTRY_NAMES_MS = { my: "Malaysia" };
export const COUNTRY_NAMES_PT = { br: "Brasil" };
export const COUNTRY_NAMES_RU = { kz: "Казахстан", tm: "Туркменистан", kg: "Кыргызстан", tj: "Таджикистан" };
export const COUNTRY_NAMES_SW = { tz: "Tanzania" };
export const COUNTRY_NAMES_UZ = { uz: "O'zbekiston" };
export const COUNTRY_NAMES = {
  ar: COUNTRY_NAMES_AR, es: COUNTRY_NAMES_ES, fa: COUNTRY_NAMES_FA, fr: COUNTRY_NAMES_FR,
  ms: COUNTRY_NAMES_MS, pt: COUNTRY_NAMES_PT, ru: COUNTRY_NAMES_RU, sw: COUNTRY_NAMES_SW, uz: COUNTRY_NAMES_UZ,
};

/** Word for "in" before the country name, per language. */
export const LOC_PREFIX = { en: "in", ar: "في", es: "en", fa: "در", fr: "en", ms: "di", pt: "no", sw: "nchini" }; // pt: "no Brasil", sw: "nchini Tanzania"

/**
 * Full "in <country>" phrase where the name itself changes form,
 * so prefix + name would be wrong (Russian case endings, Uzbek "-da" suffix).
 */
export const COUNTRY_LOC = {
  ru: { kz: "в Казахстане", tm: "в Туркменистане", kg: "в Кыргызстане", tj: "в Таджикистане" },
  uz: { uz: "O'zbekistonda" },
};

/** "{loc}" text for a country in a language: "in Belize", "в Казахстане", "O'zbekistonda"… */
export const localLoc = (code, lang) =>
  COUNTRY_LOC[lang]?.[code] || `${LOC_PREFIX[lang] || LOC_PREFIX.en} ${localCountryName(code, lang)}`;

/** Country name in the given language (falls back to the English name). */
export const localCountryName = (code, lang) => COUNTRY_NAMES[lang]?.[code] || COUNTRIES.find((c) => c.code === code)?.name || code;

/** Which training tips (keys of `tips` in data/i18n/*.json) each country shows. */
const ARABIC_TIPS = ["hot", "ramadan"];
export const COUNTRY_TIPS = {
  ...Object.fromEntries(Object.keys(COUNTRY_NAMES_AR).map((c) => [c, ARABIC_TIPS])),
  ir: ["hot", "ramadan"],
  my: ["humid", "ramadan"],
  // Central Asia: hot summers, cold winters
  kz: ["hot", "cold"], tm: ["hot", "cold"], kg: ["hot", "cold"], tj: ["hot", "cold"], uz: ["hot", "cold"],
};
export const DEFAULT_TIPS = ["humid", "hot"];
export const getCountryTips = (code) => COUNTRY_TIPS[code] || DEFAULT_TIPS;
