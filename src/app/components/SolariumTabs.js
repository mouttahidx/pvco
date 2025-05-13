"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function SolariumTabs() {
  return (
    <Tabs
      defaultValue="1"
      color="#FD6941"
      variant="pills"
      radius={"xl"}
      styles={{
        tab: {
          marginRight: "16px",
          fontSize: "1rem",
        },
      }}
    >
      <Tabs.List justify="center">
        <Tabs.Tab value="1">Isolé</Tabs.Tab>
        <Tabs.Tab value="2">3 Saisons</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="1">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/solarium1-new.webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Isolé</h2>
            <p className="my-6">
              LE CONFORT TOUTE L’ANNÉE! <br />
              <br />
              Le solarium isolé est une annexe complète à votre résidence et
              peut être utilisé en tout confort 12 mois par année, aussi bien
              lors des froides journées d’hiver que durant les canicules d’été.
              <br />
              <br />
              Pour la conception de solariums, nous utilisons des matériaux de
              première qualité qui répondent aux nouvelles normes en matière
              d’isolation et de rendement écoénergétique. <br />
              <br />
              Nos nombreuses années d’expérience dans le domaine de la
              construction, en particulier dans les portes et fenêtres et les
              revêtements extérieurs, nous permettent de concevoir des solariums
              isolés haut de gamme qui s’agenceront de façon harmonieuse à votre
              résidence.
              <br />
              <br /> Ce petit coin de paradis ensoleillé deviendra sans doute
              votre pièce préférée de la maison!
            </p>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="2">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            unoptimized
            width={1800}
            height={1000}
            src={"/img/solarium2-new.webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">3 Saisons</h2>
            <p className="my-6">
              Votre espace véranda est en communion avec la nature, mais les
              moustiques et les intempéries en moins.
              <br />
              <br /> Notre partenaire Sunspace offre une fenestration de
              solarium à quatre fenêtres verticales, qui s’ouvrent de haut en
              bas et de bas en haut, selon l’entrée d’air désirée. L’ouverture à
              75% donne réellement l’impression d’être à l’extérieur, avec une
              vue sans obstacle sur votre jardin, un boisé, votre piscine ou le
              lac. <br />
              <br />
              Nous proposons des toitures en acrylique translucide garanties 30
              ans, des toitures préfabriquées isolées, ou une construction
              traditionnelle en extension de votre toit existant.
              <br />
              <br /> Peu importe l’ampleur de votre projet de solarium 3
              saisons, nous écouterons votre demande et nous vous soumettrons
              des idées de conception de vérandas qui correspondent à vos
              attentes. <br />
              <br />
              Nous sommes en mesure de prendre en main la totalité de votre
              projet de véranda ou seulement une partie, si vous avez votre
              constructeur pour le toit et le plancher.
            </p>
            <Tabs
              defaultValue="1"
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
                <Tabs.Tab value="1">AVANTAGES D’UN SOLARIUM 3 SAISONS</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  Maximisez votre cour avec une zone de confort hors pair
                  Savourez vos douces soirées d’été à l’extérieur en toute
                  tranquillité <br />
                  Profitez de votre été sans vous faire importuner par les
                  insectes <br />
                  Pensez à vous et profitez pleinement de votre été Votre
                  véranda deviendra vite la pièce la plus populaire de la
                  maison!
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
