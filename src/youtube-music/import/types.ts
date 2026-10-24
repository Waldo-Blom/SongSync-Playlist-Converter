// Platform-specific types for YouTube Music.
// The standardized playlist shape lives in src/lib/playlist-types.ts.
// Add raw YouTube Music API response types below as you build the integration.

export type {
  Track as YouTubeMusicTrack,
  PlaylistData as YouTubeMusicPlaylistData,
} from '@/lib/playlist-types';
