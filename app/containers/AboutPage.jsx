"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/header/Header";
import AboutFooter from "@/components/footer/AboutFooter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "use-intl";
import OurMsg from "@/components/about/OurMsg";
import HowWeWork from "@/components/about/HowWeWork";
import ExecutiveManagement from "@/components/about/ExecutiveManagement";
import Jobs from "@/components/about/Jobs";
// import IntercomClientComponent from "@/components/IntercomClientComponent";
function AboutPage() {
  const [activeTab, setActiveTab] = useState("ourMsg");
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const tabRef = useRef(null);
  const fixedTabRef = useRef(null);
  const tabsOriginalRef = useRef(null);
  const t = useTranslations("about");

  useEffect(() => {
    const handleScroll = () => {
      if (!tabsOriginalRef.current) return;

      const tabsOriginalRect = tabsOriginalRef.current.getBoundingClientRect();
      const headerHeight = 70; // Adjust based on your Header height

      const shouldBeSticky = tabsOriginalRect.top <= headerHeight;

      setIsSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { key: "ourMsg" },
    { key: "howWeWork" },
    { key: "executiveManagement" },
    { key: "jobs" },
  ];

  const TabBar = ({ isFixed = false }) => (
    <div
      className={cn(
        "mx-auto max-w-7xl transition-all duration-200",
        isFixed && "fixed left-0 right-0 top-0 z-30   py-4",
      )}
      ref={isFixed ? fixedTabRef : tabRef}
    >
      <div
        className={cn(
          "relative mx-auto rounded-xl bg-white p-2 shadow-[#4343431F] shadow-[0_4px_12px_rgba(67,67,67,0.08)] md:w-[1000px] md:rounded-full md:p-4",
          "flex flex-wrap gap-2 md:flex-row md:gap-2",
        )}
      >
        {tabs.map(({ key }) => (
          <div key={key} className="relative min-w-[160px] flex-1">
            {activeTab === key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 z-0 rounded-full bg-[#F3F5F7]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: "100%", height: "100%" }}
              />
            )}
            <button
              onClick={() => {
                setActiveTab(key);
                // Scroll to the top of the toggle tabs
                // if (tabsOriginalRef.current) {
                //   tabsOriginalRef.current.scrollIntoView({
                //     behavior: "smooth",
                //     block: "start",
                //   });
                // }
                // Alternatively, to scroll to the top of the page, uncomment the following line:
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={cn(
                "relative z-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-2 text-[14px]  transition-all duration-200 md:text-[20px] ",
                activeTab === key ? "text-[#14181C] font-semibold" : "font-medium ",
              )}
              aria-selected={activeTab === key}
            >
              {t(key)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center bg-[#F3F5F7] px-5 py-10 md:px-10">
      <div className="flex max-w-[1000px] flex-col items-center justify-center">
        {!isSubmitted && (
          <div ref={tabsOriginalRef} className="w-full">
            <TabBar isFixed={isSticky} />
          </div>
        )}

        <div className="mb-20 mt-20 w-full">
          {activeTab === "ourMsg" && <OurMsg />}
          {activeTab === "howWeWork" && <HowWeWork />}
          {activeTab === "executiveManagement" && <ExecutiveManagement />}
          {activeTab === "jobs" && (
            <Jobs isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
