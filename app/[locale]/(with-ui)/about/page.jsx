import { getLocale } from "next-intl/server";
import AboutPage from "@/app/containers/AboutPage";
// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";

  return {
    title: "About Us",
    description: "Learn more about Blend and our mission",
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
    },
  };
}

// Server component that renders the client component
export default function About() {
  return (
    <div className="bg-[#F3F5F7]">
      <AboutPage />
    </div>
  );
}
