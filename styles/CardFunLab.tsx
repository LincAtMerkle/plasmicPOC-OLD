import * as React from 'react'
import {
  Box,
  Button, 
  ButtonProps,
  Container,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { FiFileText } from 'react-icons/fi'


export default function CardFunLab({ className, imageSrc, title, description, ButtonText }) {

  //@ts-ignore
  CardFunLab.defaultProps = {
    title: "We do Parties and Functions",
    description: "Get ready for the craziest round of mini golf you've ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia.",
    ButtonText: "Book online",
    imageSrc: "Image.png"
  }
  
    return (    
      <div className={className} >
    <Box 
    padding="0px"
    margin="0px"
    
    >
    <Container 
    padding="0px"
    >
      <Box
        bg="#F05933"
        borderRadius="32px"
        overflow='hidden'
      >
        <Image width="100%" height="192px" src={imageSrc}/>
        <Stack spacing="6" 
        p={{ base: '1', md: '6' }}
        >
            <Text fontFamily="SignPainter HouseSlant" fontSize="50px" fontWeight="medium" color="white" lineHeight="90%">
              {title}
            </Text>
            <Text color="white" fontFamily="Albert Sans" fontSize="14px" lineHeight="140%">
              {description}
            </Text>
            <Button width="136px" fontFamily="SignPainter HouseSlant" fontSize="20px" variant="primary">
              {ButtonText}
            </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
  </div>
  );
}