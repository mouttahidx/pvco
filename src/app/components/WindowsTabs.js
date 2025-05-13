"use client";
import { Tabs } from "@mantine/core";
import Image from "next/image";

export default function WindowsTabs() {
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
        <Tabs.Tab value="1">Fenêtres à battant</Tabs.Tab>
        <Tabs.Tab value="2">Fenêtres à auvent</Tabs.Tab>
        <Tabs.Tab value="3">Fenêtres architecturales</Tabs.Tab>
        <Tabs.Tab value="4">Fenêtres coulissantes</Tabs.Tab>
        <Tabs.Tab value="5">Fenêtres à guillotine</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="1">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="min-h-[600px] text-center">
            <Image
              unoptimized
              width={1800}
              height={1000}
              src={"/img/windows/window3.jpg"}
              alt={" image"}
              className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
            />
            <h2 className="mt-4 font-semibold">
              Fenêtre à battant hybride avec barrotin
            </h2>
          </div>
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Fenêtres à battant</h2>
            <p className="my-6">
              Très populaires en raison de leur polyvalence, les fenêtres à
              battants se ferment de manière étanche grâce à une manivelle.
              Elles présentent plusieurs caractéristiques avantageuses pour une
              demeure, dont une ouverture à 90 degrés pour l’aération des pièces
              et une barrure multipoint pour maximiser votre sécurité.
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
                <Tabs.Tab value="1">PVC BLANC</Tabs.Tab>
                <Tabs.Tab value="2">HYBRIDE</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="1">
                <p className="py-10">
                  Grâce aux nombreuses options offertes, la fenêtre à battant en
                  PVC blanc s’adapte à tous les styles de maisons : classique,
                  contemporaine ou champêtre.
                  <br />
                  <br />
                  Voici les principales caractéristiques de nos fenêtres à
                  battant en PVC :
                  <br />
                  - Une étanchéité parfaite grâce aux coupe-froid triples
                  garantis à vie, au drainage en escalier et au procédé de
                  soudure des coins par fusion.
                  <br />
                  - Une économie d’énergie.
                  <br />- Une grande robustesse grâce au cadre structural de
                  nouvelle génération.
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <p className="py-10">
                  Faite de PVC et d’aluminium, la fenêtre hybride combine le
                  meilleur des deux matériaux. Voici quelques-unes de ses
                  caractéristiques :
                  <br />
                  - Un choix de couleurs variées et une peinture de haute
                  qualité qui préserve le fini satiné très longtemps.
                  <br />
                  - Une grande robustesse grâce au cadre structural de nouvelle
                  génération jumelé à de l’aluminium extrudé le plus robuste sur
                  le marché.
                  <br />
                  - Une étanchéité parfaite grâce aux coupe-froid triples
                  garantis à vie, au drainage en escalier et au procédé de
                  soudure en coin.
                  <br />- Une performance thermique supérieure qui se traduit
                  par des économies d’énergie.
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
          <div className="min-h-[600px] text-center">
            <Image
              unoptimized
              width={1800}
              height={1000}
              src={"/img/windows/window5-new.webp"}
              alt={" image"}
              className="w-full  h-[600px] object-bottom aspect-auto object-contain rounded-3xl"
            />
            <h2 className="mt-4 font-semibold">
              Fenêtre à auvent peinturée vue de l’extérieure
            </h2>
          </div>

          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Fenêtres à auvent</h2>
            <p className="my-6">
              La fenêtre à auvent comporte un mécanisme à bascule qui lui permet
              de s’ouvrir du bas vers l’extérieur au moyen d’une manivelle, vous
              permettant ainsi d’aérer la pièce même en cas d’intempéries.
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
                <Tabs.Tab value="1">PVC</Tabs.Tab>
                <Tabs.Tab value="2">HYBRIDE</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  Polyvalente, la fenêtre à auvent en PVC blanc peut être
                  personnalisée avec différentes options, ce qui lui permet de
                  s’adapter à tous les styles de maisons, qu’elle soit
                  classique, contemporaine ou champêtre.
                  <br />
                  <br />
                  Voici ses principales caractéristiques :
                  <br />
                  - Une étanchéité parfaite grâce aux coupe-froid triples
                  garantis à vie, au drainage en escalier et au procédé de
                  soudure des coins par fusion, qui procure une grande économie
                  d’énergie et une excellente insonorisation.
                  <br />
                  - Son esthétisme inégalé conféré par son volet extérieur et sa
                  moulure intérieure (parclose) de style classique <br />
                  - Une grande robustesse grâce au cadre structural de nouvelle
                  génération.
                  <br />
                  <br />
                  La fenêtre à auvent hybride est composée de PVC et
                  d’aluminium, combinant les forces des deux matériaux. Voici
                  pourquoi elle est aimée de nos clients :
                  <br />- Le choix de couleurs varié et la peinture de haute
                  qualité qui préserve le fini satiné très longtemps. <br />-
                  Une grande robustesse grâce au cadre structural de nouvelle
                  génération jumelé à l’aluminium extrudé le plus robuste et
                  durable sur le marché. <br />- Une étanchéité parfaite grâce
                  aux coupe-froid triples garantis à vie, au drainage en
                  escalier et au procédé de soudure en coin, qui procure une
                  performance thermique supérieure et une grande économie
                  d’énergie
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <p className="py-10">
                  La fenêtre à auvent hybride est composée de PVC et
                  d’aluminium, combinant les forces des deux matériaux. Voici
                  pourquoi elle est aimée de nos clients : <br /> <br />- Le
                  choix de couleurs varié et la peinture de haute qualité qui
                  préserve le fini satiné très longtemps. <br />- Une grande
                  robustesse grâce au cadre structural de nouvelle génération
                  jumelé à l’aluminium extrudé le plus robuste et durable sur le
                  marché. <br />- Une étanchéité parfaite grâce aux coupe-froid
                  triples garantis à vie, au drainage en escalier et au procédé
                  de soudure en coin, qui procure une performance thermique
                  supérieure et une grande économie d’énergie
                </p>
              </Tabs.Panel>
            </Tabs>
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
          <div className="min-h-[600px] text-center">
            <Image
              unoptimized
              width={1800}
              height={1000}
              src={"/img/windows/window4.jpg"}
              alt={" image"}
              className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
            />
            <h2 className="mt-4 font-semibold">
              Fenêtre architecturales en PVC blanc
            </h2>
          </div>
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Fenêtres architecturales</h2>
            <p className="my-6">
              Faites de PVC ou d’une combinaison de PVC et d’aluminium, les
              fenêtres architecturales adoptent la forme géométrique de votre
              choix pour créer un style personnalisé à votre demeure et lui
              permettre de se distinguer.
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
                <Tabs.Tab value="1">PVC</Tabs.Tab>
                <Tabs.Tab value="2">HYBRIDE</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  Les fenêtres architecturales en PVC peuvent prendre des formes
                  géométriques variées afin de créer un design original et de
                  donner un cachet unique à votre résidence. <br /> <br />
                  La polyvalence de ces fenêtres en PVC nous permet de répondre
                  parfaitement à votre désir et de concevoir une forme adaptée à
                  vos besoins et à vos mesures. Laissez aller votre imagination!
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <p className="py-10">
                  Les fenêtres architecturales hybrides sont faites de PVC et
                  d’aluminium. <br />
                  <br />
                  Voici leurs principaux avantages :<br /> <br /> - Vaste choix
                  de couleurs pour que les fenêtres s’harmonisent parfaitement
                  avec le revêtement. <br />- Peinture de haute qualité qui
                  préserve le fini satiné pendant de longues années. <br />
                  - Formes géométriques variées pour donner un cachet unique à
                  votre résidence. <br /> - Possibilité de créer des formes
                  originales, conçues spécialement pour votre demeure et selon
                  vos mesures. Laissez aller votre imagination!
                </p>
              </Tabs.Panel>
            </Tabs>
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
          <div className="min-h-[600px] text-center">
            <Image
              unoptimized
              width={1800}
              height={1000}
              src={"/img/windows/window6-new.webp"}
              alt={" image"}
              className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
            />
            <h2 className="mt-4 font-semibold">
              Fenêtre coulissante en PVC blanc
            </h2>
          </div>
          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Fenêtres coulissantes</h2>
            <p className="my-6">
              Économiques et hautement durables, les fenêtres coulissantes
              s’ouvrent en douceur à l’aide d’un mécanisme de rails. Elles
              conviennent parfaitement aux espaces restreints, comme les salles
              de bain et les sous-sols.
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
                <Tabs.Tab value="1">PVC BLANC</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  La fenêtre coulissante en PVC blanc est très polyvalente et
                  s’adapte particulièrement bien aux maisons classiques ou
                  champêtres. <br /> <br />
                  Elle comporte un système de roues tandem intégré au volet
                  opérant ainsi qu’un système de loquet pivotant qui simplifie
                  le nettoyage. <br /> <br /> Son système d’ouverture est
                  parfait pour les espaces restreints et procure une excellente
                  aération
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="5">
        <section
          className="pt-8 xl:pt-16 px-1 max-w-6xl mx-auto grid gap-x-16 md:grid-cols-2 items-start"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="min-h-[600px] text-center">
            <Image
              unoptimized
              width={1800}
              height={1000}
              src={"/img/windows/window7-new.webp"}
              alt={" image"}
              className="w-full  h-[600px] object-bottom aspect-auto object-cover rounded-3xl"
            />
            <h2 className="mt-4 font-semibold">
              Fenêtre à guillotine simple en PVC blanc
            </h2>
          </div>

          {/* second div */}
          <div className="pb-14 pt-16">
            <h2 className="section-title">Fenêtres à guillotine</h2>
            <p className="my-6">
              Les fenêtres à guillotine modernes allient l’élégance de leur
              style traditionnel et un système de contrepoids qui les rend
              faciles à ouvrir, contrairement aux fenêtres à guillotine des
              vieilles demeures. Elles s’adaptent très bien aux maisons
              classiques et champêtres.
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
                <Tabs.Tab value="1">PVC</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1">
                <p className="py-10">
                  Faciles à ouvrir grâce à leur système de balance à force
                  constante, nos fenêtres à guillotine disposent d’un système de
                  loquet pivotant qui simplifie leur nettoyage.
                  <br /> <br />
                  Leur système d’ouverture convient parfaitement aux espaces
                  restreints, comme une salle de bain, et procure une excellente
                  aération de la pièce.
                  <br /> <br />
                  La fenêtre à guillotine est disponible en configurations
                  simple ou double. Le modèle simple comprend une section fixe
                  et un volet mobile, tandis que le modèle double comporte deux
                  volets mobiles.
                </p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
