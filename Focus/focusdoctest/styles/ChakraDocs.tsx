import React, { useEffect, useMemo, useState } from 'react'
import { Documentation } from "./Documentation"
import TokenDocumentation from "../components/TokenDocumentation"

export default function ChakraDocs(props: JSX.IntrinsicAttributes & { set?: string; path?: string; theme?: string; render: (data: any) => JSX.Element }) {
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

    return (
        <div>
        <Documentation
            {...props}
            render={(data) => {
                console.log(data)
                return data.map(
                    ({ value, tokenName, variant, description }: any, i: any) => {
                        return (
                            <div key={`token-docs-${i}`} style={{ padding: 8 }}>
                                 <TokenDocumentation
                                    // name={value}
                                    style={{
                                        width: "100%",
                                        justifyContent: "space-between",
                                    }}
                                    onCopy={() => {
                                        onTokenCopy(value, tokenName)
                                    }}
                                    description={description}
                                    textValue={value}
                                    tokenName={tokenName}
                                    fill={value}
                                    variant={variant}
                                    borderWidth={parseInt(value)}
                                    radius={value}
                                    opacity={value}
                                    fontSize={parseInt(value)}
                                    size={parseInt(value)}
                                    copyButtonColor={
                                        copiedToken === `${tokenName}${value}`
                                            ? "#66BB66"
                                            : "#6666FF"
                                    }
                                />
                            </div>
                        )
                    }
                )
            }}
        />
        </div>
    )
}