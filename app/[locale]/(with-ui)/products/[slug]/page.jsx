import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ProductDetailPage from "@/app/containers/ProductDetailPage";
import { ALL_PRODUCT_SLUGS } from "@/lib/productsConfig";

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;

  if (!ALL_PRODUCT_SLUGS.includes(slug)) {
    return {
      title: "Not Found | Blend",
    };
  }

  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("products");
  return {
    title: t(`${slug}.metaTitle`),
    description: t(`${slug}.metaDesc`),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/${slug}`,
    },
  };
}

export default async function Product({ params }) {
  const { slug } = await params;

  if (!ALL_PRODUCT_SLUGS.includes(slug)) {
    notFound();
  }

  return <ProductDetailPage slug={slug} />;
}
