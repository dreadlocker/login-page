import Form from "next/form";
import Success from "@/components/success.js";
import { useEffect, useState } from "react";
import EmailInput from "@/components/emailInput.js";
import Button from "@/components/button.js";
import isEmailValid from "@/assets/isEmailValid.js";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { absoluteCenter } from "@/pages/login.module.css";
import { setIsAuth } from "@/redux/features/loginSlice";

export default function ForgottenPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { email } = useSelector((state) => state.loginReducer);
  const [isValidEmail, setIsValidEmail] = useState(null);

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

  const onEmailCheck = () => {
    if (!isEmailValid(email)) {
      setIsValidEmail(false);
      dispatch(setIsAuth(false));
      return;
    }

    setIsValidEmail(true);
  };

  return !isValidEmail ? (
    <Form action={onEmailCheck} className={absoluteCenter}>
      <EmailInput />
      <Button text={"Submit"} /> {/* TODO - use different languages */}
    </Form>
  ) : (
    <Success text={"Email for password reset was sent."} /> // TODO - after REDUX save it there
  );
}
