"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function AccessoriesTabs() {
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
        <Tabs.Tab value="1">Poignées et plaques d’adresse</Tabs.Tab>
        <Tabs.Tab value="2">Scellant et uréthane professionnel</Tabs.Tab>
        <Tabs.Tab value="3">Rouleaux d’aluminium</Tabs.Tab>
        <Tabs.Tab value="4">Climatiseurs muraux et thermopompes</Tabs.Tab>
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
            src={"/img/access1-new.webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Poignées et plaques d’adresse</h2>
            <p className="my-6">
              Raffinez la devanture de votre demeure à l’aide d’une poignée de
              porte et d’une plaque d’adresse adaptées au design de votre
              maison! De multiples couleurs et finis s’offrent à vous pour
              assurer une finition soignée à la façade de votre demeure.
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
            src={"/img/access2-new.webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">
              Scellant et uréthane professionnel
            </h2>
            <p className="my-6">
              L’uréthane est un matériau très performant utilisé pour
              l’isolation thermique des bâtiments. Ils nous permettent de rendre
              votre demeure plus écoénergétique et de réduire votre facture
              d’électricité.
            </p>
          </div>
        </section>
      </Tabs.Panel>
      <Tabs.Panel value="3">
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
            src={"/img/product (1).webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Rouleaux d’aluminium</h2>
            <p className="my-6">
              Parce qu'il résiste à la corrosion et est un très bon isolant,
              l’aluminium en rouleau est un matériau de choix pour de nombreuses
              applications en construction. Durable et malléable, il offre de
              multiples possibilités.
            </p>
          </div>
        </section>
      </Tabs.Panel>
      <Tabs.Panel value="4">
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
            src={"/img/access3-new.webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">
              Climatiseurs muraux et thermopompes
            </h2>
            <p className="my-6">
              Vous aimeriez optimiser le confort à l’intérieur de votre maison
              au fil des saisons? Nous offrons et installons des climatiseurs
              muraux et des thermopompes qui vous aideront à rester au frais
              lors des grandes canicules!
            </p>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
