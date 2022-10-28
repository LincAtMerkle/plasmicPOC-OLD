import { ChakraProvider } from '@chakra-ui/react'
import { ThemeContext } from './plasmic-host'
import { useContext } from 'react'
import extendTheme from '../styles/theme'

function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider resetCSS theme={extendTheme}>
          <Component {...pageProps} />
      </ChakraProvider>
      // <Component {...pageProps} />
)
  }
  
  export default MyApp


