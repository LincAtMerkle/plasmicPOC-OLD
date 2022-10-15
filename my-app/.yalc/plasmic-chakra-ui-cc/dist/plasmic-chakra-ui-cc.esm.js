import registerComponent from '@plasmicapp/host/registerComponent';
import { Button } from '@chakra-ui/react';

var buttonMeta = {
  name: "ChakraButton",
  importPath: "plasmic-chakra-ui-cc",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"]
    },
    variant: {
      type: "choice",
      options: ["primary"],
      defaultValue: "primary"
    },
    colorScheme: {
      type: "choice",
      options: ["whiteAlpha", "blackAlpha", "gray", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"]
    },
    iconSpacing: "number",
    isActive: {
      type: "boolean"
    },
    isDisabled: {
      type: "boolean"
    },
    isLoading: {
      type: "boolean"
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Button"
      }
    }
  }
};
function registerButton(loader, customButtonMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };

  doRegisterComponent(Button, customButtonMeta != null ? customButtonMeta : buttonMeta);
}

function registerAll(loader) {
  registerButton(loader);
}

export { registerAll };
//# sourceMappingURL=plasmic-chakra-ui-cc.esm.js.map
