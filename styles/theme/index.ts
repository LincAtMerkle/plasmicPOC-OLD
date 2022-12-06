import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'


export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { 
    ...baseTheme.colors, 
    brand: baseTheme.colors.purple
    // brand: {
    //   50: "#feefeb",
    //   100: "#fcded6",
    //   200: "#fbcec2",
    //   300: "#f9bdae",
    //   400: "#f8ad9a",
    //   500: "#ff00ff",
    //   600: "#f58b71",
    //   700: "#f47b5d",
    //   800: "#f26b48",
    //   900: "#F15A34",
    // }
   },
  space: {
    '4.5': '1.125rem',
  },
})
