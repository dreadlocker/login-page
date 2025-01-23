import { useDispatch, useSelector } from "react-redux";
import {
  savePassword,
  setIsAuth,
  setSuccessMes,
} from "@/redux/features/loginSlice";
import isEmailValid from "@/assets/isEmailValid.js";
import { useTranslations } from "next-intl";
import credentials from "@/validCredentials.js";

const useCredentials = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.loginReducer);
  const t = useTranslations("Main");
  const { userEmail, userPassword } = JSON.parse(credentials);

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
