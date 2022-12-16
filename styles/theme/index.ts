import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'
import figmaTokens from './foundations/figmaTokens'

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { 
    ...baseTheme.colors, 
    // brand: baseTheme.colors.purple
    brand: {
      50: figmaTokens.colors.light['color-lime-50'],
      100: figmaTokens.colors.light['color-lime-100'],
      200: figmaTokens.colors.light['color-lime-200'],
      300: figmaTokens.colors.light['color-lime-300'],
      400: figmaTokens.colors.light['color-lime-400'],
      500: figmaTokens.colors.light['color-lime-500'],
      600: figmaTokens.colors.light['color-lime-600'],
      700: figmaTokens.colors.light['color-lime-700'],
      800: figmaTokens.colors.light['color-lime-800'],
      900: figmaTokens.colors.light['color-lime-900'],
    },
    
    'card-primary-default-background-color': figmaTokens.colors.light['card-primary-default-background-color'],
   },
  space: {
    '4.5': '1.125rem',
  },
  sizes: {
    'btn-md-height': figmaTokens.sizes.light['btn-md-height'],
  },
})
