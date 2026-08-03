# **SongSync – Playlist Converter**

An open-source web application designed to export and import playlists across music streaming platforms via JSON files.

**Project Status:** Work in Progress. Some of the frontend interface is completed, while backend functionality (OAuth authentication and conversion logic) is yet to be started.

 #### **Why I Built SongSync:**

I got tired of manually searching for and adding songs every time a friend shared a playlist from a different streaming service, especially for large playlists with over 500 tracks.
SongSync is my open-source solution to this problem: a tool designed to convert playlists between Spotify, YouTube Music, and Tidal using their public APIs.

>*Note: Built as a hands-on learning initiative to deepen my practical skills in Next.js, TypeScript, and React.*

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Current Implementation](#current-implementation)
- [Upcoming Development](#upcoming-development)
- [License](#license)

---

## Features

- **Playlist Export:** Export playlists from Spotify, YouTube Music, or Tidal into standardized JSON format.
- **Playlist Import:** Import structured JSON playlist files into supported music streaming services.
- **User Interface:** Responsive, dark-themed user interface.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (v16.2.12)
- **Library:** [React 19](https://react.dev/) (v19.2.4)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (v5.x)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Icons:** Hugeicons React & Lucide React

---

## Project Architecture

A simplified overview of the directory structure:

```
src/
├── app/
│   ├── page.tsx          # Homepage 
│   ├── layout.tsx        # Root layout with Navbar and main container
│   └── [platform]/       # Dynamic routes (e.g., /spotify/export, /youtube-music/import)
├── components/
│   ├── Navbar.tsx        # Top navigation with Import/Export dropdowns
│   ├── Dropdown.tsx      # Reusable custom dropdown component
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Utility functions
└── styles/               # Global CSS 
public/
└── icons/                # Service logos (youtube.svg, spotify.svg, tidal.svg)
```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed on your system:

- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: `npm`, `yarn`, or `pnpm`
- Accounts on supported platforms (Spotify, YouTube Music, Tidal) for developer API access.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Waldo-Blom/SongSync-Playlist-Converter.git
   cd SongSync-Playlist-Converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory. Add the following environment variable placeholders for future API integration:

```env
# Spotify Configuration
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# YouTube Music Configuration (Google Cloud Console)
YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret

# Tidal Configuration
TIDAL_CLIENT_ID=your_tidal_client_id
TIDAL_CLIENT_SECRET=your_tidal_client_secret
```

---

## Current Implementation

- Homepage & Navigation: The main landing page is complete, featuring dynamic routing across all pages using the Next.js App Router.

---

## Upcoming Development

- [ ] Implementation of OAuth 2.0 authentication flows for Spotify, YouTube, and Tidal.
- [ ] Development of backend API routes for playlist data extraction.
- [ ] Logic for mapping and parsing JSON representations of playlists across platforms.
- [ ] Integration of real-time API call error handling and export/import progress states.

## To DO list:

### YT Music
- [ ] Get details for .env
- [ ] Create UI for page
- [ ] Implement Import functionality
- [ ] Implement Export functionally

### Spotify
- [ ] Get details for .env
- [ ] Create UI for page
- [ ] Implement Import functionality
- [ ] Implement Export functionally

### Tidal
- [ ] Get details for .env
- [ ] Create UI for page
- [ ] Implement Import functionality
- [ ] Implement Export functionally

### Other app changes
