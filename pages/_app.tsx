import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import { AppProps } from "next/app";
import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
