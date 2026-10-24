// src/tidal/import/api.ts — CLIENT-SIDE fetch functions for Tidal import.
// Runs in the browser. Do NOT put secrets here.
// Server-side work lives in app/api/tidal/.

import type { ImportResult, PlaylistData } from '@/lib/playlist-types';

export async function importTidalPlaylist(
  data: PlaylistData
): Promise<ImportResult> {
  const response = await fetch('/api/tidal/import', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Tidal import failed: ${response.statusText}`);
  }
  return response.json() as Promise<ImportResult>;
}
