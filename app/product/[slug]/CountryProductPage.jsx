"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import {
  SELECTABLE_COUNTRIES,
  REGIONS,
  buildCountryUrl,
  localCountryName,
} from "@/data/countries";
import { FOI_CITIES } from "@/data/i18n/pdp/father-of-insane";

/**
 * Country product page (Father of Insane™, Warflex™, …).
 * Layout: hero → intro → stats → ingredients → how to use → who for / who not
 * → supplement facts → safety → FAQ → where to buy → country sites.
 * Text follows the country subdomain (Arabic + RTL on ae/sa/qa…); images come from productsdetail.json.
 *
 * `content` = { name, getText(lang), ingredients, stats } — see data/i18n/pdp/<product>.js
 */
export default function CountryProductPage({ product, content }) {
  const { lang, country, countryName, fmt: fmtLoc, bidi, displayFont } = useLocale();
  // {loc} → "en Venezuela"; {name} → "O'zbekiston" (for languages where "in <country>" changes the word)
  const fmt = (str = "") => fmtLoc(str.replace(/\{name\}/g, countryName ?? ""));
  const c = content.getText(lang);

  // Latin sites use the condensed brand font; Arabic/Persian/Russian use a plain heavy font
  const head = displayFont === "creepster-regular" ? "anton-regular uppercase" : "font-black";

  const variants = product.variants;
  const flavours = [...new Set(variants.map((v) => v.flavour))];
  const sizes = [...new Set(variants.map((v) => v.size))];

  const [flavour, setFlavour] = useState(variants[0].flavour);
  const [size, setSize] = useState(variants[0].size);
  const [activeImg, setActiveImg] = useState(variants[0].image);

  const pick = (nextFlavour, nextSize) => {
    setFlavour(nextFlavour);
    setSize(nextSize);
    const match =
      variants.find((v) => v.flavour === nextFlavour && v.size === nextSize) ||
      variants.find((v) => v.flavour === nextFlavour || v.size === nextSize);
    if (match) setActiveImg(match.image);
  };

  // "…athletes in Argentina, from Buenos Aires, Córdoba and Rosario, who…" (only where cities are set)
  const cities =
    country && FOI_CITIES[country.code]
      ? c.cities.replace("{cities}", FOI_CITIES[country.code])
      : c.no_cities ?? ""; // Russian needs a comma when no cities are listed
  const intro = fmt(c.intro.replace("{cities}", cities));

  // English keeps the full FAQ from productsdetail.json (matches the page's JSON-LD)
  const faqs = lang === "en" && product.faqs?.length ? product.faqs : c.faq;

  const gallery = [...new Set([activeImg, ...product.images.slice(0, 3)])];
  const factsImg = product.images[3];
  const lifestyleImg = product.images[2] || product.images[0];
  const path = `/product/${product.slug}/`;

  // No prices on the page — visitors ask for a quotation via the contact page
  const QuoteButton = ({ className = "" }) => (
    <Link
      href="/contact-us/"
      className={`inline-block bg-red-600 hover:bg-red-500 hover:-translate-y-px transition text-white font-extrabold px-7 py-3.5 rounded-xl ${className}`}
    >
      {c.quote_cta}
    </Link>
  );

  return (
    <>
      <main className="bg-[#050505] text-[#f4f4f4] leading-relaxed">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          {/* ── Hero ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center pt-7 md:pt-14 pb-10">
            <div className="flex flex-col gap-3">
              <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] md:h-[480px] rounded-[20px] border border-[#2a2a2a] bg-[radial-gradient(circle_at_50%_40%,#2a0508,#0a0a0a_70%)] p-6">
                <Image
                  src={activeImg}
                  alt={`${product.name} – ${flavour} – ${size} ${c.servings}`}
                  width={480}
                  height={480}
                  priority
                  className="h-full w-auto object-contain transition-opacity duration-300"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImg(src)}
                    aria-label={`${product.name} ${i + 1}`}
                    className={`shrink-0 w-[70px] h-[70px] sm:w-[84px] sm:h-[84px] rounded-lg border-2 bg-[#111] overflow-hidden transition ${
                      activeImg === src ? "border-red-600" : "border-transparent hover:border-white/20"
                    }`}
                  >
                    <Image src={src} width={84} height={84} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="inline-block bg-red-600 text-white font-bold text-[13px] tracking-wide px-3 py-1 rounded">
                {c.badge}
              </span>
              <h1 className={`${head} text-red-600 text-[clamp(40px,7vw,76px)] leading-[1.05] mt-3.5 mb-2.5`}>
                {bidi(content.name)}
              </h1>
              <p className="text-lg sm:text-[19px] mb-3.5">{c.tag}</p>
              <div className="border-s-4 border-red-600 bg-[#1a0507] px-3.5 py-2.5 my-4 font-bold">{c.warn}</div>

              {/* Flavour / servings — switch the product image */}
              <p className="text-red-500 font-bold text-xs uppercase tracking-[2px] mb-2">{c.flavour}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {flavours.map((f) => (
                  <button
                    key={f}
                    onClick={() => pick(f, size)}
                    className={`px-3.5 py-1.5 text-sm rounded-full border transition ${
                      flavour === f ? "bg-red-600 border-red-600 text-white" : "bg-[#181818] border-[#2a2a2a] hover:border-red-500"
                    }`}
                  >
                    {f.replace(/-/g, " ")}
                  </button>
                ))}
              </div>
              <p className="text-red-500 font-bold text-xs uppercase tracking-[2px] mb-2">{c.servings}</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => pick(flavour, s)}
                    className={`px-3.5 py-1.5 text-sm rounded-full border transition ${
                      size === s ? "bg-red-600 border-red-600 text-white" : "bg-[#181818] border-[#2a2a2a] hover:border-red-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <QuoteButton className="mt-6" />
            </div>
          </div>

          <p className="text-[17px] sm:text-lg text-[#d6d6d6] max-w-[860px] mb-9">{intro}</p>

          {/* ── Stats ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-14">
            {content.stats.map((value, i) => (
              <div key={value} className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5 text-center">
                <b dir="ltr" className="block anton-regular text-[34px] text-red-600">{value}</b>
                <span className="text-[#a8a8a8] text-sm">{c.stats[i]}</span>
              </div>
            ))}
          </div>

          {/* ── Ingredients (hidden when a product has no ingredient list; the facts image still shows) ── */}
          {content.ingredients?.length > 0 && (
            <Section title={c.ingredients_h} head={head}>
              <p className="mb-3">{c.ingredients_p}</p>
              <Chips items={content.ingredients} />
              <div className="mt-3">
                <Chips items={flavours.map((f) => f.replace(/-/g, " "))} />
              </div>
            </Section>
          )}

          {/* ── How to use ── */}
          <Section title={c.howto_h} head={head}>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {c.steps.map((step, i) => (
                <li key={i} className="bg-[#111] border border-[#2a2a2a] rounded-2xl px-5 py-5">
                  <span className="block anton-regular text-[34px] text-red-600 mb-1.5">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Section>

          {/* ── Who for / who not ── */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6">
              <h2 className={`${head} text-red-600 text-2xl mb-4`}>{c.who_h}</h2>
              <ul className="list-disc ps-5 space-y-1.5">
                {c.who.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
            <div className="bg-[#111] border border-[#5a0a10] rounded-2xl p-6">
              <h2 className={`${head} text-red-600 text-2xl mb-4`}>{c.skip_h}</h2>
              <p>{c.skip_p}</p>
            </div>
          </section>

          {/* ── Supplement facts + safety ── */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 items-start">
            {factsImg && (
              <div>
                <h2 className={`${head} text-red-600 text-[30px] mb-4`}>{c.facts_h}</h2>
                <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#111]">
                  <Image
                    src={factsImg}
                    alt={`${product.name} – ${c.facts_h}`}
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}
            <div>
              <h2 className={`${head} text-red-600 text-[30px] mb-4`}>{c.safety_h}</h2>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6">
                <ul className="list-disc ps-5 space-y-1.5">
                  {c.safety.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <Section title={c.faq_h} head={head}>
            {faqs.map((f, i) => (
              <details key={i} className="group bg-[#111] border border-[#2a2a2a] rounded-xl mb-2.5">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between gap-3 px-4.5 py-4 font-bold">
                  {bidi(fmt(f.question))}
                  <span className="text-red-600 text-[22px] leading-none group-open:hidden">+</span>
                  <span className="text-red-600 text-[22px] leading-none hidden group-open:inline">–</span>
                </summary>
                <p className="px-4.5 pb-4.5 text-[#cfcfcf]">{bidi(fmt(f.answer))}</p>
              </details>
            ))}
          </Section>

          {/* ── Where to buy ── */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-[linear-gradient(135deg,#2a0508,#0b0b0b)] border border-[#5a0a10] rounded-[20px] p-6 sm:p-10 mb-14">
            <div className="flex justify-center">
              <Image
                src={lifestyleImg}
                alt={product.name}
                width={400}
                height={400}
                className="h-[240px] sm:h-[320px] w-auto object-contain"
              />
            </div>
            <div className="text-center md:text-start">
              <h2 className={`${head} text-red-600 text-[30px] mb-3`}>{c.buy_h}</h2>
              <p className="text-[#a8a8a8] text-sm mb-5">{fmt(c.quote_p)}</p>
              <QuoteButton />
            </div>
          </section>

          {/* ── Country sites ── */}
          <section className="mb-14">
            <h2 className={`${head} text-red-600 text-[30px] mb-2`}>{c.worldwide_h}</h2>
            {REGIONS.map((region) => (
              <div key={region}>
                <h3 className="text-sm tracking-[0.08em] uppercase text-[#a8a8a8] mt-5 mb-2.5">{region}</h3>
                <div className="flex flex-wrap gap-2">
                  {SELECTABLE_COUNTRIES.filter((k) => k.region === region).map((k) => {
                    const current = country?.code === k.code;
                    return (
                      <a
                        key={k.code}
                        href={buildCountryUrl(k.code, path)}
                        hrefLang={k.hreflang}
                        lang={k.language}
                        aria-current={current ? "page" : undefined}
                        className={`border rounded-lg px-3 py-1.5 text-sm transition ${
                          current
                            ? "border-red-600 bg-[#1a0507] text-white"
                            : "border-[#2a2a2a] text-[#d0d0d0] hover:border-red-600 hover:text-white"
                        }`}
                      >
                        {localCountryName(k.code, k.language)}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>

          <p className="border-t border-[#2a2a2a] pt-7 pb-10 text-[#a8a8a8] text-[13px]">{c.disclaimer}</p>
        </div>
      </main>
    </>
  );
}

function Section({ title, head, children }) {
  return (
    <section className="mb-14">
      <h2 className={`${head} text-red-600 text-[30px] tracking-wide mb-4.5`}>{title}</h2>
      {children}
    </section>
  );
}

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item} dir="ltr" className="bg-[#181818] border border-[#2a2a2a] rounded-full px-4 py-2 text-[15px]">
          {item}
        </li>
      ))}
    </ul>
  );
}
