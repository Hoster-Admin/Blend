import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

// Placeholder imagery reused from the cafe set until dedicated
// cloud-kitchen photography is supplied.
function CloudKitchenComponent() {
  const locale = useLocale();
  const t = useTranslations("sectors");

  const images = [
    "/stores/5.webp",
    "/stores/6.webp",
    "/stores/7.webp",
    "/stores/8.webp",
    "/stores/10.webp",
    "/stores/15.webp",
    "/stores/16.webp",
    "/stores/17.webp",
  ];

  return (
    <div className="">
      <div className=" mx-auto flex max-w-7xl flex-col justify-center px-5 md:px-20 ">
        <AnimatedSection>
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="md:w-[50%]">
              <Image
                src="/sector4.webp"
                width={500}
                height={390}
                alt="Cloud Kitchen"
                className="w-[500px]"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 md:w-[50%]">
              <button className="w-fit rounded-full border border-[#14181C] px-[20px] py-[10px] text-[16px] font-semibold">
                {t("cloudKitchens")}
              </button>
              <h1
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("cloudKitchenPage.heroTitle")}
              </h1>
              <p className="text-[16px] text-[#7D858D] md:max-w-[60%]">
                {t("cloudKitchenPage.heroDescription")}
              </p>
              <Link
                href={`/${locale}/request-demo`}
                className="flex w-fit  cursor-pointer items-center gap-2 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] px-4 py-3 text-[12px] font-bold  text-[#14181C] transition-all duration-300 hover:scale-105"
              >
                {t("cloudKitchenPage.requestDemo")}
                {locale === "ar" ? (
                  <Image
                    src="/arrow-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                ) : (
                  <Image
                    src="/arrow-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="rotate-180"
                  />
                )}
              </Link>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("cloudKitchenPage.detailedParagraph")}
              </p>
              <div className="flex flex-col">
                <p className="text-[16px]  text-[#7D858D]">
                  {t("cloudKitchenPage.qualityStatement")}
                </p>
                <p className="text-[16px] text-[#7D858D]">
                  {t("cloudKitchenPage.qualityStatement2")}
                </p>
                <p className="mt-4 text-[16px] text-[#7D858D]">
                  {t("cloudKitchenPage.qualityStatement3")}
                </p>
              </div>
            </div>
            <div className="md:w-[50%]">
              <Image
                src="/sector5.webp"
                width={500}
                height={390}
                alt="Cloud Kitchen"
                className="w-[500px]"
                priority
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="md:w-[50%]">
              <Image
                src="/sector6.webp"
                width={500}
                height={390}
                alt="Cloud Kitchen"
                className="w-[500px]"
                priority
              />
            </div>
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("cloudKitchenPage.detailedParagraph3")}
              </p>
              <div className="flex flex-col md:w-[70%]">
                <p className="text-[16px] text-[#7D858D]">
                  {t("cloudKitchenPage.qualityStatement5")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="gap-15 mb-32 flex flex-col items-center justify-center">
            <h1 className="text-[32px] font-medium text-center">
              {t("cloudKitchenPage.trustedTitle")}
            </h1>
            <div className="flex  items-center gap-10 overflow-y-auto">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  alt="image"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <section className="mx-auto mb-32  max-w-7xl px-5 md:px-10">
          <div className=" flex h-full flex-col items-center justify-between gap-10 rounded-[32px]  bg-gradient-to-l from-[#FFD25E] to-[#FFF9D9] px-5 py-10 md:h-[376px] md:flex-row  md:gap-20  md:px-10  md:py-0 ">
            <div className="relative w-full md:h-[370px] md:w-[620px]">
              <Image
                src="/sectors-3.webp"
                alt="sectors 3"
                width={620}
                height={370}
                className="md:absolute  md:top-[-40px]"
              />
            </div>
            <div className="flex flex-col gap-7 ">
              <h2
                className={`${locale === "ar" ? "md:text-[40px]" : "md:text-[25px]"} text-2xl font-semibold `}
              >
                {t("cloudKitchenPage.solutionTitle")}
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    {t("cloudKitchenPage.point1")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    {t("cloudKitchenPage.point2")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    {t("cloudKitchenPage.point3")}
                  </p>
                </div>
              </div>
              <Link
                href={`/${locale}/request-demo`}
                className=" flex w-fit cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
              >
                {t("cloudKitchenPage.requestDemo")}
                {locale === "ar" ? (
                  <ArrowLeft size={17} />
                ) : (
                  <ArrowRight size={17} />
                )}
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default CloudKitchenComponent;
