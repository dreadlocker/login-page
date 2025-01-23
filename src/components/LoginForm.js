import Form from "next/form";
import Link from "next/link";
import EmailInput from "@/components/EmailInput.js";
import Button from "@/components/Button.js";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import useCredentials from "@/customHooks/useCredentials";

export default function LoginForm() {
  const { password } = useSelector((state) => state.loginReducer);
  const t = useTranslations("Main");
  const pathname = usePathname();
  const { onPasswordChange, onCredentialCheck } = useCredentials();

  const paths = pathname.split("/");
  paths[paths.length - 1] = "forgotten-password";
  const pathToForgottenPassword = paths.join("/");

  return (
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
  );
}
