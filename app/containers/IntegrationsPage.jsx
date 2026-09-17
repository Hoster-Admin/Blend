"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import IntegrationsCardsSection from "@/components/integrations/IntegrationsCardsSection";
import IntegrationsSidebar from "@/components/integrations/IntegrationsSidebar";
import Link from "next/link";
import Section10 from "@/components/home/section10/Section10";
function IntegrationsPage() {
  const t = useTranslations("integrations");
  const locale = useLocale();
  const [activeCountry, setActiveCountry] = useState(null); // Selected country or null for all
  const [activeTypeId, setActiveTypeId] = useState(null); // Default to typeID 1 (Delivery Apps)
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
     <div className="bg-[#F4F4F4] pt-8">
        <div className="relative mb-20  h-[330px] overflow-hidden  bg-[#33F3B4]">
          <Image
            src="/integration-banner.svg"
            alt="Integrations"
            width={1504} // Kept for Next.js optimization
            height={380} // Kept for Next.js optimization
            className="pointer-events-none absolute left-1/2 top-0 z-10 h-[330px] w-auto -translate-x-1/2 object-cover opacity-80"
          />
          <div className="relative z-50 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-2 px-5 text-center md:px-10">
            <h1
              className={` text-[36px] font-bold  ${locale === "ar" ? "" : "md:mt-22"}`}
            >
              {t("title")}
            </h1>
            <p className="max-w-sm text-[16px]">{t("desc")}</p>
            <div className="relative w-full md:w-[400px]"></div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mb-20 flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:gap-8 md:px-10">
        <div className="w-full md:w-[230px]">
          <IntegrationsSidebar
            activeCountry={activeCountry}
            setActiveCountry={setActiveCountry}
            activeTypeId={activeTypeId}
            setActiveTypeId={setActiveTypeId}
          />
        </div>
        <div className="w-full flex-1">
          <IntegrationsCardsSection
            activeCountry={activeCountry}
            activeTypeId={activeTypeId}
            searchQuery={searchQuery}
          />
        </div>
      </div>
      <div className="pt-5">
        <Section10 />
      </div>
    </>
  );
}

export default IntegrationsPage;
