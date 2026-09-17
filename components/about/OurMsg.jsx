import React from "react";
import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedSection";
function OurMsg() {
  const t = useTranslations("about");
  return (
    <AnimatedSection>
      {" "}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[20px] font-semibold md:text-[30px]">
            {t("ourMsgPage.first")}
          </h1>
          <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
            {t("ourMsgPage.firstDesc")}
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[20px] font-semibold md:text-[30px]">
            {t("ourMsgPage.second")}
          </h1>
          <div className="flex flex-col gap-6 text-justify">
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.secondDesc1")}
            </p>
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.secondDesc2")}
            </p>
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.secondDesc3")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[20px] font-semibold md:text-[30px]">
            {t("ourMsgPage.third")}
          </h1>
          <div className="flex flex-col gap-6 text-justify">
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.thirdDesc1")}
            </p>
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.thirdDesc2")}
            </p>
            <p className=" text-justify text-[14px] text-gray-700 md:text-[18px]">
              {t("ourMsgPage.thirdDesc3")}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default OurMsg;
