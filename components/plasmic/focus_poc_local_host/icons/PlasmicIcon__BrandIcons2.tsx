// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandIcons2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandIcons2Icon(props: BrandIcons2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm1.542 13.333c-1 0-1.792-.792-1.792-1.792s.792-1.792 1.792-1.792 1.791.792 1.791 1.792-.791 1.792-1.791 1.792zm0-5.542c-1 0-1.792-.791-1.792-1.791 0-1 .792-1.792 1.792-1.792S15.334 7 15.334 8s-.791 1.791-1.791 1.791zm4.708 2.75c-1 0-1.792-.792-1.792-1.792s.792-1.791 1.792-1.791 1.792.792 1.792 1.791c0 1-.792 1.792-1.792 1.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandIcons2Icon;
/* prettier-ignore-end */
