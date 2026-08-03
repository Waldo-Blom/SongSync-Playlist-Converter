import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Playlist Converter',
  description: 'Convert playlists between differnt services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, "dark")}>
      <body>
        <Navbar />
        <main className="container mx-auto px-4 ">
          {children}
        </main>
      </body>
    </html>
  );
}