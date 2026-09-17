"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Article8() {
  const t = useTranslations("article.article8");
  const locale = useLocale();

  return (
    <article>
      {/* Header Section */}
      <AnimatedSection>
        <div className="mb-12">
          <div className="space-y-4 text-lg">
            <p className="text-lg leading-relaxed">{t("header.intro1")}</p>
            <p className="text-lg leading-relaxed">{t("header.intro2")}</p>
            <p className="text-lg leading-relaxed">{t("header.question")}</p>
            <p className="text-lg leading-relaxed">
              <span className=" font-bold text-[#10c48a]">
                {t("header.summary.bold")}
              </span>{" "}
              {t("header.summary.text")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Unified Platform Section */}
      <AnimatedSection>
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">
            {t("unifiedPlatform.title")}
          </h2>
          <p className="text-lg">{t("unifiedPlatform.desc")}</p>
        </div>
      </AnimatedSection>

      {/* Benefits Sections */}
      {t.raw("benefits").map((benefit, index) => (
        <AnimatedSection key={index}>
          <div className="mb-12">
            <h3 className="mb-3 text-xl font-bold text-[#10c48a]">
              {benefit.title}
            </h3>
            <p className="mb-4 text-lg">{benefit.desc}</p>

            <div className="mb-4 rounded-lg bg-[#88eccc] p-4">
              <p className="flex items-start text-lg">
                <span>
                  <span className="font-bold">{benefit.example.prefix}</span>{" "}
                  <span>{benefit.example.text}</span>
                </span>
              </p>
              {benefit.example.additional && (
                <p className="mt-2 text-lg">{benefit.example.additional}</p>
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Sectors Section */}
      <AnimatedSection>
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">{t("sectors.title")}</h2>
          <p className="mb-6 text-lg">{t("sectors.desc")}</p>

          <ul className="space-y-6">
            {t.raw("sectors.items").map((item, index) => (
              <li key={index} className="text-lg">
                <strong>{item.prefix}</strong> {item.text}
              </li>
            ))}
          </ul>

          <div className="my-6">
            <div className="w-fit rounded-lg bg-[#88eccc] px-6 py-3">
              <p className="text-lg font-bold">{t("sectors.highlight")}</p>
            </div>
            <p className="mt-2 text-lg">{t("sectors.cta")}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Image Placeholder */}
      <AnimatedSection>
        <div className="my-12">
          <Image
            src="/blogs/Delivery-Platform-Dashboard.webp"
            width={960}
            height={448}
            alt="Delivery Platform Dashboard"
            className="mx-auto"
          />
        </div>
      </AnimatedSection>

      {/* Conclusion Section */}
      <AnimatedSection>
        <div className="mt-12">
          <p className="mb-4 text-lg leading-relaxed">
            <strong>{t("conclusion.pre")} </strong>
            {t("conclusion.text")}
          </p>
          <div className="mt-4">
            <p className="text-lg leading-relaxed">
              <strong>{t("conclusion.finalCta.prefix")}</strong>{" "}
              {t("conclusion.finalCta.text")}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </article>
  );
}
