import { useDispatch, useSelector } from "react-redux";
import { saveEmail } from "@/redux/features/loginSlice.js";
import { hide, errorText } from "@/components/emailInput.module.css";
import { useTranslations } from "next-intl";

export default function EmailInput() {
  const dispatch = useDispatch();
  const { email, isAuth } = useSelector((state) => state.loginReducer);
  const t = useTranslations("Main");

  const onEmailChange = (e) => {
    dispatch(saveEmail(e.target.value));
  };

  return (
    <>
      <input
        onChange={onEmailChange}
        value={email}
        name="email"
        placeholder={t("email")}
        autoFocus
      />
      <div className={`${errorText}${isAuth === false ? "" : ` ${hide}`}`}>
        {t("wrongCredentials")}
      </div>
    </>
  );
}
