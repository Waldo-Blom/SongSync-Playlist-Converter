//! app/api/spotify/auth/route.ts

//* This is used to redirect the user to authenticate their developer platform
//* https://developer.spotify.com/documentation/web-api/tutorials/code-flow

import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;


//http://127.0.0.1:3000/api/spotify/auth
export async function GET() {
  if (!clientId || !redirectUri) {
    throw new Error('SPOTIFY_CLIENT_ID is not defined');
  }

  // Define the scope (adjust as needed)
  const scope = 'user-read-private user-read-email';

console.log('CLIENT ID:', clientId);
console.log('REDIRECT URI:', JSON.stringify(redirectUri));

  // Build the query parameters using URLSearchParams
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri
  });

  // Redirect to Spotify's authorization endpoint
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  return NextResponse.redirect(spotifyAuthUrl);
}