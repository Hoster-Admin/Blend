"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LatestArticles from "./latestArticles";
import Categories from "./Categories";
import { useTranslations, useLocale } from "next-intl";
function BlogFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="  rounded-t-[40px] bg-[#F3F5F7]  py-10 text-gray-800 ">
      <div className="mx-auto flex  max-w-7xl flex-col items-center justify-between gap-10 px-5 md:flex-row md:px-10">
        <div className=" flex w-full  flex-col items-center justify-center gap-10 ">
          {/* <div className="flex  flex-col items-center justify-center gap-10 md:flex-row">
            <Image
              src="/logo-ar.svg"
              alt={t("brand")}
              width={250}
              height={122}
            />
            <p className="text-center text-[18px] md:w-[40%] md:text-start">
              يساعدك على مواكبة هذا النمو، وتبني تجربة توصيل أسهل، أقرب، وأذكى.
            </p>
          </div> */}
          <div className="flex h-full flex-wrap items-center justify-center gap-6 md:h-[350px]">
            <LatestArticles />
            {/* <Categories /> */}
          </div>

          <div className="flex  gap-2">
            <Image
              src={locale === "ar" ? "/logo-ar.svg" : "/logo-en.svg"}
              alt={t("brand")}
              width={42}
              height={14}
            />
            <p className="text-[12px] font-semibold">{t("rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BlogFooter;
