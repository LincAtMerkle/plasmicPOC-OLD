import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import { ButtonProps } from "@chakra-ui/react";
import { Registerable } from "./registerable";
export declare const buttonMeta: ComponentMeta<ButtonProps>;
export declare function registerButton(loader?: Registerable, customButtonMeta?: ComponentMeta<ButtonProps>): void;
