"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function DoorsTabs() {
  return (
    <Tabs
      defaultValue="Entrée"
      color="#FD6941"
      variant="pills"
      radius={"xl"}
      styles={{
        tab: {
          marginRight: "16px",
        },
      }}
    >
      <Tabs.List justify="center">
        <Tabs.Tab value="Entrée">Entrée</Tabs.Tab>
        <Tabs.Tab value="Patio">Patio</Tabs.Tab>
        <Tabs.Tab value="third">Jardin</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Entrée">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            width={1800}
            height={1000}
            src={"/img/product (3).webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Portes d’entrées</h2>
            <p className="my-6">
              Personnalisez votre demeure avec une porte d’entrée unique! Chaque
              porte d’entrée est fabriquée sur mesure afin qu’elle s’agence
              parfaitement avec le revêtement et les fenêtres de votre
              propriété. Nous offrons une multitude d’options de couleurs et de
              modèles!
            </p>
            <Tabs
              defaultValue="acier"
              color="#FD6941"
              variant="outline"
              styles={{
                tabLabel: {
                  textTransform: "uppercase",
                },
                tab: {
                  marginRight: "8px",
                },
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="acier">Acier</Tabs.Tab>
                <Tabs.Tab value="fibre">Fibre de verre</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="acier">
                <p className="py-10">
                  Construction robuste et étanche grâce aux matériaux
                  d’excellente qualité utilisés.
                  <br />
                  <br />
                  Sa polyvalence de cette porte saura mettre en valeur le style
                  de votre maison.
                  <br />
                  <br />
                  Nous offrons aussi un grand choix de fenêtres de porte parmi
                  celles de Novatech, Verre Select, Vitre-Art et Masonite. Vous
                  trouverez certainement un design qui vous plaira!
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="fibre">
                <p className="py-10">
                  Construction robuste grâce à la fibre de verre utilisée pour
                  sa construction. Elle ne fend pas, ne bosselle pas et ne
                  rouille pas.
                  <br />
                  <br />
                  Son fini grain de bois lui donne un cachet riche tout en
                  augmentant sa résistance aux égratignures.
                  <br />
                  <br />
                  Nous proposons un vaste choix de vitraux qui laisseront entrer
                  la lumière dans votre demeure tout en conservant votre
                  intimité.
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="Patio">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            width={1800}
            height={1000}
            src={"/img/patio-new.webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Portes patio</h2>
            <p className="my-6">
              En aluminium ou en PVC, blanche ou de couleur, votre porte patio
              sera fabriquée sur mesure afin de s’agencer avec votre habitation.
              Choisissez parmi les options que nous offrons pour la
              personnaliser davantage selon vos goûts et votre décor.
            </p>
            <Tabs
              defaultValue="hybrid"
              color="#FD6941"
              variant="outline"
              styles={{
                tabLabel: {
                  textTransform: "uppercase",
                },
                tab: {
                  marginRight: "8px",
                },
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="hybrid">Hybrid</Tabs.Tab>
                <Tabs.Tab value="coulissante">coulissante</Tabs.Tab>
                <Tabs.Tab value="pvc">pvc</Tabs.Tab>
                <Tabs.Tab value="aluminium">aluminium</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="hybrid">
                <p className="py-10">
                  Il s’agit d’une porte coulissante avec cadre de bois robuste
                  recouvert d’aluminium et des volets en PVC recouverts
                  d’aluminium pour une étanchéité maximale. Cette porte patio se
                  distingue par la beauté du fini extérieur. Plusieurs couleurs
                  sont offertes sans frais additionnels.
                </p>
              </Tabs.Panel>

              <Tabs.Panel value="coulissante">
                <p className="py-10">
                  Cette porte patio a le charme d’une porte jardin avec ses
                  larges volets, mais présente l’efficacité d’une porte
                  coulissante. Elle est aussi offerte en verre triple. Son cadre
                  se distingue par la rigidité du bois combinée à la durabilité
                  du PVC.
                </p>
              </Tabs.Panel>

              <Tabs.Panel value="pvc">
                <p className="py-10">
                  Cette porte coulissante comporte un cadre de bois robuste
                  recouvert de PVC. Elle est performante énergétiquement et un
                  design attrayant. Avec les options offertes, la porte patio en
                  PVC peut aussi être personnalisée pour ajouter une touche de
                  distinction à votre demeure.
                </p>
              </Tabs.Panel>

              <Tabs.Panel value="aluminium">
                <p className="py-10">
                  Ce type de porte coulissante est munie d’un cadre et de volets
                  en aluminium. Ses 4 volets (2 rangs de panneaux coulissants en
                  aluminium) offrent une excellente performance acoustique et
                  énergétique. Grâce à sa conception, la porte patio en
                  aluminium est très robuste et durable.
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="third">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            width={1800}
            height={1000}
            src={"/img/product (3).webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Portes de jardin</h2>
            <p className="my-6">
              Les portes de jardin confèrent un style unique à une demeure. De
              plus, si vous choisissez l’option de deux portes mobiles, vous
              créerez une plus grande ouverture qu’avec une porte patio.
            </p>
            <Tabs
              defaultValue="acier"
              color="#FD6941"
              variant="outline"
              styles={{
                tabLabel: {
                  textTransform: "uppercase",
                },
                tab: {
                  marginRight: "8px",
                },
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="acier">Acier</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="acier">
                <p className="py-10">
                  Porte solide et étanche, grâce aux matériaux d’excellente
                  qualité utilisés pour sa conception. Sa polyvalence saura
                  certainement souligner le style de votre maison.
                  <br />
                  <br />
                  L’option du moustiquaire vous permet de profiter au maximum de
                  la saison estivale.
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
