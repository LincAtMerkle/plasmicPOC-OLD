import { ReactNode } from 'react';
import * as React from 'react'
import {
  Card,Image
} from '@chakra-ui/react'

export interface CardCustomProps {
  className?: string;
  imageSrc?: string;
  padding?: string;
  margin?: string;
  children: ReactNode;
}

export default function CardCustom({
  children,
  imageSrc = "Image.png",
  className,
  padding ="0px",
  margin="0px"
}:CardCustomProps) {  
  return (    
    <div className={className} >
      <Card maxW='sm' padding={padding} margin={margin} bg="#F05933" borderRadius="32px" overflow='hidden'>
        <Image src={imageSrc} />
        {children}
      </Card>
    </div>
  );
}