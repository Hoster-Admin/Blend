// app/sitemap.js

const PRODUCT_SLUGS = [
  "delivery-apps",
  "website-orders",
  "call-center-orders",
  "own-app-orders",
  "order-management",
  "inventory-management",
  "item-management",
  "cloud-brands",
  "analytics-reports",
  "driver-dispatching",
];

export default async function sitemap() {
  const baseUrl = "https://tryblend.net";

  // Static non-blog paths (relative to locale root)
  const staticPaths = [
    "",
    "/connect",
    "/about",
    "/our-services",
    "/products",
    ...PRODUCT_SLUGS.map((slug) => `/products/${slug}`),
    "/sectors",
    "/integrations",
    "/blog",
    "/investor-relations",
    "/try-system",
    "/request-demo",
    "/thank-you",
  ];

  // Blog posts
  const blogCards = [
    { id: 1, slug: "importance-system-management-delivery-orders" },
    { id: 2, slug: "best-system-management-orders-delivery-food" },
    {
      id: 3,
      slug: "how-to-choose-system-management-delivery-orders-restaurant",
    },
    { id: 4, slug: "features-system-management-orders-delivery" },
    { id: 5, slug: "reports-performance-apps-delivery-platform-restaurant" },
    { id: 6, slug: "common-mistakes-order-management-apps-how-to-avoid" },
    {
      id: 7,
      slug: "blend-system-overcome-challenges-apps-management-restaurant",
    },
    { id: 8, slug: "unified-platform-apps-delivery-fast-ordering" },
    { id: 9, slug: "smart-vs-traditional-order-management-system" },
    { id: 10, slug: "automation-order-management-improve-delivery-efficiency" },
    { id: 11, slug: "no-pos-needed-blend-order-management-solution" },
    { id: 12, slug: "how-to-use-blend-order-management-step-by-step" },
    { id: 13, slug: "unified-delivery-platform-how-blend-helps-you" },
    { id: 14, slug: "turn-data-reports-into-restaurant-strategy" },
    { id: 15, slug: "auto-accept-orders-blend-no-more-delays" },
    { id: 16, slug: "update-food-menus-all-apps-blend-click" },
    { id: 17, slug: "integration-pos-delivery-apps-blend" },
    { id: 18, slug: "best-order-management-system-for-stores" },
    { id: 19, slug: "blend-tools-efficient-inventory-management-restaurants" },
    { id: 20, slug: "advantages-blend-order-management-stores" },
    { id: 21, slug: "efficient-item-management-smart-order-system" },
    { id: 22, slug: "how-order-system-enhances-customer-experience" },
    { id: 23, slug: "strategies-maximize-food-delivery-benefits" },
    { id: 24, slug: "track-sales-restaurants-stores-order-system" },
    { id: 25, slug: "external-delivery-service-increase-restaurant-sales" },
  ];

  const locales = ["en", "ar"];

  // Generate sitemap entries
  const sitemapEntries = locales.flatMap((locale) => {
    const staticUrls = staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date().toISOString(), // Use current date for lastmod
      changeFrequency: "daily", // Or 'hourly', 'weekly', 'monthly', 'yearly', 'never'
      priority: 0.7,
    }));

    const blogUrls = blogCards.map(({ id, slug }) => ({
      url: `${baseUrl}/${locale}/blog/${id}/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    return [...staticUrls, ...blogUrls];
  });

  return sitemapEntries;
}
