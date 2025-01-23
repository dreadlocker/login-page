"use client";
import Success from "@/components/Success.js";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useEmail from "@/customHooks/useEmail";
import usePathToLogin from "@/customHooks/usePathToLogin";
import ForgottenPasswordForm from "@/components/ForgottenPasswordForm";
import { useSelector } from "react-redux";

export default function ForgottenPassword() {
  const router = useRouter();
  const { pathToLogin } = usePathToLogin();
  const { isValidEmail } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    let timer = null;
    if (isValidEmail) {
      timer = setTimeout(() => {
        router.push(pathToLogin);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isValidEmail, pathToLogin, router]);

  return !isValidEmail ? <ForgottenPasswordForm /> : <Success />;
}
