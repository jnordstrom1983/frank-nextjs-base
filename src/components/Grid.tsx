
interface GridProps{
    gridColumnTemplates? : string
    gap : string,
    alignItem? : "center" | "flex-start"
    children : React.ReactNode
}

export const Grid = function(props : GridProps){
    return <div className="grid m-auto w-full" style={{
        gridTemplateColumns: props.gridColumnTemplates ?? "1fr 1fr",
        alignItems: props.alignItem ?? "center"
    }}>{props.children}</div>
}
    
export const GridColumn = function ({children} : { children : React.ReactNode}){
    return <div>{children}</div>
}


    