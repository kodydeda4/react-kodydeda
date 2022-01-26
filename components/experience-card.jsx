import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  TagLabel,
  TagRightIcon,
  Box,
  Link,
  AspectRatio,
  Image as ChakraImage,
} from "@chakra-ui/react";

const ExperienceCard = ({
  name,
  platform,
  image,
  link,
  isAffiliate,
  description,
}) => {
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
            src={
              "http://incitrio.com/wp-content/uploads/2015/01/Apple_gray_logo.png"
            }
            height={12}
            width={12}
            layout="fixed"
            rounded="md"
          ></ChakraImage>
        </Box>

        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
        >
          <VStack spacing={0} align="start" flexGrow="1">
            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
              {name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("neutral.900", "neutralD.900")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};


export default ExperienceCard;
