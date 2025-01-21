import Form from "next/form";
import Link from "next/link";
import { useEffect, useState } from "react";
import credentials from "@/validCredentials.js";
import Success from "@/components/success.js";
import EmailInput from "@/components/emailInput.js";
import Button from "@/components/button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { useRouter } from "next/router";
import { absoluteCenter } from "@/pages/login.module.css"; // TODO - make global class file

export default function Login() {
  const router = useRouter();
  const { userEmail, userPassword } = JSON.parse(credentials);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // TODO - use REDUX
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasCorrectCredentials, setHasCorrectCredentials] = useState(null);
  // TODO - use REDUX

  useEffect(() => {
    let timer = null;
    if (hasCorrectCredentials) {
      timer = setTimeout(() => {
        // TODO - change isUserLogged in REDUX to true
        router.replace("/");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hasCorrectCredentials, router]);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onCredentialCheck = () => {
    if (
      !isEmailValid(email) ||
      email !== userEmail ||
      password !== userPassword
    ) {
      setHasCorrectCredentials(false);
      // TODO - change isUserLogged in REDUX to false
      return;
    }

    setHasCorrectCredentials(true);
  };

  return !hasCorrectCredentials ? (
    <Form action={onCredentialCheck} className={absoluteCenter}>
      <EmailInput
        onEmailChange={onEmailChange} // TODO - after REDUX move to EmailInput
        email={email} // TODO - after REDUX save it there
        hasCorrectCredentials={hasCorrectCredentials} // TODO - after REDUX save it there
      />
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
