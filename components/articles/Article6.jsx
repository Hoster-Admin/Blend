"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";

export default function Article6() {
  const t = useTranslations("article.article6");

  return (
    <article>
      {/* Header Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-6">
          {/* <h1 className="text-3xl font-bold">{t("title")}</h1> */}
          <p className="text-lg leading-relaxed">
            {t("1")}
            {t("2")}
            {t("3")}
          </p>
        </div>
      </AnimatedSection>

      {/* Common Mistakes Section */}
      <AnimatedSection>
        <div className="my-8">
          <h2 className="mb-4 text-2xl font-bold text-[#10c48a]">
            {t("n1.n")}
          </h2>
          <p className="mb-4 text-lg">{t("n1.desc")}</p>
          <p className="text-lg">{t("n1.spread.p1")}</p>
          <p className="text-lg">{t("n1.spread.p2")}</p>
        </div>
      </AnimatedSection>

      {/* Tracking and Managing Orders Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n2.n")}
          </h3>
          <p className="mb-4 text-lg">{t("n2.desc")}</p>
          <p className="text-lg">{t("n2.spread.p1")}</p>
          <p className="mb-4 text-lg">{t("n2.spread.p2")}</p>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n2.spread.p3.regular1")}
              <strong>{t("n2.spread.p3.bold")}</strong>
              {t("n2.spread.p3.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Inventory Management Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n3.n")}
          </h3>
          <p className="text-lg">{t("n3.desc")}</p>
          <p className="text-lg">{t("n3.spread.p1")}</p>
          <p className="mb-4 text-lg ">{t("n3.spread.p2")}</p>
          <ul className="mb-4 space-y-2 text-lg">
            <li>{t("n3.b1")}</li>
            <li>{t("n3.b2")}</li>
            <li>{t("n3.b3")}</li>
          </ul>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n3.spread.p3.regular1")}
              <strong>{t("n3.spread.p3.bold")}</strong>
              {t("n3.spread.p3.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Final Delivery Errors Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n4.n")}
          </h3>
          <p className="text-lg">{t("n4.desc")}</p>
          <p className="mb-4 text-lg">{t("n4.spread.p1")}</p>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n4.spread.p2.regular1")}
              <strong>{t("n4.spread.p2.bold")}</strong>
              {t("n4.spread.p2.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Time Management Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n5.n")}
          </h3>
          <p className="text-lg">{t("n5.desc")}</p>
          <p className="mb-4 text-lg">{t("n5.spread.p1")}</p>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n5.spread.p2.regular1")}
              <strong>{t("n5.spread.p2.bold")}</strong>
              {t("n5.spread.p2.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Menu Update Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n6.n")}
          </h3>
          <p className="text-lg">{t("n6.desc")}</p>
          <p className="text-lg">{t("n6.spread.p1")}</p>
          <p className="mb-4 text-lg">{t("n6.spread.p2")}</p>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n6.spread.p3.regular1")}
              <strong>{t("n6.spread.p3.bold")}</strong>
              {t("n6.spread.p3.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Feedback Section */}
      <AnimatedSection>
        <div className="my-8">
          <h3 className="mb-4 text-xl font-semibold text-[#10c48a]">
            {t("n7.n")}
          </h3>
          <p className="text-lg">{t("n7.desc")}</p>
          <p className="mb-4 text-lg">{t("n7.spread.p1")}</p>
          <ul className="mb-4 list-disc space-y-2 ps-6 text-lg">
            <li>{t("n7.b1")}</li>
            <li>{t("n7.b2")}</li>
          </ul>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n7.spread.p2.regular1")}
              <strong>{t("n7.spread.p2.bold")}</strong>
              {t("n7.spread.p2.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Benefits Section */}
      <AnimatedSection>
        <div className="my-8">
          <h2 className="mb-4 text-2xl font-bold">{t("n8.n")}</h2>
          <p className="mb-4 text-lg">{t("n8.desc")}</p>
          <p className="text-lg">{t("n8.spread.p1")}</p>
          <p className="mb-4 text-lg">{t("n8.spread.p2")}</p>
          <div className="rounded-lg bg-[#88eccc] p-4">
            <p className="text-lg">
              {t("n8.spread.p3.regular1")}
              <strong>{t("n8.spread.p3.bold")}</strong>
              {t("n8.spread.p3.regular2")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Conclusion */}
      <AnimatedSection>
        <div>
          <p className="text-lg">
            {t("end.spread.p1.regular1")}
            {t("end.spread.p1.bold")}
            {t("end.spread.p1.regular2")}
          </p>
          <p className="text-lg">{t("end.spread.p2")}</p>
        </div>
      </AnimatedSection>
    </article>
  );
}
