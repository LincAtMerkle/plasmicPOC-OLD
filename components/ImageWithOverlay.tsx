import { ReactNode } from 'react';
import * as React from 'react'
import {
  ImageProps,
  Image,
  Box,
  BoxProps,
  Skeleton,
  Center,
} from '@chakra-ui/react'

export type ImageWithOverlayProps = BoxProps & {
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
        src = "http://placekitten.com/200/300"
        alt = "image"
        objectFit = "cover"
        objectPosition = 'cover'
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
        </Center>
      </Box>
      </Box>
  )
}