import { SpotifyConnect } from '@/spotify/shared/SpotifyConnect';

export function SpotifyExportPage() {
  return (
    <div className="space-y-4 py-8">
      <h1 className="text-2xl font-bold">Spotify Export</h1>
      <p>Export your playlist to Spotify</p>
      <SpotifyConnect returnTo="/spotify/export" />
    </div>
  );
}
