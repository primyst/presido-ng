"use client";
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const advanceScenario = () => {
    setCurrentEventIndex(0);
    setCurrentScenarioIndex((prev) => prev + 1);
  };

  return (
    <GameContext.Provider
      value={{
        currentScenarioIndex,
        currentEventIndex,
        advanceScenario,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
