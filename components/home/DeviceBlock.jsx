import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

function DeviceBlock() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
        <div className="flex flex-col items-center gap-8 rounded-[40px] border border-black/5 bg-white px-5 py-12 shadow-[0_2px_20px_rgba(0,39,26,0.04)] md:px-10 md:py-16">
          <h2 className="text-center text-3xl font-bold text-[#00271A] md:text-[40px]">
            {t("joinBlendTitle")}
          </h2>
          <div className="flex w-full justify-center overflow-hidden rounded-[24px] bg-[#F4F4F4]">
            <Image
              src="/join-blend.webp"
              width={1000}
              height={300}
              alt="Blend dashboard on device"
              className="w-full"
            />
          </div>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00271A] transition hover:text-[#00271A]/80"
          >
            {t("seeHowItWorks")}
            {locale === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default DeviceBlock;
