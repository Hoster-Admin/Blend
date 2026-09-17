import { getLocale, getTranslations } from "next-intl/server";
import TrySystemPage from "@/app/containers/TrySystemPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("trySystemTitle"),
    description: t("trySystemDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/try-system`,
    },
  };
}

// Server component that renders the client component
export default function TrySystem() {
  return <TrySystemPage />;
}
