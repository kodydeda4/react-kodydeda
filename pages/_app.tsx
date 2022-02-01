import { ChakraProvider, Link } from '@chakra-ui/react'
import { Head } from 'next/document'
import useAppTheme from '../hooks/useAppTheme'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={useAppTheme()}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App