import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";

import { useTranslations } from "next-intl";
import PortfolioGallery from "@/app/components/PortfolioGallery";
import Services from "@/app/components/Services";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Services",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-servicesSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-45 pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">Services</h1>
          <h2 className="text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Pose de portes et fenêtres et services complémentaires
          </h2>
        </div>
      </section>

      <section className="container mx-auto my-16">
        <Services />
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto my-16">
        <div className="grid grid-cols-2 mb-14">
          <h2 className="text-4xl font-bold">Territoires desservis</h2>
          <p>
            Nous servons des clients partout en Montérégie, en Estrie, au
            Centre-du-Québec et dans la région de Montréal. Nous serons heureux
            de vous aider à réaliser vos projets de rénovation afin de combler
            vos désirs!
          </p>
        </div>
        <Image
          unoptimized
          width={1400}
          height={1200}
          src={"/img/map.jpg"}
          alt="map"
        />
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
