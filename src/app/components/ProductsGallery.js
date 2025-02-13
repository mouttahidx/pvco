"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaExpand } from "react-icons/fa";

export default function ProductsGallery({ slides }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={i}
          className="flex flex-col relative group cursor-pointer "
          onClick={() => setIndex(i)}
        >
          <Image
            unoptimized
            alt={slide.alt}
            src={slide.src}
            width={1200}
            height={1200}
            className={`w-full h-[250px] md:h-[400px] object-cover ${
              i === 0 && "rounded-s-3xl"
            } ${i === slides.length - 1 && "rounded-e-3xl"}`}
          />
          <FaExpand
            className="fill-primary absolute hidden group-hover:block duration-800 top-4 right-4"
            size={24}
          />
        </div>
      ))}

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom]}
      />
    </>
  );
}
