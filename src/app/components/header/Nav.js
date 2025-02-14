import { useTranslations } from "next-intl";
import NavigationLink from "./NavLink";
import DropDownServices from "./DropDownServices";
import OurProductsNav from "./OurProductsNav";
// import LanguageSelect from "./LanguageSelect";
// import FreeQuote from "./FreeQuote";

export default function Nav() {
  const t = useTranslations("Nav");
  const p = useTranslations("Products");
  const sr = useTranslations("SunroomsModels");
  const pc = useTranslations("PatioModels");
  const wm = useTranslations("WeatherMasterModels");
  const rs = useTranslations("RailingsModels");
  const translations = {
    ourProducts: t("ourProducts"),
    s1: sr("p1_title"),
    s2: sr("p2_title"),
    s3: sr("p3_title"),
    s4: sr("p4_title"),
    w1: wm("p1_title"),
    w2: wm("p2_title"),
    w3: wm("p3_title"),
    w4: wm("p4_title"),
    r1: rs("p1_title"),
    r2: rs("p2_title"),
    r3: rs("p3_title"),
    r4: rs("p4_title"),
    pc1: pc("p1_title"),
    pc2: pc("p2_title"),
    pc3: pc("p3_title"),
    p1: p("p1_title"),
    p2: p("p2_title"),
    p3: p("p3_title"),
    p4: p("p4_title"),
    p5: p("p5_title"),
    p6: p("p6_title"),
    p7: p("p7_title"),
    p8: p("p8_title"),
    p9: p("p9_title"),
    p10: p("p10_title"),
    p11: p("p11_title"),
    p12: p("p12_title"),
    p13: p("p13_title"),
    p14: p("p14_title"),
  };
  return (
    <nav className="flex items-center gap-x-4 text-black text-xs xl:text-sm font-semibold uppercase">
      <OurProductsNav translations={translations} />
      <DropDownServices translations={translations} />
      <NavigationLink href="/services">{t("services")}</NavigationLink>
      <NavigationLink href="/realisations">{t("portfolio")}</NavigationLink>
      <NavigationLink href="/a-propos">{t("aboutUs")}</NavigationLink>
      <NavigationLink href="/carrieres">{t("careers")}</NavigationLink>
      <NavigationLink href="/contact">{t("contact")}</NavigationLink>
      {/* <FreeQuote /> */}

      {/* <LanguageSelect /> */}
    </nav>
  );
}
