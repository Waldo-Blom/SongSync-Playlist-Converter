// src/spotify/export/api.ts — CLIENT-SIDE fetch functions for Spotify export.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/spotify/.

import type { PlaylistData } from '@/lib/playlist-types';

export async function exportSpotifyPlaylist(
  playlistId: string
): Promise<PlaylistData> {
  const response = await fetch(
    `/api/spotify/export?playlistId=${encodeURIComponent(playlistId)}`
  );
  if (!response.ok) {
    throw new Error(`Spotify export failed: ${response.statusText}`);
  }
  return response.json() as Promise<PlaylistData>;
}
