import { FrankClient } from "frank-react-sdk"

import { Metadata } from "next"
import { Page } from "../components/Page"
import { redirect } from "next/navigation"

export async function generateMetadata(): Promise<Metadata> {
    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: "startpage",
        expand: "true",
        expandLevels: "5",
    })

    return {
        title: item?.data.title || process.env.SITE_NAME || "-",
    }
}

export default async function Home() {
  
    if(process.env.DEFAULT_LANGUAGE){
      redirect(`/${process.env.DEFAULT_LANGUAGE}`)
    }


    const client = new FrankClient({})
    const item = await client.GetItem({
        slug: "startpage",
        expand: "true",
        expandLevels: "5",
    })

    return item && <Page item={item}></Page>
}
