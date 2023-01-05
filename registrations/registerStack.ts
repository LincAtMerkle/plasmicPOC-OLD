import { StackProps } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const stackMeta: ComponentMeta<StackProps> = {
  ...getComponentNameAndImportMeta("Stack"),
  props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
      defaultValue: "row"
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
    },
  },
};
