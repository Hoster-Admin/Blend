"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article19() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article19.n1")}</p>
          <p>{t("article19.n2")}</p>
          <p>{t("article19.n3")}</p>
          <p>{t("article19.n4")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article19.blend.title")}
          </h2>
          <p>{t("article19.blend.n1")}</p>
          <p>{t("article19.blend.n2")}</p>
          <p>{t("article19.blend.n3")}</p>
          <ul className="ms-4 list-disc space-y-1 marker:text-[#10c48a]">
            <li>
              <span className="font-semibold">
                {t("article19.blend.n4Bold")}
              </span>{" "}
              {t("article19.blend.n4")}
            </li>
            <li>
              <span className="font-semibold">
                {t("article19.blend.n5Bold")}
              </span>{" "}
              {t("article19.blend.n5")}
            </li>
            <li>
              <span className="font-semibold">
                {t("article19.blend.n6Bold")}
              </span>{" "}
              {t("article19.blend.n6")}
            </li>
            <li>
              <span className="font-semibold">
                {t("article19.blend.n7Bold")}
              </span>{" "}
              {t("article19.blend.n7")}
            </li>{" "}
          </ul>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-2">
        <AnimatedSection>
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article19.benefits.title")}
          </h2>
          <p>{t("article19.benefits.n1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="mb-1 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold ">
              {t("article19.benefits.point1.title")}
            </h3>
            <p> {t("article19.benefits.point1.n1")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article19.benefits.point1.l1")}</li>
              <li>{t("article19.benefits.point1.l2")}</li>
              <li>{t("article19.benefits.point1.l3")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="mb-1 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold ">
              {t("article19.benefits.point2.title")}
            </h3>
            <p> {t("article19.benefits.point2.n1")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article19.benefits.point2.l1")}</li>
              <li>{t("article19.benefits.point2.l2")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="mb-1 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold ">
              {t("article19.benefits.point3.title")}
            </h3>
            <p> {t("article19.benefits.point3.n1")}</p>
            <p> {t("article19.benefits.point3.n2")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article19.benefits.point3.l1")}</li>
              <li>{t("article19.benefits.point3.l2")}</li>
              <li>{t("article19.benefits.point3.l3")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="mb-1 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold ">
              {t("article19.benefits.point4.title")}
            </h3>
            <p> {t("article19.benefits.point4.n1")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article19.benefits.point4.l1")}</li>
              <li>{t("article19.benefits.point4.l2")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="mb-1 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold ">
              {t("article19.benefits.point5.title")}
            </h3>
            <p> {t("article19.benefits.point5.n1")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article19.benefits.point5.l1")}</li>
              <li>{t("article19.benefits.point5.l2")}</li>
              <li>{t("article19.benefits.point5.l3")}</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="mt-5 flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article19.importance.title")}
          </h2>
          <p> {t("article19.importance.n1")}</p>
          <p> {t("article19.importance.n2")}</p>
          <p> {t("article19.importance.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="mt-5 flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("article19.advices.title")}
          </h2>
          <p> {t("article19.advices.n1")}</p>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article19.advices.p1Bold")}
            </strong>{" "}
            {t("article19.advices.p1")}
          </p>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article19.advices.p2Bold")}
            </strong>{" "}
            {t("article19.advices.p2")}
          </p>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article19.advices.p3Bold")}
            </strong>{" "}
            {t("article19.advices.p3")}
          </p>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article19.advices.p4Bold")}
            </strong>{" "}
            {t("article19.advices.p4")}
          </p>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article19.advices.p5Bold")}
            </strong>{" "}
            {t("article19.advices.p5")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p className="font-semibold"> {t("article19.end.n1")}</p>
          <p> {t("article19.end.n2")}</p>
          <p> {t("article19.end.n3")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article19;
