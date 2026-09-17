import { getLocale, getTranslations } from "next-intl/server";
import SectorsPage from "@/app/containers/SectorsPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("sectorsTitle"),
    description: t("sectorsDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/sectors`,
    },
  };
}

// Server component that renders the client component
export default function Sectors() {
  return <SectorsPage />;
}
