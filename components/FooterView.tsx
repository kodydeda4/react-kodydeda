import {
  Divider, HStack,
  IconButton,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  FaGithub, FaLinkedinIn,
  FaTelegramPlane
} from "react-icons/fa";

export default function FooterView() {
  return (
    <VStack spacing={6} pt={12}>
      <Divider />
      <HStack>
        <IconButton aria-label="Github" icon={<FaGithub />} />
        <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
        <IconButton aria-label="Email" icon={<FaTelegramPlane />} />
      </HStack>
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Kody Deda.</Text>
    </VStack>
  );
}