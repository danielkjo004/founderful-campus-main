import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const API_URL = 'https://boards.considerapi.com/v0/jobs';
        const API_KEY = 'nbpICchucH8kTIuR43wuO5cZUiOUdklR75C4EBr2';
        const url = new URL(request.url)
        const offsetParam = url.searchParams.get("offset");
        const offset: number = offsetParam ? parseInt(offsetParam, 10) : 0;
        // console.log(offsetParam);
        const response = await fetch(`${API_URL}?offset=${offset}`, {
            method: 'GET',
            headers: {
                'X-API-Key': API_KEY,
            }
        });
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Internal Server Error' }, {status: 500});
    }
}