import React from 'react'
import {Button} from "@chakra-ui/react";
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { Button }

const code = `
  <Button variant="primary">Button</Button>
`

const ButtonPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}

export default ButtonPreview;
