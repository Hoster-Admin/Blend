import { getLocale, getTranslations } from "next-intl/server";
import PricingPage from "@/app/containers/PricingPage";
// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("pricingTitle"),
    description: t("pricingDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/integrations`,
    },
  };
}
// Server component that renders the client component
export default function Pricing() {
  return <PricingPage />;
}
