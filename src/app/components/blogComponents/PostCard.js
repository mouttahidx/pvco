"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import ButtonClient from "../ButtonClient";
import {
  FaArrowCircleRight,
  FaCalendarAlt,
} from "react-icons/fa";
import moment from "moment";

export default function PostCard({
  title,
  content,
  date,
  image = "",
  lang = 1,
  slug,
  excerpt,
  id,
}) {
  const locale = useLocale();
  console.log(image)
  if (locale === "en" && lang === 1) {
    return (
      <div
        className=" shadow-lg flex items-stretch text-wrap w-full box-content hover:scale-105 duration-300"
        data-aos="fade-up"
      >
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link href={"/blog/" + slug}>
            <div className="p-3 flex gap-3">
              <FaCalendarAlt className="inline fill-primary size-5 my-0 py-0" />
              <span className="">{moment(date).format("YYYY MMM DD")}</span>
            </div>
            <div className="py-6 px-3 border-y">
              <span className="text-xs title-font text-gray-500 mb-1 h-5 block">
                {/* {categories?.length > 0 && categories[0].title} */}
              </span>
              <h2 className="title-font text-base font-semibold text-gray-900 mb-3 truncate">
                {title}
              </h2>
              <div
                className="leading-relaxed mb-2  text-sm  text-wrap h-20"
                dangerouslySetInnerHTML={{
                  __html:
                    content.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) +
                    "...",
                }}
              />
            </div>
          </Link>

          <div className="flex items-center flex-wrap  py-4 px-3">
            <ButtonClient
              size="sm"
              href={"/blogue/" + slug}
              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
              text={
                <>
                  Read More
                  <FaArrowCircleRight className="ml-2" />
                </>
              }
            />
          </div>
        </div>
      </div>
    );
  }
  if (locale === "fr" && lang === 2) {
    return (
      <div
        className=" shadow-lg flex items-stretch text-wrap w-full box-content hover:scale-105 duration-300 rounded-lg"
        data-aos="fade-up"
      >
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
          <Link href={"/blogue/" + slug } className="flex flex-col grow">
            <Image
              src={
                image ? image : "/img/1-new.webp"
              }
              unoptimized
              width={1200}
              height={400}
              alt={title}
              className="h-[250px]"
            />
            <div className="p-3 flex gap-3">
              <FaCalendarAlt className="inline fill-primary size-5 my-0 py-0" />
              <span className="">{moment(date).format("YYYY - MM - DD")}</span>
            </div>
            <div className="py-3 px-3 border-y grow w-full">
              <h2 className="title-font text-base font-semibold text-gray-900 mb-3 truncate">
                {title}
              </h2>
              <div
                className="leading-relaxed mb-2  truncate text-sm  text-wrap "
                dangerouslySetInnerHTML={{
                  __html: excerpt.replace(/(<([^>]+)>)/gi, ""),
                }}
              />
            </div>
          </Link>
          <div className="flex items-center flex-wrap  py-4 px-3">
            <ButtonClient
              size="sm"
              href={"/blogue/" + slug}
              className="text-white inline-flex items-center md:mb-2 lg:mb-0"
              text={
                <>
                  Lire plus
                  <FaArrowCircleRight className="ml-2" />
                </>
              }
            />
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
