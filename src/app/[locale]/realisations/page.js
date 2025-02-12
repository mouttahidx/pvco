import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";

import { useTranslations } from "next-intl";
import PortfolioGallery from "@/app/components/PortfolioGallery";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Réalisations",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-portfolioSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-45 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">Réalisations</h1>
          <h2 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Voyez ce que nous pouvons réaliser pour vous!{" "}
          </h2>
        </div>
      </section>

      {/* Nos services */}
      <section className=" mx-auto my-20">
        <PortfolioGallery />
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
              href={"/"}
              className={"mt-8 md:mt-14"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
