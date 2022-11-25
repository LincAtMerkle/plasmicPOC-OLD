
// This function creates a set of function that helps us create multipart component styles.
// const helpers = createMultiStyleConfigHelpers(['Card'])

import { defineStyleConfig } from "@chakra-ui/system"

const Card  = {
  
  baseStyle: {
    container: {
      bg: 'lime',
    }
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
      bg: 'red',
    sm: {
      // fontSize: 'sm',
      px: 100, // <-- px is short for paddingLeft and paddingRight
      py: 100, // <-- py is short for paddingTop and paddingBottom
      },
    md: {
      fontSize: 'md',
      px: 10, // <-- these values are tokens from the design system
      py: 10, // <-- these values are tokens from the design system
      },
    lg: {
      fontSize: 'lg',
      px: '100px', // <-- these values are tokens from the design system
      py: '100px', // <-- these values are tokens from the design system
      },
    },
  variants: {
    primary: {
      container: {
        bg: 'card-primary-default-background-color',
        color: 'card-primary-default-text-color',
        size: "lg",
      },
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
    size: "sm",
    // bg: 'lime',
  }
}

export default Card