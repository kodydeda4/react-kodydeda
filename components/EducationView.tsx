import {
  HStack,
  Link,
  Text,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function EducationView({ education }) {
  return (
    <Link width="full" href={education.link} unstyled>
      <HStack
        p={4}
        rounded="lg"
        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
        borderWidth="1px"
        spacing={4}
      >
        <Image src={education.icon} height={12} width={12} layout="fixed" rounded="xl" shadow={"md"} />
        <DetailView
          degree={education.degree}
          institution={education.institution}
          timeline={education.timeline}
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
