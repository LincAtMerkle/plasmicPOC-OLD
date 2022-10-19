
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import ChakraDocs  from "../styles/ChakraDocs"
// import tokenSetOrder from "../styles/figmaTokensChakra/$metadata.json"
import { Documentation } from "../styles/Documentation"

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
    

PLASMIC.registerComponent(Documentation, {
  name: 'Documentation',
  importPath: './styles/Documentation',
  props: {
    }
  }
)

PLASMIC.registerComponent(ChakraDocs, {
  name: 'ChakraDocs',
  importPath: './styles/ChakraDocs',
  props: {
      theme: {
      type: 'choice',
      title: "Theme",
      options: ["light", "dark"],
      defaultValue: "light",
      description: "Theme",
    },
    path: {
      type: 'string',
      title: "Tokens path",
      defaultValue: "",
      description: "Tokens path",
    },
    set: {
      type: 'choice',
      // options: tokenSetOrder,
      options: ["core/border",
        "core/color",
        "core/opacity",
        "core/size",
        "core/space",
        "core/typography",
        "comp/avatar",
        "comp/button",
        "comp/checkbox",
        "comp/heading",
        "comp/icon",
        "comp/icon-button",
        "comp/input",
        "comp/radio",
        "comp/select",
        "comp/switch",
        "comp/tab",
        "comp/tag",
        "comp/text",
        "comp/tooltip",
        "semantic/light",
        "semantic/dark",
        "Brand-ChakraDemo/light",
        "Brand-ChakraDemo/dark"
      ],
      title: "Token set",
      defaultValue: "core/color",
      description: "Token set",
    }
  }
});
