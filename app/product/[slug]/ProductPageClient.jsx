"use client";

import { useState } from "react";
import ReviewModal from "./ReviewModal";
import CustomerReviews from "./CustomerReviews";
import ProductDetail from "./ProductDetail";
import FAQSection from "./FAQSection"; // 👈 Import FAQ component
import CountryProductPage from "./CountryProductPage";
import { useLocale } from "@/components/LocaleProvider";
import { getFoiTranslation, FOI_CONTENT } from "@/data/i18n/pdp/father-of-insane";
import { WARFLEX_CONTENT } from "@/data/i18n/pdp/warflex";
import { INOPOWER_CONTENT } from "@/data/i18n/pdp/inopower-r";
import { HYDRAPUMP_CONTENT } from "@/data/i18n/pdp/hydrapump";
import { THERMO_CONTENT } from "@/data/i18n/pdp/thermo-nuke-xt";

// Products that use the country-page layout (Arabic + RTL on ae/sa/qa…, Spanish on ar/mx/co…).
// A content object with `langs` uses it only for those languages (HydraPump+™: Arabic only so far).
const COUNTRY_PAGES = {
  "father-of-insane": FOI_CONTENT,
  warflex: WARFLEX_CONTENT,
  "inopower-r": INOPOWER_CONTENT,
  hydrapump: HYDRAPUMP_CONTENT,
  "thermo-nuke-xt": THERMO_CONTENT,
};

export default function ProductPageClient({ product }) {
  const [openReview, setOpenReview] = useState(false);
  const { lang, fmt } = useLocale();

  // Arabic (etc.) FAQ for Father of Insane™ on country sites; otherwise the English FAQ from the JSON
  const tr = product.slug === "father-of-insane" ? getFoiTranslation(lang) : null;
  const faqs = tr ? tr.faq.map((f) => ({ question: fmt(f.question), answer: fmt(f.answer) })) : product.faqs;
  const faqLabels = tr ? { kicker: tr.faq_kicker, title: tr.faq_title, sub: tr.faq_sub } : undefined;

  const countryPage = COUNTRY_PAGES[product.slug];
  if (countryPage && (!countryPage.langs || countryPage.langs.includes(lang))) {
    return <CountryProductPage product={product} content={countryPage} />;
  }

  return (
    <div>
      <ProductDetail product={product} />

      {/* FAQ Section */}
      {faqs?.length > 0 && (
        <FAQSection faqs={faqs} labels={faqLabels} />
      )}

      {/* <CustomerReviews
        reviews={product.reviews}
        openModal={() => setOpenReview(true)}
      /> */}

      <ReviewModal
        open={openReview}
        closeModal={() => setOpenReview(false)}
      />
    </div>
  );
}