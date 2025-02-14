import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaCheck, FaCloudDownloadAlt } from "react-icons/fa";

export async function generateMetadata() {
  const t = await getTranslations("SunroomsModel100");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function SunroomsModel100() {
  const t = useTranslations("SunroomsModel100");
  const btn = useTranslations("Btn");
  const locale = useLocale();

  return (
    <>
      {/* hero  */}
      <section
        className="py-32 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/sunrooms/model100/sunspace-screenroom-model-100-banner-1.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl text-white px-2">
          <h1 className="text-3xl lg:text-4xl text-white bg-black bg-opacity-70 rounded w-fit px-2">
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-32 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
        {/* main div */}
        <div className="lg:col-span-2 px-2">
          <Image
            alt={t("title")}
            src={
              "/img/sunrooms/model100/sunspace-screenroom-model-100-banner-2.jpg"
            }
            width={1200}
            height={720}
            className="w-full"
          />
          <h2 className="section-title mt-8">{t("1_title")}</h2>
          <p
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
                  src="https://www.youtube.com/embed/8XrJ3_-tCA8"
                  title="Sunspace Model 100 &amp; 200 Sunrooms"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div>
                <iframe
                  className="w-full h-[350px] lg:h-[250px]"
                  src="https://www.youtube.com/embed/gFwPqxAUldw"
                  title="Inspiration Sunspace -1"
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
          <div className="p-8 bg-light-gray">
            <h2 className="text-dark-secondary text-lg">{t("colors_title")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <h3 className="text-dark-secondary text-base mt-8">
              {t("colors_standard")}
            </h3>
            <div className="mt-4 flex gap-4">
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
            </div>
          </div>

          {/* PDFs */}
          <div className="p-8 bg-light-gray">
            <h2 className="text-dark-secondary text-lg">{t("pdf_download")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <a
              href={
                locale === "en"
                  ? "/pdf/Sunspace-Sunrooms-and-Enclosures.pdf"
                  : "/pdf/Sunspace-Sunrooms-and-Enclosures-fr.pdf"
              }
              target="_blank"
            >
              <div className="flex justify-between uppercase text-dark-secondary text-base mt-8 bg-white p-4">
                {t("title")}
                <FaCloudDownloadAlt className="fill-primary size-6" />
              </div>
            </a>
          </div>

          {/* Virtual Tours */}
          <div className="">
            <h2 className="text-dark-secondary text-lg">{t("virtual_tour")}</h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <div className="flex justify-between uppercase text-base mt-8 ">
              <iframe
                data-theasys="YJAvqEXxf5IADAi4Rg4joQIm1bB4jH"
                height="350"
                allow="gyroscope;accelerometer;fullscreen"
                allowFullScreen={true}
                src="https://www.theasys.io/viewer/YJAvqEXxf5IADAi4Rg4joQIm1bB4jH/"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col">
            <div className="bg-primary text-center p-8 font-semibold text-white">
              <h2 className="text-lg">{t("cta_title")}</h2>
            </div>
            <div className="flex flex-col items-center gap-y-5 px-8 py-12 bg-brand-gray">
              <h3 className="text-center font-semib text-primary capitalize">
                {t("cta_text")}
              </h3>
              <div className="text-center text-white font-semibold text-xl">
                <a
                  className="block lg:hidden"
                  href={"tel:" + process.env.NEXT_PUBLIC_PHONE}
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
                <span
                  className="hidden lg:block"
                  href={"tel:" + process.env.NEXT_PUBLIC_PHONE}
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </span>
              </div>
              <p className="text-white text-xs text-center">{t("cta_desc")}</p>
              <ButtonClient text={btn("contactUs")} href={"/contact"} />
            </div>
          </div>
        </div>

        {/* gallery */}
        <div className="w-full lg:col-span-3 mt-14 px-2">
          <h3 className="text-dark-secondary text-lg ">{t("gallery_title")}</h3>
          <div className="bg-primary h-[2px] w-14 mt-1"></div>

          <div className="mt-8">
            <Gallery
              slides={[
                { src: "/img/sunrooms/model100/Model-100-1002-model100.webp" },
                { src: "/img/sunrooms/model100/Faine 3-model100.webp" },
                { src: "/img/sunrooms/model100/Fain 1-model100.webp" },
                { src: "/img/sunrooms/model100/Gill 2-model100.webp" },
                { src: "/img/sunrooms/model100/m100-1.webp" },
                { src: "/img/sunrooms/model100/m100-2.webp" },
                { src: "/img/sunrooms/model100/m100-3.webp" },
                { src: "/img/sunrooms/model100/m100-4.webp" },
                {
                  src: "/img/sunrooms/model100/M100-Studi-S-DW AB6G0682-988086696-O-model100.webp",
                },
                { src: "/img/sunrooms/model100/M100-Studi-S-DW-model100.webp" },
                { src: "/img/sunrooms/model100/M100-W-model100.webp" },
                {
                  src: "/img/sunrooms/model100/M100Wall-Brnz-1xDoor 1004-model100.webp",
                },
                {
                  src: "/img/sunrooms/model100/M100Wall-DW-2xDoor 0001-model100.webp",
                },
                {
                  src: "/img/sunrooms/model100/Model 100 Acrypic and SC-1001-model100.webp",
                },
                { src: "/img/sunrooms/model100/Model 100-model100.webp" },
              ]}
              large={[
                { src: "/img/sunrooms/model100/Model-100-1002-model100.webp" },
                { src: "/img/sunrooms/model100/Faine 3-model100.webp" },
                { src: "/img/sunrooms/model100/Fain 1-model100.webp" },
                { src: "/img/sunrooms/model100/Gill 2-model100.webp" },
                { src: "/img/sunrooms/model100/m100-1.webp" },
                { src: "/img/sunrooms/model100/m100-2.webp" },
                { src: "/img/sunrooms/model100/m100-3.webp" },
                { src: "/img/sunrooms/model100/m100-4.webp" },
                {
                  src: "/img/sunrooms/model100/M100-Studi-S-DW AB6G0682-988086696-O-model100.webp",
                },
                { src: "/img/sunrooms/model100/M100-Studi-S-DW-model100.webp" },
                { src: "/img/sunrooms/model100/M100-W-model100.webp" },
                {
                  src: "/img/sunrooms/model100/M100Wall-Brnz-1xDoor 1004-model100.webp",
                },
                {
                  src: "/img/sunrooms/model100/M100Wall-DW-2xDoor 0001-model100.webp",
                },
                {
                  src: "/img/sunrooms/model100/Model 100 Acrypic and SC-1001-model100.webp",
                },
                { src: "/img/sunrooms/model100/Model 100-model100.webp" },
              ]}
              title={t("title")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
