'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dropdown } from './Dropdown';

const platforms = [
  { name: 'YouTube Music', key: 'youtube-music', icon: '/icons/youtube.svg', color: 'text-red-500' },
  { name: 'Spotify', key: 'spotify', icon: '/icons/spotify.svg', color: 'text-green-500' },
  { name: 'Tidal', key: 'tidal', icon: '/icons/tidal.svg', color: 'text-white' },
];

export function Navbar() {
  const pathname = usePathname();

  const importItems = platforms.map((p) => ({
    label: p.name,
    href: `/${p.key}/import`,
    icon: p.icon,
    color: p.color,
  }));

  const exportItems = platforms.map((p) => ({
    label: p.name,
    href: `/${p.key}/export`,
    icon: p.icon,
    color: p.color,
  }));

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Import',
      dropdownItems: importItems,
    },
    {
      label: 'Export',
      dropdownItems: exportItems,
    },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            SongSync Playlist Converter
          </Link>

          <div className="flex items-center gap-3 pr-30">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              if (item.dropdownItems) {
                return (
                  <Dropdown key={index} title={item.label} items={item.dropdownItems} isActive={isActive}/>
                );
              }

              return (
                <Link key={index} href={item.href || '#'} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-accent text-accent-foreground': 'text-foreground hover:bg-accent hover:bg-opacity-10'}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}