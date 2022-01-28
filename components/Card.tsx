import { HStack, useColorModeValue } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <HStack
      padding={4}
      spacing={4}
      rounded="lg"
      borderWidth="1px"
      background={useColorModeValue("gray.100", "whiteAlpha.100")}
    >
      {children}
    </HStack>
  );
}
