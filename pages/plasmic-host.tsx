
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic-init';
import ChakraDocs  from "../styles/ChakraDocs";
import ButtonPreview  from "../styles/ButtonPreview";
// How do I import this? Was it there in Esthers code?
// import tokenSetOrder from "../styles/figmaTokensChakra/$metadata.json"
import { Documentation } from "../styles/Documentation";
import CardOld from "../styles/CardOld";
import CardCustom from "../styles/CardCustom";
import CardCustomContent from "../styles/CardCustomContent";
import CardCustomSubContent from "../styles/CardCustomSubContent";

import { registerComponent } from "@plasmicapp/host";
import {
  AspectRatio,
  Image,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  NumberInput,
  NumberInputField,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Code,
  Toast,
  Kbd,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Switch,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Progress,
  Tooltip,
  Heading,
  Select,
  Highlight,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  VStack,
  HStack,
  Box
} from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons";


  
  export default function PlasmicHost() {
    return PLASMIC && <PlasmicCanvasHost />;
  }
      

  registerComponent(CardOld, {
    name: 'CardOld',
    importPath: './styles/CardOld',
    props: {
      title: 'string',
      description: 'string',
      file: 'string',
      size: 'string',
      Button1: 'string',
      Button2: 'string',
      }
    }
  )

  registerComponent(Card, {
    name: 'Card',
    importPath: './styles/Card',
    props: {
      size: {
        type: "choice",
        options: ["sm", "md", "lg"],
        },
      variant: {
        type: "choice",
        options: ["elevated", "outline", "filled", "unstyled"],
        },
      children: {
        type: "slot",
        allowedComponents: ["CardBody,CardHeader, CardFooter"],
        defaultValue: [
          // {
          //   type: "component",
          //   name: "CardHeader",
          // },
          {
            type: "component",
            name: "CardBody",
          },
          {
            type: "component",
            name: "CardFooter",
          },
          ],
        },
      }
    }
  )



  registerComponent(CardHeader, {
    name: 'CardHeader',
    importPath: './CardHeader',
    props: {
      size: {
        type: 'choice',
        options: ['sm', 'md', 'lg'],
      },
      children: {
        type: 'slot',
        defaultValue: [
          {
            type: 'component',
            name: 'Heading',
          },
        ],
      },
    },
  });

  registerComponent(CardBody, {
    name: 'CardBody',
    importPath: './styles/CardBody',
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Stack", "Image"],
        defaultValue: [
          {
          type: "component",
          name: "Image",
          },
          {
            type: "component",
            name: "Stack",
            props: {
              children: 
                [
                  {type: "component", name: "Heading"},
                  {type: "component", name: "Text"},
                  {type: "component", name: "Text"}
                ]
              
            }
            }
          ]
        }
      }
    }
  )

  registerComponent(CardFooter, {
    name: 'CardFooter',
    importPath: './styles/CardFooter',
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Button"],
        defaultValue: [{
          type: "component",
          name: "Button",
          }]
        }
      }
    }
  )
  
  registerComponent(CardCustom, {
    name: 'CardCustom',
    importPath: './styles/CardCustom',
    props: {
      maxW: 'string',
      padding: 'string',
      margin: 'string',
      bg: 'string',
      borderRadius: 'string',
      overflow: 'string',
      imageSrc: 'string',
      children: {
        type: "slot",
        allowedComponents: ["CardCustomContent"],
        defaultValue: [{
          type: "component",
          name: "CardCustomContent",
          props: {
            }
          }],
        },
      }
    }
  )

  registerComponent(CardCustomContent, {
    name: 'CardCustomContent',
    importPath: './styles/CardCustomContent',
    parentComponentName: "CardCustom",
    props: {
      mt: 'string',
      spacing: 'string',
      border: 'string',
      borderRadius: 'string',
      width: 'string',
      fontFamily: 'string',
      fontSize: 'string',
      variant: 'string',
      ButtonText: 'string',
      children: {
        type: "slot",
        allowedComponents: ["CardCustomSubContent"],
        defaultValue: [{
          type: "component",
          name: "CardCustomSubContent",
          props: {
            title: "We do Parties and Functions",
            description: "Get ready for the craziest round of mini golf you've ever played! Wind your way through a tantalising labyrinth inspired by your everyday everythings with a generous slathering of nostalgia.",
          }
        }],
      },
    }
    }
  )

  registerComponent(CardCustomSubContent, {
    name: 'CardCustomSubContent',
    importPath: './styles/CardCustomSubContent',
    parentComponentName: "CardCustomContent",
    props: {
      title: 'string',
      description: 'string',
      fontFamilyHeading: 'string',
      fontSizeHeading: 'string',
      fontWeightHeading: 'string',
      colorHeading: 'string',
      lineHeightHeading: 'string',
      colorText: 'string',
      fontFamilyText: 'string',
      fontSizeText: 'string',
      lineHeightText: 'string',
    }
    }
  )


  registerComponent(Documentation, {
    name: 'Documentation',
    importPath: './styles/Documentation',
    props: {
      }
    }
  )
  
  registerComponent(ButtonPreview, {
    name: 'ButtonPreview',
    importPath: './styles/ButtonPreview',
    props: {
    }
  })

  registerComponent(ChakraDocs, {
    name: 'ChakraDocs',
    importPath: './styles/ChakraDocs',
    props: {
      theme: {
        type: 'choice',
        options: ["light", "dark"],
        description: "Theme",
      },
      path: {
        //@ts-ignore
        type: 'string',
        title: "Tokens path",
        description: "Tokens path",
      },
      set: {
        type: 'choice',
        // options: tokenSetOrder,
        options: [
          "core/border",
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
        // title: "Token set",
        description: "Token set",
      }
    }
  });

// Mr Biscuits Charkra UI registraions 

function Option({
  value,
  className,
  children,
}: {
  value:string;
  className?: string;
  children: any;

}) {
  return (
      <option className={className} value={value}>
        {children}
      </option>

  );
}



registerComponent(Image, {
name: "Image",
importPath: "@chakra-ui/react",
props: {
  src: {
    type: "string",
    defaultValue: "https://bit.ly/naruto-sage",
  },
  fallbackSrc: {
    type: "string",
    defaultValue: "https://via.placeholder.com/150",
  },
  alt: {
    type: "string",
    defaultValueHint: "name of the image",
  },
  loading: {
    type: "choice",
    options: ["lazy", "eager"],
  },
},
});

registerComponent(AspectRatio, {
name: "AspectRatio",
importPath: "@chakra-ui/react",
defaultStyles: {
  width: "320px",
},
props: {
  ratio: {
    type: "number",
    defaultValue: 1.333,
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "component",
      name: "Image",
    },
  },
},
});

registerComponent(ButtonGroup, {
name: "ButtonGroup",
importPath: "@chakra-ui/react",
props: {
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
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
    defaultValue: "md",
  },
  isAttached: {
    type: "boolean",
    defaultValue: false,
  },
  isDisabled: {
    type: "boolean",
    defaultValue: false,
  },
  spacing: {
    type: "string",
    defaultValue: "0.5rem",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "Button",
        props: {
          children: {
            type: "text",
            value: "Button 1",
          },
        },
      },
      {
        type: "component",
        name: "Button",
        props: {
          children: {
            type: "text",
            value: "Button 2",
          },
        },
      },
    ],
  },
},
});

registerComponent(Button, {
name: "Button",
importPath: "@chakra-ui/react",
parentComponentName: "ButtonGroup",
props: {
  size: {
    type: "choice",
    options: ["xs", "sm", "md", "lg"],
  },
  variant: {
    type: "choice",
    options: ["sm", "primary", "secondary", "negative", "ghost", "outline", "solid", "link", "unstyled"],
    defaultValue: "solid",
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
  leftIcon: {
    type: "slot",
    hidePlaceholder: true,
    allowedComponents: ["CheckCircleIcon"],
    defaultValue: {
      type: "component",
      name: "CheckCircleIcon",
    },
  },
  rightIcon: {
    type: "slot",
    hidePlaceholder: true,
    allowedComponents: ["CheckCircleIcon"],
    defaultValue: {
      type: "component",
      name: "CheckCircleIcon",
    },
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Button",
    },
  },
}
});


registerComponent(Stack, {
name: "Stack",
importPath: "@chakra-ui/react",
props: {
  direction: {
    type: "choice",
    options: ["row", "column"],
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
});



registerComponent(Box, {
  name: "Box",
  importPath: "@chakra-ui/react",
  props: {
    borderWidth: {
      type: "string",
      defaultValue: "1px",
    },
    p: {
      type: "string",
      defaultValue: "4",
    },
    borderRadius: {
      type: "string",
      defaultValue: "lg",
    },
    children: {
      type: "slot",
    },
  },
  });



registerComponent(Checkbox, {
name: "Checkbox",
importPath: "@chakra-ui/react",
parentComponentName: "CheckboxGroup",
props: {
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
    defaultValue: "blue",
  },
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  value: {
    type: "string",
  },
  spacing: {
    type: "string",
    defaultValue: "0.5rem",
  },
  isChecked: {
    type: "boolean",
  },
  isIndeterminate: {
    type: "boolean",
  },
  isDisabled: {
    type: "boolean",
  },
  isRequired: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Checkbox",
    },
  },
},
});

registerComponent(CheckboxGroup, {
name: "CheckboxGroup",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
    defaultValue: "md",
  },
  isDisabled: {
    type: "boolean",
  },
  children: {
    type: "slot",
    allowedComponents: ["Checkbox"],
    defaultValue: [
      {
        type: "component",
        name: "Checkbox",
        props: {
          value: "1",
          children: {
            type: "text",
            value: "Checkbox 1",
          },
        },
      },
      {
        type: "component",
        name: "Checkbox",
        props: {
          value: "2",
          children: {
            type: "text",
            value: "Checkbox 2",
          },
        },
      },
      {
        type: "component",
        name: "Checkbox",
        props: {
          value: "3",
          children: {
            type: "text",
            value: "Checkbox 3",
          },
        },
      },
    ],
  },
},
});

registerComponent(Input, {
name: "Input",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  variant: {
    type: "choice",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
  type: {
    type: "choice",
    options: [
      "text",
      "password",
      "email",
      "number",
      "search",
      "tel",
      "url",
      "date",
      "time",
      "datetime",
      "month",
      "week",
      "color",
    ],
  },
  placeholder: {
    type: "string",
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  isReadOnly: {
    type: "boolean",
  },
  isRequired: {
    type: "boolean",
  },
  errorBorderColor: {
    type: "string",
    defaultValue: "red.500",
  },
  focusBorderColor: {
    type: "string",
    defaultValue: "blue.500",
  },
},
});
registerComponent(NumberInputField, {
name: "NumberInputField",
importPath: "@chakra-ui/react",
parentComponentName: "NumberInput",
props: {},
});

registerComponent(NumberIncrementStepper, {
name: "NumberIncrementStepper",
importPath: "@chakra-ui/react",
parentComponentName: "NumberInputStepper",
props: {},
});

registerComponent(NumberDecrementStepper, {
name: "NumberDecrementStepper",
importPath: "@chakra-ui/react",
parentComponentName: "NumberInputStepper",
props: {},
});

registerComponent(NumberInputStepper, {
name: "NumberInputStepper",
importPath: "@chakra-ui/react",
parentComponentName: "NumberInput",
props: {
  children: {
    type: "slot",
    allowedComponents: ["NumberIncrementStepper", "NumberDecrementStepper"],
    defaultValue: [
      {
        type: "component",
        name: "NumberIncrementStepper",
      },
      {
        type: "component",
        name: "NumberDecrementStepper",
      },
    ],
  },
},
});

registerComponent(NumberInput, {
name: "NumberInput",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  variant: {
    type: "choice",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
  inputMode: {
    type: "choice",
    options: [
      "text",
      "search",
      "none",
      "tel",
      "url",
      "email",
      "numeric",
      "decimal",
    ],
  },
  format: {
    type: "string",
  },
  step: {
    type: "number",
  },
  precision: {
    type: "number",
  },
  max: {
    type: "number",
  },
  min: {
    type: "number",
  },
  errorBorderColor: {
    type: "string",
    defaultValue: "red.500",
  },
  focusBorderColor: {
    type: "string",
    defaultValue: "blue.500",
  },
  allowMouseWheel: {
    type: "boolean",
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  isReadOnly: {
    type: "boolean",
  },
  isRequired: {
    type: "boolean",
  },

  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "NumberInputField",
      },
      {
        type: "component",
        name: "NumberInputStepper",
      },
    ],
  },
},
});

registerComponent(PinInputField, {
name: "PinInputField",
importPath: "@chakra-ui/react",
parentComponentName: "PinInput",
props: {},
});

registerComponent(PinInput, {
name: "PinInput",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  type: {
    type: "choice",
    options: ["number", "alphanumeric"],
  },
  variant: {
    type: "choice",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
  mask: {
    type: "boolean",
    description:
      "Whether the pin input's value should be masked like `type=password`.",
  },
  manageFocus: {
    type: "boolean",
    defaultValue: true,
    description:
      "Whether the pin input should move automatically to the next input once filled.",
  },
  autoFocus: {
    type: "boolean",
    description: "Whether the pin input should be focused on mount.",
  },
  opt: {
    type: "boolean",
    description: "autocomplete=`one-time-code`",
  },
  errorBorderColor: {
    type: "string",
    defaultValue: "red.500",
  },
  focusBorderColor: {
    type: "string",
    defaultValue: "blue.500",
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },

  children: {
    type: "slot",
    allowedComponents: ["PintInputField"],
    defaultValue: [
      {
        type: "component",
        name: "PinInputField",
      },
      {
        type: "component",
        name: "PinInputField",
      },
      {
        type: "component",
        name: "PinInputField",
      },
      {
        type: "component",
        name: "PinInputField",
      },
    ],
  },
},
});
registerComponent(Radio, {
name: "Radio",
importPath: "@chakra-ui/react",
parentComponentName: "RadioGroup",
props: {
  value: {
    type: "string",
  },
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  spacing: {
    type: "string",
    defaultValue: "0.5rem",
  },
  isChecked: {
    type: "boolean",
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  isReadOnly: {
    type: "boolean",
  },
  isRequired: {
    type: "boolean",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "Radio",
      },
    ],
  },
},
});

registerComponent(RadioGroup, {
name: "RadioGroup",
importPath: "@chakra-ui/react",
props: {
  value: {
    type: "string",
  },
  size: {
    type: "choice",
    options: ["xl", "sm", "md", "lg"],
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  isReadOnly: {
    type: "boolean",
  },
  isRequired: {
    type: "boolean",
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "hbox",

      styles: {
        gap: "12px",
      },
      children: [
        {
          type: "component",
          name: "Radio",
          props: { value: "1", children: { type: "text", value: "Radio 1" } },
        },
        {
          type: "component",
          name: "Radio",
          props: { value: "2", children: { type: "text", value: "Radio 2" } },
        },
        {
          type: "component",
          name: "Radio",
          props: { value: "3", children: { type: "text", value: "Radio 3" } },
        },
      ],
    },
  },
},
});

registerComponent(Code, {
name: "Code",
importPath: "@chakra-ui/react",
props: {
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
    defaultValue: "gray",
  },
  variant: {
    type: "choice",
    options: ["solid", "subtle", "outline"],
    defaultValue: "subtle",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "Code",
      },
    ],
  },
},
});

registerComponent(Kbd, {
name: "Kbd",
importPath: "@chakra-ui/react",
displayName: "Keyboard Key",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "⌘",
      },
    ],
  },
},
});
registerComponent(StatLabel, {
name: "StatLabel",
importPath: "@chakra-ui/react",
parentComponentName: "Stat",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "StatLabel",
      },
    ],
  },
},
});

registerComponent(StatNumber, {
name: "StatNumber",
importPath: "@chakra-ui/react",
parentComponentName: "Stat",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "£345,670",
      },
    ],
  },
},
});

registerComponent(StatArrow, {
name: "StatArrow",
importPath: "@chakra-ui/react",
parentComponentName: "Stat",
props: {
  type: {
    type: "choice",
    options: ["increase", "decrease"],
  },
},
});

registerComponent(StatHelpText, {
name: "StatHelpText",
importPath: "@chakra-ui/react",
parentComponentName: "Stat",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "StatHelpText",
      },
    ],
  },
},
});

registerComponent(Stat, {
name: "Stat",
importPath: "@chakra-ui/react",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "StatLabel",
        props: { children: { type: "text", value: "Collected Fees" } },
      },
      {
        type: "component",
        name: "StatNumber",
        props: { children: { type: "text", value: "£345,670" } },
      },
      {
        type: "component",
        name: "StatHelpText",
        props: {
          children: {
            type: "hbox",
            styles: {
              alignItems: "center",
              padding: "0px",
            },
            children: [
              {
                type: "component",
                name: "StatArrow",
                props: { type: "increase" },
              },
              { type: "text", value: "Last 7 days" },
            ],
          },
        },
      },
    ],
  },
},
});
registerComponent(BreadcrumbItem, {
name: "BreadcrumbItem",
importPath: "@chakra-ui/react",
parentComponentName: "Breadcrumb",
props: {
  isCurrentPage: {
    type: "boolean",
  },
  isLastChild: {
    type: "boolean",
  },
  seperator: {
    type: "string",
    defaultValue: "/",
  },
  spacing: {
    type: "string",
    defaultValue: "8px",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "BreadcrumbLink",
        props: {
          children: {
            type: "text",
            value: "BreadcrumbItem",
          },
        },
      },
    ],
  },
},
});
registerComponent(BreadcrumbLink, {
name: "BreadcrumbLink",
importPath: "@chakra-ui/react",
parentComponentName: "BreadcrumbItem",

props: {
  href: {
    type: "string",
    defaultValue: "#",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "Home",
      },
    ],
  },
},
});
registerComponent(Breadcrumb, {
name: "Breadcrumb",
importPath: "@chakra-ui/react",
props: {
  separator: {
    type: "string",
    defaultValue: "/",
  },
  spacing: {
    type: "string",
    defaultValue: "8px",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "BreadcrumbItem",
        props: {
          children: {
            type: "component",
            name: "BreadcrumbLink",
            props: {
              children: {
                type: "text",
                value: "Home",
              },
            },
          },
        },
      },
      {
        type: "component",
        name: "BreadcrumbItem",
        props: {
          children: {
            type: "component",
            name: "BreadcrumbLink",
            props: {
              children: {
                type: "text",
                value: "Docs",
              },
            },
          },
        },
      },
      {
        type: "component",
        name: "BreadcrumbItem",
        props: {
          isLastChild: true,
          isCurrentPage: true,
          children: {
            type: "component",
            name: "BreadcrumbLink",
            props: {
              children: {
                type: "text",
                value: "Breadcrumb",
              },
            },
          },
        },
      },
    ],
  },
},
});
registerComponent(BreadcrumbSeparator, {
name: "BreadcrumbSeparator",
importPath: "@chakra-ui/react",
parentComponentName: "Breadcrumb",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "/",
    },
  },
},
});

registerComponent(Text, {
name: "Text",
importPath: "@chakra-ui/react",
props: {
  align: {
    type: "choice",
    options: ["left", "right", "center", "justify"],
    defaultValue: "left",
  },
  casing: {
    type: "choice",
    options: ["uppercase", "lowercase", "capitalise", "none"],
    defaultValue: "lowercase",
  },
  decoration: {
    type: "choice",
    options: ["underline", "line-through", "none"],
    defaultValue: "none",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "Some Text",
      },
    ],
  },
},
});

registerComponent(Table, {
name: "Table",
importPath: "@chakra-ui/react",
parentComponentName: "TableContainer",
props: {
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
    defaultValue: "gray",
  },
  size: {
    type: "choice",
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  variant: {
    type: "choice",
    options: ["simple", "striped", "unstyled"],
    defaultValue: "simple",
  },
  children: {
    type: "slot",
  },
},
});

registerComponent(TableCaption, {
name: "TableCaption",
importPath: "@chakra-ui/react",
parentComponentName: "Table",
props: {
  placement: {
    type: "choice",
    options: ["top", "bottom"],
    defaultValue: "bottom",
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Imperial to metric conversion factors",
    },
  },
},
});

registerComponent(Thead, {
name: "Thead",
importPath: "@chakra-ui/react",
parentComponentName: "Table",
props: {
  children: {
    type: "slot",

  },
},
});

registerComponent(Tbody, {
name: "Tbody",
importPath: "@chakra-ui/react",
parentComponentName: "Table",
props: {
  children: {
    type: "slot",
  },
},
});

registerComponent(Tr, {
name: "Tr",
importPath: "@chakra-ui/react",
parentComponentName: "Table",
props: {
  children: {
    type: "slot",
    allowedComponents: ["Th", "Td"],
  },
},
});

registerComponent(Td, {
name: "Td",
importPath: "@chakra-ui/react",
parentComponentName: "Tr",
props: {
  isNumeric: "boolean",
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Table Cell",
    },
  },
},
});
registerComponent(Th, {
name: "Th",
importPath: "@chakra-ui/react",
parentComponentName: "Tr",
props: {
  isNumeric: "boolean",
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Table Cell",
    },
  },
},
});

registerComponent(TableContainer, {
name: "TableContainer",
importPath: "@chakra-ui/react",
props: {
  overflowX: {
    type: "choice",
    options: ["auto", "scroll", "hidden", "visible"],
  },
  overflowY: {
    type: "choice",
    options: ["auto", "scroll", "hidden", "visible"],
  },
  whiteSpace: {
    type: "choice",
    options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
  },
  children: {
    type: "slot",
    allowedComponents: ["Table"],
    defaultValue: {
      type: "component",
      name: "Table",
      props: {
        children: [
          {
            type: "component",
            name: "Thead",
            props: {
              children: {
                type: "component",
                name: "Tr",
                props: {
                  children: [
                    {
                      type: "component",
                      name: "Th",
                      props: {
                        children: {
                          type: "text",
                          value: "TO CONVERT",
                        },
                      },
                    },
                    {
                      type: "component",
                      name: "Th",
                      props: {
                        children: {
                          type: "text",
                          value: "INTO",
                        },
                      },
                    },
                    {
                      type: "component",
                      name: "Th",
                      props: {
                        children: {
                          type: "text",
                          value: "MULTIPLY BY",
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: "component",
            name: "Tbody",
            props: {
              children: [
                {
                  type: "component",
                  name: "Tr",
                  props: {
                    children: [
                      {
                        type: "component",
                        name: "Td",
                        props: {
                          children: {
                            type: "text",
                            value: "inches",
                          },
                        },
                      },
                      {
                        type: "component",
                        name: "Td",
                        props: {
                          children: {
                            type: "text",
                            value: "millimetres (mm)",
                          },
                        },
                      },
                      {
                        type: "component",
                        name: "Td",
                        props: {
                          children: {
                            type: "text",
                            value: "25.4",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
},
});

registerComponent(TabList, {
name: "TabList",
importPath: "@chakra-ui/react",
parentComponentName: "Tabs",
props: {
  children: {
    type: "slot",
    allowedComponents: ["Tab"],
  },
},
});

registerComponent(Tabs, {
name: "Tabs",
importPath: "@chakra-ui/react",
props: {
  index: {
      type: "number",
      editOnly: true
    },
  align: {
    type: "choice",
    options: ["start", "center", "end"],
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
  orientation: {
    type: "choice",
    options: ["horizontal", "vertical"],
  },
  size: {
    type: "choice",
    options: ["sm", "md", "lg"],
  },
  variant: {
    type: "choice",
    options: [
      "line",
      "enclosed",
      "enclosed-colored",
      "soft-rounded",
      "solid-rounded",
      "unstyled",
    ],
    defaultValue: "line",
  },
  direction: {
    type: "choice",
    options: ["ltr", "rtl"],
  },
  isFitted: "boolean",
  isLazy: "boolean",
  isManual: "boolean",
  children: {
    type: "slot",
    allowedComponents: ["TabList", "TabPanels"],
    defaultValue: [
      {
        type: "component",
        name: "TabList",
        props: {
          children: [
            {
              type: "component",
              name: "Tab",
              props: {
                children: {
                  type: "text",
                  value: "Tab 1",
                },
              },
            },
            {
              type: "component",
              name: "Tab",
              props: {
                children: {
                  type: "text",
                  value: "Tab 2",
                },
              },
            },
            {
              type: "component",
              name: "Tab",
              props: {
                children: {
                  type: "text",
                  value: "Tab 3",
                },
              },
            },
          ],
        },
      },
      {
        type: "component",
        name: "TabPanels",
        props: {
          children: [
            {
              type: "component",
              name: "TabPanel",
              props: {
                children: {
                  type: "text",
                  value: "Tab 1's Panel Content",
                },
              },
            },
            {
              type: "component",
              name: "TabPanel",
              props: {
                children: {
                  type: "text",
                  value: "Tab 2's Panel Content",
                },
              },
            },
            {
              type: "component",
              name: "TabPanel",
              props: {
                children: {
                  type: "text",
                  value: "Tab 3's Panel Content",
                },
              },
            },
          ],
        },
      },
    ],
  },
},
});

registerComponent(Tab, {
name: "Tab",
importPath: "@chakra-ui/react",
parentComponentName: "TabList",
props: {
  id: "string",
  isDisabled: "boolean",
  panelId: "string",
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Tab",
    },
  },
},
});

registerComponent(TabPanels, {
name: "TabPanels",
importPath: "@chakra-ui/react",
parentComponentName: "Tabs",
props: {
  children: {
    type: "slot",
    allowedComponents: ["TabPanel"],
  },
},
});

registerComponent(TabPanel, {
name: "TabPanel",
importPath: "@chakra-ui/react",
parentComponentName: "TabPanels",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Tab Panel Content",
    },
  },
},
});
registerComponent(Switch, {
name: "Switch",
importPath: "@chakra-ui/react",
props: {
  isChecked: "boolean",
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
    defaultValue: "blue",
  },
  size: {
    type: "choice",
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  spacing: {
    type: "string",
    defaultValue: "0.5rem",
  },
  id: "string",
  isDisabled: "boolean",
  isInvalid: "boolean",
  isReadOnly: "boolean",
  isRequired: "boolean",
},
});

registerComponent(Badge, {
name: "Badge",
importPath: "@chakra-ui/react",
props: {
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
    defaultValue: "gray",
  },
  variant: {
    type: "choice",
    options: ["solid", "subtle", "outline"],
    defaultValue: "subtle",
  },
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Badge",
    },
  },
},
});

registerComponent(Popover, {
name: "Popover",
importPath: "@chakra-ui/react",
props: {
  gutter: {
    type: "number",
    defaultValue: 8,
  },
  arrowPadding: "number",
  arrowShadowColor: {
    type: "string",
    defaultValue: "rgba(0, 0, 0, 0.15)",
  },
  arrowSize: {
    type: "number",
  },
  offset: {
    type: "array",
    defaultValue: [0, 0],
  },
  closeDelay: "number",
  orientation: {
    type: "choice",
    options: ["horizontal", "vertical"],
  },
  placement: {
    type: "choice",
    options: ["top", "bottom", "left", "right"],
    defaultValue: "bottom",
  },
  direction: {
    type: "choice",
    options: ["ltr", "rtl"],
    defaultValue: "ltr",
  },
  trigger: {
    type: "choice",
    options: ["click", "hover"],
    defaultValue: "click",
  },
  isLazy: {
    type: "boolean",
  },
  isOpen: {
    type: "boolean",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "PopoverTrigger",
      },
      {
        type: "component",
        name: "PopoverContent",
      },
    ],
  },
},
});

registerComponent(PopoverContent, {
name: "PopoverContent",
importPath: "@chakra-ui/react",
parentComponentName: "Popover",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "PopoverArrow",
      },
      {
        type: "component",
        name: "PopoverCloseButton",
      },
      {
        type: "component",
        name: "PopoverHeader",
        props: {
          children: {
            type: "text",
            value: "Confirmation!",
          },
        },
      },
      {
        type: "component",
        name: "PopoverBody",
        props: {
          children: {
            type: "text",
            value: "Are you sure you want to have that milkshake?",
          },
        },
      },
    ],
  },
},
});
registerComponent(PopoverArrow, {
name: "PopoverArrow",
importPath: "@chakra-ui/react",
parentComponentName: "PopoverContent",
props: {},
});
registerComponent(PopoverCloseButton, {
name: "PopoverCloseButton",
importPath: "@chakra-ui/react",
parentComponentName: "PopoverContent",

props: {},
});
registerComponent(PopoverHeader, {
name: "PopoverHeader",
importPath: "@chakra-ui/react",
parentComponentName: "PopoverContent",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Confirmation!",
    },
  },
},
});
registerComponent(PopoverBody, {
name: "PopoverBody",
importPath: "@chakra-ui/react",
parentComponentName: "PopoverContent",

props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Are you sure you want to have that milkshake?",
    },
  },
},
});

registerComponent(PopoverTrigger, {
name: "PopoverTrigger",
importPath: "@chakra-ui/react",
parentComponentName: "Popover",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "component",
      name: "Button",
      props: {
        children: {
          type: "text",
          value: "Trigger",
        },
      },
    },
  },
},
});

registerComponent(Select, {
name: "Select",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["lg", "md", "sm", "xs"],
    defaultValue: "md",
  },
  variant: {
    type: "choice",
    options: ["outline", "filled", "flushed", "unstyled"],
    defaultValue: "outline",
  },
  placeholder: {
    type: "string",
  },
  errorBorderColor: {
    type: "string",
    defaultValueHint: "red.500",
  },
  isDisabled: {
    type: "boolean",
  },
  isInvalid: {
    type: "boolean",
  },
  isReadOnly: {
    type: "boolean",
  },
  isRequred: {
    type: "boolean",
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "Option",
        props: {
          children: {
            type: "text",
            value: "Option 01",
          },
        },
      },
      {
        type: "component",
        name: "Option",
        props: {
          children: {
            type: "text",
            value: "Option 02",
          },
        },
      },
      {
        type: "component",
        name: "Option",
        props: {
          children: {
            type: "text",
            value: "Option 03",
          },
        },
      },
    ],
  },
},
});
registerComponent(Option, {
name: "Option",
importPath: "./components/option",
parentComponentName: "Select",
props: {
  value: "string",
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Option",
    },
  },
},
});

// new
registerComponent(Tfoot, {
name: "Tfoot",
importPath: "@chakra-ui/react",
parentComponentName: "Table",
props: {
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "Tr",
        props: {
          children: [
            {
              type: "component",
              name: "Th",
              props: {
                children: {
                  type: "text",
                  value: "Name",
                },
              },
            },
          ],
        },
      },
    ],
  },
},
});

registerComponent(Highlight, {
name: "Highlight",
importPath: "@chakra-ui/react",
props: {
  children: {
    displayName: "text",
    type: "string",
    defaultValue: "With the Highlight component, you can spotlight words.",
  },
  query: {
    type: "array",
    defaultValue: ["Spotlight", "words"],
  },
  styles: {
    type: "object",
    defaultValue: {
      backgroundColor: "orange.100",
      px: "0.3em",
      py: "0.1em",
      borderRadius: "0.3em",
    },
  },
},
});

registerComponent(Heading, {
name: "Heading",
importPath: "@chakra-ui/react",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value:
        "Basic text writing, including headings, body text, lists, and more.",
    },
  },
  size: {
    type: "choice",
    options: ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"],
    defaultValue: "xl",
  },
  noOfLines: {
    type: "number",
    defaultValue: 1,
  },
},
});

registerComponent(Toast, {
name: "Toast",
importPath: "@chakra-ui/react",
props: {
  title: {
    type: "string",
    defaultValue: "Toast Title",
  },
  description: {
    type: "string",
    defaultValue: "Toast description",
  },
  variant: {
    type: "choice",
    options: ["solid", "subtle", "left-accent", "top-accent"],
  },
  duration: {
    type: "number",
    defaultValue: 5000,
  },
  isClosable: {
    type: "boolean",
  },
  position: {
    type: "choice",
    options: [
      "top",
      "top-right",
      "top-left",
      "bottom",
      "bottom-right",
      "bottom-left",
    ],
  },
  status: {
    type: "choice",
    options: ["info", "success", "warning", "error", "loading"],
  },
},
});

registerComponent(Tooltip, {
name: "Tooltip",
importPath: "@chakra-ui/react",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "component",
      name: "Button",
      props: {
        children: {
          type: "text",
          value: "Hover me",
        },
      },
    },
  },
  label: {
    type: "string",
    defaultValue: "Hi! I am a tooltip",
  },
  placement: {
    type: "choice",
    options: [
      "auto",
      "auto-start",
      "auto-end",
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "right",
      "right-start",
      "right-end",
      "left",
      "left-start",
      "left-end",
    ],
    defaultValue: "bottom",
  },
  hasArrow: "boolean",
  arrowSize: {
    type: "number",
    defaultValue: 10,
  },
  arrowShadowColor: {
    type: "string",
  },
  arrowPadding: {
    type: "number",
    defaultValue: 8,
  },
  defaultIsOpen: "boolean",

  isDisabled: "boolean",
  offset: {
    type: "array",
    defaultValue: [0, 0],
  },
  closeOnClick: {
    type: "boolean",
    defaultValue: true,
  },
  closeDelay: {
    type: "number",
    defaultValue: 0,
  },
},
});

registerComponent(AvatarBadge, {
name: "AvatarBadge",
importPath: "@chakra-ui/react",
parentComponentName: "Avatar",
props: {
  boxSize: {
    type: "string",
    defaultValue: "1.25em",
  },
  bg: {
    type: "string",
    defaultValue: "green.500",
  },
  borderColor: "string",
},
});

registerComponent(Avatar, {
name: "Avatar",
importPath: "@chakra-ui/react",
parentComponentName: "AvatarGroup",
props: {
  name: {
    type: "string",
    defaultValue: "Kola Tioluwani",
  },
  src: {
    type: "string",
    defaultValue: "https://bit.ly/dan-abramov",
  },
  size: {
    type: "choice",
    options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
  },
  loading: {
    type: "choice",
    options: ["eager", "lazy"],
  },
  showBorder: "boolean",
  children: {
    type: "slot",
    hidePlaceholder: true,
    allowedComponents: ["AvatarBadge"]
  },
},
});
registerComponent(AvatarGroup, {
name: "AvatarGroup",
importPath: "@chakra-ui/react",
props: {
  size: {
    type: "choice",
    options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
  },
  max: {
    type: "number",
    description: "The maximum number of avatars to show before truncating.",
  },
  spacing: {
    type: "string",
    defaultValue: "-0.75rem",
  },
  children: {
    type: "slot",
    allowedComponents: ["Avatar"],
    defaultValue: [
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Dan Abrahmov",
          src: "https://bit.ly/dan-abramov",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Kola Tioluwani",
          src: "https://bit.ly/tioluwani-kolawole",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Kent Dodds",
          src: "https://bit.ly/kent-c-dodds",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Ryan Florence",
          src: "https://bit.ly/ryan-florence",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Prosper Otemuyiwa",
          src: "https://bit.ly/prosper-baba",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Christian Nwamba",
          src: "https://bit.ly/code-beast",
        },
      },
      {
        type: "component",
        name: "Avatar",
        props: {
          name: "Segun Adebayo",
          src: "https://bit.ly/sage-adebayo",
        },
      },
    ],
  },
},
});

registerComponent(Accordion, {
name: "Accordion",
importPath: "@chakra-ui/react",
props: {
  allowMultiple: {
    type: "boolean",
    description:
      "If true, multiple accordion items can be expanded at the same time.",
  },
  allowToggle: {
    type: "boolean",
    description:
      "If true, an expanded accordion item can be collapsed again.",
  },
  defaultIndex: {
    type: "number",
    description:
      "The index of the accordion item that should be expanded by default.",
  },
  reduceMotion: {
    type: "boolean",
    description:
      "If true, height animation and transitions will be disabled.",
  },
  children: {
    type: "slot",
    allowedComponents: ["AccordionItem"],
    defaultValue: [
      { type: "component", name: "AccordionItem" },
      { type: "component", name: "AccordionItem" },
    ],
  },
  
},
});

registerComponent(AccordionItem, {
name: "AccordionItem",
importPath: "@chakra-ui/react",
parentComponentName: "Accordion",
props: {
  id: {
    type: "string",
    description: "The unique id of the accordion item.",
  },
  isDisabled: {
    type: "boolean",
    description: "If `true`, the accordion item will be disabled.",
  },
  isFocusable: {
    type: "boolean",
    description: "If `true`, the accordion item will be focusable.",
  },
  children: {
    type: "slot",
    allowedComponents: ["AccordionButton", "AccordionPanel"],
    defaultValue: [
      {
        type: "component",
        name: "AccordionButton",
      },
      {
        type: "component",
        name: "AccordionPanel",
      },
    ],
  },
},
});

registerComponent(AccordionButton, {
name: "AccordionButton",
importPath: "@chakra-ui/react",
parentComponentName: "AccordionItem",
props: {
  _expanded: {
    type: "object",
    displayName: "expandedStyle",
    defaultValueHint: {
      bg: "orange",
      color: "white",
    },
  },
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "text",
        value: "Section 1 title",
        styles: {
          textAlign: "left",
        },
      },
      {
        type: "component",
        name: "AccordionIcon",
      },
    ],
  },
},
});

registerComponent(AccordionPanel, {
name: "AccordionPanel",
importPath: "@chakra-ui/react",
parentComponentName: "AccordionItem",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "component",
      name: "Text",
      props: {
        children: {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      },
    },
  },
},
});

registerComponent(AccordionIcon, {
name: "AccordionIcon",
importPath: "@chakra-ui/react",
parentComponentName: "AccordionItem",
props: {
  children: 'slot',
  name: 'string'
}
});

registerComponent(CheckCircleIcon, {
  name: "CheckCircleIcon",
  importPath: "@chakra-ui/react",
  parentComponentName: "Button",
  props: {
    children: 'slot',
    name: 'string'
  }
  });

registerComponent(FormControl, {
name: "FormControl",
importPath: "@chakra-ui/react",
props: {
  label: "string",
  isDisabled: "boolean",
  isInvalid: "boolean",
  isRequired: "boolean",
  isreadOnly: "boolean",
  children: {
    type: "slot",
    defaultValue: [
      {
        type: "component",
        name: "FormLabel",
      },
      {
        type: "component",
        name: "Input",
      },
    ],
  },
},
});

registerComponent(FormLabel, {
name: "FormLabel",
importPath: "@chakra-ui/react",
parentComponentName: "FormControl",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "Label",
      styles: {
        display: "inline-block",
        width: "auto",
      },
    },
  },
},
});

registerComponent(FormHelperText, {
name: "FormHelperText",
importPath: "@chakra-ui/react",
parentComponentName: "FormControl",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "We'll never share your email.",
    },
  },
},
});

registerComponent(FormErrorMessage, {
name: "FormErrorMessage",
importPath: "@chakra-ui/react",
parentComponentName: "FormControl",
props: {
  children: {
    type: "slot",
    defaultValue: {
      type: "text",
      value: "This is an error message.",
    },
  },
},
});

registerComponent(Progress, {
name: "Progress",
importPath: "@chakra-ui/react",
props: {
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
    defaultValue: "blue",
  },
  size: {
    type: "choice",
    options: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
  },
  max: {
    type: "number",
    defaultValue: 100,
  },
  min: {
    type: "number",
    defaultValue: 0,
  },
  value: "number",
  
  isIndeterminate: {
    type: "boolean",
  },
  hasStripe: {
    type: "boolean",
  },
  isAnimated: {
    type: "boolean",
    hidden: props => !props.hasStripe
  },
},
})