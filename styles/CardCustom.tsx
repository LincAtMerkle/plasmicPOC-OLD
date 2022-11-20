import { ReactNode } from 'react';
import * as React from 'react'
import {
  Card,Image
} from '@chakra-ui/react'

export interface CardCustomProps {
  className?: string;
  maxW?: string;
  padding?: string;
  margin?: string;
  bg?: string;
  borderRadius?: string;
  overflow?: string;
  imageSrc?: string;
  children: ReactNode;
}

export default function CardCustom({
  className,
  maxW="sm",
  padding="0px",
  margin="0px", 
  bg="#F05933",
  borderRadius="32px",
  overflow='hidden',
  imageSrc = "Image.png",
  children,
}:CardCustomProps) {  
  return (    
    <div className={className} >
      <Card 
        maxW={maxW} 
        padding={padding}
        margin={margin} 
        bg={bg} 
        borderRadius={borderRadius} 
        overflow={overflow}
        >
        <Image src={imageSrc} />
        {children}
      </Card>
    </div>
  );
}