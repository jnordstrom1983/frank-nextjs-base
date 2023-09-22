import { Blocks } from "@/components/Blocks"
import { Grid, GridColumn } from "@/components/Grid"
import { BlockSchema, FrankContentItem } from "frank-react-sdk"

interface DataFormat {
    name: string
    left: BlockSchema[]
    right: BlockSchema[]
    columnsLayout: string
    alignItem?: "center" | "flex-start"
    showHeadline: "yes" | "no"
}

export function TwoColumnSection({ item }: { item: FrankContentItem }) {
    const data = item.data as DataFormat
    return (
        <>
            {data.showHeadline === "yes" && <h2 style={{ textAlign: "center" }}>{data.name}</h2>}
            <Grid gap="100px" gridColumnTemplates={data.columnsLayout}>
                <GridColumn>
                    <Blocks blocks={data.left}></Blocks>
                </GridColumn>
                <GridColumn>
                    <Blocks blocks={data.right}></Blocks>
                </GridColumn>
            </Grid>
        </>
    )
}
