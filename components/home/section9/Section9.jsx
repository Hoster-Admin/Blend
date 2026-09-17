"use client";

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

import clsx from "clsx";
function Section9() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("HomePage");
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer"),
    },
    {
      question: t("faq5.question"),
      answer: t("faq5.answer"),
    },
    {
      question: t("faq6.question"),
      answer: t("faq6.answer"),
    },
    {
      question: t("faq7.question"),
      answer: t("faq7.answer"),
    },
  ];

  return (
    <AnimatedSection>
      <section className="gap-15  mx-auto mb-24 flex max-w-7xl flex-col justify-between px-5 md:mb-32 md:flex-row md:gap-0 md:px-10">
        {/* Right Section */}
        <div className="flex flex-col  md:w-[40%] ">
          <h2 className=" mb-8 text-4xl font-semibold text-[#00271A] md:text-[40px]">
            {t("faqTitle")}
          </h2>
          <p className=" font-regular text-[20px] text-gray-600 md:w-[300px] md:text-[20px]">
            {t("faqDesc")}
          </p>
          <a
            href="https://wa.me/966556830693"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="w-fit cursor-pointer border-b text-[20px] text-[#00271A] transition-all hover:font-medium hover:text-[#7FE22B] md:text-[20px]">
              {t("contactUs")}
            </p>
          </a>
        </div>

        {/* Right Section */}

        {/* Left Section */}
        <div className="flex flex-col md:w-[60%]">
          <div className="flex flex-col gap-[16px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={clsx(
                  "rounded-[24px] border bg-white p-4 shadow-[0_2px_20px_rgba(20,24,28,0.04)] transition-all duration-300 md:p-6",
                  openIndex === index
                    ? "border-[#7FE22B]/30 bg-[#E0FBC0]/40"
                    : "border-black/5",
                )}
              >
                <button
                  aria-label="Open Answer"
                  onClick={() => toggleItem(index)}
                  className="flex w-full cursor-pointer items-center justify-between"
                >
                  <span className=" text-start text-[17px] font-medium text-[#00271A] md:text-[20px]">
                    {faq.question}
                  </span>
                  <span
                    className={clsx(
                      "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300",
                      openIndex === index
                        ? "bg-[#7FE22B] text-white"
                        : "bg-[#00271A] text-white",
                    )}
                  >
                    <ChevronUp
                      size={18}
                      className={clsx(
                        "transform transition-transform duration-300",
                        { "rotate-180": openIndex !== index },
                      )}
                    />
                  </span>
                </button>

                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index
                      ? "mt-3 max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <p className="max-w-[85%] text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left Section */}
      </section>
    </AnimatedSection>
  );
}

export default Section9;
