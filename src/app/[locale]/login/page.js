"use client";
import LoginForm from "@/components/LoginForm";
import Success from "@/components/Success.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Login() {
  const { isAuth } = useSelector((state) => state.loginReducer);
  const router = useRouter();

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
  }, [isAuth, router]);

  return !isAuth ? <LoginForm /> : <Success />;
}
