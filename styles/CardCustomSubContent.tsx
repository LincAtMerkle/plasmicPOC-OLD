import { ReactNode } from 'react';
import {Heading, Text} from '@chakra-ui/react'

export interface CardCustomSubContentProps {
  className?: string;
  title?: string;
  description?: string;
  fontFamilyHeading?: string;
  fontSizeHeading?: string;
  fontWeightHeading?: string;
  colorHeading?: string;
  lineHeightHeading?: string;
  colorText?: string;
  fontFamilyText?: string;
  fontSizeText?: string;
  lineHeightText?: string;
  
}

export default function CardCustomSubContent({
  title = "We do Parties and Functions",
  description = "Get ready for the craziest round of mini golf you've ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia.",
  fontFamilyHeading = "SignPainter HouseSlant",
  fontSizeHeading = "50px",
  fontWeightHeading = "medium",
  colorHeading = "white",
  lineHeightHeading = "90%",
  colorText = "white",
  fontFamilyText = "Albert Sans",
  fontSizeText = "14px",
  lineHeightText = "140%",
}:CardCustomSubContentProps) {

  return (    
    <>
      <Heading 
        fontFamily={fontFamilyHeading} 
        fontSize={fontSizeHeading} 
        fontWeight={fontWeightHeading} 
        color={colorHeading} 
        lineHeight={lineHeightHeading}>
        {title}
      </Heading>
      <Text 
        color={colorText} 
        fontFamily={fontFamilyText} 
        fontSize={fontSizeText} 
        lineHeight={lineHeightText}>
        {description}
      </Text>
    </>
  );
}