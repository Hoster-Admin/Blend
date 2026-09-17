"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article18() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article18.n1")}</p>
          <p>{t("article18.n2")}</p>
          <p>{t("article18.n3")}</p>
          <p className="font-semibold text-[#10c48a]">{t("article18.n4")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article18.theBest.title")}
          </h2>
          <p>{t("article18.theBest.n1")}</p>
          <p>{t("article18.theBest.n2")}</p>
          <p>{t("article18.theBest.n3")}</p>
          <p className="mt-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2">
            <strong className="font-semibold">
              {t("article18.theBest.n4Bold")}
            </strong>
            {t("article18.theBest.n4")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article18.benefits.title")}
          </h2>
          <p>{t("article18.benefits.n1")}</p>
          <p>
            <strong className="font-semibold">
              {t("article18.benefits.p1Bold")}
            </strong>{" "}
            {t("article18.benefits.p1")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.benefits.p2Bold")}
            </strong>{" "}
            {t("article18.benefits.p2")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.benefits.p3Bold")}
            </strong>{" "}
            {t("article18.benefits.p3")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.benefits.p4Bold")}
            </strong>{" "}
            {t("article18.benefits.p4")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.benefits.p5Bold")}
            </strong>{" "}
            {t("article18.benefits.p5")}
          </p>
          <p className="mt-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 font-semibold">
            {t("article18.benefits.n2")}
          </p>
          <p>{t("article18.benefits.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article18.help.title")}
          </h2>
          <p>{t("article18.help.n1")}</p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p1Bold")}
            </strong>{" "}
            {t("article18.help.p1")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p2Bold")}
            </strong>{" "}
            {t("article18.help.p2")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p3Bold")}
            </strong>{" "}
            {t("article18.help.p3")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p4Bold")}
            </strong>{" "}
            {t("article18.help.p4")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p5Bold")}
            </strong>{" "}
            {t("article18.help.p5")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article18.help.p6Bold")}
            </strong>{" "}
            {t("article18.help.p6")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>
            {" "}
            <strong className="font-semibold text-[#10c48a]">
              {t("article18.end.n1Bold")}
            </strong>{" "}
            {t("article18.end.n1")}
          </p>
          <p className="w-fit rounded-lg bg-[#88eccc]  px-4 py-2 font-semibold">
            {" "}
            {t("article18.end.n2")}
          </p>
          <p>{t("article18.end.n3")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article18;
