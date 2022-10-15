import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import {
    Button,
    ButtonProps,
  } from "@chakra-ui/react";
  import { Registerable } from "./registerable";
  
  export const buttonMeta: ComponentMeta<ButtonProps> = {
    name: "ChakraButton",
    importPath: "plasmic-chakra-ui-cc",
    props: {
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
      },
      variant: {
        type: "choice",
        options: [ "primary"],
        defaultValue: "primary",
      },
      colorScheme: {
        type: "choice",
        options: [
          "whiteAlpha",
          "blackAlpha",
          "gray",
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
      iconSpacing: "number",
      isActive: {
        type: "boolean",
      },
      isDisabled: {
        type: "boolean",
      },
      isLoading: {
        type: "boolean",
      },
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Button",
        },
      },
    },
  };
  
  export function registerButton(
    loader?: Registerable,
    customButtonMeta?: ComponentMeta<ButtonProps>
  ) {
    const doRegisterComponent: typeof registerComponent = (...args) =>
      loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Button, customButtonMeta ?? buttonMeta);
  }