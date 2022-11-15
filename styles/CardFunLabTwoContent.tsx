import { ReactNode } from 'react';
import {Stack,Image} from '@chakra-ui/react'


export interface CardFunLabTwoContentProps {
  className?: string;
  imageSrc?: string;
  children: ReactNode;
}


export default function CardFunLabTwoContent({
  children,
  imageSrc,
  className, 
  }:CardFunLabTwoContentProps) {
  //@ts-ignore
  CardFunLabTwoContent.defaultProps = {
    imageSrc: "Image.png"
  }
  return (    
    <div>
      <Image alt="image" width="100%" height="192px" src={imageSrc}/>
      <Stack spacing="6" p={{ base: '5', md: '6' }}>
      {children}
      </Stack>
    </div>
  );
}