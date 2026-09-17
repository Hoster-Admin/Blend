import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
// import useBlurHash from "@/utils/useBlurHash";

function RestaurantComponent() {
  const locale = useLocale();
  const t = useTranslations("sectors");
  // const blurDataURL = useBlurHash("L9H^q.^G06M{4mEnr:-U01EM~9-V", 32, 32);

  // Fallback base64 placeholder (a 1x1 transparent pixel)
  // const fallbackBlurDataURL =
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  const images = [
    "/stores/5.webp",
    "/stores/6.webp",
    "/stores/7.webp",
    "/stores/8.webp",
    // "/stores/9.webp",
    "/stores/10.webp",
    "/stores/15.webp",
    "/stores/16.webp",
    "/stores/17.webp",
  ];

  return (
    <div className="">
      {/* Container */}
      <div className=" mx-auto flex max-w-7xl flex-col justify-center px-5 md:px-20 ">
        <AnimatedSection>
          {/* 1st Section */}
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="md:w-[50%]">
              <Image
                src="/sector1.webp"
                width={500}
                height={390}
                alt="Rersurant"
                className="w-[500px]"
                priority
                // placeholder="blur"
                // blurDataURL={blurDataURL || fallbackBlurDataURL}
              />
            </div>
            <div className="flex flex-col gap-3 md:w-[50%]">
              <button className="w-fit rounded-full border border-[#14181C] px-[20px] py-[10px] text-[16px] font-semibold">
                {t("restaurants")}
              </button>
              <h1
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("restaurant.heroTitle")}
              </h1>
              <p className="text-[16px] text-[#7D858D] md:max-w-[60%]">
                {t("restaurant.heroDescription")}
              </p>
              <Link
                href={`/${locale}/request-demo`}
                // href={"/"}
                className="flex w-fit  cursor-pointer items-center gap-2 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] px-4 py-3 text-[12px] font-bold  text-[#14181C] transition-all duration-300 hover:scale-105"
              >
                {t("restaurant.requestDemo")}
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
          {/*END 1st Section */}
        </AnimatedSection>
        {/* 2st Section */}
        <AnimatedSection>
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("restaurant.detailedParagraph")}
              </p>
              <div className="flex flex-col">
                <p className="text-[16px]  text-[#7D858D]">
                  {t("restaurant.qualityStatement")}
                </p>

                <p className="text-[16px] text-[#7D858D]">
                  {t("restaurant.qualityStatement2")}
                </p>

                <p className="mt-4 text-[16px] text-[#7D858D]">
                  {t("restaurant.qualityStatement3")}
                </p>
              </div>
            </div>
            <div className="md:w-[50%]">
              {" "}
              <Image
                src="/sector2.webp"
                width={500}
                height={390}
                alt="Rersurant"
                className="w-[500px]"
                priority
              />
            </div>
          </div>
        </AnimatedSection>
        {/*END 2st Section */}
        {/* 2st Section */}
        <AnimatedSection>
          <div className="mb-32 flex flex-col items-center gap-20 md:flex-row">
            <div className="md:w-[50%]">
              {" "}
              <Image
                src="/sector3.webp"
                width={500}
                height={390}
                alt="Rersurant"
                className="w-[500px]"
                priority
              />
            </div>
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p
                className={` text-[30px] font-bold  ${locale === "ar" ? "md:max-w-[80%] " : ""} md:text-[48px]`}
              >
                {t("restaurant.detailedParagraph3")}
              </p>
              <div className="flex flex-col md:w-[70%]">
                <p className="text-[16px] text-[#7D858D]">
                  {t("restaurant.qualityStatement5")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        {/*END 2st Section */}
        {/*3rd Section */}
        <AnimatedSection>
          <div className="gap-15 mb-32 flex flex-col items-center justify-center">
            <h1 className="text-[32px] font-medium text-center">
              {" "}
              {t("restaurant.trustedTitle")}
            </h1>
            <div className="flex  items-center gap-10 overflow-y-auto">
              {images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                );
              })}
            </div>
          </div>
          {/*END 3rd Section */}
        </AnimatedSection>
      </div>
      {/*4th Section */}
      <AnimatedSection>
        <section className="mx-auto mb-32  max-w-7xl px-5 md:px-10">
          <div className=" flex h-full flex-col items-center justify-between gap-10 rounded-[32px]  bg-gradient-to-l from-[#FFD25E] to-[#FFF9D9] px-5 py-10 md:h-[376px] md:flex-row  md:gap-20  md:px-10  md:py-0 ">
            {/* Left Section */}
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
                {t("restaurant.solutionTitle")}
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
                    {t("restaurant.point1")}
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
                    {t("restaurant.point2")}
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
                    {t("restaurant.point3")}
                  </p>
                </div>
              </div>

              <Link
                href={`/${locale}/request-demo`}
                className=" flex w-fit cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
              >
                {t("restaurant.requestDemo")}
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
      {/*END 4th Section */}
      {/*END Container */}
    </div>
  );
}

export default RestaurantComponent;
