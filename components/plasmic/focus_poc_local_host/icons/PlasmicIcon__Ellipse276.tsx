// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse276IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse276Icon(props: Ellipse276IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 38"}
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
        opacity={".4"}
        cx={"8.732"}
        cy={"18.695"}
        rx={"8.732"}
        ry={"18.695"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse276Icon;
/* prettier-ignore-end */
