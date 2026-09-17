"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article24() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article24.n1")}</p>
          <p>{t("article24.n2")}</p>
          <p>{t("article24.n3")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
              {t("article24.help.title")}
            </h2>
            <p> {t("article24.help.n1")}</p>

            <div className="my-2 flex flex-col gap-1">
              <p> {t("article24.help.p1")}</p>
              <p> {t("article24.help.p2")}</p>
              <p> {t("article24.help.p3")}</p>
              <p> {t("article24.help.p4")}</p>
              <p> {t("article24.help.p5")}</p>
              <p> {t("article24.help.p6")}</p>
            </div>
            <p> {t("article24.help.n2")}</p>
            <p> {t("article24.help.n3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point1.title")}
          </h3>
          <p> {t("article24.help.point1.p1")}</p>
          <p> {t("article24.help.point1.p2")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point2.title")}
          </h3>
          <p> {t("article24.help.point2.p1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point3.title")}
          </h3>
          <p> {t("article24.help.point3.p1")}</p>
          <p> {t("article24.help.point3.p2")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point4.title")}
          </h3>
          <p> {t("article24.help.point4.p1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point5.title")}
          </h3>
          <p> {t("article24.help.point5.p1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <h3 className="mb-2 w-fit gap-1 rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
            {" "}
            {t("article24.help.point6.title")}
          </h3>
          <p> {t("article24.help.point6.p1")}</p>
        </AnimatedSection>
        {/* Image Here */}
        <Image
          src={"/blogs/blog22/Analytics.webp"}
          width={600}
          height={300}
          alt="Analytics"
          className="mt-5"
        />
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article24.importance.title")}
          </h2>
          <p> {t("article24.importance.n1")}</p>
          <p> {t("article24.importance.n2")}</p>
          <p> {t("article24.importance.n3")}</p>
          <p> {t("article24.importance.n4")}</p>
          <p> {t("article24.importance.n5")}</p>
          <ul className="my-2 ms-4 list-disc">
            <li>
              <strong>{t("article24.importance.p1Bold")}</strong>{" "}
              {t("article24.importance.p1")}
            </li>
            <li>
              <strong>{t("article24.importance.p2Bold")}</strong>{" "}
              {t("article24.importance.p2")}
            </li>
          </ul>
          <p className="w-fit rounded-lg bg-[#88eccc] px-4 py-2  text-center font-semibold ">
            {t("article24.importance.n6")}
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-4">
        <AnimatedSection>
          <div className="flex flex-col ">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc]  px-4 py-2 text-lg font-semibold ">
              {t("article24.q1.title")}
            </h3>
            <p> {t("article24.q1.n1")}</p>
            <p className="mb-1"> {t("article24.q1.n2")}</p>
            <p>
              {" "}
              <strong className="font-semibold">
                {" "}
                {t("article24.q1.p1Bold")}
              </strong>{" "}
              {t("article24.q1.p1")}
            </p>
            <p> {t("article24.q1.p1-2")}</p>
            <p> {t("article24.q1.p1-3")}</p>
            <p> {t("article24.q1.p1-4")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article24.q1.p2Bold")}
            </strong>{" "}
            {t("article24.q1.p2")}
          </p>
          <p> {t("article24.q1.p2-1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article24.q1.p3Bold")}
            </strong>{" "}
            {t("article24.q1.p3")}
          </p>
          <p> {t("article24.q1.p3-1")}</p>
          <p> {t("article24.q1.p3-2")}</p>
          <p> {t("article24.q1.p3-3")}</p>
          <p> {t("article24.q1.p3-4")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article24.q1.p4Bold")}
            </strong>{" "}
            {t("article24.q1.p4")}
          </p>
          <p> {t("article24.q1.p4-1")}</p>
          <p> {t("article24.q1.p4-2")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article24.q1.p5Bold")}
            </strong>{" "}
            {t("article24.q1.p5")}
          </p>
          <p> {t("article24.q1.p5-1")}</p>
        </AnimatedSection>
        <AnimatedSection>
          <p>
            {" "}
            <strong className="font-semibold">
              {" "}
              {t("article24.q1.p6Bold")}
            </strong>{" "}
            {t("article24.q1.p6")}
          </p>
          <p> {t("article24.q1.p6-1")}</p>
          <p> {t("article24.q1.p6-2")}</p>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="gap flex flex-col">
          <h2 className="mb-4 text-2xl font-semibold text-[#10c48a]">
            {t("article24.follow.title")}
          </h2>
          <p> {t("article24.follow.n1")}</p>
          <p> {t("article24.follow.n2")}</p>
          <ul className="my-3 ms-4  list-disc space-y-1">
            <li> {t("article24.follow.l1")}</li>
            <li> {t("article24.follow.l2")}</li>
            <li> {t("article24.follow.l3")}</li>
            <li> {t("article24.follow.l4")}</li>
            <li> {t("article24.follow.l5")}</li>
          </ul>
          <p> {t("article24.follow.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <p> {t("article24.end")}</p>
      </AnimatedSection>
    </>
  );
}

export default Article24;
