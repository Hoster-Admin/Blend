"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LoginHeader from "@/components/header/LoginHeader";
import Link from "next/link";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
function Registration() {
  const t = useTranslations("registration");
  const locale = useLocale();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [ticketSize, setTicketSize] = useState(0);
  const [other, setOther] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!name || !mobile || !ticketSize) {
      setError(t("fillRequiredFields"));
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name,
        phone: mobile,
        email,
        ticket_size: ticketSize,
        notes: other,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/interested-investor`,
        payload,
      );

      if (response.status !== 200) {
        throw new Error("Failed to submit form");
      }
      console.log(payload);

      setIsSubmitted(true);
      setError("");
    } catch (err) {
      const serverMessage =
        err?.response?.data?.message || err?.message || null;
      setError(serverMessage || t("submissionError"));
    } finally {
      setLoading(false);
    }
  };

  const ticketSizeOptions =
    locale === "ar"
      ? [
          { value: "50k-100k", label: "50,000 - 100,000 ألف ريال" },
          { value: "100k-200k", label: "100,000 - 200,000 ألف ريال" },
          { value: "250k-350k", label: "250,000 - 350,000 ألف ريال" },
          { value: "higher", label: "أخرى أعلى" },
          { value: "lower", label: "أخرى أقل" },
        ]
      : [
          { value: "50k-100k", label: "50,000 - 100,000 SAR" },
          { value: "100k-200k", label: "100,000 - 200,000 SAR" },
          { value: "250k-350k", label: "250,000 - 350,000 SAR" },
          { value: "higher", label: "Other (Higher)" },
          { value: "lower", label: "Other (Lower)" },
        ];

  return (
    <>
      <LoginHeader />
      <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl flex-col px-5 md:px-10">
        {isSubmitted ? (
          <div className="mt-[70px] flex flex-1 flex-col items-center justify-center gap-2 py-10 md:min-h-[calc(100vh-70px)]">
            <h2 className="text-center text-[40px] font-semibold">
              {t("thankYou")}
            </h2>
            <p className="max-w-md text-center text-[20px] text-gray-700">
              {t("teamWillContact")}
            </p>
            <Link
              href={`/${locale}/`}
              className="mt-6 flex h-[50px] items-center justify-center gap-3 rounded-[32px] bg-black px-8 py-[20px] text-[16px] font-normal text-white transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/blend-white.svg"
                width={30}
                height={33}
                alt="system"
              />
              {t("backToHome")}
            </Link>
          </div>
        ) : (
          <div className="mt-[70px] flex max-w-6xl flex-1 flex-col items-center justify-between gap-[40px] py-5 md:min-h-[calc(100vh-70px)] md:flex-row">
            <div className="flex flex-col gap-3 md:w-[50%]">
              <h1 className="text-[42px] font-bold">{t("welcome")}</h1>
              <p className="text-[21px]">{t("introText")}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[40%]">
              <div className="w-full space-y-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[14px] font-medium">
                    {t("name")} <span className="text-red-600">*</span>
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
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="mobile" className="text-[14px] font-medium">
                    {t("mobile")} <span className="text-red-600">*</span>
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
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[14px] font-medium">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[40px] w-full rounded-xl border border-[#E0E0E0] px-4 py-2 placeholder:text-[14px] placeholder:text-[#AAAAAA] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="ticketSize"
                    className="text-[14px] font-medium"
                  >
                    {t("ticketSize")}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="relative w-full">
                    <Select
                      value={
                        ticketSizeOptions.find(
                          (option) => option.value === ticketSize,
                        ) || null
                      }
                      onChange={(selected) =>
                        setTicketSize(selected ? selected.value : "")
                      }
                      options={ticketSizeOptions}
                      isSearchable={false}
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
                              ? "#34f3b6"
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
                      menuPortalTarget={
                        typeof window !== "undefined" ? document.body : null
                      }
                      menuPlacement="auto"
                    />

                    {/* SAR Icon */}
                    <div
                      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${
                        locale === "ar" ? "left-12" : "right-12"
                      } flex items-center`}
                    >
                      <Image src="/ryal.svg" width={20} height={20} alt="SAR" />
                    </div>
                  </div>
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
                  />
                </div>
              </div>
              {error && (
                <p className="w-full text-center text-[14px] text-red-600">
                  {error}
                </p>
              )}
              <button
                disabled={loading}
                onClick={handleSend}
                className={`${loading ? "opacity-60 " : " cursor-pointer hover:scale-105"} flex w-full items-center justify-center gap-2 rounded-[56px] bg-black  py-2 font-semibold text-white transition-all duration-300  md:h-[40px]`}
              >
                {t("send")} {loading && <ClipLoader color="white" size={22} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Registration;
