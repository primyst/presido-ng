'use client';
import React from 'react';
import Game from './Game';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🇳🇬 President Survival Game</h1>
      <Game />
    </main>
  );
}
