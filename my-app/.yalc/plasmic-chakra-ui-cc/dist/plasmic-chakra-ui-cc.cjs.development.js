'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var react = require('@chakra-ui/react');

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

  doRegisterComponent(react.Button, customButtonMeta != null ? customButtonMeta : buttonMeta);
}

function registerAll(loader) {
  registerButton(loader);
}

exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-chakra-ui-cc.cjs.development.js.map
