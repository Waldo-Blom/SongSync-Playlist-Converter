// Platform-specific types for Spotify.
// The standardized playlist shape lives in src/lib/playlist-types.ts.
// Add raw Spotify API response types below as you build the integration.

export type {
  Track as SpotifyTrack,
  PlaylistData as SpotifyPlaylistData,
} from '@/lib/playlist-types';
