import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ExperienceView({
  props: { title, description, timeline, icon, link },
}) {
  return (
    <Link width="full" href={link} unstyled>
      <HStack
        p={4}
        rounded="lg"
        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
        borderWidth="1px"
        spacing={4}
      >
        <Image src={icon} height={12} width={12} layout="fixed" rounded="md" />
        <DetailView
          title={title}
          description={description}
          timeline={timeline}
        />
      </HStack>
    </Link>
  );
}

const DetailView = ({ title, description, timeline }) => (
  <VStack align="start" spacing={0}>
    <Text fontWeight="bold" fontSize="md">{title}</Text>
    <Text fontSize="sm">{description}</Text>
    <Text fontSize="xs" color={useColorModeValue("gray.700", "whiteAlpha.700")}>{timeline}</Text>
  </VStack>
);
