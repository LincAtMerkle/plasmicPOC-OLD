import { ReactNode } from 'react';
import * as React from 'react'
import {
  Box,
  Image, 
  Button
} from '@chakra-ui/react'

export interface CardOldProps {
  className?: string;
  bg?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  mt?: string;
  spacing?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  fontFamily?: string;
  fontSize?: string;
  variant?: string;
  buttonText?: string;
  children: ReactNode;
}


export default function CardOld({
  className,
  bg = "lime",
  imageUrl = 'Image.png',
  title = 'We do Parties and Functions',
  description = 'Get ready for the craziest round of mini golf youve ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia',
  mt = '6',
  spacing = '3',
  border = "none",
  borderRadius = "32px",
  width = "136px",
  fontFamily = "SignPainter HouseSlant",
  fontSize = "20px",
  variant = "primary",
  buttonText = "Book online",

}:CardOldProps) {
  return (
    <div className={className}>
      <Box bg={bg} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={imageUrl} alt="alt" />
        <Box p={mt}>
          <Box
            mt={mt}
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {title}
          </Box>
          <Box>
            {description}
          </Box>
          <Button 
            border={border} 
            borderRadius={borderRadius} 
            width={width} 
            fontFamily={fontFamily} 
            fontSize={fontSize} 
            variant={variant}>
            {buttonText}
          </Button>
        </Box>
      </Box>
    </div>
  )
}