
import { ComponentStyleConfig } from '@chakra-ui/react'

const CardCustom: ComponentStyleConfig = {

  baseStyle: {
    bg: 'card-primary-default-background-color',
  },
  
  variants: {
    primary: {
      bg: 'card-primary-default-background-color',
      color: 'card-primary-default-text-color',
    },
  },
  defaultProps: {
    variant: 'fill',
    size: "md",
    colorScheme: "blue",
    bg: "#ff00ff",
  }
}

export default CardCustom