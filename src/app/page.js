"use client";
import { page } from "@/app/page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  // TODO - use REDUX
  const isAuth = false;
  // TODO - use REDUX
  if (!isAuth) {
    redirect("/login");
    return;
  }

  return <div className={page}>Home Page</div>;
}
