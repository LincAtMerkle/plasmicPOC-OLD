// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
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
          "M19.5 8.904c0-.92-.49-1.694-1.163-1.94v-.769a2.987 2.987 0 00-2.671-2.972 9.477 9.477 0 00-.233-.303C13.927 1.037 11.908 0 9.75 0 7.59 0 5.573 1.037 4.067 2.92c-.08.1-.157.2-.232.303a2.986 2.986 0 00-2.672 2.973v.769C.49 7.21 0 7.985 0 8.905c0 .918.533 1.759 1.249 1.967a2.99 2.99 0 00.82 1.432c.35 1.598 1.03 3.066 1.998 4.275 1.506 1.884 3.525 2.92 5.683 2.92 2.159 0 4.177-1.036 5.683-2.92.968-1.209 1.648-2.677 1.999-4.275a2.99 2.99 0 00.82-1.432c.715-.208 1.248-1.01 1.248-1.968zM2.758 6.195c0-.763.618-1.384 1.377-1.384h11.23c.759 0 1.377.621 1.377 1.384v3.965c0 .763-.618 1.384-1.378 1.384H4.135a1.382 1.382 0 01-1.377-1.384V6.195zM9.75 17.896c-2.562 0-4.775-1.95-5.782-4.754.055.004.111.005.167.005h11.23c.055 0 .111-.002.166-.005-1.006 2.803-3.22 4.754-5.781 4.754z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.116 5.849H5.388c-.72 0-1.303.586-1.303 1.308v2.04c0 .724.583 1.31 1.303 1.31h8.728c.72 0 1.303-.586 1.303-1.31v-2.04c0-.722-.584-1.308-1.303-1.308zm-2.579 8.423c-.464.229-1.116.36-1.79.36-.673 0-1.325-.131-1.79-.36a.796.796 0 00-1.067.366.803.803 0 00.364 1.073c.685.338 1.57.525 2.494.525.922 0 1.808-.187 2.493-.525a.804.804 0 00.364-1.073.796.796 0 00-1.068-.366z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
