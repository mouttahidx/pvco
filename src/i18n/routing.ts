import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["fr", "en"] as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr", "en"],
  localeDetection: false,
  // Used when no locale matches
  defaultLocale: "fr",
  localePrefix: "as-needed",
  pathnames: {
    "/": {
      fr: "/",
      en: "/",
    },
    
    "/about-sunspace-sunrooms": {
      fr: "/a-propos-de-sunspace",
      en: "/about-sunspace-sunrooms",
    },
    "/merci": {
      fr: "/merci",
      en: "/thank-you",
    },
    "/blogue": {
      fr: "/blogue",
      en: "/blog",
    },
    "/blogue/[...slug]": {
      fr: "/blogue/[...slug]",
      en: "/blog/[...slug]",
    },
    "/become-a-sunspace-sunrooms-dealer": {
      fr: "/devenir-un-representant-sunspace",
      en: "/become-a-sunspace-sunrooms-dealer",
    },
    "/contact": {
      fr: "/contact",
      en: "/contact-us",
    },
    "/our-products/": {
      fr: "/nos-produits/",
      en: "/our-products/",
    },
    "/homeshows/": {
      fr: "/salons-dexposition/",
      en: "/homeshows/",
    },
    // Sunrooms
    "/our-products/sunrooms": {
      fr: "/nos-produits/solariums",
      en: "/our-products/sunrooms",
    },
    "/our-products/sunrooms/model-100-screenrooms": {
      fr: "/nos-produits/solariums/modele-100-piece-moustiquaire",
      en: "/our-products/sunrooms/model-100-screenrooms",
    },
    "/our-products/sunrooms/model-200-weathermaster-sunroom": {
      fr: "/nos-produits/solariums/modele-200-solarium-weathermaster",
      en: "/our-products/sunrooms/model-200-weathermaster-sunroom",
    },
    "/our-products/sunrooms/model-300-3-season-sunrooms": {
      fr: "/nos-produits/solariums/modele-300-solarium-3-saisons",
      en: "/our-products/sunrooms/model-300-3-season-sunrooms",
    },
    "/our-products/sunrooms/model-400-insulated-sunrooms": {
      fr: "/nos-produits/solariums/modele-400-solarium-isole",
      en: "/our-products/sunrooms/model-400-insulated-sunrooms",
    },

    // WeatherMaster
    "/our-products/weathermaster": {
      fr: "/nos-produits/weathermaster",
      en: "/our-products/weathermaster",
    },
    "/our-products/weathermaster/weathermaster-vertical-four-track-windows": {
      fr: "/nos-produits/weathermaster/fenetres-verticales-weatherMaster-a-4-panneaux",
      en: "/our-products/weathermaster/weathermaster-vertical-four-track-windows",
    },
    "/our-products/weathermaster/weathermaster-doors": {
      fr: "/nos-produits/weathermaster/portes-weathermaster",
      en: "/our-products/weathermaster/weathermaster-doors",
    },
    "/our-products/weathermaster/weathermaster-horizontal-four-track-windows": {
      fr: "/nos-produits/weathermaster/fenetres-horizontales-weathermaster-a-4-panneaux",
      en: "/our-products/weathermaster/weathermaster-horizontal-four-track-windows",
    },
    "/our-products/weathermaster/weathermaster-plus": {
      fr: "/nos-produits/weathermaster/weathermaster-plus",
      en: "/our-products/weathermaster/weathermaster-plus",
    },

    // Sunwall
    "/our-products/sunwall-privacy-windbreak": {
      fr: "/nos-produits/murs-de-sunspace",
      en: "/our-products/sunwall-privacy-windbreak",
    },

    // Patio
    "/our-products/patio-covers": {
      fr: "/nos-produits/toiture-pour-patio",
      en: "/our-products/patio-covers",
    },
    "/our-products/patio-covers/insulated-roof-systems": {
      fr: "/nos-produits/toiture-pour-patio/toiture-isolee",
      en: "/our-products/patio-covers/insulated-roof-systems",
    },
    "/our-products/patio-covers/acrylic-patio-covers": {
      fr: "/nos-produits/toiture-pour-patio/toiture-dacrylique",
      en: "/our-products/patio-covers/acrylic-patio-covers",
    },
    "/our-products/patio-covers/hybrid-patio-covers": {
      fr: "/nos-produits/toiture-pour-patio/toiture-hybride",
      en: "/our-products/patio-covers/hybrid-patio-covers",
    },

    // Decking
    "/our-products/decking-systems": {
      fr: "/nos-produits/plancher-pour-patio",
      en: "/our-products/decking-systems",
    },

    // Resort
    "/our-products/rv-resort-living": {
      fr: "/nos-produits/pour-la-vie-en-vehicule-recreatif",
      en: "/our-products/rv-resort-living",
    },

    // Interior Glass
    "/our-products/interior-glass-railings": {
      fr: "/nos-produits/rampes-de-verre-pour-linterieur",
      en: "/our-products/interior-glass-railings",
    },

    // Railing
    "/our-products/railing-systems": {
      fr: "/nos-produits/systemes-de-rampe",
      en: "/our-products/railing-systems",
    },
    "/our-products/railing-systems/traditional-aluminum-railing": {
      fr: "/nos-produits/systemes-de-rampe/rampe-en-aluminium-traditionnelle",
      en: "/our-products/railing-systems/traditional-aluminum-railing",
    },
    "/our-products/railing-systems/traditional-glass-railing": {
      fr: "/nos-produits/systemes-de-rampe/rampes-de-verre-traditionnelle",
      en: "/our-products/railing-systems/traditional-glass-railing",
    },
    "/our-products/railing-systems/contemporary-glass-railing": {
      fr: "/nos-produits/systemes-de-rampe/rampes-moderne-en-verre",
      en: "/our-products/railing-systems/contemporary-glass-railing",
    },
    "/our-products/railing-systems/integrated-picket-railing": {
      fr: "/nos-produits/systemes-de-rampe/rampes-integre",
      en: "/our-products/railing-systems/integrated-picket-railing",
    },

    // shades-screen
    "/our-products/shades-screen": {
      fr: "/nos-produits/par-soleil",
      en: "/our-products/shades-screen",
    },

    // wall-under
    "/our-products/walls-under-porch-conversion": {
      fr: "/nos-produits/systeme-de-murs",
      en: "/our-products/walls-under-porch-conversion",
    },

    // privacy
    "/our-products/privacy-fencing": {
      fr: "/nos-produits/cloture-dintimite",
      en: "/our-products/privacy-fencing",
    },

    // commercial
    "/our-products/commercial": {
      fr: "/nos-produits/commercial",
      en: "/our-products/commercial",
    },

    // pergolas
    "/our-products/pergolas": {
      fr: "/nos-produits/pergolas",
      en: "/our-products/pergolas",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);