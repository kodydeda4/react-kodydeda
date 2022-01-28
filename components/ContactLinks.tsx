import { HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <HStack>
      <Link href={"https://github.com/kodydeda4"}><IconButton aria-label="Github" icon={<FaGithub />} /></Link>
      <Link href={"https://www.linkedin.com/in/kodydeda4/"}><IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} /></Link>
      <Link href={"mailto:kodydeda4@gmail.com"}><IconButton aria-label="Email" icon={<FaTelegramPlane />} /></Link>
    </HStack>
  );
}
