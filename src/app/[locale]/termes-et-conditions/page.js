import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import { useTranslations } from "next-intl";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | À propos",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-black bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Termes et conditions
          </h1>
        </div>
      </section>

      {/* text section */}
      <section
        className="pt-8 xl:pt-16 px-4 max-w-6xl mx-auto "
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="no-tailwindcss-base">
          <h2>Conditions générales d’utilisation</h2>
          <p>
            Les termes et conditions cités ci-dessous ont été écrits dans le but
            de clarifier l’utilisation du site Web de PVCO Granby et de ses
            propriétés intellectuelles. En vous inscrivant, en téléchargeant, en
            consultant des données en continue (streaming) ou en accédant aux
            éléments présents dans le site Web de PVCO Granby, en partie ou en
            entier de l’un ou plusieurs de ses produits ou contenu, vous
            acceptez de respecter et êtes liés aux termes et conditions
            ci-dessous :
          </p>
          <h3>Droits et propriétés intellectuelles</h3>
          <p>
            Selon les termes suivants, PVCO Granby possède tous les droits de
            propriétés intellectuelles de ce site Web ainsi que tout le contenu
            rattaché. Vous avez un accès limité au visionnement seulement quant
            au site Web de PVCO Granby ainsi qu’à son contenu. Vous ne pouvez,
            en aucun cas, modifier, copier (en partie ou son contenu entier),
            adapter, transformer ou vous approprier le contenu présenté sur le
            site Web sans le consentement écrit de PVCO Granby.
          </p>
          <h3>Restriction</h3>
          <p>
            Il vous est spécifiquement interdit de poser les gestes suivants:
          </p>
          <ul>
            <li>
              Publier le contenu de PVCO Granby et / ou matériel sur un
              quelconque média et / ou une plateforme.
            </li>
            <li>
              Vous approprier le contenu et / ou matériel de PVCO Granby afin de
              l’utiliser à des fins de ventes.
            </li>
            <li>
              Utiliser le contenu et / ou matériel de PVCO Granby de manière à
              nuire ou causer des dommages à PVCO Granby.
            </li>
            <li>
              Utiliser le site de PVCO Granby pour extraire, solliciter ou
              vendre des données ou informations quelconques.
            </li>
            <li>
              Utiliser le site de PVCO Granby, son contenu et / ou son matériel
              pour réaliser une publicité.
            </li>
            <li>
              Utiliser le contenu et / ou le matériel pour publier, promouvoir
              ou le revendre à vos propres fins.
            </li>
            <li>
              Publier vos informations personnelles d’accès au site dans le but
              de donner accès à notre contenu payant à d’autres utilisateurs.
            </li>
          </ul>
          <h3>Limitation de la responsabilité</h3>
          <p>
            PVCO Granby n’est pas lié, en aucun cas, à l’utilisation de ses
            produits ou services. L’utilisation de nos produits ou services par
            un tiers signifie que celui-ci a pris connaissance des risques
            associés à l’utilisation de nos produits et services et que PVCO
            Granby ne sera responsable en aucun cas des conséquences reliées ou
            provenant de l’utilisation de son site Web, produits ou services.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </section>

      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
