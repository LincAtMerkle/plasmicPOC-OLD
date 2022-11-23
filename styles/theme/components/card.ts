
import { ComponentStyleConfig } from '@chakra-ui/react'

const Card: ComponentStyleConfig = {
  baseStyle: {
    // fontWeight: 'btn-font-weight',
    // width: 'auto',
    // borderRadius: 'btn-border-radius',
    // fontFamily: 'btn-font-family',
    // border: 'btn-border-width',
    // borderStyle: 'solid',
    // display: 'flex',
    // flexDirection: 'column',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 0, // <-- px is short for paddingLeft and paddingRight
      py: 0, // <-- py is short for paddingTop and paddingBottom
      },
    md: {
      fontSize: 'md',
      px: 10, // <-- these values are tokens from the design system
      py: 10, // <-- these values are tokens from the design system
      },
    lg: {
      fontSize: 'lg',
      px: 100, // <-- these values are tokens from the design system
      py: 100, // <-- these values are tokens from the design system
      },
    },
  variants: {
    primary: {
      // bg: 'card-primary-default-background-color',
      bg: '#ff00ff',
      // color: 'card-primary-default-text-color',
      color: '#ffff00',
      size: "lg",
    },
    outline: {
      // bg: 'card-primary-default-background-color',
      bg: 'red',
      // color: 'card-primary-default-text-color',
      color: '#ffff00',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: "lg",
    // bg: 'lime',
  }
}

export default Card