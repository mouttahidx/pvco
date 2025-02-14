"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryProductPage({ slides, large = [], title, three = false }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div
        className={
          three
            ? "grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
            : "grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8"
        }
      >
        {slides.map((slide, i) => (
          <Image
            key={i}
            alt={title}
            src={slide.src}
            width={1200}
            height={720}
            className="w-full object-cover h-[230px] lg:h-[200px] cursor-pointer rounded hover:shadow-xl duration-300"
            onClick={() => setIndex(i)}
            unoptimized
          />
        ))}
      </div>

      <Lightbox
        index={index}
        slides={large}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom]}
      />
    </>
  );
}
