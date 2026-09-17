"use client";
import React, { useState, useEffect } from "react";
import { Store, User, Phone, MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import Loader from "@/components/loader";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import axios from "axios"; // Import axios
import { ClipLoader } from "react-spinners";
export default function TrySystemPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [storeType, setStoreType] = useState("");
  const [storeStatus, setStoreStatus] = useState(null); // Initialize as null to indicate no selection
  // const [cloudTags, setCloudTags] = useState("");
  const [country, setCountry] = useState("");
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [city, setCity] = useState("");
  const [storeIssues, setStoreIssues] = useState([]);
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [brandName, setBrandName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("SA"); // Store ISO country code (e.g., "SA")
  const [email, setEmail] = useState("");
  const [branchCount, setBranchCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const locale = useLocale();
  const t = useTranslations("TrySystem");

  // useEffect for fetching countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_GET_COUNTRIES,
        );
        const countries = response.data.data.map((country) => ({
          value: country.id,
          label: locale === "en" ? country.name : country.name_ar,
          cities: country.cities || [],
        }));
        setCountriesOptions(countries);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };

    fetchCountries();
  }, []);

  // useEffect to update cities when country changes
  useEffect(() => {
    if (country) {
      const selectedCountry = countriesOptions.find(
        (option) => option.value === country,
      );
      if (selectedCountry && selectedCountry.cities) {
        const cities = selectedCountry.cities.map((city) => ({
          value: city.id,
          label: locale === "en" ? city.name : city.name_ar,
        }));
        setCitiesOptions(cities);
      } else {
        setCitiesOptions([]);
      }
      // Reset city selection when country changes
      setCity("");
    } else {
      setCitiesOptions([]);
      setCity("");
    }
  }, [country, countriesOptions]);

  const handleSubmit = async () => {
    setError("");
    // Validate required fields (example: ensure critical fields are filled)
    if (
      !fullName ||
      !phone ||
      !email ||
      !country ||
      !jobTitle ||
      !brandName ||
      !city
    ) {
      setError(t("fillRequiredFields")); // Use translation for error message
      return;
    }
    const isEnglish = (text) => /^[A-Za-z0-9\s]+$/.test(text);
    if (!isEnglish(brandName)) {
      setError(t("brandNameEnglish"));

      return;
    }
    setIsLoading(true);
    window.scrollTo({ top: 80, behavior: "smooth" });
    const fullPhoneNumber = `+${getCountryCallingCode(countryCode)}${phone}`;

    // Prepare form data
    const formData = {
      name: fullName,
      email,
      business_type: [storeType],
      phone_number: fullPhoneNumber,
      city_id: Number(city),
      country_id: Number(country),
      problems: storeIssues,
      job_title: jobTitle,
      brand_name: brandName,
      stores_count: Number(branchCount),
      is_store: storeStatus,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_REGISTER,
        formData,
      );
      setIsSubmitted(true);
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message || error?.message || null;
      setError(serverMessage || t("submissionError"));
      setIsSubmitted(false);
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

  const goSecondNext = () => {
    if (storeIssues.length < 1) {
      setError(t("fillRequiredFields")); // Use translation for error message
      return;
    }
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goFirstNext = () => {
    if (storeType.length < 1 || storeStatus === null) {
      setError(t("fillRequiredFields")); // Use translation for error message
      return;
    }

    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const storeTypes = [
    { value: "cafe", type: t("storeTypes.cafe"), img: "/cup.svg" },
    {
      value: "restaurant",
      type: t("storeTypes.restaurant"),
      img: "/burger.svg",
    },
    { value: "bakery", type: t("storeTypes.bakery"), img: "/cake.svg" },
    { value: "pharmacy", type: t("storeTypes.pharmacy"), img: "/pharm.svg" },
    {
      value: "supplies",
      type: t("storeTypes.hypermarket"),
      img: "/cart.svg",
    },
    {
      value: "home_business",
      type: t("storeTypes.homeBusiness"),
      img: "/chief.svg",
    },
    { value: "other", type: t("storeTypes.other"), img: "/q-mark.svg" },
  ];

  const steps = [
    {
      label: t("formLabels.storeInfo"),
      icon: (
        <Store
          size={18}
          className={`${locale === "en" && "md:h-[24px] md:w-[24px]"} `}
        />
      ),
      content: (
        <div className="mt-6 w-auto space-y-6 text-right md:w-[720px]">
          {/* نوع المتجر */}
          <div className="mb-10">
            <div className="mb-[20px] flex items-end gap-4">
              <div className="flex h-[37px] w-[35px] items-center justify-center rounded-[8px]  border-2 border-[#14181C]">
                <span className="text-[24px] font-bold">1</span>
              </div>
              <p className="mb-2 font-bold">{t("formLabels.storeType")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {storeTypes.map((item) => (
                <button
                  key={item.type}
                  onClick={() =>
                    setStoreType(item.value === storeType ? "" : item.value)
                  }
                  className={cn(
                    "flex h-[108px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[18px] border text-[14px] font-semibold transition-all duration-300 hover:border-transparent hover:bg-[#C6FFED]",
                    storeType === item.value
                      ? "border-transparent bg-[#C6FFED]"
                      : "border-[#E0E0E0] bg-white",
                  )}
                >
                  <Image
                    src={item.img}
                    width={35}
                    height={35}
                    alt={item.type}
                  />
                  {item.type}
                </button>
              ))}
            </div>
          </div>
          <div className=" md:gap-30 flex  flex-col gap-10 md:flex-row">
            {/* حالة متجرك الآن */}
            <div className="">
              <div className="mb-[20px] flex items-end gap-4">
                <div className="flex h-[37px] w-[35px] items-center justify-center rounded-[8px] border-2 border-[#14181C]">
                  <span className="text-[24px] font-bold">2</span>
                </div>
                <p className="mb-2 font-bold">{t("formLabels.storeStatus")}</p>
              </div>
              <div className="flex gap-6">
                {[
                  { value: 0, label: t("storeStatus.new") },
                  { value: 1, label: t("storeStatus.existing") },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className="hover:border-mainColor flex cursor-pointer items-center gap-2 rounded-[50px] border border-[#E0E0E0] px-5 py-3 text-[16px] font-bold transition-all duration-300"
                  >
                    <input
                      type="radio"
                      name="storeStatus"
                      value={value}
                      checked={storeStatus === value}
                      onChange={() => setStoreStatus(value)}
                      className="peer hidden"
                    />
                    <span className="peer-checked:border-mainColor peer-checked:bg-mainColor h-4 w-4 rounded-full border border-gray-400 transition-colors"></span>
                    {label}
                  </label>
                ))}
              </div>
            </div>
            {/* علامات سحابية */}
            {/* <div>
              <div className="mb-[20px] flex items-end  gap-4">
                <div className="flex h-[37px] w-[35px] items-center justify-center rounded-[8px]  border-2 border-[#14181C]">
                  <span className="text-[24px] font-bold">3</span>
                </div>
                <p className="mb-2 font-bold">
                  {t("formLabels.hasCloudBrands")}
                </p>
              </div>
              <div className="flex gap-6">
                {[t("options.yes"), t("options.no")].map((value) => (
                  <label
                    key={value}
                    className="hover:border-mainColor flex cursor-pointer items-center gap-2 rounded-[50px] border border-[#E0E0E0] px-5 py-3 text-[16px] font-bold transition-all duration-300"
                  >
                    <input
                      type="radio"
                      name="cloudTags"
                      value={value}
                      checked={cloudTags === value}
                      onChange={() => setCloudTags(value)}
                      className="peer hidden"
                    />
                    <span className="peer-checked:border-mainColor peer-checked:bg-mainColor h-4 w-4 rounded-full border border-gray-400 transition-colors"></span>
                    {value}
                  </label>
                ))}
              </div>
            </div> */}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {error && (
              <p className=" w-fit text-[14px] text-red-600">{error}</p>
            )}
            <button
              onClick={goFirstNext}
              className=" flex h-[50px] w-[130px] cursor-pointer items-center justify-center gap-2 rounded-[32px] bg-[#14181C] p-[8px] text-[16px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
            >
              {t("buttons.next")}
              {locale === "ar" ? (
                <ArrowLeft size={20} />
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
          </div>
        </div>
      ),
    },
    {
      label: t("formLabels.additionalInfo"),
      icon: (
        <User
          size={18}
          className={`${locale === "en" && "md:h-[35px] md:w-[35px]"} `}
        />
      ),
      content: (
        <div className="mt-6 w-auto space-y-6 text-right md:w-[720px]">
          <div className="mb-10">
            <div className="mb-[20px] flex items-end gap-4">
              <div className="flex h-[37px] w-[35px] items-center justify-center rounded-[8px] border-2 border-[#14181C]">
                <span className="text-[24px] font-bold">1</span>
              </div>
              <p className="mb-2 font-bold">{t("formLabels.storeIssues")}</p>
            </div>
          </div>
          <div className="flex gap-0">
            <div className="flex flex-wrap gap-3">
              {[
                t("storeIssues.hideProducts"),
                t("storeIssues.missingOrders"),
                t("storeIssues.addProducts"),
                t("storeIssues.priceControl"),
                t("storeIssues.tooManyDevices"),
                t("storeIssues.multipleReports"),
                t("storeIssues.modifierControl"),
                t("storeIssues.manageFromMultipleLocations"),
              ].map((issue) => (
                <label
                  key={issue}
                  className="hover:border-mainColor flex cursor-pointer items-center gap-2 rounded-[50px] border border-[#E0E0E0] px-5 py-3 text-[16px] font-semibold transition-all duration-300"
                >
                  <input
                    type="checkbox"
                    name="storeIssues"
                    value={issue}
                    checked={storeIssues.includes(issue)}
                    onChange={(e) => {
                      setStoreIssues((prev) =>
                        e.target.checked
                          ? [...prev, issue]
                          : prev.filter((item) => item !== issue),
                      );
                    }}
                    className="peer hidden"
                  />
                  <span className="peer-checkedborder-mainColor peer-checked:bg-mainColor h-4 w-4 rounded-full border border-gray-400 transition-colors"></span>
                  {issue}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {error && (
              <p className=" w-fit text-[14px] text-red-600">{error}</p>
            )}
            <div className="flex gap-5">
              <button
                onClick={goBack}
                className=" flex h-[50px] w-[130px] cursor-pointer items-center  justify-center gap-2 rounded-[32px] border border-[#14181C] p-[8px] text-[16px] font-bold transition-all duration-300 hover:scale-105"
              >
                {locale === "ar" ? (
                  <ArrowRight size={20} />
                ) : (
                  <ArrowLeft size={20} />
                )}
                {t("buttons.back")}
              </button>
              <button
                onClick={goSecondNext}
                className=" flex h-[50px] w-[130px] cursor-pointer items-center justify-center gap-2 rounded-[32px] bg-[#14181C] p-[8px] text-[16px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
              >
                {t("buttons.next")}
                {locale === "ar" ? (
                  <ArrowLeft size={20} />
                ) : (
                  <ArrowRight size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: t("formLabels.contactInfo"),
      icon: (
        <Phone
          size={18}
          className={`${locale === "en" && "md:h-[30px] md:w-[30px]"} `}
        />
      ),
      content: (
        <div className="mt-6 w-auto space-y-6 md:w-[720px]">
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={t("placeholders.fullName")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="focus:border-mainColor w-full rounded-[16px] border border-[#E0E0E0] px-4 py-3 text-[16px]  outline-0 placeholder:text-gray-700"
              />
              <input
                type="text"
                placeholder={t("placeholders.jobTitle")}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="focus:border-mainColor w-full rounded-[16px] border border-[#E0E0E0] px-4 py-3 text-[16px]  outline-0 placeholder:text-gray-700"
              />
            </div>

            <input
              type="text"
              placeholder={t("placeholders.brandName")}
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="focus:border-mainColor w-full rounded-[16px] border border-[#E0E0E0] px-4 py-3 text-[16px]  outline-0 placeholder:text-gray-700"
            />
            <Select
              value={
                countriesOptions.find((option) => option.value === country) ||
                null
              }
              onChange={(selected) => {
                setCountry(selected ? selected.value : "");
              }}
              options={countriesOptions}
              isSearchable={true}
              placeholder={
                <span className="text-[16px] text-gray-700">
                  {t("countryPlaceholder")}
                </span>
              }
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
                  boxShadow: state.isFocused ? "0 0 0 0.5px #34f3b6" : "none",
                  "&:hover": {
                    borderColor: state.isFocused
                      ? "0 0 0 0.5px #34f3b6"
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
                  backgroundColor: state.isSelected ? "#34f3b6" : "transparent",
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
              // menuPortalTarget={document.body}
              menuPlacement="auto"
            />
            {/* City Select - Only show when country is selected */}
            {country && (
              <div>
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
                  placeholder={
                    <span className="text-[16px] text-gray-700">
                      {t("cityPlaceholder")} {/* Add this translation */}
                    </span>
                  }
                  className="w-full"
                  classNamePrefix="select"
                  isDisabled={citiesOptions.length === 0}
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
                          ? "0 0 0 0.5px #34f3b6"
                          : "#E0E0E0",
                      },
                      direction: locale === "ar" ? "rtl" : "ltr",
                      opacity: citiesOptions.length === 0 ? 0.6 : 1,
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
            )}
            <div className="flex  flex-col gap-2 md:flex-row">
              <input
                type="text"
                placeholder={t("placeholders.phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="focus:border-mainColor w-full rounded-[16px] border border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-gray-700"
              />
              <Select
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
                onChange={(selected) => setCountryCode(selected.value)}
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
                className="w-full md:w-[250px] "
                classNamePrefix="select"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderRadius: "16px",
                    border: "1px solid #E0E0E0",
                    backgroundColor: "white",
                    padding: "6px",
                    fontSize: "16px",
                    borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0", // Apply mainColor on focus
                    boxShadow: state.isFocused ? "0 0 0 0.5px #34f3b6" : "none", // Optional: add shadow for focus
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
              />
            </div>
            <input
              type="email"
              placeholder={t("placeholders.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-mainColor col-span-2  w-full rounded-[16px] border border-[#E0E0E0] bg-white px-4 py-3  text-[16px] placeholder-gray-700 outline-0"
            />
          </div>
          <div>
            <p className="mb-4 font-semibold"> {t("formLabels.branchCount")}</p>
            <div className="flex h-[48px] w-[127px] items-center justify-center gap-[16px] rounded-[24px] bg-[#F3F5F7] px-[8px] py-[8px]">
              <button
                onClick={handleDecrement}
                className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[32px] bg-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:bg-[#34F34F3B6] disabled:opacity-25 disabled:hover:scale-100 disabled:hover:bg-white"
                disabled={branchCount <= 1}
              >
                <Image src="/minus.svg" width={16} height={16} alt="Minus" />
              </button>
              <span className="text-[24px] font-bold">{branchCount}</span>
              <button
                onClick={handleIncrement}
                className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:bg-[#34F3B6]"
              >
                <Image src="/plus.svg" width={16} height={16} alt="plus" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {error && (
              <p className=" w-fit text-[14px] text-red-600">{error}</p>
            )}
            <div className="flex items-center gap-5">
              <button
                disabled={isLoading}
                onClick={goBack}
                className={` ${isLoading ? "opacity-60 " : " cursor-pointer hover:scale-105"} flex h-[50px] w-[130px]  items-center justify-center  gap-2 rounded-[32px] border border-[#14181C] p-[8px] text-[16px] font-bold transition-all duration-300 `}
              >
                {locale === "ar" ? (
                  <ArrowRight size={20} />
                ) : (
                  <ArrowLeft size={20} />
                )}
                {t("buttons.back")}
              </button>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className={`${isLoading ? "opacity-60 " : " cursor-pointer hover:scale-105"} flex h-[50px] min-w-[130px] items-center  justify-center gap-2 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] p-[8px] px-4 text-[16px] font-bold text-black transition-all duration-300 `}
              >
                {t("buttons.submit")}
              </button>
              {isLoading && <ClipLoader color="black" size={25} />}
            </div>
          </div>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-white bg-opacity-80">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {isSubmitted && !isLoading ? (
        <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-10">
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[27px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] md:h-[160px] md:w-[160px] md:rounded-[50px]">
              <CircleCheck size={70} />
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-center text-[20px] font-semibold md:text-[34px]">
                {t("loginInfo.emailSubtitle")}
              </p>
            </div>
            <div className="mt-2 flex items-center gap-3 md:gap-5">
              <Link
                // href={`/${locale}/login`}
                href={"https://bm.tryblend.net/en/login"}
                className=" hover:bg-mainColor flex h-[40px] cursor-pointer items-center justify-center gap-1 rounded-[32px] border  border-[#a8a8a8] px-4 py-[20px] text-[16px] font-normal transition-all duration-300 hover:border-transparent  md:h-[50px]  md:gap-2 md:px-8"
              >
                <Image
                  src="/user.svg"
                  width={28}
                  height={31}
                  alt="system"
                  className="w-[25px] md:w-[28px]"
                />
                {t("login")}
              </Link>
              <Link
                href={`/${locale}/`}
                className=" hover:bg-mainColor f flex h-[40px] cursor-pointer items-center justify-center gap-2  rounded-[32px] border border-[#a8a8a8] px-4 py-[20px] text-[16px] font-normal transition-all duration-300 hover:border-transparent  md:h-[50px] md:gap-3  md:px-8"
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
        </div>
      ) : (
        <div className="my-5 flex min-h-screen flex-col items-center p-4 md:my-0 md:p-10">
          <div className="flex flex-col">
            <div className="flex justify-center gap-3 md:justify-between">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  <button
                    className={cn(
                      `flex flex-col items-center gap-2 rounded-[16px] p-3 font-medium sm:p-[16px] md:h-[56px] md:w-[175px] md:flex-row md:p-[16px] `,
                      index < currentStep
                        ? "bg-gradient-to-l from-[#34F3B6] to-[#C6FFED]"
                        : index === currentStep
                          ? "border border-[#10C48A] bg-white"
                          : "bg-[#F3F5F7]",
                    )}
                  >
                    {step.icon}
                    <span
                      className={` font-medium ${locale === "ar" ? "text-[12px] md:text-[16px]" : "text-[12px] md:text-[16px]"} `}
                    >
                      {step.label}
                    </span>
                  </button>
                  {index !== 0 &&
                    (locale === "ar" ? (
                      <MoveLeft
                        className={cn(
                          "absolute hidden md:block",
                          "-right-15",
                          index > currentStep
                            ? "text-gray-200"
                            : "text-mainColor",
                        )}
                      />
                    ) : (
                      <MoveRight
                        className={cn(
                          "absolute hidden md:block",
                          "-left-15",
                          index > currentStep
                            ? "text-gray-200"
                            : "text-mainColor",
                        )}
                      />
                    ))}
                </div>
              ))}
            </div>

            <div className="mt-6 ">{steps[currentStep].content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
