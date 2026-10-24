// src/youtube-music/import/api.ts — CLIENT-SIDE fetch functions for YouTube Music import.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/youtube-music/.

import type { ImportResult, PlaylistData } from '@/lib/playlist-types';

export async function importYouTubeMusicPlaylist(
  data: PlaylistData
): Promise<ImportResult> {
  const response = await fetch('/api/youtube-music/import', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`YouTube Music import failed: ${response.statusText}`);
  }
  return response.json() as Promise<ImportResult>;
}
