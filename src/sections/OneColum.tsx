import { Blocks } from "@/components/Blocks"
import { BlockSchema, FrankContentItem } from "frank-react-sdk"

interface DataFormat {
    name: string
    content: BlockSchema[]
}

export function OneColumnSection({ item }: { item: FrankContentItem }) {
    const data = item.data as DataFormat
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Blocks blocks={data.content}></Blocks>
        </div>
    )
}
