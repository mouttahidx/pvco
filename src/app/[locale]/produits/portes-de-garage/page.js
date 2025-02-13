import { setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";

import { useTranslations } from "next-intl";
import Services from "@/app/components/Services";
import Gallery from "@/app/components/Gallery";
import { FaCalculator, FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import DoorsTabs from "@/app/components/DoorsTabs";
import GarageTabs from "@/app/components/GarageTabs";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Portes",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-doorsGarage bg-cover bg-center">
        <div className="bg-black bg-opacity-85 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <span className="text-2xl max-w-6xl mx-auto mb-6">Produits</span>
          <h1 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
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
      <section className="my-20 bg-brand-gray ">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <h2 className="text-4xl font-bold text-center md:text-left">
              Détaillant autorisé des fournisseurs suivants :
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-10">
              <Image
                unoptimized
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/RW.png"}
                className="w-full"
              />
              <Image
                unoptimized
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/sunspace.webp"}
                className="w-full"
              />
              <Image
                unoptimized
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/vaillancourt.png"}
                className="w-full"
              />
              <Image
                unoptimized
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/LOGO-ROYER.png"}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-end bg-[#D2D6E3] md:bg-white">
          <Image
            unoptimized
            width={1200}
            height={820}
            src={"/img/hands.webp"}
            alt="hands shaking"
            className="relative md:rounded-tr-3xl h-[350px] md:h-[600px] !w-[120%] object-cover"
          />
          <div className="text-white md:p-24 bg-primary rounded-tl-3xl md:-ml-24 z-10 px-4 py-10">
            <h3 className="max-w-lg text-2xl mb-6">
              Pour tous vos projets d’aménagement
            </h3>
            <h2 className="max-w-lg text-5xl font-bold leading-snug mb-8">
              Faites confiance à nos experts.
            </h2>
            <ButtonClient
              text={"Demande de soumission"}
              color="#ffffff"
              variant="outline"
              href={"/contact"}
              className={"mt-8 md:mt-14"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
