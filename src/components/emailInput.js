import { hide, errorText } from "@/pages/login.module.css";

export default function EmailInput({
  onEmailChange,
  email,
  hasCorrectCredentials,
}) {
  return (
    <>
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
        {/* TODO - use different languages ON ALL STRINGS */}
        Wrong email or password!
      </div>
    </>
  );
}
