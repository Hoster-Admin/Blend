import { getLocale, getTranslations } from "next-intl/server";
import IntegrationsPage from "@/app/containers/IntegrationsPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("integrationsTitle"),
    description: t("integrationsDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/integrations`,
    },
  };
}

// Server component that renders the client component
export default function Integrations() {
  return (
    <div className="bg-[#F4F4F4]">
      <IntegrationsPage />
    </div>
  );
}
