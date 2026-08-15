//! app/api/spotify/callback/route.ts
//* This is used to generate a token to be used later when importing and exporting playlists
//* https://developer.spotify.com/documentation/web-api/tutorials/code-flow

import { NextRequest, NextResponse } from 'next/server';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;


////TODO: NBNB This route below must be added to the developer platform in order to actaully work in the redirect URIs option
//http://127.0.0.1:3000/api/spotify/callback
export async function GET(request: NextRequest) {

  // Get the query parameters Spotify sent back
  const searchParams = request.nextUrl.searchParams;

  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // Check that our environment variables exist
  if (!clientId) {
    return NextResponse.json(
      { error: 'SPOTIFY_CLIENT_ID is not defined' },
      { status: 500 }
    );
  }

  if (!clientSecret) {
    return NextResponse.json(
      { error: 'SPOTIFY_CLIENT_SECRET is not defined' },
      { status: 500 }
    );
  }

  if (!redirectUri) {
    return NextResponse.json(
      { error: 'SPOTIFY_REDIRECT_URI is not defined' },
      { status: 500 }
    );
  }

  // Check if Spotify returned an error
  if (error) {
    return NextResponse.json(
      { error: `Spotify authorization failed: ${error}` },
      { status: 400 }
    );
  }

  // Make sure we actually received an authorization code
  if (!code) {
    return NextResponse.json(
      { error: 'No authorization code received from Spotify' },
      { status: 400 }
    );
  }

  // Encode the Client ID and Client Secret for Basic Authentication
  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString('base64');

  // Exchange the authorization code for access and refresh tokens
  const tokenResponse = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }),
    }
  );

  const tokens = await tokenResponse.json();

   // Check whether Spotify successfully returned the tokens
  if (!tokenResponse.ok) {
    console.error('Spotify token error:', tokens);

    return NextResponse.json(
      {
        error: 'Failed to exchange authorization code for tokens',
        details: tokens,
      },
      { status: tokenResponse.status }
    );
  }

  console.log('Spotify authentication successful');
  console.log('Access Token:', tokens.access_token);
  console.log('Refresh Token:', tokens.refresh_token);
  console.log('Expires in:', tokens.expires_in);
  console.log('Scope:', tokens.scope);

  return NextResponse.json({
    message: 'Spotify authentication successful',
  });

  //TODO: Implement the actaul store of the Acess token
  //TODO: Create the front end for the get access token / verify acess (Explain to the user also what they must do to get the credtials)
  //
}