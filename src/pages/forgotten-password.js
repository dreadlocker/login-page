import Form from "next/form";
import Success from "@/components/success.js";
import { useEffect, useState } from "react";
import EmailInput from "@/components/emailInput.js";
import Button from "@/components/button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { useRouter } from "next/router";
import { absoluteCenter } from "@/pages/login.module.css";

export default function ForgottenPassword() {
  const router = useRouter();
  // TODO - use REDUX
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  // TODO - use REDUX

  useEffect(() => {
    let timer = null;
    if (isValidEmail) {
      timer = setTimeout(() => {
        router.push("/login");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isValidEmail, router]);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onEmailCheck = () => {
    if (!isEmailValid(email)) {
      setIsValidEmail(false);
      return;
    }

    setIsValidEmail(true);
  };

  return !isValidEmail ? (
    <Form action={onEmailCheck} className={absoluteCenter}>
      <EmailInput
        onEmailChange={onEmailChange} // TODO - after REDUX move to EmailInput
        email={email} // TODO - after REDUX save it there
        hasCorrectCredentials={isValidEmail} // TODO - after REDUX save it there
      />
      <Button text={"Submit"} /> {/* TODO - use different languages */}
    </Form>
  ) : (
    <Success text={"Email for password reset was sent."} /> // TODO - after REDUX save it there
  );
}
