"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article23() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article23.n1")}</p>
          <p>{t("article23.n2")}</p>
          <p>{t("article23.n3")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold ">
              {t("article23.enhance.title")}
            </h2>
            <p> {t("article23.enhance.n1")}</p>
            <p className="font-semibold"> {t("article23.enhance.n2")}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article23.enhance.point1.title")}
            </h3>
            <p>
              {" "}
              {t("article23.enhance.point1.p1")}{" "}
              <strong className="font-semibold">
                {t("article23.enhance.point1.p1Bold")}{" "}
              </strong>
              {t("article23.enhance.point1.p12")}{" "}
            </p>
            <p className="font-semibold"> {t("article23.enhance.point1.p3")}</p>

            <ul className="my-4 ms-4 list-disc">
              <li>{t("article23.enhance.point1.l1")}</li>
              <li>{t("article23.enhance.point1.l2")}</li>
              <li>{t("article23.enhance.point1.l3")}</li>
              <li>{t("article23.enhance.point1.l4")}</li>
            </ul>
            <p>{t("article23.enhance.point1.n1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article23.enhance.point2.title")}
            </h3>
            <p> {t("article23.enhance.point2.n1")} </p>
            <p className="font-semibold">
              {" "}
              {t("article23.enhance.point2.n2")}{" "}
            </p>

            <ul className="ms-4 mt-2 list-disc">
              <li>{t("article23.enhance.point2.l1")}</li>
              <li>{t("article23.enhance.point2.l2")}</li>
              <li>{t("article23.enhance.point2.l3")}</li>
              <li>{t("article23.enhance.point2.l4")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg  font-semibold ">
              {t("article23.enhance.point3.title")}
            </h3>
            <p>{t("article23.enhance.point3.n1")} </p>
            <p>{t("article23.enhance.point3.n2")} </p>
            <ul className="ms-4 mt-2 list-disc">
              <li>{t("article23.enhance.point3.l1")}</li>
              <li>{t("article23.enhance.point3.l2")}</li>
              <li>{t("article23.enhance.point3.l3")}</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg  font-semibold ">
              {t("article23.enhance.point4.title")}
            </h3>
            <p>{t("article23.enhance.point4.n1")} </p>

            <ul className="my-2 ms-4 list-disc">
              <li>{t("article23.enhance.point4.l1")}</li>
              <li>{t("article23.enhance.point4.l2")}</li>
              <li>{t("article23.enhance.point4.l3")}</li>
            </ul>
            <p>{t("article23.enhance.point4.n2")} </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg  font-semibold ">
              {t("article23.enhance.point5.title")}
            </h3>
            <p>{t("article23.enhance.point5.n1")} </p>

            <ul className="my-2 ms-4 list-disc">
              <li>{t("article23.enhance.point5.l1")}</li>
              <li>{t("article23.enhance.point5.l2")}</li>
              <li>{t("article23.enhance.point5.l3")}</li>
              <li>{t("article23.enhance.point5.l4")}</li>
            </ul>
            <p>{t("article23.enhance.point5.n2")} </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold ">
              {t("article23.range.title")}
            </h2>
            <p> {t("article23.range.n1")}</p>
            <p> {t("article23.range.n2")}</p>
            <p> {t("article23.range.n3")}</p>
            <p> {t("article23.range.n4")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article23.range.benefits.title")}
            </h3>
            <p>
              <strong className="font-semibold">
                {t("article23.range.benefits.p1Bold")}
              </strong>{" "}
              {t("article23.range.benefits.p1")}
            </p>
            <p>
              <strong className="font-semibold">
                {t("article23.range.benefits.p2Bold")}
              </strong>{" "}
              {t("article23.range.benefits.p2")}
            </p>
            <p>
              <strong className="font-semibold">
                {t("article23.range.benefits.p3Bold")}
              </strong>{" "}
              {t("article23.range.benefits.p3")}
            </p>
            <p>
              <strong className="font-semibold">
                {t("article23.range.benefits.p4Bold")}
              </strong>{" "}
              {t("article23.range.benefits.p4")}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article23.range.challenges.title")}
            </h3>
            <p>
              {t("article23.range.challenges.n1")}{" "}
              <strong className="font-bold">
                {t("article23.range.challenges.n1Bold")}
              </strong>
            </p>
            <ul className="ms-4 list-disc">
              <li> {t("article23.range.challenges.l1")}</li>
              <li> {t("article23.range.challenges.l2")}</li>
              <li> {t("article23.range.challenges.l3")}</li>
            </ul>
            <p> {t("article23.range.challenges.n2")}</p>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold ">
            {t("article23.easy.title")}
          </h2>
          <p> {t("article23.easy.n1")}</p>
          <div className="my-2 flex flex-col gap-1">
            {" "}
            <p> {t("article23.easy.p1")}</p>
            <p> {t("article23.easy.p2")}</p>
            <p> {t("article23.easy.p3")}</p>
          </div>
          <p> {t("article23.easy.n2")}</p>
          <p className=" w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-center  font-semibold">
            {" "}
            {t("article23.easy.n3")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold ">
            {t("article23.importance.title")}
          </h2>
          <p> {t("article23.importance.n1")}</p>
          <p> {t("article23.importance.n2")}</p>
          <p> {t("article23.importance.n3")}</p>
          <div className="mt-2 flex flex-col gap-1">
            <p>
              {" "}
              <strong className="font-semibold">
                {t("article23.importance.p1Bold")}
              </strong>{" "}
              {t("article23.importance.p1")}
            </p>
            <p>
              {" "}
              <strong className="font-semibold">
                {t("article23.importance.p2Bold")}
              </strong>{" "}
              {t("article23.importance.p2")}
            </p>
            <p>
              {" "}
              <strong className="font-semibold">
                {t("article23.importance.p3Bold")}
              </strong>{" "}
              {t("article23.importance.p3")}
            </p>
            <p>
              {" "}
              <strong className="font-semibold">
                {t("article23.importance.p4Bold")}
              </strong>{" "}
              {t("article23.importance.p4")}
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>
            {" "}
            <strong> {t("article23.end.n1Bold")}</strong>{" "}
            {t("article23.end.n1")}
          </p>
          <p> {t("article23.end.n2")}</p>
          <p className="font-semibold"> {t("article23.end.n3")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article23;
