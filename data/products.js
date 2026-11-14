// The Promolecules range — shared by the home page and the shop page.
// Translated descriptions/categories come from data/i18n/<lang>.json ("pd" is in this same order).

export const PRODUCTS = [
  {
    slug: "father-of-insane",
    category: "Pre-Workout",
    categoryKey: "preworkout",
    name: "Father of Insane™",
    description: "Ultra high-stim pre-workout with a 5200 mg blend.",
    image: "/Promolecules/fatherofinsane/father-of-insane-pre-workout.webp",
    href: "/product/father-of-insane/",
  },
  {
    slug: "warflex",
    category: "Pre-Workout",
    categoryKey: "preworkout",
    name: "Warflex™",
    description: "High-stim pre-workout with 395 mg XANCAFF™.",
    image: "/Promolecules/warflexnew/warfle-pre-workout.webp",
    href: "/product/warflex/",
  },
  {
    slug: "hydrapump",
    category: "Hydration",
    categoryKey: "hydration",
    name: "HydraPump+™",
    description: "Liquid glycerol hydration matrix with 10 ml glycerol.",
    image: "/Promolecules/hydrapump2/hydrapump-liquid-glycerol.webp",
    href: "/product/hydrapump/",
  },
  {
    slug: "inopower-r",
    category: "ATP support",
    categoryKey: "atp",
    name: "Inopower-R™",
    description: "Non-stimulant ATP support with a 600 mg ATP blend.",
    image: "/Promolecules/inpower3/inopower-r-ultra-high-stimulant-pre-workout.webp",
    href: "/product/inopower-r/",
  },
  {
    slug: "thermo-nuke-xt",
    category: "Fat burner",
    categoryKey: "fatburner",
    name: "Thermo Nuke XT™",
    description: "Fat-burner formula with a 650 mg blend.",
    image: "/Promolecules/thermo/promolecules-thermo-nuke-xt-img.webp",
    href: "/product/thermo-nuke-xt/",
  },
];

/**
 * Prices per country, in that country's currency (see data/countries.js).
 * Key = country code, then product slug → number.
 * A missing price shows "Price on request" on the site.
 *
 * Example:
 *   bz: { "father-of-insane": 120, warflex: 110 },
 */
export const PRICES = {
  bz: {
    "father-of-insane": null,
    warflex: null,
    hydrapump: null,
    "inopower-r": null,
    "thermo-nuke-xt": null,
  },
};

export const getPrice = (countryCode, slug) => PRICES[countryCode]?.[slug] ?? null;
