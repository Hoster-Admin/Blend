"use client";

import React from "react";
import Section9 from "@/components/home/section9/Section9";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
function PricingPage() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const cards = [
    {
      id: 1,
      subscribeType: t("yearly"),
      price: 330,
      duration: "",
      benefits: [
        {
          logo: "/f1.svg",
          title: t("twoFreeCloudBrands"),
        },
        {
          logo: "/f2.svg",
          title: t("unlimitedOrders"),
        },
        {
          logo: "/f3.svg",
          title: t("noHiddenFees"),
        },
        {
          logo: "/f4.svg",
          title: t("unlimitedIntegrations"),
        },
      ],
    },
    {
      id: 2,
      subscribeType: t("yearly"),
      price: 330,
      duration: "",
      benefits: [
        {
          logo: "/f1.svg",
          title: t("twoFreeCloudBrands"),
        },
        {
          logo: "/f2.svg",
          title: t("unlimitedOrders"),
        },
        {
          logo: "/f3.svg",
          title: t("noHiddenFees"),
        },
        {
          logo: "/f4.svg",
          title: t("unlimitedIntegrations"),
        },
      ],
    },
    {
      id: 3,
      subscribeType: t("yearly"),
      price: 330,
      duration: "",
      benefits: [
        {
          logo: "/f1.svg",
          title: t("twoFreeCloudBrands"),
        },
        {
          logo: "/f2.svg",
          title: t("unlimitedOrders"),
        },
        {
          logo: "/f3.svg",
          title: t("noHiddenFees"),
        },
        {
          logo: "/f4.svg",
          title: t("unlimitedIntegrations"),
        },
      ],
    },
  ];

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 pt-20 md:flex-row md:gap-8 md:px-10">
      <div className="flex flex-col">
        {" "}
        {/* Text Section */}
        <AnimatedSection>
          <div className="mb-30 md:ps-30 flex flex-col justify-center">
            <h2 className="text-[30px] font-bold md:text-[40px]">
              {" "}
              {t("title")}
            </h2>
            <p className="text-[24px]"> {t("desc")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          {/* Prices Section */}
          <div className="mb-30 grid grid-cols-1 gap-14 md:grid-cols-3">
            {cards.map((p) => (
              <div
                key={p.id}
                className="rounded-[32px] border border-[#666666] p-6"
              >
                {/* Subscription Type */}
                <div className="mb-8 flex w-fit gap-2 rounded-[12px] bg-[#FFDEFB] px-4 py-2">
                  <Image
                    src={"/calender2.svg"}
                    width={24}
                    height={24}
                    alt="calender"
                  />
                  <p className="] text-base font-bold text-[#14181C]">
                    {p.subscribeType}
                  </p>
                </div>
                {/* Price */}
                <div className="mb-10 flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-[48px] font-bold text-[#14181C]">
                      {p.price}
                    </h2>
                    <Image
                      src={"/ryal.svg"}
                      width={32}
                      height={32}
                      alt="ryal"
                    />
                  </div>
                  <p className="text-[#14181C]">{t("monthlyPerBranch")}</p>
                </div>
                {/* benefits */}
                <div className="mb-12 flex flex-col gap-3">
                  {p.benefits.map((b) => (
                    <li key={b.title} className="flex gap-2 text-[#14181C]">
                      <Image
                        src={b.logo}
                        width={24}
                        height={24}
                        alt={b.title}
                      />
                      {b.title}
                    </li>
                  ))}
                </div>
                <div className="flex w-full items-center justify-center">
                  {/* Action */}
                  <button className="h-[47] w-[220] rounded-[32px] bg-black text-[20px] font-bold text-white hover:opacity-90">
                    {t("choose")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <Section9 />
      </div>
    </div>
  );
}

export default PricingPage;
