import { getLocale } from "next-intl/server";
import BlogsPage from "@/app/containers/BlogsPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";

  return {
    title: locale === "en" ? "Blogs" : "المدونة",
    description: locale === "en" ? "Blogs" : "المدونة",
    alternates: {
      canonical: `${baseUrl}/${locale}/blogs`,
    },
  };
}

// Server component that renders the client component
export default function Blog() {
  return <BlogsPage />;
}
