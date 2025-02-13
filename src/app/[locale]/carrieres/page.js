import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import { useTranslations } from "next-intl";
import CareerForm from "@/app/components/CareerForm";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Carrières",
};
export default function page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  const form = useTranslations("Form");
  const translations = {
    poste: form("poste"),
    name_error: form("name_error"),
    email_error: form("email_error"),
    message_error: form("message_error"),
    phone_error: form("phone_error"),
    email_success: form("email_success"),
    recaptcha_error: form("recaptcha_error"),
    name: form("name"),
    email: form("email"),
    phone: form("phone"),
    installation_city: form("installation_city"),
    installation_country: form("installation_country"),
    installation_zip: form("installation_zip"),
    installation_state: form("installation_state"),
    installation_for: form("installation_for"),
    additional_infos: form("additional_infos"),
    send: form("send"),
    required_error: form("required_error"),
    free_quote: form("free_quote"),
    house: form("house"),
    cottage: form("cottage"),
    rv: form("rv"),
    windows: form("windows"),
    sunrooms: form("sunrooms"),
    patio: form("patio"),
    raillings: form("raillings"),
    screenrooms: form("screenrooms"),
    decking: form("decking"),
    enclosures: form("enclosures"),
    title: form("title"),
    subtitle: form("subtitle"),
  };

  return (
    <>
      {/* Slider */}
      <section className="bg-careersSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-2xl max-w-6xl mx-auto mb-6">Carrières</h1>
          <h2 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Faites carrière chez nous
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
        <div className="py-14">
          <h2 className="section-title">Environnement familiale</h2>
          <p className="mt-6">
            Travailler chez PVCO Granby, c’est évoluer dans un environnement
            convivial où le plaisir de travailler ensemble et la reconnaissance
            de chacun des employés créent une ambiance agréable. Chaque membre
            de notre équipe est traité comme un membre de la famille et peut
            s’épanouir selon ses ambitions. <br />
            <br />
            Nous offrons d’excellentes conditions de travail, de la formation de
            base et continue ainsi qu’un soutien à toutes les étapes de votre
            parcours. Le bien-être de nos employés est notre priorité! Vous
            aurez aussi l’occasion de travailler sur une gamme de projets très
            variée.
          </p>
        </div>
        <Image
          unoptimized
          width={1800}
          height={1000}
          src={"/img/workers.webp"}
          alt={n("aboutUs") + " image"}
          className="w-full h-[300px] lg:h-[550px] object-bottom aspect-auto object-cover rounded-3xl"
        />
      </section>

      {/* Postes dispo */}
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-left">Postes disponibles</h2>
          <p>
            Nous sommes toujours à la recherche d’employés fiables, rigoureux et
            passionnés par leur métier afin de pourvoir différents postes au fil
            des mandats, comme des techniciens à l’installation de portes et
            fenêtres, des ouvriers et des chargés de projet. Remplissez le
            formulaire ci-dessous pour soumettre votre candidature.
          </p>
        </div>
      </section>

      {/* Detaillants + CTA */}
      <section className="my-20 bg-brand-gray ">
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
            <h2 className="max-w-3xl w-full text-4xl font-bold leading-snug mb-10 text-center">
              Candidature spontanée
            </h2>
            <CareerForm translations={translations} />
          </div>
        </div>
      </section>
    </>
  );
}
