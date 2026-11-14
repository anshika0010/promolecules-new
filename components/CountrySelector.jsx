"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import {
  SELECTABLE_COUNTRIES,
  COUNTRIES,
  REGIONS,
  GLOBAL_OPTION,
  flagEmoji,
  getCountryFromHost,
  buildCountryUrl,
  saveCountryCookie,
  COUNTRY_NAMES,
  localCountryName,
} from "@/data/countries";
import { useLocale } from "./LocaleProvider";

/**
 * Country dropdown for the navbar.
 * Selecting a country sends the user to <code>.promolecules.com (same path).
 *
 * variant="desktop" → compact pill button with floating panel
 * variant="mobile"  → full-width button with inline list (for the drawer)
 */
export default function CountrySelector({ variant = "desktop", forceClose = false }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState("global");
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const { t, lang } = useLocale();
  const displayName = (c) =>
    c.code === "global" ? t.ui.global : localCountryName(c.code, lang);

  // Work out the active country from the current subdomain
  useEffect(() => {
    setCurrent(getCountryFromHost(window.location.hostname));
  }, []);

  // Close when the parent asks (e.g. navbar hidden on scroll)
  useEffect(() => {
    if (forceClose) setOpen(false);
  }, [forceClose]);

  // Click outside / Escape to close
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = SELECTABLE_COUNTRIES.filter(
      (c) =>
        !q ||
        c.name.toLowerCase().includes(q) ||
        Object.values(COUNTRY_NAMES).some((names) => (names[c.code] || "").toLowerCase().includes(q)) ||
        c.code.includes(q) ||
        c.currency.toLowerCase().includes(q)
    );
    return REGIONS.map((region) => ({
      region,
      items: matches.filter((c) => c.region === region),
    })).filter((g) => g.items.length);
  }, [query]);

  const showGlobal = !query.trim() || "global".includes(query.trim().toLowerCase());

  const selectCountry = (code) => {
    saveCountryCookie(code);
    try {
      localStorage.setItem("selectedCountry", code);
    } catch {}
    setOpen(false);
    if (code === current) return;
    const { pathname, search, hash } = window.location;
    window.location.href = buildCountryUrl(code, `${pathname}${search}${hash}`);
  };

  const active =
    current === "global"
      ? GLOBAL_OPTION
      : COUNTRIES.find((c) => c.code === current) || GLOBAL_OPTION; // full list: on-hold sites still show their own flag

  const isMobile = variant === "mobile";

  const Option = ({ c }) => {
    const selected = c.code === current;
    return (
      <li>
        <button
          type="button"
          role="option"
          aria-selected={selected}
          onClick={() => selectCountry(c.code)}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-start text-sm transition-colors
            ${selected ? "bg-red-500/15 text-red-400" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
        >
          <span className="text-base leading-none">{flagEmoji(c.code)}</span>
          <span className="flex-1 truncate">{displayName(c)}</span>
          {c.currency && <span className="text-[10px] tracking-wider text-white/40">{c.currency}</span>}
          {selected && <Check size={14} />}
        </button>
      </li>
    );
  };

  return (
    <div ref={rootRef} className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Select country, current: ${displayName(active)}`}
        className={`flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-full text-white transition-colors duration-200
          ${isMobile ? "w-full justify-center py-3" : "px-3 sm:px-4 py-2.5 sm:py-3"}`}
      >
        <span className="text-base leading-none">{flagEmoji(active.code)}</span>
        <span className="text-xs font-semibold tracking-widest uppercase">
          {isMobile ? displayName(active) : active.code === "global" ? t.ui.global : active.code}
        </span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`z-[80] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden
            ${isMobile ? "mt-2 w-full" : "absolute end-0 mt-2 w-72"}`}
        >
          <div className="p-2 border-b border-white/10">
            <div className="flex items-center gap-2 px-2 bg-white/5 rounded-lg">
              <Search size={14} className="text-white/40" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.ui.search_country}
                className="w-full bg-transparent py-2 text-sm text-white placeholder:text-white/40 outline-none"
              />
            </div>
          </div>

          <ul role="listbox" className={`overflow-y-auto p-2 ${isMobile ? "max-h-64" : "max-h-80"}`}>
            {showGlobal && <Option c={GLOBAL_OPTION} />}
            {grouped.map((g) => (
              <li key={g.region}>
                <p className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                  {g.region}
                </p>
                <ul>
                  {g.items.map((c) => (
                    <Option key={c.code} c={c} />
                  ))}
                </ul>
              </li>
            ))}
            {!showGlobal && grouped.length === 0 && (
              <li className="px-3 py-4 text-center text-sm text-white/40">{t.ui.no_country}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
