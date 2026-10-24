// src/tidal/export/api.ts — CLIENT-SIDE fetch functions for Tidal export.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/tidal/.

import type { PlaylistData } from '@/lib/playlist-types';

export async function exportTidalPlaylist(
  playlistId: string
): Promise<PlaylistData> {
  const response = await fetch(
    `/api/tidal/export?playlistId=${encodeURIComponent(playlistId)}`
  );
  if (!response.ok) {
    throw new Error(`Tidal export failed: ${response.statusText}`);
  }
  return response.json() as Promise<PlaylistData>;
}
