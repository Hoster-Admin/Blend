"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ORDER_CHANNEL_SLUGS,
  OPERATIONS_SLUGS,
  PRODUCT_META,
} from "@/lib/productsConfig";

function ProductCard({ slug }) {
  const t = useTranslations("products");
  const locale = useLocale();
  const meta = PRODUCT_META[slug];
  const Icon = meta.icon;

  return (
    <Link
      href={`/${locale}/products/${slug}`}
      className="group flex flex-col gap-4 rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_2px_20px_rgba(20,24,28,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(20,24,28,0.08)]"
    >
      <div
        className={`flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-gradient-to-l ${meta.bg}`}
      >
        <Icon size={22} className="text-gray-700" />
      </div>
      <h3 className="text-[18px] font-semibold text-[#14181C]">
        {t(`${slug}.label`)}
      </h3>
      <p className="text-[15px] leading-relaxed text-gray-600">
        {t(`${slug}.paragraph1`)}
      </p>
    </Link>
  );
}

function ProductGroup({ title, slugs }) {
  return (
    <div className="mb-16">
      <h2 className="mb-6 text-[22px] font-bold text-[#14181C] md:text-[28px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {slugs.map((slug) => (
          <ProductCard key={slug} slug={slug} />
        ))}
      </div>
    </div>
  );
}

function ProductsIndexPage() {
  const t = useTranslations("products");

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
      <AnimatedSection>
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-[32px] font-bold text-[#14181C] md:text-[48px]">
            {t("indexTitle")}
          </h1>
          <p className="max-w-2xl text-[16px] text-gray-600 md:text-[18px]">
            {t("indexDesc")}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <ProductGroup
          title={t("orderChannelsGroupLabel")}
          slugs={ORDER_CHANNEL_SLUGS}
        />
      </AnimatedSection>

      <AnimatedSection>
        <ProductGroup title={t("operationsGroupLabel")} slugs={OPERATIONS_SLUGS} />
      </AnimatedSection>
    </div>
  );
}

export default ProductsIndexPage;
