import { SpotifyConnect } from '@/spotify/shared/SpotifyConnect';

export function SpotifyImportPage() {
  return (
    <div className="space-y-4 py-8">
      <h1 className="text-2xl font-bold">Spotify Import</h1>
      <p>Import your Spotify playlist here</p>
      <SpotifyConnect returnTo="/spotify/import" />
    </div>
  );
}
