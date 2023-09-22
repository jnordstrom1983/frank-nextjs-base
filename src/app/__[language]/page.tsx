import { FrankClient, Franklanguage } from "frank-react-sdk"

import { Metadata } from "next"
import { Page } from "@/components/Page"

export async function generateMetadata({ params }: { params: { language: Franklanguage } }): Promise<Metadata> {
    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: "startpage",
        expand: "true",
        expandLevels: "5",
        languageId :[params.language]
    })

    return {
        title: item?.data.title || process.env.SITE_NAME || "-",
    }
}

export default async function Home({ params }: { params: { language: Franklanguage } }) {
    
    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: "startpage",
        expand: "true",
        expandLevels: "5",
        languageId :[params.language]
    })

    return item && <Page item={item} language={params.language}></Page>
}
