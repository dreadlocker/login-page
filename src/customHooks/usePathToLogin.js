import { usePathname } from "next/navigation";

const usePathToLogin = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  paths[paths.length - 1] = "login";
  const pathToLogin = paths.join("/");

  return { pathToLogin };
};

export default usePathToLogin;
