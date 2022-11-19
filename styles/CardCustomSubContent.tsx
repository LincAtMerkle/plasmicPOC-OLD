import { ReactNode } from 'react';
import {Heading, Text} from '@chakra-ui/react'

export interface CardCustomSubContentProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function CardCustomSubContent({
  title = "We do Parties and Functions",
  description = "Get ready for the craziest round of mini golf you've ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia."
}:CardCustomSubContentProps) {

  return (    
    <>
      <Heading 
        fontFamily="SignPainter HouseSlant" 
        fontSize="50px" 
        fontWeight="medium" 
        color="white" 
        lineHeight="90%">
        {title}
      </Heading>
      <Text 
        color="white" 
        fontFamily="Albert Sans" 
        fontSize="14px" 
        lineHeight="140%">
        {description}
      </Text>
    </>
  );
}