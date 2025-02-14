import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";

import { useTranslations } from "next-intl";
import PortfolioGallery from "@/app/components/PortfolioGallery";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Réalisations",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-portfolioSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
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
      <EndOfPageCTA />
    </>
  );
}
