"use client";

import { useState } from "react";
import { initialState, applyEffects } from "@/lib/state";
import events from "@/data/events";

export default function GameDashboard() {
  const [gameState, setGameState] = useState(initialState);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const currentEvent: Event | null = events[currentEventIndex] || null;

  const handleDecision = (decision: "yes" | "no") => {
    if (!currentEvent) return;

    const newState = applyEffects(gameState, currentEvent.effects[decision]);
    setGameState(newState);

    const nextIndex = currentEventIndex + 1;

    if (nextIndex >= events.length) {
      setGameOver(true);
    } else {
      setCurrentEventIndex(nextIndex);
    }
  };

  const handleRestart = () => {
    setGameState(initialState);
    setCurrentEventIndex(0);
    setGameOver(false);
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Mr. President 🇳🇬</h1>

      {gameOver ? (
        <div className="text-center space-y-4">
          <p className="text-lg">Game Over!</p>
          <p>
            Final Score:
            <br />
            Economy: {gameState.economy}, Security: {gameState.security}, 
            Health: {gameState.health}, Education: {gameState.education}, 
            Resources: {gameState.resources}, Money: ₦{gameState.money}
          </p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Restart Game
          </button>
        </div>
      ) : (
        <>
          <section className="mb-6 space-y-2 border p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">National Status</h2>
            <ul className="space-y-1">
              <li>💰 Money: ₦{gameState.money}</li>
              <li>🛢️ Resources: {gameState.resources}</li>
              <li>📊 Economy: {gameState.economy}</li>
              <li>🛡️ Security: {gameState.security}</li>
              <li>🏥 Health: {gameState.health}</li>
              <li>🎓 Education: {gameState.education}</li>
            </ul>
          </section>

          {currentEvent && (
            <section className="space-y-4 border p-4 rounded-md shadow">
              <h2 className="text-lg font-bold">Event {currentEventIndex + 1}</h2>
              <p>{currentEvent.description}</p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleDecision("yes")}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecision("no")}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
