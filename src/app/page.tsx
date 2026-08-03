'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ArrowUpFromLine,
  ArrowDownToLine,
  ExternalLink,
  Music,
  Heart,
} from 'lucide-react';

const platforms = [
  { name: 'YouTube Music', key: 'youtube-music', icon: '/icons/youtube.svg', color: 'text-red-500' },
  { name: 'Spotify', key: 'spotify', icon: '/icons/spotify.svg', color: 'text-green-500' },
  { name: 'Tidal', key: 'tidal', icon: '/icons/tidal.svg', color: 'text-white' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HERO  */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,243,255,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f3ff]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff00e5]/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Why I Built </span>
            <span className="neon-text-cyan">SongSync</span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-4 text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            <p>
              I got tired of manually searching and adding every single song when a friend shared a playlist from a different streaming service, especially when it had over 500 tracks.
            </p>
            <p>
              SongSync is my open‑source answer: I plan to create a tool that converts playlists between Spotify, YouTube Music, and Tidal using their free tier for the available APIs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Export dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#00f3ff]/10 border border-[#00f3ff]/50 text-[#00f3ff] hover:bg-[#00f3ff]/20 hover:neon-glow-cyan h-12 px-8 text-base transition-all duration-300 inline-flex items-center justify-center rounded-md">
                <ArrowUpFromLine className="mr-2 h-5 w-5" />
                Export JSON
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-[#111] border-white/10">
                {platforms.map((p) => (
                  <DropdownMenuItem key={p.key} asChild>
                    <Link href={`/${p.key}/export`} className="flex items-center gap-2 text-gray-300 focus:text-white focus:bg-white/5 cursor-pointer">
                      <img src={p.icon} alt={p.name} width={18} height={18} />
                      <span className={p.color}>{p.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Import dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#ff00e5]/10 border border-[#ff00e5]/50 text-[#ff00e5] hover:bg-[#ff00e5]/20 hover:neon-glow-pink h-12 px-8 text-base transition-all duration-300 inline-flex items-center justify-center rounded-md">
                <ArrowDownToLine className="mr-2 h-5 w-5" />
                Import JSON
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-[#111] border-white/10">
                {platforms.map((p) => (
                  <DropdownMenuItem key={p.key} asChild>
                    <Link href={`/${p.key}/import`} className="flex items-center gap-2 text-gray-300 focus:text-white focus:bg-white/5 cursor-pointer">
                      <img src={p.icon} alt={p.name} width={18} height={18} />
                      <span className={p.color}>{p.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {platforms.map((p) => (
              <div key={p.key} className="flex items-center gap-2 bg-[#111] border border-white/10 rounded-lg px-4 py-2">
                <img src={p.icon} alt={p.name} width={24} height={24} />
                <span className={p.color}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>   
      </section>  

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-[#0f0f0f] border-y border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It <span className="neon-text-cyan">Works</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Three steps, export as .json, convert, and import to your target service. No copy‑pasting, no searching for songs.
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-[#00f3ff] pl-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00f3ff]/10 border border-[#00f3ff]/30 rounded-full flex items-center justify-center text-[#00f3ff] text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Export</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Choose your source platform and we’ll guide you to export a clean JSON file.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-[#ff00e5] pl-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ff00e5]/10 border border-[#ff00e5]/30 rounded-full flex items-center justify-center text-[#ff00e5] text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Convert</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  The JSON is parsed and mapped to the destination platform’s format automatically.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-[#39ff14] pl-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#39ff14]/10 border border-[#39ff14]/30 rounded-full flex items-center justify-center text-[#39ff14] text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Import</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Upload the JSON file to the target service and your playlist appears intact.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  SETUP INSTRUCTIONS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Setup <span className="neon-text-pink">Instructions</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            To use Sonsync, you’ll need API credentials for each service. Follow these guides:
          </p>

          <div className="space-y-8">
            {/* YouTube Music */}
            <div className="bg-[#111] border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/youtube.svg" alt="YouTube Music" width={32} height={32} />
                <h3 className="text-xl font-semibold text-red-500">YouTube Music</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-400">1.</span>
                 Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">2.</span>
                 Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">3.</span>
                  Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">4.</span>
                 Add instruction here (Still to be added)
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4 border-t border-white/5 pt-3">
                <span className="text-red-400">Tip:</span> Still to be added
              </p>
            </div>

            {/* Spotify */}
            <div className="bg-[#111] border border-green-500/30 rounded-xl p-6 hover:border-green-500/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/spotify.svg" alt="Spotify" width={32} height={32} />
                <h3 className="text-xl font-semibold text-green-500">Spotify</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">1.</span>
                 Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">2.</span>
                Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">3.</span>
                 Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">4.</span>
                  Add instruction here (Still to be added)
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4 border-t border-white/5 pt-3">
                <span className="text-green-400">Tip:</span> Still to be added
              </p>
            </div>

            {/* Tidal */}
            <div className="bg-[#111] border border-white/20 rounded-xl p-6 hover:border-white/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/tidal.svg" alt="Tidal" width={32} height={32} />
                <h3 className="text-xl font-semibold text-white">Tidal</h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-white">1.</span>
               Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-white">2.</span>
                  Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-white">3.</span>
                 Add instruction here (Still to be added)
                </li>
                <li className="flex gap-2">
                  <span className="text-white">4.</span>
                  Add instruction here (Still to be added)
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4 border-t border-white/5 pt-3">
                <span className="text-white">Tip:</span> Still to be added
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Once you’ve set your environment variables, restart the development server and you’re ready to go!
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Need help? Check the <a  target="_blank" rel="noopener noreferrer"href="https://github.com/Waldo-Blom/SongSync-Playlist-Converter" className="text-[#00f3ff] hover:underline">full documentation</a> 
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Music className="w-4 h-4 text-[#00f3ff]" />
            <span>Convert freely. Listen endlessly.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Waldo-Blom/SongSync-Playlist-Converter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
              {/* Inline GitHub SVG  */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-400 hover:text-white transition-colors">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
           
          </div>
        </div>
      </footer>
    </div>
  );
}