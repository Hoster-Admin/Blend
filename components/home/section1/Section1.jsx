"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "HungerStation", src: "/integrations/3.webp", className: "start-[4%] top-[18%] md:start-[8%] md:top-[22%]" },
  { name: "Jahez", src: "/integrations/1.webp", className: "end-[4%] top-[16%] md:end-[10%] md:top-[20%]" },
  { name: "The Chefz", src: "/integrations/8.webp", className: "start-[8%] bottom-[22%] md:start-[12%] md:bottom-[26%]" },
  { name: "ToYou", src: "/integrations/4.webp", className: "end-[6%] bottom-[20%] md:end-[12%] md:bottom-[24%]" },
  { name: "Mrsool", src: "/integrations/6.webp", className: "start-[2%] top-[48%] md:start-[4%] md:top-[46%]" },
  { name: "Foodics", src: "/integrations/11.webp", className: "end-[2%] top-[48%] md:end-[5%] md:top-[45%] opacity-70", desktopOnly: true },
  { name: "Geidea", src: "/integrations/30.webp", className: "start-[18%] top-[8%] md:start-[22%] md:top-[10%] opacity-70", desktopOnly: true },
  { name: "Careem", src: "/integrations/2.webp", className: "end-[16%] top-[8%] md:end-[20%] md:top-[12%]" },
];

const MOBILE_PARTNERS = PARTNERS.filter((p) => !["Foodics", "Geidea"].includes(p.name));

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Section1() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="relative z-10 mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
      <AnimatedSection>
        <div className="relative overflow-hidden py-16 md:min-h-[560px] md:py-24">
          {/* Floating partner logos */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.05, duration: 0.5 }}
                className={`absolute ${partner.className} motion-safe:animate-float-soft`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-2 shadow-[0_8px_30px_rgba(0,39,26,0.18)] backdrop-blur-sm">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center justify-center text-center"
          >
            <div className="flex w-full max-w-3xl flex-col items-center">
              <motion.h1
                variants={itemVariants}
                className="text-balance text-[32px] font-semibold leading-[1.15] tracking-tight text-white md:text-[52px]"
              >
                {t("title1")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-2xl text-balance text-[17px] font-normal leading-relaxed text-white/70 md:text-[20px]"
              >
                {t("title2")}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
              >
                <Link
                  href={`/${locale}/request-demo`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7FE22B] px-6 py-3 text-sm font-semibold text-[#00271A] transition hover:bg-[#E0FBC0]"
                >
                  {t("requestDemo")}
                  {locale === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Link>
                <Link
                  href={`/${locale}/products`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {t("seeHowItWorks")}
                  {locale === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Link>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mt-8 text-xs font-medium tracking-wide text-white/45 md:text-sm"
              >
                {t("title3")}
              </motion.p>

              {/* Mobile partner strip */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex w-full max-w-md flex-wrap items-center justify-center gap-3 md:hidden"
              >
                {MOBILE_PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/95 p-1.5"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={32}
                      height={32}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Section1;
