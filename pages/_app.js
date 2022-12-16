// import { ChakraProvider } from '@chakra-ui/react'
// import { useContext } from 'react'
// import extendTheme from '../styles/theme'

// function MyApp({ Component, pageProps }) {
//     return (
//       <ChakraProvider resetCSS theme={extendTheme}>
//           <Component {...pageProps} />
//       </ChakraProvider>
// )
// }
  
// export default MyApp

// pages/_app.js
import {theme} from '../styles/theme/index.ts'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
