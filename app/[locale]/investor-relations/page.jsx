import { getLocale } from "next-intl/server";
import InvestorRelationsPage from "@/app/containers/InvestorRelationsPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";

  return {
    title: "Investor Relations",
    description: "Investor Relations",
    alternates: {
      canonical: `${baseUrl}/${locale}/investor-relations`,
    },
  };
}

// Server component that renders the client component
export default function InvestorRelations() {
  return <InvestorRelationsPage />;
}
