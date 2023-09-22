import { FrankClient } from "frank-react-sdk"

import { Metadata } from "next"
import { Page } from "@/components/Page"

export function generateMetadata(){
    return {
        title: `${process.env.SITE_NAME} - not found`,
    }
}

export default function NotFound() {
    return <div>Page not found</div>
    
}
