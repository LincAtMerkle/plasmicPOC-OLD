import { ReactNode } from 'react';
import * as React from 'react'
import {
  Tag,TagLeftIcon,TagRightIcon, TagLabel, TagCloseButton, Avatar
} from '@chakra-ui/react'
import {
  LocationPinIcon,
} from "./Icons";

export interface TagCustomProps {
  className?: string;
  size?: string;
  variant?: string;
  colorScheme?: string;
  rounded?: string;
  children: ReactNode;
  boxSize?: string;
}

export function TagCustom({
  className,
  children,
  boxSize,
}:TagCustomProps) {  
  return (
      <Tag
        className={className}
        variant='solid'
        // colorScheme = {colorScheme}
        // bg ="#fff"
        // rounded={rounded}
        // size={size}
        >
        <TagLeftIcon boxSize={boxSize} as={LocationPinIcon} />
        <TagLabel>7km</TagLabel>
      </Tag>
  );
}