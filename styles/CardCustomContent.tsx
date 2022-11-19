import { ReactNode } from 'react';
import {CardBody,Divider,CardFooter,Button, Stack,Image} from '@chakra-ui/react'


export interface CardCustomContentProps {
  className?: string;
  imageSrc?: string;
  children: ReactNode;
  ButtonText?: string;
}

export default function CardCustomContent({
  children,
  ButtonText = "Book online",
  }:CardCustomContentProps) {
  return (    
    <>
      <CardBody>
        <Stack mt='6' spacing='3'>
        {children}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button 
          border="none" 
          borderRadius="32px" 
          width="136px" 
          fontFamily="SignPainter HouseSlant" 
          fontSize="20px" 
          variant="primary">
          {ButtonText}
        </Button>
      </CardFooter>
    </>
  );
}