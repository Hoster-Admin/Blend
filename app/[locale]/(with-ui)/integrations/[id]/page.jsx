"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/loader";
import AnimatedSection from "@/components/AnimatedSection";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
function Integration() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const { id } = useParams();
  //   const [card, setCard] = useState(null);

  //   useEffect(() => {
  //     const stored = localStorage.getItem("card");
  //     if (stored) {
  //       setCard(JSON.parse(stored));
  //     }
  //   }, []);

  //   if (!card) {
  //     return (
  //       <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
  //         <Loader />
  //       </div>
  //     );
  //   }

  const card = {
    title: "هانقر استيشن",
    desc: "استفد من مزايا التطبيق في شاشة واحد.",
    cat: "تطبيق توصيل",
    img: "/hanger-station.webp",
  };

  return (
    <>
      <div className=" mb-32 rounded-b-[40px] bg-[#F3F5F7] md:h-[400px]">
        <div className="md:px-30 mx-auto flex  h-full max-w-7xl flex-col-reverse items-center   gap-10 px-5 py-10 md:flex-row md:justify-between  md:py-4">
          <AnimatedSection>
            <div className="flex  flex-col items-center justify-center gap-5 md:items-start">
              <div className="flex items-center gap-2 rounded-[8px] bg-[#CDE7FF] px-[16px] py-[8px]">
                <Truck size={20} />
                <p className="text-[14px] font-semibold">{card.cat}</p>
              </div>
              <h1 className="max-w-sm text-center text-3xl font-bold leading-[1.3] md:text-start  md:text-[36]">
                {card.title}
              </h1>
              <p className="text-[20px]">{card.desc}</p>
              <Link
                href={`/${locale}/try-system`}
                // href={"/"}
                className={`group flex h-full cursor-pointer items-center gap-2 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] px-4  py-3  transition-all duration-300 hover:scale-105   ${locale === "ar" ? "text-[12px]" : "text-[12px]"} font-bold text-[#14181C]`}
              >
                {t("trySystem")}
                {locale === "ar" ? (
                  <Image
                    src="/arrow-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                ) : (
                  <Image
                    src="/arrow-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                  />
                )}
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <Image
              src={card.img}
              width={245}
              height={125}
              alt="Home"
              priority
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="md:px-30 mx-auto  flex  max-w-7xl   flex-col items-center gap-[128px] px-5  py-10 md:py-4">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-20 md:flex-row">
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p className="text-[16px] font-medium md:max-w-[95%]">
                أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن - وادعمه
                بالبيانات لفتح الباب أمام عالم من الامكانيات الجديدة أنتج الطعام
                المناسب بأعلى جودة في أسرع وقت ممكن - وادعمه بالبيانات لفتح
                الباب أمام عالم من الامكانيات الجديدة.أنتج الطعام المناسب بأعلى
                جودة في أسرع وقت ممكن - وادعمه بالبيانات لفتح الباب أمام عالم من
                الامكانيات الجديدة.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[50%]">
              {" "}
              <Image
                src="/sectors-2.webp"
                width={500}
                height={390}
                alt="Rersurant"
                className="w-[500px]"
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex flex-col items-center gap-20 md:flex-row-reverse">
            <div className="flex flex-col gap-7 md:w-[50%]">
              <p className="text-[16px] font-medium md:max-w-[95%]">
                أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن - وادعمه
                بالبيانات لفتح الباب أمام عالم من الامكانيات الجديدة أنتج الطعام
                المناسب بأعلى جودة في أسرع وقت ممكن - وادعمه بالبيانات لفتح
                الباب أمام عالم من الامكانيات الجديدة.أنتج الطعام المناسب بأعلى
                جودة في أسرع وقت ممكن - وادعمه بالبيانات لفتح الباب أمام عالم من
                الامكانيات الجديدة.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/correct-icon.svg"
                    width={25}
                    height={25}
                    alt="correct"
                  />
                  <p className="text-[16px] font-medium">
                    أنتج الطعام المناسب بأعلى جودة في أسرع وقت ممكن
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[50%]">
              {" "}
              <Image
                src="/sectors-2.webp"
                width={500}
                height={390}
                alt="Rersurant"
                className="w-[500px]"
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="w-full">
          <AnimatedSection>
            <div className="mb-[128px] flex w-full flex-col  items-center gap-20 rounded-[32px] bg-gradient-to-l from-[#71B5FE] to-[#CDE7FF] p-8 md:h-[385px] md:flex-row">
              <Image src="/pizza.webp" width={431} height={293} alt="pizza" />
              <div className="flex flex-col gap-5">
                <h1 className=" text-center text-[25px] font-bold md:text-start md:text-[36px]">
                  بلند الحل المناسب لمتجرك
                </h1>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/correct-icon.svg"
                      width={25}
                      height={25}
                      alt="correct"
                    />
                    <p className="text-[16px] font-medium">
                      سهولة استقبال الطلبات ورفع الاصناف من مكان واحد
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/correct-icon.svg"
                      width={25}
                      height={25}
                      alt="correct"
                    />
                    <p className="text-[16px] font-medium">
                      دعم فني باللغة العربية والانجليزية 24/7
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/correct-icon.svg"
                      width={25}
                      height={25}
                      alt="correct"
                    />
                    <p className="text-[16px] font-medium">
                      منتجات اخرى تساعدك في البيع اونلاين
                    </p>
                  </div>
                </div>
                <button className="group flex w-fit  cursor-pointer  items-center gap-2 rounded-[32px] bg-black px-6  py-3 text-white transition-all duration-300 hover:scale-105  hover:bg-[#353535]">
                  {t("trySystem")}
                  {locale === "ar" ? (
                    <ArrowLeft
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  ) : (
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}

export default Integration;
