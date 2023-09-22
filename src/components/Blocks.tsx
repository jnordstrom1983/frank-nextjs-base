import { BlockSchema, Blocks as FrankBlocks } from "frank-react-sdk"

export function Blocks({blocks} : { blocks : BlockSchema[]}){
    return <FrankBlocks value={blocks} renderMarkdown={true}></FrankBlocks>
}