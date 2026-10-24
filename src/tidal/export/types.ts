// Platform-specific types for Tidal.
// The standardized playlist shape lives in src/lib/playlist-types.ts.
// Add raw Tidal API response types below as you build the integration.

export type {
  Track as TidalTrack,
  PlaylistData as TidalPlaylistData,
} from '@/lib/playlist-types';
