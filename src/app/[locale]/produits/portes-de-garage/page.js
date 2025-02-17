import { setRequestLocale } from "next-intl/server";
import React from "react";
import ButtonClient from "@/app/components/ButtonClient";

import { useTranslations } from "next-intl";
import { FaCalculator, FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import GarageTabs from "@/app/components/GarageTabs";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Portes",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-doorsGarage bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <span className="text-2xl max-w-6xl mx-auto mb-6">Produits</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold max-w-6xl mx-auto leading-snug mb-8">
            Découvrez nos portes de garage
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20 px-4">
        <GarageTabs />
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20 mt-32 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-left">Nos produits </h2>
          <p>
            Robustes et durables, nos portes de garage sont soigneusement
            sélectionnées pour la qualité de leur conception. Personnalisez-les
            avec des fenêtres ou la couleur de votre choix!
          </p>
        </div>

        <div className="pb-16 pt-24 text-center">
          <ButtonClient
            text={"Créez votre porte"}
            target={true}
            href={"https://www.rwdoors.com/fr/choisissez-votre-porte-fr/"}
            variant=""
            className={"!w-fit"}
          />
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
