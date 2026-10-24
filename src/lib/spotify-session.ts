// Server-side helpers for the Spotify login session (cookie-based, no database).
// Only import this from route handlers / server code.

export const COOKIES = {
  state: 'spotify_auth_state',
  returnTo: 'spotify_return_to',
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
} as const;

export const baseCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
};

// Only allow same-site relative paths, so ?returnTo= can't be used as an open redirect.
export function safeReturnTo(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) {
    return '/';
  }
  return value;
}
