import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function ThankYouPage() {
  const locale = useLocale();
  const t = useTranslations("TrySystem");
  return (
    <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-10">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[27px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] md:h-[160px] md:w-[160px] md:rounded-[50px]">
          <CircleCheck size={70} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-[20px] font-semibold md:text-[34px]">
            {t("loginInfo.formSubmitted")}
          </p>
        </div>
        <Link
          href={`/${locale}/`}
          className="hover:bg-mainColor mt-2 flex h-[40px] cursor-pointer items-center justify-center gap-2 rounded-[32px] border border-[#a8a8a8] px-4 py-[20px] text-[16px] font-normal transition-all duration-300 hover:border-transparent md:h-[50px] md:gap-3 md:px-8"
        >
          <Image
            src="/blog-icon-3.svg"
            width={23}
            height={25}
            alt="system"
            className="w-[20px] md:w-[23px]"
          />
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
