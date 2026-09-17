import React from "react";
import { useTranslations, useLocale } from "next-intl";

function PrivacyPolicy() {
  const t = useTranslations("privacy");
  const locale = useLocale();

  // Helper to render list items from numbered keys
  const renderListItems = (section) => {
    const items = t.raw(`${section}.items`); // Use t.raw to get the raw object
    if (!items || typeof items !== "object") {
      console.warn(`No items found for ${section}.items`);
      return null;
    }
    return Object.keys(items)
      .map((key) => {
        const item = t(`${section}.items.${key}`);
        if (!item || item === `${section}.items.${key}`) {
          console.warn(`Translation missing for ${section}.items.${key}`);
          return null;
        }
        return <li key={key}>{item}</li>;
      })
      .filter(Boolean); // Remove null entries
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="prose prose-lg mx-auto text-gray-700">
        <h1
          className={`mb-6 text-center text-3xl font-bold ${locale === "ar" ? "text-right" : "text-left"}`}
        >
          {t("title")}
        </h1>
        <p
          className={`mb-8 text-sm text-gray-500 ${locale === "ar" ? "text-right" : "text-left"}`}
        >
          {t("lastUpdated")}
        </p>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("introduction.title")}
          </h2>
          <p>{t("introduction.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("informationCollected.title")}
          </h2>
          <p>{t("informationCollected.content")}</p>
          <ul className="mt-2 list-disc pl-6">
            {renderListItems("informationCollected")}
          </ul>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("useOfInformation.title")}
          </h2>
          <p>{t("useOfInformation.content")}</p>
          <ul className="mt-2 list-disc pl-6">
            {renderListItems("useOfInformation")}
          </ul>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("cookies.title")}
          </h2>
          <p>{t("cookies.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("thirdPartyDisclosure.title")}
          </h2>
          <p>{t("thirdPartyDisclosure.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("dataSecurity.title")}
          </h2>
          <p>{t("dataSecurity.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("yourRights.title")}
          </h2>
          <p>{t("yourRights.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("changes.title")}
          </h2>
          <p>{t("changes.content")}</p>
        </div>

        <div className="mb-8">
          <h2
            className={`mb-4 text-xl font-semibold ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("contact.title")}
          </h2>
          <p>{t("contact.content")}</p>
        </div>

        <div className="mb-8">
          <p
            className={` ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            <strong>{t("loginConsent")}</strong>
          </p>
        </div>

        {locale === "ar" && (
          <div className="text-right">
            <p>{t("signature")}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PrivacyPolicy;
