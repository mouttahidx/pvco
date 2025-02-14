import { setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import { useTranslations } from "next-intl";
import { FaCalculator, FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import SolariumTabs from "@/app/components/SolariumTabs";
import ProductsGallery from "@/app/components/ProductsGallery";
import Product from "@/app/components/Product";
import data from "@/utils/productsData.json";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Solariums",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const p = useTranslations("SunroomsModels");
  const models_images = [
    // "/img/sunrooms/sunspace-screenroom-model-100-banner-3.jpg",
    "/img/sunrooms/sunspace-sunroom-model-200-banner-2.jpg",
    "/img/sunrooms/sunspace-sunroom-model-300-banner-2.jpg",
    // "/img/sunrooms/sunspace-sunroom-model-400-banner-2.jpg",
  ];
  const slides = [
    { src: "/img/14-new.webp", alt: "Solariums PVCO" },
    { src: "/img/13-new.webp", alt: "Solariums PVCO" },
    { src: "/img/12-new.webp", alt: "Solariums PVCO" },
  ];
  return (
    <>
      {/* Slider */}
      <section className="bg-solarium bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <span className="text-2xl max-w-6xl mx-auto mb-6">Produits</span>
          <h1 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Découvrez nos solariums
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20 px-4">
        <SolariumTabs />
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20 mt-32 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-left">Nos produits </h2>
          <p>
            Tous nos solariums sont conçus sur mesure à partir de fenêtres, de
            moustiquaires, de murs et de toitures de qualité supérieure grâce à
            notre partenaire Sunspace. Consultez nos spécialistes en solarium
            pour connaître toutes les options qui s’offrent à vous!
          </p>
        </div>

        <div className="flex flex-wrap gap-y-10 gap-4 xl:gap-8  mt-16 justify-between">
          {[
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

      {/* Nos services */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            On s’occupe de tout
          </h2>
          <ButtonClient
            text={"Voir nos services"}
            href={"/services"}
            variant="outline"
            className={"!w-fit justify-self-center md:justify-self-end"}
          />
        </div>
        <div className="grid text-center md:text-left md:grid-cols-3 mt-6 gap-x-6 just">
          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14 mx-auto md:ml-0">
              <FaCalculator size="24" className="fill-white" />
            </span>
            <h3 className="font-semibold my-4">Estimation des coûts</h3>
            <p>
              Après avoir évalué vos besoins, nous vous fournissons un devis
              détaillé qui correspond à vos attentes.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14 mx-auto md:ml-0">
              <FaHandshake size="24" className="fill-white" />
            </span>
            <h3 className="font-semibold my-4">Service après-ventes</h3>
            <p>
              Nous demeurons disponibles pour toute question après
              l’installation de vos portes et fenêtres.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14 mx-auto md:ml-0">
              <FaFileSignature size="24" className="fill-white" />
            </span>
            <h3 className="font-semibold my-4">Service conseil</h3>
            <p>
              Perdus parmi notre grande sélection de produits? Nous sommes là
              pour vous conseiller!
            </p>
          </div>
        </div>
      </section>

      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
