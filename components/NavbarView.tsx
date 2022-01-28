import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function NavbarView() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack w="full">
      <IconButton
        onClick={() => toggleColorMode()}
        aria-label="Github"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
      <Spacer />
      <IconButton aria-label="Github" icon={<FaGithub />} />
      <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
      <IconButton aria-label="Email" icon={<FaTelegramPlane />} />
    </HStack>
  );
}
