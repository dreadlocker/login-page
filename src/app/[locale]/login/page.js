"use client";
import Form from "next/form";
import Link from "next/link";
import { useEffect } from "react";
import credentials from "@/validCredentials.js";
import Success from "@/components/Success.js";
import EmailInput from "@/components/EmailInput.js";
import Button from "@/components/Button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  savePassword,
  setIsAuth,
  setSuccessMes,
} from "@/redux/features/loginSlice";
import { useTranslations } from "next-intl";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuth, email, password } = useSelector(
    (state) => state.loginReducer
  );
  const t = useTranslations("Main");
  const pathname = usePathname();

  const paths = pathname.split("/");
  paths[paths.length - 1] = "forgotten-password";
  const pathToForgottenPassword = paths.join("/");

  const { userEmail, userPassword } = JSON.parse(credentials);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    let timer = null;
    if (isAuth) {
      timer = setTimeout(() => {
        router.replace("/");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, isAuth, router]);

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

  return !isAuth ? (
    <Form onSubmit={onCredentialCheck} className="absolute-center">
      <EmailInput />
      <input
        onChange={onPasswordChange}
        value={password}
        name="password"
        type="password"
        placeholder={t("password")}
      />
      <Button text={t("login")} />
      <Link href={pathToForgottenPassword}>{t("forgottenPassword")}</Link>
    </Form>
  ) : (
    <Success />
  );
}
