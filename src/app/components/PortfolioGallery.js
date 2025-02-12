"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaExpand } from "react-icons/fa";

export default function PortfolioGallery() {
  const [index, setIndex] = useState(-1);
  const slides = [
    "/img/img-1-new.webp",
    "/img/img-2-new.webp",
    "/img/1-new.webp",
    "/img/2-new.webp",
    "/img/3-new.webp",
    "/img/4-new.webp",
    "/img/5-new.webp",
    "/img/6-new.webp",
    "/img/7-new.webp",
    "/img/8-new.webp",
    "/img/9-new.webp",
    "/img/10-new.webp",
    "/img/11-new.webp",
    "/img/12-new.webp",
  ];

  const large = [
    { src: "/img/img-1-new.webp", alt: "portfolio 1" },
    { src: "/img/img-2-new.webp", alt: "portfolio 2" },
    { src: "/img/1-new.webp", alt: "portfolio 3" },
    { src: "/img/2-new.webp", alt: "portfolio 4" },
    { src: "/img/3-new.webp", alt: "portfolio 5" },
    { src: "/img/4-new.webp", alt: "portfolio 6" },
    { src: "/img/5-new.webp", alt: "portfolio 7" },
    { src: "/img/6-new.webp", alt: "portfolio 8" },
    { src: "/img/7-new.webp", alt: "portfolio 9" },
    { src: "/img/8-new.webp", alt: "portfolio 10" },
    { src: "/img/9-new.webp", alt: "portfolio 11" },
    { src: "/img/10-new.webp", alt: "portfolio 12" },
    { src: "/img/11-new.webp", alt: "portfolio 13" },
    { src: "/img/12-new.webp", alt: "portfolio 14" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-1 lg:px-4">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="flex flex-col relative group hover:scale-105 duration-300"
          onClick={() => setIndex(i)}
        >
          <Image
            unoptimized
            alt="porte"
            src={slide}
            width={1200}
            height={1200}
            className={`w-full h-[200px] lg:h-[400px] object-cover`}
          />
          <FaExpand
            className="fill-primary absolute hidden group-hover:block duration-800 top-4 right-4"
            size={24}
          />
        </div>
      ))}

      <Lightbox
        index={index}
        slides={large}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
}
