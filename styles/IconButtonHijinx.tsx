import { ReactNode } from 'react';
import * as React from 'react'
import {
  IconButton,
} from '@chakra-ui/react'
import {
  HijinxIcon,
} from "./Icons";

export interface IconButtonHijinxProps {
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

export function IconButtonHijinx({
  className,
  ariaLabel = "HijinxIcon",
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
}:IconButtonHijinxProps) {  
  return (
    <IconButton
      className={className}
      aria-label={ariaLabel}
      fontSize={fontSize}
      isRound = {isRound}
      colorScheme = {colorScheme}
      bg="#5B81FF"
      >
        <HijinxIcon fill="#222222"/>
      {/* {children} */}
      </IconButton>
  );
}