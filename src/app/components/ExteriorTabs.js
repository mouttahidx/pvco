"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function ExteriorTabs() {
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
        <Tabs.Tab value="1">Revêtements extérieurs</Tabs.Tab>
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
            src={"/img/product (8).webp"}
            alt={" image"}
            className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <p className="my-6">
              La réfection du revêtement extérieur et de la toiture de votre
              demeure permet d’en augmenter la valeur, l’insonorisation,
              l’étanchéité et l’esthétique. Grâce à notre vaste savoir-faire en
              construction et à notre sens de l’écoute, nous vous accompagnerons
              dans cet important projet de rénovation.
            </p>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
