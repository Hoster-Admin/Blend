import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
function FeaturesSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const cards = [
    {
      title: t("featureSection.card1Title"),
      desc: t("featureSection.card1Desc"),
      img: "/feature-image1.webp",
      width: 200,
    },
    {
      title: t("featureSection.card2Ttitle"),
      desc: t("featureSection.card2Desc"),
      img: "/feature-image2.webp",
      width: 240,
    },
    {
      title: t("featureSection.card3Title"),
      desc: t("featureSection.card3Desc"),
      img: "/feature-image3.webp",
      width: 210,
    },
  ];

  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 grid max-w-7xl  grid-cols-1 gap-6 px-5 md:mb-32 md:grid-cols-3 md:px-10 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col gap-6 rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_2px_20px_rgba(20,24,28,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(20,24,28,0.08)]"
          >
            <div className="flex h-[280px] items-center justify-center rounded-[24px] bg-[#E0FBC0]/30 p-6">
              <Image
                src={card.img}
                width={card.width}
                height={200}
                alt="image"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 px-2">
              <h4 className="text-center text-[20px] font-semibold text-[#00271A]">
                {card.title}
              </h4>
              <p className="text-center text-base font-normal leading-relaxed text-gray-600">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default FeaturesSection;
