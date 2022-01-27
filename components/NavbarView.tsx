import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function NavbarView() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4} pt={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            onClick={() => toggleColorMode()}
            aria-label="Github"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
          <HStack alignItems={"center"}>
            <IconButton aria-label="Github" icon={<FaGithub />} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
            <IconButton aria-label="Email" icon={<FaTelegramPlane />} />
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
