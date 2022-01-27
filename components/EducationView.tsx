import {
  HStack,
  Link,
  Text,
  Image,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React from "react";

export default function EducationView({
  props: { degree, institution, timeline, icon, link },
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
          degree={degree}
          institution={institution}
          timeline={timeline}
        />
      </HStack>
    </Link>
  );
}

const DetailView = ({ degree, institution, timeline }) => (
  <VStack align="start" spacing={0}>
    <Text fontWeight="bold" fontSize="md">{degree}</Text>
    <Text fontSize="sm">{institution}</Text>
    <Text fontSize="xs" color={useColorModeValue("gray.700", "whiteAlpha.700")}>{timeline}</Text>
  </VStack>
);
