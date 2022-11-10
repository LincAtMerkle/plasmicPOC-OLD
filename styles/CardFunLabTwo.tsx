import * as React from 'react'
import {Box, Container} from '@chakra-ui/react'

export default function CardFunLabTwo({Children, className}) {  
  return (    
    <div className={className} >
      <Box padding="0px"margin="0px">
        <Container padding="0px">
          <Box bg="#F05933" borderRadius="32px" overflow='hidden'>
            {Children}
          </Box>
        </Container>
      </Box>
    </div>
  );
}