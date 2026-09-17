"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article14() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article14.n1")}</p>
          <p>{t("article14.n2")}</p>
          <p>{t("article14.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article14.steps.title")}
          </h2>
          <p>{t("article14.steps.p1")}</p>
          <p>{t("article14.steps.p2")}</p>
          <p>{t("article14.steps.p3")}</p>
          <p>{t("article14.steps.p4")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-10">
        <AnimatedSection>
          <div className=" flex flex-col gap-2">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              <p>{t("article14.steps.step1.title")}</p>
            </h3>
            <p>{t("article14.steps.step1.n1")}</p>
            <p>
              <strong className="font-semibold">
                {t("article14.steps.step1.p1Bold")}
              </strong>{" "}
              {t("article14.steps.step1.p1")}
            </p>
            <p>
              <strong className="font-semibold">
                {t("article14.steps.step1.p2Bold")}
              </strong>{" "}
              {t("article14.steps.step1.p2")}
            </p>
            <p>
              <strong className="font-semibold">
                {t("article14.steps.step1.p3Bold")}
              </strong>{" "}
              {t("article14.steps.step1.p3")}
            </p>
            <div>
              <p>
                <strong className="font-semibold">
                  {t("article14.steps.step1.p4Bold")}
                </strong>{" "}
                {t("article14.steps.step1.p4")}
              </p>
              <p> {t("article14.steps.step1.p41")}</p>
              <p> {t("article14.steps.step1.p42")}</p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className=" flex flex-col gap-2">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              <p>{t("article14.steps.step2.title")}</p>
            </h3>
            <p>{t("article14.steps.step2.n1")}</p>
            <p>{t("article14.steps.step2.n2")}</p>
            <p>{t("article14.steps.step2.p1")}</p>
            <p>{t("article14.steps.step2.p2")}</p>
            <p>{t("article14.steps.step2.p3")}</p>
            <p>{t("article14.steps.step2.p4")}</p>
            <p>{t("article14.steps.step2.p5")}</p>
            <p>{t("article14.steps.step2.p6")}</p>
          </div>
        </AnimatedSection>

        <div className=" flex flex-col gap-2 ">
          <AnimatedSection>
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              <p>{t("article14.steps.step3.title")}</p>
            </h3>
            <p>{t("article14.steps.step3.n1")}</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep1.title")}
              </h4>
              <p>
                <strong className="font-semibold">
                  {t("article14.steps.step3.subStep1.p1Bold")}
                </strong>{" "}
                {t("article14.steps.step3.subStep1.p1")}
              </p>
              <p>
                <strong className="font-semibold">
                  {t("article14.steps.step3.subStep1.p2Bold")}
                </strong>{" "}
                {t("article14.steps.step3.subStep1.p2")}
              </p>
            </div>

            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep2.title")}
              </h4>
              <p>{t("article14.steps.step3.subStep2.p1")}</p>
              <p>{t("article14.steps.step3.subStep2.p2")}</p>
            </div>
            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep3.title")}
              </h4>
              <ul className="ms-5 list-disc">
                <li> {t("article14.steps.step3.subStep3.l1")}</li>
                <li> {t("article14.steps.step3.subStep3.l2")}</li>
                <li> {t("article14.steps.step3.subStep3.l3")}</li>
                <li> {t("article14.steps.step3.subStep3.l4")}</li>
              </ul>
            </div>
            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep4.title")}
              </h4>
              <p>{t("article14.steps.step3.subStep4.p1")}</p>
            </div>
            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep5.title")}
              </h4>
              <p>
                <strong className="font-semibold">
                  {t("article14.steps.step3.subStep5.p1Bold")}
                </strong>{" "}
                {t("article14.steps.step3.subStep5.p1")}
              </p>
              <p>
                <strong className="font-semibold">
                  {t("article14.steps.step3.subStep5.p2Bold")}
                </strong>{" "}
                {t("article14.steps.step3.subStep5.p2")}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep6.title")}
              </h4>
              <p>{t("article14.steps.step3.subStep6.p1")}</p>
            </div>
            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep7.title")}
              </h4>
              <p>{t("article14.steps.step3.subStep7.p1")}</p>
            </div>
            {/* END */}
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-2 flex flex-col">
              <h4 className="text-md mb-2 font-semibold text-[#10c48a]  ">
                {t("article14.steps.step3.subStep8.title")}
              </h4>
              <p>{t("article14.steps.step3.subStep8.p1")}</p>
            </div>
            {/* END */}
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className=" flex flex-col gap-2">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-6 py-3 text-lg font-semibold ">
              <p>{t("article14.steps.step4.title")}</p>
            </h3>
            <p>{t("article14.steps.step4.n1")}</p>
            <p>{t("article14.steps.step4.n2")}</p>
            <p>{t("article14.steps.step4.p1")}</p>
            <p>{t("article14.steps.step4.p2")}</p>
            <p>{t("article14.steps.step4.p3")}</p>
            <p>{t("article14.steps.step4.p4")}</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <p>
          <strong className="font-semibold">{t("article14.end.bN")}</strong>{" "}
          {t("article14.end.n")}
        </p>
        <p> {t("article14.end.n2")}</p>
      </AnimatedSection>
    </>
  );
}

export default Article14;
