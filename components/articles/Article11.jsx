"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article11() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article11.n1")}</p>
          <p>{t("article11.n2")}</p>
          <p>{t("article11.n3")}</p>
          <p>{t("article11.n4")}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article11.q1.q")}
          </h2>
          <p>{t("article11.q1.n1")}</p>
          <p className="font-semibold text-orange-400">
            {t("article11.q1.iN")}:{" "}
            <span className="text-[#10c48a]">{t("article11.q1.iND")}</span>
          </p>
          <p>{t("article11.q1.n2")}</p>
          <p>{t("article11.q1.n3")}</p>
          <p>{t("article11.q1.n4")}</p>
          <p>{t("article11.q1.n5")}</p>
          <p>{t("article11.q1.n6")}</p>
          <p>{t("article11.q1.n7")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-xl font-semibold ">
            {t("article11.n5.n")}
          </h2>
          <p> {t("article11.n5.p1")}</p>
          <p> {t("article11.n5.p2")}</p>
          {/* First Image here */}
          <div className="mt-5 flex items-center gap-3">
            {" "}
            <Image
              src={"/blogs/blog11/Integrations-4.webp"}
              width={400}
              height={300}
              alt="Integrations"
            />
            <Image
              src={"/blogs/blog11/Integrations-5.webp"}
              width={400}
              height={300}
              alt="Integrations"
            />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-xl font-semibold ">
            {t("article11.n6.n")}
          </h2>
          <p> {t("article11.n6.p1")}</p>
          <Image
            src={"/blogs/blog11/Menue-Modifiers.webp"}
            width={600}
            height={300}
            alt="Integrations"
            className="mt-5"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-xl font-semibold ">
            {t("article11.n7.n")}
          </h2>
          <p> {t("article11.n7.p1")}</p>
          {/* First Image here */}
          <Image
            src={"/blogs/blog11/Analytics.webp"}
            width={600}
            height={300}
            alt="Integrations"
            className="mt-5"
          />
          <h3 className="mt-2 text-lg font-semibold text-orange-300">
            {t("article11.n7.t")}
          </h3>
          <ul className="ms-4 list-disc">
            <li> {t("article11.n7.l1")}</li>
            <li> {t("article11.n7.l2")}</li>
            <li> {t("article11.n7.l3")}</li>
            <li> {t("article11.n7.l4")}</li>
            <li> {t("article11.n7.l5")}</li>
            <li> {t("article11.n7.l6")}</li>
          </ul>
          <p> {t("article11.n7.p2")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article11.n8.n")}
          </h2>
          <p>{t("article11.n8.n1")}</p>
          <p>{t("article11.n8.n2")}</p>
          <p>
            <strong className="font-semibold">
              {t("article11.n8.p1Bold")}
            </strong>{" "}
            {t("article11.n8.p1")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article11.n8.p2Bold")}
            </strong>{" "}
            {t("article11.n8.p2")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article11.n8.p3Bold")}
            </strong>{" "}
            {t("article11.n8.p3")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article11.n8.p4Bold")}
            </strong>{" "}
            {t("article11.n8.p4")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article11.n8.p5Bold")}
            </strong>{" "}
            {t("article11.n8.p5")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <h3 className="mb-6 text-2xl font-semibold text-[#10c48a]">
          {t("article11.pQ.pq")}
        </h3>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              {" "}
              {t("article11.pQ.q1.q")}
            </h4>
            <p> {t("article11.pQ.q1.a1")}</p>
            <p> {t("article11.pQ.q1.a2")}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              {" "}
              {t("article11.pQ.q2.q")}
            </h4>
            <p> {t("article11.pQ.q2.a1")}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              {" "}
              {t("article11.pQ.q3.q")}
            </h4>
            <p> {t("article11.pQ.q3.a1")}</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p> {t("article11.end.n1")}</p>
          <p> {t("article11.end.n2")}</p>
          <p> {t("article11.end.n3")}</p>
          <p> {t("article11.end.n4")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article11;
