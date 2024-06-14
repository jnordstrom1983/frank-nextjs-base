import { Container } from "@/components/Container"
import { Menu } from "@/components/Menu"

import { FrankClient, Franklanguage } from "frank-react-sdk"
import { Poppins } from "next/font/google"
import "../globals.css"
import { revalidateTag } from "next/cache"

const popins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600"] })

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { language: Franklanguage } }) {
    process.env.NODE_ENV === "development" && revalidateTag("frank")
    const client = new FrankClient({})

    const menuItem = await client.GetItem({
        slug: "main-menu",
        expand: "true",
        expandLevels: "5",
        languageId: [params.language],
    })

    console.log({
        slug: "main-menu",
        expand: "true",
        expandLevels: "5",
        languageId: [params.language],
    })
    console.log(menuItem)

    return (
        <>
            {menuItem && <Menu item={menuItem} language={params.language}></Menu>}

            <Container>{children}</Container>
        </>
    )
}
