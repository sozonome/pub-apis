import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useRouter } from "next/router";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useRouter();

  if (pathname === "/all") {
    return null;
  }

  return (
    <IconButton
      aria-label="theme toggle"
      background="none"
      icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
