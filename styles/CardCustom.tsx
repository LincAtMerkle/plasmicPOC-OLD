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
  variant?: string;
  size?: string;
  children: ReactNode;
}

export default function CardCustom({
  className,
  maxW="sm",
  padding="0px",
  margin="0px", 
  bg,
  borderRadius = "32px",
  overflow ='hidden',
  imageSrc = "Image.png",
  variant = "filled",
  size = "sm",
  children,
}:CardCustomProps) {  
  return (    
      <Card 
        className={className}
        maxW={maxW} 
        padding={padding}
        margin={margin} 
        bg={bg} 
        borderRadius={borderRadius} 
        overflow={overflow}
        variant={variant}
        size={size}
        >
        <Image alt="alt" src={imageSrc} />
        {children}
      </Card>
  );
}