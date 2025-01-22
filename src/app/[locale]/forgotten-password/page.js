"use client";
import Form from "next/form";
import Success from "@/components/Success.js";
import { useEffect, useState } from "react";
import EmailInput from "@/components/EmailInput.js";
import Button from "@/components/Button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setSuccessMes } from "@/redux/features/loginSlice";
import { useTranslations } from "next-intl";

export default function ForgottenPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { email } = useSelector((state) => state.loginReducer);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const t = useTranslations("Main");

  const pathname = usePathname();
  const paths = pathname.split("/");
  paths[paths.length - 1] = "login";
  const pathToForgottenPassword = paths.join("/");

  useEffect(() => {
    let timer = null;
    if (isValidEmail) {
      timer = setTimeout(() => {
        router.push(pathToForgottenPassword);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isValidEmail, pathToForgottenPassword, router]);

  const onEmailCheck = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setIsValidEmail(false);
      dispatch(setIsAuth(false));
      return;
    }

    setIsValidEmail(true);
    dispatch(setSuccessMes(t("passReset")));
  };

  return !isValidEmail ? (
    <Form onSubmit={onEmailCheck} className="absolute-center">
      <EmailInput />
      <Button text={t("submit")} />
    </Form>
  ) : (
    <Success />
  );
}
