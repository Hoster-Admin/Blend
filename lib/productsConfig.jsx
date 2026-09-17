import {
  Truck,
  Globe,
  Phone,
  Smartphone,
  Package,
  Boxes,
  AlignStartVertical,
  Layers,
  ChartPie,
  Route,
} from "lucide-react";

// Single source of truth for the /products index + /products/[slug] pages,
// and for the Products mega-menu in Navbar.jsx / MobileNavBar.jsx.
export const ORDER_CHANNEL_SLUGS = [
  "delivery-apps",
  "website-orders",
  "call-center-orders",
  "own-app-orders",
];

export const OPERATIONS_SLUGS = [
  "order-management",
  "inventory-management",
  "item-management",
  "cloud-brands",
  "analytics-reports",
  "driver-dispatching",
];

export const ALL_PRODUCT_SLUGS = [...ORDER_CHANNEL_SLUGS, ...OPERATIONS_SLUGS];

export const PRODUCT_META = {
  "delivery-apps": {
    icon: Truck,
    image: "/merge.webp",
    bg: "from-[#71B5FE] to-[#CDE7FF]",
  },
  "website-orders": {
    icon: Globe,
    image: "/our-service-first.webp",
    bg: "from-[#34F3B6] to-[#C6FFED]",
  },
  "call-center-orders": {
    icon: Phone,
    image: "/our-service-second.webp",
    bg: "from-[#FFD25E] to-[#FFF9D9]",
  },
  "own-app-orders": {
    icon: Smartphone,
    image: "/our-service-third.webp",
    bg: "from-[#FF6C02] to-[#FFE5D1]",
  },
  "order-management": {
    icon: Package,
    image: "/service-1.svg",
    bg: "from-[#71B5FE] to-[#CDE7FF]",
  },
  "inventory-management": {
    icon: Boxes,
    image: "/edit.webp",
    bg: "from-[#34F3B6] to-[#C6FFED]",
  },
  "item-management": {
    icon: AlignStartVertical,
    image: "/service2.svg",
    bg: "from-[#34F3B6] to-[#C6FFED]",
  },
  "cloud-brands": {
    icon: Layers,
    image: "/join-blend.webp",
    bg: "from-[#FF6C02] to-[#FFE5D1]",
  },
  "analytics-reports": {
    icon: ChartPie,
    image: "/service3.svg",
    bg: "from-[#FFD25E] to-[#FFF9D9]",
  },
  "driver-dispatching": {
    icon: Route,
    image: "/reports.webp",
    bg: "from-[#71B5FE] to-[#CDE7FF]",
  },
};
