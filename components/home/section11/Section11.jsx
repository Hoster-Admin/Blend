import React from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";
function Section11() {
  const t = useTranslations("HomePage");
  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
        <div className="flex flex-col items-center gap-10 rounded-[40px] border border-black/5 bg-white px-5 py-12 shadow-[0_2px_20px_rgba(20,24,28,0.04)] md:px-10 md:py-16">
          <h2 className="text-center text-3xl font-bold text-[#14181C] md:text-[45px]">
            {t("joinBlendTitle")}
          </h2>
          <div className="flex w-full justify-center overflow-hidden rounded-[24px]">
            <Image
              src="/join-blend.webp"
              width={1000}
              height={300}
              alt="join blend"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Section11;
