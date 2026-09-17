"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article20() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article20.n1")}</p>
          <p>{t("article20.p1")}</p>
          <p>{t("article20.p2")}</p>
          <p>{t("article20.p3")}</p>
          <p>{t("article20.n2")}</p>
          <p>{t("article20.n3")}</p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-2">
        <AnimatedSection>
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article20.benefits.title")}
          </h2>
          <p>{t("article20.benefits.n1")}</p>
          <p>{t("article20.benefits.n2")}</p>
          <p>{t("article20.benefits.n3")}</p>
          <p>{t("article20.benefits.n4")}</p>
          <p className="mt-4 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
            {t("article20.benefits.n5")}
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h3 className="mt-6 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
              {t("article20.benefit1.title")}
            </h3>
            <p> {t("article20.benefit1.n1")}</p>
            <p> {t("article20.benefit1.n2")}</p>
            <p> {t("article20.benefit1.n3")}</p>
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h3 className="mt-6 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
              {t("article20.benefit2.title")}
            </h3>
            <p> {t("article20.benefit2.n1")}</p>
            <p> {t("article20.benefit2.n2")}</p>

            {/* Image Here */}
            <Image
              src={"/blogs/blog20/Update-Stock.webp"}
              width={400}
              height={300}
              alt="Update Stock"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h3 className="mt-6 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
              {t("article20.benefit3.title")}
            </h3>
            <p> {t("article20.benefit3.n1")}</p>
            <p> {t("article20.benefit3.n2")}</p>

            {/* Image Here */}
            <Image
              src={"/blogs/blog20/Notifications-1.webp"}
              width={600}
              height={300}
              alt="Notifications"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h3 className="mt-6 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
              {t("article20.benefit4.title")}
            </h3>
            <p> {t("article20.benefit4.n1")}</p>
            <p> {t("article20.benefit4.n2")}</p>
            <p> {t("article20.benefit4.n3")}</p>
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h3 className="mt-6 w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
              {t("article20.benefit5.title")}
            </h3>
            <p> {t("article20.benefit5.n1")}</p>
            <p> {t("article20.benefit5.n2")}</p>
            <p> {t("article20.benefit5.n3")}</p>
            {/* Image Here */}
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article20.end.n1")}</p>
          <p className=" w-fit rounded-lg bg-[#88eccc] px-4  py-2 font-semibold">
            {t("article20.end.n2")}
          </p>
          <p>{t("article20.end.n3")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article20;
