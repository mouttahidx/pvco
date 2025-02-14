import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";

import { useTranslations } from "next-intl";
import PortfolioGallery from "@/app/components/PortfolioGallery";
import Services from "@/app/components/Services";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Services",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-servicesSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">Services</h1>
          <h2 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Pose de portes et fenêtres et services complémentaires
          </h2>
        </div>
      </section>

      <section className="container mx-auto my-20">
        <Services />
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-left">
            Territoires desservis
          </h2>
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
          className="w-full object-cover mt-12"
          alt="map"
        />
      </section>

      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
