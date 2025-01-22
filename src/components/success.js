import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

export default function Success() {
  const t = useTranslations("Main");
  const { successMes } = useSelector((state) => state.loginReducer);

  return (
    <div className="absolute-center">
      <div>{successMes}</div>
      <br />
      <div>{t("toBeRedirected")}</div>
    </div>
  );
}
