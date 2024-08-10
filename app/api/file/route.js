import { promises as fs } from "fs"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

export async function POST(req) {
    const body = await req.json()
    console.log(body.data)
    // const foderPath = path.join(process.cwd(), 'app', 'blog1')
    // const filePath = path.join(foderPath, 'page.jsx')



    // await fs.rm(foderPath, { recursive: true, force: true });
    // await fs.mkdir(foderPath, { recursive: true });
    // await fs.writeFile(filePath, data, "utf8");
    return new Response(JSON.stringify({ response: '/blog1' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // const url = NextRequest.url
    // console.log(url)
    // return NextResponse.redirect('/blogs')
}

