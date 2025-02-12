"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <Carousel
      slideSize="70%"
      orientation="vertical"
      slideGap="md"
      withControls={1}
      height={450}
    >
      <Carousel.Slide>
        <div className="bg-brand-gray flex h-full justify-center items-center w-full">
          <div
            className="flex flex-col justify-start  p-8 rounded w-full "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-primary mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">Nous devions changer l'ensemble de nos fenêtres à Montréal.  C'est par hasard que nous nous sommes arrêtés chez PVCO à Granby.  Nous avions déjà fait faire quelques soumissions à Montréal mais n'étions pas convaincus.  Nous avons été accueilli par Michel, l'un des co-proprio.  Il est responsable des ventes.  Nous avons tout de suite apprécié ses conseils et son authenticité, nous nous sommes sentis rapidement en confiance.  Je vois un énorme avantage à faire affaires avec les propriétaires Vs des représentants.  La demande de permis avec la ville a été compliquée, Michel a dû faire et refaire ses soumissions et il a toujours été d'un grand support et très compréhensif.  Il est clair que Michel et son frère (l'autre co-proprio qui viendra poser les fenêtres) sont des gens fiers, qui veulent que leurs clients soient satisfaits et qui souhaitent offrir le meilleur service possible.  Donc pour l'instant, service A1 pour la vente et les conseils.  Je viendrai compléter mon avis lorsque les fenêtres seront posées!</p>
            <div className="flex items-center mt-auto">
              <span className="w-12 h-12 bg-primary flex justify-center items-center rounded-full flex-shrink-0 object-cover object-center">
                P
              </span>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-semibold text-gray-900">
                - Philip McKenzie
                </span>
                <span className="flex fill-primary">
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Carousel.Slide>

      <Carousel.Slide>
        <div className="bg-brand-gray flex h-full justify-center items-center w-full">
          <div
            className="flex flex-col justify-start  p-8 rounded w-full "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-primary mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">Super bon service, équipe très professionnel et compétentes .  Très bon produit de qualité.  Je recommande.</p>
            <div className="flex items-center mt-auto">
              <span className="w-12 h-12 bg-primary flex justify-center items-center rounded-full flex-shrink-0 object-cover object-center">
                L
              </span>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-semibold text-gray-900">
                - Luke P.
                </span>
                <span className="flex fill-primary">
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                  <FaStar className="fill-primary" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
