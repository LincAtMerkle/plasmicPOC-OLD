import { ReactNode } from 'react';
import * as React from 'react'
import {
  ButtonGroup 
} from '@chakra-ui/react'

export interface ButtonGroupCustomProps {
  className?: string;
  colorScheme?: string;
  isAttached?: boolean;
  isDisabled?: boolean;
  size?: string;
  spacing?: string;
  variant?: string;
  children: ReactNode;
}

export default function ButtonGroupCustom({
  className,
  colorScheme,
  isAttached,
  isDisabled, 
  size,
  spacing,
  variant,
  children,
}:ButtonGroupCustomProps) {  
  return (   
    <ButtonGroup 
      className={className} 
      spacing='1rem'
      >
      {children}
    </ButtonGroup>
  );
}