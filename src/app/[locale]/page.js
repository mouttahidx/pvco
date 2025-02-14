import { setRequestLocale } from "next-intl/server";
import React from "react";
import ButtonClient from "../components/ButtonClient";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import { Link } from "@/i18n/routing";
import EndOfPageCTA from "../components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Accueil",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  return (
    <>
      {/* Slider */}
      <section className="bg-cover bg-center h-screen relative">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src="/img/homeSlider.webp"
            width={1400}
            height={900}
            quality={100}
            className="w-full h-full object-cover"
            alt="PVCO Entrepreneur spécialisé en portes et fenêtres"
            priority={true}
            unoptimized
          />
        </div>
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">
            Entrepreneur spécialisé en portes et fenêtres
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            40 ans d’expertise dans le domaine de la construction
          </h2>
          <ButtonClient text={"En savoir plus"} href={"/services"} />
        </div>
      </section>

      {/* Nos produits */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="grid gap-y-8 md:grid-cols-2">
          <h2 className="text-4xl font-bold">Nos produits</h2>
          <p>
            Nous vous proposons une vaste gamme de portes, de fenêtres, de
            rampes, de portes de garage, de solariums et de revêtements
            extérieurs pour tous les types de résidences et de commerces. Notre
            objectif : embellir votre propriété tout en maximisant sa
            fonctionnalité!
          </p>
        </div>
        <div className="w-full grid md:grid-cols-4 md:grid-rows-2 gap-4 mt-16 text-white font-semibold text-xl md:h-[600px]">
          <Link
            href="/produits/portes"
            className="md:row-span-2 bg-cover cursor-pointer group hover:scale-105 duration-500 rounded-t-3xl md:rounded-none md:rounded-s-3xl bg-doors relative"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full rounded-t-3xl md:rounded-none md:rounded-s-3xl p-4 ">
              Portes
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/portes-de-garage"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-doorsGarage relative"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4">
              Portes de garage
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/fenetres"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-windows"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4">
              Fenêtres
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/balcons-et-rampes"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary md:rounded-tr-3xl bg-balcons"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4 md:rounded-tr-3xl">
              Balcons et rampes
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/solariums"
            className="md:col-start-2 md:row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-solarium"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4">
              Solariums
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/revetements-exterieurs"
            className="md:col-start-3 md:row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-exterior"
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4">
              Revêtements extérieurs
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/accessoires"
            className="md:col-start-4 md:row-start-2  bg-cover cursor-pointer hover:scale-105 duration-500 hover:bg-primary  md:rounded-none rounded-b-3xl md:rounded-br-3xl bg-accessories group "
          >
            <div className="bg-black hover:bg-primary h-[200px] duration-500 bg-opacity-40 md:h-full relative p-4 rounded-b-3xl md:rounded-none md:rounded-br-3xl">
              <span className="text-white">
                Accessoires
                <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                  +
                </span>
              </span>
            </div>
          </Link>
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

      {/* Slider workers */}
      <section className="bg-workers bg-cover bg-center bg-fixed">
        <div className="bg-black bg-opacity-60 py-32 text-white text-center px-4">
          <h3 className="text-5xl font-bold max-w-3xl mx-auto leading-snug mb-8">
            Une entreprise familiale
          </h3>
          <p className="max-w-3xl mx-auto mb-6 text-white">
            PVCO Granby a été fondé en 2015 par Alain Choinière, un entrepreneur
            général possédant plus de 40 ans d’expérience dans le domaine de la
            construction. Ce savoir-faire permet à l’entreprise d’offrir une
            vaste gamme de services complémentaires à la pose de portes et
            fenêtres, comme la conception de solariums et d’agrandissements et
            le remplacement de revêtement extérieur.
          </p>
          <ButtonClient text={"En savoir plus"} href={"/a-propos"} />
        </div>
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Nos réalisations
          </h2>
          <ButtonClient
            text={"Voir toutes nos réalisations"}
            href={"/realisations"}
            variant="outline"
            className={"!w-fit justify-self-center md:justify-self-end"}
          />
        </div>

        <div className="grid gap-2  md:grid-cols-3 mt-12 gap-x-2">
          <Gallery />
        </div>
      </section>

      {/* testimonials */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <Testimonials />
      </section>

      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
