import { ReactNode } from 'react';
import * as React from 'react'
import {
  IconButton,
} from '@chakra-ui/react'
import {
  GolfIcon,
} from "./Icons";

export interface IconButtonGolfProps {
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

export function IconButtonGolf({
  className,
  ariaLabel = "GolfIcon",
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
}:IconButtonGolfProps) {  
  return (
    <IconButton
      className={className}
      aria-label={ariaLabel}
      fontSize={fontSize}
      isRound = {isRound}
      colorScheme = {colorScheme}
      bg="#28ACAF"
      >
        <GolfIcon fill="#222B5C"/>
      {/* {children} */}
      </IconButton>
  );
}