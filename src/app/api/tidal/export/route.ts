import { NextResponse } from 'next/server';

// Server-side route handler for tidal export.
// Runs on Node.js — safe place for secrets (client_id, client_secret, tokens).
// Client-side callers live in src/tidal/export/api.ts.

export async function GET() {
  return NextResponse.json(
    { error: 'Not implemented yet' },
    { status: 501 }
  );
}
