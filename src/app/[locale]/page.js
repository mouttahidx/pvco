import { setRequestLocale } from "next-intl/server";
import React from "react";
import ButtonClient from "../components/ButtonClient";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Accueil",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  return (
    <>
      {/* Slider */}
      <section className="bg-homeSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-45 pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">
            Entrepreneur spécialisé en portes et fenêtres
          </h1>
          <h2 className="text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            40 ans d’expertise dans le domaine de la construction
          </h2>
          <ButtonClient text={"En savoir plus"} href={"/"} />
        </div>
      </section>

      {/* Nos produits */}
      <section className="max-w-6xl mx-auto my-16">
        <div className="grid grid-cols-2">
          <h2 className="text-4xl font-bold">Nos produits</h2>
          <p>
            Nous vous proposons une vaste gamme de portes, de fenêtres, de
            rampes, de portes de garage, de solariums et de revêtements
            extérieurs pour tous les types de résidences et de commerces. Notre
            objectif : embellir votre propriété tout en maximisant sa
            fonctionnalité!
          </p>
        </div>
        <div className="w-full grid grid-cols-4 grid-rows-2 gap-4 mt-16 text-white font-semibold text-xl h-[600px]">
          <Link
            href="/produits/portes"
            className="row-span-2 bg-cover cursor-pointer group hover:scale-105 duration-500  rounded-s-3xl bg-doors relative"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full  rounded-s-3xl p-4 ">
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
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
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
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Fenêtres
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/balcons-et-rampes"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary rounded-tr-3xl bg-balcons"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4 rounded-tr-3xl">
              Balcons et rampes
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/solariums"
            className="col-start-2 row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-solarium"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Solariums
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/revetements-exterieurs"
            className="col-start-3 row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-exterior"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Revêtements extérieurs
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/accessoires"
            className="col-start-4 row-start-2  bg-cover cursor-pointer hover:scale-105 duration-500 hover:bg-primary rounded-br-3xl bg-accessories group "
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4 rounded-br-3xl">
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

      {/* Slider workers */}
      <section className="bg-workers bg-cover bg-center bg-fixed">
        <div className="bg-black bg-opacity-60 py-32 text-white text-center">
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
          <ButtonClient text={"En savoir plus"} href={"/"} />
        </div>
      </section>

      {/* Nos realisations */}
      <section className="max-w-6xl mx-auto my-20">
        <div className="grid grid-cols-2">
          <h2 className="text-4xl font-bold">Nos réalisations</h2>
          <ButtonClient
            text={"Voir toutes nos réalisations"}
            href={"/"}
            variant="outline"
            className={"!w-fit justify-self-end"}
          />
        </div>
        <div className="grid grid-cols-3 mt-12 gap-x-2">
          <Gallery />
        </div>
      </section>

      {/* testimonials */}
      <section className="max-w-6xl mx-auto my-20">
        <Testimonials />
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
