// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b6nKE7i8gN5v6BLYoUcJjc
// Component: tzuZfqunpBw6V_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ButtonGroup } from "@chakra-ui/react"; // plasmic-import: sQ_BrP3bP1kZ3/codeComponent
import { Button } from "@chakra-ui/react"; // plasmic-import: 1zjFflbhvmK0o/codeComponent
import { CheckCircleIcon } from "@chakra-ui/react"; // plasmic-import: GSuP1QQXRL2iP/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_focus_poc_local_host.module.css"; // plasmic-import: b6nKE7i8gN5v6BLYoUcJjc/projectcss
import sty from "./PlasmicButtonGroup.module.css"; // plasmic-import: tzuZfqunpBw6V_/css

export type PlasmicButtonGroup__VariantMembers = {};
export type PlasmicButtonGroup__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonGroup__VariantsArgs;
export const PlasmicButtonGroup__VariantProps = new Array<VariantPropType>();

export type PlasmicButtonGroup__ArgsType = {};
type ArgPropType = keyof PlasmicButtonGroup__ArgsType;
export const PlasmicButtonGroup__ArgProps = new Array<ArgPropType>();

export type PlasmicButtonGroup__OverridesType = {
  root?: p.Flex<"div">;
  buttonGroup?: p.Flex<typeof ButtonGroup>;
};

export interface DefaultButtonGroupProps {}

function PlasmicButtonGroup__RenderFunc(props: {
  variants: PlasmicButtonGroup__VariantsArgs;
  args: PlasmicButtonGroup__ArgsType;
  overrides: PlasmicButtonGroup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <ButtonGroup
            data-plasmic-name={"buttonGroup"}
            data-plasmic-override={overrides.buttonGroup}
            className={classNames("__wab_instance", sty.buttonGroup)}
            isAttached={false}
            isDisabled={false}
            size={"sm" as const}
            spacing={"0.5rem" as const}
          >
            <Button
              className={classNames("__wab_instance", sty.button__xwy4)}
              leftIcon={
                <CheckCircleIcon
                  className={classNames(
                    "__wab_instance",
                    sty.checkCircleIcon___5BBdc
                  )}
                />
              }
              rightIcon={
                <CheckCircleIcon
                  className={classNames(
                    "__wab_instance",
                    sty.checkCircleIcon__d4MkG
                  )}
                />
              }
              variant={"primary" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__akHdH
                )}
              >
                {"Button"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__mft2L)}
              leftIcon={
                <CheckCircleIcon
                  className={classNames(
                    "__wab_instance",
                    sty.checkCircleIcon__p5MXd
                  )}
                />
              }
              rightIcon={
                <CheckCircleIcon
                  className={classNames(
                    "__wab_instance",
                    sty.checkCircleIcon__vIWx0
                  )}
                />
              }
              variant={"primary" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1EZcg
                )}
              >
                {"Button"}
              </div>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buttonGroup"],
  buttonGroup: ["buttonGroup"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  buttonGroup: typeof ButtonGroup;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonGroup__VariantsArgs;
    args?: PlasmicButtonGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonGroup__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButtonGroup__ArgProps,
          internalVariantPropNames: PlasmicButtonGroup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButtonGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonGroup";
  } else {
    func.displayName = `PlasmicButtonGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonGroup = Object.assign(
  // Top-level PlasmicButtonGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonGroup: makeNodeComponent("buttonGroup"),

    // Metadata about props expected for PlasmicButtonGroup
    internalVariantProps: PlasmicButtonGroup__VariantProps,
    internalArgProps: PlasmicButtonGroup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicButtonGroup;
/* prettier-ignore-end */
