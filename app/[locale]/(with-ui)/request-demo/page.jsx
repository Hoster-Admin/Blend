import { getLocale, getTranslations } from "next-intl/server";
import RequestDemoo from "@/app/containers/RequestDemo";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("trySystemTitle"),
    description: t("trySystemDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/request-demo`,
    },
  };
}

// Server component that renders the client component
export default function RequestDemo() {
  return (
    <div className="bg-[#F4F4F4]">
      <RequestDemoo />
    </div>
  );
}
