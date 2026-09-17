"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Article2() {
  const t = useTranslations("article");
  const locale = useLocale();

  return (
    <>
      {/* First Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-12">
          <p className="text-[18px]">{t("article2.1")}</p>
          <ul className="flex  flex-col gap-5 md:flex-row md:gap-10">
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article2.correct1")}
            </li>
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article2.correct2")}
            </li>
            <li className="flex items-center gap-1 text-[16px] font-medium">
              <Image
                src="/correct-icon.svg"
                width={25}
                height={25}
                alt="correct"
              />
              {t("article2.correct3")}
            </li>
          </ul>
          <p className="text-[18px]">{t("article2.2")}</p>
        </div>
      </AnimatedSection>
      {/* First Section */}
      {/* Second Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article2.n1.n")}
            </h2>
            <p className="text-[18px]">{t("article2.n1.desc")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article2.n2.n")}
            </h2>
            <p className="text-[18px]">{t("article2.n2.desc")}</p>
            <h3 className="text-[18px]">
              <strong className="font-bold">
                1- {t("article2.n2.p1Bold")}
              </strong>{" "}
              {t("article2.n2.p1")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-bold">
                2- {t("article2.n2.p2Bold")}
              </strong>{" "}
              {t("article2.n2.p2")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-bold">
                3- {t("article2.n2.p3Bold")}
              </strong>{" "}
              {t("article2.n2.p3")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-bold">
                4- {t("article2.n2.p4Bold")}
              </strong>{" "}
              {t("article2.n2.p4")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-bold">
                5- {t("article2.n2.p5Bold")}
              </strong>{" "}
              {t("article2.n2.p5")}
            </h3>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-5">
            <h4 className="rounded-md  bg-[#88eccc] p-4 text-[18px] font-semibold ">
              {t("article2.n3.n")}
            </h4>
            <ul className="flex  flex-col gap-5 md:flex-row md:gap-10">
              <li className="flex items-center gap-1 text-[16px] font-medium">
                <Image
                  src="/correct-icon.svg"
                  width={25}
                  height={25}
                  alt="correct"
                />
                {t("article2.n3.correct1")}
              </li>
              <li className="flex items-center gap-1 text-[16px] font-medium">
                <Image
                  src="/correct-icon.svg"
                  width={25}
                  height={25}
                  alt="correct"
                />
                {t("article2.n3.correct2")}
              </li>
              <li className="flex items-center gap-1 text-[16px] font-medium">
                <Image
                  src="/correct-icon.svg"
                  width={25}
                  height={25}
                  alt="correct"
                />
                {t("article2.n3.correct3")}
              </li>
            </ul>

            <h4 className="rounded-md  bg-[#88eccc] p-4 text-[18px] font-semibold">
              {" "}
              💡{t("article2.n4")}
            </h4>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article2.q1.q")}
            </h2>
            <p className="text-[18px]">{t("article2.q1.desc")}</p>
            <ul className="ms-4 mt-2 flex list-disc flex-col gap-1 text-[18px]">
              <li>
                <strong className="font-bold">{t("article2.q1.b1Bold")}</strong>{" "}
                {t("article2.q1.b1")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b2Bold")}</strong>{" "}
                {t("article2.q1.b2")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b3Bold")}</strong>{" "}
                {t("article2.q1.b3")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b4Bold")}</strong>{" "}
                {t("article2.q1.b4")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b5Bold")}</strong>{" "}
                {t("article2.q1.b5")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b6Bold")}</strong>{" "}
                {t("article2.q1.b6")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b7Bold")}</strong>{" "}
                {t("article2.q1.b7")}
              </li>
              <li>
                <strong className="font-bold">{t("article2.q1.b8Bold")}</strong>{" "}
                {t("article2.q1.b8")}
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
      {/* Second Section */}
      {/* Third Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <h2 className="mb-2 text-[40px] font-medium text-[#10c48a] md:text-[45px]">
            {t("article2.popularQ")}
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          {" "}
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              1) {t("article2.popularQ1.q1")}
            </h3>
            <p className="text-[18px]"> {t("article2.popularQ1.a1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              2) {t("article2.popularQ2.q2")}
            </h3>
            <p className="text-[18px]"> {t("article2.popularQ2.a1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              3) {t("article2.popularQ3.q3")}
            </h3>
            <p className="text-[18px]"> {t("article2.popularQ3.a1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">
              <strong className="font-semibold">
                {" "}
                {t("article2.endBold")}
              </strong>{" "}
              {t("article2.end")}
            </p>
          </div>
        </AnimatedSection>
      </div>
      {/* Third Section */}
    </>
  );
}

export default Article2;
