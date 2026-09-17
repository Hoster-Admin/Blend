import { getLocale, getTranslations } from "next-intl/server";
import ThankYouPage from "@/app/containers/ThankYouPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";
  const t = await getTranslations("meta");
  return {
    title: t("thankyouTitle"),
    description: t("thankyouDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/thank-you`,
    },
  };
}

// Server component that renders the client component
export default function ThankYou() {
  return <ThankYouPage />;
}
