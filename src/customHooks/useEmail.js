import { useDispatch, useSelector } from "react-redux";
import {
  setIsAuth,
  setSuccessMes,
  setIsValidEmail,
} from "@/redux/features/loginSlice";
import isEmailValid from "@/assets/isEmailValid.js";
import { useTranslations } from "next-intl";

const useEmail = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.loginReducer);
  const t = useTranslations("Main");

  const onEmailCheck = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      dispatch(setIsAuth(false));
      dispatch(setIsValidEmail(false));
      return;
    }

    dispatch(setIsValidEmail(true));
    dispatch(setSuccessMes(t("passReset")));
  };

  return { onEmailCheck };
};

export default useEmail;
