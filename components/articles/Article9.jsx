"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Article9() {
  const t = useTranslations("article.article9");
  const locale = useLocale();

  return (
    <article>
      {/* Header Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-4 text-lg">
          <p className="text-lg leading-relaxed">{t("header.intro1")}</p>
          <p className="text-lg leading-relaxed">{t("header.intro2")}</p>
          <p className="text-lg leading-relaxed">
            {t("header.intro3.bold")} {t("header.intro3.text")}
          </p>
        </div>
      </AnimatedSection>

      {/* Main Comparison Section */}
      <AnimatedSection>
        <h2 className="my-8 text-2xl font-bold">{t("comparison.title")}</h2>
        <div className="grid gap-6">
          <p className="text-lg leading-relaxed">
            {t("comparison.regular.desc")}
          </p>
          <p className="text-lg leading-relaxed">
            {t("comparison.smart.desc")}
          </p>
          <p className="text-lg leading-relaxed">
            {t("comparison.conclusion")}
          </p>
        </div>
      </AnimatedSection>

      {/* Comparison Table */}
      <AnimatedSection>
        <h3 className="my-6 text-xl font-bold">{t("comparison.tableTitle")}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#88eccc]">
                <th className="border p-4 text-start font-bold">
                  {t("comparison.tableHeaders.feature")}
                </th>
                <th className="border p-4 text-start font-bold">
                  {t("comparison.tableHeaders.regular")}
                </th>
                <th className="border p-4 text-start font-bold">
                  {t("comparison.tableHeaders.smart")}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.raw("comparison.tableRows").map((row, index) => (
                <tr key={index}>
                  <td className="border bg-[#88eccc] p-4 font-bold">
                    {row.feature}
                  </td>
                  <td className="border p-4">{row.regular}</td>
                  <td className="border p-4">{row.smart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* Detailed Comparison Points */}
      {t.raw("detailedPoints").map((point, index) => (
        <AnimatedSection key={index}>
          <div className="my-8">
            <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
              {point.title}
            </h3>
            <ul className="mb-4 list-disc space-y-3 ps-6">
              <li>
                <strong>{t("comparison.regular.title")}:</strong>{" "}
                {point.regular}
              </li>
              <li>
                <strong>{t("comparison.smart.title")}:</strong> {point.smart}
              </li>
            </ul>
            <h4 className="flex items-start text-lg leading-relaxed">
              <span className="me-2">🔶</span>
              <span>
                <strong>{point.example.bold} </strong>
                {point.example.text}
              </span>
            </h4>
          </div>
        </AnimatedSection>
      ))}

      {/* Best System Section */}
      <AnimatedSection>
        <div className="my-10">
          <h3 className="mb-6 text-2xl font-bold">{t("bestSystem.title")}</h3>
          <p className="mb-6 text-lg leading-relaxed">
            {t("bestSystem.content")}
          </p>
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("bestSystem.question")}
          </h3>
          <ul className="mb-6 list-disc space-y-3 ps-6">
            {t.raw("bestSystem.features").map((feature, index) => (
              <li key={index} className="text-lg leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>

          <h4 className="text-lg leading-relaxed">
            {t("bestSystem.expansion")}
          </h4>
        </div>
      </AnimatedSection>

      {/* Conclusion */}
      <AnimatedSection>
        <div className="mt-10">
          <p className="mb-4 text-lg leading-relaxed">
            <strong className="text-[#10c48a]">{t("conclusion.bold")}</strong>{" "}
            {t("conclusion.text")}
          </p>
          <p className="mb-6 text-lg leading-relaxed">{t("conclusion.cta")}</p>
          <div className="w-fit rounded-lg bg-[#88eccc] px-6 py-3 font-bold">
            {t("conclusion.button")}
          </div>
        </div>
      </AnimatedSection>
    </article>
  );
}
