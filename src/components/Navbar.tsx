'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dropdown } from './Dropdown';

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: Array<{ label: string; href: string }>;
}

export function Navbar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Import',
      dropdownItems: [
        { label: 'Spotify', href: '/spotify/import' },
        { label: 'YouTube Music', href: '/youtube-music/import' },
        { label: 'Tidal', href: '/tidal/import' },
      ],
    },
    {
      label: 'Export',
      dropdownItems: [
        { label: 'Spotify', href: '/spotify/export' },
        { label: 'YouTube Music', href: '/youtube-music/export' },
        { label: 'Tidal', href: '/tidal/export' },
      ],
    },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/App Name */}
          <Link href="/" className="text-xl font-bold">
            Sonsync Playlist Converter
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-3 pr-30">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              // Render Dropdown if item has dropdownItems
              if (item.dropdownItems) {
                return (
                  <Dropdown
                    key={index}
                    title={item.label}
                    items={item.dropdownItems}
                    isActive={isActive}
                  />
                );
              }

              // Render regular Link
              return (
                <Link
                  key={index}
                  href={item.href || '#'}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-accent hover:bg-opacity-10'
                  }`}
                >
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