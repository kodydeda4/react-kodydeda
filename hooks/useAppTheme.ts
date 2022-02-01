import { extendTheme } from "@chakra-ui/react";

export default function useAppTheme() {
  return extendTheme({
    config: {
      useSystemColorMode: true,
    },
  });
}
