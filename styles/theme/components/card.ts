
import { ComponentStyleConfig } from '@chakra-ui/react'

const Card: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: 'card-primary-default-background-color',
      color: 'card-primary-default-text-color',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: "md",
    colorScheme: "blue"
  }
}

export default Card