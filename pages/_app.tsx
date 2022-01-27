import { ChakraProvider } from '@chakra-ui/react'
import useCustomTheme from '../hooks/useCustomTheme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={useCustomTheme()}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp