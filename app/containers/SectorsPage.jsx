"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Coffee, Sandwich, ShoppingCart, Pill, Warehouse, ChefHat } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import RestaurantComponent from "@/components/sectors/RestaurantComponent";
import CafeComponent from "@/components/sectors/CafeComponent";
import SuppliersComponent from "@/components/sectors/SuppliersComponent";
import PharmacyComponent from "@/components/sectors/PharmacyComponent";
import DarkStoreComponent from "@/components/sectors/DarkStoreComponent";
import CloudKitchenComponent from "@/components/sectors/CloudKitchenComponent";
import { motion } from "framer-motion";
import Image from "next/image";

const VALID_SECTORS = [
  "restaurants",
  "suppliers",
  "pharmacy",
  "darkStores",
  "cloudKitchens",
];

function SectorsPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("sector") || "restaurants";
  const t = useTranslations("sectors");
  const locale = useLocale();

  const [activeTab, setActiveTab] = useState("cafe");
  const [isSticky, setIsSticky] = useState(false);
  const tabRef = useRef(null);
  const fixedTabRef = useRef(null);
  const tabsOriginalRef = useRef(null);
  const contentEndRef = useRef(null);

  useEffect(() => {
    const tabType = VALID_SECTORS.includes(typeParam) ? typeParam : "cafe";
    setActiveTab(tabType);

    if (searchParams.get("sector")) {
      setTimeout(() => {
        if (tabRef.current) {
          tabRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [typeParam]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tabsOriginalRef.current || !contentEndRef.current) return;

      const tabsOriginalRect = tabsOriginalRef.current.getBoundingClientRect();
      const contentEndRect = contentEndRef.current.getBoundingClientRect();
      const headerHeight = 0;

      const shouldBeSticky = tabsOriginalRect.top <= headerHeight;
      const shouldStopSticky =
        contentEndRect.bottom <= window.innerHeight - 100;

      setIsSticky(shouldBeSticky && !shouldStopSticky);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    {
      key: "restaurants",
      icon: <Sandwich size={25} className="text-gray-700" />,
    },
    {
      key: "cafe",
      icon: <Coffee size={25} className="text-gray-700" />,
    },
    {
      key: "suppliers",
      icon: <ShoppingCart size={25} className="text-gray-700" />,
    },
    {
      key: "pharmacy",
      icon: <Pill size={25} className="text-gray-700" />,
    },
    {
      key: "darkStores",
      icon: <Warehouse size={25} className="text-gray-700" />,
    },
    {
      key: "cloudKitchens",
      icon: <ChefHat size={25} className="text-gray-700" />,
    },
  ];

  const TabBar = ({ isFixed = false }) => (
    <div
      className={cn(
        "mx-auto max-w-7xl px-5  transition-all duration-200 md:px-10",
        isFixed && "fixed left-0 right-0 top-0 z-30 bg-white py-4",
      )}
      ref={isFixed ? fixedTabRef : tabRef}
    >
      <div
        className={cn(
          "relative mx-auto rounded-xl bg-[#F3F5F7] p-2  md:max-w-[558px] md:rounded-full md:p-4",
          "flex flex-wrap gap-2 md:gap-2",
        )}
      >
        {tabs.map(({ key, icon }) => (
          <div key={key} className="relative min-w-[130px] flex-1">
            {activeTab === key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 z-0 rounded-full bg-gradient-to-l from-[#34F3B6] to-[#C6FFED]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <button
              onClick={() => {
                setActiveTab(key);
                if (tabsOriginalRef.current) {
                  tabsOriginalRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className={cn(
                "relative z-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-2 text-[14px] font-medium text-black transition-all duration-200 md:text-[20px] md:font-medium",
                activeTab === key ? "text-black" : "hover:bg-white/50",
              )}
              aria-selected={activeTab === key}
            >
              {icon}
              {t(key)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <AnimatedSection>
        <div className="mb-20 rounded-b-[40px] bg-[#F3F5F7] py-10 md:h-[460px]">
          <div className="mx-auto flex h-full max-w-7xl  flex-col items-center justify-center gap-20 px-5 md:flex-row md:px-10">
            <div className="flex flex-col ">
              {" "}
              <h1 className="text-[36px] font-bold">{t("sectorsTitle")}</h1>
              <h1 className="mb-4 text-[36px] font-bold">
                {t("sectorsTitle2")}
              </h1>
              <p className="text-[16px] ">{t("sectorsDesc")}</p>
              <p className="text-[16px] ">{t("sectorsDesc2")}</p>
            </div>

            <Image
              src="/sectors-banner.svg"
              width={666}
              height={280}
              alt="sectors banner"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div ref={tabsOriginalRef}>
          <TabBar />
        </div>
      </AnimatedSection>

      {isSticky && <TabBar isFixed={true} />}

      <div className="mt-32" ref={contentEndRef}>
        {activeTab === "restaurants" && <RestaurantComponent />}
        {activeTab === "cafe" && <CafeComponent />}
        {activeTab === "suppliers" && <SuppliersComponent />}
        {activeTab === "pharmacy" && <PharmacyComponent />}
        {activeTab === "darkStores" && <DarkStoreComponent />}
        {activeTab === "cloudKitchens" && <CloudKitchenComponent />}
      </div>
    </>
  );
}

export default SectorsPage;
