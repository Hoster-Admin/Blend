"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LatestArticles from "./latestArticles";
import Categories from "./Categories";
import { useTranslations } from "next-intl";
function AboutFooter() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/tryblendnet",
      src: "/social-linkedin.svg",
      alt: "LinkedIn",
      width: 18,
    },
    {
      href: "https://x.com/tryblendnet",
      src: "/social-x.svg",
      alt: "X (formerly Twitter)",
      width: 18,
    },
    {
      href: "https://www.instagram.com/tryblendnet",
      src: "/social-insta.svg",
      alt: "Instagram",
      width: 18,
    },
    {
      href: "https://wa.me/966556830693",
      src: "/social-whats.svg",
      alt: "WhatsApp",
      width: 25,
    },
  ];

  const t = useTranslations("Footer");
  return (
    <footer className=" rounded-t-[40px] bg-[#F3F5F7]  py-10 text-gray-800 ">
      <div className="mx-auto flex  max-w-7xl flex-col items-center justify-between gap-10 px-5  md:px-10">
        <div className=" flex w-full  flex-col items-center justify-center gap-4 ">
          <p>Alsahafa, Riyadh, Saudi Arabia</p>
          <div className="flex justify-start gap-3">
            {socialLinks.map(({ href, src, alt, width }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-[#34F3B6]"
              >
                <Image src={src} alt={alt} width={width} height={20} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-[12px] font-semibold">{t("rights")}</p>
      </div>
    </footer>
  );
}

export default AboutFooter;
