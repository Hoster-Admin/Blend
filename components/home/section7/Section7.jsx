// "use client";
// import AnimatedSection from "@/components/AnimatedSection";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// export default function Section7() {
//   const t = useTranslations("HomePage");
//   return (
//     <AnimatedSection>
//       <div className="mx-auto max-w-7xl px-5 md:px-10 ">
//         <div className="flex flex-col items-center gap-5 ">
//           <div className="flex max-w-fit items-center gap-2 rounded-[16px] bg-[#FFE5D1] px-[24px] py-[12px]">
//             <Image src="/link-icon.svg" width={32} height={32} alt="link" />
//             <p className="font-semibold md:text-[20px]">{t("easyTech")}</p>
//           </div>
//           <h2 className="text-center font-bold md:max-w-[800px] md:text-[32px]">
//             {t("easyTechDesc")}
//           </h2>
//         </div>
//         <section className="relative mb-20 mt-5  hidden w-[100%] overflow-hidden rounded-[32px] md:block">
//           {/* <video
//             src="/Desktop.mp4"
//             className="h-full w-[100%] object-cover"
//             autoPlay
//             loop
//             muted={true}
//             playsInline={true}
//             preload="metadata"
//             aria-hidden="true"
//           /> */}
//           <img
//             src="/Desktop.gif"
//             className="h-full w-[100%] object-cover"
//             alt="Desktop Animation"
//           />
//         </section>
//         <section className="relative mb-20 mt-5 block w-[100%] overflow-hidden rounded-[32px] md:hidden">
//           {/* <video">
//           {/* <video
//             src="/Mobile.gif"
//             className="h-full w-[100%] object-cover"
//             autoPlay
//             loop
//             muted={true}
//             playsInline={true}
//             preload="metadata"
//             aria-hidden="true"
//           /> */}
//           <img
//             src="/Mobile.gif"
//             className="h-full w-[100%] object-cover"
//             alt="Mobile Animation"
//           />
//         </section>
//       </div>
//     </AnimatedSection>
//   );
// }
"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Section7() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const column1 = [
    "/integrations/new/1.webp",
    "/integrations/new/2.webp",
    "/integrations/new/3.webp",
    "/integrations/new/4.webp",
    "/integrations/new/5.webp",
  ];
  const column2 = [
    "/integrations/new/6.webp",
    "/integrations/new/7.webp",
    "/integrations/new/8.webp",
    "/integrations/new/9.webp",
    "/integrations/new/10.webp",
  ];
  const column3 = [
    "/integrations/new/11.webp",
    "/integrations/new/12.webp",
    "/integrations/new/13.webp",
    "/integrations/new/14.webp",
    "/integrations/new/15.webp",
  ];

  const renderColumn = (items, duration, reverse = false) => (
    <div
      className="flex flex-col gap-4"
      style={{
        animation: `scrollVertical ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
      }}
    >
      {/* بنكرر الصور كتير عشان ميبقاش فيه فراغ أبداً */}
      {[...items, ...items, ...items, ...items].map((src, i) => (
        <div
          key={i}
          className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full bg-white md:h-[90px] md:w-[90px]"
        >
          <Image src={src} alt="logo" fill className="object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <AnimatedSection>
      {/* دي الـ Keyframes اللي بتحرك الأعمدة */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `,
        }}
      />

      <div className="mx-auto mb-32 max-w-7xl px-5 md:px-10">
        <div
          className={`relative flex h-[500px] flex-col overflow-hidden  rounded-[40px] bg-[#00271A] md:h-[450px] ${isRTL ? "md:flex-row-reverse" : "md:flex-row-reverse"}`}
        >
          {/* الـ Glow الأخضر اللي تحت النص */}
          <div
            className={`pointer-events-none absolute bottom-0 h-[400px] w-[400px] rounded-full bg-[#7FE22B] opacity-10 blur-[100px] start-0`}
          />

          {/* منطقة اللوجوهات */}
          <div
            className="relative flex h-full w-full justify-center gap-4 overflow-hidden md:w-1/3"
            dir="ltr"
          >
            <div className="flex h-full items-start gap-4">
              {renderColumn(column1, 20)}
              {renderColumn(column2, 25, true)}
              {renderColumn(column3, 18)}
            </div>

            {/* الـ Masks اللي بتخلي اللوجوهات تطلع وتدخل من الحواف (الأسود اللي بيدوب) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#00271A] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#00271A] to-transparent" />
          </div>

          {/* منطقة النصوص */}
          <div
            className={`relative z-30 flex flex-1 flex-col justify-center p-8 md:p-16 ${isRTL ? "text-right" : "text-left"} text-white`}
          >
            <h2 className="mb-6 text-3xl font-bold leading-[1.2] md:text-5xl">
              {t("section7.title")}
            </h2>
            <p className="mb-10 max-w-md text-[20px] text-gray-300">
              {t("section7.desc")}
            </p>
            <div>
              <Link
                href={`/${locale}/integrations`}
                className="inline-flex items-center gap-3 text-base rounded-full bg-[#7FE22B] px-10 py-4 font-bold text-[#00271A] transition-all hover:bg-[#E0FBC0]"
              >
                <span> {t("section7.button")}</span>
                <Plus size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
