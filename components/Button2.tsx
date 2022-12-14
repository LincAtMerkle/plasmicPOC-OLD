import * as React from "react";
import {
  PlasmicButton2,
  DefaultButton2Props
} from "./plasmic/focus_poc_local_host/PlasmicButton2";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button2Props extends DefaultButton2Props {}

function Button2_(props: Button2Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton2.useBehavior<Button2Props>(props, ref);
  return <PlasmicButton2 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button2Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button2Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Button2 = React.forwardRef(Button2_) as any as ButtonComponentType;

export default Object.assign(Button2, {
  __plumeType: "button"
});
