"use client";
import Form from "next/form";
import Link from "next/link";
import { useEffect, useState } from "react";
import credentials from "@/validCredentials.js";
import Success from "@/components/success.js";
import EmailInput from "@/components/emailInput.js";
import Button from "@/components/button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { savePassword, setIsAuth } from "@/redux/features/loginSlice";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuth, email, password } = useSelector(
    (state) => state.loginReducer
  );

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
  };

  return !isAuth ? (
    <Form onSubmit={onCredentialCheck} className="absoluteCenter">
      <EmailInput />
      <input
        onChange={onPasswordChange}
        value={password}
        name="password"
        type="password"
        placeholder="Password"
      />
      {/* TODO - use different languages ON ALL STRINGS */}
      <Button text={"Login"} />
      <Link href="/forgotten-password">Forgot Password</Link>
    </Form>
  ) : (
    <Success text={"Successful login."} /> // TODO - after REDUX save it there
  );
}
