"use client";
import { Link, usePathname } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function OurProductsNav({ translations }) {
  const [show, setShow] = useState(false);
  const path = usePathname() || null;
  
    useEffect(() => {
      setShow(false);
    }, [path]);

  const showProducts = () => {
    setShow((curr) => !show);
  };

  return (
    <span onClick={showProducts} className="cursor-pointer hover:underline underline-offset-2 flex items-center gap-x-1">
      {translations["ourProducts"]} {show ? <FaAngleUp /> : <FaAngleDown />}

      {show && (
        <div data-aos="fade-down" className="w-full grid grid-cols-4 grid-rows-2 gap-4 mt-16 h-[85vh] text-white font-semibold text-xl fixed bg-white top-10 left-0 z-20 p-4">
          <FaCircleXmark className="absolute fill-black right-5 -top-5 cursor-pointer hover:fill-primary duration-500" size={24} onClick={()=>{setShow(false)}} />
          <Link
            href="/produits/portes"
            className="row-span-2 bg-cover cursor-pointer group hover:scale-105 duration-500  rounded-s-3xl bg-doors relative"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full  rounded-s-3xl p-4 ">
              Portes
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/portes-de-garage"
            className="bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-doorsGarage relative"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Portes de garage
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/fenetres"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-windows"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Fenêtres
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/balcons-et-rampes"
            className=" bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary rounded-tr-3xl bg-balcons"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4 rounded-tr-3xl">
              Balcons et rampes
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/solariums"
            className="col-start-2 row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-solarium"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Solariums
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>{" "}
          </Link>
          <Link
            href="/produits/revetements-exterieurs"
            className="col-start-3 row-start-2  bg-cover cursor-pointer group hover:scale-105 duration-500 hover:bg-primary bg-exterior"
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4">
              Revêtements extérieurs
              <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                +
              </span>
            </div>
          </Link>
          <Link
            href="/produits/accessoires"
            className="col-start-4 row-start-2  bg-cover cursor-pointer hover:scale-105 duration-500 hover:bg-primary rounded-br-3xl bg-accessories group "
          >
            <div className="bg-black hover:bg-primary duration-500 bg-opacity-40 h-full relative p-4 rounded-br-3xl">
              <span className="text-white">
                Accessoires
                <span className="text-8xl absolute inset-0 flex items-center justify-center group-hover:text-white duration-500 text-transparent">
                  +
                </span>
              </span>
            </div>
          </Link>
        </div>
      )}
    </span>
  );
}
