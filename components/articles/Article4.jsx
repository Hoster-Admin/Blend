"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Article4() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">{t("article4.n1")}</p>
            <p className="text-[18px]">{t("article4.n2")}</p>
            <p className="text-[18px]">{t("article4.n3")}</p>
            <p className="text-[18px]">{t("article4.n4")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article4.q1.q")}
            </h2>
            <p className="text-[18px]">{t("article4.q1.a1")}</p>
            <p className="text-[18px]">{t("article4.q1.a2")}</p>
            <p className="text-[18px]">{t("article4.q1.a3")}</p>
            <p className="text-[18px]">{t("article4.q1.a4")}</p>
            <p className="text-[18px]">{t("article4.q1.a5")}</p>
            <strong className="text-[18px] font-semibold">
              {t("article4.q1.n1")}
            </strong>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article4.n5.n")}
            </h2>
            <p className="text-[18px]">{t("article4.n5.p1")}</p>
            <p className="text-[18px]">{t("article4.n5.p2")}</p>
            <p className="text-[18px]">{t("article4.n5.p3")}</p>
            <p className="text-[18px]">{t("article4.n5.p4")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              1) {t("article4.n6.n")}
            </h3>
            <p className="text-[18px]">{t("article4.n6.p1")}</p>
            <p className="text-[18px]">{t("article4.n6.p2")}</p>
            <p className="text-[18px]">{t("article4.n6.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              2) {t("article4.n7.n")}
            </h3>
            <p className="text-[18px]">{t("article4.n7.p1")}</p>
            <p className="text-[18px]">{t("article4.n7.p2")}</p>
            <p className="text-[18px]">{t("article4.n7.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              3) {t("article4.n8.n")}
            </h3>
            <p className="text-[18px]">{t("article4.n8.p1")}</p>
            <p className="text-[18px]">{t("article4.n8.p2")}</p>
            <p className="text-[18px]">{t("article4.n8.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              4) {t("article4.n9.n")}
            </h3>
            <p className="text-[18px]">{t("article4.n9.p1")}</p>
            <p className="text-[18px]">{t("article4.n9.p2")}</p>
            <p className="text-[18px]">{t("article4.n9.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              5) {t("article4.n10.n")}
            </h3>
            <p className="text-[18px]">{t("article4.n10.p1")}</p>
            <p className="text-[18px]">{t("article4.n10.p2")}</p>
            <ul className="ms-4 flex list-disc flex-col gap-1 text-[18px]">
              <li>{t("article4.n10.b1")}</li>
              <li>{t("article4.n10.b2")}</li>
              <li>{t("article4.n10.b3")}</li>
            </ul>
            <p className="text-[18px]">{t("article4.n10.p3")}</p>
            <p className="text-[18px]">{t("article4.n10.p4")}</p>
            <p className="text-[18px]">{t("article4.n10.p5")}</p>
            <p className="text-[18px]">{t("article4.n10.p6")}</p>
            <p className="text-[18px]">{t("article4.n10.p7")}</p>
          </div>
        </AnimatedSection>
      </div>
      {/* First Section */}
    </>
  );
}

export default Article4;
