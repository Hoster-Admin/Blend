import { getLocale } from "next-intl/server";
import RegisterDeliveryAppsPage from "@/app/containers/RegisterDeliveryAppsPage";

// Server-side metadata generation
export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://tryblend.net";

  return {
    title: "Register on Delivery Apps",
    description: "Sign up and register your business on delivery applications",
    alternates: {
      canonical: `${baseUrl}/${locale}/register-delivery-apps`,
    },
  };
}

// Server component
export default function RegisterDeliveryApps() {
  return (
    <div className="bg-[#F3F5F7]">
      <RegisterDeliveryAppsPage />
    </div>
  );
}
