import { ReactNode } from 'react';
import * as React from 'react'
import {
  Box,
  BoxProps,
  Button,
  Heading,
  Image,
  LightMode,
  Skeleton,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react'


type ImageWithOverlayProps = BoxProps & {
  title: string
  description?: string
  url?: string
  alt?: string
  src: string
  spacing?: string
  children: ReactNode
}

export default function ImageWithOverlay({
  className,
  title = "venue name",
  description,
  url,
  src = "Image.png",
  alt,
  spacing = '8',
  objectPosition = 'cover',
  children,
  ...rest
  }: ImageWithOverlayProps) {
  return (
    <Box 
      className={className}
      borderRadius="none" overflow="hidden" position="relative" width="full" {...rest}>
      <Image
        boxSize="full"
        maxHeight={{ base: '240px', md: '100%' }}
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        fallback={<Skeleton />}
      />
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, blackAlpha.300 20%, blackAlpha.700)"
        boxSize="full"
      >
        <Center height="100%">
        {children}
            {/* <Heading  size="4xl" color="white">
              {title}
            </Heading> */}
        </Center>
      </Box>
    </Box>
  )
}