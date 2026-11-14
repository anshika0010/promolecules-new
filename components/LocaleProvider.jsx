"use client";

import { createContext, Fragment, useContext, useEffect, useMemo, useState } from "react";
import en from "@/data/i18n/en.json";
import ar from "@/data/i18n/ar.json";
import es from "@/data/i18n/es.json";
import fa from "@/data/i18n/fa.json";
import fr from "@/data/i18n/fr.json";
import ru from "@/data/i18n/ru.json";
import sw from "@/data/i18n/sw.json";
import uz from "@/data/i18n/uz.json";
import ms from "@/data/i18n/ms.json";
import pt from "@/data/i18n/pt.json";
import { COUNTRIES, localCountryName, localLoc, getCountryFromHost } from "@/data/countries";

/**
 * Site language follows the country subdomain:
 *   ae.promolecules.com → country language "ar" → Arabic text + right-to-left layout
 *   mx.promolecules.com → country language "es" → Spanish text
 *   ir.promolecules.com → country language "fa" → Persian text + right-to-left layout
 *   ht.promolecules.com → country language "fr" → French text
 *   my.promolecules.com → country language "ms" → Malay text
 *   br.promolecules.com → country language "pt" → Portuguese (Brazil) text
 *   kz/tm/kg/tj         → "ru" Russian · tz → "sw" Swahili · uz → "uz" Uzbek
 *   anything else       → English
 * Add another language by creating data/i18n/<lang>.json and adding it here.
 */
const DICTIONARIES = { en, ar, es, fa, fr, ms, pt, ru, sw, uz };

/**
 * Languages the brand heading font ("Gloomy Things") can't draw → headings use a plain bold font.
 * The font only has plain A–Z/a–z: no Arabic/Persian/Cyrillic, and no accented letters
 * (á é í ó ú ñ ç ã õ ê à ¿ ¡…), so Spanish, Portuguese and French headings would mix fonts.
 */
const NON_LATIN = new Set(["ar", "fa", "ru", "es", "pt", "fr"]);

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const code = getCountryFromHost(window.location.hostname);
    setCountry(COUNTRIES.find((c) => c.code === code) ?? null);
  }, []);

  const lang = country && DICTIONARIES[country.language] ? country.language : "en";
  const t = DICTIONARIES[lang];

  // Keep <html lang/dir> in sync so the browser lays the page out right-to-left for Arabic
  useEffect(() => {
    document.documentElement.lang = t.lang || lang; // e.g. "pt-BR"
    document.documentElement.dir = t.dir;
  }, [lang, t.lang, t.dir]);

  const value = useMemo(() => {
    const countryName = country ? localCountryName(country.code, lang) : null;
    // "{loc}" → "in Belize" / "في الإمارات" / "в Казахстане"; empty on the main (global) site
    const loc = country ? localLoc(country.code, lang) : "";
    // Brand display font for headings (Creepster is Latin-only)
    const displayFont = NON_LATIN.has(lang) ? "font-black" : "creepster-regular";
    const cur = country?.currency ?? "";

    /**
     * In right-to-left text a "™" after a Latin name jumps to the wrong side
     * ("™Warflex"). An invisible left-to-right mark after it keeps it in place.
     */
    const bidi = (str = "") => (t.dir === "rtl" ? str.replace(/™(?!\u200E)/g, "™\u200E") : str);

    /** Fill {loc} / {cur}. On the global site the empty {loc} and its space are removed. */
    const fmt = (str = "") =>
      bidi(
        str
          .replace(/\s?\{loc\}/g, loc ? ` ${loc}` : "")
          .replace(/^\s+/, "")
          .replace(/\{cur\}/g, cur)
      );

    /** Like fmt, but returns React nodes with {loc} wrapped in a highlighted span. */
    const rich = (str = "", className = "text-red-500", fallback = "") => {
      const text = loc || fallback;
      if (!text) return fmt(str);
      return str.split("{loc}").map((part, i, arr) => (
        <Fragment key={i}>
          {bidi(part.replace(/\{cur\}/g, cur))}
          {i < arr.length - 1 && <span className={className}>{text}</span>}
        </Fragment>
      ));
    };

    return { t, lang, dir: t.dir, country, countryName, loc, fmt, rich, bidi, displayFont };
  }, [t, lang, country]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
