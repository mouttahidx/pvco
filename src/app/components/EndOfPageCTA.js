import Image from "next/image";
import React from "react";
import ButtonClient from "./ButtonClient";

export default function EndOfPageCTA() {
  return (
    <section className="my-20 bg-brand-gray ">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Fier détaillant des produits de :
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-10">
            {/* <Image
              unoptimized
              width={1200}
              height={1200}
              alt="logo royer"
              src={"/img/RW.png"}
              className="w-full"
            />
            <Image
              unoptimized
              width={1200}
              height={1200}
              alt="logo royer"
              src={"/img/sunspace.webp"}
              className="w-full"
            /> */}
            <Image
              unoptimized
              width={1200}
              height={1200}
              alt="logo royer"
              src={"/img/vaillancourt.png"}
              className="w-full"
            />
            {/* <Image
              unoptimized
              width={1200}
              height={1200}
              alt="logo royer"
              src={"/img/LOGO-ROYER.png"}
              className="w-full"
            /> */}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-end bg-[#D2D6E3] md:bg-white">
        <Image
          unoptimized
          width={1200}
          height={820}
          src={"/img/hands.webp"}
          alt="hands shaking"
          className="relative md:rounded-tr-3xl h-[350px] md:h-[600px] !w-[120%] object-cover"
        />
        <div className="text-white md:p-24 bg-primary rounded-tl-3xl md:-ml-24 z-10 px-4 py-10">
          <h3 className="max-w-lg text-2xl mb-6">
            Pour tous vos projets d’aménagement
          </h3>
          <h2 className="max-w-lg text-5xl font-bold leading-snug mb-8">
            Faites confiance à nos experts.
          </h2>
          <ButtonClient
            text={"Demande de soumission"}
            color="#ffffff"
            variant="outline"
            href={"/contact"}
            className={"mt-8 md:mt-14"}
          />
        </div>
      </div>
    </section>
  );
}
