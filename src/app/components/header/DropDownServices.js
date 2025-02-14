"use client";

import { Menu } from "@mantine/core";
import NavigationLink from "./NavLink";
import data from "@/utils/productsData.json";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";

export default function DropDownServices({ translations }) {
  return (
    <Menu
      closeOnClickOutside={false}
      shadow="md"
      position="bottom-start"
      offset={10}
      withArrow
      trigger="click-hover"
      openDelay={50}
      closeDelay={500}
      trapFocus={false}
      width={200}
      transitionProps={{ transition: "slide-up", duration: 250 }}
    >
      <Menu.Target>
        <NavigationLink href={"#"} className="menu-item flex items-center gap-x-2">
          Produits Sunspace <FaAngleDown />
        </NavigationLink>
      </Menu.Target>
      <Menu.Dropdown className="flex flex-col p-2 py-2">
        {data.links.map((link, i) => {
          if (i === 0) {
            return (
              <Menu
                key={i}
                shadow="md"
                position="right-start"
                offset={10}
                withArrow
                trigger="click-hover"
                openDelay={50}
                closeDelay={200}
                transitionProps={{ transition: "slide-up", duration: 250 }}
              >
                <Menu.Target>
                  <NavigationLink
                    href={link}
                    className="px-2 menu-item flex justify-between items-center"
                  >
                    {translations["p" + (i + 1)]}{" "}
                    <FaAngleRight className="ml-2 size-3" />
                  </NavigationLink>
                </Menu.Target>
                <Menu.Dropdown className="flex flex-col p-2">
                  {/* <NavigationLink href={data.sunrooms_models[0]}>
                    {translations["s1"]}
                  </NavigationLink>
                  <Menu.Divider /> */}

                  <NavigationLink href={data.sunrooms_models[1]}>
                    {translations["s2"]}
                  </NavigationLink>
                  <Menu.Divider />

                  <NavigationLink href={data.sunrooms_models[2]}>
                    {translations["s3"]}
                  </NavigationLink>
                  {/* <Menu.Divider /> */}

                  {/* <NavigationLink href={data.sunrooms_models[3]}>
                    {translations["s4"]}
                  </NavigationLink> */}
                </Menu.Dropdown>
              </Menu>
            );
          }

          // if (i === 1) {
          //   return (
          //     <Menu
          //       key={i}
          //       shadow="md"
          //       position="right-start"
          //       offset={10}
          //       withArrow
          //       trigger="click-hover"
          //       openDelay={50}
          //       closeDelay={200}
          //       width={300}
          //       transitionProps={{ transition: "slide-up", duration: 250 }}
          //     >
          //       <Menu.Target>
          //         <NavigationLink
          //           href={link}
          //           className="px-2 menu-item flex justify-between items-center"
          //         >
          //           {translations["p" + (i + 1)]}{" "}
          //           <FaAngleRight className="size-3" />
          //         </NavigationLink>
          //       </Menu.Target>
          //       <Menu.Dropdown className="flex flex-col p-2">
          //         <NavigationLink href={data.weathermaster_models[0]}>
          //           {translations["w1"]}
          //         </NavigationLink>
          //         <Menu.Divider />
          //         <NavigationLink href={data.weathermaster_models[1]}>
          //           {translations["w2"]}
          //         </NavigationLink>
          //         <Menu.Divider />

          //         <NavigationLink href={data.weathermaster_models[2]}>
          //           {translations["w3"]}
          //         </NavigationLink>
          //         <Menu.Divider />

          //         <NavigationLink href={data.weathermaster_models[3]}>
          //           {translations["w4"]}
          //         </NavigationLink>
          //       </Menu.Dropdown>
          //     </Menu>
          //   );
          // }

          // if (i === 3) {
          //   return (
          //     <Menu
          //       key={i}
          //       shadow="md"
          //       position="right-start"
          //       offset={10}
          //       withArrow
          //       trigger="click-hover"
          //       openDelay={50}
          //       closeDelay={200}
          //       width={300}
          //       transitionProps={{ transition: "slide-up", duration: 250 }}
          //     >
          //       <Menu.Target>
          //         <NavigationLink
          //           href={link}
          //           className="px-2 menu-item flex justify-between items-center"
          //         >
          //           {translations["p" + (i + 1)]}{" "}
          //           <FaAngleRight className="size-3" />
          //         </NavigationLink>
          //       </Menu.Target>
          //       <Menu.Dropdown className="flex flex-col p-2">
          //         <NavigationLink href={data.railing_models[0]}>
          //           {translations["r1"]}
          //         </NavigationLink>
          //         <Menu.Divider />
          //         <NavigationLink href={data.railing_models[1]}>
          //           {translations["r2"]}
          //         </NavigationLink>
          //         <Menu.Divider />

          //         <NavigationLink href={data.railing_models[2]}>
          //           {translations["r3"]}
          //         </NavigationLink>
          //         <Menu.Divider />

          //         <NavigationLink href={data.railing_models[3]}>
          //           {translations["r4"]}
          //         </NavigationLink>
          //       </Menu.Dropdown>
          //     </Menu>
          //   );
          // }

          // if (i === 4) {
          //   return (
          //     <Menu
          //       key={i}
          //       shadow="md"
          //       position="right-start"
          //       offset={10}
          //       withArrow
          //       trigger="click-hover"
          //       openDelay={50}
          //       closeDelay={200}
          //       width={300}
          //       transitionProps={{ transition: "slide-up", duration: 250 }}
          //     >
          //       <Menu.Target>
          //         <NavigationLink
          //           href={link}
          //           className="px-2 menu-item flex justify-between items-center"
          //         >
          //           {translations["p" + (i + 1)]}{" "}
          //           <FaAngleRight className="size-3" />
          //         </NavigationLink>
          //       </Menu.Target>
          //       <Menu.Dropdown className="flex flex-col p-2">
          //         <NavigationLink href={data.patio_models[0]}>
          //           {translations["pc1"]}
          //         </NavigationLink>
          //         <Menu.Divider />
          //         <NavigationLink href={data.patio_models[1]}>
          //           {translations["pc2"]}
          //         </NavigationLink>
          //         <Menu.Divider />

          //         <NavigationLink href={data.patio_models[2]}>
          //           {translations["pc3"]}
          //         </NavigationLink>
          //       </Menu.Dropdown>
          //     </Menu>
          //   );
          // }

          // return (
          //   <NavigationLink href={link} key={i}>
          //     {translations["p" + (i + 1)]}
          //   </NavigationLink>
          // );
        })}
        <NavigationLink href={data.links[13]} key={'pergolas'}>
          {translations["p14"]}
        </NavigationLink>
      </Menu.Dropdown>
    </Menu>
  );
}
