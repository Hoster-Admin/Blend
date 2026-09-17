"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LoginHeader from "@/components/header/LoginHeader";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

function InvestorRelationsPage() {
  const t = useTranslations("connect");
  const locale = useLocale();

  return (
    <>
      <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl flex-col items-center justify-center px-5 md:px-10">
        <LoginHeader />
        <div className="mt-[80px] flex max-w-5xl flex-1 flex-col items-center justify-center gap-[60px] py-10 md:min-h-[calc(100vh-150px)]">
          <Image
            src={"/investor.webp"}
            width={800}
            height={300}
            alt={t("investorImageAlt")}
          />
          {/* Second Section */}
          <div className="relative flex flex-col gap-20">
            {/* First Part - 2024 */}
            <div className="relative flex flex-col items-center justify-center gap-10">
              <div className="relative z-10 flex items-center justify-center gap-5 rounded-[16px] bg-[#F3F5F7] px-[24px] py-[5px]">
                <Image
                  src={"/calender.svg"}
                  width={40}
                  height={40}
                  alt={t("calendarImageAlt")}
                />
                <h1 className="text-[30px] font-bold">{t("year2024")}</h1>
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">
                    {t("january")}
                  </h1>
                </div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#E8E8E8] p-[8px]">
                  <Image
                    src="/blog-icon-3.svg"
                    width={23}
                    height={25}
                    alt={t("calendarImageAlt")}
                  />
                </div>
                <p className="md:text-[20px]">{t("companyFoundation")}</p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("march")}</h1>
                </div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#E8E8E8] p-[8px]">
                  <Image
                    src="/money.svg"
                    width={25}
                    height={25}
                    alt={t("moneyImageAlt")}
                  />
                </div>
                <p className="text-center md:text-[20px]">
                  {t("investmentRoundClosure")}
                </p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex flex-wrap items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("april")}</h1>
                </div>
                <Image
                  src="/ntdp.webp"
                  width={130}
                  height={31}
                  alt={t("ntdpImageAlt")}
                />
                <p className="md:text-[20px]">{t("ntdpGraduation")}</p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("may")}</h1>
                </div>
                <Image
                  src="/msk.webp"
                  width={120}
                  height={58}
                  alt={t("mskImageAlt")}
                />
                <p className="md:text-[20px]">{t("mskGraduation")}</p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("june")}</h1>
                </div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#E8E8E8] p-[8px]">
                  <Image
                    src="/rocket2.svg"
                    width={25}
                    height={25}
                    alt={t("rocketImageAlt")}
                  />
                </div>
                <p className="md:text-[20px]">{t("productLaunch")}</p>
              </div>
            </div>

            {/* Main connecting line between years */}

            {/* Second Part - 2025 */}
            <div className="relative flex flex-col items-center justify-center gap-10">
              <div className="relative z-10 flex items-center justify-center gap-5 rounded-[16px] bg-[#F3F5F7] px-[24px] py-[5px]">
                <Image
                  src={"/calender.svg"}
                  width={40}
                  height={40}
                  alt={t("calendarImageAlt")}
                />
                <h1 className="font-bold md:text-[30px]">{t("year2025")}</h1>
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("march")}</h1>
                </div>
                <div className="flex h-[40px] items-center justify-center gap-2 rounded-[8px] border border-[#E8E8E8] p-[8px] px-[12px]">
                  <Image
                    src="/ksa-icon.svg"
                    width={24}
                    height={25}
                    alt={t("ksaImageAlt")}
                  />
                  <Image
                    src="/integration-icon.svg"
                    width={24}
                    height={25}
                    alt={t("integrationImageAlt")}
                  />
                </div>
                <p className="text-center md:text-[20px]">
                  {t("saudiIntegration")}
                </p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("may")}</h1>
                </div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#E8E8E8] p-[8px]">
                  <Image
                    src="/branch2-icon.svg"
                    width={25}
                    height={25}
                    alt={t("branchImageAlt")}
                  />
                </div>
                <p className="text-center md:text-[20px]">
                  {t("thousandBranches")}
                </p>
                {/* Connecting line and circle */}
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-[16px] border border-[#E8E8E8] px-[10px] py-[10px] md:w-fit md:flex-row">
                <div className="flex items-center justify-center rounded-[32px] bg-[#F3F5F7] px-[30px] py-[5px]">
                  <h1 className="font-semibold md:text-[20px]">{t("june")}</h1>
                </div>
                <div className="flex h-[40px] items-center justify-center gap-2 rounded-[8px] border border-[#E8E8E8] p-[8px] px-[12px]">
                  <Image
                    src="/bahrain.svg"
                    width={24}
                    height={25}
                    alt={t("bahrainImageAlt")}
                  />
                  <Image
                    src="/kuwait.svg"
                    width={24}
                    height={25}
                    alt={t("kuwaitImageAlt")}
                  />
                  <Image
                    src="/integration-icon.svg"
                    width={24}
                    height={25}
                    alt={t("integrationImageAlt")}
                  />
                </div>
                <p className="text-center md:text-[20px]">
                  {t("bahrainKuwaitIntegration")}
                </p>
                <div className="absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 transform flex-col items-center">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                  <div className="h-[35px] w-[1px] bg-[#E8E8E8]"></div>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#E8E8E8]"></div>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-[16px] bg-[#F3F5F7] px-[17px] py-[17px]">
                <Image
                  src="/blog-icon-3.svg"
                  width={40}
                  height={40}
                  alt={t("calendarImageAlt")}
                />
              </div>
            </div>
          </div>

          <div className="mb-30 mt-10 flex flex-col gap-6">
            <Link
              target="_blank"
              href={`/${locale}/investor-relations/registration`}
              className="flex items-center justify-center rounded-[32px] bg-black px-10 py-3 font-medium text-white transition-all duration-300 hover:scale-105 md:text-[18px]"
            >
              {t("registerInvestmentInterest")}
            </Link>
            <Link
              target="_blank"
              href={`https://wa.me/+966539170068`}
              // href={"https://www.crunchbase.com/organization/blend-22ee"}
              className="flex items-center justify-center gap-1 rounded-[32px] border border-[#14181C] px-5 py-3 font-medium transition-all duration-300 hover:scale-105 md:text-[18px]"
            >
              {/* {t("crunchbase")} */}

              {locale === "ar" ? "واتساب" : "Whatsapp"}
              <Image
                src={"/social-whats.svg"}
                width={30}
                height={30}
                alt="Whatsapp"
              />
            </Link>
            <Link
              target="_blank"
              href={"/ملف استثماري بلند.pdf"}
              className="flex items-center justify-center rounded-[32px] border border-[#14181C] px-5 py-3 font-medium transition-all duration-300 hover:scale-105 md:text-[18px]"
            >
              {t("investmentProfile")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InvestorRelationsPage;
