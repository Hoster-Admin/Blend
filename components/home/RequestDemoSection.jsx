import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

function RequestDemoSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
        <div className="flex flex-col items-center justify-center gap-8 rounded-[32px] bg-gradient-to-b from-white to-[#E7F9F3] px-6 py-14 text-center shadow-[0_2px_24px_rgba(20,24,28,0.05)] md:px-16 md:py-20">
          <h3 className="max-w-3xl text-[26px] font-semibold leading-snug text-[#14181C] md:text-[40px]">
            {t("requestDemo1")}
          </h3>
          <h4 className="max-w-2xl text-[16px] text-gray-600 md:text-[20px]">
            {t("requestDemo2")}
          </h4>
          <Link
            href={`/${locale}/request-demo`}
            className="flex h-[50px] w-fit min-w-[220px] cursor-pointer items-center justify-center rounded-[32px] bg-[#14181C] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#10C48A] md:h-[62px]"
          >
            {t("requestDemoButton")}
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default RequestDemoSection;
