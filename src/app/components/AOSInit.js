"use client";
import { useMantineColorScheme } from "@mantine/core";
import Aos from "aos";
import React, { useEffect } from "react";

export default function AOSInit() {
   const { setColorScheme } = useMantineColorScheme();

   useEffect(() => {
    setColorScheme("light");
    Aos.init({mirror:false,duration:500});
  }, []);

  return <></>;
}
