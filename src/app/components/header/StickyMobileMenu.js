"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { Link } from "@/i18n/routing";

export default function StickyMobileMenu({ translations }) {
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

  if (scrollTop > 150) {
    return (
      <div className="px-4 fixed left-0 items-center top-0 z-50 w-full bg-white shadow flex justify-between py-2 overflow-x-hidden">
        <MobileDrawer translations={translations} />
        <Link
          href="/contact"
          className="ml-5 rounded-3xl  border-primary border-2 uppercase font-bold duration-200 bg-primary text-black text-center p-2 border-black text-xs xl:text-sm"
        >
          {translations['free_quote']}
        </Link>
      </div>
    );
  }
}
