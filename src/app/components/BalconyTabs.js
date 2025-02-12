"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function BalconyTabs() {
  return (
    <Tabs
      defaultValue="1"
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
        <Tabs.Tab value="1">Rampes</Tabs.Tab>
        <Tabs.Tab value="2">Balcons</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="1">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image
            width={1800}
            height={1000}
            src={"/img/product (2).webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Rampes</h2>
            <p className="my-6">
              Vous planifiez des rénovations extérieures pour améliorer l’accès
              à votre cour? Nous concevons et installons des rampes et balcons
              qui répondent à vos exigences tout en s’agençant au style de votre
              demeure. Nos solutions durables vous permettront de profiter au
              maximum de l’été!
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
                <Tabs.Tab value="1">ALUMINIUM</Tabs.Tab>
                <Tabs.Tab value="2">PVC</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="1">
                <p className="py-10">
                  Durables, sécuritaires et esthétiques, les rampes en aluminium
                  peuvent être personnalisées à l’aide de plusieurs options,
                  comme l’ajout d’une main courante, la forme des poteaux, la
                  couleur.
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <p className="py-10">
                  Composées de résine de première qualité nos rampes en PVC
                  présentent un fini lustré durable. Vous pouvez choisir parmi
                  plusieurs modèles pour créer le style recherché.
                </p>
              </Tabs.Panel>
            </Tabs>
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
            width={1800}
            height={1000}
            src={"/img/balcony-new.webp"}
            alt={" image"}
            className="w-full h-[300px] lg:h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
          />
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Balcons</h2>
            <p className="my-6"></p>
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
                <Tabs.Tab value="1">FIBRE DE VERRE</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  Robustes et durables, nos balcons en fibre de verre résistent
                  aux saisons et ne requièrent aucun entretien. De plus, ils
                  sont offerts en plusieurs couleurs et finis pour s’agencer
                  avec le revêtement extérieur de votre maison.
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
