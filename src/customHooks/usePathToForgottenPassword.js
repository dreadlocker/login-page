import { usePathname } from "next/navigation";

const usePathToForgottenPassword = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  paths[paths.length - 1] = "forgotten-password";
  const pathToForgottenPassword = paths.join("/");

  return { pathToForgottenPassword };
};

export default usePathToForgottenPassword;
