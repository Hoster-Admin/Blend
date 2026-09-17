import { getLocale, getTranslations } from "next-intl/server";
import ProductsIndexPage from "@/app/containers/ProductsIndexPage";

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("productsTitle"),
    description: t("productsDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
    },
  };
}

export default function Products() {
  return <ProductsIndexPage />;
}
