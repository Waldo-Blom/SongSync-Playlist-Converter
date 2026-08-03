'use client';

import { useState } from 'react';
import Link from 'next/link';

// How to make a dropmenu: https://medium.com/designly/easy-dropdown-menus-with-next-js-and-tailwind-css-6ff4989ada5b

interface DropdownItem {
  label: string;
  href: string;
  icon?: string;    
  color?: string;   
}

interface DropdownProps {
  title?: string;
  trigger?: React.ReactNode;
  items: DropdownItem[];
  isActive?: boolean;               
  triggerClassName?: string;         
  contentClassName?: string;         
}

export function Dropdown({title,trigger,items,isActive,triggerClassName = '',contentClassName = ''}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTriggerClass = `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent hover:bg-opacity-10'
  }`;

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger ? (trigger) : (
          <button className={`${defaultTriggerClass} ${triggerClassName}`}>
            {title}
          </button>
        )}
      </div>

      {/* Overlay to close on outside click */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}/>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute left-0 mt-0 w-48 bg-[#111] border border-white/10 rounded-md shadow-lg z-50 ${contentClassName}`}>
          <div className="py-1">
            {items.map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors" 
                onClick={() => setIsOpen(false)}>
                {item.icon && (<img src={item.icon} alt={item.label} width={18} height={18} />)}
                <span className={item.color}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}