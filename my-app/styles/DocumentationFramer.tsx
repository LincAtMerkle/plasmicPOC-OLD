import { useState } from "react"
import { Documentation } from "./Documentation"
import { tokenSetOrder } from "./figmaTokensChakra/$metadata.json"
import TokenDocumentation from "../../sync/components/TokenTemplate"

// This is a Component that needs to be registered so these props can be exposed:
// addPropertyControls(ChakraDocs, {
//     set: {
//         type: ControlType.Enum,
//         options: tokenSetOrder,
//         title: "Token set",
//         defaultValue: "core/color",
//         description: "Token set",
//     },
//     theme: {
//         type: ControlType.Enum,
//         title: "Theme",
//         options: ["light", "dark"],
//         defaultValue: "light",
//         description: "Theme",
//     },
//     path: {
//         type: ControlType.String,
//         title: "Tokens path",
//         defaultValue: "",
//         description: "Tokens path",
//     },
// })


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
                    ({ value, tokenName, variant, description }) => {
                        return (
                            <div style={{ padding: 8 }}>
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
                            </div>
                        )
                    }
                )
            }}
        />
        // </div>
    )
}