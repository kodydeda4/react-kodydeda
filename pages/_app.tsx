import "@fontsource/inter/variable.css";
import ChakraProviderSSR from "../theme/ChakraProviderSSR";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProviderSSR cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </ChakraProviderSSR>
  );
}

export { getServerSideProps } from "../theme/ChakraProviderSSR";
