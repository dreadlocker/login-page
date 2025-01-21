import { btn } from "@/components/button.module.css";

export default function Button({ text }) {
  return (
    <button className={btn} type="submit">
      {text}
    </button>
  );
}
