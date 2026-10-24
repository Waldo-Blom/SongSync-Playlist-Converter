import { NextRequest, NextResponse } from 'next/server';
import { COOKIES } from '@/lib/spotify-session';

// Lets the browser ask "is this user connected to Spotify?" without ever seeing the tokens.
export async function GET(request: NextRequest) {
  const connected = Boolean(
    request.cookies.get(COOKIES.accessToken)?.value ||
      request.cookies.get(COOKIES.refreshToken)?.value
  );
  return NextResponse.json({ connected });
}
