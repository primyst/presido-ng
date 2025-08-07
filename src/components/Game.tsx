"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import GameDashboard from "@/components/GameDashboard";
import { useGameContext } from "@/context/GameContext";
import { scenarios } from "@/data/scenarios";
import { events } from "@/data/events";

export default function Game() {
  const { currentScenarioIndex, currentEventIndex, advanceScenario } = useGameContext();
  const currentScenario = scenarios[currentScenarioIndex];
  const currentEvent = events[currentScenario.id]?.[currentEventIndex];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 space-y-8">
        <GameDashboard
          term={currentScenario.term}
          name={currentScenario.name}
          score={currentScenario.score}
        />

        {currentEvent ? (
          <EventCard event={currentEvent} onNext={advanceScenario} />
        ) : (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold">No more events in this scenario</h2>
            <button
              onClick={advanceScenario}
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Continue to Next Scenario
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-4 border rounded shadow">
      <div className="mb-4">
        <p><strong>Round:</strong> {round + 1}/10</p>
        <p><strong>Money:</strong> ${money}</p>
        <p><strong>Resources:</strong> {resources}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Event</h2>
        <p className="italic">{currentEvent.description}</p>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => handleDecision("optionA")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          {currentEvent.optionA.label}
        </button>
        <button
          onClick={() => handleDecision("optionB")}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          {currentEvent.optionB.label}
        </button>
      </div>
    </div>
  );
}
