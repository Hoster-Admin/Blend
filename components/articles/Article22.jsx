"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Article22() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article22.n1")}</p>
          <p>{t("article22.n2")}</p>
          <p>{t("article22.n3")}</p>
          <p>{t("article22.n4")}</p>
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
              {t("article22.ux.title")}
            </h2>
            <p> {t("article22.ux.n1")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point1.title")}
            </h3>
            <p> {t("article22.ux.point1.p1")}</p>
            <p> {t("article22.ux.point1.p2")}</p>
            <p> {t("article22.ux.point1.p3")}</p>
            <p> {t("article22.ux.point1.p4")}</p>
            {/* Image Here */}
            <Image
              src={"/blogs/blog22/History.webp"}
              width={600}
              height={300}
              alt="History"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point2.title")}
            </h3>
            <p> {t("article22.ux.point2.n1")}</p>
            <ul className="my-2 ms-4 list-disc">
              <li>{t("article22.ux.point2.p1")}</li>
              <li>{t("article22.ux.point2.p2")}</li>
              <li>{t("article22.ux.point2.p3")}</li>
            </ul>
            <p> {t("article22.ux.point2.n2")}</p>
            <p> {t("article22.ux.point2.n3")}</p>
            {/* Image Here */}
            <Image
              src={"/blogs/blog22/Menue-Overview.webp"}
              width={600}
              height={300}
              alt="Menue Overview"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point3.title")}
            </h3>
            <p> {t("article22.ux.point3.n1")}</p>
            <p> {t("article22.ux.point3.n2")}</p>
            {/* Image Here */}
            <Image
              src={"/blogs/blog22/1.webp"}
              width={600}
              height={300}
              alt="Integrations"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point4.title")}
            </h3>
            <p> {t("article22.ux.point4.n1")}</p>
            <p> {t("article22.ux.point4.n2")}</p>
            {/* Image Here */}

            <Image
              src={"/blogs/blog22/Notifications-1.webp"}
              width={600}
              height={300}
              alt="Notifications"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point5.title")}
            </h3>
            <p> {t("article22.ux.point5.n1")}</p>
            <p> {t("article22.ux.point5.n2")}</p>
            {/* Image Here */}
            <Image
              src={"/blogs/blog22/Analytics.webp"}
              width={600}
              height={300}
              alt="Analytics"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-1">
            <h3 className="mb-2 w-fit rounded-lg bg-[#88eccc] px-4 py-2 text-lg font-semibold">
              {t("article22.ux.point6.title")}
            </h3>
            <p> {t("article22.ux.point6.n1")}</p>
            <p> {t("article22.ux.point6.n2")}</p>
            {/* Image Here */}
            <Image
              src={"/blogs/blog22/Integrations-6.webp"}
              width={600}
              height={300}
              alt="Integrations"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a]">
            {t("article22.importance.title")}
          </h2>
          <p>{t("article22.importance.n1")}</p>
          <p>
            <strong className="font-semibold">
              {t("article22.importance.p1Bold")}
            </strong>
            {t("article22.importance.p1")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article22.importance.p2Bold")}
            </strong>
            {t("article22.importance.p2")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article22.importance.p3Bold")}
            </strong>
            {t("article22.importance.p3")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article22.importance.p4Bold")}
            </strong>
            {t("article22.importance.p4")}
          </p>
          <p>
            <strong className="font-semibold">
              {t("article22.importance.p5Bold")}
            </strong>
            {t("article22.importance.p5")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-1">
          <p> {t("article22.end.n1")}</p>
          <p> {t("article22.end.n2")}</p>
          <p> {t("article22.end.n3")}</p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article22;
