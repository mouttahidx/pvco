"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactTabs({ translations }) {
  return (
    <Tabs defaultValue="first" color="#FD6941" className="shadow rounded-3xl">
      <Tabs.List grow justify="center">
        <Tabs.Tab value="first">Demande de soumission</Tabs.Tab>
        <Tabs.Tab value="second">Service après-vente</Tabs.Tab>
        <Tabs.Tab value="third">Nous contacter</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <section className="p-8 py-16 max-w-4xl mx-auto">
          <ContactForm translations={translations} theme={"dark"} />
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="second">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/tab2-new.webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Service après-vente</h2>
            <p className="mt-6">
              Notre relation ne se termine pas avec la fin du chantier. Nous
              sommes là pour effectuer les ajustements nécessaires si vous
              constatez un problème avec le projet de rénovation que nous avons
              réalisé.
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Service courtois proactif</li>
              <li>Réponse rapide</li>
              <li>Garantie sur toutes nos installations</li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="third">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/tab3-new.webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Service conseil</h2>
            <p className="mt-6">
              Vous avez un projet de rénovation en tête, mais vous ne savez par
              où commencer? Nous vous aiderons à choisir les modèles, options,
              couleurs et finis qui répondent le mieux à votre besoin et qui
              s’agencent le mieux à votre propriété.
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Proposition d’options</li>
              <li>Conception sur mesure</li>
              <li>Documentation sur les différents modèles</li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
