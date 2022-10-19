import React, { useEffect, useMemo, useState } from 'react'
import { Documentation } from "./Documentation"
import TokenDocumentation from "../components/TokenDocumentation"

export default function ChakraDocs(props) {
    const [copiedToken, setCopiedToken] = useState("")
    const onTokenCopy = async (value, tokenName) => {
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
        <Documentation
            {...props}
            render={(data) => {
                console.log(data)
                return data.map(
                        ({ value, tokenName, variant, description }, i) => {
                        return (
                            <div key={`token-docs-${i}`} style={{ padding: "8" }}>
                                <TokenDocumentation
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
                                x
                            </div>
                        )
                    }
                )
            }}
        />
    )
}