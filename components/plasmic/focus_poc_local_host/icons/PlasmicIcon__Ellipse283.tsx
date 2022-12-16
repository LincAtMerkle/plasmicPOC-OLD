// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse283IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse283Icon(props: Ellipse283IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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

      <ellipse
        cx={"1.558"}
        cy={"1.556"}
        rx={"1.558"}
        ry={"1.556"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse283Icon;
/* prettier-ignore-end */
