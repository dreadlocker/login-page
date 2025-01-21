import { useDispatch, useSelector } from "react-redux";
import { saveEmail } from "@/redux/features/loginSlice.js";
import { hide, errorText } from "@/components/emailInput.module.css";

export default function EmailInput() {
  const dispatch = useDispatch();
  const { email, isAuth } = useSelector((state) => state.loginReducer);

  const onEmailChange = (e) => {
    dispatch(saveEmail(e.target.value));
  };

  return (
    <>
      <input
        onChange={onEmailChange}
        value={email}
        name="email"
        placeholder="Email"
      />
      <div className={`${errorText}${isAuth === false ? "" : ` ${hide}`}`}>
        {/* TODO - use different languages ON ALL STRINGS */}
        Wrong email or password!
      </div>
    </>
  );
}
