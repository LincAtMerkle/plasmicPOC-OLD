import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'

// ************

// IM INBETWEEN 2 WORLDS - And need to knwo how to just use new theme with Tokens approach 

// Added this back in as removed this IMPORTANT step when did "Chakra Pro Theme Test"
import getChakraSemanticTokens from '../getChakraSemanticTokens'
import figmaTokensJson from '../figmaTokens.json'
// import figmaTokens from './foundations/figmaTokens'// Changed location after "Chakra Pro Theme Test"

const semanticTokens = getChakraSemanticTokens(figmaTokensJson)


// ************


export const theme: Record<string, any> = extendTheme({
  ...foundations,
  // Putr back as Not in "Chakra Pro Theme Test
  semanticTokens,

  components: { ...components },
  colors: { 
    ...baseTheme.colors, 
    brand: baseTheme.colors.red,
    // brand: {
    //   50: figmaTokens.colors.light['color-lime-50'],
    //   100: figmaTokens.colors.light['color-lime-100'],
    //   200: figmaTokens.colors.light['color-lime-200'],
    //   300: figmaTokens.colors.light['color-lime-300'],
    //   400: figmaTokens.colors.light['color-lime-400'],
    //   500: figmaTokens.colors.light['color-lime-500'],
    //   600: figmaTokens.colors.light['color-lime-600'],
    //   700: figmaTokens.colors.light['color-lime-700'],
    //   800: figmaTokens.colors.light['color-lime-800'],
    //   900: figmaTokens.colors.light['color-lime-900'],
    // },
    
    // Not in "Chakra Pro Theme Test"
    // 'card-primary-default-background-color': figmaTokens.colors.light['card-primary-default-background-color'],
   },
  space: {
    '4.5': '1.125rem',
  },
  sizes: {
    // Not in "Chakra Pro Theme Test"
    // 'btn-md-height': figmaTokens.sizes.light['btn-md-height'],
  },
})
