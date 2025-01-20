import { absoluteCenter } from "@/pages/login.module.css";

export default function Success({ text = "Success" }) {
  return <div className={absoluteCenter}>{text}</div>;
}
