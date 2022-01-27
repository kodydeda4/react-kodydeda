import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React from "react";
import IconView from "./IconView";

export default function ExperienceView({
  props: { title, description, timeline, icon, link },
}) {
  return (
    <Link width="full" href={link} unstyled>
      <HStack
        p={4}
        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
        rounded="lg"
        borderWidth="1px"
        borderColor={useColorModeValue("neutral.400", "neutralD.400")}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
      >
        <IconView props={{ icon: icon }} />
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
  <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
    <VStack spacing={0} align="start" flexGrow="1">
      <Text fontWeight="bold" fontSize="md" noOfLines={2}>
        {title}
      </Text>
      <Text fontSize="sm">{description}</Text>
      <Text
        fontSize="xs"
        color={useColorModeValue("gray.700", "whiteAlpha.700")}
      >
        {timeline}
      </Text>
    </VStack>
  </VStack>
);
