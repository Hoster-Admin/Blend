// app/[locale]/blog/[id]/page.js (your Server Component)

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import ArticleClient from "@/components/articles/ArticleClient";
import Head from "next/head";

async function getArticleData(id, locale) {
  const t = await getTranslations("blog");
  const articlesData = [
    {
      id: 1,
      slug: "importance-system-management-delivery-orders",
      img: "/blogs/large/1.webp",
      title: t("blog1.titleL"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog1MetaTitle"),
      metaDesc: t("blog1MetaDesc"),
    },
    {
      id: 2,
      slug: "best-system-management-orders-delivery-food",
      img: "/blogs/large/2.webp",
      title: t("blog2.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog2MetaTitle"),
      metaDesc: t("blog2MetaDesc"),
    },
    {
      id: 3,
      slug: "how-to-choose-system-management-delivery-orders-restaurant",
      img: "/blogs/large/3.webp",
      title: t("blog3.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog3MetaTitle"),
      metaDesc: t("blog3MetaDesc"),
    },
    {
      id: 4,
      slug: "features-system-management-orders-delivery",
      img: "/blogs/large/4.webp",
      title: t("blog4.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog4MetaTitle"),
      metaDesc: t("blog4MetaDesc"),
    },
    {
      id: 5,
      slug: "reports-performance-apps-delivery-platform-restaurant",
      img: "/blogs/large/5.webp",
      title: t("blog5.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog5MetaTitle"),
      metaDesc: t("blog5MetaDesc"),
    },
    {
      id: 6,
      slug: "common-mistakes-order-management-apps-how-to-avoid",
      img: "/blogs/large/6.webp",
      title: t("blog6.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog6MetaTitle"),
      metaDesc: t("blog6MetaDesc"),
    },
    {
      id: 7,
      slug: "blend-system-overcome-challenges-apps-management-restaurant",
      img: "/blogs/large/7.webp",
      title: t("blog7.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog7MetaTitle"),
      metaDesc: t("blog7MetaDesc"),
    },
    {
      id: 8,
      slug: "unified-platform-apps-delivery-fast-ordering",
      img: "/blogs/large/8.webp",
      title: t("blog8.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog8MetaTitle"),
      metaDesc: t("blog8MetaDesc"),
    },
    {
      id: 9,
      slug: "smart-vs-traditional-order-management-system",
      img: "/blogs/large/9.webp",
      title: t("blog9.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog9MetaTitle"),
      metaDesc: t("blog9MetaDesc"),
    },
    {
      id: 10,
      slug: "automation-order-management-improve-delivery-efficiency",
      img: "/blogs/large/10.webp",
      title: t("blog10.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog10MetaTitle"),
      metaDesc: t("blog10MetaDesc"),
    },
    {
      id: 11,
      slug: "no-pos-needed-blend-order-management-solution",
      img: "/blogs/large/11.webp",
      title: t("blog11.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog11MetaTitle"),
      metaDesc: t("blog11MetaDesc"),
    },
    {
      id: 12,
      slug: "how-to-use-blend-order-management-step-by-step",
      img: "/blogs/large/12.webp",
      title: t("blog12.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog12MetaTitle"),
      metaDesc: t("blog12MetaDesc"),
    },
    {
      id: 13,
      slug: "unified-delivery-platform-how-blend-helps-you",
      img: "/blogs/large/13.webp",
      title: t("blog13.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog13MetaTitle"),
      metaDesc: t("blog13MetaDesc"),
    },
    {
      id: 14,
      slug: "turn-data-reports-into-restaurant-strategy",
      img: "/blogs/large/14.webp",
      title: t("blog14.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog14MetaTitle"),
      metaDesc: t("blog14MetaDesc"),
    },
    {
      id: 15,
      slug: "auto-accept-orders-blend-no-more-delays",
      img: "/blogs/large/15.webp",
      title: t("blog15.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog15MetaTitle"),
      metaDesc: t("blog15MetaDesc"),
    },
    {
      id: 16,
      slug: "update-food-menus-all-apps-blend-click",
      img: "/blogs/large/16.webp",
      title: t("blog16.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog16MetaTitle"),
      metaDesc: t("blog16MetaDesc"),
    },
    {
      id: 17,
      slug: "integration-pos-delivery-apps-blend",
      img: "/blogs/large/17.webp",
      title: t("blog17.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog17MetaTitle"),
      metaDesc: t("blog17MetaDesc"),
    },
    {
      id: 18,
      slug: "best-order-management-system-for-stores",
      img: "/blogs/large/18.webp",
      title: t("blog18.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog18MetaTitle"),
      metaDesc: t("blog18MetaDesc"),
    },
    {
      id: 19,
      slug: "blend-tools-efficient-inventory-management-restaurants",
      img: "/blogs/large/19.webp",
      title: t("blog19.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog19MetaTitle"),
      metaDesc: t("blog19MetaDesc"),
    },
    {
      id: 20,
      slug: "advantages-blend-order-management-stores",
      img: "/blogs/large/20.webp",
      title: t("blog20.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog20MetaTitle"),
      metaDesc: t("blog20MetaDesc"),
    },
    {
      id: 21,
      slug: "efficient-item-management-smart-order-system",
      img: "/blogs/large/21.webp",
      title: t("blog21.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog21MetaTitle"),
      metaDesc: t("blog21MetaDesc"),
    },
    {
      id: 22,
      slug: "how-order-system-enhances-customer-experience",
      img: "/blogs/large/22.webp",
      title: t("blog22.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog22MetaTitle"),
      metaDesc: t("blog22MetaDesc"),
    },
    {
      id: 23,
      slug: "strategies-maximize-food-delivery-benefits",
      img: "/blogs/large/23.webp",
      title: t("blog23.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog23MetaTitle"),
      metaDesc: t("blog23MetaDesc"),
    },
    {
      id: 24,
      slug: "track-sales-restaurants-stores-order-system",
      img: "/blogs/large/24.webp",
      title: t("blog24.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog24MetaTitle"),
      metaDesc: t("blog24MetaDesc"),
    },
    {
      id: 25,
      slug: "external-delivery-service-increase-restaurant-sales",
      img: "/blogs/large/25.webp",
      title: t("blog25.title"),
      tags: ["FinTech2024", "Saudi Arabia"],
      metaTitle: t("blog25MetaTitle"),
      metaDesc: t("blog25MetaDesc"),
    },
  ];
  return articlesData.find((a) => a.id === Number(id));
}

export async function generateMetadata({ params }) {
  // Await params before destructuring
  const awaitedParams = await params;
  const { id, slug, locale } = awaitedParams;

  const matchedArticle = await getArticleData(id, locale);

  if (!matchedArticle) {
    return {
      title: "Article Not Found | Blend",
      description: "The article you are looking for does not exist.",
    };
  }
  const baseUrl = "https://tryblend.net";
  return {
    title: matchedArticle.metaTitle,
    description: matchedArticle.metaDesc,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${matchedArticle.id}/${matchedArticle.slug}`,
    },
    //  Preload the header background image
    openGraph: {
      images: [matchedArticle.img], // for OG previews too
    },
  };
}

export default async function ArticlePage({ params }) {
  // Await params before destructuring here too
  const awaitedParams = await params;
  const { id, slug, locale } = awaitedParams;

  const matchedArticle = await getArticleData(id, locale);

  if (!matchedArticle) {
    notFound();
  }

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={matchedArticle.img}
          as="image"
          type="image/webp"
        />
      </Head>
      <ArticleClient initialArticleData={matchedArticle} />
    </>
  );
}
