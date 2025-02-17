import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import data from "@/utils/productsData.json";
import Product from "@/app/components/Product";
import ButtonClient from "@/app/components/ButtonClient";
import Image from "next/image";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export async function generateMetadata() {
  const t = await getTranslations("SunroomsPage");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function Sunrooms() {
  const t = useTranslations("SunroomsPage");
  const p = useTranslations("SunroomsModels");
  const models_images = [
    "/img/sunrooms/sunspace-screenroom-model-100-banner-3.jpg",
    "/img/sunrooms/sunspace-sunroom-model-200-banner-2.jpg",
    "/img/sunrooms/sunspace-sunroom-model-300-banner-2.jpg",
    "/img/sunrooms/sunspace-sunroom-model-400-banner-2.jpg",
  ];

  return (
    <>
      {/* hero  */}
      <section
        className="lg:pt-56 py-32 px-2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/sunrooms/sunspace-sunroom-model-300-banner-2.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl text-white h-full">
          <h1 className="text-3xl lg:text-5xl mx-auto text-white bg-black bg-opacity-70 rounded w-fit px-2">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Products section */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex justify-between flex-col items-center">
        <h2 className="section-title max-w-2xl text-center mx-auto">
          {t("1_title")}
        </h2>
        <p
          className="mt-6 max-w-5xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw("1_subtitle") }}
        />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {[
            {
                         link: data.sunrooms_models[0],
                         title: p(`p${1}_title`),
                         desc: p(`p${1}_desc`),
                       },
                       {
                         link: data.sunrooms_models[1],
                         title: p(`p${2}_title`),
                         desc: p(`p${2}_desc`),
                       },
                       {
                         link: data.sunrooms_models[2],
                         title: p(`p${3}_title`),
                         desc: p(`p${3}_desc`),
                       },
                       {
                         link: data.sunrooms_models[3],
                         title: p(`p${4}_title`),
                         desc: p(`p${4}_desc`),
                       },
          ].map((_, i) => (
            <Product
              key={i}
              link={_.link}
              img={models_images[i]}
              title={_.title}
              desc={_.desc}
            />
          ))}
        </div>
      </section>
      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
