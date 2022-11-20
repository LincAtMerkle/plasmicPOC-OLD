import { ReactNode } from 'react';
import {CardBody,Divider,CardFooter,Button, Stack,Image} from '@chakra-ui/react'


export interface CardCustomContentProps {
  className?: string;
  mt?: string;
  spacing?: string;
  children: ReactNode;
  border?: string;
  borderRadius?: string;
  width?: string;
  fontFamily?: string;
  fontSize?: string;
  variant?: string;
  ButtonText?: string;
}

export default function CardCustomContent({
  mt='6',
  spacing='3',
  children,
  border="none",
  borderRadius="32px",
  width="136px",
  fontFamily="SignPainter HouseSlant",
  fontSize="20px",
  variant="primary",
  ButtonText = "Book online",
  }:CardCustomContentProps) {
  return (    
    <>
      <CardBody>
        <Stack mt={mt} spacing={spacing}>
        {children}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button 
          border={border} 
          borderRadius={borderRadius} 
          width={width} 
          fontFamily={fontFamily} 
          fontSize={fontSize} 
          variant={variant}>
          {ButtonText}
        </Button>
      </CardFooter>
    </>
  );
}