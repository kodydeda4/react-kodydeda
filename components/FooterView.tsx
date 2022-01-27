import {
  ButtonGroup,
  Divider,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function FooterView() {
  return (
    <VStack width="full" py="4" padding={10}>
      <Divider />
      <Buttons />
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Kody Deda.</Text>
    </VStack>
  );
}

const Buttons = () => (
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
);
