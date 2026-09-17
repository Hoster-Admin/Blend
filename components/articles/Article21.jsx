"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article21() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article21.n1")}</p>
          <p>{t("article21.n2")}</p>
          <p>{t("article21.p1")}</p>
          <p>{t("article21.p2")}</p>
          <p>{t("article21.p3")}</p>
          <p>{t("article21.p4")}</p>
          <p>{t("article21.p5")}</p>
          <p>{t("article21.p6")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold">{t("article21.q1.q")}</h2>
          <p>{t("article21.q1.a1")}</p>
          <p>{t("article21.q1.a2")}</p>
          <p>{t("article21.q1.a3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("article21.tools.title")}
          </h2>
          <p>{t("article21.tools.p1")}</p>
          <p>{t("article21.tools.p2")}</p>
          <p>{t("article21.tools.p3")}</p>
          <p>{t("article21.tools.p4")}</p>
          <p className="font-semibold">{t("article21.tools.p5")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-10">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold text-[#10c48a]">
              {t("article21.editItems.title")}
            </h3>
            <p> {t("article21.editItems.p1")}</p>
            <p> {t("article21.editItems.p2")}</p>
            <p className="mt-5"> {t("article21.editItems.p3")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li>{t("article21.editItems.l1")}</li>
              <li>{t("article21.editItems.l2")}</li>
              <li>{t("article21.editItems.l3")}</li>
              <li>{t("article21.editItems.l4")}</li>
            </ul>
            {/* Image HERE */}
            <Image
              src={"/blogs/blog21/Menue-Change.webp"}
              width={600}
              height={300}
              alt="Menue Status"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold text-[#10c48a]">
              {t("article21.collectItems.title")}
            </h3>
            <p> {t("article21.collectItems.p1")}</p>
            <p>
              {" "}
              <span className="font-semibold">
                {t("article21.collectItems.p2Bold")}
              </span>{" "}
              {t("article21.collectItems.p2")}
            </p>
            <p> {t("article21.collectItems.p3")}</p>
            <p className="mt-5 w-fit rounded-lg bg-[#88eccc] px-4 py-2 font-semibold ">
              {" "}
              {t("article21.collectItems.p4")}
            </p>

            {/* Image HERE */}
            <Image
              src={"/blogs/blog21/Menue-Overview.webp"}
              width={600}
              height={300}
              alt="Menue Overview"
              className="mt-5"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold text-[#10c48a]">
              {t("article21.itemAvail.title")}
            </h3>
            <p> {t("article21.itemAvail.p1")}</p>
            <p> {t("article21.itemAvail.p2")}</p>
            <p> {t("article21.itemAvail.p3")}</p>
            <p className="mt-2 font-semibold"> {t("article21.itemAvail.p4")}</p>
            <ul className="ms-4 list-disc space-y-1">
              <li> {t("article21.itemAvail.l1")}</li>
              <li> {t("article21.itemAvail.l2")}</li>
              <li> {t("article21.itemAvail.l3")}</li>
              <li> {t("article21.itemAvail.l4")}</li>
              <li> {t("article21.itemAvail.l5")}</li>
            </ul>
            {/* Image HERE */}
            {/* Image HERE */}
            <div className="flex flex-col justify-center items-center gap-5">
              <Image
                src={"/blogs/blog21/Update-Stock.webp"}
                width={400}
                height={300}
                alt="Update Stock"
              />
              <Image
                src={"/blogs/blog21/Menue-Change.webp"}
                width={600}
                height={300}
                alt="Menue Change"
                className="mt-5"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold text-[#10c48a]">
              {" "}
              {t("article21.end.n1Bold")}
            </span>
            {t("article21.end.n1")}
          </p>
          <p className="w-fit rounded-lg bg-[#88eccc] px-4 py-2 font-semibold">
            {" "}
            {t("article21.end.n2")}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article21;
