
import { ComponentStyleConfig } from '@chakra-ui/react'

const CardCustom: ComponentStyleConfig = {

  baseStyle: {
    bg: 'card-primary-default-background-color',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
      },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
      },
    lg: {
      fontSize: 'lg',
      px: 16, // <-- these values are tokens from the design system
      py: 14, // <-- these values are tokens from the design system
      },
    },
  variants: {
    filled: {
      // bg: 'card-primary-default-background-color',
      bg: '#ff00ff',
      // color: 'card-primary-default-text-color',
      color: '#ffff00',
    },
  },
  defaultProps: {
    variant: 'filled',
    size: "lg",
  }
}

export default CardCustom