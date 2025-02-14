import Image from "next/image";
import { useTranslations } from "next-intl";
import MobileDrawer from "./MobileDrawer";
import StickyMobileMenu from "./StickyMobileMenu";
import { Link } from "@/i18n/routing";

export default function MobileHeader() {
  const t = useTranslations("Nav");
  const p = useTranslations("Products");
  const sr = useTranslations("SunroomsModels");
  const pc = useTranslations("PatioModels");
  const wm = useTranslations("WeatherMasterModels");
  const rs = useTranslations("RailingsModels");
  const translations = {
    ourProducts: t("ourProducts"),
    home: t("home"),
    products: t("ourProducts"),
    aboutUs: t("aboutUs"),
    blog: t("blog"),
    contactUs: t("contactUs"),
    free_quote: t("free_quote"),
    portfolio: t("portfolio"),
    services: t("services"),
    contact: t("contact"),
    careers: t("careers"),
    doors: t("doors"),
    doorsGarages: t("doorsGarages"),
    windows: t("windows"),
    balconies: t("balconies"),
    sunrooms: t("sunrooms"),
    exterior: t("exterior"),
    accessories: t("accessories"),
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
    <div>
      <div className="w-full px-4 block lg:hidden">
        {/* bottom div */}
        <div className="grid grid-cols-4 py-2 ">
          <Link href={"/"} rel="canonical">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="w-[150px]"
              width={200}
              height={100}
              unoptimized
            />
          </Link>
          <div className="col-span-3 flex  items-center justify-end">
            <Link
              href="#contact"
              className="border-primary border-2 uppercase font-bold duration-200 bg-primary  text-black rounded-3xl border-black text-center p-2 text-xs xl:text-sm mr-4"
            >
              {t("free_quote")}
            </Link>
            <MobileDrawer translations={translations} />
          </div>
        </div>
        <StickyMobileMenu translations={translations} />
      </div>
    </div>
  );
}
