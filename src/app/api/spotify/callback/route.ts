//! app/api/spotify/callback/route.ts
//* Exchanges the authorization code for tokens, stores them in httpOnly cookies,
//* then sends the user back to the page they started from.
//* https://developer.spotify.com/documentation/web-api/tutorials/code-flow

import { NextRequest, NextResponse } from 'next/server';
import { COOKIES, baseCookieOptions, safeReturnTo } from '@/lib/spotify-session';

//TODO: NBNB This route must be added to the Spotify developer dashboard under Redirect URIs
//http://127.0.0.1:3000/api/spotify/callback
export async function GET(request: NextRequest) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: 'Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET or SPOTIFY_REDIRECT_URI' },
      { status: 500 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const state = searchParams.get('state');
  const storedState = request.cookies.get(COOKIES.state)?.value;
  const returnTo = safeReturnTo(request.cookies.get(COOKIES.returnTo)?.value);

  // Send the user back to their page with an error code the UI can display.
  // Built from redirectUri so we always land on the same host that holds the cookies.
  const backWithError = (errorCode: string) => {
    const url = new URL(returnTo, redirectUri);
    url.searchParams.set('spotify_error', errorCode);
    const res = NextResponse.redirect(url);
    res.cookies.delete(COOKIES.state);
    res.cookies.delete(COOKIES.returnTo);
    return res;
  };

  if (error) return backWithError(error); // e.g. access_denied
  if (!state || !storedState || state !== storedState) return backWithError('state_mismatch');
  if (!code) return backWithError('missing_code');

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokens = await tokenResponse.json();

  if (!tokenResponse.ok) {
    // Spotify's error payload only (no tokens in it), safe to log
    console.error('Spotify token error:', tokens);
    return backWithError('token_exchange_failed');
  }

  // NEVER log tokens.
  const response = NextResponse.redirect(new URL(returnTo, redirectUri));

  response.cookies.set(COOKIES.accessToken, tokens.access_token, {
    ...baseCookieOptions,
    maxAge: tokens.expires_in, // seconds (normally 3600)
  });
  if (tokens.refresh_token) {
    response.cookies.set(COOKIES.refreshToken, tokens.refresh_token, {
      ...baseCookieOptions,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  response.cookies.delete(COOKIES.state);
  response.cookies.delete(COOKIES.returnTo);

  return response;
}