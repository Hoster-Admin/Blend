import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import IntercomClientComponent from "@/components/IntercomClientComponent";
import { GoogleTagManager } from "@next/third-parties/google";
import GTMRouteTracker from "@/components/GTMRouteTracker";
import { Suspense } from "react";

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: {
      default: t("homeTitle"),
    },
    description: t("homeDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const dir = locale === "en" ? "ltr" : "rtl";

  return (
    <html lang={locale} dir={dir}>
      <GoogleTagManager gtmId="GTM-W83MN7MP" />
      <body className={`${ibmArabic.variable} ${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <Suspense fallback={null}>
            <GTMRouteTracker />
          </Suspense>
          {children}
        </NextIntlClientProvider>
        <IntercomClientComponent />
      </body>
    </html>
  );
}
