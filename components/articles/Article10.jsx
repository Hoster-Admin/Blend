"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Article10() {
  const t = useTranslations("article");
  const locale = useLocale();

  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed">{t("article10.1")}</p>
          <p className="text-lg leading-relaxed">{t("article10.2")}</p>
          <p className="text-lg leading-relaxed">
            <strong>{t("article10.3.bold")}</strong> {t("article10.3.text")}
          </p>
        </div>
      </AnimatedSection>

      {/* Main Content Section */}
      <section>
        <AnimatedSection>
          <div className="flex flex-col gap-8">
            <h1 className="mb-4 text-3xl font-semibold">
              {t("article10.n1.n")}
            </h1>
            <p className="text-lg leading-relaxed">{t("article10.n1.desc")}</p>
            <p className="text-lg leading-relaxed">{t("article10.n1.desc2")}</p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}

        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-semibold">{t("article10.n2.n")}</h2>

          {/* Benefit 1 */}
          <div className="mb-12">
            <h3 className="mb-3 text-xl font-semibold text-[#10c48a]">
              1. {t("article10.n2.points.0.title")}
            </h3>
            <p className="mb-4 text-lg">{t("article10.n2.points.0.desc")}</p>
            <h4 className="mb-3 text-lg font-medium">
              {t("article10.n2.points.0.q")}
            </h4>
            <ul className="mb-6 ms-6 list-disc space-y-3">
              {t
                .raw("article10.n2.points.0.solutions")
                .map((solution, index) => (
                  <li key={index} className="text-lg">
                    {solution}
                  </li>
                ))}
            </ul>
            <p className="text-lg">
              <strong>{t("article10.n2.points.0.result.bold")}</strong>{" "}
              {t("article10.n2.points.0.result.text")}
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="mb-12">
            <h3 className="mb-3 text-xl font-semibold text-[#10c48a]">
              2. {t("article10.n2.points.1.title")}
            </h3>
            <p className="mb-4 text-lg">{t("article10.n2.points.1.desc")}</p>
            <h4 className="mb-3 text-lg font-medium">
              {t("article10.n2.points.1.q")}
            </h4>
            <ul className="mb-6 ms-6 list-disc space-y-3">
              {t
                .raw("article10.n2.points.1.solutions")
                .map((solution, index) => (
                  <li key={index} className="text-lg">
                    {solution}
                  </li>
                ))}
            </ul>
            <p className="text-lg">
              <strong>{t("article10.n2.points.1.result.bold")}</strong>{" "}
              {t("article10.n2.points.1.result.text")}
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="mb-12">
            <h3 className="mb-3 text-xl font-semibold text-[#10c48a]">
              3. {t("article10.n2.points.2.title")}
            </h3>
            <p className="mb-4 text-lg">{t("article10.n2.points.2.desc")}</p>
            <h4 className="mb-3 text-lg font-medium">
              {t("article10.n2.points.2.q")}
            </h4>
            <ul className="mb-6 ms-6 list-disc space-y-3">
              {t
                .raw("article10.n2.points.2.solutions")
                .map((solution, index) => (
                  <li key={index} className="text-lg">
                    {solution}
                  </li>
                ))}
            </ul>
            <p className="text-lg">
              <strong>{t("article10.n2.points.2.result.bold")}</strong>{" "}
              {t("article10.n2.points.2.result.text")}
            </p>
          </div>

          {/* Benefit 4 */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#10c48a]">
              4. {t("article10.n2.points.3.title")}
            </h3>
            <p className="mb-4 text-lg">{t("article10.n2.points.3.desc")}</p>
            <h4 className="mb-3 text-lg font-medium">
              {t("article10.n2.points.3.q")}
            </h4>
            <ul className="mb-6 ms-6 list-disc space-y-3">
              {t
                .raw("article10.n2.points.3.solutions")
                .map((solution, index) => (
                  <li key={index} className="text-lg">
                    {solution}
                  </li>
                ))}
            </ul>
            <p className="text-lg">
              <strong>{t("article10.n2.points.3.result.bold")}</strong>{" "}
              {t("article10.n2.points.3.result.text")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <aside className="rounded-lg bg-[#88eccc] p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">
            {t("article10.cta.title")}
          </h2>
        </aside>
      </AnimatedSection>

      {/* Conclusion Section */}
      <AnimatedSection>
        <footer>
          <p className="text-lg leading-relaxed">
            <strong>{t("article10.end.bold")}</strong> {t("article10.end.text")}
          </p>
        </footer>
      </AnimatedSection>
    </>
  );
}
