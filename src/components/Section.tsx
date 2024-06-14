interface SectionProps {
    marginBottom?: string
    children : React.ReactNode
}

export const Section = function(props : SectionProps){
    return <div className={`mb-${props.marginBottom ?? "20"}`}>{props.children}</div>
}