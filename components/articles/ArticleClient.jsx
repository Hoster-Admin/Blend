"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loader from "@/components/loader";

const componentsMap = {
  1: () => import("@/components/articles/Article1"),
  2: () => import("@/components/articles/Article2"),
  3: () => import("@/components/articles/Article3"),
  4: () => import("@/components/articles/Article4"),
  5: () => import("@/components/articles/Article5"),
  6: () => import("@/components/articles/Article6"),
  7: () => import("@/components/articles/Article7"),
  8: () => import("@/components/articles/Article8"),
  9: () => import("@/components/articles/Article9"),
  10: () => import("@/components/articles/Article10"),
  11: () => import("@/components/articles/Article11"),
  12: () => import("@/components/articles/Article12"),
  13: () => import("@/components/articles/Article13"),
  14: () => import("@/components/articles/Article14"),
  15: () => import("@/components/articles/Article15"),
  16: () => import("@/components/articles/Article16"),
  17: () => import("@/components/articles/Article17"),
  18: () => import("@/components/articles/Article18"),
  19: () => import("@/components/articles/Article19"),
  20: () => import("@/components/articles/Article20"),
  21: () => import("@/components/articles/Article21"),
  22: () => import("@/components/articles/Article22"),
  23: () => import("@/components/articles/Article23"),
  24: () => import("@/components/articles/Article24"),
  25: () => import("@/components/articles/Article25"),
};

export default function ArticleClient({ initialArticleData }) {
  const { id } = useParams();
  const [ArticleComponent, setArticleComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedId, setLoadedId] = useState(null);
  const t = useTranslations("blog");
  const locale = useLocale();

  const matchedArticle = initialArticleData;

  useEffect(() => {
    if (loadedId !== id) {
      const loadArticleContentComponent = async () => {
        setIsLoading(true);

        const importer = componentsMap[id];
        if (!importer) {
          console.error(`No article component found for ID: ${id}`);
          setArticleComponent(null);
          setIsLoading(false);
          return;
        }

        try {
          const module = await importer();
          // Remove the artificial delay - just load immediately
          setArticleComponent(() => module.default);
          setLoadedId(id);
        } catch (error) {
          console.error(`Error loading article component for ID: ${id}`, error);
          setArticleComponent(null);
        } finally {
          setIsLoading(false);
        }
      };

      setArticleComponent(null);
      loadArticleContentComponent();
    } else {
      // Component already loaded for this ID
      setIsLoading(false);
    }

    // Scroll to top on article change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, loadedId]);

  // Show the page immediately with header section
  return (
    <>
      <div className="flex flex-col">
        {/* Header Section - Shows immediately */}
        <div
          className="relative mb-32 h-[calc(100dvh-100px)] rounded-b-[40px] md:h-[490px]"
          style={{
            backgroundImage: `url(${matchedArticle.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col-reverse items-center gap-10 px-5 py-10 md:flex-row md:justify-between md:px-10 md:py-5">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center gap-5 text-white md:items-start">
                <h1 className="max-w-2xl text-center text-[27px] font-bold md:text-start md:text-[44px] md:text-[36]">
                  {matchedArticle.title}
                </h1>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Dynamic Article Content Section */}
        <div className="gap-15 mx-auto flex max-w-7xl flex-col px-5 md:px-40">
          {isLoading ? (
            // Show loader only while actually loading
            <div className="flex h-48 items-center justify-center">
              <Loader />
            </div>
          ) : ArticleComponent ? (
            <ArticleComponent />
          ) : (
            // Error state
            <div className="flex h-48 items-center justify-center">
              <p className="text-gray-500">Failed to load article content.</p>
            </div>
          )}
        </div>

        {/* Call to Action Section - Shows immediately */}
        <section className="mx-auto my-20 w-full max-w-7xl px-5 md:px-[160px]">
          <div className="flex h-full w-full flex-col items-center justify-between gap-7 rounded-[32px] bg-gradient-to-l from-[#34F3B6] to-[#C6FFED] px-5 py-10 md:h-[100px] md:flex-row md:gap-0 md:px-10 md:py-0">
            <h2 className="text-center text-2xl font-semibold md:text-start md:text-[22px]">
              {t("readyToManageDeliveryApps")}
            </h2>
            <Link
              href={`/${locale}/request-demo`}
              className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#353535]"
            >
              {t("requestDemo")}
              {locale === "ar" ? (
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
