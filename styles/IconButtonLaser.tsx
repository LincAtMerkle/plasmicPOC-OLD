import { ReactNode } from 'react';
import * as React from 'react'
import {
  IconButton,
} from '@chakra-ui/react'
import {
  LaserIcon,
} from "./Icons";

export interface IconButtonLaserProps {
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

export function IconButtonLaser({
  className,
  ariaLabel = "LaserIcon",
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
}:IconButtonLaserProps) {  
  return (
    <IconButton
      className={className}
      // ariaLabel={ariaLabel}
      fontSize={fontSize}
      isRound = {isRound}
      colorScheme = {colorScheme}
      >
        <LaserIcon fill="#D5AC4C"/>
      {/* {children} */}
      </IconButton>
  );
}