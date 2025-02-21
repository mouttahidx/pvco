import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import GalleryProductPage from "@/app/components/GalleryProductPage";
import ProductPageCTA from "@/app/components/ProductPageCTA";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export async function generateMetadata() {
  const t = await getTranslations("CommercialPage");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function CommercialPage() {
  const t = useTranslations("CommercialPage");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* hero  */}
      <section
        className="py-32 lg:pt-56 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/commercial/sunspace-commercial-applications-banner-1.jpg')",
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
            src={
              "/img/commercial/sunspace-commercial-applications-banner-2.jpg"
            }
            width={1200}
            height={720}
            className="rounded-3xl w-full"
            unoptimized
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
        </div>

        {/* side bar */}
        <div className="px-2 lg:px-0 gap-y-8 flex flex-col mt-8 lg:mt-0">
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
                  src: "/img/commercial/sunspace-commercial-applications_0001.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0002.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0003.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0004.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0005.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0006.jpg",
                },
                {
                  src: "/img/commercial/sunspace-commercial-applications_0007.jpg",
                },
              ]}
              large={[
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0001.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0002.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0003.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0004.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0005.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0006.jpg",
                },
                {
                  src: "/img/commercial/large/sunspace-commercial-applications_0007.jpg",
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
