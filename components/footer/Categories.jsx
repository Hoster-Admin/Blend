import React from "react";
import { useTranslations } from "next-intl";
function Categories() {
  const t = useTranslations("blog");
  const tags = [
    "F&B",
    "Delivery App",
    "POS",
    "الاصناف",
    "قطاع التجزئة",
    "كوفي",
    "مطاعم",
    "Saudi Arabia",
    "تعلم",
    "ادارة المخزون",
    "بيع وشراء",
    "اجراء استطلاع رأي",
    "تجارة إلكترونية",
  ];
  
  return (
    <div className="flex  h-full  flex-col  gap-5 rounded-[32px] bg-white p-5 md:max-h-[350px] md:max-w-[450px] md:p-10">
      <h1 className="text-center text-2xl font-bold md:text-start">
        {" "}
        {t("tags")}
      </h1>
      <div className="flex flex-wrap justify-center gap-[8px] md:justify-start">
        {tags.map((cat, index) => (
          <div
            key={index}
            className="flex  cursor-pointer rounded-[14px] bg-[#F3F5F7] p-3 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
          >
            <h1 className="text-[14px] font-semibold">{cat}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
