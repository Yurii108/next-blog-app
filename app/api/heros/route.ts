import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const _apiKey = process.env.HEROS_MARVEL
    const offset = '415';

    const heros = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=${_apiKey}`).then((res) => res.json())

    return NextResponse.json(heros)
}