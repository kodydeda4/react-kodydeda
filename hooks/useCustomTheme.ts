import { extendTheme } from "@chakra-ui/react";

export default function useCustomTheme() {
  return extendTheme({
    config: {
      useSystemColorMode: true,
    },
  });
}
