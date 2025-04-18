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
  const t = await getTranslations("WallsPage");
  const locale = await getLocale();
  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function WallsPage() {
  const t = useTranslations("WallsPage");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* hero  */}
      <section
        className="py-32 lg:pt-56 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/walls-under/porch-conversion-by-sunspace_banner-2.jpg')",
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
            src={"/img/walls-under/wallsunder (10).webp"}
            width={1200}
            height={720}
            className="rounded-3xl w-full"
            unoptimized
          />
          <h2 className="section-title mt-8">{t("1_title")}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: t.raw("1_text") }}
            className="text-dark-gray my-4"
          />
          <h3 className="text-lg mt-10 bg-primary text-white text-center p-4">
            {t("highlight")}
          </h3>

          {/* advantages */}
          <div className="mt-8">
            <div className="pt-6">
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

          <section className="mt-8  box-border gap-4 lg:gap-x-6  grid sm:grid-cols-2 px-2">
            <div className="shadow-lg box-content flex flex-col rounded-lg">
              <Image
                width={600}
                height={600}
                alt={t("porch_title")}
                src="/img/walls-under/sunspace_porch_conversion.jpg"
                className=" object-cover w-full h-[200px] rounded-t-lg"
                unoptimized
              />
              <div className="flex flex-col p-4 gap-y-3 grow">
                <h2 className="font-semibold text-dark-secondary text-base">
                  {t("porch_title")}
                </h2>
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: t.raw("porch_text") }}
                />
              </div>
            </div>
            <div className="shadow-lg box-content flex flex-col rounded-lg">
              <Image
                width={600}
                height={600}
                alt={t("walls_title")}
                src="/img/walls-under/sunspace_walls_under.jpg"
                className=" object-cover w-full h-[200px] rounded-t-lg"
                unoptimized
              />
              <div className="flex flex-col p-4 gap-y-3 grow">
                <h2 className="font-semibold text-dark-secondary text-base">
                  {t("walls_title")}
                </h2>
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: t.raw("walls_text") }}
                />
              </div>
            </div>
            <div className="shadow-lg box-content flex flex-col rounded-lg">
              <Image
                width={600}
                height={600}
                alt={t("safety_title")}
                src="/img/walls-under/sunspace_safety.jpg"
                className=" object-cover w-full h-[200px] rounded-t-lg"
                unoptimized
              />
              <div className="flex flex-col p-4 gap-y-3  grow">
                <h2 className="font-semibold text-dark-secondary text-base">
                  {t("safety_title")}
                </h2>
                <p
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: t.raw("safety_text") }}
                />
              </div>
            </div>
          </section>
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
              {t("windows_options")}
            </h2>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <h3 className="text-dark-secondary text-base mt-8">
              {t("screening_title")}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/sunspace-better-vue-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("better") }}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/18-14-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("s18") }}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/sunspace-no-see-um-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("nosee") }}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/sunspace-tuff-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("tuff") }}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/sunspace-solar-insect-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("solar") }}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/walls-under/sunspace-pool-patio-screen.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3
                  className="text-dark-secondary text-xs mt-2"
                  dangerouslySetInnerHTML={{ __html: t("pool") }}
                />
              </div>
            </div>

            <h3 className="text-dark-secondary text-base mt-8">
              {t("window_tints")}
            </h3>
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
                  alt={t("title")}
                  src={"/img/window-tints/sunspace-weathermaster-smoke.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("smoke_grey")}
                </h3>
              </div>
              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/window-tints/sunspace-weathermaster-dark.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
                />
                <h3 className="text-dark-secondary text-xs mt-2">
                  {t("dark_grey")}
                </h3>
              </div>

              <div className="flex flex-col w-[48%]">
                <Image
                  alt={t("title")}
                  src={"/img/window-tints/sunspace-weathermaster-bronze.jpg"}
                  width={100}
                  height={100}
                  className="h-24 w-full"
                  unoptimized
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
            <a href={locale === fr ? "/pdf/Sunspace-Walls-Under-fr.pdf" :"/pdf/Sunspace-Walls-Under.pdf"} target="_blank">
              <div className="flex justify-between uppercase text-dark-secondary text-base mt-8 bg-white p-4 rounded-3xl">
                {t("title")}
                <FaCloudDownloadAlt className="fill-primary size-6" />
              </div>
            </a>
          </div>

          {/* CTA */}
          <ProductPageCTA />
        </div>

        {/* Videos */}
        <div className="mt-8 lg:col-span-3 px-2">
          <h3 className="text-dark-secondary text-lg">{t("screen_title")}</h3>
          <div className="bg-primary h-[2px] w-14 mt-1"></div>
          <div className="grid md:grid-cols-4 mt-8 gap-2 ">
            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/-3qDv-0mXRY"
                title="The House that Cedar Fixed"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/axCpjemUHHg"
                title="Sunspace WeatherMaster windows &amp; doors and WeatherMaster Plus bi-fold walls and doors."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/PV18TvVvaH4"
                title="Sunspace Under Deck WeatherMaster Application"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/gXHaEZI6q3U"
                title="Sunspace WeatherMaster Windows &amp; Doors"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/CJBorptwXuY"
                title="Can a cottage ever have too much wood?  Decorating with Justin in their Sunspace room"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/aT1Rv5_Nl6c"
                title="Sunspace Product Demo Compilation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/x0Cick9iE9I"
                title="St Judes Lottery Home, cure for children&#39;s cancer with Sunspace of Texas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <iframe
                className="w-full h-[350px] lg:h-[250px]"
                src="https://www.youtube.com/embed/w0n4JuNw7tY"
                title="The House that Cedar Fixed   -2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* gallery */}
        <div className="w-full lg:col-span-3 mt-14 px-2 gap-8 grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full">
            <h3 className="text-dark-secondary text-lg ">
              {t("gallery_title")}
            </h3>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>

            <div className="mt-8">
              <GalleryProductPage
                slides={[
                  { src: "/img/walls-under/wallsunder (1).webp" },
                  { src: "/img/walls-under/wallsunder (2).webp" },
                  { src: "/img/walls-under/wallsunder (3).webp" },
                  { src: "/img/walls-under/wallsunder (4).webp" },
                  { src: "/img/walls-under/wallsunder (5).webp" },
                  { src: "/img/walls-under/wallsunder (6).webp" },
                  { src: "/img/walls-under/wallsunder (7).webp" },
                  { src: "/img/walls-under/wallsunder (8).webp" },
                  { src: "/img/walls-under/wallsunder (9).webp" },
                  { src: "/img/walls-under/wallsunder (10).webp" },
                  { src: "/img/walls-under/wallsunder (11).webp" },
                  { src: "/img/walls-under/wallsunder (12).webp" },
                  { src: "/img/walls-under/wallsunder (13).webp" },
                  { src: "/img/walls-under/wallsunder (14).webp" },
                  { src: "/img/walls-under/wallsunder (15).webp" },
                  { src: "/img/walls-under/wallsunder (16).webp" },
                ]}
                large={[
                  { src: "/img/walls-under/wallsunder (1).webp" },
                  { src: "/img/walls-under/wallsunder (2).webp" },
                  { src: "/img/walls-under/wallsunder (3).webp" },
                  { src: "/img/walls-under/wallsunder (4).webp" },
                  { src: "/img/walls-under/wallsunder (5).webp" },
                  { src: "/img/walls-under/wallsunder (6).webp" },
                  { src: "/img/walls-under/wallsunder (7).webp" },
                  { src: "/img/walls-under/wallsunder (8).webp" },
                  { src: "/img/walls-under/wallsunder (9).webp" },
                  { src: "/img/walls-under/wallsunder (10).webp" },
                  { src: "/img/walls-under/wallsunder (11).webp" },
                  { src: "/img/walls-under/wallsunder (12).webp" },
                  { src: "/img/walls-under/wallsunder (13).webp" },
                  { src: "/img/walls-under/wallsunder (14).webp" },
                  { src: "/img/walls-under/wallsunder (15).webp" },
                  { src: "/img/walls-under/wallsunder (16).webp" },
                ]}
                title={t("gallery_title")}
                three={true}
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-dark-secondary text-lg ">
              {t("gallery_title2")}
            </h3>
            <div className="bg-primary h-[2px] w-14 mt-1"></div>
            <div className="mt-8">
              <GalleryProductPage
                slides={[
                  { src: "/img/walls-under/wallsunder (17).webp" },
                  { src: "/img/walls-under/wallsunder (18).webp" },
                  { src: "/img/walls-under/wallsunder (19).webp" },
                  { src: "/img/walls-under/wallsunder (20).webp" },
                  { src: "/img/walls-under/wallsunder (21).webp" },
                  { src: "/img/walls-under/wallsunder (22).webp" },
                  { src: "/img/walls-under/wallsunder (23).webp" },
                  { src: "/img/walls-under/wallsunder (24).webp" },
                  { src: "/img/walls-under/wallsunder (25).webp" },
                  { src: "/img/walls-under/wallsunder (26).webp" },
                  { src: "/img/walls-under/wallsunder (27).webp" },
                  { src: "/img/walls-under/wallsunder (28).webp" },
                  { src: "/img/walls-under/wallsunder (29).webp" },
                  { src: "/img/walls-under/wallsunder (30).webp" },
                  { src: "/img/walls-under/wallsunder (31).webp" },
                  { src: "/img/walls-under/wallsunder (32).webp" },
                ]}
                large={[
                  { src: "/img/walls-under/wallsunder (17).webp" },
                  { src: "/img/walls-under/wallsunder (18).webp" },
                  { src: "/img/walls-under/wallsunder (19).webp" },
                  { src: "/img/walls-under/wallsunder (20).webp" },
                  { src: "/img/walls-under/wallsunder (21).webp" },
                  { src: "/img/walls-under/wallsunder (22).webp" },
                  { src: "/img/walls-under/wallsunder (23).webp" },
                  { src: "/img/walls-under/wallsunder (24).webp" },
                  { src: "/img/walls-under/wallsunder (25).webp" },
                  { src: "/img/walls-under/wallsunder (26).webp" },
                  { src: "/img/walls-under/wallsunder (27).webp" },
                  { src: "/img/walls-under/wallsunder (28).webp" },
                  { src: "/img/walls-under/wallsunder (29).webp" },
                  { src: "/img/walls-under/wallsunder (30).webp" },
                  { src: "/img/walls-under/wallsunder (31).webp" },
                  { src: "/img/walls-under/wallsunder (32).webp" },
                ]}
                title={t("gallery_title2")}
                three={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
