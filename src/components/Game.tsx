import { useState } from "react";
import { events, applyEffects } from "../data/events";

export default function Game() {
  const [round, setRound] = useState(0);
  const [money, setMoney] = useState(100);
  const [resources, setResources] = useState(100);
  const [gameOver, setGameOver] = useState(false);

  const currentEvent = events[round];

  const handleDecision = (choice: "optionA" | "optionB") => {
    const newStats = applyEffects(
      money,
      resources,
      currentEvent,
      choice
    );
    setMoney(newStats.money);
    setResources(newStats.resources);

    if (round >= events.length - 1) {
      setGameOver(true);
    } else {
      setRound((prev) => prev + 1);
    }
  };

  if (gameOver) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Game Over</h1>
        <p className="text-lg">Final Money: ${money}</p>
        <p className="text-lg">Final Resources: {resources}</p>
      </div>
    );
  }

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
