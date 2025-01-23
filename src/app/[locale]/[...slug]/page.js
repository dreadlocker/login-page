import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Custom404() {
  const t = useTranslations("Main");

  return (
    <div className="absolute-center">
      <h1>{t("404Header")}</h1>
      <Link href="/">
        <span>{t("404Link")}</span>
      </Link>
    </div>
  );
}
