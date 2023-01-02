import { ReactNode } from 'react';
import * as React from 'react'
import {
  IconButton,
} from '@chakra-ui/react'
import {
  BowlingIcon,
} from "./Icons";

export interface IconButtonBowlingProps {
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

export function IconButtonBowling({
  className,
  ariaLabel = "BowlingIcon",
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
}:IconButtonBowlingProps) {  
  return (
    <IconButton
      className={className}
      // ariaLabel={ariaLabel}
      fontSize={fontSize}
      isRound = {isRound}
      colorScheme = {colorScheme}
      bg ="#FFC20E"
      >
        {/* This can use color prop not fill as created with d: ... */}
        <BowlingIcon color="#E31125"/>
      {/* {children} */}
      </IconButton>
  );
}