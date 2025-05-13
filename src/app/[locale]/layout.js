import "../globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import Header from "../components/header";
import Footer from "../components/footer";

import "aos/dist/aos.css";
import AOSInit from "@/app/components/AOSInit";

import { Noto_Sans } from "next/font/google";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: `${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME} - Nous vous proposons une vaste gamme de portes, de fenêtres, de rampes, de portes de garage, de solariums et de revêtements extérieurs pour tous les types de résidences et de commerces. Notre objectif : embellir votre propriété tout en maximisant sa fonctionnalité!`,
    // robots: "noindex",
  };
}

const fontFamily = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  fontFamily: fontFamily.style.fontFamily,
  cursorType: "pointer",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Enable static rendering
  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <GoogleTagManager gtmId="GTM-W3Z7XRRL"/>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
             !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '937715668439378');
              fbq('track', 'PageView');
            `}
        </Script>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="overflow-x-hidden !scroll-smooth">
        <MantineProvider theme={theme}>
          <NextIntlClientProvider messages={messages}>
            <AOSInit />
            <Header />
            <main className="">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
