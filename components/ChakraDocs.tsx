import React, { useEffect, useMemo, useState } from 'react'
import { Documentation } from "./Documentation"
import TokenDocumentation from "./TokenDocumentation"

export type ChakraDocsProps = JSX.IntrinsicAttributes & {
    set?: string
    path?: string
    theme?: string
    className?: string;
  }

export default function ChakraDocs({ set, path, theme, className}: ChakraDocsProps, render: (data: any) => JSX.Element ){; 
    {
        const [copiedToken, setCopiedToken] = useState("")
        const onTokenCopy = async (value: string, tokenName: any) => {
            if (!navigator?.clipboard) {
                alert("Clipboard not supported")
            }

            try {
                await navigator.clipboard.writeText(value)
                setCopiedToken(`${tokenName}${value}`)
            } catch (error) {
                alert("Error copying value")
            }
        }
        console.log(`SET: ${set}`)
        return (
            <div className={className}>
            <Documentation
                set={set}
                render={(data) => {
                    return data.map(
                        ({ value, color, tokenName, variant, description }: any, i: any) => {
                            return (
                                <div key={`token-docs-${i}`} style={{ padding: 8 }}>
                                    <TokenDocumentation
                                        //@ts-ignore
                                        tokenName={tokenName}
                                        textValue={value}
                                        description={description}
                                        color={{ props: { style: { backgroundColor: value } } }}                               />
                                </div>
                            )
                        }
                    )
                }}
            />
            </div>
        )
    }
}