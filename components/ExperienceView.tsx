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

export default function ExperienceView({ experience }) {
  return (
    <Link width="full" href={experience.link} unstyled>
      <HStack
        p={4}
        rounded="lg"
        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
        borderWidth="1px"
        spacing={4}
      >
        <Image src={experience.icon} height={12} width={12} layout="fixed" rounded="xl" shadow={"md"} />
        <DetailView
          title={experience.title}
          description={experience.description}
          timeline={experience.timeline}
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
