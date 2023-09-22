import { NextResponse } from "next/server";
import { revalidateTag } from 'next/cache'

export const dynamic = 'force-dynamic'

export function GET(){

    revalidateTag("frank")

    return NextResponse.json({})
}