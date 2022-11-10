import * as React from 'react'
import {Stack,Image} from '@chakra-ui/react'

export default function CardFunLabTwoContent({Children, className, imageSrc }) {
  //@ts-ignore
  CardFunLabTwoContent.defaultProps = {
    imageSrc: "Image.png"
  }
  return (    
    <div className={className} >
      <Image width="100%" height="192px" src={imageSrc}/>
      <Stack spacing="6" p={{ base: '1', md: '6' }}>
        {Children}
      </Stack>
    </div>
  );
}