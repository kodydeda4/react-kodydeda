import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export default function useAppTheme() {
  return extendTheme({
    config: {
      useSystemColorMode: true,
    },
  });
}
