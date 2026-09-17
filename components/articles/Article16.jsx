"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article16() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article16.n1")}</p>
          <p>{t("article16.n2")}</p>
          <p>{t("article16.n3")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-5">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
              {t("article16.n4.title")}
            </h2>
            <p>{t("article16.n4.p1")} </p>
            <p>{t("article16.n4.p2")} </p>
            <p className="font-bold">{t("article16.n4.p3")} </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article16.method1.title")}
            </h3>
            <p> {t("article16.method1.p1")}</p>
            <p> {t("article16.method1.p2")}</p>
            {/* Image here */}
            <p> {t("article16.method1.p3")}</p>
            {/* Image here */}
            {/* Image here */}
            <p> {t("article16.method1.p4")}</p>
            {/* Image here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article16.method2.title")}
            </h3>
            <p> {t("article16.method2.p1")}</p>
            <p> {t("article16.method2.p2")}</p>
            <p> {t("article16.method2.p3")}</p>
            {/* Image here */}
            <p> {t("article16.method2.p4")}</p>
            <ul className="ms-4 flex list-disc flex-col gap-1">
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l1Bold")}
                </strong>
                {t("article16.method2.l1")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l2Bold")}
                </strong>
                {t("article16.method2.l2")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l3Bold")}
                </strong>
                {t("article16.method2.l3")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l4Bold")}
                </strong>
                {t("article16.method2.l4")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l5Bold")}
                </strong>
                {t("article16.method2.l5")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l6Bold")}
                </strong>
                {t("article16.method2.l6")}
              </li>
              <li>
                <strong className="font-semibold">
                  {" "}
                  {t("article16.method2.l7Bold")}
                </strong>
                {t("article16.method2.l7")}
              </li>
            </ul>
            {/* Image here */}
            <p> {t("article16.method2.p5")}</p>
            {/* Image here */}
            <p> {t("article16.method2.p6")}</p>
            {/* Image here */}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <p>{t("article16.end.p1")}</p>
        <p className="my-3 mt-6 w-fit rounded-lg bg-[#88eccc] px-3 py-2  font-semibold">
          {t("article16.end.p2")}
        </p>
        <p className="font-semibold">{t("article16.end.p3")}</p>
      </AnimatedSection>
    </>
  );
}

export default Article16;
