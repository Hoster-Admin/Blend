"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LoginHeader from "@/components/header/LoginHeader";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

function ForgotPassword() {
  const t = useTranslations("forgotPsw");
  const locale = useLocale();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Basic email validation
    // if (!email) {
    //   setError(t("emailRequired") || "البريد الإلكتروني مطلوب");
    //   return;
    // }
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   setError(t("invalidEmail") || "البريد الإلكتروني غير صالح");
    //   return;
    // }

    // Simulate API call for password reset (uncomment to implement)
    /*
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Failed to send reset link");
    } catch (err) {
      setError(t("submissionError") || "فشل في إرسال رابط إعادة التعيين، حاول مرة أخرى");
      return;
    }
    */

    // On success, show success message
    setIsSubmitted(true);
    setError("");
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-5 md:px-10">
      <LoginHeader />
      {isSubmitted ? (
        // Success Message
        <div className="mt-[90px] flex flex-1 flex-col items-center justify-center gap-10 md:min-h-[calc(100vh-150px)]">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[27px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] md:h-[160px] md:w-[160px] md:rounded-[50px]">
            <CircleCheck size={70} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-semibold md:text-[34px]">
              {t("submitMsg")}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-3 md:gap-5">
            <Link
              href={`/${locale}/login`}
              className="hover:bg-mainColor flex h-[40px] cursor-pointer items-center justify-center gap-1 rounded-[32px] border border-[#a8a8a8] px-4 py-2 text-sm font-normal transition-all duration-300 hover:border-transparent md:h-[50px] md:gap-2 md:px-8 md:py-[20px] md:text-[16px]"
            >
              <Image
                src="/user.svg"
                width={28}
                height={31}
                alt="system"
                className="w-[23px] md:w-[28px]"
              />
              {t("login")}
            </Link>
            <Link
              href={`/${locale}/`}
              className="hover:bg-mainColor  md:text-[16px]font-normal flex h-[40px] cursor-pointer items-center justify-center gap-2 rounded-[32px] border border-[#a8a8a8] px-4 py-2 text-sm transition-all duration-300 hover:border-transparent md:h-[50px] md:gap-3 md:px-8 md:py-[20px]"
            >
              <Image
                src="/blog-icon-3.svg"
                width={23}
                height={25}
                alt="system"
                className="w-[20px] md:w-[23px]"
              />
              {t("backToHome")}
            </Link>
          </div>
        </div>
      ) : (
        // Form Content
        <div className="gap-30 mt-[90px] flex flex-1 flex-col items-center justify-center md:min-h-[calc(100vh-150px)] md:flex-row">
          {/* Left Section */}
          <div className="flex flex-col  justify-center">
            <h1 className="mb-2 text-center text-[30px] font-bold">
              {" "}
              {t("title")}
            </h1>
            <p className="mb-10 text-[18px] text-[#7D858D]">{t("desc")}</p>
            <Image
              src="/login.svg"
              width={320}
              height={332}
              alt="login image"
            />
            <div className="flex flex-col  justify-center gap-2">
              <p className="mt-8 text-sm">{t("copy")}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex w-full flex-col justify-center gap-10 pb-10 md:w-[496px] md:py-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] font-semibold">{t("forgotPsw")}</h1>
              <p className="text-[14px] text-gray-700">{t("desc2")}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              {/* Input Fields with Labels */}
              <div className="w-full space-y-4">
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
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                  />
                </div>
                {error && (
                  <p className="w-full text-center text-[14px] text-red-600">
                    {error}
                  </p>
                )}
              </div>

              {/* Reset Password Button */}
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer rounded-[56px] bg-gradient-to-r from-[#C6FFED] to-[#34F3B6] py-2 font-medium transition-all duration-300 hover:scale-105 md:h-[40px]"
              >
                {t("resetPSw")}
              </button>

              {/* Register Button */}
              <div className="flex w-full items-center justify-center gap-3">
                <button className="text-[14px] font-medium">
                  {t("haveAccount")}
                </button>
                <Link
                  href={`/${locale}/try-system`}
                  className="w-fit cursor-pointer rounded-[66px] bg-[#F3F5F7] px-5 py-1 text-[14px] font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t("signIn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
