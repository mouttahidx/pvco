"use client";

import { Link } from "@/i18n/routing";
import { useSelectedLayoutSegment } from "next/navigation";
import {  forwardRef } from "react";

const NavigationLink = forwardRef(
  ({ href,children, ...others }, ref) => {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
    const isActive = pathname === href;
    return (
      <Link
        ref={ref}
        aria-current={isActive ? "page" : undefined}
        className={isActive ? "menu-item-active" :"menu-item"}
        href={href}
        {...others}
      >
        {children}</Link>
    );
  }
);
NavigationLink.displayName = "NavLink"
export default NavigationLink;
