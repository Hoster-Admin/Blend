"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PRODUCT_META, ORDER_CHANNEL_SLUGS } from "@/lib/productsConfig";

// Delivery-app orders is the only channel with an existing partner directory
// to deep-link into; the rest don't have a filtered Integrations view.
const INTEGRATIONS_HREF_BY_SLUG = {
  "delivery-apps": "?type=1",
};

function ProductDetailPage({ slug }) {
  const t = useTranslations("products");
  const locale = useLocale();
  const meta = PRODUCT_META[slug];
  const Icon = meta.icon;
  const isChannel = ORDER_CHANNEL_SLUGS.includes(slug);
  const integrationsHref = INTEGRATIONS_HREF_BY_SLUG[slug];

  const paragraphs = [
    t(`${slug}.paragraph1`),
    t(`${slug}.paragraph2`),
    t(`${slug}.paragraph3`),
  ];
  if (slug === "item-management") {
    paragraphs.push(t(`${slug}.paragraph4`));
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
      <div className="flex flex-col items-center">
        <AnimatedSection>
          <div className="mb-20 flex flex-col items-center gap-8 rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_2px_20px_rgba(20,24,28,0.04)] md:flex-row md:p-12">
            <Image
              src={meta.image}
              width={270}
              height={231}
              alt=""
              className="h-[231px] w-[270px] shrink-0 rounded-[32px] object-cover"
            />
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-gradient-to-l ${meta.bg} p-1`}
                >
                  <Icon size={18} className="text-gray-700" />
                </div>
                <p className="text-[16px] font-bold">{t(`${slug}.label`)}</p>
              </div>
              <h1 className="mb-4 mt-3 text-center text-[30px] font-bold md:text-start md:text-[36px]">
                {t(`${slug}.title`)}
              </h1>
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mb-2 text-center text-[18px] text-[#7D858D] md:text-start"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {slug === "order-management" && (
          <AnimatedSection>
            <div className="mb-20 flex flex-col items-center gap-8 rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_2px_20px_rgba(20,24,28,0.04)] md:flex-row-reverse md:p-12">
              <Image
                src="/service4.svg"
                width={270}
                height={231}
                alt=""
                className="h-[231px] w-[270px] shrink-0 rounded-[32px] object-cover"
              />
              <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                <h2 className="mb-4 text-center text-[26px] font-bold md:text-start md:text-[30px]">
                  {t("order-management.branchAppTitle")}
                </h2>
                <p className="mb-2 text-center text-[18px] text-[#7D858D] md:text-start">
                  {t("order-management.branchAppDesc1")}
                </p>
                <p className="mb-2 text-center text-[18px] text-[#7D858D] md:text-start">
                  {t("order-management.branchAppDesc2")}
                </p>
                <p className="text-center text-[18px] text-[#7D858D] md:text-start">
                  {t("order-management.branchAppDesc3")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {isChannel && (
          <AnimatedSection>
            <div className="mb-20 flex w-full flex-col items-center gap-4 rounded-[28px] bg-[#E7F9F3] p-8 text-center md:p-12">
              <h2 className="text-[24px] font-bold md:text-[30px]">
                {t(`${slug}.howItWorksTitle`)}
              </h2>
              <p className="max-w-2xl text-[16px] text-gray-600 md:text-[18px]">
                {t(`${slug}.howItWorksDesc`)}
              </p>
              {integrationsHref && (
                <Link
                  href={`/${locale}/integrations${integrationsHref}`}
                  className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#14181C] px-6 py-3 font-semibold text-[#14181C] transition-all duration-300 hover:bg-[#14181C] hover:text-white"
                >
                  {t("browseIntegrations")}
                  {locale === "ar" ? (
                    <ArrowLeft size={17} />
                  ) : (
                    <ArrowRight size={17} />
                  )}
                </Link>
              )}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <section className="mx-auto my-10 w-full max-w-7xl px-5 md:px-[160px]">
            <div
              className={`flex h-full w-full flex-col items-center justify-between gap-7 rounded-[32px] bg-gradient-to-l ${meta.bg} px-5 py-10 md:flex-row md:gap-0 md:px-10 md:py-10`}
            >
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-2xl font-semibold md:text-start md:text-[28px]">
                  {t(`${slug}.solutionTitle`)}
                </h2>
                <div className="flex flex-col gap-3">
                  {["point1", "point2", "point3"].map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <Image
                        src="/correct-icon.svg"
                        width={22}
                        height={22}
                        alt="correct"
                      />
                      <p className="text-[16px] font-medium">
                        {t(`${slug}.${p}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/${locale}/request-demo`}
                className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
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
        </AnimatedSection>
      </div>
    </div>
  );
}

export default ProductDetailPage;
