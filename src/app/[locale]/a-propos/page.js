import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import { useTranslations } from "next-intl";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | À propos",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-aboutSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-45 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">À propos</h1>
          <h2 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Une entreprise familiale près de vos besoins
          </h2>
        </div>
      </section>

      {/* about section */}
      <section
        className="pt-8 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        {/* second div */}
        <div className="py-8 md:py-14">
          <h2 className="section-title">{t("2_title")}</h2>
          <p
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: t.raw("2_text") }}
          />
        </div>
        <Image
          unoptimized
          width={1800}
          height={1000}
          src={"/img/about-new.webp"}
          alt={n("aboutUs") + " image"}
          className="w-full h-[300px] lg:h-[550px] object-bottom aspect-auto object-cover rounded-3xl"
        />
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

      {/* about2 section */}
      <section
        className="py-8 xl:py-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Image
          unoptimized
          width={1800}
          height={1000}
          src={"/img/about2-new.webp"}
          alt={n("aboutUs") + " image"}
          className="w-full h-[300px] lg:h-[550px] object-bottom aspect-auto object-cover rounded-3xl"
        />

        {/* second div */}
        <div className="py-8 md:py-14">
          <h2 className="section-title">{t("3_title")}</h2>
          <p
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: t.raw("3_text") }}
          />
        </div>
      </section>

      {/* team */}
      <div className="max-w-4xl mx-auto py-14 text-center">
        <h2 className="text-4xl font-bold text-center">Notre équipe</h2>
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto my-12">
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-secondary p-5 rounded-full w-fit">
              <img src="/worker.svg" className="w-24 h-24 md:w-48 md:h-48" />
            </div>
            <h3 className="text-xl md:text-3xl  text-center">Éric Choinière</h3>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-secondary p-5 rounded-full w-fit">
              <img src="/worker.svg" className="w-24 h-24 md:w-48 md:h-48" />
            </div>
            <h3 className="text-xl md:text-3xl  text-center">
              Michel Choinière
            </h3>
          </div>
        </div>
        <ButtonClient
          text="Rejoindre notre équipe"
          href={"/carrieres"}
          variant="outline"
        />
      </div>

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
