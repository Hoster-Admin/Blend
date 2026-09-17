"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useRouter } from "next/navigation";

function Section4() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [active, setActive] = useState(0);
  const router = useRouter();
  const steps = [
    {
      image: "/merge.webp",
      bg: "from-[#C6FFED] to-[#34F3B6]",
      text: t("mergeText"),
      button: t("mergeButton"),
      link: `/${locale}/our-services`,
      icon: "/merge-icon.svg",
      width: 250,
    },
    {
      image: "/edit.webp",
      bg: "from-[#FFF9D9] to-[#FFD25E]",
      text: t("editText"),
      button: t("editButton"),
      link: `/${locale}/our-services`,
      icon: "/edit-icon.svg",
      width: 250,
    },
    {
      image: "/reports.webp",
      bg: "from-[#CDE7FF] to-[#71B5FE]",
      text: t("reportsText"),
      button: t("reportsButton"),
      link: `/${locale}/request-demo`,
      icon: "/reports-icon.svg",
      width: 500,
    },
  ];

  const startAutoSwitch = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSwitch();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = (index) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSwitch();
  };

  return (
    <AnimatedSection>
      <section
        ref={sectionRef}
        className="mx-auto mb-32 flex w-full max-w-7xl items-center justify-center overflow-hidden px-5 md:px-10"
      >
        <div
          ref={scrollRef}
          className="flex w-full flex-col items-center gap-10 md:flex-row"
        >
          {/* Right Content */}
          <div className="flex-1 space-y-8 text-center sm:space-y-10 md:text-start">
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[16px] bg-gray-100"
                >
                  {active === i && (
                    <motion.div
                      className={clsx(
                        `absolute ${locale === "ar" ? "right-0" : "left-0"} top-0  z-0 h-full w-0  `,
                        i === 0
                          ? "bg-[#BBFFE9]"
                          : i === 1
                            ? "bg-[#FFF9D9]"
                            : "bg-[#CDE7FF]",
                      )}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                    />
                  )}

                  <button
                    onClick={() => handleClick(i)}
                    className={clsx(
                      "relative z-10 flex w-full  cursor-pointer items-center gap-2 px-4 py-3 text-[14px] font-semibold transition-all sm:text-[16px]",
                      active === i
                        ? "text-black"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200",
                    )}
                  >
                    <Image src={step.icon} alt="icon" width={20} height={20} />
                    {[t("merge"), t("edit"), t("reports")][i]}
                  </button>
                </div>
              ))}
            </div>

            {/* Text */}
            <motion.h2
              key={steps[active].text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold leading-relaxed sm:text-[36px]"
            >
              {steps[active].text}
            </motion.h2>

            {/* CTA Button */}
            <motion.button
              onClick={() => router.push(steps[active].link)}
              key={steps[active].button}
              className="group mx-auto  flex cursor-pointer items-center justify-center gap-2  rounded-full bg-black px-6  py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535] md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[16px] font-bold">
                {steps[active].button}
              </span>
              {locale === "ar" ? (
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </motion.button>
          </div>

          {/* Left Image Section */}
          <motion.div
            className={clsx(
              "flex h-[300px]  w-full items-center justify-center rounded-3xl p-6 transition-all sm:h-[425px] sm:w-[675px]",
              `bg-gradient-to-r ${steps[active].bg}`,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              key={steps[active].image}
              src={steps[active].image}
              alt="step"
              className="p-5 md:p-0"
              style={{ width: steps[active].width }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Section4;
