import { Box, Image, useColorModeValue } from "@chakra-ui/react";

export default function IconView({ props: { icon } }) {
  return (
    <Box
      rounded="lg"
      p={2}
      position="relative"
      overflow="hidden"
      lineHeight={0}
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
      <Image
        src={icon}
        height={12}
        width={12}
        layout="fixed"
        rounded="md"
      ></Image>
    </Box>
  );
}
