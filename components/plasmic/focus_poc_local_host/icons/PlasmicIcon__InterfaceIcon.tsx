// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterfaceIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InterfaceIconIcon(props: InterfaceIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.058.833c-3.707 0-6.725 3.018-6.725 6.729 0 3.604 6.179 11.154 6.443 11.473a.365.365 0 00.564 0c.264-.32 6.446-7.869 6.446-11.473A6.735 6.735 0 0010.058.833zm0 9.842a3.117 3.117 0 01-3.113-3.113 3.117 3.117 0 013.113-3.113 3.117 3.117 0 013.113 3.113 3.117 3.117 0 01-3.113 3.113z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InterfaceIconIcon;
/* prettier-ignore-end */
