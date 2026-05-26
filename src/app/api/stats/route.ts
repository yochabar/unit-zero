import { NextResponse } from 'next/server';

const BLOCKSCOUT_API = 'https://explorer.unit0.dev/api/v2/stats';

export const runtime = 'edge';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(BLOCKSCOUT_API, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'upstream error' }, { status: 502 });
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return NextResponse.json({ error: 'fetch failed' }, { status: 503 });
  }
}
