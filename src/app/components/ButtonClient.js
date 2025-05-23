"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@mantine/core";

export default function ButtonClient({
  href,
  className,
  text,
  variant = "filled",
  color = "#FD6941",
  size = "sm",
  target,
  locale
}) {
  const textColor = variant === "filled" && '!text-black !border-black';
  return (
    <Button
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-duration="400"
      component={Link}
      href={href}
      variant={variant}
      className={" !h-fit !px-5 !py-3 !rounded-full font-semibold " + textColor +" " + className}
      color={color}
      size={size}
      target={target && "_blank"}
    >
      {text}
    </Button>
  );
}
