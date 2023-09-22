import { FrankClient } from "frank-react-sdk"

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Page } from "@/components/Page"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: params.slug,
        expand: "true",
        expandLevels: "5",
    })

    return {
        title: item?.data.title || process.env.SITE_NAME,
    }
}

export default async function Home({ params }: { params: { slug: string } }) {
    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: params.slug,
        expand: "true",
        expandLevels: "5",
    })

    if (!item) {
        notFound()
        return
    }

    return item && <Page item={item}></Page>
}
