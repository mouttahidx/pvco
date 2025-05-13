"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function Services() {
  return (
    <Tabs defaultValue="first" color="#FD6941">
      <Tabs.List grow justify="center">
        <Tabs.Tab value="first">Estimation des coûts</Tabs.Tab>
        <Tabs.Tab value="second">Service après-vente</Tabs.Tab>
        <Tabs.Tab value="third">Service conseil</Tabs.Tab>
        <Tabs.Tab value="four">Prise de mesures</Tabs.Tab>
        <Tabs.Tab value="five">Installation complète</Tabs.Tab>
        <Tabs.Tab value="six">Livraison</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <section
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/services-new.webp"}
            alt={" image"}
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Estimation des coûts</h2>
            <p className="mt-6">
              Après avoir minutieusement évalué vos besoins et votre budget avec
              vous, nous vous soumettrons un devis détaillé gratuitement pour
              votre projet de rénovation, peu importe sa nature :
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Installation de portes et fenêtres</li>
              <li>Aménagement d’un solarium</li>
              <li>Remplacement du revêtement extérieur</li>
              <li>Conception de balcon en fibre de verre et de rampes</li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="second">
        <section
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
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
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
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
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
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
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
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

      <Tabs.Panel value="four">
        <section
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/tab4-new.webp"}
            alt={" image"}
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Prise de mesures</h2>
            <p className="mt-6">
              Afin de nous assurer de l’exactitude des dimensions de vos portes,
              fenêtres, rampes et autres éléments que nous installerons, nous
              offrons un service de prise de mesures.
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Service rapide et efficace</li>
              <li>Précision des mesures</li>
              <li>
                Conception parfaitement adaptée aux dimensions de votre
                propriété
              </li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="five">
        <section
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/tab5-new.webp"}
            alt={" image"}
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Installation complète</h2>
            <p className="mt-6">
              Du retrait des anciens composants jusqu’à la finition, nous nous
              occupons de tout! Notre expérience en tant qu’entrepreneur général
              nous permet de prendre en charge tous les aspects d’un projet de
              rénovation.
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Retrait des anciennes portes et fenêtres</li>
              <li>Démolition</li>
              <li>Installation des nouveaux composants </li>
              <li>Finition</li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="six">
        <section
          className="pt-12 xl:pt-16 px-4 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/services/tab6-new.webp"}
            alt={" image"}
            className="w-full  h-[500px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="py-14">
            <h2 className="section-title">Livraison</h2>
            <p className="mt-6">
              La livraison des portes, des fenêtres et des différentes pièces
              pour votre projet de rénovation est incluse dans toutes nos
              estimations. Nous coordonnons la livraison avec tous nos
              fournisseurs de matériaux, afin de vous libérer l’esprit.
            </p>
            <ul className="pl-8 mt-2 list-disc">
              <li>Livraison incluse dans tout projet</li>
              <li>Aménagement d’un solarium</li>
              <li>Coordination avec les fournisseurs</li>
              <li>Service courtois</li>
            </ul>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
