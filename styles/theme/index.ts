// theme/index.js
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: { ...proTheme.colors, brand: proTheme.colors.purple },
  },
  {
    fonts: {
      heading: "'SignPainter HouseSlant','Albert Sans','Fira CodeVariable', -apple-system, system-ui, sans-serif",
      body: "'Fira CodeVariable', -apple-system, system-ui, sans-serif",
    },
  },
  proTheme,
)

// Global style overrides
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import Button from './components/button'
import Avatar from './components/avatar'
import Checkbox from './components/checkbox'
import Tag from './components/tag'
import Switch from './components/switch'
import IconButton from './components/iconbutton'
import Heading from './components/heading'
import Text from './components/text'
import Card from './components/card'
import CardOld from './components/cardOld'
import getChakraSemanticTokens from '../getChakraSemanticTokens'
import figmaTokensJson from '../figmaTokens.json'
const semanticTokens = getChakraSemanticTokens(figmaTokensJson)

const overrides = {
  styles,
  semanticTokens,
  // Other foundational style overrides go here
  components: {
    Button,
    Avatar,
    Checkbox,
    Tag,
    Switch,
    IconButton,
    Heading,
    Text,
    Card,
    CardOld
    // Other components go here
  }
}

export default extendTheme(overrides)
