import { ChakraProvider } from "@chakra-ui/react";
import useAppTheme from "../hooks/useAppTheme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={useAppTheme()}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
