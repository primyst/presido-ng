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
}
