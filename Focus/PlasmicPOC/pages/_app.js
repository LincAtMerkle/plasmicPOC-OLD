import { ChakraProvider } from '@chakra-ui/react'
import { useContext } from 'react'
import extendTheme from '../styles/theme'

function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider resetCSS theme={extendTheme}>
        xxx
          <Component {...pageProps} />
      </ChakraProvider>
)
}
  
export default MyApp


