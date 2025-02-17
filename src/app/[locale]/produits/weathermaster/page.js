import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import data from "@/utils/productsData.json";
import Product from "@/app/components/Product";

export async function generateMetadata() {
  const t = await getTranslations("WeatherMasterPage");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default function Sunrooms() {
  const t = useTranslations("WeatherMasterPage");
  const p = useTranslations("WeatherMasterModels");
  const models_images = [
    "/img/weathermaster/weather-master_1.jpg",
    "/img/weathermaster/weather-master_2.jpg",
    "/img/weathermaster/weather-master_3.jpg",
    "/img/weathermaster/weather-master_4.jpg",
  ];
  return (
    <>
      {/* hero  */}
      <section
        className="py-32 px-2 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/img/weathermaster/banner.jpg')" }}
      >
        <div className="mx-auto max-w-7xl text-white">
          <h1 className="text-3xl lg:text-4xl text-white bg-black bg-opacity-70 rounded w-fit px-2">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Products section */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex justify-between flex-col items-center">
        <h2 className="section-title max-w-2xl text-center mx-auto">
          {t("1_title")}
        </h2>
        <p
          className="mt-6 max-w-5xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw("1_subtitle") }}
        />

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {[...Array(4)].map((_, i) => (
            <Product
              key={i}
              link={data.weathermaster_models[i]}
              img={models_images[i]}
              title={p(`p${i + 1}_title`)}
              desc={p(`p${i + 1}_desc`)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
