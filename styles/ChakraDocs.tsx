import React, { useEffect, useMemo, useState } from 'react'
import { Documentation } from "./Documentation"
import TokenDocumentation from "../components/TokenDocumentation"

export default function ChakraDocs(props: JSX.IntrinsicAttributes & { 
    set?: string; path?: string; theme?: string; render: (data: any) => JSX.Element }) {
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
    console.log(`SET: ${props.set}`)
    return (
        <div>
        <Documentation
            {...props}
            set={props.set}
            render={(data) => {
                return data.map(
                    ({ value, color, tokenName, variant, description }: any, i: any) => {
                        return (
                            <div key={`token-docs-${i}`} style={{ padding: 8 }}>
                                 <TokenDocumentation
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