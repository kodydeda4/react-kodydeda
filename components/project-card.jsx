import {
  Box,
  HStack,
  Image as ChakraImage,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ props: { title, description, tags, icon, link }}) => {
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
        <IconView icon={icon} />
        <DetailView
          title={title}
          description={description}
          tags={tags}
        />
      </HStack>
    </Link>
  );
};

const IconView = ({ icon }) => {
  return (
    <Box
      rounded="lg"
      p={2}
      position="relative"
      overflow="hidden"
      lineHeight={0}
      rounded="lg"
      boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
    >
      <Box
        bg={useColorModeValue("gray.300", "whiteAlpha.300")}
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        opacity={0.25}
      ></Box>
      <ChakraImage
        src={icon}
        height={12}
        width={12}
        layout="fixed"
        rounded="md"
      ></ChakraImage>
    </Box>
  );
};

const DetailView = ({ title, description, tags }) => {
  return (
    <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
      <VStack spacing={0} align="start" flexGrow="1">
        <Text fontWeight="bold" fontSize="md" noOfLines={2}>{title}</Text>
        <Text fontSize="sm">{description}</Text>
        {/* <Text fontSize="xs" color={useColorModeValue("gray.700", "whiteAlpha.700")}>{timeline}</Text> */}
      </VStack>
    </VStack>
  );
};

export default ProjectCard;
