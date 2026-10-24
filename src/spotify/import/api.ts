// src/spotify/import/api.ts — CLIENT-SIDE fetch functions for Spotify import.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/spotify/.

import type { ImportResult, PlaylistData } from '@/lib/playlist-types';

export async function importSpotifyPlaylist(
  data: PlaylistData
): Promise<ImportResult> {
  const response = await fetch('/api/spotify/import', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Spotify import failed: ${response.statusText}`);
  }
  return response.json() as Promise<ImportResult>;
}
