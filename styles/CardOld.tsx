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
} from '@chakra-ui/react'
import { FiFileText } from 'react-icons/fi'


// export default function Card(props: ButtonProps, {className}: { className?: string }) {
export default function CardOld({ className, title, description, file, size, Button1, Button2 }) {

  //@ts-ignore
  CardOld.defaultProps = {
    title: "title",
    description: "description",
    file: "file",
    size: "size",
    Button1: "Button1",
    Button2: "Button2",
  }
  
    return (    
      <div className={className} >
    <Box as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5">
        <Stack spacing="1">
            <Text fontSize="lg" fontWeight="medium">
              {title}
            </Text>
            <Text fontSize="sm" color="muted">
              {description}
            </Text>
          </Stack>
          <Box borderWidth={{ base: '0', md: '1px' }} p={{ base: '0', md: '4' }} borderRadius="lg">
            <Stack justify="space-between" direction={{ base: 'column', md: 'row' }} spacing="5">
              <HStack spacing="3">
                <Square size="10" bg="bg-subtle" borderRadius="lg">
                  <Icon as={FiFileText} boxSize="5" />
                </Square>
                <Box fontSize="sm">
                  <Text color="empahsized" fontWeight="medium">
                    {file}
                  </Text>
                  <Text color="muted">{size}</Text>
                </Box>
              </HStack>
              <Stack spacing="3" direction={{ base: 'column-reverse', md: 'row' }}>
                <Button variant="secondary">{Button1}</Button>
                <Button variant="primary">{Button2}</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
  </div>
  );
}