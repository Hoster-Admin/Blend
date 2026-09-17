import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, CalendarDays, BadgePercent, Dice1 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function Section8() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const pkg = {
    type: t("yearly"),
    discountPre: 50,
    price: 330,
    discountPrice: 330,
    url: "#",
    color: "#34F3B6",
    checkColor: "#10C48A",
    from: "from-[#34F3B6]",
    to: "to-[#C6FFED]",
  };

  const icons = [
    {
      title: t("twoFreeCloudBrands"),
      from: "from-[#34F3B6]",
      to: "to-[#C6FFED]",
      img: "/pkg-icon-1.svg",
    },
    {
      title: t("unlimitedOrders"),
      from: "from-[#71B5FE]",
      to: "to-[#CDE7FF]",
      img: "/pkg-icon-2.svg",
    },
    {
      title: t("noHiddenFees"),
      from: "from-[#FFD25E]",
      to: "to-[#FFF9D9]",
      img: "/pkg-icon-3.svg",
    },
    {
      title: t("unlimitedIntegrations"),
      from: "from-[#FF6C02]",
      to: "to-[#FFE5D1]",
      img: "/pkg-icon-4.svg",
    },
  ];

  return (
    <AnimatedSection>
      <div id="packages" className="mx-auto max-w-7xl px-5  md:px-10">
        {" "}
        <div className=" mb-32  flex flex-col items-center justify-center gap-10  rounded-[40px] bg-[#F3F5F7] px-5 py-10 md:px-10 ">
          <h2 className="text-4xl font-semibold md:text-[48px] ">
            {t("packages")}
          </h2>

          <div className="gap-15  flex w-full flex-col  flex-wrap items-center justify-between rounded-[32px] bg-white px-5 py-10  md:flex-row md:gap-[124px] md:px-10  md:py-20 ">
            {/* Section1 */}
            <div className="flex w-full  flex-1 flex-col items-center justify-center gap-10 md:items-start md:gap-4">
              <div className="flex">
                <div
                  className={`flex gap-1 rounded-[12px] p-2 px-4 font-bold`}
                  style={{ backgroundColor: pkg.color }}
                >
                  <CalendarDays />
                  {pkg.type}
                </div>
                {/* <div
                className={`flex items-center gap-1 rounded-[12px] border p-2 font-bold`}
                style={{ borderColor: pkg.color }}
              >
                {pkg.discountPre}%
                <BadgePercent />
              </div> */}
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-7xl font-bold md:text-[75px]">
                      {pkg.discountPrice}
                    </span>
                    <div className="flex items-center gap-1 text-lg font-bold md:text-xl lg:text-[20px]">
                      {locale === "ar" && (
                        <Image
                          src="/ryal.svg"
                          width={24}
                          height={26}
                          alt="SAR"
                          className="md:h-[36px] md:w-[33px]"
                        />
                      )}
                      <div className="flex flex-col">
                        <span> {locale === "en" && "SAR"}</span>
                        <span
                          className={`${locale === "en" ? "text-sm md:text-lg" : ""}`}
                        >
                          {" "}
                          {t("monthlyPerBranch")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-2">
                <span className="text-[48px] font-bold text-gray-300 line-through">
                  {pkg.price}
                </span>
                <span className="flex items-center gap-1  text-[20px] font-bold text-gray-300">
                  {locale === "ar" && (
                    <Image src="/ryal2.svg" width={32} height={35} alt="SAR" />
                  )}
                  {t("monthly")}
                </span>
              </div> */}
              </div>
            </div>
            {/* Section1 */}
            {/* Section2 */}
            <div className="flex  flex-col gap-[13px]">
              {icons.map((icon, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-[8px]   bg-gradient-to-l transition-all duration-300 ${icon.from} ${icon.to}`}
                  >
                    {" "}
                    <Image
                      src={icon.img}
                      width={18}
                      height={18}
                      alt={icon.title}
                    />
                  </div>
                  <p className="text-[16px]">{icon.title}</p>
                </div>
              ))}
            </div>
            {/* Section2 */}
            {/* Section3 */}

            <Link
              href={`/${locale}/request-demo`}
              className={` ${locale === "ar" ? "bg-gradient-to-l" : "bg-gradient-to-r"}  ${pkg.from} ${pkg.to} w-full cursor-pointer rounded-[32px] p-2 text-center text-[20px] font-bold transition-all duration-300 hover:scale-105 md:w-[230px] md:p-3`}
            >
              {t("tryNow")}
            </Link>

            {/* Section3 */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Section8;
