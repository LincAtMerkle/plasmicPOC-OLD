'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var react = require('@chakra-ui/react');

//     name: "ButtonGroup",
//     importPath: "@chakra-ui/react",
//     props: {
//       colorScheme: {
//         type: "choice",
//         options: [
//           "whiteAlpha",
//           "blackAlpha",
//           "gray",
//           "red",
//           "orange",
//           "yellow",
//           "green",
//           "teal",
//           "blue",
//           "cyan",
//           "purple",
//           "pink",
//           "linkedin",
//           "facebook",
//           "messenger",
//           "whatsapp",
//           "twitter",
//           "telegram",
//         ],
//       },
//       size: {
//         type: "choice",
//         options: ["xl", "sm", "md", "lg"],
//         defaultValue: "md",
//       },
//       isAttached: {
//         type: "boolean",
//         defaultValue: false,
//       },
//       isDisabled: {
//         type: "boolean",
//         defaultValue: false,
//       },
//       spacing: {
//         type: "string",
//         defaultValue: "0.5rem",
//       },
//       children: {
//         type: "slot",
//         defaultValue: [
//           {
//             type: "component",
//             name: "Button",
//             props: {
//               children: {
//                 type: "text",
//                 value: "Button 1",
//               },
//             },
//           },
//           {
//             type: "component",
//             name: "Button",
//             props: {
//               children: {
//                 type: "text",
//                 value: "Button 2",
//               },
//             },
//           },
//         ],
//       },
//     },
//   };
//   export function registerButtonGroup(
//     loader?: Registerable,
//     customButtonGroupMeta?: ComponentMeta<ButtonGroupProps>
//   ) {
//     const doRegisterComponent: typeof registerComponent = (...args) =>
//       loader ? loader.registerComponent(...args) : registerComponent(...args);
//     doRegisterComponent(ButtonGroup, customButtonGroupMeta ?? buttonGroupMeta);
//   }

var buttonMeta = {
  name: "ChakraButton",
  importPath: "plasmic-chakra-ui-cc",
  // parentComponentName: "ButtonGroup",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"]
    },
    variant: {
      type: "choice",
      options: ["ghost", "outline", "solid", "link", "unstyled"],
      defaultValue: "solid"
    },
    colorScheme: {
      type: "choice",
      options: ["whiteAlpha", "blackAlpha", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink", "linkedin", "facebook", "messenger", "whatsapp", "twitter", "telegram"]
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
