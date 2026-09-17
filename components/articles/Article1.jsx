"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Article1() {
  const t = useTranslations("article");
  const locale = useLocale();

  return (
    <>
      {/* First Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">{t("article1.1")}</p>
            <p className="text-[18px]">{t("article1.2")}</p>
          </div>

          <ul className="flex  flex-col gap-5 md:flex-row md:gap-10">
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article1.correct1")}
            </li>
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article1.correct2")}
            </li>
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article1.correct3")}
            </li>
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article1.correct4")}
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">{t("article1.3")}</p>
            <p className="text-[18px]">{t("article1.4")}</p>
          </div>
        </div>
      </AnimatedSection>
      {/* First Section */}
      {/* Second Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.q1.q")}
            </h2>
            <p className="text-[18px]">{t("article1.q1.a1")}</p>
            <p className="text-[18px]">{t("article1.q1.a2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.q2.q")}
            </h2>
            <p className="text-[18px]">{t("article1.q2.a1")}</p>
            <p className="text-[18px]">{t("article1.q2.a2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.n1.n")}
            </h2>
            <p className="text-[18px]">{t("article1.n1.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col text-[18px]">
              <li>{t("article1.n1.b1")}</li>
              <li>{t("article1.n1.b2")}</li>
              <li>{t("article1.n1.b3")}</li>
              <li>{t("article1.n1.b4")}</li>
              <li>{t("article1.n1.b5")}</li>
              <li>{t("article1.n1.b6")}</li>
              <li>{t("article1.n1.b7")}</li>
            </ul>
            <p className="text-[18px]">{t("article1.n1.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          {" "}
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              1) {t("article1.n2.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n2.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col text-[18px]">
              <li>{t("article1.n2.b1")}</li>
              <li>{t("article1.n2.b2")}</li>
            </ul>
            <p className="text-[18px]">{t("article1.n2.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              2) {t("article1.n3.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n3.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col text-[18px]">
              <li>{t("article1.n3.b1")}</li>
              <li>{t("article1.n3.b2")}</li>
              <li>{t("article1.n3.b3")}</li>
              <li>{t("article1.n3.b4")}</li>
              <li>{t("article1.n3.b5")}</li>
            </ul>
            <p className="text-[18px]">{t("article1.n3.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              3) {t("article1.n4.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n4.p1")}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              4) {t("article1.n5.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n5.p1")}</p>
            <p className="text-[18px]">{t("article1.n5.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          {/* Start Image */}
          <Image
            src="/blogs/Analytics.webp"
            width={500}
            height={350}
            alt="Analytics"
          />
          {/* End Image */}
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              5) {t("article1.n6.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n6.p1")}</p>
            <p className="text-[18px]">{t("article1.n6.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              6) {t("article1.n7.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n7.p1")}</p>
            <p className="text-[18px]">{t("article1.n7.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              7) {t("article1.n8.n")}
            </h3>
            <p className="text-[18px]">{t("article1.n8.p1")}</p>
            <p className="text-[18px]">{t("article1.n8.p2")}</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Second Section */}
      {/* Third Section */}

      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <h2 className="mb-2 text-[40px] font-medium text-[#10c48a] md:text-[45px]">
            {t("article1.popularQ")}
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          {" "}
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.popularQ1.q1")}
            </h3>
            <p className="text-[18px]"> {t("article1.popularQ1.a1")}</p>
            <p className="text-[18px]"> {t("article1.popularQ1.a2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.popularQ2.q2")}
            </h3>
            <p className="text-[18px]"> {t("article1.popularQ2.a1")}</p>
            <p className="text-[18px]"> {t("article1.popularQ2.a2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article1.popularQ3.q3")}
            </h3>
            <p className="text-[18px]"> {t("article1.popularQ3.a1")}</p>
            <p className="text-[18px]"> {t("article1.popularQ3.a2")}</p>
            <p className="text-[18px]"> {t("article1.popularQ3.a3")}</p>
            <p className="text-[18px]"> {t("article1.popularQ3.a4")}</p>
          </div>
        </AnimatedSection>
      </div>
      {/* Third Section */}
    </>
  );
}
