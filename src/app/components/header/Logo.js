import { Link } from "@/i18n/routing";
import React from "react";

export default function Logo({white = false}) {

  if(white){
    return (
      <Link href={"/"} rel="canonical" className="">
        <img src="/logo.svg" alt="Logo" className="w-[200px]" />
      </Link>
    );
  }
  return (
    <Link href={"/"} rel="canonical" className="">
      <img src="/logo.svg" alt="Logo" className="w-[200px]" />
    </Link>
  );
}
