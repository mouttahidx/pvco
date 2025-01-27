import "@/app/globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import Header from "../components/header";
import Footer from "../components/footer";
// import "aos/dist/aos.css";
// import AOSInit from "@/app/components/AOSInit";
import { Noto_Sans } from "next/font/google";
import { NavigationProgress } from "@mantine/nprogress";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
export async function generateMetadata() {
  return {
    title: `${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${process.env.NEXT_PUBLIC_APP_NAME}`,
    robots: "noindex",
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
      </head>
      <body className="!bg-brand-white overflow-x-hidden !scroll-smooth">
        <MantineProvider theme={theme}>
          <NavigationProgress />
          <NextIntlClientProvider messages={messages}>
            <Header />
            {/* <AOSInit /> */}
            <main className="lg:pt-16">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
