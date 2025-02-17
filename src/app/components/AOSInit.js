"use client";
import Aos from "aos";
import React, { useEffect } from "react";

export default function AOSInit() {
   useEffect(() => {
    Aos.init({mirror:false,duration:500});
  }, []);

  return <></>;
}
