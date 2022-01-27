import {
  ButtonGroup,
  Divider,
  IconButton,
  Stack, Text, VStack
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function FooterView() {
  return (
    <VStack width="full" padding={10}>
      <Divider />
      <Stack
        py="4"
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Kody Deda.</Text>
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Email"
            icon={<FaTelegramPlane fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
    </VStack>
  );
}
