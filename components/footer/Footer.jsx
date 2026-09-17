"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/tryblendnet",
      src: "/social-linkedin.svg",
      alt: "LinkedIn",
      width: 20,
    },
    {
      href: "https://www.instagram.com/tryblendnet",
      src: "/social-insta.svg",
      alt: "Instagram",
      width: 20,
    },
    {
      href: "https://wa.me/966556830693",
      src: "/social-whats.svg",
      alt: "WhatsApp",
      width: 27,
    },
    {
      href: "https://x.com/tryblendnet",
      src: "/social-x.svg",
      alt: "X (formerly Twitter)",
      width: 20,
    },
  ];
  return (
    <footer className=" pt-30 md:pt-30 flex flex-col justify-between bg-[#00271A] pb-5 text-white  md:h-[463px]">
        <div className="md:gap-30 mx-auto flex w-full max-w-7xl flex-col justify-center gap-16 px-5 md:flex-row md:px-10 ">
          {/* Left: Brand Description and Social */}
          <div className=" flex flex-col  items-center md:items-start">
            <Image
              src={locale === "ar" ? "/logo-white.svg" : "/logo-en-white.svg"}
              alt={t("brand")}
              width={locale === "ar" ? 192 : 200}
              height={locale === "ar" ? 40 : 40}
            />
            <p className=" mt-12 text-center text-sm font-medium leading-6 text-white md:text-start">
              {t("desc")}
            </p>
            <p className="mt-3  text-sm font-medium text-white ">
              Alsahafa, Riyadh, Saudi Arabia
            </p>
            <div className="my-6 hidden  md:block">
              <div className="flex justify-start gap-3">
                {socialLinks.map(({ href, src, alt, width }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-gray-200"
                  >
                    <Image src={src} alt={alt} width={width} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center: 3 Columns of Links */}
          <div className=" md:gap-22  flex flex-row justify-between md:justify-start">
            {/* Column 1 */}
            <div className="md:min-w-[130px]">
              <h2 className="text-md  mb-4 text-center font-bold md:text-start md:text-xl">
                {t("brandTitle")}
              </h2>
              <ul className="space-y-2 text-sm text-white md:space-y-3 md:text-lg">
                {/* <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/sectors`}>{t("sectors")}</Link>
                </li>
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/our-services`}>{t("services")}</Link>
                </li> */}
                {/* <li className="hover:font-medium">
                <Link href="#">{t("products")}</Link>
              </li> */}
                {/* <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/pricing`}>{t("pricing")}</Link>
                </li> */}
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/blog`}>{t("blog")}</Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="md:min-w-[135px] ">
              <h2 className="text-md mb-4 text-center font-bold md:text-start md:text-xl">
                {t("integration")}
              </h2>
              <ul className="space-y-2 text-sm text-white md:space-y-3 md:text-lg">
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/integrations?type=1`}>
                    {t("deliveryApps")}
                  </Link>
                </li>
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/integrations?type=2`}>
                    {t("pos")}
                  </Link>
                </li>
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/connect`}>
                    {t("integrationGuide")}
                  </Link>
                </li>
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/register-delivery-apps`}>
                    {t("register-delivery-apps")}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="flex h-full flex-col items-center md:min-w-[145px] md:items-start">
              <h2 className="text-md mb-4 font-bold md:text-xl">
                {t("support")}
              </h2>
              <ul className="space-y-2 text-sm text-white md:space-y-3 md:text-lg">
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/about`}>{t("about")}</Link>
                </li>
                <li className="text-center hover:font-medium md:text-start">
                  <Link href={`/${locale}/investor-relations`}>
                    {t("investorRelations")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:hidden">
            <div className="flex items-center justify-center  gap-3">
              {socialLinks.map(({ href, src, alt, width, isIcon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-[#E0FBC0]"
                >
                  {isIcon ? (
                    <FaTiktok size={20} />
                  ) : (
                    <Image src={src} alt={alt} width={width} height={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Scroll Up Button */}
          <div className="hidden justify-center md:flex">
            <button
              aria-label="Go to top of the website"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-300"
            >
              <ChevronUp
                size={22}
                className="group-hover:animate-bounce-up-down transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-center text-sm text-white/70">{t("rights")}</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
