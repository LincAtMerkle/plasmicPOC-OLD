import { ChakraProvider } from '@chakra-ui/react'
import { ThemeContext } from './plasmic-host'
import { useContext } from 'react'
import theme from '../styles/theme/index'

function MyApp({ Component, pageProps }) {
    const {figmaTokensTheme} = useContext(ThemeContext)
    return (
      <ChakraProvider resetCSS theme={figmaTokensTheme}>
          <Component {...pageProps} />
      </ChakraProvider>
  )
  }
  
  export default MyApp


