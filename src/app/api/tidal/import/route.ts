import { NextResponse } from 'next/server';

// Server-side route handler for tidal import.
// Runs on Node.js — safe place for secrets (client_id, client_secret, tokens).
// Client-side callers live in src/tidal/import/api.ts.

export async function POST() {
  return NextResponse.json(
    { error: 'Not implemented yet' },
    { status: 501 }
  );
}
