
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import { ButtonPreviewProps } from "../components/ButtonPreview";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const buttonPreviewMeta: ComponentMeta<ButtonPreviewProps> = {
  ...getComponentNameAndImportMeta("ButtonPreview"),
  props: {
  },
};
