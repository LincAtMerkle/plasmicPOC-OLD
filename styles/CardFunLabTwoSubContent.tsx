import * as React from 'react'
import {Button, Text} from '@chakra-ui/react'

export default function CardFunLabTwoSubContent({Children, className, title, description, ButtonText }) {

  //@ts-ignore
  CardFunLabTwoSubContent.defaultProps = {
    title: "We do Parties and Functions",
    description: "Get ready for the craziest round of mini golf you've ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia.",
    ButtonText: "Book online",
  }
  return (    
    <div className={className} style={{backgroundColor:"red"}}>
      <Text fontFamily="SignPainter HouseSlant" fontSize="50px" fontWeight="medium" color="white" lineHeight="90%">
        {title}
      </Text>
      <Text color="white" fontFamily="Albert Sans" fontSize="14px" lineHeight="140%">
        {description}
      </Text>
      <Button width="136px" fontFamily="SignPainter HouseSlant" fontSize="20px" variant="primary">
        {ButtonText}
      </Button>
    </div>
  );
}