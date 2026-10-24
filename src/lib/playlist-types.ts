// Single source of truth for the standardized playlist JSON format.
// Every platform (Spotify, Tidal, YouTube Music) maps to/from these types.

export type Track = {
  name: string;
  artist: string;
  album?: string;
  durationMs?: number;
};

export type PlaylistData = {
  name: string;
  description?: string;
  tracks: Track[];
};

export type ImportResult = {
  importedTracks: number;
  playlistId: string;
};
