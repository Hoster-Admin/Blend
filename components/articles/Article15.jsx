"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article15() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article15.n1")}</p>
          <p>{t("article15.n2")}</p>
          <div className="flex justify-center gap-2 py-2">
            <p>{t("article15.p1")}</p>
            <p>{t("article15.p2")}</p>
            <p>{t("article15.p3")}</p>
          </div>
          <p>{t("article15.n4")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article15.q1.q")}
          </h2>
          <p> {t("article15.q1.a1")} </p>
          <p> {t("article15.q1.a2")} </p>
          <p> {t("article15.q1.a3")} </p>
        </div>
      </AnimatedSection>
      {/* Start Q2 */}
      <div>
        <AnimatedSection>
          <div className="mb-6 flex flex-col gap-4">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
              {t("article15.q2.q")}
            </h2>
            <p> {t("article15.q2.a1")} </p>
            <p className="font-semibold"> {t("article15.q2.n1")} </p>
          </div>
        </AnimatedSection>
        {/* Start features */}
        <div className="flex flex-col gap-6">
          {/* Feature1 */}
          <AnimatedSection>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
                {t("article15.q2.feature1.title")}
              </h3>
              <p> {t("article15.q2.feature1.p1")}</p>
              <p>
                {" "}
                <strong className="font-semibold">
                  {t("article15.q2.feature1.p2Bold")}
                </strong>{" "}
                {t("article15.q2.feature1.p2")}
              </p>
            </div>
          </AnimatedSection>
          {/* Feature1 */}
          {/* Feature2 */}
          <AnimatedSection>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
                {t("article15.q2.feature2.title")}
              </h3>
              <p> {t("article15.q2.feature2.p1")}</p>
              <p>
                {" "}
                <strong className="font-semibold">
                  {t("article15.q2.feature2.p2Bold")}
                </strong>{" "}
                {t("article15.q2.feature2.p2")}
              </p>
            </div>
          </AnimatedSection>
          {/* Feature2 */}
          {/* Feature3 */}
          <AnimatedSection>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
                {t("article15.q2.feature3.title")}
              </h3>
              <p> {t("article15.q2.feature3.p1")}</p>
              <p>
                {" "}
                <strong className="font-semibold">
                  {t("article15.q2.feature3.p2Bold")}
                </strong>{" "}
                {t("article15.q2.feature2.p2")}
              </p>
            </div>
          </AnimatedSection>
          {/* Feature3 */}
          {/* Feature4 */}
          <AnimatedSection>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
                {t("article15.q2.feature4.title")}
              </h3>
              <p> {t("article15.q2.feature4.p1")}</p>
              <p>
                {" "}
                <strong className="font-semibold">
                  {t("article15.q2.feature4.p2Bold")}
                </strong>{" "}
                {t("article15.q2.feature4.p2")}
              </p>
            </div>
          </AnimatedSection>
          {/* Feature4 */}
          {/* Feature5 */}
          <AnimatedSection>
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
                {t("article15.q2.feature5.title")}
              </h3>
              <p> {t("article15.q2.feature5.p1")}</p>
              <p>
                {" "}
                <strong className="font-semibold">
                  {t("article15.q2.feature5.p2Bold")}
                </strong>{" "}
                {t("article15.q2.feature5.p2")}
              </p>
            </div>
          </AnimatedSection>
          {/* Feature5 f */}
        </div>
        {/* End features */}
      </div>
      {/* End Q2 */}
      {/* Start Q3 */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article15.q3.q")}
          </h2>
          <p> {t("article15.q3.a1")} </p>
          <p> {t("article15.q3.a2")} </p>
          <p className="font-semibold"> {t("article15.q3.a3")} </p>
          <ul>
            <li>{t("article15.q3.l1")}</li>
            <li>{t("article15.q3.l2")}</li>
            <li>{t("article15.q3.l3")}</li>
            <li>{t("article15.q3.l4")}</li>
            <li>{t("article15.q3.l5")}</li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {" "}
            <Image
              src={"/blogs/blog15/Integrations-6.webp"}
              width={400}
              height={300}
              alt="Integrations"
            />
            <Image
              src={"/blogs/blog15/Integrations-2.webp"}
              width={400}
              height={300}
              alt="Integrations"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* End Q3 */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#10c48a] ">{t("article15.end.n1")}</p>
          <p>{t("article15.end.n2")}</p>
          <p>{t("article15.end.n3")}</p>
          <p className="w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
            {t("article15.end.n4")}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article15;
