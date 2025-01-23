// "use client";
import Form from "next/form";
import EmailInput from "@/components/EmailInput.js";
import Button from "@/components/Button.js";
import { useTranslations } from "next-intl";
import useEmail from "@/customHooks/useEmail";

export default function ForgottenPasswordForm() {
  const { onEmailCheck } = useEmail();
  const t = useTranslations("Main");

  return (
    <Form onSubmit={onEmailCheck} className="absolute-center">
      <EmailInput />
      <Button text={t("submit")} />
    </Form>
  );
}
