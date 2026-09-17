"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article17() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article17.n1")}</p>
          <p>{t("article17.n2")}</p>
          <p>{t("article17.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article17.q1.q")}
          </h2>
          <p>{t("article17.q1.n1")} </p>
          <p>{t("article17.q1.p1")} </p>
          <p>{t("article17.q1.p2")} </p>
          <p>{t("article17.q1.p3")} </p>
          <p>{t("article17.q1.p4")} </p>
          <p>{t("article17.q1.n2")} </p>
          <p className=" w-fit rounded-lg bg-[#88eccc] px-4 py-2  font-semibold">
            {t("article17.q1.n3")}{" "}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article17.benifits.title")}
          </h2>
          <p>{t("article17.benifits.n1")} </p>
          <p>{t("article17.benifits.n2")} </p>
          <p>{t("article17.benifits.n3")} </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p1Bold")}
            </strong>
            {t("article17.benifits.p1")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p2Bold")}
            </strong>
            {t("article17.benifits.p2")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p3Bold")}
            </strong>
            {t("article17.benifits.p3")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p4Bold")}
            </strong>
            {t("article17.benifits.p4")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p5Bold")}
            </strong>
            {t("article17.benifits.p5")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article17.benifits.p6Bold")}
            </strong>
            {t("article17.benifits.p6")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article17.importance.title")}
          </h2>
          <p>{t("article17.importance.n1")} </p>
          <p>{t("article17.importance.n2")} </p>

          <div className="mt-4 flex flex-col gap-0">
            <h3 className="mb-3 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article17.importance.point1.title")}
            </h3>
            <p> {t("article17.importance.point1.n1")}</p>
            <p> {t("article17.importance.point1.n2")}</p>
          </div>
          <div className="mt-4 flex flex-col gap-0">
            <h3 className="mb-3 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article17.importance.point2.title")}
            </h3>
            <p> {t("article17.importance.point2.n1")}</p>
          </div>
          <div className="mt-4 flex flex-col gap-0">
            <h3 className="mb-3 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article17.importance.point3.title")}
            </h3>
            <p> {t("article17.importance.point3.n1")}</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p> {t("article17.end.n1")}</p>
          <p> {t("article17.end.n2")}</p>
          <p className="w-fit rounded-lg bg-[#88eccc]  px-4 py-2 font-semibold">
            {t("article17.end.n3")}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article17;
