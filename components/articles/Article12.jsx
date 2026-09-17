"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
function Article12() {
  const t = useTranslations("article");
  const locale = useLocale();
  return (
    <>
      {/* Introduction Section */}
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article12.n1")}</p>
          <p>{t("article12.n2")}</p>
          <p>{t("article12.p1")}</p>
          <p>{t("article12.p2")}</p>
          <p>{t("article12.p3")}</p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article12.steps.s1.title")}
          </h2>
          <p>
            {t("article12.steps.s1.n")}{" "}
            <Link
              href={`/${locale}/try-system`}
              target="_blank"
              className="font-semibold underline"
            >
              {t("article12.steps.s1.link")}
            </Link>
          </p>
          <h3>{t("article12.steps.s1.p1")}</h3>
          <h3>{t("article12.steps.s1.p2")}</h3>
          {/* IMAGE HERE */}
          <h3>{t("article12.steps.s1.p3")}</h3>
          {/* IMAGE HERE */}
          <h3>{t("article12.steps.s1.p4")}</h3>
          {/* IMAGE HERE */}
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
            {t("article12.steps.s2.title")}
          </h2>
          <p>{t("article12.steps.s2.n1")} </p>
          <p>{t("article12.steps.s2.n2")} </p>
          {/* IMAGE HERE */}
          <Image
            src={"/blogs/blog12/Sign-In-1.webp"}
            width={700}
            height={300}
            alt="sign in"
            className="mt-5"
          />
        </div>
      </AnimatedSection>
      <div className="flex flex-col gap-8">
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.title")}
            </h2>
            <p>{t("article12.steps.s3.n1")} </p>
            {/* IMAGE HERE */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section1.title")}
            </h3>
            <p>{t("article12.steps.s3.section1.n")} </p>
            <ul className="ms-4 list-disc">
              <li>{t("article12.steps.s3.section1.l1")}</li>
              <li>{t("article12.steps.s3.section1.l2")}</li>
              <li>{t("article12.steps.s3.section1.l3")}</li>
              <li>{t("article12.steps.s3.section1.l4")}</li>
              <li>{t("article12.steps.s3.section1.l5")}</li>
              <li>{t("article12.steps.s3.section1.l6")}</li>
            </ul>
            <p>{t("article12.steps.s3.section1.n2")} </p>
            <p>{t("article12.steps.s3.section1.n3")} </p>
            {/* IMAGE HERE */}
            <Image
              src={"/blogs/blog22/Notifications-1.webp"}
              width={700}
              height={300}
              alt="Notifications"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section2.title")}
            </h3>
            <p>{t("article12.steps.s3.section2.n")} </p>
            <p>{t("article12.steps.s3.section2.n2")} </p>
            <p>{t("article12.steps.s3.section2.n3")} </p>
            {/* IMAGE HERE */}
            <Image
              src={"/blogs/blog12/Menue-Overview-1.webp"}
              width={700}
              height={300}
              alt="Menu Overview"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section3.title")}
            </h3>
            <p>{t("article12.steps.s3.section3.n")} </p>
            <p>{t("article12.steps.s3.section3.n2")} </p>
            <p>{t("article12.steps.s3.section3.n3")} </p>
            {/* IMAGE HERE */}
            <Image
              src={"/blogs/blog12/History.webp"}
              width={700}
              height={300}
              alt="History"
              className="mt-5"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section4.title")}
            </h3>
            <p>{t("article12.steps.s3.section4.n")} </p>
            <p>{t("article12.steps.s3.section4.n2")} </p>
            <ul className="ms-4 list-disc">
              <li>{t("article12.steps.s3.section4.l1")}</li>
              <li>{t("article12.steps.s3.section4.l2")}</li>
              <li>{t("article12.steps.s3.section4.l3")}</li>
              <li>{t("article12.steps.s3.section4.l4")}</li>
            </ul>
            <p>{t("article12.steps.s3.section4.n3")} </p>
            {/* IMAGE HERE */}
            <Image
              src={"/blogs/blog12/1.webp"}
              width={700}
              height={300}
              alt="Integrations"
              className="mt-5"
            />
            <p>{t("article12.steps.s3.section4.n4")} </p>
            {/* IMAGE HERE */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section5.title")}
            </h3>
            <p>{t("article12.steps.s3.section5.n")} </p>
            <p>{t("article12.steps.s3.section5.n2")} </p>
            <ul className="ms-4 list-disc">
              <li>{t("article12.steps.s3.section5.l1")}</li>
              <li>{t("article12.steps.s3.section5.l2")}</li>
              <li>{t("article12.steps.s3.section5.l3")}</li>
              <li>{t("article12.steps.s3.section5.l4")}</li>
              <li>{t("article12.steps.s3.section5.l5")}</li>
              <li>{t("article12.steps.s3.section5.l6")}</li>
              <li>{t("article12.steps.s3.section5.l7")}</li>
              <li>{t("article12.steps.s3.section5.l8")}</li>
            </ul>

            {/* IMAGE HERE */}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-xl font-semibold text-[#10c48a] ">
              {t("article12.steps.s3.section6.title")}
            </h3>
            <p>{t("article12.steps.s3.section6.n")} </p>
            {/* IMAGE HERE */}
            <p>{t("article12.steps.s3.section6.n2")} </p>
            {/* IMAGE HERE */}
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="flex flex-col gap-2">
          <p>{t("article12.end.n1")} </p>
          <p>{t("article12.end.n2")} </p>
          <ul className="ms-4 list-disc">
            <li>{t("article12.end.l1")}</li>
            <li>{t("article12.end.l2")}</li>
            <li>{t("article12.end.l3")}</li>
            <li>{t("article12.end.l4")}</li>
          </ul>
          <p>{t("article12.end.n3")} </p>
          <p>{t("article12.end.n4")} </p>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Article12;
