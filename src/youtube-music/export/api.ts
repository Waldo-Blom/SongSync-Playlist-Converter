// src/youtube-music/export/api.ts — CLIENT-SIDE fetch functions for YouTube Music export.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/youtube-music/.

import type { PlaylistData } from '@/lib/playlist-types';

export async function exportYouTubeMusicPlaylist(
  playlistId: string
): Promise<PlaylistData> {
  const response = await fetch(
    `/api/youtube-music/export?playlistId=${encodeURIComponent(playlistId)}`
  );
  if (!response.ok) {
    throw new Error(`YouTube Music export failed: ${response.statusText}`);
  }
  return response.json() as Promise<PlaylistData>;
}
