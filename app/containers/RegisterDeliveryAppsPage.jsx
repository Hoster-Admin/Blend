"use client";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Select from "react-select";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { ClipLoader } from "react-spinners";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
const sharedSelectStyles = (locale) => ({
  control: (base, state) => ({
    ...base,
    borderRadius: "32px",
    border: "1px solid #E0E0E0",
    backgroundColor: "white",
    height: "40px",
    minHeight: "40px",
    fontSize: "16px",
    borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0",
    boxShadow: state.isFocused ? "0 0 0 0.5px #34f3b6" : "none",
    "&:hover": { borderColor: state.isFocused ? "#34f3b6" : "#E0E0E0" },
    direction: locale === "ar" ? "rtl" : "ltr",
  }),

  valueContainer: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0 40px",
    position: "relative",
  }),

  placeholder: (base) => ({
    ...base,
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
    color: "#A2A2A2",
    margin: 0,
    padding: 0,
  }),

  singleValue: (base, { data }) => ({
    ...base,
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: 0,
    width: "100%",
    "&::before": {
      content: '""',
      display: "inline-block",
      width: "25px",
      height: "25px",
      backgroundImage: `url(${data.image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flexShrink: 0,
    },
  }),

  option: (base, { data, isSelected }) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px 12px",
    backgroundColor: isSelected ? "#e6fffa" : "transparent",
    color: "black",
    cursor: "pointer",
    direction: locale === "ar" ? "rtl" : "ltr",
    ...(data.image && {
      "&::before": {
        content: '""',
        display: "block",
        width: "25px",
        height: "25px",
        backgroundImage: `url(${data.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    }),
    "&:hover": { backgroundColor: "#e6fffa" },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "0 8px",
  }),

  clearIndicator: (base) => ({ ...base }),

  indicatorSeparator: () => ({ display: "none" }),

  menu: (base) => ({
    ...base,
    borderRadius: "12px",
    zIndex: 9999,
  }),
});
function RegisterDeliveryAppsPage() {
  const locale = useLocale();
  const t = useTranslations("RegisterDeliveryApps");
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [branchCount, setBranchCount] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [zone, setZone] = useState("");
  const [app, setApp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!fullName || !brandName || !email || !phone || !zone || !app) {
      setError(t("requiredFields"));
      return;
    }

    setIsLoading(true);

    const payload = {
      App: app.value ?? app,
      "Brand Name": brandName,
      "Full Name": fullName,
      "Contact Phone": phone,
      "Contact Email": email,
      "Number of Locations": branchCount,
      Zone: zone.value ?? zone,
    };

    try {
      const res = await fetch("/api/sendToSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed");

      // reset form
      setFullName("");
      setBrandName("");
      setEmail("");
      setPhone("");
      setZone("");
      setApp("");
      setBranchCount(1);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(t("submitFailed"));
    } finally {
      setIsLoading(false);
    }
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    setBranchCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleIncrement = (e) => {
    e.preventDefault();
    setBranchCount((prev) => prev + 1);
  };

  const zonesOptions = [
    { value: "المنطقة الوسطى", label: t("zones.central") },
    { value: "المنطقة الشرقية", label: t("zones.eastern") },
    { value: "المنطقة الشمالية", label: t("zones.northern") },
    { value: "المنطقة الغربية", label: t("zones.western") },
    { value: "المنطقة الجنوبية", label: t("zones.southern") },
  ];

  const appsOptions = [
    {
      value: "هنقرستيشن",
      label: t("apps.hangerStation"),
      image: "/integrations/1.webp",
    },
    {
      value: "جاهز",
      label: t("apps.jahez"),
      image: "/integrations/3.webp",
    },
    {
      value: "تو يو",
      label: t("apps.toYou"),
      image: "/integrations/4.webp",
    },
    {
      value: "كيتا",
      label: t("apps.Keeta"),
      image: "/integrations/7.webp",
    },
    {
      value: "مستر مندوب",
      label: t("apps.mrMandoob"),
      image: "/integrations/14.webp",
    },
    {
      value: "ذا شفز",
      label: t("apps.theChefz"),
      image: "/integrations/8.webp",
    },
    {
      value: "نينجا",
      label: t("apps.ninga"),
      image: "/integrations/9.webp",
    },
  ];
  return (
    <AnimatedSection>
      <div className="relative mx-auto flex max-w-7xl items-center justify-center bg-[#F4F4F4] p-5 py-10 md:p-10">
        {success ? (
          <AnimatedSection>
            {" "}
            <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
              <div className="flex flex-col items-center gap-10">
                <Image
                  src="/successRequestApp.svg"
                  width={106}
                  height={106}
                  alt="success"
                />

                <div className="flex flex-col items-center">
                  <p className="max-w-3xl text-center text-[24px] font-semibold md:text-[34px]">
                    {t("formSubmitted")}
                  </p>
                </div>
                <Link
                  href={`/${locale}/`}
                  className="hover:bg-mainColor mt-2 flex h-[40px] cursor-pointer items-center justify-center gap-2 rounded-[32px] border border-[#a8a8a8] px-4 py-[20px] text-[16px] font-normal transition-all duration-300 hover:border-transparent md:h-[50px] md:gap-3 md:px-8"
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
          </AnimatedSection>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10 md:gap-14">
            {/* Title */}
            <div>
              <h1 className="mb-2 text-center text-[30px] font-medium md:text-[48px]">
                {t("headline")}
              </h1>
              <p className="text-center text-[18px] md:text-[32px]">
                {t("desc")}
              </p>
            </div>
            {/* Title */}
            {/* Form */}
            <div className="flex w-full items-center justify-center rounded-[32px] bg-white p-6 md:w-[753] md:p-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 md:w-[450px]"
              >
                <input
                  type="text"
                  value={fullName}
                  placeholder={t("placeholders.fullName")}
                  onChange={(e) => setFullName(e.target.value)}
                  className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                />
                <input
                  type="text"
                  value={brandName}
                  placeholder={t("placeholders.brandName")}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                />

                <Select
                  value={zone}
                  onChange={setZone}
                  options={zonesOptions}
                  placeholder={t("placeholders.zone")}
                  styles={sharedSelectStyles(locale)}
                />

                <Select
                  value={app}
                  onChange={setApp}
                  options={appsOptions}
                  placeholder={t("placeholders.apps")}
                  styles={sharedSelectStyles(locale)}
                  isRtl={locale === "ar"} // مهم جداً عشان التنسيق يظبط تلقائي
                />
                <input
                  type="text"
                  value={phone}
                  placeholder={t("placeholders.phone")}
                  onChange={(e) => setPhone(e.target.value)}
                  className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                />
                <input
                  type="email"
                  value={email}
                  placeholder={t("placeholders.email")}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:border-mainColor w-full rounded-[32px] border  border-[#E0E0E0] bg-white px-4 py-3 text-[16px] outline-0 placeholder:text-center placeholder:text-[18px]  placeholder:text-[#A2A2A2]"
                />
                <div className="mb-6 flex items-center justify-between">
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
                  <div className="py-2">
                    {error && (
                      <p className=" w-fit text-[14px] text-red-600">{error}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`${isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 hover:opacity-90 "} flex h-[50px] min-w-[150px] max-w-[220px]  items-center  justify-center gap-2 rounded-[32px] bg-black p-[8px] px-6 text-[16px] font-bold text-white transition-all duration-300 `}
                  >
                    {t("buttons.submit")}
                    {isLoading && <ClipLoader color="white" size={22} />}
                  </button>
                  <p className="mt-8 text-center">{t("note")}</p>
                </div>
              </form>
            </div>

            {/* Form */}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default RegisterDeliveryAppsPage;
