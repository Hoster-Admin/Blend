"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";

function Jobs({ isSubmitted, setIsSubmitted }) {
  const t = useTranslations("about");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("SA"); // Store ISO country code (e.g., "SA")
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const [cv, setCv] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(false);

  const locale = useLocale();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSend = async () => {
    if (!name || !phone || !email || !cv) {
      setError(t("fillRequiredFields"));
      return;
    }
    setLoading(true);
    const fullPhoneNumber = `+${getCountryCallingCode(countryCode)}${phone}`;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", fullPhoneNumber);
    // formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("department", department);
    formData.append("cv", cv);
    if (portfolio) formData.append("portfolio", portfolio);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/work-with-us`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status !== 200) {
        throw new Error("Submission failed");
      }

      window.scrollTo(0, 0);
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

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file && file.size > 50 * 1024 * 1024) {
      setError(t("fileSizeError"));
      return;
    }
    setter(file);
    setError("");
  };

  const departmentOptions = [
    { value: "قسم المالية", label: "قسم المالية | Finance" },
    { value: "الموارد البشرية", label: "الموارد البشرية | Human Resources" },
    { value: "العمليات", label: "العمليات | Operation" },
    {
      value: "التقنية - البرمجة",
      label: "التقنية - البرمجة | Tech - Software Engineer",
    },
    {
      value: "التقنية - إدارة المنتج",
      label: "التقنية - إدارة المنتج | Product Management",
    },
    {
      value: "الأعمال - تطوير الأعمال",
      label: "الأعمال - تطوير الأعمال | Business Development",
    },
    { value: "الأعمال - المبيعات", label: "الأعمال - المبيعات | Sales" },
    {
      value: "التسويق - التصميم القرافيكي",
      label: "التسويق - التصميم القرافيكي | Marketing - Graphic Design",
    },
    {
      value: "التسويق - التسويق الرقمي",
      label: "التسويق - التسويق الرقمي | Marketing - Digital Marketing",
    },
    {
      value: "التسويق - كتابة المحتوى",
      label: "التسويق - كتابة المحتوى | Marketing - Content Creation",
    },
    {
      value: "متدرب / حديث التخرج",
      label: "متدرب / حديث التخرج | Trainee / Fresh Graduate",
    },
    { value: "آخرى", label: "آخرى | Other" },
  ];

  return (
    <AnimatedSection>
      <>
        {isSubmitted ? (
          // Success Message
          <div className="flex flex-1 flex-col items-center justify-center gap-2 py-10">
            <h2 className="text-center font-semibold md:text-[40px]">
              {t("thankYouTitle")}
            </h2>
            <p className="max-w-md text-center text-[20px] text-gray-700">
              {t("hrContactMessage")}
            </p>

            <Link
              href={`/${locale}/`}
              className="mt-6 flex h-[50px] cursor-pointer items-center justify-center gap-3 rounded-[32px] bg-black px-8 py-[20px] text-[16px] font-normal text-white transition-all duration-300 hover:scale-105 hover:border-transparent"
            >
              <Image
                src="/blend-white.svg"
                width={30}
                height={33}
                alt={t("systemImageAlt")}
              />
              {t("backToHome")}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-20  md:w-[1000px] bg-white rounded-[32px] px-8 py-6">
            <div className="flex flex-col max-w-xl">
              <h1 className="text-[20px] mb-2 font-semibold md:text-[30px]">
                {t("jobsPage.first")}
              </h1>
              <p className="text-justify text-[14px] text-gray-700 md:text-[18px]">
                {t("jobsPage.desc1")}
              </p>
              <p className="text-justify text-[14px] text-gray-700 md:text-[18px]">
                {t("jobsPage.desc2")}
              </p>
              {/* <p className="text-justify text-[14px] text-gray-700 md:text-[18px]">
                {t("jobsPage.desc3")}
              </p>
              <p className="text-justify text-[14px] text-gray-700 md:text-[18px]">
                {t("jobsPage.desc4")}
              </p> */}
            </div>
            <div className="flex max-w-xl flex-col gap-8">
              <div className="relative w-full">
                <Select
                  value={
                    departmentOptions.find(
                      (option) => option.value === department,
                    ) || null
                  }
                  onChange={(selected) => {
                    setError("");
                    setDepartment(selected ? selected.value : "");
                  }}
                  options={departmentOptions}
                  isSearchable={true}
                  placeholder={
                    <span>
                      {t("departmentPlaceholder")}
                      <span className="text-red-600">*</span>
                    </span>
                  }
                  className="w-full"
                  classNamePrefix="select"
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "32px",
                      border: "1px solid #E0E0E0",
                      backgroundColor: "white",
                      height: "40px",
                      padding: "1px",
                      fontSize: "16px",
                      borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0", // Apply mainColor on focus
                      boxShadow: state.isFocused
                        ? "0 0 0 0.5px #34f3b6"
                        : "none", // Optional: add shadow for focus
                      "&:hover": {
                        borderColor: state.isFocused
                          ? "0 0 0 0.5px   #34f3b6"
                          : "#E0E0E0", // Maintain border on hover
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
                  menuPortalTarget={document.body}
                  menuPlacement="auto"
                />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setError("");
                    setName(e.target.value);
                  }}
                  className="h-[40px] w-full rounded-[32px] bg-white border border-[#E0E0E0] px-4 py-2 text-[14px] focus:outline-none"
                  aria-required="true"
                />
                {name === "" && (
                  <div
                    className={`pointer-events-none absolute ${locale === "ar" ? "right-4" : "left-4"}  top-1/2 -translate-y-1/2 text-[14px] text-[#AAAAAA]`}
                  >
                    {t("fullNamePlaceholder")}
                    <span className="text-red-600">*</span>
                  </div>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setError("");
                    setEmail(e.target.value);
                  }}
                  className="h-[40px] w-full rounded-[32px] bg-white border border-[#E0E0E0] px-4 py-2 text-[14px] focus:outline-none"
                  aria-required="true"
                />
                {email === "" && (
                  <div
                    className={`pointer-events-none absolute ${locale === "ar" ? "right-4" : "left-4"}  top-1/2 -translate-y-1/2 text-[14px] text-[#AAAAAA]`}
                  >
                    {t("emailPlaceholder")}
                    <span className="text-red-600">*</span>
                  </div>
                )}
              </div>
              <div className="relative flex w-full flex-col items-center gap-3 md:flex-row">
                <div className="relative w-full flex-1">
                  <input
                    type="text"
                    id="mob"
                    value={phone}
                    onChange={(e) => {
                      setError("");
                      setPhone(e.target.value);
                    }}
                    className="h-[40px] w-full rounded-[32px] bg-white border border-[#E0E0E0] px-4 py-2 text-[14px] focus:outline-none"
                    aria-required="true"
                  />
                  {phone === "" && (
                    <div
                      className={`pointer-events-none absolute ${locale === "ar" ? "right-4" : "left-4"}  top-1/2 -translate-y-1/2 text-[14px] text-[#AAAAAA]`}
                    >
                      {t("mobilePlaceholder")}
                      <span className="text-red-600">*</span>
                    </div>
                  )}
                </div>
                <Select
                  value={{
                    value: countryCode,
                    label: (
                      <div className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode={countryCode}
                          svg
                          style={{
                            marginRight: "8px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        {`${countryCode} (+${getCountryCallingCode(countryCode)})`}
                      </div>
                    ),
                  }}
                  onChange={(selected) => setCountryCode(selected.value)}
                  options={getCountries().map((country) => ({
                    value: country,
                    label: (
                      <div className="flex items-center gap-2 ">
                        <ReactCountryFlag
                          countryCode={country}
                          svg
                          style={{
                            marginRight: "8px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        {`${country} (+${getCountryCallingCode(country)})`}
                      </div>
                    ),
                  }))}
                  className="w-full md:w-[180px] "
                  classNamePrefix="select"
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "32px",
                      border: "1px solid #E0E0E0",
                      backgroundColor: "white",
                      height: "40px",
                      padding: "1px",
                      fontSize: "16px",
                      borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0", // Apply mainColor on focus
                      boxShadow: state.isFocused
                        ? "0 0 0 0.5px #34f3b6"
                        : "none", // Optional: add shadow for focus
                      "&:hover": {
                        borderColor: state.isFocused
                          ? "0 0 0 0.5px   #34f3b6"
                          : "#E0E0E0", // Maintain border on hover
                      },
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "12px",
                      zIndex: 9999,
                      height: "150px",
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
                    menuList: (base) => ({
                      ...base,
                      maxHeight: "150px",
                      overflowY: "auto",
                      padding: 0,
                    }),
                  }}
                />
              </div>

              <div className="relative w-full">
                <input
                  type="file"
                  id="cv"
                  onChange={(e) => {
                    setError("");
                    handleFileChange(e, setCv);
                  }}
                  className="h-[140px] w-full cursor-pointer rounded-[32px] bg-white border border-[#E0E0E0] px-4 py-2 text-[14px] file:hidden focus:outline-none"
                />
                {cv === null ? (
                  <div className="pointer-events-none absolute inset-4 flex cursor-pointer flex-col items-center justify-center gap-2 text-center text-[14px] text-[#AAAAAA]">
                    <p className="text-[18px] leading-tight sm:text-[20px]">
                      {t("uploadCv")}
                      <span className="text-red-600">*</span>
                    </p>
                    <p className="break-words text-[12px] leading-tight sm:text-[14px]">
                      {t("acceptedFiles")}
                    </p>
                  </div>
                ) : (
                  <div className="pointer-events-none absolute inset-4 flex cursor-pointer flex-col items-center justify-center gap-2 text-center">
                    {cv?.type?.startsWith("image/") ? (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={URL.createObjectURL(cv)}
                          alt="CV Preview"
                          className="max-h-[80px] max-w-[80px] rounded-lg object-cover"
                        />
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {cv?.name}
                        </p>
                      </div>
                    ) : cv.type === "application/pdf" ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-red-100">
                          <svg
                            className="h-8 w-8 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {cv?.name}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-gray-100">
                          <svg
                            className="h-8 w-8 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {cv.name}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="file"
                  id="portfolio"
                  onChange={(e) => handleFileChange(e, setPortfolio)}
                  className="h-[140px] w-full cursor-pointer rounded-[32px] bg-white border border-[#E0E0E0] px-4 py-2 text-[14px] file:hidden focus:outline-none"
                />
                {portfolio === null ? (
                  <div className="pointer-events-none absolute inset-4 flex cursor-pointer flex-col items-center justify-center gap-2 text-center text-[14px] text-[#AAAAAA]">
                    <p className="text-[18px] leading-tight sm:text-[20px]">
                      {t("uploadPortfolio")}
                    </p>
                    <p className="break-words text-[12px] leading-tight sm:text-[14px]">
                      {t("acceptedFiles")}
                    </p>
                  </div>
                ) : (
                  <div className="pointer-events-none absolute inset-4 flex cursor-pointer flex-col items-center justify-center gap-2 text-center">
                    {portfolio?.type?.startsWith("image/") ? (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={URL.createObjectURL(portfolio)}
                          alt="Portfolio Preview"
                          className="max-h-[80px] max-w-[80px] rounded-lg object-cover"
                        />
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {portfolio?.name}
                        </p>
                      </div>
                    ) : portfolio?.type === "application/pdf" ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-red-100">
                          <svg
                            className="h-8 w-8 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {portfolio?.name}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-gray-100">
                          <svg
                            className="h-8 w-8 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="max-w-full truncate text-[12px] text-[#666]">
                          {portfolio?.name}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <p className="mt-1 text-[12px] text-gray-500"></p>
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
                className={`${loading ? "opacity-60 " : " cursor-pointer"} flex w-full items-center justify-center gap-2 rounded-[56px] bg-white  py-2 font-semibold text-[#14181C] border border-[#14181C] hover:text-white hover:bg-[#14181C] transition-all duration-300  md:h-[40px]`}
              >
                {t("send")} {loading && <ClipLoader color="white" size={22} />}
              </button>
            </div>
          </div>
        )}
      </>
    </AnimatedSection>
  );
}

export default Jobs;
