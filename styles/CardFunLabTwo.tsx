import { ReactNode } from 'react';
import {Box, Container} from '@chakra-ui/react'

export interface CardFunLabTwoProps {
  className?: string;
  children: ReactNode;
}

export default function CardFunLabTwo({
  children,
  className,
}:CardFunLabTwoProps) {  
  return (    
    <div className={className} >
      <Box padding="0px" margin="0px">
        <Container padding="0px">
          <Box bg="#F05933" borderRadius="32px" overflow='hidden'>
            {children}
          </Box>
        </Container>
      </Box>
    </div>
  );
}