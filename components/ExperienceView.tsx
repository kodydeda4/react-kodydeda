import {
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AppIcon from "./AppIcon";

export default function ExperienceView({ props }) {
  return (
    <Link href={props.link} width="full">
      <HStack
        padding={4}
        spacing={4}
        rounded="lg"
        borderWidth="1px"
        background={useColorModeValue("gray.100", "whiteAlpha.100")}
      >
        <AppIcon src={props.icon} />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold" fontSize="md">{props.title}</Text>
          <Text fontSize="sm">{props.description}</Text>
          <Text fontSize="xs" color={useColorModeValue("gray.700", "whiteAlpha.700")}>{props.timeline}</Text>
        </VStack>
      </HStack>
    </Link>
  );
}
