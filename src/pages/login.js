import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import credentials from "@/validCredentials.js";
import Success from "@/components/success.js";
import isEmailValid from "@/helpers/isEmailValid.js";
import { absoluteCenter, hide, errorText } from "@/pages/login.module.css";

export default function Login() {
  const { validEmail, validPassword } = JSON.parse(credentials);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasCorrectCredentials, setHasCorrectCredentials] = useState(null);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onCredentialCheck = () => {
    if (
      !isEmailValid(email) ||
      email !== validEmail ||
      password !== validPassword
    ) {
      setHasCorrectCredentials(false);
      return;
    }

    setHasCorrectCredentials(true);
  };

  return !hasCorrectCredentials ? (
    <Form action={onCredentialCheck} className={absoluteCenter}>
      <input
        onChange={onEmailChange}
        value={email}
        name="email"
        placeholder="Email"
      />
      <div
        className={`${errorText}${
          hasCorrectCredentials === false ? "" : ` ${hide}`
        }`}
      >
        Wrong email or password!
      </div>
      <input
        onChange={onPasswordChange}
        value={password}
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <Link href="/forgotten-password">Forgot Password</Link>
    </Form>
  ) : (
    <Success text={"Successful login."} />
  );
}
