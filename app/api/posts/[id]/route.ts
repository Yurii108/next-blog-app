import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'




export async function DELETE(req: Request, { params }: { params: { id: string; } }) {
    const id = params.id

    const headerList = headers();
    const type = headerList.get('User-Agent');

    const cookiesList = cookies();
    const coo2 = cookiesList.get('cookie_1')?.value

    return NextResponse.json({ id, type, coo2 })
}