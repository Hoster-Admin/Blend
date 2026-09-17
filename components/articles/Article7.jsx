"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Article7() {
  const t = useTranslations("article.article7");
  const locale = useLocale();

  return (
    <article>
      {/* Header Section */}
      <AnimatedSection>
        <div className="flex flex-col">
          <p className="text-lg leading-relaxed">
            {t("1")} {t("2")} {t("3")}
          </p>
        </div>
      </AnimatedSection>

      {/* Challenges Section */}
      <AnimatedSection>
        <div className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-[#10c48a]">
            {t("n1.n")}
          </h2>
          <p className="mb-4 text-lg">{t("n1.desc")}</p>
          <p className="text-lg">{t("n1.spread.p1")}</p>
        </div>
      </AnimatedSection>

      {/* Multiple Devices Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold">{t("n2.n")}</h3>
          <p className="mb-4 text-lg">{t("n2.desc")}</p>
          <ul className="mb-4 list-disc space-y-2 ps-6 text-lg">
            <li>{t("n2.b1")}</li>
            <li>{t("n2.b2")}</li>
            <li>{t("n2.b3")}</li>
            <li>{t("n2.b4")}</li>
          </ul>
          <div>
            <p className="text-lg font-bold">{t("n2.spread.p1")}</p>
            <p className="text-lg">{t("n2.spread.p2")}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Management Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold">{t("n3.n")}</h3>
          <p className="mb-4 text-lg">{t("n3.desc")}</p>
          <ul className="mb-4 list-disc space-y-2 ps-6 text-lg">
            <li>{t("n3.b1")}</li>
            <li>{t("n3.b2")}</li>
            <li>{t("n3.b3")}</li>
            <li>{t("n3.b4")}</li>
          </ul>
          <div>
            <p className="text-lg font-bold">{t("n3.spread.p1")}</p>
            <p className="text-lg">{t("n3.spread.p2")}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Sales Tracking Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold">{t("n4.n")}</h3>
          <p className="mb-4 text-lg">{t("n4.desc")}</p>
          <ul className="mb-4 list-disc space-y-2 ps-6 text-lg">
            <li>{t("n4.b1")}</li>
            <li>{t("n4.b2")}</li>
            <li>{t("n4.b3")}</li>
            <li>{t("n4.b4")}</li>
          </ul>
          <div>
            <p className="text-lg font-bold">{t("n4.spread.p1")}</p>
            <p className="text-lg">{t("n4.spread.p2")}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Best System Section */}
      <AnimatedSection>
        <div className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-[#10c48a]">
            {t("n5.n")}
          </h2>
          <p className="mb-4 text-lg">{t("n5.desc")}</p>
          <p className="mb-4 text-lg">{t("n5.spread.p1")}</p>
          <p className="text-lg">{t("n5.spread.p2")}</p>
        </div>
      </AnimatedSection>

      {/* Conclusion */}
      <AnimatedSection>
        <div>
          <p className="mb-4 text-lg">
            <strong>{t("end.spread.p1.bold")}</strong>{" "}
            {t("end.spread.p1.regular")}
          </p>
        </div>
        <div className="rounded-lg bg-[#88eccc] p-6">
          <p className="text-lg">
            <strong>{t("end.spread.p2.bold")}</strong>{" "}
            {t("end.spread.p2.regular")}
          </p>
        </div>
      </AnimatedSection>
    </article>
  );
}
