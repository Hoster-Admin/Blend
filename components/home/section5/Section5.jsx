import React from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
function Section5() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const sectors = [
    {
      key: "R",
      video: "/video3.mp4",
      icon: "/cart-icon.svg",
      label: t("restaurants"),
    },
    {
      key: "C",
      video: "/video2.mp4",
      icon: "/cup-icon.svg",
      label: t("cafes"),
    },
    {
      key: "RE",
      video: "/video1.mp4",
      icon: "/burger-icon.svg",
      label: t("retail"),
    },
  ];

  const sectorHrefMap = {
    R: "restaurants",
    RE: "suppliers",
    C: "cafe",
  };

  return (
    <AnimatedSection>
      <div className="mx-auto  max-w-7xl px-5 md:px-10">
        <section className="mb-24 flex h-full justify-center rounded-[40px] border border-black/5 bg-white shadow-[0_2px_20px_rgba(20,24,28,0.04)] md:mb-32 md:h-[585px]">
          <div className=" flex flex-col items-center justify-center  gap-[60px]  py-10">
            <h2 className="text-[40px] text-center font-bold text-[#00271A]">
              {t("anySector")}
            </h2>
            <div className="flex flex-col gap-5 md:h-[365px] md:w-[760px] md:flex-row">
              {sectors.map((sector, index) => (
                <Link
                  href={`/${locale}/sectors?sector=${sectorHrefMap[sector.key] || ""}`}
                  key={index}
                  className="group relative h-[365px] w-[240px] cursor-pointer overflow-hidden rounded-[24px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_36px_rgba(20,24,28,0.18)]"
                >
                  {/* Video */}
                  <video
                    src={sector.video}
                    className="h-full w-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                  />
                  {/* Bottom gradient for legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Overlay */}
                  <div className="backdrop-blur-xs absolute left-1/2 top-10 flex -translate-x-1/2  items-center justify-center gap-2 rounded-full bg-[#00271A]/70 px-[32px] py-[11px] text-white">
                    <Image
                      src={sector.icon}
                      alt="icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-nowrap text-center text-[20px] font-semibold">
                      {sector.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedSection>
  );
}

export default Section5;
