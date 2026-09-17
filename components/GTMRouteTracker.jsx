"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GTMRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      // Build the full URL with search params
      const url =
        pathname +
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      window.dataLayer.push({
        event: "pageview",
        page: pathname,
        page_location: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
