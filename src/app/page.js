import { page } from "@/app/page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  // TODO - use REDUX
  const isUserLogged = false;
  // TODO - use REDUX
  if (!isUserLogged) {
    redirect("/login");
    return;
  }

  return <div className={page}>Home Page</div>;
}
