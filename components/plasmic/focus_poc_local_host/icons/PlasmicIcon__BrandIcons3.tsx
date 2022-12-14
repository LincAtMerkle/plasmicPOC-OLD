// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandIcons3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandIcons3Icon(props: BrandIcons3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
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

      <g clipPath={"url(#WeaY8UpshJa)"} fill={"currentColor"}>
        <path
          d={
            "M1.17 16.488l9.927 4.688c.397.19.83.29 1.267.29a2.963 2.963 0 001.305-.31l9.454-4.672a.714.714 0 00.302-.272.737.737 0 00.11-.395.747.747 0 00-.111-.395.724.724 0 00-.3-.272l-9.063-4.47V8.094a4.169 4.169 0 001.773-1.567c.431-.686.66-1.484.657-2.3a4.287 4.287 0 00-1.214-2.996A4.1 4.1 0 0012.345-.01c-1.1 0-2.155.446-2.933 1.24a4.291 4.291 0 00-1.217 2.998c0 .85.25 1.68.718 2.382a4.159 4.159 0 001.905 1.556v2.417l-9.643 4.562a.728.728 0 00-.307.273.751.751 0 00-.114.399.737.737 0 00.11.399c.074.12.18.214.306.272zm10.59-8.056a4.085 4.085 0 001.352-.029v6.109a.7.7 0 01-.199.489.669.669 0 01-.956 0 .699.699 0 01-.198-.49V8.433zm-5.224 5.882c1.163 0 2.099.628 2.099 1.406 0 .778-.946 1.401-2.1 1.401-1.153 0-2.098-.628-2.098-1.401s.94-1.406 2.099-1.406z"
          }
        ></path>

        <path
          d={
            "M23.53 17.243a.122.122 0 00-.056-.101.117.117 0 00-.114-.006l-1.153.633-8.438 4.35a2.997 2.997 0 01-2.709.038l-9.038-4.349-1.13-.594a.097.097 0 00-.096.006.101.101 0 00-.046.085v1.576a.737.737 0 00.112.4c.075.12.182.214.309.272l9.927 4.687a2.952 2.952 0 002.572-.02l9.454-4.672a.719.719 0 00.301-.272.742.742 0 00.11-.395l-.005-1.638z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"WeaY8UpshJa"}>
          <path fill={"currentColor"} d={"M0 0h24v24.536H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BrandIcons3Icon;
/* prettier-ignore-end */
