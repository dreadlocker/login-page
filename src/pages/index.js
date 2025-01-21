import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const HomePage = () => {
  const router = useRouter();
  const { isAuth } = useSelector((state) => state.loginReducer);
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
      router.replace("/login");
      return;
    }
  }

  return <div className="absoluteCenter">Home Page</div>;
};

export default HomePage;
