import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import GalleryProductPage from "@/app/components/GalleryProductPage";
import ProductPageCTA from "@/app/components/ProductPageCTA";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaCheck, FaCloudDownloadAlt } from "react-icons/fa";

export async function generateMetadata() {
  const t = await getTranslations("WeatherMasterDoors");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function WeatherMasterDoors() {
  const t = useTranslations("WeatherMasterDoors");
  const btn = useTranslations("Btn");
  const locale = useLocale();

  return (
    <>
      {/* hero  */}
      <section
        className="py-32 lg:pt-56 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors-banner-1.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl text-white px-2 text-center bg-black  rounded-3xl bg-opacity-75">
          <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold max-w-6xl mx-auto leading-snug mb-8">
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-32 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
        {/* main div */}
        <div className="lg:col-span-2 px-2">
          <Image
            src={
              "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors-banner-2.jpg"
            }
            width={1200}
            height={720}
            className="rounded-3xl w-full"
            alt={t("title")}
            unoptimized
          />
          <h2 className="section-title mt-8">{t("1_title")}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: t.raw("1_text") }}
            className="text-dark-gray my-4"
          />

          {/* advantages */}
          <div className="mt-8">
            <div className="py-6">
              <h3 className="text-dark-secondary text-lg font-semibold">
                {t("advantages_title")}
              </h3>
              <div className="bg-primary h-[2px] w-14 mt-1"></div>

              <ul className="mt-6 flex flex-col gap-y-4">
                <li className="text-dark-secondary flex gap-x-2 items-center ">
                  <FaCheck className="w-[30px] text-primary" />
                  <span> {t("advantages_1")}</span>
                </li>
                <li className="text-dark-secondary flex gap-x-2 items-center ">
                  <FaCheck className="w-[30px] text-primary" />
                  <span> {t("advantages_2")}</span>
                </li>
                <li className="text-dark-secondary flex gap-x-2 items-center ">
                  <FaCheck className="w-[30px] text-primary" />
                  <span> {t("advantages_3")}</span>
                </li>
                <li className="text-dark-secondary flex gap-x-2 items-center ">
                  <FaCheck className="w-[30px] text-primary" />
                  <span> {t("advantages_4")}</span>
                </li>
                <li className="text-dark-secondary flex gap-x-2 items-center ">
                  <FaCheck className="w-[30px] text-primary" />
                  <span> {t("advantages_5")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* side bar */}
        <div className="px-2 lg:px-0 gap-y-8 flex flex-col mt-8 lg:mt-0">
          {/* Colors */}
          <div className="p-8 bg-light-gray rounded-3xl">
            <h2 className="text-dark-secondary text-lg">{t("colors_title")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <h3 className="text-dark-secondary text-base mt-8">
              {t("colors_standard")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex flex-col w-[48%]">
                <div className="h-24 bg-white"></div>
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("white")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <div className="h-24 bg-black"></div>
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("black")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <div className="h-24 bg-driftwood"></div>
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("driftwood")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <div className="h-24 bg-bronze"></div>
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("bronze")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <div className="h-24 bg-grey"></div>
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("grey")}
                </h3>
              </div>
            </div>

            <h2 className="text-dark-secondary text-lg mt-8">
              {t("tints_title")}
            </h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/window-tints/sunspace-weathermaster-clear.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("clear")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  src={"/img/window-tints/sunspace-weathermaster-smoke.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  alt={t("title")}
                />
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("smoke_grey")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  src={"/img/window-tints/sunspace-weathermaster-dark.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  alt={t("title")}
                />
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("dark_grey")}
                </h3>
              </div>

              <div className="flex flex-col w-[48%]">
                <Image
                  src={"/img/window-tints/sunspace-weathermaster-bronze.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  alt={t("title")}
                />{" "}
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("bronze")}
                </h3>
              </div>
            </div>
          </div>

          {/* PDFs */}
          <div className="p-8 bg-light-gray rounded-3xl">
            <h2 className="text-dark-secondary text-lg">{t("pdf_download")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <a
              href={
                locale === "en"
                  ? "/pdf/Sunspace-WeatherMaster-Windows-and-Doors.pdf"
                  : "/pdf/Sunspace-WeatherMaster-Windows-and-Doors-fr.pdf"
              }
              target="_blank"
            >
              <div className="flex justify-between uppercase text-dark-secondary text-base mt-8 bg-white p-4 rounded-3xl">
                {t("title")}
                <FaCloudDownloadAlt className="fill-primary size-6" />
              </div>
            </a>
          </div>

          {/* CTA */}
          <ProductPageCTA />
        </div>

        {/* gallery */}
        <div className="w-full lg:col-span-3 mt-14 px-2">
          <h3 className="text-dark-secondary text-lg ">{t("gallery_title")}</h3>
          <div className="bg-primary h-[2px] w-14 mt-1"></div>

          <div className="mt-8">
            <GalleryProductPage
              slides={[
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0001.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0002.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0003.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0004.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0005.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0006.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0007.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0008.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0009.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0010.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0011.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0012.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0013.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0014.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/sunspace-weathermaster-doors_0015.jpg",
                },
              ]}
              large={[
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0001.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0002.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0003.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0004.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0005.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0006.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0007.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0008.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0009.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0010.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0011.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0012.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0013.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0014.jpg",
                },
                {
                  src: "/img/weathermaster/weathermasterdoor/large/sunspace-weathermaster-doors_0015.jpg",
                },
              ]}
              title={t("title")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
