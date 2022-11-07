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


export default function CardFunLab({ className, title, description, ButtonText }) {

  CardFunLab.defaultProps = {
    title: "title",
    description: "description",
    ButtonText: "Button",
  }
  
    return (    
      <div className={className} >
    <Box as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        // bg="bg-surface"
        bg="#F05933"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="32px"
        // p={{ base: '4', md: '6' }}
      >
        <Image width="100%" height="300px" src="Image.png"/>
        <Stack spacing="4" p={{ base: '1', md: '16' }}>
          {/* <Stack spacing="4"> */}
            
            <Text fontFamily="SignPainter HouseSlant" fontSize="50px" fontWeight="medium" color="white" lineHeight="90%">
              {title}
            </Text>
            <Text color="white" fontFamily="Albert Sans" fontSize="14px" lineHeight="140%">
              {description}
            </Text>
            <Button colorScheme="whiteAlpha" color="#2A315B" fontFamily="SignPainter HouseSlant" fontSize="20px" variant="solid">{ButtonText}</Button>
          {/* </Stack> */}
          {/* <Box fontFamily="SignPainter HouseSlant" fontSize="20px" borderWidth={{ base: '0', md: '1px' }} p={{ base: '0', md: '4' }} borderRadius="lg">
            <Stack justify="space-between" direction={{ base: 'column', md: 'row' }} spacing="5">
              <Stack spacing="3" direction={{ base: 'column-reverse', md: 'row' }}>
                <Button variant="secondary">{ButtonText}</Button>
              </Stack>
            </Stack>
          </Box> */}
        </Stack>
      </Box>
    </Container>
  </Box>
  </div>
  );
}