// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse329IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse329Icon(props: Ellipse329IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"4.952"}
        cy={"4.949"}
        rx={"2.952"}
        ry={"2.949"}
        stroke={"currentColor"}
        strokeWidth={"3.518"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse329Icon;
/* prettier-ignore-end */
