"use client";
import Link from "next/link";
import Nav from "./Nav";
import ButtonClient from "../ButtonClient";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden lg:block fixed top-0 bg-white w-full z-30`}
        data-aos="fade-in"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href={"/"} className="flex-1">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-[200px]"
              width={200}
              height={100}
            />
          </Link>
          <Nav scrolled={scrollTop > 0 ? true : false} />
          <div className="flex-1 text-right">
            <ButtonClient text={"Soumission"} href={"/contact"} />
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
}
