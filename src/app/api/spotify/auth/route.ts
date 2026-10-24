//! app/api/spotify/auth/route.ts

//* Redirects the user to Spotify to authorize this app.
//* Triggered by the "Connect Spotify" button: /api/spotify/auth?returnTo=/spotify/import
//* https://developer.spotify.com/documentation/web-api/tutorials/code-flow

import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { COOKIES, baseCookieOptions, safeReturnTo } from '@/lib/spotify-session';

const SCOPES = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
].join(' ');

export async function GET(request: NextRequest) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: 'SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI is not defined' },
      { status: 500 }
    );
  }

  // Cookies are per-hostname, so always start the flow on the same host as the redirect URI
  const redirectUrl = new URL(redirectUri);
  const requestHost = request.headers.get('host');
  if (requestHost && requestHost !== redirectUrl.host) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname + request.nextUrl.search, redirectUrl.origin)
    );
  }

  const returnTo = safeReturnTo(request.nextUrl.searchParams.get('returnTo'));

  // Random value to protect against CSRF; verified in the callback.
  const state = randomBytes(16).toString('hex');

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: SCOPES,
    redirect_uri: redirectUri,
    state,
  });

  const response = NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );

  const tenMinutes = 60 * 10;
  response.cookies.set(COOKIES.state, state, { ...baseCookieOptions, maxAge: tenMinutes });
  response.cookies.set(COOKIES.returnTo, returnTo, { ...baseCookieOptions, maxAge: tenMinutes });

  return response;
}