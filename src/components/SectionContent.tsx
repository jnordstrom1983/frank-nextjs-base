"use client"
import { OneColumnSection } from "@/sections/OneColum"
import { TwoColumnSection } from "@/sections/TwoColumn"
import { FrankContentItem, Franklanguage } from "frank-react-sdk"

export function SectionContent({ section, language }: { section: FrankContentItem, language? : Franklanguage }) {
    switch (section.contentTypeId) {
        case "twoColumnSection":
        case "sectionTwoColumnSection":
            return <TwoColumnSection item={section}></TwoColumnSection>
        case "oneColumnSection":
        case "sectionOneColumnSection":
            return <OneColumnSection item={section}></OneColumnSection>
    }
    return <div>Section not found {section.contentTypeId} </div>
}
