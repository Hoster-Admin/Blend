"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/loader";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import axios from "axios"; // Import axios
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";
import StoresSection from "@/components/storesSection";
function RequestDemo() {
  const [country, setCountry] = useState("");
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [brandName, setBrandName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("SA"); // Store ISO country code (e.g., "SA")
  const [email, setEmail] = useState("");
  const [branchCount, setBranchCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const locale = useLocale();
  const t = useTranslations("TrySystem");
  const router = useRouter();
  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get(
  //         process.env.NEXT_PUBLIC_API_GET_COUNTRIES,
  //       );
  //       const countries = response.data.data.map((country) => ({
  //         value: locale === "en" ? country.name : country.name_ar,
  //         label: locale === "en" ? country.name : country.name_ar,
  //         cities: country.cities || [],
  //       }));
  //       setCountriesOptions(countries);
  //     } catch (err) {
  //       console.error("Failed to fetch countries:", err);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_GET_COUNTRIES,
        );

        const saudiArabia = response.data.data.find(
          (country) => (country) => country.name === "Saudi Arabia",
        );

        if (!saudiArabia) return;

        // ثبّت الدولة
        setCountry(locale === "en" ? saudiArabia.name : saudiArabia.name_ar);

        const cities = (saudiArabia.cities || []).map((city) => ({
          value: locale === "en" ? city.name : city.name_ar,
          label: locale === "en" ? city.name : city.name_ar,
        }));

        cities.push({
          value: "other",
          label: locale === "en" ? "Other" : "أخرى",
        });

        setCitiesOptions(cities);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };

    fetchCountries();
  }, [locale]);

  // useEffect to update cities when country changes
  // useEffect(() => {
  //   if (country) {
  //     const selectedCountry = countriesOptions.find(
  //       (option) => option.value === country,
  //     );

  //     if (selectedCountry && selectedCountry.cities) {
  //       const cities = selectedCountry.cities.map((city) => ({
  //         value: locale === "en" ? city.name : city.name_ar,
  //         label: locale === "en" ? city.name : city.name_ar,
  //       }));

  //       // Add "Other" option
  //       cities.push({
  //         value: "other",
  //         label: locale === "en" ? "Other" : "أخرى",
  //       });

  //       setCitiesOptions(cities);
  //     } else {
  //       setCitiesOptions([
  //         {
  //           value: "other",
  //           label: locale === "en" ? "Other" : "أخرى",
  //         },
  //       ]);
  //     }

  //     // Reset city selection when country changes
  //     setCity("");
  //   } else {
  //     setCitiesOptions([]);
  //     setCity("");
  //   }
  // }, [country, countriesOptions, locale]);

  const handleSubmit = async () => {
    setError("");
    // Validate required fields (example: ensure critical fields are filled)
    if (
      !fullName ||
      !phone ||
      !email ||
      !country ||
      // !jobTitle ||
      !brandName ||
      !city
    ) {
      setError(t("fillRequiredFields")); // Use translation for error message
      return;
    }

    setIsLoading(true);
    // window.scrollTo({ top: 180, behavior: "smooth" });
    const fullPhoneNumber = `+${getCountryCallingCode(countryCode)}${phone}`;

    // Prepare form data
    const formData = {
      full_name: fullName,
      email,
      phone: fullPhoneNumber,
      city: city,
      country: country,
      job_title: jobTitle,
      brand_name: brandName,
      number_of_branches: Number(branchCount),
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_REQUEST_DEMO,
        formData,
      );
      router.push(`/${locale}/thank-you`);
      // setIsSubmitted(true);
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message || error?.message || null;
      setError(serverMessage || t("submissionError"));
      // setIsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncrement = () => {
    setBranchCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setBranchCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[#F4F4F4] bg-opacity-80 ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex max-w-7xl items-center justify-center bg-[#F4F4F4] p-5 py-10 md:p-10">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className=" text-center text-[22px] font-semibold md:text-[30px]">
            {t("title1")}
          </h1>
          <p className="text-center text-[14px] text-gray-700 md:text-[18px]">
            {t("desc1")}
          </p>
        </div>
        {/* Title */}
        <div className="flex flex-col  rounded-[32px] bg-white  md:flex-row-reverse ">
          {/* From Section */}
          <div className="my-5 flex  flex-col justify-center  rounded-bl-[32px] rounded-tl-[32px] p-4 px-5  py-0 md:my-0  md:w-[50%] md:px-10 md:py-12">
            <h3 className="mb-4 text-center text-[24px] font-medium">
              {t("contact_request")}
            </h3>

            <div className="flex flex-col">
              <div className="mt-6 w-auto space-y-6 ">
                <div className="flex flex-col gap-4 ">
                  {/* <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-[50%]">
                      <label className="mb-1 block text-sm font-medium text-gray-800">
                        {t("placeholders.fullName")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="focus:border-mainColor  w-full rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-2 text-[16px] outline-0"
                      />
                    </div>

                    <div className="w-full md:w-[50%]">
                      <label className="mb-1 block text-sm font-medium text-gray-800">
                        {t("placeholders.jobTitle")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="focus:border-mainColor w-full  rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-2 text-[16px] outline-0"
                      />
                    </div>
                  </div> */}
                  <div className="w-full">
                    {/* <label className="mb-1 block text-sm font-medium text-gray-800">
                      {t("placeholders.fullName")}{" "}
                      <span className="text-red-500">*</span>
                    </label> */}
                    <input
                      type="text"
                      value={fullName}
                      placeholder={t("placeholders.fullName")}
                      onChange={(e) => setFullName(e.target.value)}
                      className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                    />
                  </div>

                  <div className="w-full">
                    {/* <label className="mb-1 block text-sm font-medium text-gray-800">
                      {t("placeholders.brandName")}{" "}
                      <span className="text-red-500">*</span>
                    </label> */}

                    <input
                      type="text"
                      value={brandName}
                      placeholder={t("placeholders.brandName")}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                    />
                  </div>
                  {/* <div className="w-full">
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                      {t("countryPlaceholder")}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="flex">
                      {" "}
                      <Select
                        value={
                          countriesOptions.find(
                            (option) => option.value === country,
                          ) || null
                        }
                        onChange={(selected) => {
                          setCountry(selected ? selected.value : "");
                        }}
                        options={countriesOptions}
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
                            borderColor: state.isFocused
                              ? "#34f3b6"
                              : "#E0E0E0",
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
                        menuPlacement="auto"
                      />
                    </div>
                  </div> */}

                  {/* City Select - Only show when country is selected */}
                  {/* {country && ( */}
                  <div className="space-y-2">
                    {/* <label className="text-[16px] font-medium text-gray-800">
                      {t("cityPlaceholder")}{" "}
                      <span className="text-red-500">*</span>
                    </label> */}

                    <Select
                      value={
                        citiesOptions.find((option) => option.value === city) ||
                        null
                      }
                      onChange={(selected) => {
                        setCity(selected ? selected.value : "");
                      }}
                      options={citiesOptions}
                      isSearchable={true}
                      className="w-full"
                      placeholder={t("cityPlaceholder")}
                      classNamePrefix="select"
                      isDisabled={citiesOptions.length === 0}
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderRadius: "32px",
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
                          opacity: citiesOptions.length === 0 ? 0.6 : 1,
                        }),
                        placeholder: (base) => ({
                          ...base,
                          fontSize: "18px", // placeholder font size

                          color: "#A2A2A2", // placeholder color
                          textAlign: "center", // center text
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
                      }}
                      menuPlacement="auto"
                    />
                  </div>
                  {/* )} */}

                  <div className="flex  flex-col  gap-2 md:flex-row">
                    <div className="flex w-full flex-col">
                      {/* <label className="mb-1 text-[16px]  font-medium text-gray-700">
                        {t("placeholders.phone")}{" "}
                        <span className="text-red-500">*</span>
                      </label> */}
                      <div className="flex flex-col-reverse items-center gap-4 md:flex-row">
                        {" "}
                        <input
                          type="text"
                          value={phone}
                          placeholder={t("placeholders.phone")}
                          onChange={(e) => setPhone(e.target.value)}
                          className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                        />
                        {/* <Select
                          value={{
                            value: countryCode,
                            label: (
                              <div className="flex items-center gap-2">
                                <ReactCountryFlag
                                  countryCode={countryCode}
                                  svg
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                  }}
                                />
                                {`${countryCode} (+${getCountryCallingCode(countryCode)})`}
                              </div>
                            ),
                          }}
                          onChange={(selected) =>
                            setCountryCode(selected.value)
                          }
                          options={getCountries().map((country) => ({
                            value: country,
                            label: (
                              <div className="flex items-center gap-2">
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
                          className="w-full md:w-[25%]"
                          classNamePrefix="select"
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              borderRadius: "12px",
                              border: "1px solid #E0E0E0",
                              backgroundColor: "white",
                              padding: "2px",
                              fontSize: "16px",
                              borderColor: state.isFocused
                                ? "#34f3b6"
                                : "#E0E0E0", // Apply mainColor on focus
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
                            menuList: (base) => ({
                              ...base,
                              maxHeight: "150px",
                              overflowY: "auto",
                              padding: 0,
                            }),
                            option: (base, state) => ({
                              ...base,
                              display: "flex",
                              alignItems: "center",
                              color: "black",
                              padding: "6px",
                              direction: locale === "ar" ? "rtl" : "ltr",
                              backgroundColor: state.isSelected
                                ? "#34f3b6"
                                : "transparent",
                              "&:hover": {
                                backgroundColor: "#e6fffa",
                              },
                            }),
                          }}
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {/* <label className="mb-1 text-[16px] font-medium text-gray-700">
                      {t("placeholders.email")}{" "}
                      <span className="text-red-500">*</span>
                    </label> */}
                    <input
                      type="email"
                      value={email}
                      placeholder={t("placeholders.email")}
                      onChange={(e) => setEmail(e.target.value)}
                      className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                    />
                  </div>
                </div>
                <div className="mb-10 flex items-center justify-between">
                  <p className="text-base font-medium text-[#A2A2A2] md:text-[18px]">
                    {" "}
                    {t("formLabels.branchCount")}
                  </p>
                  <div className=" flex h-[48px] items-center justify-center gap-[16px] rounded-[24px] border border-[#EAEAEA] bg-white px-[8px] py-[8px] md:w-[270px]">
                    <button
                      onClick={handleDecrement}
                      className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[32px] bg-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:bg-[#34F34F3B6] disabled:opacity-25 disabled:hover:scale-100 disabled:hover:bg-white"
                      disabled={branchCount <= 1}
                    >
                      <Image
                        src="/minus.svg"
                        width={16}
                        height={16}
                        alt="Minus"
                      />
                    </button>
                    <span className="text-[24px] font-bold">{branchCount}</span>
                    <button
                      onClick={handleIncrement}
                      className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:bg-[#34F3B6]"
                    >
                      <Image
                        src="/plus.svg"
                        width={16}
                        height={16}
                        alt="plus"
                      />
                    </button>
                  </div>
                </div>

                <div className="my-2 flex flex-col items-center justify-center gap-3">
                  {error && (
                    <p className=" w-fit text-[14px] text-red-600">{error}</p>
                  )}

                  <button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className={`${isLoading ? "opacity-60 " : " cursor-pointer hover:scale-105"} flex h-[50px] min-w-[150px] max-w-[220px] items-center  justify-center gap-2 rounded-[32px] bg-black p-[8px] px-6 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90 `}
                  >
                    {t("buttons.submit")}{" "}
                    {/* {isLoading && <ClipLoader color="black" size={22} />} */}
                  </button>
                </div>
                <p className="mt-6 text-center">{t("promise")}</p>
              </div>
            </div>
          </div>
          {/* From Section */}
          {/* Side Section */}
          <div className="flex w-full flex-col items-center justify-center gap-10 rounded-[32px] bg-[#FFF9D9] to-[#C6FFED] px-6 py-8 md:w-[50%] md:px-8 md:py-12 ">
            <div className="flex flex-col ">
              <h1 className="mb-5 text-[30px] font-semibold">
                {t("sideTitle")}
              </h1>
              <ul className="list list-disc space-y-1 ps-5">
                <li>{t("sideDesc1")}</li>
                <li>{t("sideDesc2")}</li>
                <li>{t("sideDesc3")}</li>
              </ul>
            </div>

            <div className="mb-6 flex w-full flex-col items-start text-[24px] font-medium">
              <h4>{t("contactUs")}</h4>
              <a
                href="https://wa.me/966556830693"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mb-4 mt-6 flex h-[52px] w-[225px] cursor-pointer items-center justify-center gap-4 rounded-[32px] bg-white">
                  <Image
                    src={"/whats.svg"}
                    width={27}
                    height={27}
                    alt="whatsapp"
                  />
                  <p dir="ltr" className="text-[16px] font-medium">
                    0556 830 693
                  </p>
                </div>
              </a>

              <a href="tel:+966556830693">
                <div className="flex h-[52px] w-[225px] cursor-pointer items-center justify-center gap-4 rounded-[32px] bg-white">
                  <Phone size={22} />
                  <p dir="ltr" className="text-[16px] font-medium">
                    0556 830 693
                  </p>
                </div>
              </a>
            </div>
            <div className="w-[250px] max-w-full overflow-hidden sm:w-[500px] md:w-[550px]">
              <StoresSection />
            </div>
          </div>
        </div>
      </div>
      {/* Side Section */}
    </div>
  );
}

export default RequestDemo;
