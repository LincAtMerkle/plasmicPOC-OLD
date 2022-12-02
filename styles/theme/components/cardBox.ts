
// This function creates a set of function that helps us create multipart component styles.
// const helpers = createMultiStyleConfigHelpers(['Card'])

// import { defineStyleConfig } from "@chakra-ui/system"

import { ComponentStyleConfig } from '@chakra-ui/react'

const CardBox: ComponentStyleConfig = {

  baseStyle: {
    fontWeight: 'btn-font-weight',
    width: 'auto',
    borderRadius: 'btn-border-radius',
    fontFamily: 'btn-font-family',
    border: 'btn-border-width',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    // bg: "blue"
  },
  sizes: {
    sm: {
      // fontSize: 'sm',
      px: 1, // <-- px is short for paddingLeft and paddingRight
      py: 1, // <-- py is short for paddingTop and paddingBottom
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
      bg: 'card-primary-default-background-color',
      // bg: '#ff00ff', // THIS WOrKS SO WHY NOT THE CLASS NAME


      // color: 'card-primary-default-text-color',
      color: '#ffff00',
      size: "lg",
    },
    outline: {
      // bg: 'card-primary-default-background-color',
      bg: 'blue',
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

export default CardBox