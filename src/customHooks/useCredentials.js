import { useDispatch, useSelector } from "react-redux";
import {
  savePassword,
  setIsAuth,
  setSuccessMes,
} from "@/redux/features/loginSlice";
import isEmailValid from "@/assets/isEmailValid.js";
import credentials from "@/validCredentials.js";
import { useTranslations } from "next-intl";

const useCredentials = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.loginReducer);
  const { userEmail, userPassword } = JSON.parse(credentials);
  const t = useTranslations("Main");

  const onPasswordChange = (e) => {
    dispatch(savePassword(e.target.value));
  };

  const onCredentialCheck = (e) => {
    e.preventDefault();

    if (
      !isEmailValid(email) ||
      email !== userEmail ||
      password !== userPassword
    ) {
      dispatch(setIsAuth(false));
      return;
    }

    dispatch(setIsAuth(true));
    dispatch(setSuccessMes(t("successfulLogin")));
  };

  return { onPasswordChange, onCredentialCheck };
};

export default useCredentials;
