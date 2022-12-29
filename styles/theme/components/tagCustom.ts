import { darken, mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'
  const baseStyle = {
    container: {
      textTransform: 'lowercase',
      },
  }
  const sizes = {
    sm: {
      fontSize: 'sm',
      },
    md: {
      fontSize: 'md',
      },
    lg: {
      fontSize: 'lg',
      }
  }
  const variants = {
    subtle: {
      bg: 'red',
      color: '#ffff00',
    },
    solid: {
      bg: 'red',
      color: '#ffff00',
    },
    outline: (props: StyleFunctionProps) => ({
      color: 'emphasized',
      bg: mode('white', 'gray.100')(props),
      _hover: {
        bg: mode(
          darken('gray.50', 1)(props.theme),
          transparentize('gray.700', 0.4)(props.theme),
        )(props),
      },
      _checked: {
        bg: mode('gray.100', 'gray.700')(props),
      },
      _active: {
        bg: mode('gray.100', 'gray.700')(props),
      },
    }),
  }

  const defaultProps = {
    size: 'sm', // default is md
    variant: 'outline', // default is solid
    colorScheme: 'blue', // default is gray
  }
export default {
    baseStyle,
    variants,
    sizes,
    defaultProps
  }
