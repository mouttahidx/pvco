"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function GarageTabs() {
  return (
    <section
      className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
      data-aos="fade-in"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <Image
        width={1800}
        height={1000}
        src={"/img/product (6).webp"}
        alt={" image"}
        className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
      />
      {/* second div */}
      <div className="pb-14 pt-16">
        <h2 className="section-title">Portes de garage</h2>
        <p className="my-6">
          La porte de garage n’est pas à négliger dans les projets de
          rénovation, puisqu’elle ajoute un certain cachet au style de la
          maison. Avec ou sans fenêtre, fini bois ou contemporain, les options
          sont multiples!
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
            <Tabs.Tab value="ALUMINIUM">ALUMINIUM</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="acier">
            <p className="py-10">
            Les portes de garage en acier sont robustes et reconnues pour leur durabilité. Elles présentent également une excellente efficacité énergétique.
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="ALUMINIUM">
            <p className="py-10">
            Nos portes de garage en aluminium sont très performantes et sont à privilégier pour les très grandes ouvertures (plus de 14 pieds ou 4,3 m).
            </p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
}
