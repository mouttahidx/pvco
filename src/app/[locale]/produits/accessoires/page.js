import { setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import { useTranslations } from "next-intl";
import { FaCalculator, FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import AccessoriesTabs from "@/app/components/AccessoriesTabs";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Nos accessoires",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-accessories bg-cover bg-center">
        <div className="bg-black bg-opacity-45 pt-56 py-32 text-white text-center">
          <span className="text-2xl max-w-6xl mx-auto mb-6">Produits</span>
          <h1 className="text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Découvrez nos accessoires
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-16">
        <AccessoriesTabs />
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20 mt-32">
        <div className="grid grid-cols-2">
          <h2 className="text-4xl font-bold">Nos produits</h2>
          <p>
            Nous offrons plusieurs modèles d’airs climatisés muraux et de
            thermopompes afin de répondre à tous les besoins, peu importe le
            type d’habitation et la taille de la pièce. Des questions? Notre
            personnel qualifié demeure à votre disposition pour vous renseigner.
          </p>
        </div>
      </section>

      {/* Nos services */}
      <section className="max-w-6xl mx-auto my-20">
        <div className="grid grid-cols-2">
          <h2 className="text-4xl font-bold">On s’occupe de tout</h2>
          <ButtonClient
            text={"Voir nos services"}
            href={"/"}
            variant="outline"
            className={"!w-fit justify-self-end"}
          />
        </div>
        <div className="grid grid-cols-3 mt-6 gap-x-6">
          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14">
              <FaCalculator size="24" className="fill-white" />
            </span>
            <h3 className="font-semibold my-4">Estimation des coûts</h3>
            <p>
              Après avoir évalué vos besoins, nous vous fournissons un devis
              détaillé qui correspond à vos attentes.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14">
              <FaHandshake size="24" className="fill-white" />
            </span>
            <h3 className="font-semibold my-4">Service après-ventes</h3>
            <p>
              Nous demeurons disponibles pour toute question après
              l’installation de vos portes et fenêtres.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="bg-primary flex justify-center items-center w-[100px] h-[100px] rounded-full mt-14">
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
      <section className="my-20 bg-brand-gray">
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-2">
            <h2 className="text-4xl font-bold">
              Détaillant autorisé des fournisseurs suivants :
            </h2>
            <div className="grid grid-cols-3 items-center gap-10">
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
                src={"/img/sunspace_logo.webp"}
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
        <div className="grid grid-cols-2 items-end">
          <Image
            unoptimized
            width={1200}
            height={820}
            src={"/img/hands.webp"}
            alt="hands shaking"
            className="relative rounded-tr-3xl h-[600px] !w-[120%] object-cover"
          />
          <div className="text-white p-24 bg-primary rounded-tl-3xl -ml-24 z-10">
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
              href={"/"}
              className={"mt-14"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
