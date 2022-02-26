import { theme as pro } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    colors: { ...pro.colors, brand: pro.colors.blue },
  }
  // pro
);
export default theme;
