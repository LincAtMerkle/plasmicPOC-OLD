// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5203IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5203Icon(props: Frame5203IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 3"}
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

      <circle
        cx={"1.253"}
        cy={"1.253"}
        r={"1.253"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"6.263"}
        cy={"1.253"}
        r={"1.253"}
        fill={"currentColor"}
      ></circle>

      <circle
        cx={"11.274"}
        cy={"1.253"}
        r={"1.253"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Frame5203Icon;
/* prettier-ignore-end */
