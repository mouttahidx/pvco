import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";

import { useTranslations } from "next-intl";
import PortfolioGallery from "@/app/components/PortfolioGallery";
import Services from "@/app/components/Services";
import ContactTabs from "@/app/components/ContactTabs";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | Contact",
};
export default function page({ locale }) {
  setRequestLocale(locale);
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
      <section className="bg-homeSlider bg-cover bg-center">
        <div className="bg-black bg-opacity-45 px-4 pt-32 md:pt-56 py-40 ">
          <div className="text-white text-left grid md:grid-cols-2 items-start max-w-7xl mx-auto justify-start">
            <h1 className="text-4xl md:text-5xl text-left font-bold mb-6">
              Nous contacter
            </h1>
            <div className="flex flex-col items-start gap-10 mb-14">
              <div>
                <h2 className="font-semibold text-lg">PVCO</h2>
                <a
                  href="https://goo.gl/maps/Eq7F92HHKp9ibHwW6"
                  target="_blank"
                  rel="nofollow"
                >
                  104A Rue Germain, Saint-Alphonse-De-Granby Qc, Canada, J0E 2A0
                </a>
              </div>
              <p className="text-white">Lundi au vendredi / 8h à 17h</p>
              <div className="grid grid-cols-2 w-full">
                <div>
                  <h2 className="font-semibold text-lg">Téléphone</h2>
                  <a href="tel:4509941275" target="_blank" rel="nofollow">
                    450 994-1275{" "}
                  </a>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">RBQ</h2>
                  <a href="tel:5704-3705-01" target="_blank" rel="nofollow">
                    5704-3705-01
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16 -mt-32 bg-white py-16 rounded-3xl">
        <ContactTabs translations={translations} />
      </section>
    </>
  );
}
