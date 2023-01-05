
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import { ImageWithOverlayProps } from "../../components/ImageWithOverlay";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const imageWithOverlayMeta: ComponentMeta<ImageWithOverlayProps> = {
  ...getComponentNameAndImportMeta("ImageWithOverlay"),
  props: {
    // title: {
    //   type: "string",
    //   defaultValue: "xxxxxxxx",
    // },
    // description: {
    //   type: "string",
    // },
    // url: {
    //   type: "string",
    //   defaultValue: "http://placekitten.com/200/300g",
    // },
    // alt: {
    //   type: "string",
    // },
    src: {
      type: "string",
    },
    // spacing: {
    //   type: "string",
    // },
    children: {
      type: "slot",
      defaultValue: [{
        type: "component",
        name: getPlasmicComponentName("Heading"),
        props: {size: "4xl"},
        styles: {color:"white"}
        }],
      },      
  },
};
