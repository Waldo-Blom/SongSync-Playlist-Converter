'use client';

import { useState } from 'react';
import Link from 'next/link';

// How to make a dropmenu: https://medium.com/designly/easy-dropdown-menus-with-next-js-and-tailwind-css-6ff4989ada5b

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  isActive?: boolean;
}

export function Dropdown({ title, items, isActive }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-accent text-accent-foreground'
            : 'text-foreground hover:bg-accent hover:bg-opacity-10'
        }`}
      >
        {title}
      </button>

      {/* Modal Overlay - Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}