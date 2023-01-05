import { 
  IconProps
 } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const karaokeIconMeta: ComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("KaraokeIcon"),
  props: {
    viewBox: {
      type: "string",
      defaultValue: "0 0 32 32",
    },
    boxSize: {
      type: "string",
      defaultValue: "1em",
    },
    color: {
      type: "string",
      defaultValue: "currentColor",
    },
    focusable: {
      type: "boolean",
      defaultValue: false,
    },
    role: {
      type: "choice",
      options: [
        "presentation",
        "img"
      ],
    },
  },
}