// import { NextRequest, NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";

// const intlMiddleware = createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "ar",
// });

// export function middleware(request) {
//   if (request.nextUrl.pathname === "/") {
//     const url = request.nextUrl.clone();
//     url.pathname = "/ar";
//     return NextResponse.redirect(url);
//   }

//   return intlMiddleware(request);
// }

// export const config = {
//   matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"],
// };

import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

// Static map of blog IDs to slugs
const blogRedirects = {
  1: "importance-system-management-delivery-orders",
  2: "best-system-management-orders-delivery-food",
  3: "how-to-choose-system-management-delivery-orders-restaurant",
  4: "features-system-management-orders-delivery",
  5: "reports-performance-apps-delivery-platform-restaurant",
  6: "common-mistakes-order-management-apps-how-to-avoid",
  7: "blend-system-overcome-challenges-apps-management-restaurant",
  8: "unified-platform-apps-delivery-fast-ordering",
  9: "smart-vs-traditional-order-management-system",
  10: "automation-order-management-improve-delivery-efficiency",
  11: "no-pos-needed-blend-order-management-solution",
  12: "how-to-use-blend-order-management-step-by-step",
  13: "unified-delivery-platform-how-blend-helps-you",
  14: "turn-data-reports-into-restaurant-strategy",
  15: "auto-accept-orders-blend-no-more-delays",
  16: "update-food-menus-all-apps-blend-click",
  17: "integration-pos-delivery-apps-blend",
  18: "best-order-management-system-for-stores",
  19: "blend-tools-efficient-inventory-management-restaurants",
  20: "advantages-blend-order-management-stores",
  21: "efficient-item-management-smart-order-system",
  22: "how-order-system-enhances-customer-experience",
  23: "strategies-maximize-food-delivery-benefits",
  24: "track-sales-restaurants-stores-order-system",
  25: "external-delivery-service-increase-restaurant-sales",
};

// next-intl middleware setup
const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "ar",
});

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect "/" → "/ar"
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/ar";
    return NextResponse.redirect(url);
  }

  // Match legacy blog URLs: /en/blog/1 or /ar/blog/1
  const blogMatch = pathname.match(/^\/(en|ar)\/blog\/(\d+)$/);
  if (blogMatch) {
    const locale = blogMatch[1];
    const id = blogMatch[2];
    const slug = blogRedirects[id];

    if (slug) {
      const redirectUrl = new URL(request.url);
      redirectUrl.pathname = `/${locale}/blog/${id}/${slug}`;
      return NextResponse.redirect(redirectUrl, 301); // Permanent redirect for SEO
    }
  }

  // Handle locale detection etc.
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"],
};
