"use client";

import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import LoginHeader from "@/components/header/LoginHeader";
import Link from "next/link";
function MerchantLogin() {
  const searchParams = useSearchParams();
  const t = useTranslations("login");
  const typeParam = searchParams.get("type") || "merchant";
  const locale = useLocale();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("merchant");
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  useEffect(() => {
    setActiveTab(typeParam === "branch" ? "branch" : "merchant");
  }, [typeParam]);

  // Function to handle tab change and update URL
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Update the URL with the new tab type
    router.push(`/${locale}/login?type=${tab}`, { scroll: false });
  };

  const tabs = [
    {
      key: "merchant",
      label: t("merchant"),
      icon: "/user-icon.svg",
    },
    {
      key: "branch",
      label: t("branch"),
      icon: "/branch-icon.svg",
    },
  ];

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-5   md:px-10">
      <LoginHeader />
      <div className="gap-30 mt-[90px] flex flex-1 flex-col items-center justify-center md:min-h-[calc(100vh-150px)] md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col  justify-center">
          <h1 className="mb-2 text-center text-[30px] font-bold">
            {" "}
            {t("title")}
          </h1>
          <p className="mb-10 text-[18px] text-[#7D858D]">{t("desc")}</p>
          <Image src="/login.svg" width={320} height={332} alt="login image" />
          <div className="flex flex-col  justify-center gap-2">
            <p className="mt-8 text-sm">{t("copy")}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex  w-full flex-col items-center justify-center pb-10 md:w-[496px] md:py-0 ">
          {/* Switch Tabs */}
          <div className="mb-4 flex w-[100%] rounded-full bg-[#F3F5F7] p-[6px] md:h-[50px] md:w-[400px]">
            {tabs.map(({ key, label, icon, activeIcon }) => (
              <div key={key} className="relative flex flex-1">
                {activeTab === key && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#C6FFED] to-[#34F3B6]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <button
                  onClick={() => handleTabChange(key)}
                  className={cn(
                    "relative z-10 flex w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-full py-2 text-[14px] font-medium md:text-[17px]",
                    activeTab === key ? "text-black" : "text-black",
                  )}
                  aria-selected={activeTab === key}
                >
                  <Image
                    src={activeTab === key ? icon : icon}
                    width={24}
                    height={24}
                    alt={key}
                  />
                  {label}
                </button>
              </div>
            ))}
          </div>
          <div className=" flex w-full flex-col items-center justify-center gap-4 ">
            {/* Input Fields with Labels */}
            <div className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="domain" className="text-[14px]">
                  {t("domain")}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder={t("enterDomain")}
                  className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px]   placeholder:text-[#AAAAAA] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px]">
                  {t("email")}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("enterEmail")}
                  className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px]   placeholder:text-[#AAAAAA] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-[14px]">
                  {t("password")}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("enterPassword")}
                  className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px]   placeholder:text-[#AAAAAA] focus:outline-none"
                />
              </div>
            </div>

            {/* Forgot Password and Keep Me Logged In */}
            <div className=" flex w-full items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-[12px] font-semibold ">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="relative  h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#E0E0E0] checked:bg-black checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-[14px] checked:after:font-bold checked:after:text-white checked:after:content-['✓'] "
                />
                {t("keepMeLogin")}
              </label>
              <Link
                href={`/${locale}/forgot-password`}
                className="cursor-pointer border-b border-black text-right text-[12px] font-semibold decoration-black transition-all duration-300 hover:scale-105"
              >
                {t("forgetPassword")}
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full cursor-pointer rounded-[56px]  bg-gradient-to-r from-[#C6FFED] to-[#34F3B6] py-2 font-medium  transition-all duration-300 hover:scale-105 md:h-[40px]">
              {t("login")}
            </button>

            {/* Register Button */}
            <div className="flex w-full items-center justify-center gap-3">
              <button className=" text-[14px] font-medium ">
                {t("dontHaveAccount")}
              </button>
              <Link
                href={`/${locale}/try-system`}
                className=" w-fit cursor-pointer rounded-[66px]  bg-[#F3F5F7]  px-5 py-1 text-[14px]  font-semibold transition-all duration-300 hover:scale-105"
              >
                {t("signUp")}
              </Link>
            </div>
            <p className=" text-sm text-gray-600 ">
              {t("loginAgreement")}{" "}
              <Link
                target="_blank"
                className="cursor-pointer border-b  border-black font-medium decoration-black transition-all duration-300 hover:text-black"
                href={`/${locale}/privacy-policy`}
              >
                {t("privacySecurity")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantLogin;
