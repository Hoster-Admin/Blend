"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Article5() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col gap-12">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <p className="text-[18px]">{t("article5.n1")}</p>
            <p className="text-[18px]">{t("article5.n2")}</p>
            <p className="text-[18px]">{t("article5.n3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article5.n4.n")}
            </h2>
            <p className="text-[18px]">{t("article5.n4.p1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article5.n5.n")}
            </h2>
            <p className="text-[18px]">{t("article5.n5.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col gap-1 text-[18px]">
              <li>{t("article5.n5.b1")}</li>
              <li>{t("article5.n5.b2")}</li>
              <li>{t("article5.n5.b3")}</li>
              <li>{t("article5.n5.b4")}</li>
            </ul>
            <p className="text-[18px]">{t("article5.n5.p2")}</p>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p3Bold")}{" "}
              </strong>
              {t("article5.n5.p3")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p4Bold")}{" "}
              </strong>
              {t("article5.n5.p4")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p5Bold")}{" "}
              </strong>
              {t("article5.n5.p5")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p6Bold")}{" "}
              </strong>
              {t("article5.n5.p6")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p7Bold")}{" "}
              </strong>
              {t("article5.n5.p7")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p8Bold")}{" "}
              </strong>
              {t("article5.n5.p8")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n5.p9Bold")}{" "}
              </strong>
              {t("article5.n5.p9")}
            </h3>
            {/* Image Here */}
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article5.n6.n")}
            </h2>
            <p className="text-[18px]">{t("article5.n6.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col gap-1 text-[18px]  font-semibold">
              <li>{t("article5.n6.b1")}</li>
              <li>{t("article5.n6.b2")}</li>
              <li>{t("article5.n6.b3")}</li>
              <li>{t("article5.n6.b4")}</li>
              <li>
                {t("article5.n6.b5Bold")}{" "}
                <strong className="font-normal">{t("article5.n6.b5")}</strong>
              </li>
            </ul>
            <p className="my-4 text-[18px]">{t("article5.n6.p2")}</p>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p3Bold")}{" "}
              </strong>
              {t("article5.n6.p3")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p4Bold")}{" "}
              </strong>
              {t("article5.n6.p4")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p5Bold")}{" "}
              </strong>
              {t("article5.n6.p5")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p6Bold")}{" "}
              </strong>
              {t("article5.n6.p6")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p7Bold")}{" "}
              </strong>
              {t("article5.n6.p7")}
            </h3>
            <h3 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n6.p8Bold")}{" "}
              </strong>
              {t("article5.n6.p8")}
            </h3>

            {/* Image Here */}
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article5.n7.n")}
            </h2>
            <p className="text-[18px]">{t("article5.n7.p1")}</p>
            <ul className="ms-4 flex list-disc flex-col gap-1 text-[18px] ">
              <li>{t("article5.n7.b1")}</li>
              <li>{t("article5.n7.b2")}</li>
              <li>{t("article5.n7.b3")}</li>
              <li>{t("article5.n7.b4")}</li>
              <li>{t("article5.n7.b5")}</li>
              <li>{t("article5.n7.b6")}</li>
              <li>{t("article5.n7.b7")}</li>
            </ul>
            <p className=" text-[18px]">{t("article5.n7.p2")}</p>
            {/* Image Here */}
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[25px] font-medium  md:text-[30px]">
              {t("article5.n8.n")}
            </h3>
            <p className="text-[18px]">{t("article5.n8.p1")}</p>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n8.p2Bold")}{" "}
              </strong>
              {t("article5.n8.p2")}
            </h4>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n8.p3Bold")}{" "}
              </strong>
              {t("article5.n8.p3")}
            </h4>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n8.p4Bold")}{" "}
              </strong>
              {t("article5.n8.p4")}
            </h4>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n8.p5Bold")}{" "}
              </strong>
              {t("article5.n8.p5")}
            </h4>
            <h4 className="text-[18px]">
              <strong className="font-semibold">
                🟢 {t("article5.n8.p6Bold")}{" "}
              </strong>
              {t("article5.n8.p6")}
            </h4>

            {/* Image Here */}
            {/* Image Here */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-[30px] font-medium text-[#10c48a] md:text-[35px]">
              {t("article5.n9.n")}
            </h2>
            <p className="text-[18px]">{t("article5.n9.p1")}</p>
            <p className="text-[18px]">{t("article5.n9.p2")}</p>
            <ul className="my-5  flex flex-col gap-3">
              <li className="flex items-start gap-1 font-semibold">
                <Image
                  src="/correct-icon.svg"
                  width={22}
                  height={22}
                  alt="correct"
                />
                <p className="text-[16px] ">
                  {" "}
                  {t("article5.n9.p3Bold")}{" "}
                  <strong className="font-normal">
                    {" "}
                    {t("article5.n9.p3")}
                  </strong>
                </p>
              </li>
              <li className="flex items-start gap-1 text-[16px] font-semibold">
                <Image
                  src="/correct-icon.svg"
                  width={22}
                  height={22}
                  alt="correct"
                />
                <p className="text-[16px] ">
                  {" "}
                  {t("article5.n9.p4Bold")}{" "}
                  <strong className="font-normal">
                    {" "}
                    {t("article5.n9.p4")}
                  </strong>
                </p>
              </li>
              <li className="flex items-start gap-1 text-[16px] font-semibold">
                <Image
                  src="/correct-icon.svg"
                  width={22}
                  height={22}
                  alt="correct"
                />
                <p className="text-[16px] ">
                  {" "}
                  {t("article5.n9.p5Bold")}{" "}
                  <strong className="font-normal">
                    {" "}
                    {t("article5.n9.p5")}
                  </strong>
                </p>
              </li>
              <li className="flex items-start  gap-1  text-[16px] font-semibold">
                <Image
                  src="/correct-icon.svg"
                  width={22}
                  height={22}
                  alt="correct"
                />

                <p className="text-[16px] ">
                  {" "}
                  {t("article5.n9.p6Bold")}{" "}
                  <strong className="font-normal">
                    {" "}
                    {t("article5.n9.p6")}
                  </strong>
                </p>
              </li>
            </ul>

            <p className="text-[18px]">{t("article5.n9.p7")}</p>
          </div>
        </AnimatedSection>
      </div>
      {/* First Section */}
    </>
  );
}

export default Article5;
