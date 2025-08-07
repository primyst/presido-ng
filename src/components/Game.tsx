import React, { useState } from "react";

type Stats = {
  population: number;
  economy: number;
  happiness: number;
  environment: number;
};

export default function Game() {
  const [turn, setTurn] = useState(1);
  const [stats, setStats] = useState<Stats>({
    population: 1000000,
    economy: 50,
    happiness: 50,
    environment: 50,
  });

  const handleAction = (type: keyof Stats, value: number) => {
    setStats((prev) => ({
      ...prev,
      [type]: Math.min(100, Math.max(0, prev[type] + value)),
    }));
    setTurn((prev) => prev + 1);
  };

  return (
    <main className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="text-center text-lg font-semibold">
        Turn {turn}
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <StatCard label="Population" value={stats.population.toLocaleString()} />
        <StatCard label="Economy" value={stats.economy} />
        <StatCard label="Happiness" value={stats.happiness} />
        <StatCard label="Environment" value={stats.environment} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => handleAction("economy", 10)} className="action-btn">
          Boost Economy
        </button>
        <button onClick={() => handleAction("happiness", 10)} className="action-btn">
          Improve Happiness
        </button>
        <button onClick={() => handleAction("environment", 10)} className="action-btn">
          Clean Environment
        </button>
        <button onClick={() => handleAction("population", 100000)} className="action-btn">
          Attract Population
        </button>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-md font-semibold">{label}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
