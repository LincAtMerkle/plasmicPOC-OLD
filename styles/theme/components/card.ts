
import { ComponentStyleConfig } from '@chakra-ui/react'

const Card: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: 'btn-primary-default-background-color',
      color: 'btn-primary-default-text-color',
      borderColor: 'btn-primary-default-border-color',
      iconColor:"btn-primary-default-icon-color"
    },
  },
  defaultProps: {
    variant: 'primary',
    size: "md",
    colorScheme: "blue"
  }
}

export default Card