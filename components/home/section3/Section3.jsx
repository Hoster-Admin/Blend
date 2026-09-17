"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

function Section3() {
  const t = useTranslations("HomePage");

  const StatBox = ({ icon, end, suffix, label, width, decimals = 0 }) => {
    const statBoxRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        { threshold: 0.3 },
      );

      if (statBoxRef.current) {
        observer.observe(statBoxRef.current);
      }

      return () => {
        if (statBoxRef.current) {
          observer.unobserve(statBoxRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={statBoxRef}
        className={`group flex h-[206px] w-[90%] items-center  justify-center gap-5 rounded-[32px] border border-black/5 bg-white p-4 shadow-[0_2px_20px_rgba(20,24,28,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(20,24,28,0.08)] md:w-full`}
      >
        <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#E0FBC0] transition-all duration-300 group-hover:scale-105">
          <Image src={icon} alt={label} width={40} height={40} priority />
        </div>
        <div className="flex max-w-fit flex-col  gap-1">
          {inView ? (
            <CountUp
              end={end}
              duration={2}
              // decimals={decimals}
              suffix={suffix}
              className="w-[132px] text-4xl font-bold text-[#00271A] md:text-[40px]"
            />
          ) : (
            <span className="text-4xl font-bold text-[#00271A] md:text-[40px]">
              0
            </span>
          )}
          <p className="text-lg font-medium text-[#00271A] md:text-[24px]">
            {label}
          </p>
        </div>
      </div>
    );
  };

  const statBoxes = useMemo(
    () => (
      <>
        <StatBox
          icon="/box-new.svg"
          end={3}
          // decimals={1}
          suffix="M+"
          label={t("processedOrders")}
        />
        <StatBox
          icon="/branch-new.svg"
          end={1500}
          suffix="+"
          label={t("branches")}
        />
        <StatBox
          icon="/rocket-new.svg"
          end={550}
          suffix="+"
          label={t("brands")}
        />
      </>
    ),
    [t],
  );

  return (
    <AnimatedSection>
      <div className="mx-auto mb-32 flex max-w-7xl flex-col items-center justify-between gap-10 px-5 md:flex-row md:px-10">
        {statBoxes}
      </div>
    </AnimatedSection>
  );
}

export default Section3;
