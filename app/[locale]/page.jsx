"use client";
import { useState } from "react";
import Script from "next/script";
import Section1 from "@/components/home/section1/Section1";
import Section3 from "@/components/home/section3/Section3";
import Section5 from "@/components/home/section5/Section5";
import Section7 from "@/components/home/section7/Section7";
import Section9 from "@/components/home/section9/Section9";
import Section10 from "@/components/home/section10/Section10";
import OfferBar from "@/components/header/OfferBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FeaturesSection from "@/components/home/FeaturesSection";
import DeviceBlock from "@/components/home/DeviceBlock";
import { Toaster } from "sonner";

export default function Home() {
  const [isOfferBarVisible] = useState(false);

  return (
    <>
      <Script
        id="json-ld-blend"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Blend",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            url: "https://tryblend.net",
            description:
              "Blend هو نظام إدارة طلبات موحد للمطاعم والمتاجر، يجمع كل قنوات البيع في لوحة تحكم واحدة سهلة وفعالة.",
            inLanguage: "ar",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "SAR",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Blend",
            url: "https://tryblend.net",
            logo: "https://tryblend.net/wp-content/uploads/2023/10/blend-logo.png",
            sameAs: [
              "https://www.instagram.com/tryblend",
              "https://www.linkedin.com/company/tryblend",
            ],
          },
        ])}
      </Script>
      <Toaster richColors position="bottom-left" />
      <div className="relative w-full overflow-hidden bg-[#00271A]">
        <div className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] rounded-full bg-[#7FE22B] opacity-[0.10] blur-[110px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-[360px] w-[360px] rounded-full bg-[#7FE22B] opacity-[0.08] blur-[110px]" />

        <div
          className={`relative z-40 w-full transition-all duration-300 ease-in-out ${
            isOfferBarVisible ? "h-[109px]" : "h-[64px]"
          }`}
        >
          <OfferBar isVisible={isOfferBarVisible} />
          <Header />
        </div>

        <Section1 />
      </div>
      <div className="bg-[#F4F4F4]">
        <FeaturesSection />
        <Section3 />
        <Section5 />
        <DeviceBlock />
        <Section7 />
        <Section9 />
        <Section10 />
        <Footer />
      </div>
    </>
  );
}
