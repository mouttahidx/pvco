import { setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";

import { useTranslations } from "next-intl";
import { FaCalculator, FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import DoorsTabs from "@/app/components/DoorsTabs";
import ProductsGallery from "@/app/components/ProductsGallery";
import WindowsTabs from "@/app/components/WindowsTabs";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Fenêtres",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  const slides = [
    { src: "/img/windows/window8-new.webp", alt: "fenetres PVCO" },
    { src: "/img/windows/window9-new.webp", alt: "fenetres PVCO" },
    { src: "/img/windows/window3.jpg", alt: "fenetres PVCO" },
  ];
  return (
    <>
      {/* Slider */}
      <section className="bg-windows bg-cover bg-center">
        <div className="bg-black bg-opacity-45 pt-56 py-32 text-white text-center">
          <span className="text-2xl max-w-6xl mx-auto mb-6">Produits</span>
          <h1 className="text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Découvrez nos fenêtres
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-16">
        <WindowsTabs />
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20 mt-32">
        <div className="grid grid-cols-2">
          <h2 className="text-4xl font-bold">Nos produits</h2>
          <p>
            Nos fenêtres à battant sont conçues sur mesure pour s’adapter à
            votre demeure. Elles peuvent comporter des sections inégales, un ou
            deux battants, un carrelage ou autre. Informez-vous sur les options
            qui s’offrent à vous!
          </p>
        </div>
        <div className="grid grid-cols-3 mt-12 gap-x-2">
          <ProductsGallery slides={slides} />
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
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/RW.png"}
                className="w-full"
              />
              <Image
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/Sunspace_logo.webp"}
                className="w-full"
              />
              <Image
                width={1200}
                height={1200}
                alt="logo royer"
                src={"/img/vaillancourt.png"}
                className="w-full"
              />
              <Image
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
