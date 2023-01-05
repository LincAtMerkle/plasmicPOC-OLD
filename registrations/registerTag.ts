import { 
  TagProps,
  TagLabelProps,
  IconProps,
  TagCloseButtonProps
 } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const tagMeta: ComponentMeta<TagProps> = {
  ...getComponentNameAndImportMeta("Tag"),
  props: {
    spacing: {
      type: "string",
      defaultValue: "24px",
    },
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["primary", "subtle", "solid", "outline", "unstyled"],
    },
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    borderRadius: {
      type: "string",
    },
    children: {
      type: "slot",
      allowedComponents: [
        getPlasmicComponentName("TagLeftIcon"), 
        getPlasmicComponentName("TagLabel"), 
        getPlasmicComponentName("TagRightIcon"), 
        getPlasmicComponentName("TagCloseButton")],
      defaultValue: [
        { type: "component", name: getPlasmicComponentName("TagLeftIcon") },
        { type: "component", name: getPlasmicComponentName("TagLabel"), props: { children: { type: "text", value: "Tag" } }, },        
        { type: "component", name: getPlasmicComponentName("TagRightIcon") },
        { type: "component", name: getPlasmicComponentName("TagCloseButton") },
      ],
    },
  },
};

export const tagLeftIconMeta: ComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("TagLeftIcon"),
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: getPlasmicComponentName("GolfIcon"),
      }],
    },
  },
};

export const tagLabelMeta: ComponentMeta<TagLabelProps> = {
  ...getComponentNameAndImportMeta("TagLabel"),
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "TagLabel",
        },
      ],
    },
  },
};

export const tagRightIconMeta: ComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("TagRightIcon"),
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: getPlasmicComponentName("GolfIcon"),
      }],
    },
  },
};

export const tagCloseButtonMeta: ComponentMeta<TagCloseButtonProps> = {
  ...getComponentNameAndImportMeta("TagCloseButton"),
  props: {
  },
};