// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse383IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse383Icon(props: Ellipse383IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
        cx={"7.527"}
        cy={"7.522"}
        rx={"4.527"}
        ry={"4.522"}
        stroke={"currentColor"}
        strokeWidth={"5"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse383Icon;
/* prettier-ignore-end */
