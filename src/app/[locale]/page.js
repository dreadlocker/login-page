"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuth } = useSelector((state) => state.loginReducer);
  const t = useTranslations("Main");

  // State to track if the component has mounted on the client side
  const [isClient, setIsClient] = useState(false);
  // Use useEffect to ensure that the router is only accessed after the component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Optionally render a loading state or nothing before the client-side JS is available
  }

  if (!isAuth) {
    if (router && router.replace) {
      router.replace(`${pathname}/login`);
      return;
    }
  }

  return <div className="absolute-center">{t("homePage")}</div>;
};

export default HomePage;

// import { useTranslations } from "next-intl";

// export default function HomePage() {
//   const t = useTranslations("HomePage");

//   return (
//     <div>
//       <h1>{t("title")}</h1>
//     </div>
