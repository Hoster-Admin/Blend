"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article13() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article13.n1")}</p>
          <p>{t("article13.n2")}</p>

          <div className="flex items-center gap-2">
            <p>{t("article13.p1")}</p>
            <p>{t("article13.p2")}</p>
            <p>{t("article13.p3")}</p>
          </div>
          <p>{t("article13.n3")}</p>
          <strong className="font-semibold">{t("article13.n4")}</strong>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold ">
            {t("article13.n5.n")}
          </h2>
          <p>{t("article13.n5.p1")}</p>
          <div className="flex flex-col gap-2 py-5">
            <h3 className="text-lg  font-semibold text-[#10c48a]">
              {t("article13.n5.p2")}
            </h3>
            <ul className="ms-4 list-disc">
              <li> {t("article13.n5.l1")}</li>
              <li> {t("article13.n5.l2")}</li>
              <li> {t("article13.n5.l3")}</li>
            </ul>
          </div>
          <div className="mb-5 flex flex-col gap-2">
            <h3 className="text-lg  font-semibold text-[#10c48a]">
              {t("article13.n5.p3")}
            </h3>
            <ul className="ms-4 list-disc">
              <li> {t("article13.n5.l4")}</li>
              <li> {t("article13.n5.l5")}</li>
              <li> {t("article13.n5.l6")}</li>
            </ul>
          </div>
          <p>{t("article13.n5.p4")}</p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-2">
        <AnimatedSection>
          <h2 className="mb-2 text-2xl font-semibold ">
            {t("article13.n6.n")}
          </h2>
          <p>{t("article13.n6.p1")}</p>
          <p>{t("article13.n6.p2")}</p>
          <p>{t("article13.n6.p3")}</p>
          <p className="font-semibold">{t("article13.n6.p4")}</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col gap-2 py-5">
            <h3 className="text-lg font-semibold ">
              {t("article13.n6.d1.title")}
            </h3>
            <p>{t("article13.n6.d1.p1")}</p>
            <p>{t("article13.n6.d1.p2")}</p>
            <p>{t("article13.n6.d1.p3")}</p>
            <p className="font-semibold">{t("article13.n6.d1.p4")}</p>
          </div>
          {/* Imaga here */}
          <Image
            src={"/blogs/blog13/Integrations-8.webp"}
            width={700}
            height={300}
            alt="Integrations"
            className="mb-5 mt-5"
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold ">
              {t("article13.n6.d2.title")}
            </h3>
            <p>{t("article13.n6.d2.p1")}</p>
            <p>{t("article13.n6.d2.p2")}</p>
            {/* Imaga here */}
            <Image
              src={"/blogs/blog13/Integrations-9.webp"}
              width={700}
              height={300}
              alt="Integrations"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2 py-5">
            <h3 className="text-lg font-semibold ">
              {t("article13.n6.d3.title")}
            </h3>
            <p>{t("article13.n6.d3.p1")}</p>
            <p>{t("article13.n6.d3.p2")}</p>
            <p>{t("article13.n6.d3.ul")}</p>
            <ul className="ms-4 list-disc">
              <li>{t("article13.n6.d3.l1")}</li>
              <li>{t("article13.n6.d3.l2")}</li>
              <li>{t("article13.n6.d3.l3")}</li>
              <li>{t("article13.n6.d3.l4")}</li>
            </ul>
            {/* Imaga here */}
            <Image
              src={"/blogs/blog13/Integrations-6.webp"}
              width={700}
              height={300}
              alt="Integrations"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold ">
              {t("article13.n6.d4.title")}
            </h3>
            <p>{t("article13.n6.d4.p1")}</p>
            <p>{t("article13.n6.d4.p2")}</p>
            <p>{t("article13.n6.d4.p3")}</p>
            <p className="font-semibold">{t("article13.n6.d4.p4")}</p>

            {/* Imaga here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="text-lg font-semibold ">
              {t("article13.n6.d5.title")}
            </h3>
            <p>{t("article13.n6.d5.p1")}</p>
            <p>{t("article13.n6.d5.p2")}</p>
            <p className="font-semibold">{t("article13.n6.d5.p3")}</p>

            {/* Imaga here */}
            <Image
              src={"/blogs/Analytics.webp"}
              width={700}
              height={300}
              alt="Analytics"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="mt-5 flex flex-col gap-2">
          <p>{t("article13.end.p1")}</p>
          <p className="font-semibold">{t("article13.end.p2")}</p>
          <p className="w-fit rounded-lg bg-[#88eccc] px-6 py-3 font-semibold">
            {t("article13.end.p3")}
          </p>
          <p>{t("article13.end.p4")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article13;
