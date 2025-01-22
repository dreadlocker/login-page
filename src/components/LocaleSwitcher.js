"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Fragment } from "react";
import { routing } from "@/i18n/routing";
import Link from "next/link";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { locales } = routing;

  const switchLocale = (newLocale) => {
    const currentLang = pathname.split("/")[1];
    const newPathname = pathname.replace(currentLang, newLocale);
    router.replace(newPathname);
  };

  return (
    <div className="lang-holder">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className="lang-btn"
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
