'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

// Shared by the Spotify import and export pages.
// Clicking the button starts the OAuth flow; Spotify then sends the user back to `returnTo`.

const ERROR_MESSAGES: Record<string, string> = {
  access_denied: 'You declined access on Spotify.',
  state_mismatch: 'The security check failed. Please try connecting again.',
  missing_code: 'Spotify did not return a login code. Please try again.',
  token_exchange_failed: 'Spotify rejected the login. Please try again.',
};

export function SpotifyConnect({ returnTo }: { returnTo: string }) {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const errorCode = new URLSearchParams(window.location.search).get('spotify_error');

    fetch('/api/spotify/status')
      .then((res) => res.json())
      .then((data: { connected: boolean }) => {
        setConnected(data.connected);
        setError(errorCode);
      })
      .catch(() => {
        setConnected(false);
        setError(errorCode);
      });
  }, []);

  const connect = () => {
    window.location.assign(`/api/spotify/auth?returnTo=${encodeURIComponent(returnTo)}`);
  };

  return (
    <div className="space-y-3">
      {error && (
        <p className="text-sm text-destructive">
          {ERROR_MESSAGES[error] ?? `Spotify connection failed (${error}).`}
        </p>
      )}

      {connected === null ? (
        <Button disabled>Checking Spotify connection…</Button>
      ) : connected ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-green-500">✓ Spotify connected</span>
          <Button variant="ghost" size="sm" onClick={connect}>
            Reconnect
          </Button>
        </div>
      ) : (
        <Button onClick={connect}>Connect Spotify</Button>
      )}
    </div>
  );
}
