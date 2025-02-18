/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Link } from "@/i18n/routing";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Accordion, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Logo from "./Logo";
import data from "@/utils/productsData.json";

export default function MobileDrawer({ translations }) {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();
  const PVCOproducts = [
    {
      url: "/produits/portes",
      text: translations["doors"],
    },
    {
      url: "/produits/portes-de-garage",
      text: translations["doorsGarages"],
    },
    {
      url: "/produits/fenetres",
      text: translations["windows"],
    },
    {
      url: "/produits/balcons-et-rampes",
      text: translations["balconies"],
    },
    {
      url: "/produits/solariums",
      text: translations["sunrooms"],
    },
    {
      url: "/produits/revetements-exterieurs",
      text: translations["exterior"],
    },
    {
      url: "/produits/accessoires",
      text: translations["accessories"],
    },
  ];
  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <div>
      <svg
        onClick={open}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <Drawer
        position="left"
        opened={opened}
        onClose={close}
        title={
          <span className="text-primary text-center w-full">
            <Logo />
          </span>
        }
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{
          transition: "slide-right",
          duration: 200,
          timingFunction: "ease",
        }}
        closeButtonProps={{
          icon: <XMarkIcon className="w-6 h-6" />,
        }}
      >
        {/* add menu and submenu */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300"
          >
            {translations["home"]}
          </Link>
          <Accordion defaultValue="">
            <Accordion.Item key="" value={"products"}>
              <Accordion.Control className="hover:bg-primary rounded duration-300">
                {translations["products"]}
              </Accordion.Control>
              <Accordion.Panel>
                <div className="w-full flex flex-col">
                  {PVCOproducts.map((product) => (
                    <Link
                      className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                      component={Link}
                      href={product.url}
                      key={product.text}
                    >
                      {product.text}
                    </Link>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultValue="">
            <Accordion.Item key="" value={"sunspace product"}>
              <Accordion.Control className="hover:bg-primary rounded duration-300">
                Produits Sunspace
              </Accordion.Control>
              <Accordion.Panel>
                <div className="w-full flex flex-col">
                  <Accordion defaultValue="">
                    <Accordion.Item key="" value={"sunspace product"}>
                      <Accordion.Control className="hover:bg-primary rounded duration-300">
                        Solariums
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="w-full flex flex-col">
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.sunrooms_models[0]}
                            key={translations["s1"]}
                          >
                            {translations["s1"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.sunrooms_models[1]}
                            key={translations["s2"]}
                          >
                            {translations["s2"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.sunrooms_models[2]}
                            key={translations["s3"]}
                          >
                            {translations["s3"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.sunrooms_models[3]}
                            key={translations["s4"]}
                          >
                            {translations["s4"]}
                          </Link>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion defaultValue="">
                    <Accordion.Item key="" value={"sunspace product"}>
                      <Accordion.Control className="hover:bg-primary rounded duration-300">
                        {translations["p2"]}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="w-full flex flex-col">
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.weathermaster_models[0]}
                            key={translations["w1"]}
                          >
                            {translations["w1"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.weathermaster_models[1]}
                            key={translations["w2"]}
                          >
                            {translations["w2"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.weathermaster_models[2]}
                            key={translations["w3"]}
                          >
                            {translations["w3"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.weathermaster_models[3]}
                            key={translations["w4"]}
                          >
                            {translations["w4"]}
                          </Link>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion defaultValue="">
                    <Accordion.Item key="" value={"sunspace product"}>
                      <Accordion.Control className="hover:bg-primary rounded duration-300">
                        {translations["p4"]}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="w-full flex flex-col">
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.railing_models[0]}
                            key={translations["r1"]}
                          >
                            {translations["r1"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.railing_models[1]}
                            key={translations["r2"]}
                          >
                            {translations["r2"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.railing_models[2]}
                            key={translations["r3"]}
                          >
                            {translations["r3"]}
                          </Link>
                          <Link
                            className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                            component={Link}
                            href={data.railing_models[3]}
                            key={translations["r4"]}
                          >
                            {translations["r4"]}
                          </Link>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <Link
                    className={`border-b last:border-none py-2 w-full hover:bg-primary px-4 rounded duration-300`}
                    component={Link}
                    href={data.links[data.links.length - 1]}
                    key={translations["p14"]}
                  >
                    {translations["p14"]}
                  </Link>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <div className="flex flex-col">
            <Link
              href={"/services"}
              className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300 "
            >
              {translations["services"]}
            </Link>
            <Link
              href={"/realisations"}
              className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300 "
            >
              {translations["portfolio"]}
            </Link>
            <Link
              href={"/a-propos"}
              className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300 "
            >
              {translations["aboutUs"]}
            </Link>
            <Link
              href={"/carrieres"}
              className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300 "
            >
              {translations["careers"]}
            </Link>
            <Link
              href={"/contact"}
              className="border-b py-2 pl-4 w-full hover:bg-primary rounded duration-300 "
            >
              {translations["contact"]}
            </Link>

            <Link
              href="/contact"
              className=" py-2 mt-4 px-4 bg-primary duration-300 w-full text-center font-bold rounded-full border border-black text-black"
            >
              {translations["free_quote"]}
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
