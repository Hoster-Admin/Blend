"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Package,
  AlignStartVertical,
  ChartPie,
  Smartphone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
function OurServicesPage() {
  const t = useTranslations("OurServices");
  const locale = useLocale();
  const searchParams = useSearchParams();

  useEffect(() => {
    const targetId = searchParams.get("service");
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -100; // adjust based on your layout (try -80, -100, or -120)
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [searchParams]);

  const services = [
    {
      key: "order-management",
      icon: <Package size={21} className="text-gray-700" />,
      bg: "from-[#71B5FE] to-[#CDE7FF]",
      img: "/service-1.svg",
      label: t("orders.label"),
      title: t("orders.title"),
      paragraph1: t("orders.paragraph1"),
      paragraph2: t("orders.paragraph2"),
      paragraph3: t("orders.paragraph3"),
    },
    {
      key: "products-management",
      icon: <AlignStartVertical size={21} className="text-gray-700" />,
      bg: "from-[#34F3B6] to-[#C6FFED]",
      img: "/service2.svg",
      label: t("items.label"),
      title: t("items.title"),
      paragraph1: t("items.paragraph1"),
      paragraph2: t("items.paragraph2"),
      paragraph3: t("items.paragraph3"),
      paragraph4: t("items.paragraph4"),
    },
    {
      key: "reports-management",
      icon: <ChartPie size={21} className="text-gray-700" />,
      bg: "from-[#FFD25E] to-[#FFF9D9]",
      img: "/service3.svg",
      label: t("reports.label"),
      title: t("reports.title"),
      paragraph1: t("reports.paragraph1"),
      paragraph2: t("reports.paragraph2"),
      paragraph3: t("reports.paragraph3"),
    },
    {
      key: "supplier-app",
      icon: <Smartphone size={21} className="text-gray-700" />,

      bg: "from-[#FF6C02] to-[#FFE5D1]",
      img: "/service4.svg",
      label: t("merchantApp.label"),
      title: t("merchantApp.title"),
      paragraph1: t("merchantApp.paragraph1"),
      paragraph2: t("merchantApp.paragraph2"),
      paragraph3: t("merchantApp.paragraph3"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl  px-5 py-10 md:px-10">
      <div className=" flex flex-col items-center">
        {/* Start Image */}
        <div className="relative mb-20 w-full">
          {/* Image */}
          <Image
            src="/our-services-banner.webp"
            alt="Our Services"
            width={1137}
            height={300}
            className="h-full w-full"
          />
          {/* Overlay */}

          <div className="absolute inset-0 rounded-[40px]  bg-black opacity-20" />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center gap-2 p-2 md:gap-6 md:p-20">
            <AnimatedSection>
              {" "}
              <h1
                className={` text-[15px] font-bold text-white ${locale === "ar" ? "md:max-w-[27%]" : "md:max-w-[40%]"}  md:text-[40px]`}
              >
                {t("bannerTitle")}
              </h1>
              <p className="text-[13px] text-white md:text-[16px]">
                {t("bannerDesc")}
              </p>
            </AnimatedSection>
          </div>
        </div>
        {/* End Image */}
        <div className="mb-18 flex w-full flex-col gap-[42px]">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div
                id={service.key}
                className="flex flex-col items-center gap-8 rounded-[28px] border border-[#E0E0E0] p-4 md:flex-row md:p-12"
              >
                <Image
                  src={service.img}
                  width={270}
                  height={231}
                  alt=""
                  className="h-[231px] w-[270px] shrink-0 rounded-[32px] object-cover"
                />
                <div className="flex flex-col  items-center justify-center md:items-start md:justify-start">
                  <div className="flex items-center  gap-2">
                    <div
                      className={`flex h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-gradient-to-l ${service.bg} p-1 transition-all duration-300`}
                    >
                      {service.icon}
                    </div>
                    <p className="text-[16px] font-bold">{service.label}</p>
                  </div>
                  <h1 className="mb-4 mt-3 text-center text-[30px] font-bold md:text-start md:text-[36px]">
                    {service.title}
                  </h1>
                  <p className="mb-5 text-center text-[18px] text-[#7D858D] md:text-start">
                    {service.paragraph1}
                  </p>
                  <p className="text-center text-[18px] text-[#7D858D] md:text-start">
                    {service.paragraph2}
                  </p>
                  <p className="text-center text-[18px] text-[#7D858D] md:text-start">
                    {service.paragraph3}
                  </p>
                  <p className="text-center text-[18px] text-[#7D858D] md:text-start">
                    {service.paragraph4}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <section className="mx-auto my-10 w-full max-w-7xl px-5 md:px-[160px] ">
          <div className=" flex  h-full w-full flex-col items-center  justify-between gap-7 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] px-5 py-10  md:h-[100px]  md:flex-row md:gap-0 md:px-10  md:py-0 ">
            <h2 className="text-center text-2xl font-semibold md:text-start md:text-[22px]">
              {t("readyToManageDeliveryApps")}
            </h2>
            <Link
              href={`/${locale}/request-demo`}
              className="group flex w-fit cursor-pointer items-center gap-2  rounded-full bg-black px-6  py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
            >
              {t("requestDemo")}
              {locale === "ar" ? (
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurServicesPage;
