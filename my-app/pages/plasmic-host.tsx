
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import { registerAll} from "plasmic-chakra-ui-cc";
import { createContext, useState } from 'react';
// import extendTheme from "../styles/theme/figmaTokenTheme";

// export const ThemeContext = createContext(extendTheme);

registerAll();

export default function PlasmicHost() {
  return (
    PLASMIC && 
        <PlasmicCanvasHost />
    // PLASMIC && 
    // <ThemeContext.Provider value={{ThemeContext}}>
    //     <PlasmicCanvasHost />
    // </ThemeContext.Provider>
);
}
