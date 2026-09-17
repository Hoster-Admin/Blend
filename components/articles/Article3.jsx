"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Article3() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">{t("article3.n1")}</p>
            <p className="text-[18px]">{t("article3.n2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article3.n3.n")}
            </h2>
            <p className="text-[18px]">{t("article3.n3.p1")}</p>
            <p className="text-[18px]">{t("article3.n3.p2")}</p>
            <p className="text-[18px]">{t("article3.n3.p3")}</p>
            <p className="text-[18px]">{t("article3.n3.p4")}</p>
          </div>
        </AnimatedSection>
      </div>
      {/* First Section */}
      {/* Second Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              1) {t("article3.n4.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n4.p1")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n4.p2Bold")}
              </strong>
              {t("article3.n4.p2")}
            </h4>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n4.p3Bold")}
              </strong>
              {t("article3.n4.p3")}
            </h4>
            <p className="text-[18px]">{t("article3.n4.p4")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n4.p5Bold")}
              </strong>
              {t("article3.n4.p5")}
            </h4>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              2) {t("article3.n5.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n5.p1")}</p>
            <p className="text-[18px]">{t("article3.n5.p2")}</p>
            <p className="text-[18px]">{t("article3.n5.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              3) {t("article3.n6.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n6.p1")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n6.p2Bold")}
              </strong>
              {t("article3.n6.p2")}
            </h4>
            <p className="text-[18px] font-bold">
              🧐 {t("article3.n6.p3Bold")}
            </p>

            {/* Start Image */}
            <Image
              src="/blogs/menu-change-item-status.webp"
              width={500}
              height={350}
              alt="Menu"
              className="my-4"
            />
            {/* End Image */}

            <p className="text-[18px]">{t("article3.n6.p4")}</p>
            <p className="text-[18px]">{t("article3.n6.p5")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              4) {t("article3.n7.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n7.p1")}</p>
            <p className="text-[18px]">{t("article3.n7.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              5) {t("article3.n8.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n8.p1")}</p>
            <p className="text-[18px]">{t("article3.n8.p2")}</p>
            <p className="text-[18px]">{t("article3.n8.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              6) {t("article3.n9.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n9.p1")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n9.p2Bold")}
              </strong>
              {t("article3.n9.p2")}
            </h4>
            <p className="text-[18px]">{t("article3.n9.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              7) {t("article3.n10.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n10.p1")}</p>
            <p className="text-[18px]">{t("article3.n10.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              8) {t("article3.n11.n")}
            </h3>
            <p className="text-[18px]">{t("article3.n11.p1")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n11.p2Bold")}
              </strong>
              {t("article3.n11.p2")}
            </h4>
            <p className="text-[18px]">{t("article3.n11.p3")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article3.n11.p4Bold")}
              </strong>
              {t("article3.n11.p4")}
            </h4>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article3.n12.n")}
            </h2>
            <p className="text-[18px]">{t("article3.n12.p1")}</p>
            <p className="text-[18px]">{t("article3.n12.p2")}</p>
            <p className="text-[18px]">{t("article3.n12.p3")}</p>
            <p className="text-[18px]">{t("article3.n12.p4")}</p>
            <p className="text-[18px]">{t("article3.n12.p5")}</p>
            <p className="text-[18px]">{t("article3.n12.p6")}</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Second Section */}
    </>
  );
}

export default Article3;
