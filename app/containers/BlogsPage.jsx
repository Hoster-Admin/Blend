"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import BlogCardsSection from "@/components/blog/BlogCardsSection";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Image from "next/image";
import Section1 from "@/components/blog/Section1";
import Link from "next/link";
import Section10 from "@/components/home/section10/Section10";
import { ArrowRight, ArrowLeft } from "lucide-react";
function BlogsPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <>
      <Section1 />
      {/* {isSticky && <TabBar isFixed={true} />} */}
      <div className="relative mx-auto mb-20 mt-20 flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:gap-8 md:px-10">
        {/* Sidebar (left on desktop) */}
        <div className="w-full  md:w-[400px]">
          <BlogSidebar />
        </div>
        {/* Main content (cards) */}
        <div className="w-full flex-1">
          <BlogCardsSection />
        </div>
      </div>
      <div className="pt-5">
        <Section10 />
      </div>
    </>
  );
}

export default BlogsPage;
