// "use client";

// import React, { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import AnimatedSection from "@/components/AnimatedSection";

// import Marquee from "react-fast-marquee";
// import Link from "next/link";

// function Section6() {
//   const t = useTranslations("HomePage");
//   const locale = useLocale();

//   const logos = [
//     "/stores/5.webp",
//     "/stores/3.webp",
//     "/stores/4.webp",
//     "/stores/6.webp",
//     "/stores/17.webp",
//     "/stores/7.webp",
//     "/stores/8.webp",
//     "/stores/10.webp",
//     "/stores/11.webp",
//     "/stores/12.webp",
//     "/stores/13.webp",
//     "/stores/14.webp",
//     "/stores/15.webp",
//     "/stores/16.webp",
//     "/stores/17.webp",
//   ];

//   // Memoized logo rendering
//   const renderedLogos = useMemo(
//     () =>
//       logos.map((src, index) => (
//         <Image
//           key={index}
//           src={src}
//           alt={`store-logo-${index}`}
//           width={100}
//           height={40}
//           loading="lazy"
//           className="mx-6 object-contain"
//         />
//       )),
//     [logos],
//   );

//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint
//     };

//     // Set initial value
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <AnimatedSection>
//       <div className="mx-auto mb-32 max-w-7xl ">
//         <h2 className="mb-10 text-center text-3xl font-bold md:text-[40px]">
//           {t("stores")}
//         </h2>
//         <div dir="ltr">
//           <Marquee
//             gradient={isDesktop}
//             gradientColor={"#F4F4F4"}
//             gradientWidth={200}
//             speed={40}
//             direction="left"
//             className=""
//           >
//             {renderedLogos}
//           </Marquee>
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }

// export default Section6;

"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations, useLocale } from "next-intl";
import { Plus } from "lucide-react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function Section6() {
  const t = useTranslations("HomePage");

  const locale = useLocale();
  const logos = [
    "/stores/new/1.webp",
    "/stores/new/2.webp",
    "/stores/new/3.webp",
    "/stores/new/4.webp",
    "/stores/new/5.webp",
    "/stores/new/6.webp",
    "/stores/new/7.webp",
    "/stores/new/8.webp",
    "/stores/new/9.webp",
    "/stores/new/10.webp",
    "/stores/new/11.webp",
    "/stores/new/12.webp",
    "/stores/new/13.webp",
    "/stores/new/14.webp",
    "/stores/new/15.webp",
    "/stores/new/16.webp",
    "/stores/new/17.webp",
    "/stores/new/18.webp",
    "/stores/new/19.webp",
    "/stores/new/20.webp",
    "/stores/new/21.webp",
    "/stores/new/22.webp",
    "/stores/new/23.webp",
    "/stores/new/24.webp",
    "/stores/new/25.webp",
    "/stores/new/26.webp",
    "/stores/new/27.webp",
    "/stores/new/28.webp",
    "/stores/new/29.webp",
    "/stores/new/30.webp",
  ];

  // تقسيم اللوجوهات لصفين عشان الحركة العكسية
  const firstRow = useMemo(
    () => logos.slice(0, Math.ceil(logos.length / 2)),
    [logos],
  );
  const secondRow = useMemo(
    () => logos.slice(Math.ceil(logos.length / 2)),
    [logos],
  );
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // دالة مساعدة لرسم اللوجوهات لكل صف
  const renderRow = (rowLogos) =>
    rowLogos.map((src, index) => (
      <div
        key={index}
        className="relative mx-2 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full  bg-white md:mx-4 md:h-[120px] md:w-[120px]"
      >
        <div className="relative h-[100%] w-[100%] overflow-hidden ">
          {" "}
          <Image
            src={src}
            alt={`store-logo-${index}`}
            fill
            className="overflow-hidden rounded-full object-contain"
            sizes="(max-width: 768px) 100px, 120px"
          />
        </div>
      </div>
    ));

  return (
    <AnimatedSection>
      <div className="mx-auto mb-24 max-w-7xl px-5 md:mb-32 md:px-10">
        <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white py-14 shadow-[0_2px_20px_rgba(20,24,28,0.04)] md:py-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#14181C] md:text-[40px] ">
            {t("stores")}
          </h2>

          <div dir="ltr" className="flex flex-col gap-4 md:gap-6">
            <Marquee
              gradient={isDesktop}
              gradientColor={"#FFFFFF"}
              gradientWidth={160}
              speed={40}
              direction="left"
            >
              {renderRow(firstRow)}
            </Marquee>

            <Marquee
              gradient={isDesktop}
              gradientColor={"#FFFFFF"}
              gradientWidth={160}
              speed={40}
              direction="right"
            >
              {renderRow(secondRow)}
            </Marquee>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href={`/${locale}/request-demo`}
              className="flex h-[50px] w-[180px] cursor-pointer items-center justify-center rounded-[32px] bg-[#14181C] text-base font-semibold text-white transition-all  duration-300 hover:bg-[#10C48A]"
            >
              {t("requestDemo")}
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Section6;
