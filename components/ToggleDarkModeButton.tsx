import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ToggleDarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={() => toggleColorMode()}
      aria-label="Github"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
}
