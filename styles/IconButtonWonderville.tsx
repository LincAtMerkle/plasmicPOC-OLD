import { ReactNode } from 'react';
import * as React from 'react'
import {
  IconButton,
} from '@chakra-ui/react'
import {
  WondervilleIcon,
} from "./Icons";

export interface IconButtonWondervilleProps {
  className?: string;
  ariaLabel?: string;
  colorScheme?: string;
  icon?: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRound?: boolean;
  size?: string;
  spinner?: ReactNode;
  variant?: string;
  fontSize?: string;
  children: ReactNode;
}

export function IconButtonWonderville({
  className,
  ariaLabel = "WondervilleIcon",
  colorScheme = "teal",
  isActive = true,
  isDisabled = false,
  isLoading = false,
  isRound = true,
  size = "lg",
  spinner = false,
  variant = "solid",
  fontSize = "20px",
  children,
}:IconButtonWondervilleProps) {  
  return (
    <IconButton
      className={className}
      aria-label={ariaLabel}
      fontSize={fontSize}
      isRound = {isRound}
      colorScheme = {colorScheme}
      bg="#F68AB0"
      >
        <WondervilleIcon fill="#004330"/>
      {/* {children} */}
      </IconButton>
  );
}