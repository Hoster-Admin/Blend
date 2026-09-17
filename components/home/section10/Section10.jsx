import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

function Section10() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <AnimatedSection>
      <section className="mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
        <div className="relative flex h-full flex-col after:absolute after:inset-0 after:z-[1] after:rounded-[32px] after:bg-[#00271A]/55 items-center justify-between gap-20 overflow-hidden rounded-[32px] px-5 py-10 shadow-[0_2px_20px_rgba(20,24,28,0.08)] md:h-[263px] md:flex-row md:gap-0 md:px-20 md:py-0">
          {/* Background Image */}
          <Image
            src="/ready.webp"
            alt="Background"
            fill
            className="absolute left-0 top-0 z-0 rounded-[32px] object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-5 md:flex-row ">
            <h2 className="text-center text-2xl max-w-md font-semibold text-white md:text-start md:text-[40px]">
              {t("goodbyeDevices")}
            </h2>
            <Link
              href={`/${locale}/request-demo`}
              className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#7FE22B] px-6 py-3 font-bold text-[#00271A] transition-all duration-300 hover:bg-[#E0FBC0]"
            >
              {t("requestDemoButton")}
              {/* {locale === "ar" ? (
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )} */}
            </Link>
          </div>

          {/* Right Section Image */}
          {/* <div className="relative z-10">
            <Image
              src="/notifcations.svg"
              alt="App switches"
              width={250}
              height={150}
            />
          </div> */}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Section10;
