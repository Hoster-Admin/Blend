import { getLocale } from "next-intl/server";
import ConnectPage from "@/app/containers/ConnectPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";

  return {
    title: "Connect Us",
    description: "Connect Us and know more",
    alternates: {
      canonical: `${baseUrl}/${locale}/connect`,
    },
  };
}

// Server component that renders the client component
export default function Connect() {
  return <ConnectPage />;
}
