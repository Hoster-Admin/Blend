"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LoginHeader from "@/components/header/LoginHeader";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import dynamic from "next/dynamic";
// import IntercomClientComponent from "@/components/IntercomClientComponent";
// Dynamically import Select with SSR disabled
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[40px] w-full items-center rounded-xl border border-[#E0E0E0] bg-white px-4">
      <span className="text-[14px] text-[#AAAAAA]">Loading...</span>
    </div>
  ),
});

function ConnectPage() {
  const t = useTranslations("connect");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState("");
  const [link, setLink] = useState("");
  const [other, setOther] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sectorOptions = [
    { value: "تطبيق توصيل", label: "تطبيق توصيل" },
    { value: "نقاط بيع", label: "نقاط بيع" },
    { value: "ادارة مخزون", label: "ادارة مخزون" },
    { value: "البيع على الطاولة", label: "البيع على الطاولة" },
    { value: "انظمة البيع اونلاين", label: "انظمة البيع اونلاين" },
    { value: "اخرى", label: "اخرى" },
  ];

  const handleSend = async () => {
    if (!name || !mobile || !email || !sector) {
      setError(t("fillRequiredFields"));
      return;
    }
    const payload = {
      name,
      phone: mobile,
      email,
      sector: sector,
      platform_link: link,
      other_info: other,
    };

    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/partnership`,
        payload,
      );
      if (res.status !== 200) {
        throw new Error("Failed to submit form");
      }
      setIsSubmitted(true);
      setError("");
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message || error?.message || null;
      setError(serverMessage || t("submissionError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoginHeader />
      <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl flex-col  px-5 md:px-10">
        {isSubmitted ? (
          // Success Message
          <div className="mt-[70px] flex flex-1 flex-col items-center justify-center gap-2 py-5 md:min-h-[calc(100vh-70px)]">
            <h2 className="text-center text-[40px] font-semibold">
              {t("successTitle")}
            </h2>
            <p className="max-w-md text-center text-[20px] text-gray-700">
              {t("successMessage") ||
                "شكراً لتواصلك معنا. سيتواصل فريق الشراكات معك قريباً."}
            </p>

            <Link
              href={`/${locale}/`}
              className=" mt-6 flex h-[50px] cursor-pointer items-center justify-center gap-3 rounded-[32px] bg-black text-white px-8 py-[20px] text-[16px] font-normal transition-all  duration-300 hover:scale-105  hover:border-transparent"
            >
              <Image
                src="/blog-icon-3-white.svg"
                width={23}
                height={25}
                alt="system"
              />
              {t("backToHome") || "العودة إلى الرئيسية"}
            </Link>
          </div>
        ) : (
          // Form Content
          <div className="mt-[70px] flex max-w-6xl flex-1 flex-col items-center justify-between  gap-[40px] py-5 md:min-h-[calc(100vh-70px)] md:flex-row">
            <div className="flex flex-col gap-3 md:w-[50%]">
              <h1 className="text-[42px] font-bold">{t("welcomeTitle")}</h1>
              <p className="text-[21px]">{t("welcomeDescription")}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[40%]">
              {/* Input Fields with Labels */}
              <div className="w-full space-y-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[14px] font-medium">
                    {t("name")}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setError("");
                      setName(e.target.value);
                    }}
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="mobile" className="text-[14px] font-medium">
                    {t("mobile")}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setError("");
                      setMobile(e.target.value);
                    }}
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[14px] font-medium">
                    {t("email")}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setError("");
                      setEmail(e.target.value);
                    }}
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="sector" className="text-[14px] font-medium">
                    {t("sector")}
                    <span className="text-red-600">*</span>
                  </label>
                  <Select
                    instanceId="sector-select" // Add this to prevent hydration issues
                    value={
                      sectorOptions.find((option) => option.value === sector) ||
                      null
                    }
                    onChange={(selected) => {
                      setError("");
                      setSector(selected ? selected.value : "");
                    }}
                    options={sectorOptions}
                    isSearchable={true}
                    placeholder={""}
                    className="w-full"
                    classNamePrefix="select"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        borderRadius: "12px",
                        border: "1px solid #E0E0E0",
                        backgroundColor: "white",
                        height: "40px",
                        padding: "1px",
                        fontSize: "16px",
                        borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0",
                        boxShadow: state.isFocused
                          ? "0 0 0 0.5px #34f3b6"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused
                            ? "0 0 0 0.5px   #34f3b6"
                            : "#E0E0E0",
                        },
                        direction: locale === "ar" ? "rtl" : "ltr",
                      }),
                      menu: (base) => ({
                        ...base,
                        borderRadius: "12px",
                        zIndex: 9999,
                        maxHeight: "200px",
                      }),
                      menuList: (base) => ({
                        ...base,
                        maxHeight: "200px",
                        overflowY: "auto",
                        padding: 0,
                      }),
                      option: (base, state) => ({
                        ...base,
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        padding: "8px",
                        direction: locale === "ar" ? "rtl" : "ltr",
                        backgroundColor: state.isSelected
                          ? "#34f3b6"
                          : "transparent",
                        "&:hover": {
                          backgroundColor: "#e6fffa",
                        },
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#AAAAAA",
                        fontSize: "14px",
                      }),
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="link" className="text-[14px] font-medium">
                    {t("link")}
                  </label>
                  <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="other" className="text-[14px] font-medium">
                    {t("other")}
                  </label>
                  <textarea
                    id="other"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                    className="h-[70px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                    aria-required="true"
                  />
                </div>
              </div>
              {error && (
                <p className="w-full text-center text-[14px] text-red-600">
                  {error}
                </p>
              )}
              {/* Submit Button */}
              <button
                disabled={loading}
                onClick={handleSend}
                className={` ${loading ? "opacity-60 " : " cursor-pointer hover:scale-105"} flex w-full items-center justify-center gap-2 rounded-[56px] bg-black text-white  py-2 font-semibold transition-all duration-300 md:h-[40px]`}
                aria-label={t("send")}
              >
                {t("send")} {loading && <ClipLoader color="white" size={22} />}
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <IntercomClientComponent /> */}
    </>
  );
}

export default ConnectPage;
