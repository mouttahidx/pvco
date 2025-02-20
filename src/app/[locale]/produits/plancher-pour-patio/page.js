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
  const t = await getTranslations("DeckingPage");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function DeckingPage() {
  const t = useTranslations("DeckingPage");
  const btn = useTranslations("Btn");
  const locale = useLocale();

  return (
    <>
      {/* hero  */}
      <section
        className="py-32 lg:pt-56 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/decking/sunspace-alumaDeck-banner-1.jpg')",
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
            alt={t("title")}
            src={"/img/decking/sunspace-alumaDeck-banner-2.jpg"}
            width={1200}
            height={720}
            className="w-full rounded-3xl"
            unoptimized          />
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

          {/* Videos */}
          <div className="mt-8">
            <h3 className="text-dark-secondary text-lg">{t("screen_title")}</h3>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <div className="grid md:grid-cols-2 mt-8 gap-4 ">
              <div>
                <iframe
                  className="w-full h-[350px] lg:h-[250px]"
                  src="https://www.youtube.com/embed/t5C-gIFLjEo"
                  title="Sunspace Alumadeck Commercial Application"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* side bar */}
        <div className="px-2 lg:px-0 gap-y-8 flex flex-col mt-8 lg:mt-0">
          {/* Colors */}
          <div className="p-8 bg-light-gray rounded-3xl">
            <h2 className="text-dark-secondary text-lg">{t("colors_title")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-gray.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("grey")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-cedar.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("cedar")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-weathered.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("grey_woodgrain")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-sand.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("sand")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-taupe.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("taupe")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/alumadeck-colors/sunspace-alumadeck-spruce.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                />
                <h3 className="text-dark-secondary text-xs mt-2 ">
                  {t("spruce")}
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
                  ? "/pdf/Sunspace-AlumaDeck-Decking-and-Stairs.pdf"
                  : "/pdf/Sunspace-AlumaDeck-Decking-and-Stairs-fr.pdf"
              }
              target="_blank"
              lang="en"
            >
              <div className="rounded-3xl flex justify-between uppercase text-dark-secondary text-base mt-8 bg-white p-4">

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
                { src: "/img/decking/alumadeck (1).webp" },
                { src: "/img/decking/alumadeck (2).webp" },
                { src: "/img/decking/alumadeck (3).webp" },
                { src: "/img/decking/alumadeck (4).webp" },
                { src: "/img/decking/alumadeck (5).webp" },
                { src: "/img/decking/alumadeck (6).webp" },
                { src: "/img/decking/alumadeck (7).webp" },
                { src: "/img/decking/alumadeck (8).webp" },
                { src: "/img/decking/alumadeck (9).webp" },
                { src: "/img/decking/alumadeck (10).webp" },
                { src: "/img/decking/alumadeck (11).webp" },
                { src: "/img/decking/alumadeck (12).webp" },
                { src: "/img/decking/alumadeck (13).webp" },
                { src: "/img/decking/alumadeck (14).webp" },
                { src: "/img/decking/alumadeck (15).webp" },
                { src: "/img/decking/alumadeck (16).webp" },
                { src: "/img/decking/alumadeck (17).webp" },
                { src: "/img/decking/alumadeck (18).webp" },
                { src: "/img/decking/alumadeck (19).webp" },
                { src: "/img/decking/alumadeck (20).webp" },
                { src: "/img/decking/alumadeck (21).webp" },

              ]}
              large={[
                { src: "/img/decking/alumadeck (1).webp" },
                { src: "/img/decking/alumadeck (2).webp" },
                { src: "/img/decking/alumadeck (3).webp" },
                { src: "/img/decking/alumadeck (4).webp" },
                { src: "/img/decking/alumadeck (5).webp" },
                { src: "/img/decking/alumadeck (6).webp" },
                { src: "/img/decking/alumadeck (7).webp" },
                { src: "/img/decking/alumadeck (8).webp" },
                { src: "/img/decking/alumadeck (9).webp" },
                { src: "/img/decking/alumadeck (10).webp" },
                { src: "/img/decking/alumadeck (11).webp" },
                { src: "/img/decking/alumadeck (12).webp" },
                { src: "/img/decking/alumadeck (13).webp" },
                { src: "/img/decking/alumadeck (14).webp" },
                { src: "/img/decking/alumadeck (15).webp" },
                { src: "/img/decking/alumadeck (16).webp" },
                { src: "/img/decking/alumadeck (17).webp" },
                { src: "/img/decking/alumadeck (18).webp" },
                { src: "/img/decking/alumadeck (19).webp" },
                { src: "/img/decking/alumadeck (20).webp" },
                { src: "/img/decking/alumadeck (21).webp" },
              ]}
              title={t("title")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
