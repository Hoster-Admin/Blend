"use client";

import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "react-fast-marquee";
import { useTranslations, useLocale } from "next-intl";

function Section2() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  // const logos = [
  //   "/integrations/14.webp",
  //   "/integrations/3.webp",
  //   "/integrations/7.webp",
  //   "/integrations/37.webp",
  //   "/integrations/1.webp",
  //   "/integrations/4.webp",
  //   "/integrations/8.webp",
  //   "/integrations/9.webp",
  //   "/integrations/10.webp",
  //   "/integrations/11.webp",
  //   // "/integrations/12.webpp",
  //   "/integrations/15.webp",
  //   "/integrations/22.webp",
  //   "/integrations/16.webp",
  // ];
  const logos = [
    "/integrations/new/1.webp",
    "/integrations/new/2.webp",
    "/integrations/new/3.webp",
    "/integrations/new/4.webp",
    "/integrations/new/5.webp",
    "/integrations/new/6.webp",
    "/integrations/new/7.webp",
    "/integrations/new/8.webp",
    "/integrations/new/9.webp",
    "/integrations/new/10.webp",
    "/integrations/new/11.webp",
    "/integrations/new/12.webp",
    "/integrations/new/13.webp",
    "/integrations/new/14.webp",
    "/integrations/new/15.webp",
  ];
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoized logo rendering
  const renderedLogos = useMemo(
    () =>
      logos.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`logo-${index}`}
          width={isDesktop ? 120 : 80}
          height={40}
          loading="lazy"
          className="mx-4 object-contain"
        />
      )),
    [logos],
  );

  return (
    <AnimatedSection>
      <div className="mx-auto  mb-32 max-w-7xl">
        <h2 className="mb-6 text-center text-lg font-bold md:text-[24px]">
          {t("collected")}
        </h2>
        <div dir="ltr">
          <Marquee
            gradient={isDesktop}
            speed={40}
            gradientColor={"#F4F4F4"}
            gradientWidth={200}
            direction="left"
          >
            {renderedLogos}
          </Marquee>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Section2;
