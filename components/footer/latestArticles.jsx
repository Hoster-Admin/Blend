import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
function LatestArticles() {
  const t = useTranslations("blog");
  const router = useRouter();
  const locale = useLocale();
  const articles = [
    {
      id: 7,
      slug: "blend-system-overcome-challenges-apps-management-restaurant",
      img: "/blogs/small/7.webp",
      title: t("blog7.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
    },
    {
      id: 8,
      slug: "unified-platform-apps-delivery-fast-ordering",
      img: "/blogs/small/8.webp",
      title: t("blog8.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
    },
    {
      id: 9,
      slug: "smart-vs-traditional-order-management-system",
      img: "/blogs/small/9.webp",
      title: t("blog9.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
    },
    {
      id: 10,
      slug: "automation-order-management-improve-delivery-efficiency",
      img: "/blogs/small/10.webp",
      title: t("blog10.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
    },
  ];

  return (
    <div className="flex h-full flex-col gap-5 rounded-[32px] bg-white p-5 md:p-10 ">
      <span className="text-center text-2xl font-bold ">
        {t("latestArticles")}
      </span>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <Link
            href={`/${locale}/blog/${article.id}/${article.slug}`}
            // onClick={() => {
            //   localStorage.setItem("article", JSON.stringify(article));
            //   router.push(`/${locale}/blog/${article.id}`);
            // }}
            key={index}
            className="group flex h-[94px] cursor-pointer  items-center justify-center gap-3 rounded-[14px] bg-[#F3F5F7] p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] md:w-[280px]"
          >
            <Image
              width={85}
              height={62}
              src={article.img}
              alt={article.title}
              className="rounded-[10px]"
            />
            <h2 className=" line-clamp-2 max-w-full text-[13px] group-hover:font-medium">
              {article.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;
