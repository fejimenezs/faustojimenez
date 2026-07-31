import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-[#050507] px-6 text-center text-[#F4F4F6]">
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
        {t("heroTitle")}
      </h1>
      <p className="max-w-xl text-lg text-[#9A9AA5]">{t("heroSubtitle")}</p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-full bg-gradient-to-r from-[#4F6BFF] to-[#8B5CF6] px-6 py-3 font-medium text-white">
          {t("ctaPrimary")}
        </button>
        <button className="rounded-full border border-white/20 px-6 py-3 font-medium">
          {t("ctaSecondary")}
        </button>
      </div>
    </main>
  );
}
