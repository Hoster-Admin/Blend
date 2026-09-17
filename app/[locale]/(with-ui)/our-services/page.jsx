import { getLocale, getTranslations } from "next-intl/server";
import OurServicesPage from "@/app/containers/OurServicesPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("ourServicesTitle"),
    description: t("ourServicesDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/our-services`,
    },
  };
}

// Server component that renders the client component
export default function OurServices() {
  return <OurServicesPage />;
}
