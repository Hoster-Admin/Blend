"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
function Article25() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article25.n1")}</p>
          <p>{t("article25.n2")}</p>
          <p>{t("article25.n3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article25.delivery.title")}
          </h2>
          <p> {t("article25.delivery.n1")}</p>
          <div className="mt-2">
            <p className="font-semibold"> {t("article25.delivery.n2")}</p>
            <ul className="my-2 ms-4 list-disc space-y-1">
              <li> {t("article25.delivery.l1")}</li>
              <li> {t("article25.delivery.l2")}</li>
              <li> {t("article25.delivery.l3")}</li>
              <li> {t("article25.delivery.l4")}</li>
              <li> {t("article25.delivery.l5")}</li>
            </ul>
          </div>
          <p>{t("article25.delivery.n3")}</p>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
              {t("article25.sales.title")}
            </h2>
            <p> {t("article25.sales.n1")}</p>
            <p className="font-bold"> {t("article25.sales.n2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article25.sales.p1Bold")}
            </h3>
            <p> {t("article25.sales.p1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article25.sales.p2Bold")}
            </h3>
            <p> {t("article25.sales.p2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article25.sales.p3Bold")}
            </h3>
            <p> {t("article25.sales.p3")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article25.sales.p4Bold")}
            </h3>
            <p> {t("article25.sales.p4")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold ">
              {t("article25.sales.p5Bold")}
            </h3>
            <p> {t("article25.sales.p5")}</p>
          </div>
        </AnimatedSection>
      </div>
      <div className="fle-col flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
              {t("article25.challenges.title")}
            </h2>
            <p> {t("article25.challenges.n1")}</p>
            <p className="font-bold"> {t("article25.challenges.n2")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article25.challenges.point1.title")}
            </h3>
            <p> {t("article25.challenges.point1.p1")}</p>
            <p>
              <strong> {t("article25.challenges.point1.p2Bold")}</strong>{" "}
              {t("article25.challenges.point1.p2")}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article25.challenges.point2.title")}
            </h3>
            <p> {t("article25.challenges.point2.p1")}</p>
            <p>
              <strong> {t("article25.challenges.point2.p2Bold")}</strong>{" "}
              {t("article25.challenges.point2.p2")}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article25.challenges.point3.title")}
            </h3>
            <p> {t("article25.challenges.point3.p1")}</p>
            <p>
              <strong> {t("article25.challenges.point3.p2Bold")}</strong>{" "}
              {t("article25.challenges.point3.p2")}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 text-lg font-semibold">
              {t("article25.challenges.point4.title")}
            </h3>
            <p> {t("article25.challenges.point4.p1")}</p>
            <p>
              <strong> {t("article25.challenges.point4.p2Bold")}</strong>{" "}
              {t("article25.challenges.point4.p2")}
            </p>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article25.strategies.title")}
          </h2>
          <p> {t("article25.strategies.p1")}</p>
          <div className="mt-4 flex flex-col">
            <p className="font-semibold"> {t("article25.strategies.p2")}</p>
            <ul className="ms-4 mt-2 list-disc space-y-1 marker:text-[#10c48a]">
              <li>
                {" "}
                <strong className="font-bold">
                  {t("article25.strategies.l1Bold")}
                </strong>{" "}
                {t("article25.strategies.l1")}
              </li>
              <li>
                {" "}
                <strong className="font-bold">
                  {t("article25.strategies.l2Bold")}
                </strong>{" "}
                {t("article25.strategies.l2")}
              </li>
              <li>
                {" "}
                <strong className="font-bold">
                  {t("article25.strategies.l3Bold")}
                </strong>{" "}
                {t("article25.strategies.l3")}
              </li>
              <li>
                {" "}
                <strong className="font-bold">
                  {t("article25.strategies.l4Bold")}
                </strong>{" "}
                {t("article25.strategies.l4")}
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article25.help.title")}
          </h2>
          <p> {t("article25.help.n1")}</p>
          <p className="font-semibold"> {t("article25.help.n2")}</p>
          <ul className="ms-4 mt-2 list-disc space-y-1 ">
            <li>
              {" "}
              <strong className="font-bold">
                {t("article25.help.l1Bold")}
              </strong>{" "}
              {t("article25.help.l1")}
            </li>
            <li>
              {" "}
              <strong className="font-bold">
                {t("article25.help.l2Bold")}
              </strong>{" "}
              {t("article25.help.l2")}
            </li>
            <li>
              {" "}
              <strong className="font-bold">
                {t("article25.help.l3Bold")}
              </strong>{" "}
              {t("article25.help.l3")}
            </li>
            <li>
              {" "}
              <strong className="font-bold">
                {t("article25.help.l4Bold")}
              </strong>{" "}
              {t("article25.help.l4")}
            </li>
            <li>
              {" "}
              <strong className="font-bold">
                {t("article25.help.l5Bold")}
              </strong>{" "}
              {t("article25.help.l5")}
            </li>
          </ul>
          <p className="mt-2 w-fit rounded-lg bg-[#88eccc]  px-4 py-2  font-semibold ">
            {" "}
            {t("article25.help.n3")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p> {t("article25.end.n1")}</p>
          <p> {t("article25.end.n2")}</p>
          <p className="mt-2 w-fit rounded-lg bg-[#88eccc]  px-4 py-2  font-semibold ">
            {" "}
            {t("article25.end.n3")}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article25;
